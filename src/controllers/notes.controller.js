const notesCtrl = {};

notesCtrl.renderNoteForm = (req,res) =>{
    res.send('Agregar notas');
};

notesCtrl.createNewNote = (req,res) =>{
    res.send('new nota');
};

notesCtrl.renderNotes = (req, res) =>{
    res.send(' Todas las notas');
};

notesCtrl.renderEditForm = (req,res) =>{
    res.send('editar form')
};

notesCtrl.updateNote = (req,res) =>{
    res.send('Update note');
};

notesCtrl.deleteNote = (req, res) =>{
    res.send('ELiminando nota')
};

module.exports = notesCtrl;