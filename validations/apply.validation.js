import { validationResult } from "express-validator";

export function controladorErrores(req, res, next) {
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        return res.status(400).json(errores);
    }
    res.status(200).send('Tarea creada correctamente');
    next();
};