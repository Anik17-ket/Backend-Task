import express from 'express';
import { registerDonor, getAllDonors } from '../controllers/donorController.js';

const router = express.Router();

router.post('/', registerDonor);

router.get('/', getAllDonors);

export default router;
