const mongoose = require('mongoose') // library for the database
const app = require('./app')  // import απο το app.js, το app που εκανα export
const port = 3000

mongoose.connect("127.0.0.1")   // Εκεί που συνδέεται η βάση είναι. / promise
        .then(                  // thenables 
          () => {
            console.log("Connection to mongoDB established")
          },
          err => { console.log('Failed to connect to mongoDB',err)}
        )


app.listen(port, () => {
  console.log(`Server on port ${port} is up and running...`)
})
