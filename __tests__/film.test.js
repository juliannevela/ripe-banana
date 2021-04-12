const db = require('../lib/utils/db');
const faker = require('faker');
const request = require('supertest');
const app = require('../lib/app');
const Film = require('../lib/models/Film');
const Studio = require('../lib/models/Studio');

const seedStudio = {
  name: `${faker.company.companyName()}`,
  city: `${faker.address.city()}`,
  state: `${faker.address.state(true)}`,
  country: `${faker.address.country()}`,
};

const seedStudioArray = [
  {
    name: `${faker.company.companyName()}`,
    city: `${faker.address.city()}`,
    state: `${faker.address.state(true)}`,
    country: `${faker.address.country()}`,
  },
  {
    name: `${faker.company.companyName()}`,
    city: `${faker.address.city()}`,
    state: `${faker.address.state(true)}`,
    country: `${faker.address.country()}`,
  },
  {
    name: `${faker.company.companyName()}`,
    city: `${faker.address.city()}`,
    state: `${faker.address.state(true)}`,
    country: `${faker.address.country()}`,
  },
];

describe('ripe-banana routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  it('POST should creates a FILM', async () => {
    const res = await Film.create({
      title: `${faker.lorem.words(3)}`,
      released: 2005,
    });
    expect(res.dataValues).toEqual({
      id: expect.any(Number),
      title: expect.any(String),
      released: 2005,
    });
  });

  it('GET should get a list of films', async () => {
    const studio = await Studio.create(seedStudio);

    Film.create({
      title: `${faker.lorem.words(3)}`,
      released: 2005,

    });
    const res = await request(app)
    .get('/api/v1/films')

    expect(res.body).toEqual({
      id: expect.any(Number),
      title: expect.any(String),
      studio: {
        id: studio.dataValues.id,
        name: studio.dataValues.name
      }

    })
  })
});
