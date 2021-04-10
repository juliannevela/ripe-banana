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
});
