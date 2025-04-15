const jwt = require('jsonwebtoken')
const authService = require('../services/auth.service')


function verifyToken(request, response, next) {
  const authHeader = request.headers['authorization']   // μπούσουλας του jwt
  // console.log("Request", request)
  const token = authHeader && authHeader.split(' ')[1]

  if(!token) {
    return response.status(401).json({
      status: false,
      message: "Access Denied. No token provided"
    })
  } 

  const result = authService.verifyAccessToken(token)

  if(result.verified) {
    request.user = result.data // καινούργια μεταβλητή user, θα περιέχει το decoded αν είναι verified
    // console.log("Request 2", request)
    next()
    
  } else {
    return response.status(403).json({
      status: false,
      data: result.data
    })
  }

  
}

module.exports = { verifyToken }