const db = require('../lib/utils/db');
const faker = require('faker');
const request = require('supertest');
const app = require('../lib/app');
const Reviewer = require('../lib/models/Reviewer')

describe('ripe-banana routes', () => {
	beforeEach(() => {
		return db.sync({force:true});
	});
	it('POST creates a new Reviewer', async () => {
		const res = await request(app)
		.post('/api/v1/reviewers/create')
		.send({
			name: `${faker.name.findName()}`,
			company:`${faker.company.companyName()}`

		})
		expect(res.body).toEqual({
			id: expect.any(Number),
			name: expect.any(String),
			company: expect.any(String),
				});
	});
	it('GET returns all reviewers', async () => {
		await Reviewer.bulkCreate([
			{
		name:`${faker.name.findName()}`,
		company:`${faker.company.companyName()}`},
			{
		name:`${faker.name.findName()}`,
		company:`${faker.company.companyName()}`}
		])
		const res = await request(app)
		.get('/api/v1/reviewers');
		expect(res.body).toEqual([{
			id: expect.any(Number),
			name: expect.any(String),
			company: expect.any(String),
				},
			{id: expect.any(Number),
				name: expect.any(String),
				company: expect.any(String),
					}]);
	});
	it('GET return a reviewer by id', async () => {
		const reviewer = await Reviewer.create(
			{
		name:`${faker.name.findName()}`,
		company:`${faker.company.companyName()}`});
		const res = await request(app)
		.get(`/api/v1/reviewers/${reviewer.id}`);
		expect(res.body).toEqual({
			id: expect.any(Number),
			name: expect.any(String),
			company: expect.any(String),
				})
	});
	it('PATCH updates a reviewer by id', async () => {
		const reviewer = await Reviewer.create(
			{
		name:`${faker.name.findName()}`,
		company:`${faker.company.companyName()}`});
		const res = await request(app)
		.patch(`/api/v1/reviewers/${reviewer.id}`)
		.send({name:'Julie Josie Vela Cantu'})
		expect(res.body).toEqual({
			id: reviewer.id,
			name: 'Julie Josie Vela Cantu',
			company: reviewer.companyName,
				})
	});
	});
