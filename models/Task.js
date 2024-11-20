const mongoose = require('mongoose');

// {
//   name:String, completed: Boolean
// }

const TaskSchema = new mongoose.Schema(
  {
    // id: {
    //   type: Number,
    //   required: [true, 'id is missing'],
    // },
    name: {
      type: String,
      required: [true, 'need to provide a name'],
      trim: true, //removes excess spaces in the req.body data
      maxlength: [20, 'cannot be more than 20 chars'],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: 'vKey' }
);

module.exports = mongoose.model('Task', TaskSchema);
