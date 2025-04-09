const express = require('express')
const app = express()
const port = 3000


app.use(express.urlencoded({extended:true}))

// Θα χρησιμοποιήσουμε το ejs σαν view engine
// Θέλει όπωσδηποτε έναν φάκελο views, που να 
// είναι εκει μέσα οι σελίδες html (.ejs εδώ)
app.set("view engine", "ejs")


app.get("/create", (request, response) => {
  console.log("Create page rendered")
   // (Ποια σελίδα θέλω να ανοίξει την form,
   // ποιες είναι οι μεταβλητές που θα
   // στείλω στην σελίδα form (εδω τιποτα αρα κενα)
  response.render('form', {}) 
})

app.post('/user', (request, response) => {
  let data = request.body
  console.log('Data: ', data)

  let username = data.username
  let email = data.email

  response.render('user', 
    {
    data1: username,
    data2: email
    }
  )
})

app.get('/users', (request, response) => {
  console.log("Users Page rendered")

  const users = [
    {
      "username": "sotiris",
      "email": "sotiris@aueb.gr"
    },
    {
      "username": "giorgos",
      "email":"giorgos@aueb.gr"
    }
  ]

  response.render('users', {users})
})

app.listen(port, () => {
  console.log(`Server on port: ${port} is up and running...`)
})