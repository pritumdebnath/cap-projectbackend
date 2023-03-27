const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;


connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const attractionsRouter = require('./routes/attractions');  
const contactRouter = require('./routes/contact');  
const bookingRouter = require('./routes/booking');  

app.use('/attractions', attractionsRouter);  
app.use('/contactus', contactRouter);
app.use('/booking', bookingRouter);

app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});