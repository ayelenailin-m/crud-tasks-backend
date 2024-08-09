export function validateTask(req, res, next) {
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
}
