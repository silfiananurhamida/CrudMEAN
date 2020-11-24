const mongoose = require('mongoose');

var Posisi = mongoose.model('Posisi', {
    position: { type: String }
});
module.exports = {Posisi} ;
// var Posisi = mongoose.Schema({
//     position: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Posisi"
//         }
//     ]
// })
// module.exports = {Posisi} ;