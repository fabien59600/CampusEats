(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menus-menus-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menus/menus.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menus/menus.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"medium\">\n    <ion-title class=\"ion-text-center\">CampusEats</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid>\n    <ion-row *ngFor=\"let food of foodList\">\n      <ion-col>\n        <ion-card>\n          <ion-card-header (click)=\"getDetails(food)\">\n            <ion-img type=\"image/png\" [src]=\"food.imagePath\"></ion-img>\n            <ion-card-subtitle>{{food.companyName}}</ion-card-subtitle>\n            <ion-card-title href=\"/tabs/menus\">{{food.foodName}}</ion-card-title>\n            <div class=\"ion-text-end\">\n              <ion-card-title style=\"color:orange\">{{food.price}} €</ion-card-title>\n            </div>\n          </ion-card-header>\n        \n          <ion-card-content>\n            {{food.description}}\n          </ion-card-content>\n          <ion-row>\n          <ion-col></ion-col>\n          <ion-col>\n                <ion-button (click)=\"addToCart(food)\" color=\"medium\">\n                  <ion-icon name=\"cart-outline\"></ion-icon>\n                  Ajouter au panier\n                </ion-button>\n          </ion-col>\n          </ion-row>\n          <!--<ion-checkbox class=pull-right></ion-checkbox>-->\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/menus/menus-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/menus/menus-routing.module.ts ***!
  \***********************************************/
/*! exports provided: MenusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusPageRoutingModule", function() { return MenusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menus.page */ "./src/app/menus/menus.page.ts");




const routes = [
    {
        path: '',
        component: _menus_page__WEBPACK_IMPORTED_MODULE_3__["MenusPage"]
    }
];
let MenusPageRoutingModule = class MenusPageRoutingModule {
};
MenusPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenusPageRoutingModule);



/***/ }),

/***/ "./src/app/menus/menus.module.ts":
/*!***************************************!*\
  !*** ./src/app/menus/menus.module.ts ***!
  \***************************************/
/*! exports provided: MenusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusPageModule", function() { return MenusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _menus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menus-routing.module */ "./src/app/menus/menus-routing.module.ts");
/* harmony import */ var _menus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menus.page */ "./src/app/menus/menus.page.ts");







let MenusPageModule = class MenusPageModule {
};
MenusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menus_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenusPageRoutingModule"]
        ],
        declarations: [_menus_page__WEBPACK_IMPORTED_MODULE_6__["MenusPage"]]
    })
], MenusPageModule);



/***/ }),

/***/ "./src/app/menus/menus.page.scss":
/*!***************************************!*\
  !*** ./src/app/menus/menus.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnVzL21lbnVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/menus/menus.page.ts":
/*!*************************************!*\
  !*** ./src/app/menus/menus.page.ts ***!
  \*************************************/
/*! exports provided: MenusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusPage", function() { return MenusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cart_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart-manager.service */ "./src/app/cart-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let MenusPage = class MenusPage {
    constructor(cartService, router) {
        this.cartService = cartService;
        this.router = router;
        this.foodList = [{
                id: 1,
                companyName: 'Burgers Factory',
                foodName: 'CheeseBurger',
                description: 'Steak 150g, tomate, salade, tranche de cheddar fondu, sauce ketchup, servit avec Frites',
                imagePath: 'assets/img/burger.jpg',
                price: 7.5
            },
            {
                id: 2,
                companyName: 'Dominos Pizza',
                foodName: 'Pizza 4 frommages',
                description: 'Sauce tomate, mozzarella, chèvre, emmental, Fourme d’Ambert A.O.P.',
                imagePath: 'assets/img/pizza.png',
                price: 10
            },
            {
                id: 3,
                companyName: 'Gur Kebab',
                foodName: 'Kebab',
                description: 'Faluche, une viande kebab, les traditionnels légumes tomates, salade oignons , une boisson 33 cl et une sauce au choix',
                imagePath: 'assets/img/kebab.png',
                price: 7.10
            },
            {
                id: 4,
                companyName: 'Fresh Burrito',
                foodName: 'Burrito',
                description: 'Riz, poulet, guacamole, tomate bio et sauce salsa roja',
                imagePath: 'assets/img/buritos.jpeg',
                price: 9.80
            }
        ];
    }
    addToCart(food) {
        this.cartService.addToCart(food);
    }
    getDetails(food) {
        this.router.navigateByUrl('food-details')
            .then(() => {
        })
            .catch((e) => console.warn(e));
        this.cartService.updateFoodDetails(food);
    }
    ngOnInit() {
    }
};
MenusPage.ctorParameters = () => [
    { type: _cart_manager_service__WEBPACK_IMPORTED_MODULE_2__["CartManagerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MenusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menus.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menus/menus.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menus.page.scss */ "./src/app/menus/menus.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_manager_service__WEBPACK_IMPORTED_MODULE_2__["CartManagerService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], MenusPage);



/***/ })

}]);
//# sourceMappingURL=menus-menus-module-es2015.js.map