const express = require('express');
const db = require('./data/helpers/projectModel');
const router = express.Router();

router.get('/', (req, res) => {
    db.get()
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json({
                error: 'The project information could not be retrieved'
            })
        })
})

router.get('/:id', (req, res) => {
    const {id} = req.params;

    db.get(id)
        .then(project => {
            if (!project) {
                res.status(404).json({
                    error: 'Invalid id'
                })
            } else {
                res.status(200).json(project)
            }
        })
        .catch(err => {
            res.status(500).json({
                error: 'The project could not be retrieved.'
            })
        })
});

router.post('/', (req, res) => {
    const {name, description} = req.body;

    if (!name || !description) {
        res.status(400).json({
            error: 'Please provide name, description, and completed for the post.'
        })
    }

    db.insert(req.body)
     .then(project => {
         res.status(201).json(project)
     })
     .catch(err => {
         res.status(500).json({
             error: 'There was an error while saving the post to the database'
         })
     })
})

module.exports = router;