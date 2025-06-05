import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
    prn: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    gpa: {
        type: Number,
        required: true
    },
    courses: [{
        courseCode: String,
        courseName: String,
        grade: String,
        result: String
    }]
});

const Result = mongoose.model('result', resultSchema);
export default Result; 