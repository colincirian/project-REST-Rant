const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: '' },
  state: { type: String, default: 'USA' },
  founded: Number
})

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })
  
module.exports = mongoose.model('Place', placeSchema)
module.exports.Place = require('/places')