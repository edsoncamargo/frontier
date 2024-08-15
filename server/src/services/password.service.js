"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptPassword = encryptPassword;
exports.isValidPassword = isValidPassword;
const bcrypt_1 = __importDefault(require("bcrypt"));
async function encryptPassword(password) {
    return await bcrypt_1.default.hash(password, 10);
}
async function isValidPassword(password, hash) {
    return await bcrypt_1.default.compare(password, hash);
}
