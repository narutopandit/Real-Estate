import express from 'express'
import { addToFav, allBooking, bookedVist, cancelBook, createUser, getAllFav } from '../controller/userController.js';
 
const router = express.Router();
router.use(express.json());

router.post('/register',createUser);
router.put('/booked/:id',bookedVist);
router.get('/allBooking',allBooking);
router.delete('/cancelBook/:id',cancelBook);
router.put('/addFav/:rid',addToFav);
router.get('/getAllFav',getAllFav);
export {router as userRoute};