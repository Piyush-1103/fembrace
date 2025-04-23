const mongoose = require("mongoose");

const periodSchema = new mongoose.Schema({
    username: { type: String, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    days: [
      {
        date: { type: Date, required: true },
        flow: { type: Number },
        symptoms: [
          {
            name: { type: String },
            emoji: { type: String },
            category: { type: String },
            intensity: { type: Number },
          },
        ],
        note: { type: String },
      },
    ],
  });
  

module.exports = mongoose.model("Period",periodSchema);