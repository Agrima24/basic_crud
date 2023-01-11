const express = require('express')
const router = express.Router()
const user = require('../controllers/userController')


router.get('/get_user',user.getUser)
router.post('/create_user',user.createUser)
router.patch('/update_user/:id',user.updateUser)
router.delete('/delete_user/:id',user.deleteUser)

module.exports = router