const express = require('express');
const db = require('./data/helpers/actionModel');
const router = express.Router();

router.get('/', (req, res) => {
    db.get()
        .then(action => {
            res.status(200).json(action);
        })
        .catch(err => {
            res.status(500).json({
                error: "The action information could not be retrieved."
            })
        })
})

router.get('/:id', (req, res) => {
    const {id} = req.params;

    db.get(id)
        .then(action => {
            if (!action) {
                res.status(404).json({
                    error: 'Invalid id'
                })
            } else {
                res.status(200).json(action)
            }
        })
        .catch(err => {
            res.status(500).json({
                error: 'The project could not be retrieved.'
            })
        })
});

module.exports = router;