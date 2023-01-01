const mongoose = require("mongoose")
let url = "mongodb://localhost:27017/Silverwink";
mongoose.set('strictQuery', true)
mongoose.connect(url)
    .then(() => {
        console.log("Connected To Database")
    })
    .catch((err) => {
        console.log("Database Not Connected", err)
    })


let institute_schema = mongoose.Schema({
    institute_name: {
        type: String,
        required: true,
    },
    institute_address: {
        type: String,
        required: true,
        trim: true
    },
    institute_id: {
        type: String,
        unique: true,
        require: true,
    },
    institute_email: {
        type: String,
        unique: true,
        require: true,
    },
    institute_contact: {
        type: Number,
        unique: true,
        require: true,
    }
})
let student_schema = new mongoose.Schema({
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
        trim: true
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
let course_schema = new mongoose.Schema({
    
    course_name: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },
    course_availablity: {
        type: String,
        required: true
    },
    course_price: {
        type: String,
        required: true
    },
    course_duration: {
        type: String,
        required: true
    },
    course_content: {
        type: String,
        required: true
    }
});


module.exports.Courses = new mongoose.model("Courses",course_schema,"Courses")
module.exports.Student = new mongoose.model("Student", student_schema, "Students")
module.exports.Institute = new mongoose.model("Institute", institute_schema, "Institutes")
module.exports.url = url;