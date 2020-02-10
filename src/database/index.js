const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  })
  .then(() => console.log('DB Connected!'))
  .catch(err => {
    console.log(err.message);
  });
mongoose.Promise = global.Promise;

module.exports = mongoose;