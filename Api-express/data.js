let tasks = [
    {
        id: 1,
        titulo: "Configurar Servidor Express",
        descripcion: "Inicializar npm y crear los archivos base.",
        completada: true
    },
    {
        id: 2,
        titulo: "Implementar Rutas GET",
        descripcion: "Crear la lógica para listar todas las tareas.",
        completada: false
    }
];

module.exports = {
    tasks,
    getNextId: () => tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1
};