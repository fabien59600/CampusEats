function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["command-succes-command-succes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/command-succes/command-succes.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/command-succes/command-succes.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommandSuccesCommandSuccesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"medium\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Livraison</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"form-content\" *ngIf=\"isValided===false\">\n  <ion-row></ion-row>\n  <ion-col>\n  <ion-title class=\"ion-text-center\">Où désirez-vous être livré ?</ion-title>\n  </ion-col>\n  <ion-row></ion-row>\n  <form [formGroup]=\"command_form\" (ngSubmit)=\"onSubmit()\">\n      <ion-grid>  \n        <ion-row>\n          <ion-col size=\"3\">\n            <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">N°</ion-label>\n                <ion-input type=\"number\" formControlName=\"number\"></ion-input>\n            </ion-item>\n            <!--<div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validation_messages.number\">\n                    <div class=\"error-message\"\n                         *ngIf=\"command_form.get('number').hasError(validation.type) && command_form.get('number').dirty || command_form.get('number').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>-->\n          </ion-col>\n          <ion-col size=\"9\">\n            <ion-item>\n                <ion-label position=\"floating\" color=\"medium\">Rue</ion-label>\n                <ion-input type=\"text\" formControlName=\"street\"></ion-input>\n            </ion-item>\n            <!--<div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validation_messages.street\">\n                    <div class=\"error-message\"\n                         *ngIf=\"command_form.get('street').hasError(validation.type) && command_form.get('street').dirty || command_form.get('street').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>-->\n          </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"10\">\n          <ion-item>\n              <ion-label position=\"floating\" color=\"medium\">Ville</ion-label>\n              <ion-input type=\"text\" formControlName=\"city\"></ion-input>\n          </ion-item>\n          <!--<div class=\"validation-errors\">\n              <ng-container *ngFor=\"let validation of validation_messages.street\">\n                  <div class=\"error-message\"\n                       *ngIf=\"command_form.get('street').hasError(validation.type) && command_form.get('street').dirty || command_form.get('street').touched)\">\n                      <ion-icon name=\"information-circle-outline\"></ion-icon>\n                      {{ validation.message }}\n                  </div>\n              </ng-container>\n          </div>-->\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-row>\n      <ion-col></ion-col>\n        <ion-button color=\"medium\" tab=\"cart\" type=\"submit\">Commander</ion-button>\n      <ion-col></ion-col>\n    </ion-row>\n  </form>\n</ion-content>        \n\n<ion-content padding *ngIf=\"isValided===true\">\n  <ion-grid style=\"height: 100%\" >\n    <ion-row style=\"height: 100%\">\n      <ion-img type=\"image/png\" href=\"/tabs/\" style=\"height: 150px; width: 150px; margin: auto; display: block;\" src=\"assets/img/check.png\"></ion-img>\n      <ion-title class=\"ion-text-center\">Commande validée !</ion-title>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/command-succes/command-succes-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/command-succes/command-succes-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: CommandSuccesPageRoutingModule */

  /***/
  function srcAppCommandSuccesCommandSuccesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommandSuccesPageRoutingModule", function () {
      return CommandSuccesPageRoutingModule;
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


    var _command_succes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./command-succes.page */
    "./src/app/command-succes/command-succes.page.ts");

    var routes = [{
      path: '',
      component: _command_succes_page__WEBPACK_IMPORTED_MODULE_3__["CommandSuccesPage"]
    }];

    var CommandSuccesPageRoutingModule = function CommandSuccesPageRoutingModule() {
      _classCallCheck(this, CommandSuccesPageRoutingModule);
    };

    CommandSuccesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CommandSuccesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/command-succes/command-succes.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/command-succes/command-succes.module.ts ***!
    \*********************************************************/

  /*! exports provided: CommandSuccesPageModule */

  /***/
  function srcAppCommandSuccesCommandSuccesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommandSuccesPageModule", function () {
      return CommandSuccesPageModule;
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


    var _command_succes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./command-succes-routing.module */
    "./src/app/command-succes/command-succes-routing.module.ts");
    /* harmony import */


    var _command_succes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./command-succes.page */
    "./src/app/command-succes/command-succes.page.ts");

    var CommandSuccesPageModule = function CommandSuccesPageModule() {
      _classCallCheck(this, CommandSuccesPageModule);
    };

    CommandSuccesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _command_succes_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommandSuccesPageRoutingModule"]],
      declarations: [_command_succes_page__WEBPACK_IMPORTED_MODULE_6__["CommandSuccesPage"]]
    })], CommandSuccesPageModule);
    /***/
  },

  /***/
  "./src/app/command-succes/command-succes.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/command-succes/command-succes.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommandSuccesCommandSuccesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1hbmQtc3VjY2VzL2NvbW1hbmQtc3VjY2VzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/command-succes/command-succes.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/command-succes/command-succes.page.ts ***!
    \*******************************************************/

  /*! exports provided: CommandSuccesPage */

  /***/
  function srcAppCommandSuccesCommandSuccesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommandSuccesPage", function () {
      return CommandSuccesPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var CommandSuccesPage = /*#__PURE__*/function () {
      function CommandSuccesPage(formBuilder) {
        _classCallCheck(this, CommandSuccesPage);

        this.formBuilder = formBuilder;
        this.isValided = false;
        this.validation_messages = {
          'street': [{
            type: 'required',
            message: 'Nom de rue obligatoire.'
          }],
          'city': [{
            type: 'required',
            message: 'La ville est obligatoire.'
          }],
          'number': [{
            type: 'pattern',
            message: 'Le numéro de rue doit être un entier'
          }]
        };
      }

      _createClass(CommandSuccesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Création du formulaire avec les contraintes
          this.command_form = this.formBuilder.group({
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'))
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.validAdress();
        }
      }, {
        key: "validAdress",
        value: function validAdress() {
          this.isValided = true;
        }
      }]);

      return CommandSuccesPage;
    }();

    CommandSuccesPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    CommandSuccesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-command-succes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./command-succes.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/command-succes/command-succes.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./command-succes.page.scss */
      "./src/app/command-succes/command-succes.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], CommandSuccesPage);
    /***/
  }
}]);
//# sourceMappingURL=command-succes-command-succes-module-es5.js.map