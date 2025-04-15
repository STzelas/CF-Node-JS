// Παίρνει το model με το mongoose, το μετατρέπει
// σε json και με επιτρέπει να το εμφανίσω 
// στην σελίδα του swagger την οποία έχω
const m2s = require('mongoose-to-swagger')
const User = require('./models/user.model')

exports.options = {
  "components": {
    "schemas":{
      User: m2s(User)  // Το μετατρέπει σε json
    }
  },
  "openapi":"3.1.0",
  "info": {
    "version": "1.0.0",
    "title":"Users and Products CRUD API",
    "description":"An application for creating users and choosing products",
    "contact": {
      "name":"API Support",
      "URL":"https://aueb.gr",
      "email":"support@example.com"
    }
  }
}