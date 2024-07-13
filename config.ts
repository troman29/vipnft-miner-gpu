import dotenv from "dotenv";

dotenv.config({ path: './config.txt' });

export const IS_TESTNET = process.env.IS_TESTNET === '1';

export const givers = IS_TESTNET
    ? [{ address: 'EQDe1EaGTLsqY5K_lQcqViPXxBg6ANjlZ3v4PxzaQkolOqW8' }]
    : [{ address: 'EQAzwqEwOx1EJTLLlrEhLNSW3eGUgQYgHOjMtvtO89HpOfHA' }];
