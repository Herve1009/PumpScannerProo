require('dotenv').config();
const { Client } = require('pg');

console.log("Connexion à :", process.env.DATABASE_URL ? "DATABASE_URL trouvée" : "DATABASE_URL absente");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  connectionTimeoutMillis: 10000
});

(async () => {
  try {
    console.log("Connexion en cours...");
    await client.connect();
    console.log("✅ Connexion à Neon réussie !");

    const result = await client.query("SELECT NOW()");
    console.log(result.rows[0]);

    await client.end();
    console.log("Connexion fermée.");
  } catch (err) {
    console.error("❌", err);
  }
})();