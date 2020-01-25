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

module.exports = router;