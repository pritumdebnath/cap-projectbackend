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
//   router.route('/:id').delete((req, res) => {  
//     Attraction.findByIdAndDelete(req.params.id)  
//       .then(() => res.json('Attraction deleted.'))  
//       .catch(err => res.status(400).json('Error: ' + err));  
//   });  
//   router.route('/update/:id').post((req, res) => {  
//     Exercise.findById(req.params.id)  
//       .then(exercise => {  
//         exercise.username = req.body.username;  
//         exercise.description = req.body.description;  
//         exercise.duration = Number(req.body.duration);  
//         exercise.date = _Date_.parse(req.body.date); exercise.save()  
//           .then(() => res.json('Exercise updated!'))  
//           .catch(err => res.status(400).json('Error: ' + err));  
//       })  
//       .catch(err => res.status(400).json('Error: ' + err));  
//   });


module.exports = router;