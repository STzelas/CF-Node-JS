const winston = require('winston')

const logger = winston.createLogger(
  {
    format: winston.format.json(),      // επιστρέφει json
    transports: [                       // array δηλώνω που θα διοχετεύσω αυτό το log (αρχείο, βάση, console κλπ)
      new winston.transports.Console()  // json σε console.log
    ]
  }
)

module.exports = logger