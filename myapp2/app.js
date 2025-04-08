const express = require("express")
const app = express()
const port = 3000

app.get("/", (request, response) => {
  response.send("This is the home page")
})

app.post('/user', (request, response) => {
  let data = request.body

  console.log(data)
  response.send("User page")
}) 


app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})