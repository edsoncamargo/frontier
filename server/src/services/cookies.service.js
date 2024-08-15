"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractToken = extractToken;
function extractToken(request) {
    return request.cookies['AUTH-FRONTIER'];
}
