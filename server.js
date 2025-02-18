const express = require('express')
const app = express()
const port = 3000
const usersRoutes = require('./router/routeUser')
const booksRoutes = require('./router/routeBook')

//agar applikasi bisa membaca inputan dari form
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.use('/users', usersRoutes);
app.use('/books', booksRoutes); 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})