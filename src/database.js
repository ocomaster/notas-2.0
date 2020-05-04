//empezamos con la configuracion de la base de datos. Llamamos el archivo que requerimos
const mongoose = require('mongoose');
//definimos la variable que nos va a guardar la direccion donde esta alojada la base de datos que vamoa a afectar
//esto estara guardado en nuestro archivo .env para  mas seguridad 
const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;
//definimos la conexion a la base de datos 
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    
}).then(db => console.log('la base de datos esta conectada'))
  .catch(err => console.log(err));