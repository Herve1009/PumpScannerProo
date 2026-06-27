require("dotenv").config();

const express = require("express");
const cors = require("cors");

const healthRoute = require("./routes/health");
const tokenRoute = require("./routes/tokens");
const scanRoute = require("./routes/scan");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        application: "PumpScannerPro",
        version: "1.0.0",
        status: "En ligne",
        author: "Herve1009"
    });
});

app.use("/api/health", healthRoute);
app.use("/api/tokens", tokenRoute);
app.use("/api/scan", scanRoute);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route introuvable"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 PumpScannerPro lancé sur le port ${PORT}`);
});