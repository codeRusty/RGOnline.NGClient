"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
require("rxjs/add/operator/map");
var http_2 = require("@angular/http");
var ApiGateway_1 = require("./ApiGateway");
var AccountService = (function (_super) {
    __extends(AccountService, _super);
    function AccountService(apiGateway, http) {
        var _this = _super.call(this) || this;
        _this.apiGateway = apiGateway;
        _this.http = http;
        return _this;
    }
    AccountService.prototype.getLoggedInUserData = function (authorizationData) {
        this.serviceUrl = 'http://www.clouddesktopapiservice.com/api/getuserdata';
        return this.apiGateway.getLoggedInUserData(this.serviceUrl, authorizationData).map(function (response) {
            return response;
        })
            .catch(function (error) { return rxjs_1.Observable.throw(error); });
    };
    return AccountService;
}(http_2.BaseRequestOptions));
AccountService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ApiGateway_1.ApiGateway, http_1.Http])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=common.service.js.map