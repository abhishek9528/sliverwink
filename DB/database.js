const mongoose = require("mongoose")


mongoose.set('strictQuery', false)
mongoose.connect("mongodb://localhost:27017/Silverwink", (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Connect To Database")
    }
})

let StudentSchema = new mongoose.Schema({
    enrollment: {
        type: Number,
        unique: true,
        trim: true
    },
    photo: {
        type: String,
        trim: true
    },
    student_name: {
        type: String,
        required: true,
        uppercase: true,
        trim: true
    },
    father_name: {
        type: String,
        required: true,
        uppercase: true,
        trime: true
    },
    mother_name: {
        type: String,
        required: true,
        uppercase: true,
        trim: true
    },
    date_of_birth: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },
    gender: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },
    signature: {
        type: String,
        trim: true
    },
    complete_address: {
        type: String,
        required: true,
        trime: true,
        uppercase: true
    },
    qualification: {
        type: String,
        required: true,
        trim: true
    },
    exam_pass: {
        type: String,
    },
    board: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },
    marks: {
        type: Number,
        required: true,
        trim: true
    },
    passing_year: {
        type: String,
        required: true,
        trim: true
    },
    id_number: {
        type: String,
        required: true,
        trim: true
    },
    id_type: {
        type: String,
        required: true,
        trim: true
    },
    mobile_number: {
        type: Number,
        required: true,
        trim: true
    },
    email_id: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    total_fee: {
        type: String,
        trim: true
    },
    course_name: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        required: true,

    }
})

// const Student = new mongoose.model("Register",StudentSchema,"Registration");

// module.exports = Student;

module.exports.Student = new mongoose.model("Register",StudentSchema, "Registration")


let CourseSchema = new mongoose.Schema({
    course_name: {
        type: String,
        required: true,
        trim: true,
        uppercase:true
    },
    course_availablity: {
        type: String,
        required: true
    },
    course_price: {
        type: String,
        required:true
    },
    course_duration: {
        type: String,
        required:true
    },
    course_content: {
        type:String,
        required:true
    }
})

module.exports.Course = new mongoose.model("Course", CourseSchema, "Courses")