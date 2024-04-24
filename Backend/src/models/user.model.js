import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const access_Token_Secret = "JapanPatelSDEDev#07@2002";
const refresh_Token_Secret = "JapanPatelSDEDev#07@2002";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female", "other"]
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String
    }
}, { timestamps: true })

userSchema.pre( "save", async function (next) {

    if(this.isModified("password")){

        this.password = bcrypt.hash( this.password, 10);
    }
    next();
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare( password, this.password);
}

userSchema.methods.generateAccessToken = function() {
    jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            password: this.password
        },
        access_Token_Secret
    )
}

userSchema.methods.generateRefreshToken = function() {
    jwt.sign(
        {
            _id: this._id,
        },
        refresh_Token_Secret
    )
}

const User = mongoose.model("User", userSchema);

export default User;