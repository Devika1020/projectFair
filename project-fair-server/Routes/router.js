const express = require('express')
const userController = require('../Controllers/userController')
const projectController=require('../Controllers/projectController')
const router = new express.Router()

//register api (setting the path)
router.post('/register',userController.register)

//login api (setting the path)
router.post('/login',userController.login)

router.post('/add-project',projectController.addProject)

//exporting router
module.exports = router