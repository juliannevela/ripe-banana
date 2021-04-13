require('../lib/models/associations');
const db = require('../lib/utils/db');
const faker = require('faker');
const request = require('supertest');
const app = require('../lib/app');
const Film = require('../lib/models/Film');
const Studio = require('../lib/models/Studio');
const Actor = require('../lib/models/Actor');
const seed = require('../lib/utils/seed');

describe('ripe-banana routes', () => {
	beforeEach(() => {
		return db.sync({ force: true });
	});

	beforeEach(() => {
		return seed();
	});

	it('POST should creates a FILM', async () => {
		const res = await request(app)
			.post('/api/v1/films/create')
			.send({
				StudioId: 1,
				title: `${faker.lorem.words(3)}`,
				released: 2005,
			});

		expect(res.body).toEqual({
			StudioId: expect.any(Number),
			id: expect.any(Number),
			title: expect.any(String),
			released: expect.any(Number),
		});
	});

	it('GET should get a list of films', async () => {
		const res = await request(app).get('/api/v1/films');

		console.log(res.body);
		expect(res.body).toEqual([
			{
				id: expect.any(Number),
				title: expect.any(String),
				released: expect.any(Number),
				Studio: {
					id: expect.any(Number),
					name: expect.any(String),
				},
			},
			{
				id: expect.any(Number),
				title: expect.any(String),
				released: expect.any(Number),
				Studio: {
					id: expect.any(Number),
					name: expect.any(String),
				},
			},
			{
				id: expect.any(Number),
				title: expect.any(String),
				released: expect.any(Number),
				Studio: {
					id: expect.any(Number),
					name: expect.any(String),
				},
			},
			{
				id: expect.any(Number),
				title: expect.any(String),
				released: expect.any(Number),
				Studio: {
					id: expect.any(Number),
					name: expect.any(String),
				},
			},
			{
				id: expect.any(Number),
				title: expect.any(String),
				released: expect.any(Number),
				Studio: {
					id: expect.any(Number),
					name: expect.any(String),
				},
			},
			{
				id: expect.any(Number),
				title: expect.any(String),
				released: expect.any(Number),
				Studio: {
					id: expect.any(Number),
					name: expect.any(String),
				},
			},
		]);
	});

	it('GET:id should get a film by its id', async () => {
		const res = await request(app).get('/api/v1/films/3');

		expect(res.body).toEqual({
			id: 3,
			title: 'numquam ullam amet',
			released: 1992,
			Studio: {
				id: 3,
				name: 'Abernathy - Lindgren',
			},
		});
	});
});
