const { query } = require("./database");

async function findUserByEmail(email) {
    const result = await query(
        "SELECT * FROM users WHERE email = $1",
        [email]
    );

    return result.rows[0];
}

async function createUser(user) {
    const result = await query(
        `INSERT INTO users
        (full_name, email, password_hash, whatsapp, country, role)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *`,
        [
            user.fullName,
            user.email,
            user.passwordHash,
            user.whatsapp,
            user.country,
            "FREE"
        ]
    );

    return result.rows[0];
}

module.exports = {
    findUserByEmail,
    createUser
};
