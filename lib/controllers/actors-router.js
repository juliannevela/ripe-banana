const { Router } = require('express');
const Actor = require('../models/Actor');

module.exports = Router()
.post('/create', async (req, res, next) => {
    try {
        const newActor = await Actor.create(req.body)
        res.send(newActor);
    } catch (err){
        next(err)
    }
})
