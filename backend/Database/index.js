const mongoose = require( 'mongoose' );
mongoose.connect( "mongodb://localhost/CrudAutos", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then( ()=> {
    console.log( "Base de datos conectada" );
})