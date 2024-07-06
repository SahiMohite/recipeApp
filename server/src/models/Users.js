import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    savedRecipes: [{type: mongoose.Schema.Types.ObjectId, ref: "recipes"}]
});

export const UserModel = mongoose.model('users', UserSchema);  // users -> collection will form in database Cluster0 of mongodb where user data will store 
// following defined userSchema

