const { rooms, bookings } = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op

class Controller{
  static async get(req, res, next){
    try {
      const result = await rooms.findAll({
        include:  [{
          model: bookings,
        }]
      })
      res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }

  static async create(req, res, next){
    try {
      const result = await rooms.create(res)
      res.status(201).json(result)
    } catch (error) {
      next(error)
    }
  }

  static async delete(req, res, next){
    const id = req.params.id
    try {
      const result = await rooms.destroy({where: id})
      res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller