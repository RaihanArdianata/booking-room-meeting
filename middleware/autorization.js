const { bookings } = require('../models')

function autorization(req, res, next) {
  bookings.findOne({
    where: {
      id: req.query.id
    }
  })
  .then((result) => {
      if (result) {
        if (result.user_id == req.currentUserId) {
          next()
        } else {
          return next({
            name: "NotAutorization",
            errors: [{
              message: 'not Authorized'
            }]
          })
        }
      } else {
        return next({
          name: 'NotFound',
          errors: [{
            message: 'not found'
          }]
        })
      }
    })
    .catch((error) => {
      return next(error)
    })
}

module.exports = autorization