const axios = require("axios");
const { calculateScore } = require("../utils/score");

async function getTrendingTokens() {
    try {
        const response = await axios.get(
            "https://api.dexscreener.com/latest/dex/search?q=SOL"
        );

        const pairs = response.data.pairs || [];

        const filtered = pairs.filter(pair =>
            pair.chainId === "solana" &&
            pair.dexId === "pumpswap"
        );

        const tokens = filtered.map(pair => ({
            chain: pair.chainId,
            dex: pair.dexId,
            name: pair.baseToken.name,
            symbol: pair.baseToken.symbol,
            address: pair.baseToken.address,
            price: Number(pair.priceUsd || 0),
            marketCap: Number(pair.marketCap || 0),
            liquidity: Number(pair.liquidity?.usd || 0),
            volume24h: Number(pair.volume?.h24 || 0),
            priceChange24h: Number(pair.priceChange?.h24 || 0),
            holders: 0
        }));

        tokens.forEach(token => {
            token.viralScore = calculateScore(token);
        });

        tokens.sort((a, b) => b.viralScore - a.viralScore);

        return { pairs: tokens };

    } catch (error) {
        console.error(error.message);
        return { pairs: [] };
    }
}

module.exports = {
    getTrendingTokens
};
