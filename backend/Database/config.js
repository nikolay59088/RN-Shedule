import mysql from 'mysql'

const config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'shedule'
}

const pool = mysql.createPool(config)

export default pool
