const {Router} = require('express');
const router = Router();

const {
    renderNoteForm,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote
} = require('../controllers/notes.controller');

router.get('/notes/add', renderNoteForm);

router.post('/notes/new-note', createNewNote);

//todas las ri¿utas
router.get('/notes', renderNotes);

router.get('/notes/edit/:id', renderEditForm );

router.put('/notes/editar/:id', updateNote);

router.delete('/notes/delete/:id', deleteNote);





module.exports = router