import pool from './Database/config.js'
import bcrypt from 'bcrypt'
import express from 'express'


export const app = express.Router()

// Display welcome message on the root
app.get('/', (request, response) => {
  response.send({
    message: 'Auth to the Node.js Express REST API!'
  })
})

app.post('/auth', (req, res) => {

})

app.post('/getUniversity', (req, res) => {

  pool.query('SELECT * FROM university', [],function (err, data) {
    if (err) {
      console.log(err)
      res.send({
        success: false,
        data: err.sqlMessage
      })
    }
    console.log(data)
    res.send({
    success: true,
    data: data
    })
  })
})


/////////////////////////////////////////////////////////////////////

//Логгирование
function addLog( type, name_user, message){
  if (type !== null && name_user != null && message != null){

    let DateTime = new Date()
    let date = DateTime.toISOString().split('T')[0]
    let time = DateTime.toLocaleString().split(' ')[1]
    let now = date.concat(' '+time)

    pool.query('INSERT INTO logs (name_user, id_logType, datetime, text) VALUES (?,?,?,?)', [name_user, type, now, message], function (err) {
      if (err) {
        return err
      }
    })
  }
}

// Регистрация пользователя
app.post('/register', (req, res) => {
  if (req.body.email && req.body.password && req.body.fio) {
    // создаем соль
    let salt = bcrypt.genSaltSync(10)

    // шифруем пароль
    let newPass = bcrypt.hashSync(req.body.password, salt)

    // Заносим пользователя в бд
    pool.query('INSERT INTO users (email, pwdHash, salt, fullName, role, users.system) VALUES (?,?,?,?,?,?)', [req.body.email, newPass, salt, req.body.fio, req.body.role, req.body.system], function (err, data) {
      if (err) {
        console.log(err)
        addLog(3, req.body.name_user, `Неудачная попытка добавления нвоог опользователя: ${req.body.fio}`)
        res.send({
          success: false,
          data: err.sqlMessage
        })
        return err
      }

      addLog(1, req.body.name_user, `Добавлен новый пользователь: ${req.body.fio}`)

      //Ответ клиенту
      res.send({
        success: true,
        data: data
      })
    })

  } else {
    res.send({
      success: 'bad request'
    })
  }
})
