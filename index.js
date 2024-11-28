const express = require('express');
const app = express();

// Middleware para parsear los datos del formulario
app.use(express.urlencoded({ extended: true }));

// Ruta principal
app.get('/', (req, res) => {
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Página de Inicio</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f9;
                    color: #333;
                    text-align: center;
                }
                header {
                    background-color: #4CAF50;
                    color: white;
                    padding: 1em;
                }
                nav {
                    margin: 1em 0;
                }
                nav a {
                    text-decoration: none;
                    color: #4CAF50;
                    margin: 0 10px;
                    font-weight: bold;
                }
                nav a:hover {
                    text-decoration: underline;
                }
                footer {
                    margin-top: 20px;
                    background-color: #333;
                    color: white;
                    padding: 10px;
                }
            </style>
        </head>
        <body>
            <header>
                <h1>Bienvenido a mi Página</h1>
                <p>Clase 5 - Actividad 2</p>
            </header>
            <nav>
                <a href="/">Inicio</a>
                <a href="/about">Sobre Mí</a>
                <a href="/contact">Contacto</a>
            </nav>
            <main>
                <h2>Explora el contenido</h2>
                <p>Esta es una página servida desde un servidor Node.js para practicar Express.</p>
                <p>Usa los enlaces de navegación para explorar más.</p>
            </main>
            <footer>
                <p>&copy; 2024 Mi Sitio Web - Clase 5</p>
            </footer>
        </body>
        </html>
    `;
    res.send(htmlContent);
});

// Ruta "Sobre Mí"
app.get('/about', (req, res) => {
    const aboutContent = `
        <h2>Acerca de</h2>
        <p>Esta página está diseñada para mostrar cómo se puede crear una barra de navegación funcional y un formulario en Express.</p>
    `;
    res.send(aboutContent);
});

// Ruta para el formulario de contacto
app.get('/contact', (req, res) => {
    const formContent = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Formulario de Contacto</title>
            <style>
                /* Estilo básico para el formulario */
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 20px;
                    background-color: #f8f9fa;
                }
                h1, h2 {
                    text-align: center;
                    color: #343a40;
                }
                form {
                    max-width: 400px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                label {
                    font-weight: bold;
                    display: block;
                    margin-bottom: 5px;
                }
                input[type="text"], input[type="email"] {
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 15px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                input[type="submit"] {
                    background-color: #007BFF;
                    color: white;
                    padding: 10px 15px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                input[type="submit"]:hover {
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>
            <h1>Formulario de Contacto</h1>
            <form action="/submit" method="POST">
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="name" placeholder="Escribe tu nombre" required>

                <label for="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" placeholder="Escribe tu correo" required>

                <input type="submit" value="Enviar">
            </form>
        </body>
        </html>
    `;
    res.send(formContent);
});

// Ruta para procesar los datos del formulario
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.send(`<h1>Gracias por contactarnos, ${name}!</h1><p>Te hemos enviado un correo a ${email}.</p>`);
});

// Inicia el servidor
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
});

//-
