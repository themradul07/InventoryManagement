const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
    name: String,
    token: Number,
    img: String,
    description: String,
    isAvailabe: {
        type: Boolean,
        default: true,

    }
});


export default mongoose.models?.Equipment || mongoose.model("Equipment", equipmentSchema);
