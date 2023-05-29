'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const roles = [
      {
        id: 1,
        name: "USER",
      },
      {
        id: 2,
        name: "ADMIN"
      },
      {
        id: 3,
        name: "PM"
      }
    ]
    await queryInterface.bulkInsert("Roles", roles)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
