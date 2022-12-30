const mongoose = require("mongoose")


mongoose.set('strictQuery',true)
mongoose.connect("mongodb://localhost:27017/Silverwink")
    .then(() => {
    console.log("Connected To Database")
    })
    .catch((err) => {
    console.log("Database Not Connected",err)
})


let institute_schema = mongoose.Schema({
    institue_name: {
        type: String,
        required:true,
    },
    students: [
        {
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
        }
    ],
    courses: [
        {
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
        }
    ]

})

module.exports.Institute = new mongoose.model("Institute", institute_schema, "Institutes")
