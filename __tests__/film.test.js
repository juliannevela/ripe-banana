const db = require('../lib/utils/db');
const faker = require('faker');
const request = require('supertest');
const app = require('../lib/app');
const Film = require('../lib/models/Film');

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
});
