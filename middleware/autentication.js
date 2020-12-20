const { decode_token } = require('../helpers/jwt.js')
const { users } = require('../models')

function autentication(req, res, next) {
  try {
    const decoded = decode_token(req.headers.token)
    users.findOne({
      where: {
        id: decoded.id
      }
    })
      .then((result) => {
        if (result) {
          req.currentUserId = result.id
          req.currentUserMail = result.email
          next()
        } else {
          next({
            name: "NotFound",
            errors: [{ message: "users no Found Please Login First" }]
          })
        }
      })
      .catch((err) => {
        next({
          name: "NotAutenticate",
          errors: [{ message: "users Not Autenticate" }]
        })
      })

  } catch (err) {
    return next(err)
  }
  // return next()
}

module.exports = autentication