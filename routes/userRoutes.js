const express = require('express');
const { signup, login, verifyToken, getUser, logout } = require('../controllers/userController');
const Router = express.Router();

Router.post('/signup', signup)
Router.post('/login', login)
Router.get('/user', verifyToken, getUser)
Router.post('/logout', verifyToken, logout)

module.exports = Router;