'use strict'
const jwt = require('jsonwebtoken')

const verifyToken= async(req,res, next) =>{
	if (!req.headers.authorization) {
		res.status(401)
	}
	let token = req.headers.authorization.split(' ')[1];
	if (token === null) {
		res.status(401)
	} else {
		let payload = jwt.verify(token, `'${process.env.KEY}'`)
		req.userId = payload._id
	}
	next()
}

module.exports = {verifyToken}