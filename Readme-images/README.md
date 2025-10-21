# API RESTful

Esta es una API RESTful construida con Node.js y Express.js que permite realizar operaciones **CRUD** sobre un conjunto de tareas.

## Requisitos Técnicos

* Node.js (versión actualizada o segura)
* npm

## Instalación y Ejecución

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/Alebarros17/API-RESTFUL-Encargo-PBackEnd.git]
    cd Api-express
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install express
    ```

3.  **Ejecutar el servidor:**
    ```bash
    node index.js
    ```
    El servidor se iniciará en `http://localhost:3000`.

## Estructura y Componentes

| `index.js` | Servidor principal. Inicializa Express, aplica middlewares y monta las rutas. |
| `routes.js` | Define todos los *endpoints* (`/api/tasks`) y contiene la lógica CRUD, incluyendo validaciones. |
| `data.js` | Almacenamiento en memoria de la lista de tareas. |

## Ejemplos de Pruebas (Usando Postman)

### 1. GET → Listar
![Get1](image-1.png)
![Get2](image.png)

### 2. POST → Crear
![Post1](image-2.png)
![Post2](image-3.png)

### 3. PUT → Modificar
![Put1](image-4.png)

### 4. DELETE → Borrar
![Delete1](image-5.png)
![Delete2](image-6.png) //Confirmo que no salga

las imagenes estan en el archivo adjuntas, en VSC se ven bien, espero que aqui tambien
