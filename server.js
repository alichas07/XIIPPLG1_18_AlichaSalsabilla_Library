const express = require('express')
const app = express()
const port = 3000
const userRouter = require('./router/users')

//agar applikasi bisa membaca inputan dari form
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.use(userRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})