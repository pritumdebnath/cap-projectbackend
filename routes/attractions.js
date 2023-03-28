const router = require('express').Router();
let Attraction = require('../models/attraction.model');


router.route('/').get((req, res) => {
  Attraction.find()
    .then(attractions => res.json(attractions))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const attraction = req.body.attraction;
  const address = req.body.address;
  const image = req.body.image;
  const description = req.body.description;
  const ratings = Number(req.body.ratings);
  const user = req.body.user;

  const newAttraction = new Attraction({
    attraction,
    address,
    image,
    description,
    ratings,
    user,
  });


  newAttraction.save()
  .then(() => res.json('Attraction added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {  
    Attraction.findById(req.params.id)  
      .then(attraction => res.json(attraction))  
      .catch(err => res.status(400).json('Error: ' + err));  
  });  


module.exports = router;