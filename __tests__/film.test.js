const db = require('../lib/utils/db');
const faker = require('faker');
const request = require('supertest');
const app = require('../lib/app');

describe('ripe-banana routes', () => {
	it('POST should creates a FILM', async () => {
		const studio = {id: 1, name:'Studio', city:'Portland', state: 'Oregon', country: ' U.S.A'};
		const actor = {id: 1, name: 'Will Smith', dob: '01/01/91', pob: 'Portland'}
		const res = await request(app)
		.post('/api/v1/films/create')
		.send({
			title: `${faker.lorem.words(3)}`,
			studio: studio.id,
			released: '2005',
			cast:[{role: `${faker.name.findName()}`, actor: actor.id}]
		})
		expect(res.body).toEqual({
			id: expect.any(Number),
			title: expect.any(String),
			studio: studio.id,
			released: '2005',
			cast: [{role: expect.any(String),
			actor: actor.id}]

		});
	});
});
