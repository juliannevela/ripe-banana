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
.get('/', async(req,res,next) => {
    try{
        const allReviewers = await Reviewer.findAll(req.body);
        res.send(allReviewers)
    } catch(err) {
        next(err);
    }
})


// GET BY ID ROUTE
.get('/:id', async(req,res,next) => {
    try{
        const reviewer = await Reviewer.findByPk(req.params.id);
        res.send(reviewer)
    } catch (err) {
        next (err);
    }
})

// PATCH/PUT ROUTE
.patch('/:id', async(req,res,next)=> {
    try{
        const updatedReviewer = await Reviewer.update(req.body, {
            where: {id: req.params.id},
            returning:true,
        })
        res.send(updatedReviewer[1][0])
    } catch (err) {
        next (err)
    }
})
/// only model able to update

// DELETE ROUTE
/// cannot be deleted if assigned any reviews
