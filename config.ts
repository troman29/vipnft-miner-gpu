import dotenv from "dotenv";

dotenv.config({ path: './config.txt' });

export const IS_TESTNET = process.env.IS_TESTNET === '1';

export const givers = IS_TESTNET
    ? [{ address: process.env.GIVER || 'EQDe1EaGTLsqY5K_lQcqViPXxBg6ANjlZ3v4PxzaQkolOqW8' }]
    : [{ address: process.env.GIVER || 'EQCg1vPyYQxySttDcTtgT-ZtfgzOsODnu1-giGHjnc-FYG0E' }];
