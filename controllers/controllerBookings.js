const { rooms, bookings } = require('../models')
const nodemailer = require('nodemailer')
const moment = require('moment')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL || 'raihanardi69@gmail.com',
    pass: process.env.PASS || 'taepimbniftzpres'
  }
});

class Controller {
  static async get(req, res, next) {
    try {
      const result = await rooms.findAll({
        include: [{
          model: bookings,
        }]
      })
      res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }

  static async getByUser(req, res, next) {
    try {
      console.log(req.currentUserId);
      const result = await bookings.findAll({
        where: {
          user_id: req.currentUserId
        },
        include: [{
          model: rooms,
        }]
      })
      res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }

  static async create(req, res, next) {
    const Data = {
      user_id: req.currentUserId,
      room_id: req.body.room_id,
      total_person: req.body.total_person,
      booking_time: req.body.booking_time,
      noted: req.body.noted,
      check_in_time: null,
      check_out_time: req.body.check_out_time
    }
    try {
      const result = await bookings.create(Data)
      const mailOptions = {
        from: 'raihanardi69@gmail.com',
        to: req.currentUserMail,
        subject: 'Sending Email using Node.js',
        html:
        `
        <div style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);text-align: center;padding: 40px;">
          <h1>
            Hi
          </h1>
          <div>
            <p>
              ruang pesanan anda sudah siap silahkan check in pada tanggal
              <b>${moment(result.booking_time).format('LL')}</b>
              pukul <b>${moment(result.booking_time).format('LT')}</b>
              dan silahkan check out pada tanggal
              <b>${moment(result.booking_time).format('LL')}</b>
              pukul <b>${moment(result.booking_time).format('LT')}</b>
            </p>
          </div>
        </div>
        `
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          throw(error);
        }else{
          console.log("email masuk");
        }
      })
      return res.status(201).json(result)
    } catch (error) {
      next(error)
    }
  }

  static async updateCheckIn(req, res, next){
    const data ={
      check_in_time : req.body.check_in_time
    }
    try {
      const result = await bookings.update(data ,{
        where: {
          id: req.query.id
        }
      })
      const mailOptions = {
        from: 'raihanardi69@gmail.com',
        to: req.currentUserMail,
        subject: 'Sending Email using Node.js',
        html:
        `
        <div style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);text-align: center;padding: 40px;">
          <h1>
            Hi
          </h1>
          <div>
            <p>
              anda telah check in pada tanggal
              <b>${moment(data.check_in_time).format('LL')}</b>
              pukul <b>${moment(data.check_in_time).format('LT')}</b>
            </p>
          </div>
        </div>
        `
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          throw(error);
        }else{
          console.log("email masuk");
        }
      })
      return res.status(201).json(result)
    } catch (error) {
      next(error)
    }
  }

  static async delete(req, res, next) {
    const id = req.query.id
    try {
      const result = await bookings.destroy({
        where: {
          id
        }
      })
      console.log(result);
      res.status(200).json({message: "success delete"})
    } catch (error) {
      console.log(error);
      next(error)
    }
  }
}


module.exports = Controller