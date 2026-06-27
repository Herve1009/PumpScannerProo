const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        success: true,
        application: "PumpScannerPro",
        status: "ONLINE",
        version: "1.0.0",
        time: new Date()
    });
});

module.exports = router;
