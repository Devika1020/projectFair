const express = require('express')
const userController = require('../Controllers/userController')
const projectController=require('../Controllers/projectController')
const router = new express.Router()
const jwtMiddleware=require('../Middlewares/jwtMiddleware')
const multerConfig = require('../Middlewares/multerMiddleware')
//register api (setting the path)
router.post('/register',userController.register)

//login api (setting the path)
router.post('/login',userController.login)

router.post('/add-project',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)

router.get('/home-project',projectController.getHomeProjects)
router.get('/all-project',jwtMiddleware,projectController.getallProjects)
router.get('/user-project',jwtMiddleware,projectController.getUserProject)

router.put('/user/edit',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)
//exporting router
module.exports = router