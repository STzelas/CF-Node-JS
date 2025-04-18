// First example

// const winston = require('winston')
// const logger = winston.createLogger(
//   {
//     format: winston.format.json(),      // επιστρέφει json
//     transports: [                       // array δηλώνω που θα διοχετεύσω αυτό το log (αρχείο, βάση, console κλπ)
//       new winston.transports.Console()  // json σε console.log
//     ]
//   }
// )


// Second Example

const { format, createLogger, transports } = require("winston")
const  { combine, timestamp, label, printf} = format
const CATEGORY = "Products app logs"


const logger = createLogger({
  format: combine(
    label({label: CATEGORY}),
    timestamp(),
    customFormat
  ),
  transports: [
    new transports.Console()
  ]
})

module.exports = logger