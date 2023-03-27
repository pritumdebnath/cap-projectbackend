const router = require('express').Router();
let Booking = require('../models/booking.model');


router.route('/').get((req, res) => {
    Booking.find()
      .then(bookings => res.json(bookings))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  
  router.route('/add').post((req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const emailaddress = req.body.emailaddress;
    const phonenumber = req.body.phonenumber;
    const date = Date.parse(req.body.date);
    const time = (req.body.time);
    const bookingcomment = req.body.bookingcomment;
  
    const newBooking = new Booking({
      firstname,
      lastname,
      emailaddress,
      phonenumber,
      date,
      time,
      bookingcomment
    })
    newBooking.save()
      .then(() => res.json('Booking added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  
  module.exports = router;