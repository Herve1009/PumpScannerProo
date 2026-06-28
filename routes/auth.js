const express = require("express");
const router = express.Router();

const { register, login } = require("../services/authService");

router.post("/register", async (req, res) => {
    try {
        const user = await register(req.body);

        res.json({
            success: true,
            user
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
            stack: error.stack
        });
    }
});

router.post("/login", async (req, res) => {
    try {
        const result = await login(req.body.email, req.body.password);

        res.json(result);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
            stack: error.stack
        });
    }
});

module.exports = router;
