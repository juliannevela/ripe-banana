// const Reviewer = require('./Reviewer');
// const Review = require('./Review');
const Film = require('./Film');
const Actor = require('./Actor');
const Studio = require('./Studio');

// Reviewer.hasMany(Review);
// Review.belongsTo(Reviewer);
Studio.hasMany(Film);
Film.belongsTo(Studio);
// Actor.hasMany(Film);
// Film.belongsTo(Actor);




