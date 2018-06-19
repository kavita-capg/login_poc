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
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var UserServiceDemo = (function () {
    function UserServiceDemo(http) {
        this.http = http;
        this.users = [{ "first": "Teresa", "last": "Collins", "email": "mintgreengiraffe77@gmail.com", "address": "8254 Bailey Points", "created": "November 17, 2011", "balance": "$102.39" }, { "first": "Kirk", "last": "Abernathy", "email": "ivoryturtle13@gmail.com", "address": "1343 Kilback Ports", "created": "January 4, 2014", "balance": "$6,402.90" }, { "first": "Mossie", "last": "Sipes", "email": "Mossie.Sipes@loyal.name", "address": "795 Lilliana Hills", "created": "April 28, 2010", "balance": "$8,173.30" }, { "first": "Liliana", "last": "Hauck", "email": "Liliana.Hauck@alfredo.biz", "address": "195 Harris Fort", "created": "June 13, 2017", "balance": "$3,207.91" }, { "first": "Marcus", "last": "Beier", "email": "greywolf46@gmail.com", "address": "54366 Jamar Mills", "created": "February 28, 2014", "balance": "$9,864.19" }, { "first": "Lindsay", "last": "Schmidt", "email": "Lindsay.Schmidt@meta.org", "address": "942 Hegmann Expressway", "created": "January 7, 2013", "balance": "$6,509.30" }, { "first": "Shania", "last": "Torp", "email": "Shania.Torp@magdalena.com", "address": "618 Keegan Overpass", "created": "September 9, 2015", "balance": "$5,992.54" }, { "first": "Buford", "last": "Stehr", "email": "Buford.Stehr@coleman.name", "address": "71786 Jackson Locks", "created": "December 5, 2009", "balance": "$3,906.47" }, { "first": "Aimee", "last": "Thompson", "email": "Aimee.Thompson@vivienne.net", "address": "541 Kulas Ville", "created": "November 25, 2011", "balance": "$2,642.89" }, { "first": "Gerson", "last": "Buckridge", "email": "Gerson.Buckridge@grant.com", "address": "692 Romaguera Falls", "created": "April 27, 2017", "balance": "$9,561.19" }, { "first": "Mittie", "last": "Borer", "email": "ivoryrabbit16@gmail.com", "address": "312 Shields Skyway", "created": "April 8, 2013", "balance": "$3,929.00" }, { "first": "Jaycee", "last": "Jacobi", "email": "turquoisefrog38@gmail.com", "address": "6073 Johnny Forks", "created": "July 29, 2015", "balance": "$1,733.62" }, { "first": "Gia", "last": "Doyle", "email": "ivoryfrog81@gmail.com", "address": "6201 Reilly Harbors", "created": "March 21, 2011", "balance": "$4,485.64" }, { "first": "Dax", "last": "Reynolds", "email": "Dax.Reynolds@deven.info", "address": "359 Kemmer Orchard", "created": "September 14, 2010", "balance": "$3,460.85" }, { "first": "Orville", "last": "Schowalter", "email": "olivegiraffe11@gmail.com", "address": "9108 Doug Squares", "created": "August 8, 2011", "balance": "$5,694.44" }, { "first": "D'angelo", "last": "Schowalter", "email": "indigofrog16@gmail.com", "address": "622 Paucek Cliffs", "created": "November 6, 2009", "balance": "$7,568.86" }, { "first": "Arthur", "last": "O'Kon", "email": "mintgreenturtle59@gmail.com", "address": "30306 Floyd Bypass", "created": "March 27, 2010", "balance": "$4,954.95" }, { "first": "Amelia", "last": "Mayert", "email": "Amelia.Mayert@kaitlin.info", "address": "209 Kyle Place", "created": "November 25, 2015", "balance": "$6,140.41" }, { "first": "Leanna", "last": "Spencer", "email": "Leanna.Spencer@oren.name", "address": "3817 Johnson Course", "created": "January 10, 2015", "balance": "$4,063.37" }, { "first": "Chester", "last": "Marquardt", "email": "redfrog50@gmail.com", "address": "070 Alaina Crossing", "created": "August 14, 2008", "balance": "$5,104.89" }, { "first": "Tillman", "last": "Wintheiser", "email": "Tillman.Wintheiser@cary.biz", "address": "4294 Abigale Rest", "created": "September 16, 2015", "balance": "$5,768.51" }, { "first": "German", "last": "Pfannerstill", "email": "azurerabbit60@gmail.com", "address": "9881 Ruben Loaf", "created": "August 9, 2017", "balance": "$1,769.67" }, { "first": "Johanna", "last": "Cormier", "email": "Johanna.Cormier@ruby.info", "address": "698 Felicity Station", "created": "August 23, 2016", "balance": "$5,367.63" }, { "first": "Cydney", "last": "White", "email": "Cydney.White@elyssa.name", "address": "52316 Joanny Mills", "created": "September 9, 2008", "balance": "$79.58" }, { "first": "Claude", "last": "Carroll", "email": "maroonsquirrel62@gmail.com", "address": "9119 Medhurst Spur", "created": "July 14, 2009", "balance": "$9,347.43" }, { "first": "Kenyatta", "last": "Senger", "email": "lavenderfrog44@gmail.com", "address": "559 Roy Inlet", "created": "September 2, 2015", "balance": "$3,050.61" }];
    }
    UserServiceDemo.prototype.getAllUsers = function () {
        return this.http.get('app/data/users.json')
            .map(function (response) {
            console.log("response: " + response);
            return (response.json().data);
        })
            .catch(function (error) { console.log("Error in service " + error); });
    };
    UserServiceDemo.prototype.loadUsers = function () {
        return this.users.data;
    };
    UserServiceDemo.prototype.updateUser = function (usertoupdate) {
        var index = -1;
        index = this.users.data.findIndex(function (user) { return user.email === usertoupdate.email; });
        this.users.data[index] = usertoupdate;
        return this.users;
    };
    UserServiceDemo.prototype.deleteUser = function (usertodelete) {
        var index = -1;
        index = this.users.data.findIndex(function (user) { return user.email === usertodelete.email; });
        this.users.data.splice(index, 1);
        return this.users;
    };
    return UserServiceDemo;
}());
UserServiceDemo = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserServiceDemo);
exports.UserServiceDemo = UserServiceDemo;
//# sourceMappingURL=userServiceDemo.js.map