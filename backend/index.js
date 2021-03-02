const cors = require('cors');
const express = require('express');
// Coneccion A base de datos
require('../backend/Database/index')

const app = express();
const port = process.env.port || 3000

app.use(cors());
app.use(express.json());
app.use('/api/auto', require('./Routes/auto'));

app.listen(port, () => {
    console.log(`Aplicacion corriendo en el puerto ${port}`);
})