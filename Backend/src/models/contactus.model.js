import mongoose from "mongoose";

const contactusSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
    }
}, { timestamps: true })

const Contactus = mongoose.model("Contactus", contactusSchema);

export default Contactus;