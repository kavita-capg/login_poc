"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var details_component_1 = require("./details/details.component");
var http_1 = require("@angular/http");
var routing_1 = require("./routing");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var mock_users_1 = require("./mock-users");
var userService_1 = require("./services/userService");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, routing_1.AppRoutingModule, angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(mock_users_1.MockUsers)],
        declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, home_component_1.HomeComponent, details_component_1.DetailsComponent],
        providers: [userService_1.UserService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map