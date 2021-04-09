const db = require('../utils/db');
const { DataTypes, Model } = require('sequelize');

class Actor extends Model{}

Actor.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dob: {
            type: DataTypes.DATEONLY
        },
        pob: {
            type: DataTypes.STRING
        }
    },
    { sequelize: db, timestamps: false }
)

module.exports = Actor;