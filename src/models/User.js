//declaramos el mongosse
const {Schema, model} = require('mongoose');
//declaramos el archio que nos manejara las contraseñas encriptadas
const bcrypt = require('bcryptjs');
//creamos un esquema
const UserSchema = new Schema({
    //nombre del campo y sus tipos de datos
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
}, {
    //Fecha de creacion de registros y actualizaciones
    timestamps: true
});
//creamos la funcion que nos encriptara la contraseña
UserSchema.methods.encrypPassword = async password => {
   const salt = await bcrypt.genSalt(10);
   return await bcrypt.hash(password, salt);
}
//creamos la funcion que nos va a comparar los campos de base de datos y los colocados por el usuario
UserSchema.methods.matchPassword = function(password)  {
   return await bcrypt.compare(password, this.password)
}
//exportamos el archivo para que se pueda utilizar desde otros archivos
module.exports = model('User', UserSchema);
