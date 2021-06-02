const mongoose = require("mongoose");

const DB =
  "mongodb+srv://root:root@1234@mydatabase.pqnvv.mongodb.net/Fotoley_Test?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connection Successful");
  })
  .catch((err) => console.log(err));
