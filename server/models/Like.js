const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Like extends Model { }

Like.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        dweet_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'dweet',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'like'
    }
);

module.exports = Like;
