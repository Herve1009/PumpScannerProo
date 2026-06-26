require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Servir les fichiers du dossier public
app.use(express.static(path.join(__dirname, 'public')));

// API de test
app.get('/api/status', (req, res) => {
    res.json({
        status: "online",
        application: "PumpScannerPro",
        version: "1.0.0"
    });
});

// Accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`PumpScannerPro démarré sur le port ${PORT}`);
});