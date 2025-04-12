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