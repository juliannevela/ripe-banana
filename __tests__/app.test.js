
const db = require('../lib/utils/db');
const faker = require('faker');

const request = require('supertest');
const app = require('../lib/app');
const Actor = require('../lib/models/Actor');

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
      id: expect.any(Number),
      name: expect.any(String),
      dob: expect.any(String),
      pob: expect.any(String)
    })
  })

  it('GET returns all actors', async () => {
    await Actor.bulkCreate([
      {
      name: `${faker.name.findName()}`,
      dob: `${faker.date.past()}`,
      pob: `${faker.address.country()}`
      },
      {
      name: `${faker.name.findName()}`,
      dob: `${faker.date.past()}`,
      pob: `${faker.address.country()}`
      }])

    return request(app)
      .get('/api/v1/actors')
      .then((res) => {
        expect(res.body).toEqual([
          {
          id: expect.any(Number),
          name: expect.any(String),
          dob: expect.any(String),
          pob: expect.any(String)
        },{
          id: expect.any(Number),
          name: expect.any(String),
          dob: expect.any(String),
          pob: expect.any(String)
        }])
      })
  })

  it('GET returns one actor by id', async () => {
    const actor = {
      name: `${faker.name.findName()}`,
      dob: `${faker.date.past()}`,
      pob: `${faker.address.country()}`
    };
    await request(app)
    .post('/api/v1/actors/create')
    .send(actor)

    const res = await request(app)
    .get(`/api/v1/actors/${actor.id}`)

    expect(res.body).toEqual({
      ...actor,
      id: expect.any(Number)
    })
  })

});
