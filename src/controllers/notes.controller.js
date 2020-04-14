const notesCtrl = {};

notesCtrl.renderNoteForm = (req,res) =>{
    res.render('notes/new-note');

};

notesCtrl.createNewNote = (req,res) =>{
    console.log(req.body);
    
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