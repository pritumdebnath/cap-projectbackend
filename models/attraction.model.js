const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const attractionSchema = new Schema({
  attraction: { type: String, required: true },
  address: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  ratings: { type: Number, required: true },
  user: { type: String, required: true },
}, {
  timestamps: true,
});

const Attraction = mongoose.model('Attraction', attractionSchema);


module.exports = Attraction;