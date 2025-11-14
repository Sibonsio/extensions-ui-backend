import { Router } from "express";
import { getAllCards, getActiveCards, getInactiveCards, createCard, updateCardById, deleteCard } from "../controllers/cardController.js";
import multer from "multer";


const cardRoutes = Router();
const uploadPath = process.env.PATH
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath)
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage });

cardRoutes.get('/all', getAllCards)
cardRoutes.get('/active', getActiveCards)
cardRoutes.get('/inactive', getInactiveCards)
cardRoutes.post('/create', upload.single('image'), createCard)
cardRoutes.delete('/delete/:id', deleteCard)
cardRoutes.patch('/update/:id', updateCardById)

export default cardRoutes