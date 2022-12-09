const router = require('express').Router()
const JwtStrategy = require('../middleware/auth.middleware')
const userServices = require('./users.services')

router.get("/", JwtStrategy.authenticate('jwt', {session:false}) ,userServices.getAllUsers) //? /api/v1/users
router.post("/", userServices.postUser) //? /api/v1/users

router.get("/:id" ,JwtStrategy.authenticate('jwt', {session:false})  ,userServices.getUserById) //? /api/v1/users/:id
router.patch('/:id', JwtStrategy.authenticate('jwt', {session:false}) ,userServices.patchUser) //? /api/v1/users/:id
router.delete('/:id',JwtStrategy.authenticate('jwt', {session:false})  ,userServices.deleteUser) //? /api/v1/users/:id

module.exports = router