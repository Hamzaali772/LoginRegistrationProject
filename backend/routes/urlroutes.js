import express from 'express';
const router= express.Router()
import userData from "../controll/userControll.js";
import checkUserAuth from '../middleware/loggedAuth.js';
import upload from '../middleware/upload-middle.js';


// Apply authentication middleware to all routes under '/loggeduser'
router.use("/loggeduser",checkUserAuth)

// image
router.use('/update', upload.single('image'));

router.post('/register',userData.userRegistration)
router.post('/login',userData.userLogin)
router.get('/loggeduser',userData.userlogged)
router.put("/update/:id",userData.userUpdate)
router.put("/passwordchange/:id",userData.userPasswordupdate)
router.post("/forgetpassword/:id",userData.userDelete)
router.delete("/delete/:id",userData.userDelete)

export default router