function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["food-details-food-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/food-details/food-details.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/food-details/food-details.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFoodDetailsFoodDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"medium\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card-header>\n    <ion-img type=\"image/png\" [src]=\"cartService.foodDetails.imagePath\"></ion-img>\n    <ion-card-subtitle>{{cartService.foodDetails.companyName}}</ion-card-subtitle>\n    <ion-card-title>{{cartService.foodDetails.foodName}}</ion-card-title>\n    <div class=\"ion-text-end\">\n      <ion-card-title style=\"color:orange\">{{cartService.foodDetails.price}} €</ion-card-title>\n    </div>\n  </ion-card-header>\n\n  <ion-card-content>\n    {{cartService.foodDetails.description}}\n  </ion-card-content>\n  <ion-row>\n  <ion-col></ion-col>\n  <ion-col>\n        <ion-button (click)=\"cartService.addToCart(cartService.foodDetails)\" color=\"medium\">\n          <ion-icon name=\"cart-outline\"></ion-icon>\n          Ajouter au panier\n        </ion-button>\n  </ion-col>\n  <ion-col></ion-col>\n  </ion-row>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/food-details/food-details-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/food-details/food-details-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: FoodDetailsPageRoutingModule */

  /***/
  function srcAppFoodDetailsFoodDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodDetailsPageRoutingModule", function () {
      return FoodDetailsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _food_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./food-details.page */
    "./src/app/food-details/food-details.page.ts");

    var routes = [{
      path: '',
      component: _food_details_page__WEBPACK_IMPORTED_MODULE_3__["FoodDetailsPage"]
    }];

    var FoodDetailsPageRoutingModule = function FoodDetailsPageRoutingModule() {
      _classCallCheck(this, FoodDetailsPageRoutingModule);
    };

    FoodDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FoodDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/food-details/food-details.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/food-details/food-details.module.ts ***!
    \*****************************************************/

  /*! exports provided: FoodDetailsPageModule */

  /***/
  function srcAppFoodDetailsFoodDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodDetailsPageModule", function () {
      return FoodDetailsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _food_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./food-details-routing.module */
    "./src/app/food-details/food-details-routing.module.ts");
    /* harmony import */


    var _food_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./food-details.page */
    "./src/app/food-details/food-details.page.ts");

    var FoodDetailsPageModule = function FoodDetailsPageModule() {
      _classCallCheck(this, FoodDetailsPageModule);
    };

    FoodDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _food_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["FoodDetailsPageRoutingModule"]],
      declarations: [_food_details_page__WEBPACK_IMPORTED_MODULE_6__["FoodDetailsPage"]]
    })], FoodDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/food-details/food-details.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/food-details/food-details.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFoodDetailsFoodDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb2QtZGV0YWlscy9mb29kLWRldGFpbHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/food-details/food-details.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/food-details/food-details.page.ts ***!
    \***************************************************/

  /*! exports provided: FoodDetailsPage */

  /***/
  function srcAppFoodDetailsFoodDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodDetailsPage", function () {
      return FoodDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _cart_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cart-manager.service */
    "./src/app/cart-manager.service.ts");

    var FoodDetailsPage = /*#__PURE__*/function () {
      function FoodDetailsPage(cartService) {
        _classCallCheck(this, FoodDetailsPage);

        this.cartService = cartService;
      }

      _createClass(FoodDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FoodDetailsPage;
    }();

    FoodDetailsPage.ctorParameters = function () {
      return [{
        type: _cart_manager_service__WEBPACK_IMPORTED_MODULE_2__["CartManagerService"]
      }];
    };

    FoodDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-food-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./food-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/food-details/food-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./food-details.page.scss */
      "./src/app/food-details/food-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_manager_service__WEBPACK_IMPORTED_MODULE_2__["CartManagerService"]])], FoodDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=food-details-food-details-module-es5.js.map