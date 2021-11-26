(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-pass-reset-pass-module"],{

/***/ "5k/F":
/*!*************************************************!*\
  !*** ./src/app/reset-pass/reset-pass.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body-App {\n  --background: url('BACKGROUND.png') 0 0/100% 100% no-repeat !important;\n}\n\n.Imagen-Cabeza {\n  width: 150px;\n  height: 150px;\n  top: 90px;\n  position: relative;\n  z-index: 2;\n}\n\n.estilo-campo1 {\n  border: solid #666666 0.3px;\n  padding-left: 32px;\n  padding-top: 12px;\n  --padding-start: inherit !important;\n  border-radius: 10px 0px 0px 10px;\n  height: 50px;\n  margin-bottom: 20px;\n  width: 120px !important;\n  font-size: 25px;\n}\n\n.estilo-campo2 {\n  border: solid #666666 0.3px;\n  padding-left: 12px;\n  --padding-start: inherit !important;\n  border-radius: 0px 10px 10px 0px;\n  height: 50px;\n  margin-bottom: 20px;\n}\n\n.Boton-Inicio {\n  --background: #4F47BF;\n  height: 40px;\n  width: 100%;\n  font-size: 15px;\n  text-transform: lowercase !important;\n}\n\n.espacio-campo1 {\n  margin-top: 0px;\n}\n\n.card-login {\n  width: 100%;\n  margin-top: 60%;\n  background: transparent;\n  --box-shadow: transparent;\n}\n\n.Boton-Inicio-bajo {\n  --background: transparent;\n  border-bottom: solid 0.5px #FF457A;\n  color: #FF457A;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlc2V0LXBhc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0VBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFDQTtFQUVFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoicmVzZXQtcGFzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keS1BcHB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvQkFDS0dST1VORC5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uSW1hZ2VuLUNhYmV6YXtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICB0b3A6IDkwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5lc3RpbG8tY2FtcG8xe1xyXG4gIGJvcmRlcjogc29saWQgIzY2NjY2NiAwLjNweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi5lc3RpbG8tY2FtcG8ye1xyXG4gIGJvcmRlcjogc29saWQgIzY2NjY2NiAwLjNweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5Cb3Rvbi1JbmljaW97XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNEY0N0JGO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXNwYWNpby1jYW1wbzF7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4uY2FyZC1sb2dpbntcclxuICAvLyBib3JkZXI6IHNvbGlkICM2NjY2NjYgMC41cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogNjAlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tYm94LXNoYWRvdzogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5Cb3Rvbi1JbmljaW8tYmFqb3tcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4ICNGRjQ1N0E7XHJcbiAgY29sb3I6ICNGRjQ1N0E7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "P+BZ":
/*!***********************************************!*\
  !*** ./src/app/reset-pass/reset-pass.page.ts ***!
  \***********************************************/
/*! exports provided: ResetPassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassPage", function() { return ResetPassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reset_pass_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reset-pass.page.html */ "XeId");
/* harmony import */ var _reset_pass_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-pass.page.scss */ "5k/F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let ResetPassPage = class ResetPassPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    Atras() {
        this.router.navigate(['/inicio']);
    }
    Recuperar() {
        this.router.navigate(['/inicio']);
    }
};
ResetPassPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ResetPassPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reset-pass',
        template: _raw_loader_reset_pass_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reset_pass_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResetPassPage);



/***/ }),

/***/ "XeId":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reset-pass/reset-pass.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"body-App\">\r\n\r\n  <ion-list style=\"margin-top: 4%;background-color: transparent;\">\r\n    <div class=\"ion-text-center\">\r\n      <img src=\"../../assets/images/LOGO BANKEM.png\" alt=\"\" class=\"Imagen-Cabeza\">\r\n\r\n      <div class=\"card-login\">\r\n        <!-- <ion-card-content> -->\r\n          <div>\r\n\r\n            <ion-item lines=\"none\" class=\"ion-text-center\">\r\n              <p>Por favor ingrese un correo electronico para enviar los pasos para restaurar su contraseña</p>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\">\r\n              <ion-label class=\"estilo-campo1 espacio-campo1\" position=\"fixed\"><ion-icon name=\"mail-outline\"></ion-icon></ion-label>\r\n              <ion-input type=\"email\" class=\"estilo-campo2 espacio-campo1\" placeholder=\"Email\"></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\">\r\n              <div class=\"ion-text-center\" style=\"width: 100%;\">\r\n                <ion-button class=\"Boton-Inicio\" full (click)=\"Recuperar()\">Enviar</ion-button>\r\n              </div>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\" style=\"--background: transparent;\">\r\n              <div class=\"ion-text-center\" style=\"width: 100%;\">\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"ion-text-center\">\r\n                      <a class=\"Boton-Inicio-bajo\" (click)=\"Atras()\">Atras</a>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n            </ion-item>\r\n          </div>\r\n        <!-- </ion-card-content> -->\r\n      </div>\r\n    </div>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "iKkx":
/*!*************************************************!*\
  !*** ./src/app/reset-pass/reset-pass.module.ts ***!
  \*************************************************/
/*! exports provided: ResetPassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassPageModule", function() { return ResetPassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reset_pass_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-pass-routing.module */ "wjVc");
/* harmony import */ var _reset_pass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-pass.page */ "P+BZ");







let ResetPassPageModule = class ResetPassPageModule {
};
ResetPassPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reset_pass_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetPassPageRoutingModule"]
        ],
        declarations: [_reset_pass_page__WEBPACK_IMPORTED_MODULE_6__["ResetPassPage"]]
    })
], ResetPassPageModule);



/***/ }),

/***/ "wjVc":
/*!*********************************************************!*\
  !*** ./src/app/reset-pass/reset-pass-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ResetPassPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassPageRoutingModule", function() { return ResetPassPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reset_pass_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-pass.page */ "P+BZ");




const routes = [
    {
        path: '',
        component: _reset_pass_page__WEBPACK_IMPORTED_MODULE_3__["ResetPassPage"]
    }
];
let ResetPassPageRoutingModule = class ResetPassPageRoutingModule {
};
ResetPassPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResetPassPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=reset-pass-reset-pass-module.js.map