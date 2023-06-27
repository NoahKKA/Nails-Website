'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      appointmentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      date: {
        type: Sequelize.DATE,
        allowNull:false
      },
      startTime: {
        type: Sequelize.STRING,
        allowNull:false
      },
      endTime: {
        type: Sequelize.STRING,
        allowNull:false
      },
      priceEstimate: {
        type: Sequelize.INTEGER,
        allowNull:false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments');
  }
};