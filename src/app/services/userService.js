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
var core_1 = require("@angular/core");
//import {USERS} from '../mock-users';
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.appUrl = 'api/users';
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.appUrl).map(function (response) { return response.json().data; }).catch(this.handleError);
    };
    UserService.prototype.getUser = function (id) {
        var url = this.appUrl + "/" + id;
        console.log('id', id);
        return this.http.get(url).map(function (response) { return response.json().data; }).catch(this.handleError);
    };
    UserService.prototype.deleteUser = function (id) {
        var url = this.appUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .map(function (success) { return console.log('success'); }).catch(this.handleError);
    };
    UserService.prototype.updateUser = function (user) {
        var url = this.appUrl + "/" + user.id;
        return this.http
            .put(url, JSON.stringify(user), { headers: this.headers })
            .map(function (success) { console.log('edit done'); })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return error.message || error;
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map