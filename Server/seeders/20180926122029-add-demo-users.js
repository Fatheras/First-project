'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*Add altering commands here.
      Return a promise to correctly handle asynchronicity. */

    return queryInterface.bulkInsert('users', [{
      firstName: 'John',
      lastName: 'Doe',
      phone: '099-00-00-000',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Vlad',
      lastName: 'Moe',
      phone: '099-00-00-111',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Anna',
      lastName: 'Koe',
      phone: '099-00-00-222',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
