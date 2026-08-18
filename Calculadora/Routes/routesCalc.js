import express from 'express';
import { somar, subtrair, multiplicar, dividir, potenciacao } from '../Controllers/calculoController.js';
const router = express.Router();

router.post('/somar', calculoSomar);
router.post('/subtrair', calculoSubtrair);
router.post('/multiplicar', calculoMultiplicar);
router.post('/dividir', calculoDividir);
router.post('/potenciacao', calculoPotenciacao);

export default router;