import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config';

class Assignment extends Model {}

Assignment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'courses',
            key: 'id',
        },
    },
}, {
    sequelize,
    modelName: 'Assignment',
    tableName: 'assignments',
    timestamps: true,
});

export default Assignment;