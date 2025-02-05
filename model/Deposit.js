const mongoose = require("mongoose")

const depositSchema = new mongoose.Schema({
    userMail: {
        type: String,
        required: true
    },
    transectionId: {
        type: String,
        required: true
    },
    depositAmount: {
        type: String,
        required: true
    },
    isApproved: {
        type: Boolean,
        required: false,
        default: false
    }
}, { timestamps: true });

const Deposit = mongoose.model("Deposit", depositSchema);

module.exports = Deposit;