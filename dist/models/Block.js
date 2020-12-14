"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var File_1 = __importDefault(require("./File"));
var BlockCategory_1 = __importDefault(require("./BlockCategory"));
var Block = /** @class */ (function () {
    function Block() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], Block.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: 'opcode', type: 'varchar' }),
        __metadata("design:type", String)
    ], Block.prototype, "opcode", void 0);
    __decorate([
        typeorm_1.Column({ name: 'file_id', type: 'int' }),
        __metadata("design:type", Number)
    ], Block.prototype, "fileId", void 0);
    __decorate([
        typeorm_1.Column({ name: 'block_category_id', type: 'int' }),
        __metadata("design:type", Number)
    ], Block.prototype, "blockCategoryId", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return File_1.default; }),
        typeorm_1.JoinColumn({ name: 'file_id' }),
        __metadata("design:type", File_1.default)
    ], Block.prototype, "file", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return BlockCategory_1.default; }),
        typeorm_1.JoinColumn({ name: 'block_category_id' }),
        __metadata("design:type", BlockCategory_1.default)
    ], Block.prototype, "BlockCategory", void 0);
    __decorate([
        typeorm_1.Column({ name: 'created_at', type: 'timestamp' }),
        __metadata("design:type", Date)
    ], Block.prototype, "createdAt", void 0);
    Block = __decorate([
        typeorm_1.Entity({ name: 'block' })
    ], Block);
    return Block;
}());
exports.default = Block;
