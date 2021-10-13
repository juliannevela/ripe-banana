const { Router } = require('express');
const Film = require('../models/Film');
const Studio = require('../models/Studio');

module.exports = Router()
	.post('/create', async (req, res, next) => {
		try {
			const newFilm = await Film.create(req.body);
			res.send(newFilm);
		} catch (err) {
			next(err);
		}
	})
	.get('/', async (req, res, next) => {
		try {
			const allFilms = await Film.findAll({
				attributes: ['id', 'title', 'released'],
				include: { model: Studio, attributes: ['id', 'name'] },
			});
			res.send(allFilms);
		} catch (err) {
			next(err);
		}
	})
	.get('/:id', async (req, res, next) => {
		try {
			const oneFilm = await Film.findByPk(req.params.id, {
				attributes: ['id', 'title', 'released'],
				include: { model: Studio, attributes: ['id', 'name'] },
			});
			res.send(oneFilm);
		} catch (err) {
			next(err);
		}
	});
