import express from 'express';
import calculoRoutes from './routes/routesCalc.js';

const app = express();


app.use(express.json());


app.use('/api/calculo', calculoRoutes);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`API REST rodando em http://localhost:${PORT}`);
});