import { Router } from "express";
import { getAllCards, getActiveCards, getInactiveCards, createCard, getCardById } from "../controllers/cardController.js";


const cardRoutes = Router();

cardRoutes.get('/all', getAllCards)
cardRoutes.get('/active', getActiveCards)
cardRoutes.get('/inactive', getInactiveCards)
cardRoutes.post('/create', createCard)
cardRoutes.get('/:id', getCardById)

export default cardRoutes