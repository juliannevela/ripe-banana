const db = require('../lib/utils/db');
const faker = require('faker');
const request = require('supertest');
const app = require('../lib/app');
const Studio = require('../lib/models/Studio');

describe('ripe-banana routes', () => {
	beforeEach(() => {
		return db.sync({ force: true });
	});

	beforeEach(() => {
		return Studio.create({
			name: 'test',
			city: 'test',
			state: 'test',
			country: 'test',
		});
	});

	it('POST creates a new studio', async () => {
		const { body } = await request(app).post('/api/v1/studios/create').send({
			name: 'test',
			city: 'test',
			state: 'test',
			country: 'test',
		});

		expect(body).toEqual({
			id: expect.any(Number),
			name: expect.any(String),
			city: expect.any(String),
			state: expect.any(String),
			country: expect.any(String),
		});
	});
});
