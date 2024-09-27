// require(express): se importa el módulo desde node_modules y se asigna a la constante express
const express = require('express');
const path = require('path');
const cors = require('cors');
// la constante app es el objeto principal para configurar el servidor
const app = express();
const socioRoutes = require('./routes/socioRoutes');
const fichaMedicaRoutes = require('./routes/fichaMedicaRoutes');
const tiposSangreRoutes = require('./routes/tiposSangreRoutes');
const port = 3001;

// Configura CORS
app.use(cors());
// Middleware para transformar las solicitudes HTTP con cuerpo JSON en objeto JavaScript
app.use(express.json());

// Ruta de prueba (método(path, función))
// req objeto de la solicitud, res el objeto de respuesta
// En este caso no se usa req
app.get('/', (req, res) => {
   res.send('Hello world')
});

app.use('/api', socioRoutes);
app.use('/api', fichaMedicaRoutes);
app.use('/api', tiposSangreRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

