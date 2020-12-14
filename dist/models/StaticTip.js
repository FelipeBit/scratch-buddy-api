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
var StaticTip = /** @class */ (function () {
    function StaticTip() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], StaticTip.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: 'description', type: 'varchar' }),
        __metadata("design:type", String)
    ], StaticTip.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({ name: 'text', type: 'mediumtext' }),
        __metadata("design:type", String)
    ], StaticTip.prototype, "text", void 0);
    __decorate([
        typeorm_1.Column({ name: 'markdown_text', type: 'mediumtext' }),
        __metadata("design:type", String)
    ], StaticTip.prototype, "markdownText", void 0);
    __decorate([
        typeorm_1.Column({ name: 'display_sequence', type: 'int' }),
        __metadata("design:type", Number)
    ], StaticTip.prototype, "displaySequence", void 0);
    __decorate([
        typeorm_1.Column({ name: 'file_id', type: 'int' }),
        __metadata("design:type", Number)
    ], StaticTip.prototype, "fileId", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return File_1.default; }),
        typeorm_1.JoinColumn({ name: 'file_id' }),
        __metadata("design:type", File_1.default)
    ], StaticTip.prototype, "file", void 0);
    __decorate([
        typeorm_1.Column({ name: 'created_at', type: 'timestamp' }),
        __metadata("design:type", Date)
    ], StaticTip.prototype, "createdAt", void 0);
    StaticTip = __decorate([
        typeorm_1.Entity({ name: 'static_tip' })
    ], StaticTip);
    return StaticTip;
}());
exports.default = StaticTip;
