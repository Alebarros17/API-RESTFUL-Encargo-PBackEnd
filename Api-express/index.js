const express = require("express");
const app = express();
const taskRoutes = require('./routes'); 
const PORT = 3000;
app.use(express.json());
app.use('/api/tasks', taskRoutes); 
app.get('/', (req, res) => {
    res.json({
    ok: true,
    msg: 'API hecha con Express.js funciona',
    rutas: ['/api/tasks']
    });
});
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});