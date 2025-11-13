import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    logo: { type: String, required: [true, 'Logo is required'] },
    name: { type: String, required: [true, 'Name of the extension required'] },
    description: { type: String, required: [true, 'Description of the extension required'] },
    isActive: { type: Boolean, required: [true, 'Active status is required'] }
})

const cardModel = mongoose.model('card', cardSchema)
export default cardModel