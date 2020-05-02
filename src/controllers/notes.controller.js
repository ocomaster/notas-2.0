const notesCtrl = {};
const Note = require('../models/Note');

notesCtrl.renderNoteForm = (req,res) =>{
    res.render('notes/new-note');

};

notesCtrl.createNewNote = async (req,res) =>{
    const {title, description} = req.body; 
    const newNote = new Note({title, description});
    await newNote.save();
    res.send('Nota creada');
};

notesCtrl.renderNotes = async (req, res) =>{
    const notes = await Note.find().lean();
    res.render('notes/all-notes',{notes})
};

notesCtrl.renderEditForm = async (req,res) =>{
  const note = await Note.findById(req.params.id).lean();
    res.render('notes/edit-note',{note});
};

notesCtrl.updateNote = (req,res) =>{
    console.log(req.body);
    res.send('Update note');
};

notesCtrl.deleteNote = (req, res) =>{
    res.send('ELiminando nota')
};

module.exports = notesCtrl;