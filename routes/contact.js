const router = require('express').Router();
let Contact = require('../models/contact.model');


router.route('/').get((req, res) => {
    Contact.find()
      .then(contacts => res.json(contacts))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  
  router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;
    const comment = req.body.comment;
  
    const newContact = new Contact({
      name,
      email,
      number,
      comment
    })
    newContact.save()
      .then(() => res.json('Contact added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  
  module.exports = router;