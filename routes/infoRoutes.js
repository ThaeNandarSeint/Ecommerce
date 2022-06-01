const express = require('express');
const router = express.Router();
const Info = require('../models/Info')
const infoController = require('../controllers/infoController')

router.get('/', infoController.getAllInfos)
router.post('/', infoController.addInfos)
router.get('/:id', infoController.getById)
router.put('/:id', infoController.updateInfo)
router.delete('/:id', infoController.deleteInfo)

module.exports = router