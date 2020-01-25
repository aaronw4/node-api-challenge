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
})

module.exports = router;