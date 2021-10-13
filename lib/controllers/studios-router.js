const { Router } = require('express');
const Film = require('../models/Film');
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
			const allStudios = await Studio.findAll();
			res.send(allStudios);
		} catch (err) {
			next(err);
		}
	})
	.get('/:id', async (req, res, next) => {
		try {
			const singleStudio = await Studio.findByPk(req.params.id, {
				attributes: ['id', 'name', 'city', 'state', 'country'],
				include: { model: Film, attributes: ['id', 'title'] },
			});

			res.send(singleStudio);
		} catch (err) {
			next(err);
		}
	});
