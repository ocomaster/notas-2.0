//definimos un objeto
const indexCtrl = {};
//dentro del objeto creamos funciones que nos dara las rutas a las paginas
indexCtrl.renderIndex = (req, res)=> {
    res.render('index')
};

indexCtrl.renderAbout = (req, res)=> {
    res.render('about')
};
//exportamos el objeto
module.exports = indexCtrl;