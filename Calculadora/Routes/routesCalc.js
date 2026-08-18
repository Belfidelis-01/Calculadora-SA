import express from 'express';
import { somar, subtrair, multiplicar, dividir, potenciacao } from '../Controllers/calculoController.js';
const router = express.Router();

router.post('/somar', somar);
router.post('/subtrair', subtrair);
router.post('/multiplicar', multiplicar);
router.post('/dividir', dividir);
router.post('/potenciacao', potenciacao);

export default router;