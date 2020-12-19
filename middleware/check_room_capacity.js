const { bookings, rooms } = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op

async function check_room(req, res, next) {
  try {
    const result = await rooms.findOne({
      where:{
        id: req.body.room_id
      }
    })
    if(req.body.total_person > result.room_capacity){
      return next({
        name: "not available",
        errors: [{
          message: 'Room Overload'
        }]
      })
    }else{
      next()
    }
  } catch (error) {
    next(error)
  }
}

module.exports = check_room