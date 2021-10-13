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

	it('POST creates a new actor', async () => {
		const res = await request(app)
			.post('/api/v1/actors/create')
			.send({
				name: `${faker.name.findName()}`,
				dob: `${faker.date.past()}`,
				pob: `${faker.address.country()}`,
			});

		expect(res.body).toEqual({
			id: expect.any(Number),
			name: expect.any(String),
			dob: expect.any(String),
			pob: expect.any(String),
		});
	});

	it('GET returns all actors', async () => {
		const res = await request(app).get('/api/v1/actors');

		expect(res.body).toEqual([
			{
				id: expect.any(Number),
				name: expect.any(String),
			},
			{
				id: expect.any(Number),
				name: expect.any(String),
			},
			{
				id: expect.any(Number),
				name: expect.any(String),
			},
		]);
	});

	// it('GET returns one actor by id', async () => {
	//   const {body} = await request(app)
	//   .post('/api/v1/actors/create')
	//   .send({
	//     name: `${faker.name.findName()}`,
	//     dob: `${faker.date.past()}`,
	//     pob: `${faker.address.country()}`
	//     })
	//   const res = await request(app)
	//   .get(`/api/v1/actors/${body.id}`)

	//   expect(res.body).toEqual({
	//     id: expect.any(Number),
	//     name: expect.any(String),
	//     dob: expect.any(String),
	//     pob: expect.any(String)
	//   })
	// })

	it('GET return on actor by id', async () => {
		const res = await request(app).get(`/api/v1/actors/2`);

		expect(res.body).toEqual({
			name: expect.any(String),
			dob: expect.any(String),
			pob: expect.any(String),
			Films: [
				{
					id: expect.any(Number),
					title: expect.any(String),
					released: expect.any(Number),
				},
				{
					id: expect.any(Number),
					title: expect.any(String),
					released: expect.any(Number),
				},
			],
		});
	});
});
