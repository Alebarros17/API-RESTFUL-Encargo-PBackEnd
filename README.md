# API-RESTFUL-Encargo-PBackEnd
Encargo semana 4 Programacion BackEnd. Instituto IPG. ALEJANDRA BARROS
Esta es una API RESTful básica construida con Node.js y Express.js que permite realizar operaciones **CRUD** sobre un conjunto de tareas.

## Requisitos

* Node.js (versión actualizada o la segura)
* npm

## Instalación y Ejecución

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/Alebarros17/API-RESTFUL-Encargo-PBackEnd.git]
    cd Api-express
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install express
    ```

3.  **Ejecutar el servidor:**
    ```bash
    node index.js
    ```
    El servidor se iniciará en `http://localhost:3000`.

##  Estructura y Componentes

| `index.js` | Servidor principal. Inicializa Express, aplica middlewares (`express.json`) y monta las rutas (`/api/tasks`). |
| `routes.js` | Define todos los endpoints (`/api/tasks`, `/api/tasks/:id`) y contiene la lógica CRUD, incluyendo validaciones. |
| `data.js` | Almacenamiento "en memoria" de la lista de tareas y lógica para asignar el ID (`getNextId`). |

## Ejemplos de Pruebas (Usando Postman)

### 1. GET → Listar

### 2. POST → Crear

### 3. PUT → Modificar

### 4. DELETE → Borrar

Imagenes adjuntas en archivo README.md del proyecto
