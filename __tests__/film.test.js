const db = require('../lib/utils/db');
const faker = require('faker');
const request = require('supertest');
const app = require('../lib/app');
const Film = require('../lib/models/Film');
const Studio = require('../lib/models/Studio');
const Actor = require('../lib/models/Actor');
require('../lib/models/associations');

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
  let studio;
  beforeEach(async () => {
    studio = await Studio.create(seedStudio);
  });
  beforeEach(() => {
    return Film.create({
      title: `${faker.lorem.words(3)}`,
      released: 2005,
      StudioId: 1
    });
  });
  beforeEach(() => {
    return Actor.create({
      name: `${faker.name.findName()}`,
      dob: `${faker.date.past()}`,
      pob: `${faker.address.country()}`,
    });
  });

  it('POST should creates a FILM', async () => {
    const res = await request(app).post('/api/v1/films/create').send({
      StudioId: 1,
      title: `${faker.lorem.words(3)}`,
      released: 2005,
    });
    expect(res.body).toEqual({
      StudioId: expect.any(Number),
      id: expect.any(Number),
      title: expect.any(String),
      released: 2005,
    });
  });

  it('GET should get a list of films', async () => {
 
    const res = await request(app)
    .get('/api/v1/films')

    expect(res.body).toEqual([{
      id: expect.any(Number),
      title: expect.any(String),
      released: expect.any(Number),
      Studio: {id: studio.id,
      name: studio.name}
    }])
  })
});
