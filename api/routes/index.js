const express = require('express');
const router = express.Router();


const userController = require('../controller/userController.js');


router.get('/profile/:id',userController.userProfile);
router.post('/register' ,userController.userRegister);
router.post('/register/:referal' ,userController.referalUser);
router.post('/login', userController.userLogin);



// router.put('/updatePlace',verifyToken,userController.updatePlace);

module.exports = router;