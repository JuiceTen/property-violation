const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class House extends Model {}

House.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    violationid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    buildingid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    registrationid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    violationstatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    novdescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    approveddate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    communityboard: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    housenumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    streetname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    streetcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    boro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'house',
  }
);

module.exports = House;