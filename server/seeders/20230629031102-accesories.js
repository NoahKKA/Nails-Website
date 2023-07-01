'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('accesories', [
      {
        name:'French Tips On 4 Nails',
        price: 5
      },
      {
        name:'French On All',
        price: 10
      },
      {
        name:'Nail Charms',
        price: 1
      },
      {
        name:'Nail Stickers',
        price: 0.50
      },
      {
        name:'Nail Art',
        price: 2
      },
      {
        name:'Chrome',
        price: 2
      },
      {
        name:'Sugar Nails',
        price: 1
      },
      {
        name:'Blinged Out Nail',
        price: 3.50
      },
      {
        name:'',
        price: 1
      }
    ])
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('accesories', null, {})
  }
};
