const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const Notice=require('./models/notice.model')
const Student = require('./models/student.model')
const AdminUser = require('./models/admin.model')
const Warden = require('./models/warden.model')
const Mess = require('./models/mess.model')
const Vendor = require('./models/vendor.model')
const Room = require('./models/room.model')
const Staff = require('./models/staff.model')
const Payment = require('./models/payment.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs') //a hashing mechanism
const { db } = require('./models/notice.model')

app.use(cors())
app.use(express.json())

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses

mongoose.connect('mongodb+srv://hello:hello@cluster0.klx12.mongodb.net/hello?retryWrites=true&w=majority')

app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})
//name phone address roll registration email password
app.post('/api/studentregister', async(req,res) =>{
	console.log(req.body)
	try{
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await Student.create({
			name: req.body.name,
			phone: req.body.phone,
			address: req.body.address,
			roll: req.body.roll,
			registration: req.body.registration,
			email: req.body.email,
			password: newPassword
		})
		res.json({status:'ok'})
	} catch(err){
		res.json({status:'error', error: 'Duplicate email'})
	}
})

app.get('/api/studentlogin', async(req,res) =>{
	try{
		const user=await Student.find({})
		console.warn(user)
		return res.json({user})
	}
	catch(error){
		console.log({status:'error', error:'failed again'})
	}
})

app.get('/api/notice',async (req,res)=>{
	try{
		const user = await Notice.find({})
		console.warn(user)
		return res.json({user})
	}
	catch(error){
		console.log({status:'error', error:'failed again'})
	}
})


app.post('/api/notice', async(req,res) =>{

	try {
		await Notice.create({
			name: req.body.name ,
			notice: req.body.notice ,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		console.log(err)
		res.json({ status: 'error', error: err })
	}
})

app.post('/api/studentlogin', async(req,res) =>{
	const user=await Student.findOne({
		email: req.body.email
	})
	if(!user){
		return {status: 'error', error: 'Invalid login'}
	}
	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if(isPasswordValid){
		const token=jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({status: 'ok', user: token})
	} else{
		return res.json({status: 'error', user: false})
	}
})

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})


app.listen(process.env.PORT||1337, () => {
	console.log('Server started')
})
