const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {
    findUserByEmail,
    createUser
} = require("./userRepository");

async function register(data) {
    const existingUser = await findUserByEmail(data.email);

    if (existingUser) {
        throw new Error("Cet email est déjà utilisé.");
    }

    const passwordHash = await bcrypt.hash(data.password, 10);

    const user = await createUser({
        fullName: data.fullName,
        email: data.email,
        passwordHash,
        whatsapp: data.whatsapp,
        country: data.country
    });

    return user;
}

async function login(email, password) {
    const user = await findUserByEmail(email);

    if (!user) {
        throw new Error("Email ou mot de passe incorrect.");
    }

    const validPassword = await bcrypt.compare(
        password,
        user.password_hash
    );

    if (!validPassword) {
        throw new Error("Email ou mot de passe incorrect.");
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            role: user.role
        },
        process.env.JWT_SECRET || "PumpScannerProSecret",
        {
            expiresIn: "7d"
        }
    );

    return {
        token,
        user
    };
}

module.exports = {
    register,
    login
};
