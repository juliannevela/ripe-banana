const { Router } = require('express');
const Reviewer = require('../models/Reviewer');

module.exports = Router()
// POST ROUTE
.post('/create', async (req,res,next) => {
    try {
        const newReviewer = await Reviewer.create(req.body);
        res.send(newReviewer);
    } catch (err) {
        next(err);
    }
})

// GET ROUTE


// GET BY ID ROUTE

// PATCH/PUT ROUTE
/// only model able to update

// DELETE ROUTE
/// cannot be deleted if assigned any reviews
