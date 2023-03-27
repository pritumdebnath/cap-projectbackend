const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  emailaddress: {
    type: String
  },
  phonenumber: {
    type: String
  },
  date: {
    type: Date
  },
  time: {
    type: String
  },
  bookingcomment: {
    type: String
  }
})
// ,{
//   timestamps: true
// })

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;