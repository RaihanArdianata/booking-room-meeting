'use strict';
const {encode_password} = require('../helpers/bcyript')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isUnique(email, done) {
          console.log(done,'email');
          users.findOne({
            where: {
              email
            }
          })
            .then(result => {
              if (result) {
                return done(new Error('email already in use'))
              }
              return done()
            })
        }
      }
    },
    password: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        console.log(user);
        user.password = encode_password(user.password);
      }
    },
    sequelize,
    modelName: 'users',
  });
  return users;
};