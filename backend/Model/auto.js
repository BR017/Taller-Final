// importar mongoose
const { Schema,model } = require('mongoose');

const ShemaAuto = new Schema({
    marca: {
        type:String,
        required:true
    },
    modelo: {
        type:String,
        required:true
    },
    color: {
        type:String,
        required:true
    },
    precio: {
        type:Number,
        required:true
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    }
})

// Expotamos la colecion autos
const Auto = model('auto', ShemaAuto);
module.exports = Auto;