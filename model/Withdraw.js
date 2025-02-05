const mongoose = require("mongoose")

const withdrawSchema = new mongoose.Schema({
    userMail: {
        type: String,
        required: true
    },
    userAddress: {
        type: String,
        required: true
    },
    withdrawAmount: {
        type: String,
        required: true
    },
    isApproved: {
        type: Boolean,
        required: false,
        default: false
    }
}, { timestamps: true });

const Withdraw = mongoose.model("Withdraw", withdrawSchema);

module.exports = Withdraw;