import { Router } from "express";
import { getAllCards, getActiveCards, getInactiveCards, createCard, updateCardById, deleteCard } from "../controllers/cardController.js";
import multer from "multer";


const cardRoutes = Router();
const upload = multer();

cardRoutes.get('/all', getAllCards)
cardRoutes.get('/active', getActiveCards)
cardRoutes.get('/inactive', getInactiveCards)
cardRoutes.post('/create', upload.single(), createCard)
cardRoutes.delete('/delete/:id', deleteCard)
cardRoutes.patch('/update/:id', updateCardById)

export default cardRoutes