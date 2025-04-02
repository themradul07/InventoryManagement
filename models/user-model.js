import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contact: { type: Number, required: true },
    rank: { type: String, required: true },
    bag: { type: Array, default: [] },  // Ensure 'bag' is an array with a default value
    token: { type: Number, default: 0 }, // Ensure 'token' has a default value
}, { timestamps: true }); // Adds createdAt & updatedAt fields automatically

export default mongoose.models?.User || mongoose.model("User", UserSchema);
