import * as calculoModel from '../models/calculoModel.js';


const validarNumeros = (a, b) => {
    return typeof a === 'number' && !isNaN(a) && typeof b === 'number' && !isNaN(b);
};

export const somarController = (req, res) => {
    const { a, b } = req.body;
    if (!validarNumeros(a, b)) return res.status(400).json({ erro: 'Os valores "a" e "b" precisam ser números.' });

    const resultado = calculoModel.somar(a, b);
    return res.json({ resultado });
};

export const subtrairController = (req, res) => {
    const { a, b } = req.body;
    if (!validarNumeros(a, b)) return res.status(400).json({ erro: 'Os valores "a" e "b" precisam ser números.' });

    const resultado = calculoModel.subtrair(a, b);
    return res.json({ resultado });
};

export const multiplicarController = (req, res) => {
    const { a, b } = req.body;
    if (!validarNumeros(a, b)) return res.status(400).json({ erro: 'Os valores "a" e "b" precisam ser números.' });

    const resultado = calculoModel.multiplicar(a, b);
    return res.json({ resultado });
};

export const dividirController = (req, res) => {
    const { a, b } = req.body;
    if (!validarNumeros(a, b)) return res.status(400).json({ erro: 'Os valores "a" e "b" precisam ser números.' });

    
    if (b === 0) {
        return res.status(400).json({ erro: 'Divisão por zero não é permitida.' });
    }

    const resultado = calculoModel.dividir(a, b);
    return res.json({ resultado });
};

export const potenciacaoController = (req, res) => {
    const { a, b } = req.body;
    if (!validarNumeros(a, b)) return res.status(400).json({ erro: 'Os valores "a" e "b" precisam ser números.' });

    const resultado = calculoModel.potenciacao(a, b);
    return res.json({ resultado });
};