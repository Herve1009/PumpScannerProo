const express = require("express");
const router = express.Router();

const {
    register,
    login
} = require("../services/authService");

router.post("/register", async (req, res) => {
    try {
        const user = await register(req.body);

        res.json({
            success: true,
            message: "Compte créé avec succès.",
            user
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

router.post("/login", async (req, res) => {
    try {
        const result = await login(
            req.body.email,
            req.body.password
        );

        res.json({
            success: true,
            token: result.token,
            user: result.user
        });
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;
