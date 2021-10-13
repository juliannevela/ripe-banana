require('../lib/models/associations');
const db = require('../lib/utils/db');
const faker = require('faker');
const request = require('supertest');
const app = require('../lib/app');
const seed = require('../lib/utils/seed');

describe('ripe-banana routes', () => {
	beforeEach(() => {
		return db.sync({ force: true });
	});

	beforeEach(() => {
		return seed();
	});

	it('POST creates a new studio', async () => {
		const res = await request(app)
			.post('/api/v1/studios/create')
			.send({
				name: `${faker.company.companyName}`,
				city: `${faker.address.city()}`,
				state: `${faker.address.state(true)}`,
				country: `${faker.address.country()}`,
			});

		expect(res.body).toEqual({
			id: expect.any(Number),
			name: expect.any(String),
			city: expect.any(String),
			state: expect.any(String),
			country: expect.any(String),
		});
	});

	it('GET returns an array of allStudios', async () => {
		const { body } = await request(app).get('/api/v1/studios');

		expect(body).toEqual([
			{
				id: expect.any(Number),
				name: expect.any(String),
				city: expect.any(String),
				state: expect.any(String),
				country: expect.any(String),
			},
			{
				id: expect.any(Number),
				name: expect.any(String),
				city: expect.any(String),
				state: expect.any(String),
				country: expect.any(String),
			},
			{
				id: expect.any(Number),
				name: expect.any(String),
				city: expect.any(String),
				state: expect.any(String),
				country: expect.any(String),
			},
			{
				id: expect.any(Number),
				name: expect.any(String),
				city: expect.any(String),
				state: expect.any(String),
				country: expect.any(String),
			},
			{
				id: expect.any(Number),
				name: expect.any(String),
				city: expect.any(String),
				state: expect.any(String),
				country: expect.any(String),
			},
			{
				id: expect.any(Number),
				name: expect.any(String),
				city: expect.any(String),
				state: expect.any(String),
				country: expect.any(String),
			},
		]);
	});

	it('GET:id returns a single studio with the given id', async () => {
		const res = await request(app).get('/api/v1/studios/3');

		expect(res.body).toEqual({
			id: 3,
			name: expect.any(String),
			city: expect.any(String),
			state: expect.any(String),
			country: expect.any(String),
			Films: [
				{
					id: expect.any(Number),
					title: expect.any(String),
				},
			],
		});
	});
});
