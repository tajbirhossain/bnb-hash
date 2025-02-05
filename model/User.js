const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    refer: {
        type: String,
        required: false
    },
    joinedRefer: {
        type: String,
        required: false
    },
    joinedCount: {
        type: String,
        required: false
    },
    totalBalance: {
        type: String,
        required: false
    },
    rechargeBalance: {
        type: String,
        required: true
    },
    packageBuy: {
        type: String,
        required: false
    },
    withdrawAmount: {
        type: String,
        required: false
    },
    depositAmount: {
        type: String,
        required: false
    },
    taskComp: {
        type: Boolean,
        required: false
    },
    referBalance: {
        type: String,
        required: false,
        default: "0"
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;