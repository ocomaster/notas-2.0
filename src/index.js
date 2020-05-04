require('dotenv').config();
//requerimos el server.js y queda guardado en una variable que trabajara como objeto de lap aplicacion
const app = require('./server')
require('./database');

app.listen(app.get('port'), ()=> {
    console.log('server on port', app.get('port'))
})