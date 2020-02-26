const { Router } = require('express')
const router = Router()

const tasks = require('../controller/TaskController')

router.get('/tasks', tasks.getTasks)
router.post('/tasks', tasks.addTask)
router.put('/tasks/:id', tasks.updateTask)
router.delete('/tasks/:id', tasks.deleteTask)

module.exports = router