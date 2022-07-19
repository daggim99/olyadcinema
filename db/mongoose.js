const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

//"mongodb+srv://olyad-cinema:olyadcinemapassword@cluster0.qo5bg2z.mongodb.net/?retryWrites=true&w=majority"
