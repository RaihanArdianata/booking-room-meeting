'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addConstraint('bookings', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'user_id',
      references: { //Required field
        table: 'users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('bookings', {
      fields: ['room_id'],
      type: 'foreign key',
      name: 'room_id',
      references: { //Required field
        table: 'rooms',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     await queryInterface.removeConstraint('bookings', 'room_id')
     await queryInterface.removeConstraint('bookings', 'user_id')
  }
};
