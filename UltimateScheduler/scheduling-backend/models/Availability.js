import { DataTypes, Model } from 'sequelize';
import sequelize from '../database.js';

class Availability extends Model {}

Availability.init({
    day: {
        type: DataTypes.STRING,
        allowNull: false
    },
    startTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
    endTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
    breakDuration: {
        type: DataTypes.INTEGER, // in minutes
        allowNull: false,
        defaultValue: 15
    }
}, {
    sequelize,
    modelName: 'Availability',
    tableName: 'availabilities',
    timestamps: false
});

export default Availability;
