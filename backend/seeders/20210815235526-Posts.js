'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [
      {
        content: 'test123',
        userId: 1,
        topicId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'test321',
        userId: 1,
        topicId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
