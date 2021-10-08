'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Bills", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      payerName: {
        type: Sequelize.STRING,
      },
      billNo: {
        type: Sequelize.STRING,
      },
      billingDate: {
        type: Sequelize.DATE,
      },
      registryPageNo: {
        type: Sequelize.INTEGER,
      },
      otherIncomes: {
        type: Sequelize.STRING,
        get() {
          const valstr = this.getDataValue("otherIncomes");
          let val = null;
          try {
            val = JSON.parse(valstr || "[]");
          } catch (e) {}
          return val;
        },
        set(val) {
          if (typeof val !== "string") {
            try {
              val = JSON.stringify(val);
            } catch (e) {
              val = null;
            }
          }
          this.setDataValue("otherIncomes", val);
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        get() {
          return moment(this.getDataValue("createdAt")).format(
            "DD/MM/YYYY h:mm:ss"
          );
        },
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Bills');
  }
};