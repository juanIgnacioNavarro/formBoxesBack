import app from './app.js'
import './database.js'
import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const port = 3001
app.listen(port)
const mysqli = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Em.prendo2022',
  database: 'formboxes',
  port: 3306
})
mysqli.connect((err) => {
  if (err) {
    console.log("Error connecting to database ", err)
    return;
  }
  console.log("Connecting established")
})
console.log(`Server listen on port ${port}`)