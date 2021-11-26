(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productos-productos-module"],{

/***/ "LYHX":
/*!***********************************************!*\
  !*** ./src/app/productos/productos.module.ts ***!
  \***********************************************/
/*! exports provided: ProductosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosPageModule", function() { return ProductosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _productos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productos-routing.module */ "rodV");
/* harmony import */ var _productos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productos.page */ "kavO");







let ProductosPageModule = class ProductosPageModule {
};
ProductosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _productos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductosPageRoutingModule"]
        ],
        declarations: [_productos_page__WEBPACK_IMPORTED_MODULE_6__["ProductosPage"]]
    })
], ProductosPageModule);



/***/ }),

/***/ "Uiyx":
/*!***********************************************!*\
  !*** ./src/app/productos/productos.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0b3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "kavO":
/*!*********************************************!*\
  !*** ./src/app/productos/productos.page.ts ***!
  \*********************************************/
/*! exports provided: ProductosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosPage", function() { return ProductosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_productos_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./productos.page.html */ "rUTZ");
/* harmony import */ var _productos_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productos.page.scss */ "Uiyx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ProductosPage = class ProductosPage {
    constructor() { }
    ngOnInit() {
    }
};
ProductosPage.ctorParameters = () => [];
ProductosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-productos',
        template: _raw_loader_productos_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_productos_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductosPage);



/***/ }),

/***/ "rUTZ":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productos/productos.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Productos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "rodV":
/*!*******************************************************!*\
  !*** ./src/app/productos/productos-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ProductosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosPageRoutingModule", function() { return ProductosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _productos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productos.page */ "kavO");




const routes = [
    {
        path: '',
        component: _productos_page__WEBPACK_IMPORTED_MODULE_3__["ProductosPage"]
    }
];
let ProductosPageRoutingModule = class ProductosPageRoutingModule {
};
ProductosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductosPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=productos-productos-module.js.map