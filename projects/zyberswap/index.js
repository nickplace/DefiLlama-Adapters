
const { getUniTVL, sumTokensExport } = require('../helper/unknownTokens')
const ZYBER = "0x3B475F6f2f41853706afc9Fa6a6b8C5dF1a2724c";

module.exports = {
    misrepresentedTokens: true,
    methodology: `Uses factory(0xaC2ee06A14c52570Ef3B9812Ed240BCe359772e7) address and whitelisted tokens address to find and price Liquidity Pool pairs. We also have our native token $ZYB staking.`,
    arbitrum: {
        tvl: getUniTVL({ factory: '0xaC2ee06A14c52570Ef3B9812Ed240BCe359772e7', fetchBalances: true, useDefaultCoreAssets: true }),
        staking: sumTokensExport({
            owners: ['0xEFf77E179f6abb49a5bf0EC25c920B495e110C3b', '0x9BA666165867E916Ee7Ed3a3aE6C19415C2fBDDD',],
            tokens: [ZYBER],
        })
    }
};


