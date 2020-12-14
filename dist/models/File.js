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
var EnumCategory;
(function (EnumCategory) {
    EnumCategory["blockImage"] = "block_image";
    EnumCategory["staticTipImage"] = "static_tip_image";
    EnumCategory["dynamicTipImage"] = "dynamic_tip_image";
})(EnumCategory || (EnumCategory = {}));
var File = /** @class */ (function () {
    function File() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], File.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: 'name', type: 'varchar' }),
        __metadata("design:type", String)
    ], File.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ name: 'path', type: 'varchar' }),
        __metadata("design:type", String)
    ], File.prototype, "path", void 0);
    __decorate([
        typeorm_1.Column({ name: 'type', type: 'varchar' }),
        __metadata("design:type", String)
    ], File.prototype, "type", void 0);
    __decorate([
        typeorm_1.Column({ name: 'file_category', type: 'text', default: 'tip_image' }),
        __metadata("design:type", String)
    ], File.prototype, "fileCategory", void 0);
    __decorate([
        typeorm_1.Column({ name: 'created_at', type: 'timestamp' }),
        __metadata("design:type", Date)
    ], File.prototype, "createdAt", void 0);
    File = __decorate([
        typeorm_1.Entity({ name: 'file' })
    ], File);
    return File;
}());
exports.default = File;
