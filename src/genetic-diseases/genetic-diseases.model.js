const { DataType, DataTypes } = require("sequelize");
const { sequelize } = require("./../config/database/database.js");

// Modelos empiezan con Mayus
export const GeneticDiseases = sequelize.define("genetic_diseases", {

  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cause: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  mortality_rate: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },

  tratament: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

  symptoms: {
    type: DataTypes.STRING,
    allowNull: true,
  },

});
