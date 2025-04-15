import { Router } from 'express';
import { getDelete, getUpdete } from '../controllers/updetecontroller.js';

const router = Router();
router.put('', getUpdete);
router.delete('', getDelete);

export default router;