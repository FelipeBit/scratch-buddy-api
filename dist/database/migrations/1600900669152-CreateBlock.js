"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var CreateBlock1600900669152 = /** @class */ (function () {
    function CreateBlock1600900669152() {
    }
    CreateBlock1600900669152.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.createTable(new typeorm_1.Table({
                            name: 'block',
                            columns: [
                                {
                                    name: 'id',
                                    type: 'int',
                                    isPrimary: true,
                                    isGenerated: true,
                                    generationStrategy: 'increment',
                                },
                                {
                                    name: 'opcode',
                                    type: 'varchar',
                                    isNullable: false,
                                },
                                {
                                    name: 'file_id',
                                    type: 'int',
                                    isNullable: false,
                                },
                                {
                                    name: 'block_category_id',
                                    type: 'int',
                                    isNullable: false,
                                },
                                {
                                    name: 'created_at',
                                    type: 'timestamp',
                                    default: 'now()',
                                },
                            ],
                        }))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createForeignKey('block', new typeorm_1.TableForeignKey({
                                columnNames: ['file_id'],
                                referencedColumnNames: ['id'],
                                referencedTableName: 'file',
                            }))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.createForeignKey('block', new typeorm_1.TableForeignKey({
                                columnNames: ['block_category_id'],
                                referencedColumnNames: ['id'],
                                referencedTableName: 'block_category',
                            }))];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateBlock1600900669152.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var fileTable, fileForeignKey, blockCategoryTable, blockCategoryForeignKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.getTable('block')];
                    case 1:
                        fileTable = _a.sent();
                        fileForeignKey = fileTable.foreignKeys.find(function (fk) { return fk.columnNames.indexOf('file_id') !== -1; });
                        return [4 /*yield*/, queryRunner.dropForeignKey('block', fileForeignKey)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.getTable('block')];
                    case 3:
                        blockCategoryTable = _a.sent();
                        blockCategoryForeignKey = blockCategoryTable.foreignKeys.find(function (fk) { return fk.columnNames.indexOf('block_category_id') !== -1; });
                        return [4 /*yield*/, queryRunner.dropForeignKey('block', blockCategoryForeignKey)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.dropTable('block')];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CreateBlock1600900669152;
}());
exports.default = CreateBlock1600900669152;
