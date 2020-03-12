const { Router } = require('express')
const router = Router()

const tasks = require('../controller/TaskController')
const user = require('../controller/UserController')
const { verifyToken } = require('../middleware/signinMiddleware')

router.get('/tasks', tasks.getTasks)
router.get('/task/:id', verifyToken, tasks.getTask)
router.post('/tasks', verifyToken, tasks.addTask)
router.put('/tasks/:id', verifyToken, tasks.updateTask)
router.delete('/tasks/:id',verifyToken, tasks.deleteTask)

router.get('/users', user.getUsers)
router.post('/users', user.addOrUpdate)
router.post('/users/:id', user.addOrUpdate)
router.delete('/users/:id', user.deleteUser)

router.post('/signin', user.signin)


module.exports = router