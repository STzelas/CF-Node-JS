const express = require("express")
const app = express()
const port = 3000


// Διαδικασία που μπορούμε να ερθουμε 
// και να τρέξουμε ενδιάμεσες συναρτήσεις / πχ συναρτήσεις auth
// Επίσης με το app.use μπορώ να πάρω καποια request(end points)
// και αναλογα να διοχετεύσω το κώδικα σε άλλες διαδικασίες
app.use(express.json()); 

// Με αυτό τον τρόπο μπορεί 
// η express να αποκωδικοποιήσει
// αυτά που περιέχονται μέσα στους
// headers που βρίσκονται μέσα σε μία
// φόρμα
app.use(express.urlencoded({extended: true}))

// Οταν δει κλήση μέσα στο root της εφαρμογής (εδω το localhost:3000) (οποιαδήποτε κληση)
// τοτε για κάθε κλήση μέσα στο root
// θα τρέξω μια άλλη διαδικασία η οποία θα τρέξει
// να ανοίξει τα στατικά αρχεία(html αρχεία) που
// που βρίσκονται μέσα στον φάκελο files -express.static('files')-
app.use('/', express.static('files'))

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

  console.log("Data:", data)
  response.send("UserForm page")
})

app.use('/user1', (request,response) => {
  console.log("User 1")
  response.send("User 1 Page")
})

app.use('/user2', (request,response) => {
  console.log("User 2")
  response.send("User 2 Page")
})


app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})