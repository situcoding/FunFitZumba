import express from 'express';
import { createClient, getAllClients } from '../../controllers/client.js';

const router = express.Router();

router.post('/', createClient);
router.get('/', getAllClients);
// ... Other client-related routes ...

export default router;
