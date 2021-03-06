const { Router } = require('express');
const Actor = require('../models/Actor');
const Film = require('../models/Film');

module.exports = Router()
	.post('/create', async (req, res, next) => {
		try {
			const newActor = await Actor.create(req.body);
			res.send(newActor);
		} catch (err) {
			next(err);
		}
	})
	.get('/', async (req, res, next) => {
		try {
			const allActors = await Actor.findAll({
				attributes: ['id', 'name'],
			});
			res.send(allActors);
		} catch (err) {
			next(err);
		}
	})
	.get('/:id', async (req, res, next) => {
		try {
			const oneActor = await Actor.findByPk(req.params.id, {
				attributes: ['name', 'dob', 'pob'],
				include: [{ model: Film, attributes: ['id', 'title', 'released'] }],
			});

			res.send(oneActor);
		} catch (err) {
			next(err);
		}
	});
