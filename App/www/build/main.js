webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return urlServer; });
var http = "http://";
var port = ":10000";
var ipServer = "192.168.0.100";
var urlServer = http + ipServer + port;
//# sourceMappingURL=variables.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_variables__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hello_ionic_hello_ionic__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListPage = (function () {
    function ListPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.image = __WEBPACK_IMPORTED_MODULE_3__app_variables__["a" /* urlServer */] + "/imagen/";
        this.i = 0;
    }
    ListPage.prototype.goMonitor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__hello_ionic_hello_ionic__["a" /* HelloIonicPage */], {
            item: 1
        });
    };
    ListPage.prototype.updateImage = function () {
        this.image = this.image + this.i;
        this.i = this.i + 1;
    };
    ListPage.prototype.ngOnInit = function () {
        this.updateImage();
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/giovanni/Documents/git/Embedded-Cattle-Feeding-System/App/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Photo capture</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n   <img [src]= "image"\n         alt="Image preview...">\n  <ion-item>\n     <button ion-button round large color="black" (click)="updateImage()" class="centerOne">Take Photo</button>\n  </ion-item>\n  <ion-item>\n     <button ion-button round small color="black" (click)="goMonitor()" class="centerOne">Go to Monitor</button>\n   </ion-item>\n</ion-content>\ns\n'/*ion-inline-end:"/home/giovanni/Documents/git/Embedded-Cattle-Feeding-System/App/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_hello_ionic_hello_ionic__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_item_details_item_details__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Monitor', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] },
            { title: 'Photo', component: __WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/giovanni/Documents/git/Embedded-Cattle-Feeding-System/App/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/giovanni/Documents/git/Embedded-Cattle-Feeding-System/App/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"/home/giovanni/Documents/git/Embedded-Cattle-Feeding-System/App/src/pages/item-details/item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"/home/giovanni/Documents/git/Embedded-Cattle-Feeding-System/App/src/pages/item-details/item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_variables__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HelloIonicPage = (function () {
    function HelloIonicPage(nav, navParams, http) {
        this.nav = nav;
        this.navParams = navParams;
        this.http = http;
        if (this.navParams.get('item') == 1) {
            this.nav.remove(0);
            this.temperatureValue = "-";
            this.humidityValue = "-";
            this.weightValue = "-";
            this.username = "";
            this.badLogin = true;
            this.hideCreateUser = true;
            this.hideSystem = false;
            this.hideLogin = true;
        }
        else {
            this.temperatureValue = "-";
            this.humidityValue = "-";
            this.weightValue = "-";
            this.username = "";
            this.badLogin = true;
            this.hideCreateUser = true;
            this.hideSystem = true;
            this.hideLogin = false;
        }
    }
    HelloIonicPage.prototype.getData = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_variables__["a" /* urlServer */] + '/variables/');
    };
    HelloIonicPage.prototype.updateValues = function () {
        var _this = this;
        this.getData().subscribe(function (values) {
            var valuesJSON = values.json();
            _this.temperatureValue = valuesJSON.temperatura;
            _this.humidityValue = valuesJSON.humedad;
            _this.weightValue = valuesJSON.flexor;
        });
    };
    HelloIonicPage.prototype.goLogIn = function () {
        this.hideCreateUser = true;
        this.hideLogin = false;
        this.badLogin = true;
    };
    HelloIonicPage.prototype.logIn = function () {
        var _this = this;
        this.badLogin = true;
        var stringUser = "{" + "\"nombre\":" + "\"" + this.username + "\"" + "," + "\"pass\":" + "\"" + this.password + "\"" + "}";
        this.http.put(__WEBPACK_IMPORTED_MODULE_2__app_variables__["a" /* urlServer */] + '/login/', stringUser).subscribe(function (data) {
            _this.hideSystem = false;
            _this.hideLogin = true;
            _this.badLogin = true;
        }, function (err) {
            _this.badLogin = false;
        });
    };
    HelloIonicPage.prototype.openDoor = function () {
        this.http.put(__WEBPACK_IMPORTED_MODULE_2__app_variables__["a" /* urlServer */] + "/servo/", "{\"servo\":1}").subscribe(function (data) { return console.log(data); });
    };
    HelloIonicPage.prototype.goSignIn = function () {
        this.hideCreateUser = false;
        this.hideLogin = true;
        this.badLogin = true;
    };
    HelloIonicPage.prototype.signIn = function () {
        var _this = this;
        this.badLogin = true;
        var stringUser = "{" + "\"nombre\":" + "\"" + this.usernameCreate + "\"" + "," + "\"pass\":" + "\"" + this.passwordCreate + "\"" + "}";
        this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_variables__["a" /* urlServer */] + '/users/', stringUser).subscribe(function (data) {
            _this.hideCreateUser = true;
            _this.hideLogin = false;
            _this.badLogin = true;
        }, function (err) {
            _this.badLogin = false;
        });
    };
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"/home/giovanni/Documents/git/Embedded-Cattle-Feeding-System/App/src/pages/hello-ionic/hello-ionic.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n        <div>\n          <div [hidden]="hideSystem" class="center">\n            <button ion-button menuToggle>\n              <ion-icon name="menu"></ion-icon>\n            </button>\n          </div>\n          <div class="center">\n            <ion-title class="center">Welcome to Cattle Feeding </ion-title>\n          </div>\n        </div>\n    </ion-navbar>\n</ion-header>\n\n\n  <ion-content>\n\n    <!--- Input for create user -->\n\n    <div [hidden]="hideCreateUser">\n      <ion-item>\n          <ion-label color="primary">Name</ion-label>\n          <ion-input placeholder="Text Input" [(ngModel)]=\'usernameCreate\'></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label color="primary">Password</ion-label>\n          <ion-input type="password" placeholder="Text Input" [(ngModel)]=\'passwordCreate\'></ion-input>\n      </ion-item>\n      <ion-item>\n        <button ion-button large round color="secondary" (click)="signIn()" class="centerOne">Create User</button>\n      </ion-item>\n      <ion-item>\n        <button ion-button small round color="dark" (click)="goLogIn()" class="centerOne">Login</button>\n      </ion-item>\n    </div>\n\n    <!--- Input for password and username -->\n\n    <div [hidden]="hideLogin">\n      <ion-item>\n          <ion-label color="primary">User</ion-label>\n          <ion-input placeholder="Text Input" [(ngModel)]=\'username\'></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label color="primary">Password</ion-label>\n          <ion-input type="password" placeholder="Text Input" [(ngModel)]=\'password\'></ion-input>\n      </ion-item>\n      <ion-item>\n        <button ion-button large round color="secondary" (click)="logIn()" class="centerOne">Login</button>\n      </ion-item>\n      <ion-item>\n        <button ion-button round color="dark" (click)="goSignIn()" class="centerOne">Sign In</button>\n      </ion-item>\n    </div>\n\n    <!--- Danger for bad login -->\n\n    <ion-label color="danger" [hidden]="badLogin">Username or Password Incorrect</ion-label>\n\n    <!--- Input for manage the system -->\n\n\n    <div [hidden]="hideSystem">\n      <ion-item>\n        <div class="container">\n          <div class="bar bar-header bar-dark">\n            <h1 class="title">Temperature</h1>\n          </div>\n          <label>{{temperatureValue}}</label>\n        </div>\n      </ion-item>\n      <ion-item>\n        <div class="container">\n          <div class="bar bar-header bar-dark">\n            <h1 class="title">Humidity</h1>\n          </div>\n          <label>{{humidityValue}}</label>\n        </div>\n      </ion-item>\n      <ion-item>\n        <div class="container">\n          <div class="bar bar-header bar-dark">\n            <h1 class="title">Weigth</h1>\n          </div>\n          <label>{{weightValue}}</label>\n        </div>\n      </ion-item>\n        <ion-item>\n          <div class="container">\n            <button ion-button large class="center" round color="primary" (click)="updateValues()">Refresh data</button>\n            <button ion-button large class="center" round color="primary" (click)="openDoor()">Feed Cattle</button>\n          </div>\n        </ion-item>\n   </div>\n  </ion-content>\n'/*ion-inline-end:"/home/giovanni/Documents/git/Embedded-Cattle-Feeding-System/App/src/pages/hello-ionic/hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map