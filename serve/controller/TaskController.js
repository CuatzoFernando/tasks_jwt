
'use strict'

const Task = require('../model/Task')

const getTasks = async(req,res) =>{
	const tasks = await Task.find()
	res.json(tasks)
}

const getTask = async(req,res) =>{
	const task = await Task.findOne({ _id: req.params.id})
	res.json(task)
}

const addTask = async (req,res, next) => {
	let tasks = await Task.create(req.body)

	res.json({
		tasks: tasks
	})
}

const updateTask = async(req,res) => {
	const tasks = await Task.findOneAndUpdate(req.params.id, req.body)
    res.json(tasks)
}

const deleteTask = async(req,res) =>{
	const tasks = await Task.findOneAndRemove(req.params.id)
	res.json(tasks)
}

module.exports = { getTasks, addTask, getTask, updateTask, deleteTask }