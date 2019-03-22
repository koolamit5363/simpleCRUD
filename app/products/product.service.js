"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_data_1 = require("./product-data");
var lodash_1 = require("lodash");
var ProductService = (function () {
    function ProductService() {
        this.pitems = product_data_1.PRODUCT_ITEMS;
    }
    ProductService.prototype.getProductsFromData = function () {
        console.log(this.pitems);
        return this.pitems;
    };
    ProductService.prototype.addProduct = function (product) {
        this.pitems.push(product);
        console.log(this.pitems);
    };
    ProductService.prototype.updateProduct = function (product) {
        var index = lodash_1.findIndex(this.pitems, function (p) {
            return p.id == product.id;
        });
        this.pitems[index] = product;
    };
    ProductService.prototype.deleteProduct = function (product) {
        this.pitems.splice(this.pitems.indexOf(product), 1);
        console.log(this.pitems);
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable()
], ProductService);
exports.ProductService = ProductService;
// getProducts(): Product[] {
//   return [{
//     id:1,
//     name:'Scissors',
//     description:'cutting the hairs',
//     price:4.99
//   },
//   {
//     id:2,
//     name:'Knives',
//     description:'cutting the food',
//     price:10.99
//   },
//   {
//     id:3,
//     name:'Shot Glass',
//     description:'use this to take the shots',
//     price:7.15
//   }]
// }
//# sourceMappingURL=product.service.js.map