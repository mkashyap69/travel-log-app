const mongoose = require('mongoose');

const { Schema } = mongoose;

const logEntrySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    comments: String,
    ratings: {
      type: Number,
      required: true,
      min: [0, 'Min rating should be zero'],
      max: 5,
    },
    image: String,
    latitude: { type: Number, required: true, min: -90, max: 90 },
    longitude: { type: Number, required: true, min: -180, max: 180 },
    visitDate: {
      type: Date,
      default: Date.now,
      required: true,
    },
    isDone: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true, //will automatically create created at and updated at
  }
);

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;
