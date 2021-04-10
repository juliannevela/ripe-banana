const db = require('../utils/db');
const {DataTypes, Model} = require('sequelize');

class Reviewer extends Model {}

Reviewer.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {sequelize: db, timestamps:false}
)

module.exports = Reviewer;