const express = require("express")
const app = express()
const port = 3000


// Διαδικασία που μπορούμε να ερθουμε 
// και να τρέξουμε ενδιάμεσες συναρτήσεις / πχ συναρτήσεις auth
// Επίσης με το app.use μπορώ να πάρω καποια request(end points)
// και αναλογα να διοχετεύσω το κώδικα σε άλλες διαδικασίες
app.use(express.json()); 

app.get("/", (request, response) => {
  response.send("This is the home page")
})

app.post('/user', (request, response) => {
  let data = request.body   // request = Αυτό που παίρνω απο το postman
  let username = request.body.username
  let email = request.body.email

  console.log(data)
  response.send(`User data: ${username}, ${email}`)  // response = Αυτό που στέλνω στο postman 
}) 

app.post("/userForm", (request, response) => {
  let data = request.body

  console.log(data)
  response.send("UserForm page")
})


app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})