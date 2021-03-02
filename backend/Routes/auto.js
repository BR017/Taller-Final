
const express = require('express');

const Router = express.Router();
const { GetAutos, Buscar, Mostrar, CreateAuto,EliminarAuto,ActualizarAuto } = require('../Controllers/index')
Router.get('/', GetAutos)
    .get('/:key/:value', Buscar, Mostrar)
    .post('/create', CreateAuto)
    .put('/:key/:value',Buscar,ActualizarAuto)
    .delete('/:key/:value',Buscar,EliminarAuto);

module.exports = Router