const {Router } = require('express');
const router = Router();
//dentro de la constante, son objetos que guardan las rutas creadas en el controlador
const {renderNoteForm, 
    createNewNote, 
    renderNotes,
    renderEditForm,
    updateNotes,
    deleteNotes
     } = require('../Controllers/notes.controller');
//formulario para crear, redireccion a controlador
router.get('/notes/add', renderNoteForm);
//guardando notas, redireccion a controlador
router.post('/notes/new-note',createNewNote);
//obteniendo informacion para editar, redireccion a controlador
router.get('/notes',renderNotes);
//editar notas, redireccion a controlador
router.get('/notes/edit/:id', renderEditForm);
//guardando datos, redireccion a controlador
router.put('/notes/editar/:id', updateNotes );
//eliminar datos, redireccion a controlador
router.delete('/notes/delete/:id', deleteNotes)
//exportamos para que sea utilizado en cualquier archivo del proyecto

module.exports = router

//node src/index.js comando para ejecutar los cambios en el proyecto