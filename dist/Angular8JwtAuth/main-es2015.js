(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"app\" style=\"background-color: #414141;\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark navby\">\n    <div class=\"line\"> <a href=\"#\"> <img class=\"img\" src=\"assets/logo-mobile.png\"> </a></div>\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a href=\"/home\" class=\"nav-link\" routerLink=\"home\">\n          <div class=\"red\"> &nbsp; Jackpot</div>\n        </a>\n      </li>\n      <li class=\"nav-item active\">\n        <a href=\"/Jackpot-Logo\" class=\"nav-link\" routerLink=\"Jackpot-Logo\">\n          <div class=\"red\"> &nbsp; Jackpot-Logo</div>\n        </a>\n      </li>\n    </ul>\n\n\n    <button class=\"navbar-toggler color\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n\n        <li class=\"nav-item\">\n          <a href=\"/user\" class=\"nav-link\" *ngIf=\"isLoggedIn\" routerLink=\"user\">\n            <div class=\"red\">Winners</div>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"/JackpotTimer\" class=\"nav-link\" *ngIf=\"isLoggedIn\" routerLink=\"JackpotTimer\">\n            <div class=\"red\">Jackpot Timer</div>\n          </a>\n        </li>\n      </ul>\n\n      <ul class=\"navbar-nav ml-auto\" *ngIf=\"!isLoggedIn\">\n        <li class=\"nav-item\">\n          <a href=\"https://wowbet216.com\" class=\"nav-link\">\n            <div class=\"black \"> Back to GoldBet &nbsp;</div>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\">\n            <div class=\"black line \"> {{now | date:'hh:mm:ss'}} &nbsp;</div>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"/login\" class=\"nav-link \" routerLink=\"login\">\n            <div class=\"redLog\">Private</div>\n          </a>\n        </li>\n      </ul>\n\n      <ul class=\"navbar-nav ml-auto\" *ngIf=\"isLoggedIn\">\n        <li class=\"nav-item\">\n          <a href=\"https://wowbet216.com\" class=\"nav-link\">\n            <div class=\"black \"> Back to GoldBet &nbsp;</div>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\">\n            <div class=\"black line \"> {{now | date:'hh:mm:ss'}} &nbsp;</div>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"/profile\" class=\"nav-link\" routerLink=\"profile\">\n            <div class=\"red\">{{ username }}</div>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"/register\" class=\"nav-link\" routerLink=\"register\">\n            <div class=\"red\">Sign Up</div>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a href class=\"nav-link\" (click)=\"logout()\">\n            <div class=\"redLog\">LogOut</div>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <br>\n  <router-outlet></router-outlet>\n  <br>\n\n  <div class=\"items\">\n    <div class=\" row\">\n      <div class=\"col\">\n        <label class=\"black\"> About </label><br><label class=\"white\">\n          Responsible Gaming <br>\n          Privacy Policy <br>\n          Contact Us</label>\n      </div>\n      <div class=\"col\">\n        <label class=\"black\"> Help </label><br><label class=\"white\">\n          Sport Betting <br>\n          FAQs <br>\n          Casino</label>\n      </div>\n      <div class=\"col\">\n        <label class=\"black\"> General Terms & Conditions </label><br><label class=\"white\">\n          General Terms & Conditions <br>\n          Sport Terms & Conditions</label>\n      </div>\n\n      <div class=\"col\">\n        <label class=\"black\"> About </label><br><label class=\"white\">\n          Live Calendar <br>\n          Result</label>\n      </div>\n      <div class=\"col white\">\n        © services@GoldBet.com\n      </div>\n    </div>\n  </div>\n  <div style=\"text-align: center;background-color: black;\"> <img class=\"img\" src=\"assets/logo-mobile.png\"></div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-admin/board-admin.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board-admin/board-admin.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <header class=\"jumbotron\">\n    <p>{{ content }}</p>\n\n  </header>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-moderator/board-moderator.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board-moderator/board-moderator.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <header class=\"jumbotron\">\n    <p>{{ content }}</p>\n  </header>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-user/board-user.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board-user/board-user.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf='!connected' class=\"container items\"><br>\n  <div class=\"alert alert-danger\" role=\"alert\">\n    This page is not allowed! <br>\n    please Login\n  </div><br>\n</div>\n<div *ngIf='connected' class=\"container items\"><br>\n  <h1>All winners list :</h1>\n\n  <br><br>\n\n  <table class=\"table table-striped \" [mfData]=\"op\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n    <thead>\n      <tr>\n        <th style=\"width: 10%\">\n          <mfDefaultSorter by=\"name\">#</mfDefaultSorter>\n        </th>\n        <th style=\"width: 20%\">\n          <mfDefaultSorter by=\"name\">Name</mfDefaultSorter>\n        </th>\n        <th style=\"width: 20%\">\n          <mfDefaultSorter by=\"email\">Amount</mfDefaultSorter>\n        </th>\n        <th style=\"width: 20%\">\n          <mfDefaultSorter by=\"age\">Date</mfDefaultSorter>\n        </th>\n        <th style=\"width: 20%\">\n          <mfDefaultSorter by=\"city\">Action</mfDefaultSorter>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of winners| paginate: { itemsPerPage: 5, currentPage: p }; let index = index\">\n        <td>{{index + 1}}</td>\n        <td>{{item.name}}</td>\n        <td>{{item.amout}}</td>\n        <td>{{item.winDate}}</td>\n\n        <!-- <td class=\"text-right\">{{item.winDate}}</td> -->\n        <td><button class=\" btn btn-fill btn-danger\" (click)='delete(item.id)'>Delete</button>\n\n      </tr>\n\n    </tbody>\n\n\n  </table>\n\n\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\n  <button (click)=\"changeDisplay()\" class=\"btn btn-primary\">Add new Winner</button><br><br>\n\n\n  <div *ngIf=\"display\">\n\n    <br>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Name :</label>\n        <input [(ngModel)]=\"form.name\" name=\"name\" type=\"text\" class=\"form-control\" aria-describedby=\"emailHelp\"\n          placeholder=\"Enter name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Amount</label>\n        <input [(ngModel)]=\"form.amout\" name=\"amout\" type=\"number\" class=\"form-control\" id=\"exampleInputPassword1\"\n          placeholder=\"Amount\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Win Date</label>\n        <input [(ngModel)]=\"form.winDate\" name=\"winDate\" type=\"datetime-local\" class=\"form-control\"\n          id=\"exampleInputPasswor\">\n      </div>\n\n      <button (click)=\"onSubmit()\" type=\"submit\" class=\"btn btn-success ml-4\">Add the winner</button>\n    </form>\n    <br><br>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/count-down/count-down.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/count-down/count-down.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>count-down works!</p>\n<div class=\"timer\">\n    <h4> Count down timer </h4>\n    <span id=\"days\"> {{daysToDday}} </span>Day(s)\n    <span id=\"hours\"> {{hoursToDday}} </span>Hrs\n    <span id=\"minutes\"> {{minutesToDday}} </span>Min\n    <span id=\"seconds\"> {{secondsToDday}} </span>S\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid items\">\n\n\n\n    <!--  jackpot section -->\n\n    <div class=\"container-fluid items\">\n\n\n        <div class=\"row\">\n\n\n            <div class=\"col\" style=\"text-align: center;\">\n                <!-- <h2 class=\"textRed\"> Jackpot </h2> -->\n                <!-- <h1>{{display}}</h1> -->\n                <!-- <div class=\"outerDiv\">\n                    <div class=\"upperDiv\">\n                        <h1>{{display}}.{{after}}</h1>\n                    </div>\n                    <div class=\"lowerDiv\">\n                        <h1>TND</h1>\n                    </div>\n                </div> -->\n\n                <img class=\"imgJack\" src=\"assets/jackpot.png\">\n                <div id=\"content\">\n                    <h3> {{display}}.{{after}} </h3>\n                    <h4> {{lastwinner}}</h4>\n\n                </div>\n\n            </div>\n\n\n\n            <!--  winners section -->\n\n            <div class=\"col\"><br>\n                <h2 class=\"textRed\" style=\"text-align: center;\">WINNERS </h2>\n                <div style=\"text-align: center;\" class=\" row\">\n                    <div class=\"col\">\n                        <button (click)=\"getWinnersLimit()\" class=\"btn btn-primary\">Latest</button>\n                    </div>\n                    <div class=\"col\">\n                        <button (click)=\"getWinnersAmountLimit()\" class=\"btn btn-primary\">Top Jackpots</button>\n                    </div>\n\n                </div><br>\n                <div *ngFor=\" let item of winner\">\n                    <div>\n                        <div class=\"row\" style=\"border: 1px solid white;\">\n                            <div class=\"col-sm\">\n                                <img class=\"imgjp\" src=\"assets/jp.jpg\"><br>&nbsp;\n                            </div>\n                            <div class=\"col-sm pad\" style=\"color: white;\">\n                                {{item.name}}\n                            </div>\n                            <div class=\"col-sm pad\" style=\"color: white;\">\n                                {{item.winDate| date: 'dd/MM/yyyy' }}\n                            </div>\n                            <div class=\"col-sm pad\">\n                                <button class=\"cutombtn\" disabled> {{item.amout}} TND</button>\n                            </div>\n                        </div>\n                    </div>\n\n\n\n                </div>\n            </div>\n\n\n            <br><br><br>\n        </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/jackpot-logo/jackpot-logo.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jackpot-logo/jackpot-logo.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n    <div class=\"col\" style=\"text-align: center;\">\n        <!-- <h2 class=\"textRed\"> Jackpot </h2> -->\n        <!-- <h1>{{display}}</h1> -->\n        <!-- <div class=\"outerDiv\">\n            <div class=\"upperDiv\">\n                <h1>{{display}}.{{after}}</h1>\n            </div>\n            <div class=\"lowerDiv\">\n                <h1>TND</h1>\n            </div>\n        </div> -->\n\n        <img class=\"imgJack\" src=\"assets/jackpot.png\">\n        <div id=\"content\">\n            {{display}}.{{after}} <br>\n            {{lastwinner}}\n\n        </div>\n\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/jackpot-timer/jackpot-timer.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jackpot-timer/jackpot-timer.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf='!connected' class=\"container items\"><br>\n    <div class=\"alert alert-danger\" role=\"alert\">\n        This page is not allowed! <br>\n        please Login\n    </div><br>\n</div>\n<div *ngIf='connected' class=\"container items\"><br>\n\n    <h1>Set the Timer :</h1>\n\n    <br>\n    <div>\n\n        <br>\n        <form name=\"form\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n\n            <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">Win Date</label>\n                <input [(ngModel)]=\"form.endDate\" name=\"winDate\" type=\"datetime-local\" class=\"form-control\"\n                    id=\"exampleInputPasswor\">\n            </div>\n\n            <button (click)=\"onSubmit2()\" type=\"submit\" class=\"btn btn-success ml-4\">Set timer</button>\n        </form>\n        <br><br>\n    </div>\n\n\n    <!-- \n    <br><br> <button (click)=\"getCurrDate()\">get date</button>\n    <br>\n\n    <input type=\"datetime-local\" [(ngModel)]=\"fixDate\" name=\"fixDate\">\n    <button (click)=\"getDiff()\">get ds</button> -->\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n  <div class=\"card card-container\">\n    <img\n      id=\"profile-img\"\n      src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\"\n      class=\"profile-img-card\"\n    />\n    <form\n      *ngIf=\"!isLoggedIn\"\n      name=\"form\"\n      (ngSubmit)=\"f.form.valid && onSubmit()\"\n      #f=\"ngForm\"\n      novalidate\n    >\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"username\"\n          [(ngModel)]=\"form.username\"\n          required\n          #username=\"ngModel\"\n        />\n        <div\n          class=\"alert alert-danger\"\n          role=\"alert\"\n          *ngIf=\"f.submitted && username.invalid\"\n        >\n          Username is required!\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input\n          type=\"password\"\n          class=\"form-control\"\n          name=\"password\"\n          [(ngModel)]=\"form.password\"\n          required\n          minlength=\"6\"\n          #password=\"ngModel\"\n        />\n        <div\n          class=\"alert alert-danger\"\n          role=\"alert\"\n          *ngIf=\"f.submitted && password.invalid\"\n        >\n          <div *ngIf=\"password.errors.required\">Password is required</div>\n          <div *ngIf=\"password.errors.minlength\">\n            Password must be at least 6 characters\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary btn-block\">\n          Login\n        </button>\n      </div>\n      <div class=\"form-group\">\n        <div\n          class=\"alert alert-danger\"\n          role=\"alert\"\n          *ngIf=\"f.submitted && isLoginFailed\"\n        >\n          Login failed: {{ errorMessage }}\n        </div>\n      </div>\n    </form>\n\n    <div class=\"alert alert-success\" *ngIf=\"isLoggedIn\">\n      Logged in as {{ roles }}.\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"currentUser; else loggedOut\">\n  <header class=\"jumbotron\">\n    <h3>\n      <strong>{{ currentUser.username }}</strong> Profile\n    </h3>\n  </header>\n  <p>\n    <strong>Token:</strong>\n    {{ currentUser.accessToken.substring(0, 20) }} ...\n    {{ currentUser.accessToken.substr(currentUser.accessToken.length - 20) }}\n  </p>\n  <p>\n    <strong>Email:</strong>\n    {{ currentUser.email }}\n  </p>\n  <strong>Roles:</strong>\n  <ul>\n    <li *ngFor=\"let role of currentUser.roles\">\n      {{ role }}\n    </li>\n  </ul>\n</div>\n\n<ng-template #loggedOut>\n  Please login.\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12\">\n  <div class=\"card card-container\">\n    <img\n      id=\"profile-img\"\n      src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\"\n      class=\"profile-img-card\"\n    />\n    <form\n      *ngIf=\"!isSuccessful\"\n      name=\"form\"\n      (ngSubmit)=\"f.form.valid && onSubmit()\"\n      #f=\"ngForm\"\n      novalidate\n    >\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"username\"\n          [(ngModel)]=\"form.username\"\n          required\n          minlength=\"3\"\n          maxlength=\"20\"\n          #username=\"ngModel\"\n        />\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && username.invalid\">\n          <div *ngIf=\"username.errors.required\">Username is required</div>\n          <div *ngIf=\"username.errors.minlength\">\n            Username must be at least 3 characters\n          </div>\n          <div *ngIf=\"username.errors.maxlength\">\n            Username must be at most 20 characters\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input\n          type=\"email\"\n          class=\"form-control\"\n          name=\"email\"\n          [(ngModel)]=\"form.email\"\n          required\n          email\n          #email=\"ngModel\"\n        />\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && email.invalid\">\n          <div *ngIf=\"email.errors.required\">Email is required</div>\n          <div *ngIf=\"email.errors.email\">\n            Email must be a valid email address\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input\n          type=\"password\"\n          class=\"form-control\"\n          name=\"password\"\n          [(ngModel)]=\"form.password\"\n          required\n          minlength=\"6\"\n          #password=\"ngModel\"\n        />\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && password.invalid\">\n          <div *ngIf=\"password.errors.required\">Password is required</div>\n          <div *ngIf=\"password.errors.minlength\">\n            Password must be at least 6 characters\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary btn-block\">Sign Up</button>\n      </div>\n\n      <div class=\"alert alert-warning\" *ngIf=\"f.submitted && isSignUpFailed\">\n        Signup failed!<br />{{ errorMessage }}\n      </div>\n    </form>\n\n    <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\n      Your registration is successful!\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/_helpers/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/_helpers/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor, authInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function() { return authInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");




const TOKEN_HEADER_KEY = 'Authorization'; // for Spring Boot back-end
// const TOKEN_HEADER_KEY = 'x-access-token';   // for Node.js Express back-end
let AuthInterceptor = class AuthInterceptor {
    constructor(token) {
        this.token = token;
    }
    intercept(req, next) {
        let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
            // for Spring Boot back-end
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
            // for Node.js Express back-end
            // authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
        }
        return next.handle(authReq);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthInterceptor);

const authInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const AUTH_API = 'http://localhost:8080/api/auth/';
const ROOT_URL = 'https://api.jackwowbet216.com/api/auth/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(credentials) {
        return this.http.post(AUTH_API + 'signin', {
            username: credentials.username,
            password: credentials.password
        }, httpOptions);
    }
    register(user) {
        return this.http.post(AUTH_API + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
        }, httpOptions);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/_services/token-storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/token-storage.service.ts ***!
  \****************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
let TokenStorageService = class TokenStorageService {
    constructor() { }
    signOut() {
        window.sessionStorage.clear();
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return sessionStorage.getItem(TOKEN_KEY);
    }
    saveUser(user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        return JSON.parse(sessionStorage.getItem(USER_KEY));
    }
};
TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenStorageService);



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const API_URL = 'http://localhost:8080/api/test/';
const ROOT_URL = 'https://api.jackwowbet216.com/api/test/';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getPublicContent() {
        return this.http.get(API_URL + 'all', { responseType: 'text' });
    }
    getUserBoard() {
        return this.http.get(API_URL + 'user', { responseType: 'text' });
    }
    getModeratorBoard() {
        return this.http.get(API_URL + 'mod', { responseType: 'text' });
    }
    getAdminBoard() {
        return this.http.get(API_URL + 'admin', { responseType: 'text' });
    }
    getWinners() {
        return this.http.get(API_URL + 'allWinners');
    }
    getWinnersLimit() {
        return this.http.get(API_URL + 'allWinnersLimit');
    }
    getWinnersAmountLimit() {
        return this.http.get(API_URL + 'allWinnersAmountLimit');
    }
    addWinner(name, amout, winDate) {
        return this.http.post(API_URL + 'addWinner', {
            name: name,
            amout: amout,
            winDate: winDate
        });
    }
    DeleteWinner(id) {
        return this.http.delete(API_URL + 'deleteWinner/' + id, {});
    }
    addJackpot(endDate, startDate) {
        return this.http.post(API_URL + 'addJackpot', {
            endDate: endDate,
            startDate: startDate,
        });
    }
    UpdateJackpot(id, x) {
        return this.http.put(API_URL + 'updateJackpotr/' + id, x);
    }
    getJack() {
        return this.http.get(API_URL + 'allJackpot');
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./board-user/board-user.component */ "./src/app/board-user/board-user.component.ts");
/* harmony import */ var _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./board-moderator/board-moderator.component */ "./src/app/board-moderator/board-moderator.component.ts");
/* harmony import */ var _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./board-admin/board-admin.component */ "./src/app/board-admin/board-admin.component.ts");
/* harmony import */ var _jackpot_timer_jackpot_timer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./jackpot-timer/jackpot-timer.component */ "./src/app/jackpot-timer/jackpot-timer.component.ts");
/* harmony import */ var _jackpot_logo_jackpot_logo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./jackpot-logo/jackpot-logo.component */ "./src/app/jackpot-logo/jackpot-logo.component.ts");












const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: 'user', component: _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_7__["BoardUserComponent"] },
    { path: 'mod', component: _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_8__["BoardModeratorComponent"] },
    { path: 'admin', component: _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_9__["BoardAdminComponent"] },
    { path: 'JackpotTimer', component: _jackpot_timer_jackpot_timer_component__WEBPACK_IMPORTED_MODULE_10__["JackpotTimerComponent"] },
    { path: 'Jackpot-Logo', component: _jackpot_logo_jackpot_logo_component__WEBPACK_IMPORTED_MODULE_11__["JackpotLogoComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.navby{\r\n    background-color: black;\r\n\r\n}\r\n.img{\r\n    height: 1.2cm;\r\n    max-width: 8cm;\r\n}\r\n.black{\r\n\r\n    color: #966706;\r\n}\r\n.color{\r\n    color: #966706;\r\n}\r\n.white{\r\n    color: white\r\n}\r\n.redLog{\r\n\r\n    color: #966706;\r\n    border: #966706 1px solid;\r\n    border-radius: 2px;\r\n    text-align: center;\r\n    width: 2cm;\r\n}\r\n.red{\r\n    font-size: large;\r\n    color: #966706;\r\n}\r\n.line{\r\n    font-size: large;\r\n    border-right: #966706 3px solid;\r\n}\r\n.items{\r\n    background-color: black;\r\n    padding: 1%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksdUJBQXVCOztBQUUzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7O0lBRUksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubmF2Ynl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHJcbn1cclxuLmltZ3tcclxuICAgIGhlaWdodDogMS4yY207XHJcbiAgICBtYXgtd2lkdGg6IDhjbTtcclxufVxyXG4uYmxhY2t7XHJcblxyXG4gICAgY29sb3I6ICM5NjY3MDY7XHJcbn1cclxuLmNvbG9ye1xyXG4gICAgY29sb3I6ICM5NjY3MDY7XHJcbn1cclxuLndoaXRle1xyXG4gICAgY29sb3I6IHdoaXRlXHJcbn1cclxuLnJlZExvZ3tcclxuXHJcbiAgICBjb2xvcjogIzk2NjcwNjtcclxuICAgIGJvcmRlcjogIzk2NjcwNiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMmNtO1xyXG59XHJcbi5yZWR7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgY29sb3I6ICM5NjY3MDY7XHJcbn1cclxuLmxpbmV7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAjOTY2NzA2IDNweCBzb2xpZDtcclxufVxyXG4uaXRlbXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDElO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");



let AppComponent = class AppComponent {
    constructor(tokenStorageService) {
        this.tokenStorageService = tokenStorageService;
        this.isLoggedIn = false;
        this.showAdminBoard = false;
        this.showModeratorBoard = false;
        this.now = new Date();
    }
    ngOnInit() {
        this.isLoggedIn = !!this.tokenStorageService.getToken();
        if (this.isLoggedIn) {
            const user = this.tokenStorageService.getUser();
            this.roles = user.roles;
            this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
            this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
            this.username = user.username;
        }
        this.currTime();
    }
    currTime() {
        setInterval(() => {
            this.now = new Date();
        }, 1);
    }
    logout() {
        this.tokenStorageService.signOut();
        window.location.reload();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./board-admin/board-admin.component */ "./src/app/board-admin/board-admin.component.ts");
/* harmony import */ var _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./board-user/board-user.component */ "./src/app/board-user/board-user.component.ts");
/* harmony import */ var _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./board-moderator/board-moderator.component */ "./src/app/board-moderator/board-moderator.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_helpers/auth.interceptor */ "./src/app/_helpers/auth.interceptor.ts");
/* harmony import */ var _count_down_count_down_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./count-down/count-down.component */ "./src/app/count-down/count-down.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _jackpot_timer_jackpot_timer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./jackpot-timer/jackpot-timer.component */ "./src/app/jackpot-timer/jackpot-timer.component.ts");
/* harmony import */ var _jackpot_logo_jackpot_logo_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./jackpot-logo/jackpot-logo.component */ "./src/app/jackpot-logo/jackpot-logo.component.ts");























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_10__["BoardAdminComponent"],
            _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_11__["BoardUserComponent"],
            _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_12__["BoardModeratorComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
            _count_down_count_down_component__WEBPACK_IMPORTED_MODULE_15__["CountDownComponent"],
            _jackpot_timer_jackpot_timer_component__WEBPACK_IMPORTED_MODULE_20__["JackpotTimerComponent"],
            _jackpot_logo_jackpot_logo_component__WEBPACK_IMPORTED_MODULE_21__["JackpotLogoComponent"],
        ],
        imports: [
            ngx_pagination__WEBPACK_IMPORTED_MODULE_19__["NgxPaginationModule"],
            angular_6_datatable__WEBPACK_IMPORTED_MODULE_18__["DataTableModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkTableModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ],
        providers: [_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["authInterceptorProviders"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/board-admin/board-admin.component.css":
/*!*******************************************************!*\
  !*** ./src/app/board-admin/board-admin.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkLWFkbWluL2JvYXJkLWFkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/board-admin/board-admin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/board-admin/board-admin.component.ts ***!
  \******************************************************/
/*! exports provided: BoardAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardAdminComponent", function() { return BoardAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");



let BoardAdminComponent = class BoardAdminComponent {
    constructor(userService) {
        this.userService = userService;
        this.content = '';
    }
    ngOnInit() {
        this.userService.getAdminBoard().subscribe(data => {
            this.content = data;
        }, err => {
            this.content = JSON.parse(err.error).message;
        });
    }
};
BoardAdminComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
BoardAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-admin/board-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board-admin.component.css */ "./src/app/board-admin/board-admin.component.css")).default]
    })
], BoardAdminComponent);



/***/ }),

/***/ "./src/app/board-moderator/board-moderator.component.css":
/*!***************************************************************!*\
  !*** ./src/app/board-moderator/board-moderator.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkLW1vZGVyYXRvci9ib2FyZC1tb2RlcmF0b3IuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/board-moderator/board-moderator.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/board-moderator/board-moderator.component.ts ***!
  \**************************************************************/
/*! exports provided: BoardModeratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardModeratorComponent", function() { return BoardModeratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");



let BoardModeratorComponent = class BoardModeratorComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.getModeratorBoard().subscribe(data => {
            this.content = data;
        }, err => {
            this.content = JSON.parse(err.error).message;
        });
    }
};
BoardModeratorComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
BoardModeratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board-moderator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board-moderator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-moderator/board-moderator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board-moderator.component.css */ "./src/app/board-moderator/board-moderator.component.css")).default]
    })
], BoardModeratorComponent);



/***/ }),

/***/ "./src/app/board-user/board-user.component.css":
/*!*****************************************************!*\
  !*** ./src/app/board-user/board-user.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".items{\r\n    background-color: #e9e9e9;\r\n    position: relative; top: 0; left: 0\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQtdXNlci9ib2FyZC11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCLEVBQUUsTUFBTSxFQUFFO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvYm9hcmQtdXNlci9ib2FyZC11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB0b3A6IDA7IGxlZnQ6IDBcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/board-user/board-user.component.ts":
/*!****************************************************!*\
  !*** ./src/app/board-user/board-user.component.ts ***!
  \****************************************************/
/*! exports provided: BoardUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardUserComponent", function() { return BoardUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");



let BoardUserComponent = class BoardUserComponent {
    constructor(userService) {
        this.userService = userService;
        this.content = '';
        this.form = {};
        this.connected = false;
        this.display = false;
    }
    ngOnInit() {
        this.userService.getUserBoard().subscribe(data => {
            this.content = data;
            this.connected = true;
        }, err => {
            this.content = JSON.parse(err.error).message;
        });
        this.getWinners();
    }
    getWinners() {
        this.userService.getWinners().subscribe(data => {
            this.winners = data;
        });
    }
    changeDisplay() {
        this.display = !this.display;
    }
    onSubmit() {
        this.userService.addWinner(this.form.name, this.form.amout, this.form.winDate)
            .subscribe(data => {
            this.winner = data;
        });
        setTimeout(() => {
            this.getWinners();
        }, 1000);
        alert('Winner has been added successfully');
    }
    delete(id) {
        this.userService.DeleteWinner(id).subscribe();
        setTimeout(() => {
            this.getWinners();
        }, 1000);
    }
};
BoardUserComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
BoardUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-user/board-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board-user.component.css */ "./src/app/board-user/board-user.component.css")).default]
    })
], BoardUserComponent);



/***/ }),

/***/ "./src/app/count-down/count-down.component.css":
/*!*****************************************************!*\
  !*** ./src/app/count-down/count-down.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW50LWRvd24vY291bnQtZG93bi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/count-down/count-down.component.ts":
/*!****************************************************!*\
  !*** ./src/app/count-down/count-down.component.ts ***!
  \****************************************************/
/*! exports provided: CountDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountDownComponent", function() { return CountDownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let CountDownComponent = class CountDownComponent {
    constructor() {
        this.dateNow = new Date();
        this.dDay = new Date('Jan 01 2021 00:00:00');
        this.milliSecondsInASecond = 1000;
        this.hoursInADay = 24;
        this.minutesInAnHour = 60;
        this.SecondsInAMinute = 60;
    }
    getTimeDifference() {
        this.timeDifference = this.dDay.getTime() - new Date().getTime();
        this.allocateTimeUnits(this.timeDifference);
    }
    allocateTimeUnits(timeDifference) {
        this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
        this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
        this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
        this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
    }
    ngOnInit() {
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000)
            .subscribe(x => { this.getTimeDifference(); });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
CountDownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-count-down',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./count-down.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/count-down/count-down.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./count-down.component.css */ "./src/app/count-down/count-down.component.css")).default]
    })
], CountDownComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".red{\r\n    background-color: #966706;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\nngb-carousel .wrapper {\r\n    position: relative;\r\n    height: 0;\r\n    padding-top: 55%; /* Keep ratio for 900x500 images */\r\n    height: 50vh !important\r\n\r\n  }\r\n.img{\r\n      width: 100%;\r\n  }\r\n.imgjp{\r\n    padding-top: 0.5cm;\r\n    width: 40%;\r\n}\r\n.items{\r\n    background-color: #414141;\r\n    position: relative; top: 0; left: 0\r\n}\r\nngb-carousel .wrapper>img {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n  }\r\n.textRed{\r\n    color: white ;\r\n  }\r\n.cust{\r\nbackground-color: #e9e9e9;\r\nborder-color: #966706;\r\nborder-radius: 2%;\r\ncolor: blue;\r\n  }\r\n.btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited {\r\n    background-color: #966706 !important;\r\n    border: 1px solid #966706;\r\n    color: white;\r\n\r\n  \r\n    /* font-weight: bold; */\r\n}\r\n.pad{\r\n  text-align: center;\r\n  padding-top: 25px;\r\n}\r\n.cutombtn{\r\n  background-color: #966706 !important;\r\n  color: white;\r\n  border-color: #966706;\r\n  border-radius: 4cm;\r\n  border: 1px solid;\r\n\r\n  font-weight: bold; \r\n}\r\n.outerDiv{\r\n  padding-top: 1cm;\r\n\r\n}\r\n.upperDiv{\r\nbackground-color: #966706;\r\ncolor: white;\r\nwidth: 6cm;\r\nheight: 4cm;\r\nmargin: 0 auto;\r\npadding: 1.2cm;\r\nborder-top-left-radius: 5%;\r\nborder-top-right-radius: 5%;\r\n\r\n}\r\n.lowerDiv{\r\nfont-weight: bold;\r\nbackground-color: white;\r\ncolor: #966706;\r\nheight: 4cm;\r\nwidth: 6cm;\r\nmargin: 0 auto;\r\npadding: 1.2cm;\r\nborder-bottom-left-radius: 5%;\r\nborder-bottom-right-radius: 5%;\r\nborder: #966706 1px solid;\r\n}\r\n.jack{\r\n  /* padding-top: 5cm; */\r\n  height: 10cm;\r\nposition: center;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n}\r\n.imgJack{\r\n  margin-top: 1cm;\r\n  height: 10cm;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  /* background-image: url(../../assets/jack.png); */\r\n}\r\n#slider {\r\ntop: 1cm;\r\n  position:relative;\r\n  left:0;\r\n  height:400px;\r\n\r\n\r\n}\r\n#content {\r\n  position:inherit;\r\n  top: -6.5cm;\r\n  left: 0cm;\r\n  color:#f6de9c\r\n  ;\r\n  \r\n  font-size: 1.5cm;\r\n}\r\n#content #text {\r\n  position:relative;\r\n\r\n  color:#966706;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0IsRUFBRSxrQ0FBa0M7SUFDcEQ7O0VBRUY7QUFDQTtNQUNJLFdBQVc7RUFDZjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLGtCQUFrQixFQUFFLE1BQU0sRUFBRTtBQUNoQztBQUVFO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7RUFDVjtBQUVBO0lBQ0UsYUFBYTtFQUNmO0FBR0E7QUFDRix5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixXQUFXO0VBQ1Q7QUFFQTtJQUNFLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsWUFBWTs7O0lBR1osdUJBQXVCO0FBQzNCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCOztFQUVqQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjs7QUFFbEI7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QixZQUFZO0FBQ1osVUFBVTtBQUNWLFdBQVc7QUFDWCxjQUFjO0FBQ2QsY0FBYztBQUNkLDBCQUEwQjtBQUMxQiwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsdUJBQXVCO0FBQ3ZCLGNBQWM7QUFDZCxXQUFXO0FBQ1gsVUFBVTtBQUNWLGNBQWM7QUFDZCxjQUFjO0FBQ2QsNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUM5Qix5QkFBeUI7QUFDekI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2QsZ0JBQWdCO0VBQ2QsNEJBQTRCO0VBQzVCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGtEQUFrRDtBQUNwRDtBQUVBO0FBQ0EsUUFBUTtFQUNOLGlCQUFpQjtFQUNqQixNQUFNO0VBQ04sWUFBWTs7O0FBR2Q7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsU0FBUztFQUNUO0VBQ0E7O0VBRUEsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxpQkFBaUI7O0VBRWpCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NjY3MDY7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5uZ2ItY2Fyb3VzZWwgLndyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDU1JTsgLyogS2VlcCByYXRpbyBmb3IgOTAweDUwMCBpbWFnZXMgKi9cclxuICAgIGhlaWdodDogNTB2aCAhaW1wb3J0YW50XHJcblxyXG4gIH1cclxuICAuaW1ne1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmltZ2pwe1xyXG4gICAgcGFkZGluZy10b3A6IDAuNWNtO1xyXG4gICAgd2lkdGg6IDQwJTtcclxufVxyXG4gIC5pdGVtc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTQxNDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IHRvcDogMDsgbGVmdDogMFxyXG59XHJcbiAgXHJcbiAgbmdiLWNhcm91c2VsIC53cmFwcGVyPmltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAudGV4dFJlZHtcclxuICAgIGNvbG9yOiB3aGl0ZSA7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAuY3VzdHtcclxuYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcclxuYm9yZGVyLWNvbG9yOiAjOTY2NzA2O1xyXG5ib3JkZXItcmFkaXVzOiAyJTtcclxuY29sb3I6IGJsdWU7XHJcbiAgfVxyXG5cclxuICAuYnRuLXByaW1hcnksIC5idG4tcHJpbWFyeTpob3ZlciwgLmJ0bi1wcmltYXJ5OmFjdGl2ZSwgLmJ0bi1wcmltYXJ5OnZpc2l0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk2NjcwNiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk2NjcwNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgXHJcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cclxufVxyXG5cclxuLnBhZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5jdXRvbWJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTY2NzA2ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogIzk2NjcwNjtcclxuICBib3JkZXItcmFkaXVzOiA0Y207XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcblxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxufVxyXG5cclxuLm91dGVyRGl2e1xyXG4gIHBhZGRpbmctdG9wOiAxY207XHJcblxyXG59XHJcblxyXG4udXBwZXJEaXZ7XHJcbmJhY2tncm91bmQtY29sb3I6ICM5NjY3MDY7XHJcbmNvbG9yOiB3aGl0ZTtcclxud2lkdGg6IDZjbTtcclxuaGVpZ2h0OiA0Y207XHJcbm1hcmdpbjogMCBhdXRvO1xyXG5wYWRkaW5nOiAxLjJjbTtcclxuYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNSU7XHJcbmJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1JTtcclxuXHJcbn1cclxuLmxvd2VyRGl2e1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbmNvbG9yOiAjOTY2NzA2O1xyXG5oZWlnaHQ6IDRjbTtcclxud2lkdGg6IDZjbTtcclxubWFyZ2luOiAwIGF1dG87XHJcbnBhZGRpbmc6IDEuMmNtO1xyXG5ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1JTtcclxuYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUlO1xyXG5ib3JkZXI6ICM5NjY3MDYgMXB4IHNvbGlkO1xyXG59XHJcblxyXG4uamFja3tcclxuICAvKiBwYWRkaW5nLXRvcDogNWNtOyAqL1xyXG4gIGhlaWdodDogMTBjbTtcclxucG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG4uaW1nSmFja3tcclxuICBtYXJnaW4tdG9wOiAxY207XHJcbiAgaGVpZ2h0OiAxMGNtO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2phY2sucG5nKTsgKi9cclxufVxyXG5cclxuI3NsaWRlciB7XHJcbnRvcDogMWNtO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGxlZnQ6MDtcclxuICBoZWlnaHQ6NDAwcHg7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbiNjb250ZW50IHtcclxuICBwb3NpdGlvbjppbmhlcml0O1xyXG4gIHRvcDogLTYuNWNtO1xyXG4gIGxlZnQ6IDBjbTtcclxuICBjb2xvcjojZjZkZTljXHJcbiAgO1xyXG4gIFxyXG4gIGZvbnQtc2l6ZTogMS41Y207XHJcbn1cclxuXHJcbiNjb250ZW50ICN0ZXh0IHtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHJcbiAgY29sb3I6Izk2NjcwNjtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");




let HomeComponent = class HomeComponent {
    constructor(userService) {
        this.userService = userService;
        this.dateNow = new Date();
        this.i = 20;
        this.j = 0;
        this.k = this.i - this.j;
        this.min = 20;
    }
    getdiff(d1, d2) {
        let date1 = new Date(d1); // hedha likbir date fixé endDate
        let date2 = new Date(d2); // date cnx lors du save startDate
        let Times = date1.getTime() - date2.getTime();
        this.totalDiff = Times;
        this.periode = Times / 500;
        //console.log(this.periode + '  periode');
        // console.log(this.totalDiff + '  totaldiff');
    }
    getConnDiff(d1) {
        let date1 = new Date(d1); // hedha likbir date fixé endDate
        let diff = date1.getTime() - this.dateNow.getTime();
        this.currDiff = diff;
        //console.log(this.currDiff + '  currdiff');
    }
    timer(t, counter) {
        if (counter >= 500) {
            this.display = 500;
            this.after = '00';
        }
        else {
            this.after = Math.floor(Math.random() * 20);
            setInterval(() => {
                this.after = Math.floor(Math.random() * (20) + this.min);
                // console.log(this.min);
                this.min += 20;
                if (this.min >= 81) {
                    this.min = 20;
                }
                if (counter > 500) {
                    clearInterval(timer);
                    this.display = 500;
                    this.after = '00';
                }
            }, t / 5);
            this.display = counter;
            const timer = setInterval(() => {
                counter++;
                this.after = Math.floor(Math.random() * 20);
                this.min = 20;
                this.display = counter;
                if (counter > 500) {
                    clearInterval(timer);
                    this.display = 500;
                    this.after = '00';
                }
            }, t);
        }
    }
    setCounter() {
        let unite = (500 / this.totalDiff);
        let tempsEcoule = (this.totalDiff - this.currDiff);
        this.counterr = Math.floor(tempsEcoule * unite);
        // console.log(this.counterr + '  counter');
    }
    getWinnersLimit() {
        this.userService.getWinnersLimit().subscribe(data => {
            this.winner = data;
            this.lastwinner = data[0].name;
            // console.log(this.winner);
        });
    }
    getWinnersAmountLimit() {
        this.userService.getWinnersAmountLimit().subscribe(data => {
            this.winner = data;
            // console.log(this.winner);
        });
    }
    getJackpot() {
        this.userService.getJack().subscribe(data => {
            this.jack = data;
            this.d1 = data[0].endDate;
            this.d2 = data[0].startDate;
            // console.log(this.jack[0] + "jack");
            // console.log(this.d2 + "date1 enddate");
        });
        this.getWinnersLimit();
    }
    ngOnInit() {
        this.getJackpot();
        setTimeout(() => {
            this.after = "00";
            this.getdiff(this.d1, this.d2);
            this.getConnDiff(this.d1);
            this.setCounter();
            this.timer(this.periode, this.counterr);
        }, 1000);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselConfig"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/jackpot-logo/jackpot-logo.component.css":
/*!*********************************************************!*\
  !*** ./src/app/jackpot-logo/jackpot-logo.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imgJack{\r\n    margin-top: 1cm;\r\n    height: 5cm;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    /* background-image: url(../../assets/jack.png); */\r\n  }\r\n  \r\n#content {\r\n    position:inherit;\r\n    top: -3.55cm;\r\n    left: 0cm;\r\n    color:#f6de9c\r\n    ;\r\n    \r\n    font-size: 0.5cm;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvamFja3BvdC1sb2dvL2phY2twb3QtbG9nby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtEQUFrRDtFQUNwRDs7QUFFRjtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osU0FBUztJQUNUO0lBQ0E7O0lBRUEsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvamFja3BvdC1sb2dvL2phY2twb3QtbG9nby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ0phY2t7XHJcbiAgICBtYXJnaW4tdG9wOiAxY207XHJcbiAgICBoZWlnaHQ6IDVjbTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9qYWNrLnBuZyk7ICovXHJcbiAgfVxyXG4gIFxyXG4jY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjppbmhlcml0O1xyXG4gICAgdG9wOiAtMy41NWNtO1xyXG4gICAgbGVmdDogMGNtO1xyXG4gICAgY29sb3I6I2Y2ZGU5Y1xyXG4gICAgO1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDAuNWNtO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/jackpot-logo/jackpot-logo.component.ts":
/*!********************************************************!*\
  !*** ./src/app/jackpot-logo/jackpot-logo.component.ts ***!
  \********************************************************/
/*! exports provided: JackpotLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JackpotLogoComponent", function() { return JackpotLogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");



let JackpotLogoComponent = class JackpotLogoComponent {
    constructor(userService) {
        this.userService = userService;
        this.dateNow = new Date();
        this.i = 20;
        this.j = 0;
        this.k = this.i - this.j;
        this.min = 20;
    }
    getdiff(d1, d2) {
        let date1 = new Date(d1); // hedha likbir date fixé endDate
        let date2 = new Date(d2); // date cnx lors du save startDate
        let Times = date1.getTime() - date2.getTime();
        this.totalDiff = Times;
        this.periode = Times / 500;
        //console.log(this.periode + '  periode');
        // console.log(this.totalDiff + '  totaldiff');
    }
    getConnDiff(d1) {
        let date1 = new Date(d1); // hedha likbir date fixé endDate
        let diff = date1.getTime() - this.dateNow.getTime();
        this.currDiff = diff;
        //console.log(this.currDiff + '  currdiff');
    }
    timer(t, counter) {
        if (counter >= 500) {
            this.display = 500;
            this.after = '00';
        }
        else {
            this.after = Math.floor(Math.random() * 20);
            setInterval(() => {
                this.after = Math.floor(Math.random() * (20) + this.min);
                // console.log(this.min);
                this.min += 20;
                if (this.min >= 81) {
                    this.min = 20;
                }
                if (counter > 500) {
                    clearInterval(timer);
                    this.display = 500;
                    this.after = '00';
                }
            }, t / 5);
            this.display = counter;
            const timer = setInterval(() => {
                counter++;
                this.after = Math.floor(Math.random() * 20);
                this.min = 20;
                this.display = counter;
                if (counter > 500) {
                    clearInterval(timer);
                    this.display = 500;
                    this.after = '00';
                }
            }, t);
        }
    }
    setCounter() {
        let unite = (500 / this.totalDiff);
        let tempsEcoule = (this.totalDiff - this.currDiff);
        this.counterr = Math.floor(tempsEcoule * unite);
        // console.log(this.counterr + '  counter');
    }
    getWinnersLimit() {
        this.userService.getWinnersLimit().subscribe(data => {
            this.winner = data;
            this.lastwinner = data[0].name;
            // console.log(this.winner);
        });
    }
    getWinnersAmountLimit() {
        this.userService.getWinnersAmountLimit().subscribe(data => {
            this.winner = data;
            // console.log(this.winner);
        });
    }
    getJackpot() {
        this.userService.getJack().subscribe(data => {
            this.jack = data;
            this.d1 = data[0].endDate;
            this.d2 = data[0].startDate;
            // console.log(this.jack[0] + "jack");
            // console.log(this.d2 + "date1 enddate");
        });
        this.getWinnersLimit();
    }
    ngOnInit() {
        this.getJackpot();
        setTimeout(() => {
            this.after = "00";
            this.getdiff(this.d1, this.d2);
            this.getConnDiff(this.d1);
            this.setCounter();
            this.timer(this.periode, this.counterr);
        }, 1000);
    }
};
JackpotLogoComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
JackpotLogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jackpot-logo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jackpot-logo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/jackpot-logo/jackpot-logo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jackpot-logo.component.css */ "./src/app/jackpot-logo/jackpot-logo.component.css")).default]
    })
], JackpotLogoComponent);



/***/ }),

/***/ "./src/app/jackpot-timer/jackpot-timer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/jackpot-timer/jackpot-timer.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".items{\r\n    background-color: #e9e9e9;\r\n    position: relative; top: 0; left: 0\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvamFja3BvdC10aW1lci9qYWNrcG90LXRpbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCLEVBQUUsTUFBTSxFQUFFO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvamFja3BvdC10aW1lci9qYWNrcG90LXRpbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB0b3A6IDA7IGxlZnQ6IDBcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/jackpot-timer/jackpot-timer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/jackpot-timer/jackpot-timer.component.ts ***!
  \**********************************************************/
/*! exports provided: JackpotTimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JackpotTimerComponent", function() { return JackpotTimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");



let JackpotTimerComponent = class JackpotTimerComponent {
    constructor(userService) {
        this.userService = userService;
        this.dateNow = new Date();
        this.form = {};
        this.connected = false;
    }
    ngOnInit() {
        this.userService.getUserBoard().subscribe(data => {
            this.connected = true;
        }, err => {
            this.content = JSON.parse(err.error).message;
        });
    }
    onSubmit() {
        var formattedDate = new Date(this.form.endDate).getTime();
        let dateNow2 = new Date();
        this.userService.addJackpot(formattedDate, dateNow2)
            .subscribe(data => {
            this.jack = data;
        });
    }
    onSubmit2() {
        let dateNow2 = new Date();
        const data = {
            endDate: this.form.endDate,
            startDate: dateNow2
        };
        let date1 = new Date(this.form.endDate); // hedha likbir date fixé endDate
        let diff = date1.getTime() - dateNow2.getTime();
        if (diff < 0) {
            alert('Please enter a comming date!');
        }
        else {
            if (Number.isNaN(diff)) {
                alert('Please enter a date!');
            }
            else {
                this.userService.UpdateJackpot(1, data)
                    .subscribe(data => {
                    this.jackpot = data;
                });
                alert('Timer has been set successfully!');
            }
        }
    }
};
JackpotTimerComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
JackpotTimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jackpot-timer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jackpot-timer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/jackpot-timer/jackpot-timer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jackpot-timer.component.css */ "./src/app/jackpot-timer/jackpot-timer.component.css")).default]
    })
], JackpotTimerComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label {\n  display: block;\n  margin-top: 10px;\n}\n\n.card-container.card {\n  max-width: 400px !important;\n  padding: 40px 40px;\n}\n\n.card {\n  background-color: #f7f7f7;\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBR2hCLGtCQUFrQjtFQUdsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBR2Qsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lci5jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA0MHB4IDQwcHg7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgcGFkZGluZzogMjBweCAyNXB4IDMwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDI1cHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLnByb2ZpbGUtaW1nLWNhcmQge1xuICB3aWR0aDogOTZweDtcbiAgaGVpZ2h0OiA5NnB4O1xuICBtYXJnaW46IDAgYXV0byAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");




let LoginComponent = class LoginComponent {
    constructor(authService, tokenStorage) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
    }
    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
        }
    }
    onSubmit() {
        this.authService.login(this.form).subscribe(data => {
            this.tokenStorage.saveToken(data.accessToken);
            this.tokenStorage.saveUser(data);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
            this.reloadPage();
        }, err => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
        });
    }
    reloadPage() {
        window.location.reload();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");



let ProfileComponent = class ProfileComponent {
    constructor(token) {
        this.token = token;
    }
    ngOnInit() {
        this.currentUser = this.token.getUser();
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label {\n  display: block;\n  margin-top: 10px;\n}\n\n.card-container.card {\n  max-width: 400px !important;\n  padding: 40px 40px;\n}\n\n.card {\n  background-color: #f7f7f7;\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBR2hCLGtCQUFrQjtFQUdsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBR2Qsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lci5jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA0MHB4IDQwcHg7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgcGFkZGluZzogMjBweCAyNXB4IDMwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDI1cHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLnByb2ZpbGUtaW1nLWNhcmQge1xuICB3aWR0aDogOTZweDtcbiAgaGVpZ2h0OiA5NnB4O1xuICBtYXJnaW46IDAgYXV0byAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");



let RegisterComponent = class RegisterComponent {
    constructor(authService) {
        this.authService = authService;
        this.form = {};
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
    }
    ngOnInit() {
    }
    onSubmit() {
        this.authService.register(this.form).subscribe(data => {
            console.log(data);
            this.isSuccessful = true;
            this.isSignUpFailed = false;
        }, err => {
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\admin\Desktop\freee\wowbet\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);