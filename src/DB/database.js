const mongoose = require("mongoose")


mongoose.set('strictQuery', false)
mongoose.connect("mongodb://localhost:27017", (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Connect To Database")
    }
})

let RagisterSchema = new mongoose.Schema({
    enrollment: {
        type: String,
        required:true,
        unique:true
    },
    photo: {
        type: String,
        required:true
    },
    student_name: {
        type:String,
        required:true
    },
    father_name: {
        type: String,
        required:true
    },
    mother_name: {
        type: String,
        required:true
    },
    date_of_birth: {
        type: String,
        required:true
    },
    category: {
        type: String,
        required:true
    },
    gender: {
        type: String,
        required:true
    },
    Sign_and: {
        type: String,
        required:true
    },
    complete_address: {
        type: String,
        required:true
    },
    qualification: {
        type: String,
        required:true
    },
    exam_pass: {
        type: String,
        required:true
    },
    Board: {
        type: String,
        required:true
    },
    marks: {
        type: String,
        required:true
    },
    passing_year: {
        type: String,
        required:true
    },
    Id_nmuber: {
        type: String,
        required:true
    },
    adhar_card: {
        type: String,
        required:true
    },
    id_card: {
        type: String,
        required:true
    },
    Driving_lic: {
        type: String,
        required:true
    },
    mobile_number: {
        type: String,
        required:true
    },
    Email_id: {
        type: String,
        required:true
    },
    total_fee: {
        type: String,
        required:true
    },
    course_name: {
        type: String,
        required:true
    }   

})

let Register = new mongoose.model("Register",RagisterSchema,"Registration")
module.exports = Register;
