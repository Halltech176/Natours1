// configuring mongoDB
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

// const DB = process.env.DATABASE.replace(
//   '<PASSWORD>',
//   process.env.DATABASE_PASSWORD
// );

mongoose
  .connect('mongodb://localhost:27017/Natours', {
    // useFindAndModify: false,
    useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then((con) => {
    // console.log(con.connections);
    console.log('DB connections successful...');
  });

// console.log(process.env);
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});
