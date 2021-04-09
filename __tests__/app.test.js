
const db = require('../lib/utils/db');
const faker = require('faker');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('ripe-banana routes', () => {
  beforeEach(() => {
    return db.sync({force:true});
  });

  it('POST creates a new actor', async () => {
    const res = await request(app)
    .post('/api/v1/actors/create')
    .send({
      name: `${faker.name.findName()}`,
      dob: `${faker.date.past()}`,
      pob: `${faker.address.country()}`
    })
    expect(res.body).toEqual({
      name: expect.any(String),
      dob: expect.any(Date),
      pob: expect.any(String)
    })
  })
  
});
