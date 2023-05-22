import { Router } from 'express';
import * as appCtrl from '../controllers/app.controller';

const router = Router();

router.post('/', appCtrl.createItem);
router.get('/:seedKey', appCtrl.readItem);

export default router;
