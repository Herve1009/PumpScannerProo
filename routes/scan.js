const express = require("express");
const router = express.Router();

const { getTrendingTokens } = require("../services/pumpfun");

router.get("/", async (req, res) => {
    try {
        const data = await getTrendingTokens();

        res.json({
            success: true,
            total: data?.pairs?.length || 0,
            data: data?.pairs || []
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

module.exports = router;
