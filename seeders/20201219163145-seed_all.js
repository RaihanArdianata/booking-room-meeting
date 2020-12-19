'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const rooms = [
      {
        room_name: "mawar",
        room_capacity: 10,
        photo: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        room_name: "melati",
        room_capacity: 10,
        photo: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        room_name: "kamboja",
        room_capacity: 10,
        photo: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]
    const users = [{
      email: "raihan.ardianata@gmail.com",
      password: "$2a$10$cLF5lMj4b9fla0l9QG80vu2T/QseF4LqvfyltdNEPLXbFw6EPUPE2",//user
      photo: "",
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    const date = new Date();
    date.setDate(date.getDate() + 4);
    const bookings = [
      {
        user_id: 1,
        room_id: 1,
        total_person: 5,
        booking_time: new Date(),
        noted: "meeting club ff",
        check_out_time: date,
        check_in_time: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        room_id: 2,
        total_person: 5,
        booking_time: new Date(),
        noted: "meeting club ff",
        check_out_time: new Date(),
        check_in_time: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    await queryInterface.bulkInsert('rooms', rooms, {});
    await queryInterface.bulkInsert('users', users, {});
    await queryInterface.bulkInsert('bookings', bookings, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('bookings', null, {});
    await queryInterface.bulkDelete('rooms', null, {});
    await queryInterface.bulkDelete('users', null, {});
  }
};
