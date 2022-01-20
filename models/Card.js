const mongoose = require("mongoose");
const { Schema } = mongoose;

const cardSchema = new Schema(
    {
        Name: { type: String, required: [true, 'Name is required']},
        Type: { type: String, required: [true, 'Type is required']},
        Level:{ type: Number, max: 12},
        Race: { type: String, required: [true, 'Race is required']},
        Attribute: String,
        ATK: Number,
        DEF: Number,
        Collected: {type: Boolean, default: 0},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Card", cardSchema);