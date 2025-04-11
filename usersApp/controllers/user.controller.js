
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
    response.json({
      status: false,
      data: err
    })
  }
}

exports.findOne = async(request, response) => {
  console.log("Find user with specific username")
  let username = request.params.username

  try {
    const result = await User.findOne({
      username: username
    })

    response.json({
      status: true,
      data: result
    })
  } catch(err) {
    console.log("Problem in finding user", err)
    response.json({
      status: false,
      data: err
    })
  }
}

exports.create = async(request, response) => {
  console.log("Create user")
  
  let data = request.body

  const newUser = new User({
    username: data.username,
    password: data.password,
    name: data.name,
    surname: data.surname,
    email: data.email,
    address: {
      area: data.address.area,
      road: data.address.road
    }
  })

  try{
    const result = await newUser.save();
    response.json({
      status: true,
      data: result
    })
  } catch(err) {
    console.log("Problem in creating user", err)
    response.json({
      status: false,
      data: err
    })
  }
}

