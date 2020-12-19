const { bookings, rooms } = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op

async function check_room(req, res, next) {
  try {
    const result = await rooms.findOne({
      where:{
        id: req.body.room_id
      },
      include: [{
        model: bookings,
        where: {
          booking_time: {
            [Op.between]: [req.body.booking_time, req.body.check_out_time]
          }
        }
      }]
    })
    if(result){
      return next({
        name: "not available",
        errors: [{
          message: 'Room is Used'
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