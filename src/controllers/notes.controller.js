const notesCtrl = {};
//incluimos el modelo donde haremos todas las funciones
const Note = require('../Models/Notes');
//controladores que redirigen segun la necesidad del usuario
//renderiza la vista del formulario que pedimos al crear
notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note');   
};
//Enviamos los datos a la base dedatos
notesCtrl.createNewNote = async (req, res) => {
    //creamos constante donde se almacenaran datos que vienen de la vista
    const {title, description } = req.body;
    //Colocamos en el array los datos que vienen de la vista
    const newNote = new Note({title, description});
    //como es un metodo asincrono, guardamos los datos
    await newNote.save();
    //redireccionamos a la vista de consulta
    res.redirect('/notes');
};
//Vista que rederizara el consultar
notesCtrl.renderNotes = async (req, res) => {
    //consultamos a la base de datos y consultamos con las propiedades find().lean()
    const notes = await Note.find().lean();
    //renderizamos la vista con el array que colocamos en la vista
    res.render('notes/all-notes', {notes});
};
//Vista que obtendra los datos para editarlos
notesCtrl.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id).lean();
    res.render('notes/edit-note', {note});
};
//actualiza los datos
notesCtrl.updateNotes = async (req, res) => {
    const {title, description} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title, description})
    res.redirect('/notes');
};
//eliminaran datos 
notesCtrl.deleteNotes = async (req, res) => {
    //buscamos el dato y lo eliminamos directamente con el id
    await Note.findByIdAndDelete(req.params.id);
    //redireccionamos a la vista que nos consulta
    res.redirect('/notes');
}
//exportamos el objeto para que sea utilizado desde cualquier archivo
module.exports = notesCtrl;