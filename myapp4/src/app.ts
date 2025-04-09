import  express, { request, response } from "express";
import { greet } from "./utils";

const app = express();
const port = 3000;

app.get("/", (request, response) => {
  console.log("Main Page")
  response.send("Hello typescript")
})

app.get('/greetings', (request, response) => {
  const message = greet("World 2")

  response.send(message)
})

app.listen(port, () => {
  console.log(`Server on port: ${port} is up and running...`)
})