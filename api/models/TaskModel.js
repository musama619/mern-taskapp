const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    dueDate: {
      type: Date,
    },
    isComplete: {
      type: Boolean,
    },
    isActive: {
      type: Boolean,
    },
    isDeleted: {
      type: Boolean,
    },
    isReminder: {
      type: Boolean,
    },
    color: {
      type: String,
    },
    user_id: {
      type: String,
      require: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', taskSchema);
