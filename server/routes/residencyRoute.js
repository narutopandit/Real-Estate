import express from 'express'
import { createRes, getRes, getResById } from '../controller/residencyCntrl.js';

let router = express();

router.use(express.json());

router.post('/createResidency',createRes);
router.get('/allRes',getRes);
router.get('/:id',getResById);

export {router as residencyRoute}