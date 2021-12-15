const mongoose = require('mongoose')

const notice=new mongoose.Schema({
    number: {type: Number, required: true}
},
    {collection: 'room-details'}
)

const model=mongoose.model('room',notice)

module.exports=model