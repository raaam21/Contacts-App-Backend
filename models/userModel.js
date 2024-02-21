const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username :{
        type : String,
        required : [true,"Please add username"],
    },
    email:{
        type:String,
        required: [true,"PLease add email"],
        unique:[true,"Email already registered"]
    },
    password:{
        type:String,
        required:[true,"Please add user Password"]
    }
},
{
    timestamps:true
});

module.exports = mongoose.model("User",userSchema);