const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");


// passportlocal already define username and password we do not need to add it ans authentication also
const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
});


userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);