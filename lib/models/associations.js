const Reviewer = require('./Reviewer')
const Review = require('./Review')

Reviewer.hasMany(Review);
Review.belongsTo(Reviewer);