const db = require('../utils/db');
const { DataTypes, Model } = require('sequelize');

class Film extends Model {}

Film.init(
	{
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		released: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},

	{ sequelize: db, timestamps: false }
);

module.exports = Film;
