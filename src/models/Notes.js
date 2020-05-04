//requerimos el mongoose para trabajar con datos
const {Schema, model} = require('mongoose');
//creamos el esquema que nos contendra los datos que vamos a crear en la tabla
 const NoteSchema = new Schema({
     //nombre  del campo
    title: {
        //tipos de datos
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},{
    //campos que nos colocara las fechas de creacion y actualizacion
    timestamps: true
})
//exportamos el modulo para que cualquier archivo lo pueda utilizar
module.exports = model('Note', NoteSchema);