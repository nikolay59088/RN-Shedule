import express from 'express'
import bodyParser from 'body-parser'
import { app as routes } from './routes.js'

const port = 3001
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  next()
})

app.use(routes)

// Start the server
app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`)

  console.log(`Server listening on port ${port}`)
})
