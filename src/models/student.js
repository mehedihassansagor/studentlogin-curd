const mongoose = require('mongoose');
const validator = require('validator')


const studentLoginSchema = new mongoose.Schema({

    name: {
        type: String,
        minLength: 3,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: [true, " this emial already exist"],
        validat(value){
            if(! validator.isEmail(value)){
              throw new Error("this is not a valid email address");
            }
        }

    },
    phone: {
        type: Number,
        min: 10,
        required: true,
    },
    address: {
        type: String,
        minLength: 3,
    }
})


const StudentInfo = new mongoose.model("StudentInfo", studentLoginSchema);

module.exports = StudentInfo;