import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    image: { type: Object, required: [true, 'image is required'] },
    name: { type: String, required: [true, 'Name of the extension required'] },
    description: { type: String, required: [true, 'Description of the extension required'] },
    isActive: { type: Boolean, required: [true, 'Active status is required'] }
}, { timestamps: true, versionKey: false })

const cardModel = mongoose.model('cardModel', cardSchema)
export default cardModel