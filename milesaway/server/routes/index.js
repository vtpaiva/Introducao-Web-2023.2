import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        title: "MilesAway API",
        version: "1.0.0"
    });
});

export default router;
