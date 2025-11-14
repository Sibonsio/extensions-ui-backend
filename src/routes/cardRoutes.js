import { Router } from "express";
import { getAllCards, getActiveCards, getInactiveCards, createCard, updateCardById, deleteCard } from "../controllers/cardController.js";


const cardRoutes = Router();

cardRoutes.get('/all', getAllCards)
cardRoutes.get('/active', getActiveCards)
cardRoutes.get('/inactive', getInactiveCards)
cardRoutes.post('/create', createCard)
cardRoutes.get('/delete/:id', deleteCard)
cardRoutes.patch('/update/:id', updateCardById)

export default cardRoutes