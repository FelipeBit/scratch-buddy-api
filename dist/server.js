"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var compression_1 = __importDefault(require("compression"));
var path_1 = __importDefault(require("path"));
var index_1 = __importDefault(require("./routes/index"));
require("./database");
var port = 3000;
var app = express_1.default();
function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
        return false;
    }
    // fallback to standard filter function
    return compression_1.default.filter(req, res);
}
app.use(compression_1.default({ filter: shouldCompress }));
app.use(cors_1.default());
app.use(express_1.default.json());
app.use('/public', express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(index_1.default);
app.use('/api', index_1.default);
app.listen(port, function () { return console.log('online', __dirname); });
