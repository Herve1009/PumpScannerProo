
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        application: "PumpScannerPro",
        version: "1.0.0",
        status: "En ligne"
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "API opérationnelle"
    });
});

app.get("/api/top-tokens", (req, res) => {
    res.json([
        {
            name: "Exemple Token",
            symbol: "PUMP",
            price: 0.00012,
            viralScore: 98
        }
    ]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});
