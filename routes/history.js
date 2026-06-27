const express = require("express");
const router = express.Router();

const { query } = require("../services/database");

router.get("/", async (req, res) => {
    try {
        const result = await query(`
            SELECT *
            FROM tokens
            ORDER BY viral_score DESC, created_at DESC
            LIMIT 50
        `);

        res.json({
            success: true,
            total: result.rows.length,
            data: result.rows
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

module.exports = router;
