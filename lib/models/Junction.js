const db = require('../utils/db');
const { DataTypes, Model } = require('sequelize');

class Junction extends Model {}
//keep track of the ROLE, the ACTOR ID, and the FILM ID

Junction.init(
  {
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    actorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    filmId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  },
  { sequelize: db, timestamps: false }
);

module.exports = Junction;