import mongoose from 'mongoose'

const studentSchema = mongoose.Schema({
  name:{
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
    min: 0,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

const studentModels = mongoose.model('grades', studentSchema, 'grades');

export {studentModels};