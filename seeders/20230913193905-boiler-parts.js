const { faker } = require('@faker-js/faker');
('use strict');

const boilerManufacturers = [
  'Ariston',
  'Baxi',
  'Bongioanni',
  'Buderus',
  'Chaffoteaux&Maury',
  'Henry',
  'Northwest',
  'Saunier Duval',
  'Strategist',
];
const partsManufacturers = [
  'Azure',
  'Croatia',
  'Cambridgeshire',
  'Gasoline',
  'Gloves',
  'Lesly',
  'Montana',
  'Salmon',
  'Sensor',
  'Radian',
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'BoilerParts',
      [...Array(100)].map(() => {}),
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
