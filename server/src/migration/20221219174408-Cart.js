'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cartItemId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { 
          model: 'cartItems',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'users',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('carts');
  }
};
