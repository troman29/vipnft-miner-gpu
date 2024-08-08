"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.givers = exports.IS_TESTNET = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: './config.txt' });
exports.IS_TESTNET = process.env.IS_TESTNET === '1';
exports.givers = exports.IS_TESTNET
    ? [{ address: process.env.GIVER || 'EQDe1EaGTLsqY5K_lQcqViPXxBg6ANjlZ3v4PxzaQkolOqW8' }]
    : [{ address: process.env.GIVER || 'EQCg1vPyYQxySttDcTtgT-ZtfgzOsODnu1-giGHjnc-FYG0E' }];
