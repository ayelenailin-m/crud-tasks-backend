import { body } from 'express-validator';

export const validateTask = [
    body('title')
        .isString().withMessage('Title debe ser una cadena de texto')
        .isLength({ max: 255 }).withMessage('Title no debe exceder los 255 caracteres')
        .notEmpty().withMessage('Title no puede estar vacío'),
    body('description')
        .isString().withMessage('Descripción debe ser una cadena de texto')
        .notEmpty().withMessage('Descripción no puede estar vacía'),
    body('isComplete')
        .isBoolean().withMessage('isComplete debe ser un valor booleano')
];


/*export function validateTask(req, res, next) {
    const { title, description, isComplete } = req.body;
    if (!title || typeof title !== 'string' || title.length > 255) {
        return res.status(400).json({ error: 'Title es invalido' });
    }
    if (!description || typeof description !== 'string') {
        return res.status(400).json({ error: 'Descripción invalida' });
    }
    if (typeof isComplete !== 'boolean') {
        return res.status(400).json({ error: 'isComplete es invalido' });
    }
    next();
};
*/