const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Pump Token",
            symbol: "PUMP",
            price: 0.000021,
            marketCap: 25000,
            holders: 132,
            viralScore: 95
        },
        {
            id: 2,
            name: "Moon Cat",
            symbol: "MCAT",
            price: 0.000014,
            marketCap: 18000,
            holders: 96,
            viralScore: 88
        }
    ]);
});

module.exports = router;
