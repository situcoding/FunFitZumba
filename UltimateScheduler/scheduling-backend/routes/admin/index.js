import express from 'express';
import { createAdminUser, getAllAdminUsers } from '../../controllers/admin.js';

const router = express.Router();

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('__dirname in admin route:', __dirname);
console.log('__filename in admin route:', __filename);


router.post('/', createAdminUser);
router.get('/', getAllAdminUsers);
// ... Other admin-related routes ...

export default router;
