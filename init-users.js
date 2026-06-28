require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

async function createUsersTable() {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                full_name VARCHAR(100) NOT NULL,
                email VARCHAR(150) UNIQUE NOT NULL,
                password_hash TEXT NOT NULL,
                whatsapp VARCHAR(30),
                country VARCHAR(100),
                role VARCHAR(20) DEFAULT 'FREE',
                subscription_status VARCHAR(20) DEFAULT 'ACTIVE',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);

        console.log("✅ Table users créée avec succès.");
    } catch (error) {
        console.error("❌ Erreur :", error.message);
    } finally {
        await pool.end();
    }
}

createUsersTable();
