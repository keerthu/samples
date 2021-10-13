"use strict";
const { Model } = require("sequelize");
const moment = require("moment");
module.exports = (sequelize, DataTypes) => {
  class Bills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bills.init(
    {
      payerName: DataTypes.STRING,
      billNo: DataTypes.INTEGER,
      billingDate: {
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue("billingDate")).format(
            "MM/DD/YYYY h:mm:ss"
          );
        },
        set(val) {
          const da = moment(val).format("MM/DD/YYYY h:mm:ss");
          this.setDataValue("billingDate", da);
        },
        inclusive: false,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      registryPageNo: DataTypes.INTEGER,
      otherIncomes: {
        type: DataTypes.STRING,
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
    },
    {
      sequelize,
      modelName: "Bills",
    }
  );
  return Bills;
};
