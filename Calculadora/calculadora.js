import express from 'express'
const app = express();

app.use(express.json());

// Rota de Soma 
app.post('/api/calculo/soma', (req, res) => {
    const { a, b } = req.body;
    
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ erro: 'Os valores "a" e "b" precisam ser números.' });
    }

    res.json({ resultado: a + b });
});

// Rota de Subtração
app.post('/api/calculo/subtrai', (req, res) => {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ erro: 'Os valores "a" e "b" precisam ser números.' });
    }

    res.json({ resultado: a - b });
});

// Rota de Multiplicação
app.post('/api/calculo/multiplica', (req, res) => {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ erro: 'Os valores "a" e "b" precisam ser números.' });
    }

    res.json({ resultado: a * b });
});

// Rota de Divisão
app.post('/api/calculo/divide', (req, res) => {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ erro: 'Os valores "a" e "b" precisam ser números.' });
    }

    if (b === 0) {
        return res.status(400).json({ erro: 'Divisão por zero não é permitida.' });
    }
    
    res.json({ resultado: a / b });
});

app.listen(3000, () => {
    console.log('API REST rodando em http://localhost:3000');
});