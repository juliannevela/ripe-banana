const { Router } = require('express');
const Studio = require('../models/Studio');

module.exports = Router()
	.post('/create', async (req, res, next) => {
		try {
			const newStudio = await Studio.create(req.body);
			res.send(newStudio);
		} catch (err) {
			next(err);
		}
	})
	.get('/', async (req, res, next) => {
		try {
			const allStudios = await Studio.findAll(req.body);
			res.send(allStudios);
		} catch (err) {
			next(err);
		}
	})
	.get('/:id', async (req, res, next) => {
		try {
			const singleStudio = await Studio.findByPk(req.params.id);
			res.send(singleStudio);
		} catch (err) {
			next(err);
		}
	});
