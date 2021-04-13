const Studio = require('../models/Studio');
const Film = require('../models/Film');
const Actor = require('../models/Actor');
const Review = require('../models/Review');
const Reviewer = require('../models/Reviewer');
const faker = require('faker');

const randomDate = (start, end) => {
	return new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime())
	);
};

module.exports = async () => {
	const allStudios = await Studio.bulkCreate([
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

		// Array(10).map((_, i) => ({
		// 	name: `${faker.company.companyName()}`,
		// 	city: `${faker.address.city()}`,
		// 	state: `${faker.address.state(true)}`,
		// 	country: `${faker.address.country()}`,
		// })),
	]);

	const actors = await Actor.bulkCreate([
		{
			name: `${faker.name.findName()}`,
			dob: `${faker.date.past()}`,
			pob: `${faker.address.country()}`,
		},
		{
			name: `${faker.name.findName()}`,
			dob: `${faker.date.past()}`,
			pob: `${faker.address.country()}`,
		},
		{
			name: `${faker.name.findName()}`,
			dob: `${faker.date.past()}`,
			pob: `${faker.address.country()}`,
		},
		// Array(50).map((actor) => ({
		// 	name: `${faker.name.findName()}`,
		// 	dob: `${faker.date.past()}`,
		// 	pob: `${faker.address.country()}`,
		// }))
	]);

	const films = await Film.bulkCreate([
		{
			title: `${faker.lorem.words(3)}`,
			released: randomDate(new Date(1970), new Date()).getFullYear(),
			StudioId: 1,
			ActorId: 1,
		},
		{
			title: `${faker.lorem.words(3)}`,
			released: randomDate(new Date(1970), new Date()).getFullYear(),
			StudioId: 2,
			ActorId: 1,
		},
		{
			title: `${faker.lorem.words(3)}`,
			released: randomDate(new Date(1970), new Date()).getFullYear(),
			StudioId: 3,
			ActorId: 2,
		},
		{
			title: `${faker.lorem.words(3)}`,
			released: randomDate(new Date(1970), new Date()).getFullYear(),
			StudioId: 4,
			ActorId: 2,
		},
		{
			title: `${faker.lorem.words(3)}`,
			released: randomDate(new Date(1970), new Date()).getFullYear(),
			StudioId: 5,
			ActorId: 3,
		},
		{
			title: `${faker.lorem.words(3)}`,
			released: randomDate(new Date(1970), new Date()).getFullYear(),
			StudioId: 6,
			ActorId: 3,
		},

		// Array(100).map((_, i) => ({
		// 	title: `${faker.lorem.words(3)}`,
		// 	released: randomDate(new Date(1970), new Date()).getFullYear(),
		// 	StudioId: (i % allStudios.length) + 1,
		// 	ActorId: (i % actors.length) + 1,
		// }))
	]);

	// const reviews = await Review.bulkCreate(
	// 	Array(200).map((_, i) => ({
	// 		rating: Math.ceil(Math.random() * 5),
	// 		reviewer: (i % reviewers.length) + 1,
	// 		review: `${faker.lorem.text(140)}`,
	// 		film: (i % films.length) + 1,
	// 	}))
	// );

	const reviewers = await Reviewer.bulkCreate([
		{
			name: `${faker.name.findName()}`,
			company: `${faker.company.companyName()}`,
		},
		{
			name: `${faker.name.findName()}`,
			company: `${faker.company.companyName()}`,
		},
		{
			name: `${faker.name.findName()}`,
			company: `${faker.company.companyName()}`,
		},
		{
			name: `${faker.name.findName()}`,
			company: `${faker.company.companyName()}`,
		},
		{
			name: `${faker.name.findName()}`,
			company: `${faker.company.companyName()}`,
		},
		{
			name: `${faker.name.findName()}`,
			company: `${faker.company.companyName()}`,
		},
		// Array(50).map((_, i) => ({
		// 	name: `${faker.name.findName()}`,
		// 	company: `${faker.company.companyName()}`,
		// }))
	]);
};
