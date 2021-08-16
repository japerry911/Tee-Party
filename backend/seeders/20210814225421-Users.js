'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        username: 'skylord',
        password: await bcrypt.hashSync('fakePassword123', 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        username: 'pelicanMan',
        password: await bcrypt.hashSync('fakePassword123', 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
