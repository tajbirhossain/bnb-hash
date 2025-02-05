const mongoose = require("mongoose")

const referSchema = new mongoose.Schema({
    countStart: {
        type: Number,
        required: false,
        default: 1000
    }
}, { timestamps: true });

const Refer = mongoose.model("Refer", referSchema);

module.exports = Refer;