const http = require('node:http')   // η βιβλιοθηκη που θα χρησιμοποιησουμε στην μεθοδο τ require

// localhost server
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((request, response) => {  // yparxei mesa sthn http o createServer
  if (request) {
    console.log("A request")                             // Αν ερθει request γραψε αυτο
    response.statusCode = 200                            // Το status code του response να γινει 200
    response.setHeader("Content-Type", "text/plain")     // Ενας header στο JSON να γινει Content-Type : text/plain
    response.end("Hello World\n")                          // Και στο τελος γράψε hello world
  }
})  

server.listen(port, hostname, () => { // Που θα 'ακουσει' ο σερβερ (που θα τρεξει δηλαδη) θελει το port και το server name (το localhost εδω)
  console.log(`Server runing at http://${hostname}:${port}/`)
})