import { Router } from "express";
import { getAllCards, getActiveCards, getInactiveCards, createCard } from "../controllers/cardController.js";


const cardRoutes = Router();

cardRoutes.get('/all', getAllCards)
cardRoutes.get('/active', getActiveCards)
cardRoutes.get('/inactive', getInactiveCards)
cardRoutes.post('/create', createCard)

export default cardRoutes