// 
const User = require('../models/user.model')

exports.findAll = async(request, response) => {
  console.log("Find All users from collection users")

  try{
    const result = await User.find()

    response.json({
      status: true,
      data: result
    })
  } catch(err) {
    console.log("Problem in reading users", err)
    res.json({
      status: false,
      data: err
    })
  }
}