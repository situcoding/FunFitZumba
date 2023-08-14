import AdminUser from '../models/AdminUser.js';

export async function createAdminUser(req, res) {
    try {
        const adminUser = await AdminUser.createAdminUser(req.body);
        res.status(201).json(adminUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function getAllAdminUsers(req, res) {
    try {
        const adminUsers = await AdminUser.getAllAdminUsers();
        res.status(200).json(adminUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// ... Add other CRUD operations like updating and deleting here ...

