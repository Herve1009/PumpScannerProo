const { query } = require("./database");

async function saveToken(token) {
    await query(
        `INSERT INTO tokens
        (address, name, symbol, price, market_cap, liquidity, volume_24h, viral_score)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
        ON CONFLICT(address) DO NOTHING`,
        [
            token.address,
            token.name,
            token.symbol,
            token.price,
            token.marketCap,
            token.liquidity,
            token.volume24h,
            token.viralScore
        ]
    );
}

module.exports = {
    saveToken
};
