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
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
// eslint-disable-next-line no-shadow
var EnumType;
(function (EnumType) {
    EnumType["error"] = "error";
    EnumType["tip"] = "tip";
    EnumType["intro"] = "intro";
    EnumType["outside"] = "outside";
    EnumType["topBlock"] = "top_block";
})(EnumType || (EnumType = {}));
var BlockCategory = /** @class */ (function () {
    function BlockCategory() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], BlockCategory.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: 'text', type: 'mediumtext' }),
        __metadata("design:type", String)
    ], BlockCategory.prototype, "text", void 0);
    __decorate([
        typeorm_1.Column({ name: 'markdown_text', type: 'mediumtext' }),
        __metadata("design:type", String)
    ], BlockCategory.prototype, "markdownText", void 0);
    __decorate([
        typeorm_1.Column({ name: 'seconds_until_display', type: 'int' }),
        __metadata("design:type", Number)
    ], BlockCategory.prototype, "secondsUntilDisplay", void 0);
    __decorate([
        typeorm_1.Column({ name: 'seconds_displaying', type: 'int' }),
        __metadata("design:type", Number)
    ], BlockCategory.prototype, "secondsDisplaying", void 0);
    __decorate([
        typeorm_1.Column({ name: 'show', type: 'int' }),
        __metadata("design:type", Number)
    ], BlockCategory.prototype, "show", void 0);
    __decorate([
        typeorm_1.Column({ name: 'type', type: 'text', default: 'tip' }),
        __metadata("design:type", String)
    ], BlockCategory.prototype, "type", void 0);
    __decorate([
        typeorm_1.Column({ name: 'block_id', type: 'int' }),
        __metadata("design:type", Number)
    ], BlockCategory.prototype, "blockId", void 0);
    __decorate([
        typeorm_1.Column({ name: 'created_at', type: 'timestamp' }),
        __metadata("design:type", Date)
    ], BlockCategory.prototype, "createdAt", void 0);
    BlockCategory = __decorate([
        typeorm_1.Entity({ name: 'dynamic_tip' })
    ], BlockCategory);
    return BlockCategory;
}());
exports.default = BlockCategory;
