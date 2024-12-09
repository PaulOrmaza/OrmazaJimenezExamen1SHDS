// Importación del módulo HTTP
var http = require('http');

// Creación del servidor HTTP
var server = http.createServer();

// Función que manejará las solicitudes al servidor
function manejarSolicitud(req, resp) {
    // Verifica si la URL contiene "/ormaza"
    if (req.url === '/ormaza') {
        // Configuración del encabezado HTTP para un estado 200 y tipo de contenido "text/plain"
        resp.writeHead(200, { 'Content-Type': 'text/plain' });
        // Responde con el mensaje
        resp.write('Hola, soy Paul Ormaza, estudiante de la carrera de Desarrollo de Software. Tengo 21 anos y me gusta el futbol.');
    } else {
        // Configuración para cualquier otra URL (404 no encontrado)
        resp.writeHead(404, { 'Content-Type': 'text/plain' });
        resp.write('Pagina no encontrada. Por favor, usa en la URL "/ormaza".');
    }
    // Finaliza la respuesta
    resp.end();
}

// Asignar la función de manejo de solicitudes al evento 'request' del servidor
server.on('request', manejarSolicitud);

// Escuchar en el puerto 3003
server.listen(3003, function () {
    console.log('El servidor esta funcionando en el puerto 3003 UWU');
});
