import * as calculoModel from '../Models/modelsCalc.js';


const validarNumeros = (a, b) => {
    return typeof a === 'number' && !isNaN(a) && typeof b === 'number' && !isNaN(b);
};

export const somar = (req, res) => {
    const { a, b } = req.body;
    if (!validarNumeros(a, b)) return res.status(400).json({ erro: 'Os valores "a" e "b" precisam ser números.' });

    const resultado = calculoModel.somar(a, b);
    return res.json({ resultado });
};

export const subtrair = (req, res) => {
    const { a, b } = req.body;
    if (!validarNumeros(a, b)) return res.status(400).json({ erro: 'Os valores "a" e "b" precisam ser números.' });

    const resultado = calculoModel.subtrair(a, b);
    return res.json({ resultado });
};

export const multiplicar = (req, res) => {
    const { a, b } = req.body;
    if (!validarNumeros(a, b)) return res.status(400).json({ erro: 'Os valores "a" e "b" precisam ser números.' });

    const resultado = calculoModel.multiplicar(a, b);
    return res.json({ resultado });
};

export const dividir = (req, res) => {
    const { a, b } = req.body;
    if (!validarNumeros(a, b)) return res.status(400).json({ erro: 'Os valores "a" e "b" precisam ser números.' });

    
    if (b === 0) {
        return res.status(400).json({ erro: 'Divisão por zero não é permitida.' });
    }

    const resultado = calculoModel.dividir(a, b);
    return res.json({ resultado });
};

export const potenciacao = (req, res) => {
    const { a, b } = req.body;
    if (!validarNumeros(a, b)) return res.status(400).json({ erro: 'Os valores "a" e "b" precisam ser números.' });

    const resultado = calculoModel.potenciacao(a, b);
    return res.json({ resultado });
};