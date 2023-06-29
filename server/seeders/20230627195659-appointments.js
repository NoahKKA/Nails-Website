'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('appointments', [
      {
        name: 'Kyle',
        date: '2023-06-27',
        startTime: '09:30',
        endTime: '11:30',
        priceEstimate: 60

      },
      {
        name: 'Justin',
        date: '2023-06-27',
        startTime: '12:30',
        endTime: '15:30',
        priceEstimate: 70
      },
      {
        name: 'Gavin',
        date: '2023-08-27',
        startTime: '16:30',
        endTime: '19:30',
        priceEstimate: 60
      },
      {
        name: 'Ryam',
        date: '2023-07-27',
        startTime: '09:30',
        endTime: '11:30',
        priceEstimate: 90
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('appointments', null, {})
  }
};
