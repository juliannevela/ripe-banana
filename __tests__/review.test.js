const db = require('../lib/utils/db');
const faker = require('faker');
const request = require('supertest');
const app = require('../lib/app');

describe.skip('ripe-banana routes', () => {
	it('should GET top 100 rated reviews', async () => {
		// const reviews = await Promise.all(
		// 	Review.bulkCreate(
		// 		[...Array(200)]
		// 			.map((review, i) => (
		// 					{
		// 						id: i+1,
		// 						rating:`${faker.datatype.number({'min':1, 'max':5})}`, 
		// 						review:`${faker.lorem.paragraph( 3)}`,
		// 						film_id:`${faker.datatype.number({'min':1, 'max':200})}`

		// 					}
		// 			)
		// 		)
		// 	)
		// );
		expect('this').toEqual('this');
	});
});
