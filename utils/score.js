function calculateScore(token) {
    let score = 0;

    if (token.marketCap > 10000) score += 20;
    if (token.liquidity > 5000) score += 20;
    if (token.volume24h > 10000) score += 20;
    if (token.holders > 100) score += 20;
    if (token.priceChange24h > 10) score += 20;

    return Math.min(score, 100);
}

module.exports = {
    calculateScore
};
