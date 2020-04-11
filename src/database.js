const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost/MONGODB_DB'

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology:true,
    useNewUrlParser:true    
})
.then(db => console.log('La base de datos esta conectada'))
.catch(err => console.log(err));