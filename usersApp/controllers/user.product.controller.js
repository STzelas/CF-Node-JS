const User = require('../models/user.model')

exports.findAll = async(request, response) => {
  console.log("Find from all users the products")

  try {
    const result = await User.find({},{_id: 0, username: 1, products: 1})
    response.status(200).json({
      status: true,
      data: result
    })
  } catch(err) {
    console.log("Error finding from all products from all users", err)
    response.status(400).json({
      status: false,
      data: err
    })
  }
}


exports.findOne = async(request, response) => {
  console.log("Find products from a specific user")

  const data = request.params

  const username = data.username

  try {
    const result = await User.findOne({username:username}, {username: 1, products: 1, _id: 0})

    response.status(200).json({
      status:true,
      data: result
    })
  } catch (err) {
    console.log("Error in finding specific user", err)
    response.status(404).json({
      status:false,
      data: err
    })
  }
}