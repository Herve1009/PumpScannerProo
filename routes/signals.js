const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const signals = [
            {
                id: 1,
                token: "PUMP",
                symbol: "PUMP",
                score: 98,
                type: "BUY",
                risk: "LOW",
                createdAt: new Date()
            },
            {
                id: 2,
                token: "SOL",
                symbol: "SOL",
                score: 92,
                type: "BUY",
                risk: "MEDIUM",
                createdAt: new Date()
            }
        ];

        res.json({
            success: true,
            signals
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;
