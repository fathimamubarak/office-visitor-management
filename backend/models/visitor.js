const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        phone: {
            type: String,
            required: true
        },

        email: {
            type: String
        },

        personToMeet: {
            type: String,
            required: true
        },

        purpose: {
            type: String,
            required: true
        },

        visitDate: {
            type: Date,
            default: Date.now
        },
        arrivalTime: {
             type: String,
             required: true
        },

       status: {
        type: String,
        enum: [
           "Pending",
           "Approved",
           "Rejected",
           "Checked-In",
           "Checked-Out"
    ],
    default: "Pending"
}
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Visitor", visitorSchema);