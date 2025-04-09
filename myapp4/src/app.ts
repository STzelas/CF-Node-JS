import  express, { request, response } from "express";

const app = express();
const port = 3000;

app.get("/", (request, response) => {
  console.log("Main Page")
  response.send("Hello typescript")
})

app.listen(port, () => {
  console.log(`Server on port: ${port} is up and running...`)
})