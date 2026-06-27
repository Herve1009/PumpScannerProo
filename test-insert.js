require("dotenv").config();

const { saveToken } = require("./services/tokenRepository");

async function run() {
    try {
        await saveToken({
            address: "TEST123456",
            name: "Test Token",
            symbol: "TEST",
            price: 1.23,
            marketCap: 100000,
            liquidity: 50000,
            volume24h: 25000,
            viralScore: 99
        });

        console.log("✅ Token inséré avec succès");
    } catch (err) {
        console.error("❌ Erreur :", err);
    }

    process.exit();
}

run();
