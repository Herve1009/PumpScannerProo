require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        name: "PumpScannerPro",
        status: "online",
        version: "1.0.0"
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "API opérationnelle"
    });
});

app.get("/api/tokens", (req, res) => {
    res.json([]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Serveur démarré sur le port " + PORT);
});