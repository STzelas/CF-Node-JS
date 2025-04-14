const jwt = require('jsonwebtoken')


function verifyToken(request, response, next) {
  const authHeader = request.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if(!token) {
    return response.status(401).json({
      status: false,
      message: "Access Denied. No token provided"
    })
  } 

  const secret = process.env.TOKEN_SECRET

  try {
    const decoded = jwt.verify(token, secret)  // το verify είναι μέθοδος του jwt, συγκρίνει το token με το secret
    console.log(decoded)
    next()
  } catch(err) {
    return response.status(403).json({
      status: false,
      data: err
    })
  }
}

module.exports = { verifyToken }