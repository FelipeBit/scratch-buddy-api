"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var static_tips_routes_1 = __importDefault(require("./static-tips.routes"));
var dynamic_tips_routes_1 = __importDefault(require("./dynamic-tips.routes"));
var block_routes_1 = __importDefault(require("./block.routes"));
var routes = express_1.Router();
routes.use('/static-tips', static_tips_routes_1.default);
routes.use('/dynamic-tips', dynamic_tips_routes_1.default);
routes.use('/blocks', block_routes_1.default);
exports.default = routes;
