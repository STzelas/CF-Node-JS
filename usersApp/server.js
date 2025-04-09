const app = require('./app')  // import απο το app.js, το app που εκανα export

const port = 3000

app.listen(port, () => {
  console.log(`Server on port ${port} is up and running...`)
})
