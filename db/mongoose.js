const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://olyad-cinema:olyadcinemapassword@cluster0.qo5bg2z.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useCreateIndex: true,
});
