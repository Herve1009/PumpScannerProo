require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const healthRoute = require("./routes/health");
const tokenRoute = require("./routes/tokens");
const scanRoute = require("./routes/scan");
const historyRoute = require("./routes/history");

const app = express();

app.use(cors());
app.use(express.json());

// Sert les fichiers du dossier public
app.use(express.static(path.join(__dirname, "public")));

// Routes API
app.use("/api/health", healthRoute);
app.use("/api/tokens", tokenRoute);
app.use("/api/scan", scanRoute);
app.use("/api/history", historyRoute);

// Page d'accueil
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

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
