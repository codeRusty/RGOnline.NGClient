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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var ApiGatewayOptions = (function () {
    function ApiGatewayOptions() {
        this.headers = {};
        this.params = {};
        this.data = {};
    }
    return ApiGatewayOptions;
}());
exports.ApiGatewayOptions = ApiGatewayOptions;
var ApiGateway = (function () {
    function ApiGateway(http) {
        this.http = http;
    }
    ApiGateway.prototype.login = function (url, data) {
        var body = "grant_type=password&username=" + data.Email + "&password=" + data.Password;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .catch(function (error) {
            return Observable_1.Observable.throw(error);
        })
            .map(this.unwrapHttpValue)
            .catch(function (error) {
            var message = JSON.parse(error._body);
            var msg = { "ErrorMessage": message.error_description };
            return Observable_1.Observable.throw(msg);
        })
            .finally(function () {
        });
    };
    ApiGateway.prototype.unwrapHttpError = function (error) {
        try {
            if (error.status == 401) {
                //this.router.navigate(['/login']);
                return ({ "ErrorMessage": ["Unauthorised"] });
            }
            else if (error.status == 302) {
            }
            else if (error.status == 400) {
                var message = JSON.parse(error._body);
                return { "ErrorMessage": message.ErrorMessage };
            }
            else if (error.status == 500) {
                var message = JSON.parse(error._body);
                return { "ErrorMessage": message.ErrorMessage };
            }
            else {
                return ({ "ErrorMessage": ["Something went wrong"] });
            }
        }
        catch (jsonError) {
            return ({ "ErrorMessage": ["Something went wrong"] });
        }
    };
    ApiGateway.prototype.unwrapHttpValue = function (value) {
        return (value.json());
    };
    ApiGateway.prototype.getLoggedInUserData = function (url, data) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': "bearer " + data.Token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(url, options)
            .catch(function (error) {
            return Observable_1.Observable.throw(error);
        })
            .map(this.unwrapHttpValue)
            .catch(function (error) {
            return Observable_1.Observable.throw(_this.unwrapHttpError(error));
        })
            .finally(function () {
        });
    };
    return ApiGateway;
}());
ApiGateway = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ApiGateway);
exports.ApiGateway = ApiGateway;
//# sourceMappingURL=ApiGateway.js.map