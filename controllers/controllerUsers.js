const { users } = require('../models')
const { generate_token } = require('../helpers/jwt')
const {decode_password} = require('../helpers/bcyript')


class Controller{
  static async getAlluser(req, res, next){
    try {
      const result = await users.findAll()
      res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }

  static async register(req, res, next){
    try {
      const result = await users.create(req.body)
      const payload = {
        id: result.id,
        email: result.email
      }
      console.log(payload);
      const token = generate_token(payload)
      res.status(200).json({
        id: payload.id,
        email: result.email,
        access_token : token
      })
    } catch (error) {
      next(error)
    }
  }

  static async login(req, res, next){
    try {
      const result = await users.findOne({
        where: {
          email: req.body.email
        }
      })
      if(result){
        const compare = decode_password(req.body.password, result.password)
        if(compare){
          const payload = {
            id: result.id,
            email: result.email
          }
          const token = generate_token(payload)
          return res.status(200).json({
            access_token: token
          })
        }else{
          return next({
            name: "BadRequest",
            errors: [{ message: "email/password salah" }]
          })
        }
      }else{
        return next({
          name: "BadRequest",
          errors: [{ message: "email/password salah" }]
        })
      }
    } catch (error) {
      next(error)
    }
  }

  static async delete(req, res, next){
    const id = req.params.id
    try {
      const result = await users.destroy({where: {id}})
      res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller