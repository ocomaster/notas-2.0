//Vamos a utlizar el framework del servidor new
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverRide = require('method-override');
//ejecutamos la funcion que nos devuelve un objeto y generalmente lo guardamos en app
//inicializacion
const app = express();
//El archivo index es el encargado de arrancar todo en general(servidores, condfiguraciones, etc)
//===================================================================================================
                                            //CONFIGURACIONES
//===================================================================================================
//Esto nos sirve para poner por defecto algun puerto que escuche el computador, de lo contrario se le asigna uno.
app.set('port', process.env.PORT || 4000);
//Establecemos la carpeta view explicitamente ya que node no lo encontrara a la raiz del proyecto
app.set('views', path.join(__dirname, 'Views'));
//Establecemos el motor de plantillas que vamos a utilizar en el proyecto 
app.engine('.hbs', exphbs({
    //Definimos la vista por defecto
    defaultLayout: 'main',
    //configuramos la vista layout, dandole la ubicacion donde esta alojada
    layoutsDir: path.join(app.get('views'), 'layouts'),
    //configuramos las partials, dandole la ubicacion donde esta alojada
    partialsDir: path.join(app.get('views'), 'partials'),
    //configuramos la extension que estaremos utilizando en las vistas, o sea los html
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//====================================================================================================
                                            //MIDDLEWARES
//====================================================================================================
//Configuracion que nos coloca la vistas en un tipo JSON y asi poder manipularlo
app.use(express.urlencoded({extended: false}));
//configuramos morgan para ver las peticiones y los datos enviados por consola(etapa de desarrollo)
app.use(morgan('dev'));
//requerido desde la funcion methodOverRide, esto nos facilita la Peticiones PUT y DELETE
//a la hora de actualizar o eliminar, ya que html no maneja directamente este tipo de peticiones
app.use(methodOverRide('_method'))
//====================================================================================================
                                            //GLOBAL VARIABLES
//====================================================================================================

//====================================================================================================
                                            //Routes
//====================================================================================================
//configuramos una ruta por defecto
app.use(require('./Routes/index.routes'));
//rutas por defectos
app.use(require('./Routes/Notes.routes'));
//====================================================================================================
                                            //STATIC  FILES
//====================================================================================================
//definiremos cual es la carpeta estatica, o sea la carpeta donde estaran los estilos de la pagina
app.use(express.static(path.join(__dirname, 'Public')));

module.exports = app;