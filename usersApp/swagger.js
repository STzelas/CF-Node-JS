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
  },
  "servers": [ // Δηλώνουμε που θέλουμε να τρέξει τις κλήσεις
    {
      url: "http://localhost:3000",
      description: "Local server"
    },
    {
      url:"http://www.backend.aueb.gr",
      description:"Test server"
    }
  ],
  "tags": [ // Ομαδοποιούμε τις κλήσεις στο tags στο swagger
    {
      "name":"Users",
      "description":"Endpoints for User"
    },
    {
      "name":"Users and Products",
      "description":"Endpoints for users and their products"
    },
    {
      "name":"auth",
      "description":"Endpoints for Authentication"
    }
  ],  // Δηλώνω τα endpoints μου
  "paths": {
    "/api/users": {
      "get": {
        "tags":["Users"],
        "description":"Returns a list of all users",
       "responses": {  // status
        "200": {
          "description":"List of all users",
          "content": {
            "application/json": {
              "schema": {
                "type":"array",
                "items": {
                  "$ref": "#/components/schemas/User"
                }
                }
              }
            }
          }
        }
      }
    }
  }
}