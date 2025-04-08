// βιβλιοθηκη του node που με επιτρεπει να
// διαχειρίζομαι αρχεια (διαβασμα και εγγραφη) μέσω node
const fs = require('fs') 

// βιβλιοθηκη που με δίνει πρόσβαση στο http
// πρωτοκόλου
const http = require('http')

// βιβλιοθήκη που επιτρέπει να πάρω
// στοιχεία για το OS
const os = require('os')

const osType = os.type();
console.log(osType)   // πχ Windows_NT

const htmlContent = `
<!DOCTYPE html>
<html>
  <h3>Hello, World Your OS type is ${osType}</h3>
</html>
`

const server = http.createServer((request, response) => {
  console.log("Αρχικά δημιουργούμε αρχείο index.html με περιεχόμενα htmlContent")
  fs.writeFile('./index.html', htmlContent, error => {     // Γράφει στο αρχείο η writeFile και παίρνει που, τι, ερρορ
    if(error) {
      console.log("There was an error: ", error)
    } else {
      console.log("Διαβάζουμε το αρχείο και το στέλνουμε πίσω")
    }
  })
  fs.readFile("./index.html", 'utf8', (error, content) => {   // Διαβάζει απο το αρχείο και παίρνει ποιο, enconding, error
    if(error) {
      console.log("Problem in reading file", error)
    }
    response.setHeader('Content-Type','text/html')
    response.end(content)
  })

})

server.listen(3000, () => {
  console.log("Server is listening on port: 3000")
})