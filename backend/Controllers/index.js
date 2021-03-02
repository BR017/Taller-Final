const Auto = require('../Model/auto');

function GetAutos(req, res) {
    Auto.find({})
        .then(auto => {
            if (auto.length) {
                res.status(200).send(auto)
            }
            else {
                res.status(500).send({ mensaje: 'No hay datos registrados' })
            }
        })
}
function Buscar(req, res, next) {
    let query = {};
    query[req.params.key] = req.params.value;
    Auto.find(query)
        .then(auto => {
            if (!auto.length) return next();
            req.body.auto = auto;
            return next();
        }).catch(error => {
            req.body.error = error;
            next();
        })
}
function Mostrar(req, res) {
    if (req.body.error) return res.send({ error: req.body.error });
    if (!req.body.auto) return res.status(500).send({ mensaje: 'No hay datos registrados de su busqueda' });
    let auto = req.body.auto;
    return res.status(200).send({ auto });
}

function CreateAuto(req, res) {
    new Auto(req.body).save()
        .then(auto => {
            res.status(201).send(auto)
        })
        .catch(err=>{
            res.status(500).send(err)
        })
}
function ActualizarAuto(req,res){
    if(req.body.error) return res.status(500).send({error:req.body.error});
    if(!req.body.auto) res.status(500).send({ mensaje: 'No hay datos registrados de su busqueda' });
    let user = req.body.auto[0];
    auto = Object.assign(user,req.body);
    auto.save().then(auto => res.status(200).send({mensaje: 'Actualizado', auto})).catch(error => res.status(500).send({error}));
}
function EliminarAuto(req,res){
    if(req.body.error) return res.status(500).send({error:req.body.error});
    if(!req.body.auto) return res.status(404).send({message: 'NOT FOUND'});
    req.body.auto[0].remove().then(auto => res.status(200).send({mensaje: 'Eliminado', auto})).catch(error => res.status(500).send({error}));
}
module.exports = {
    GetAutos,
    Buscar,
    Mostrar,
    CreateAuto,
    ActualizarAuto,
    EliminarAuto
}

