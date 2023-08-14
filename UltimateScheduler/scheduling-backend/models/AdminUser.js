import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const AdminUser = sequelize.define('AdminUser', {
    first_name: { type: DataTypes.STRING, allowNull: false },
    middle_name: DataTypes.STRING,
    last_name: { type: DataTypes.STRING, allowNull: false },
    birthday: DataTypes.DATE,
    gender: { type: DataTypes.ENUM('M', 'F', 'O'), allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    mobile: DataTypes.STRING,
    password: { type: DataTypes.STRING, allowNull: false }
}, {
    timestamps: false
});

// CRUD Operations

// Create Admin User
AdminUser.createAdminUser = async (data) => {
    try {
        return await AdminUser.create(data);
    } catch (error) {
        throw new Error(error.message);
    }
};

// Fetch All Admin Users
AdminUser.getAllAdminUsers = async () => {
    try {
        return await AdminUser.findAll();
    } catch (error) {
        throw new Error(error.message);
    }
};

// Fetch Single Admin User by ID
AdminUser.getAdminUserById = async (id) => {
    try {
        return await AdminUser.findByPk(id);
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update Admin User by ID
AdminUser.updateAdminUser = async (id, data) => {
    try {
        await AdminUser.update(data, { where: { id } });
        return await AdminUser.getAdminUserById(id);
    } catch (error) {
        throw new Error(error.message);
    }
};

// Delete Admin User by ID
AdminUser.deleteAdminUser = async (id) => {
    try {
        const user = await AdminUser.getAdminUserById(id);
        if (user) {
            await user.destroy();
            return user;
        }
        return null;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default AdminUser;
