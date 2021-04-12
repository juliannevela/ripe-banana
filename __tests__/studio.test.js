const db = require('../lib/utils/db');
const faker = require('faker');
const request = require('supertest');
const app = require('../lib/app');
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

describe.skip('ripe-banana routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  it('POST creates a new studio', async () => {
    const studio = await Studio.create(seedStudio);

    expect(studio.dataValues).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
      city: expect.any(String),
      state: expect.any(String),
      country: expect.any(String),
    });
  });

  it('GET returns an array of allStudios', async () => {
    await Studio.bulkCreate(seedStudioArray);

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
    ]);
  });

  it('GET:id returns a single studio with the given id', async () => {
    const studio = await Studio.create(seedStudio);

    const { body } = await request(app).get(`/api/v1/studios/${studio.id}`);

    expect(body).toEqual({
      ...seedStudio,
      id: expect.any(Number),
    });
  });
});
