const db = require('../lib/utils/db');
const faker = require('faker');
const request = require('supertest');
const app = require('../lib/app');
const Studio = require('../lib/models/Studio');

describe('ripe-banana routes', () => {
	beforeEach(() => {
		return db.sync({ force: true });
	});

	it('POST creates a new studio', async () => {
		const studio = await Studio.create({
			name: `${faker.company.companyName()}`,
			city: `${faker.address.city()}`,
			state: `${faker.address.state(true)}`,
			country: `${faker.address.country()}`,
		});

		expect(studio.dataValues).toEqual({
			id: expect.any(Number),
			name: expect.any(String),
			city: expect.any(String),
			state: expect.any(String),
			country: expect.any(String),
		});
	});

	it('GET returns an array of allStudios', async () => {
		const { body } = await request(app).get('/api/v1/studios');

		expect(body).toEqual([]);
	});
});
