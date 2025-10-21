const express = require('express');
const router = express.Router();
const data = require('./data'); 
let tasks = data.tasks; 
const getNextId = data.getNextId;

const validateTask = (req, res, next) => {
    const { titulo, descripcion, completada } = req.body;

    if (!titulo || !descripcion || typeof completada === 'undefined') {
        return res.status(400).json({ error: 'Faltan campos obligatorios: titulo, descripcion y completada son requeridos.' });
    }

    if (typeof titulo !== 'string' || typeof descripcion !== 'string' || typeof completada !== 'boolean') {
        return res.status(400).json({ error: 'Tipos de datos inválidos. titulo y descripcion deben ser strings, completada debe ser boolean.' });
    }

    next(); 
};

router.get('/', (req, res) => {
    res.status(200).json(tasks);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ error: 'Tarea no encontrada.' });
    }
    res.status(200).json(task);
});

router.post('/', validateTask, (req, res) => {
    const { titulo, descripcion, completada } = req.body;
    
    const newTask = {
        id: getNextId(), 
        titulo,
        descripcion,
        completada
    };

    tasks.push(newTask);
    res.status(201).json(newTask); 
});

router.put('/:id', validateTask, (req, res) => {
    const id = parseInt(req.params.id);
    const { titulo, descripcion, completada } = req.body;

    const taskIndex = tasks.findIndex(t => t.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Tarea no encontrada para actualizar.' });
    }

    tasks[taskIndex] = {
        id, 
        titulo,
        descripcion,
        completada
    };

    res.status(200).json(tasks[taskIndex]);
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const initialLength = tasks.length;
    
    tasks = tasks.filter(t => t.id !== id);

    if (tasks.length === initialLength) {
        return res.status(404).json({ error: 'Tarea no encontrada para eliminar.' });
    }
    
    res.status(200).json({ message: `Tarea con ID ${id} eliminada exitosamente.` });
});

module.exports = router;