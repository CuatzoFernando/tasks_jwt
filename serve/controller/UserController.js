'use strict'

const User = require('../model/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const salt = 10

const getUsers = async(req,res) =>{
	const users = await User.find()
	res.json(users)
}

const addOrUpdate = async (req,res) =>{
	let passwordsignup = await bcrypt.hash(req.body.password, salt)
	let user = {
		name: req.body.name,
		lastname: req.body.lastname,
		username: req.body.username,
		email: req.body.email,
		password: passwordsignup
	}

	let user_find = await User.findOne({ email: req.body.email })
	if ( user_find ) {
		if (req.params.id) {
			res.json(User.findOneAndUpdate(req.params.id, user))
		} else {
			res.json('Email registrado con anterioridad')
		}
  	} else {
  		res.json(User.create(user))
  	}
}

const deleteUser = async(req,res) =>{
	const users = await User.findOneAndRemove(req.params.id)
	res.json(users)
}

const signin = async (req,res)=>{
	let user = await User.findOne({email: req.body.email})
	if (!user) {
		res.json('credenciales incorrectas')
	}
	let compare = await bcrypt.compare(req.body.password, user.password)
	if (!compare){
		res.json('credenciales incorrectas')
	} else {
		res.json({
			token: jwt.sign({ _id: user._id }, `'${process.env.KEY}'`, { expiresIn: 60 * 60 })
		})
	}
}

module.exports = { getUsers, addOrUpdate, deleteUser, signin }