'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [
      {
        content: 'test123',
        userId: 1,
        topicId: 1,
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
      {
        content: 'test reply 1',
        userId: 2,
        topicId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'test reply 2',
        userId: 2,
        topicId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'test 3',
        userId: 1,
        topicId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'test reply 3',
        userId: 2,
        topicId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'test 4',
        userId: 1,
        topicId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'test reply 4',
        userId: 2,
        topicId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
