import mongoose from "mongoose"
import cardModel from "../models/cardModel.js"

export const getAllCards = async (req, res) => {
    try {
        const cards = await cardModel.find()
        res.status(200).json({ success: true, data: { cards }, message: 'Cards successfully retrieved' })
    } catch (error) {
        res.status(404).json({ success: false, message: error.message })
    }
}
export const getActiveCards = async (req, res) => {
    try {
        const cards = await cardModel.find()
        const activeCards = cards.filter((card) => {
            return card.isActive === true
        })
        res.status(200).json({ success: true, data: { activeCards }, message: 'Card(s) successfully retrieved' })
    } catch (error) {
        res.status(404).json({ success: false, message: error.message })
    }

}
export const getInactiveCards = async (req, res) => {
    try {
        const cards = await cardModel.find()
        const inactiveCards = cards.filter((card) => {
            return card.isActive === false
        })
        res.status(200).json({ success: true, data: { inactiveCards }, message: 'Card(s) successfully retrieved' })
    } catch (error) {
        res.status(404).json({ success: false, message: error.message })
    }

}
export const getCardById = async (req, res) => {
    try {
        const { id } = req.params
        const card = await cardModel.findById(id)
        res.status(200).json({ success: true, data: { card }, message: 'Card successfully retrieved' })
    } catch (error) {
        res.status(404).json({ success: false, message: error.message })
    }

}
export const createCard = async (req, res) => {
    const session = await mongoose.startSession()
    session.startTransaction()
    try {
        const { logo, name, description, isActive } = req.body
        const createdCard = new cardModel({ logo, name, description, isActive })
        await createdCard.save({ session })
        await session.commitTransaction()
        res.status(201).json({ success: true, data: { createdCard }, message: 'Card successfully created' })
    } catch (error) {
        await session.abortTransaction()
        res.status(400).json({ success: false, message: error.message })
    } finally {
        session.endSession()
    }

}
export const updateCardById = async (req, res) => {
    try {
        const { id } = req.params
        const { logo, name, description, isActive } = req.body
        const updateCard = await cardModel.findById(id, { logo, name, description, isActive }, { new: true })
        res.status(200).json({ success: true, data: { updateCard }, message: 'Card successfully updated' })
    } catch (error) {
        res.status(404).json({ success: false, message: error.message })
    }

}
