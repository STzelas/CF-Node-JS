const User = require('../models/user.model')
const bcrypt = require('bcrypt')

exports.login = async(request, response) => {
  console.log("Login user", request.body)

  const data = request.body
  const username = data.username
  const password = data.password

  try {
    const result = await User.findOne({username:username})
    // bcrypt decrypt
    const isMatch = await bcrypt.compare(password, result.password)

    if(result && result.username === username && isMatch) {
      response.status(200).json({
        status: true,
        data: "user logged in"
      })
    } else {
      response.status(404).json({
        status: false,
        data: "user not found"
      })
    }
  } catch(err) {
    console.log("Problem logging in", err)
    response.status(400).json({
      status:false,
      data: err
    })
  }
}