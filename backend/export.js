
const path = require('path');
const csvFilePath = path.join(__dirname, "..", "ml", "Data", "db2.csv");
const csv = require("csvtojson");
const mongoose = require("mongoose");
const config = require('config');
let db = config.get("mongoURI");
// Connecting to MongoDB
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    console.log(JSON.parse(jsonObj[7].genres));
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */
  });
mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() =>{
  } )
  .catch((err) => console.log(err));

// const genre = require("./utils/genreNames");
// const mongoose = require("mongoose");
// const Genre = require("./models/genre");
// const config = require('config');
// let db = config.get("mongoURI");
// // Connecting to MongoDB
// mongoose
//   .connect(db, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then(() =>{
//         for (let key in genre){
//             const temp = new Genre.Genre({name:genre[key]});
//             temp.save();
//         }
//   } )
//   .catch((err) => console.log(err));

