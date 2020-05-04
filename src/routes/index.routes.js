//requerimos el express
const {Router} = require('express');
//instanciamos el objeto que vamos a usar
const router = Router();
//creamos los objetos llamandolo desde su archivo raiz
const {renderIndex, renderAbout} = require('../Controllers/index.controller');
//ruta que apunta a paginas ya configuradas
router.get('/', renderIndex);

router.get('/about', renderAbout);
//exportamos los archivos
module.exports = router;