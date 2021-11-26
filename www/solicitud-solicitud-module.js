(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["solicitud-solicitud-module"],{

/***/ "3cJw":
/*!*********************************************!*\
  !*** ./src/app/solicitud/solicitud.page.ts ***!
  \*********************************************/
/*! exports provided: SolicitudPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudPage", function() { return SolicitudPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_solicitud_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./solicitud.page.html */ "tY+z");
/* harmony import */ var _solicitud_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solicitud.page.scss */ "ZplJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let SolicitudPage = class SolicitudPage {
    constructor(router) {
        this.router = router;
        this.Valor = 0;
        this.Dias = 0;
    }
    ngOnInit() {
    }
    ResumenSolicitud() {
        this.router.navigate(['/resumen-solicitud']);
    }
    Notificacion() {
        this.router.navigate(['/notificacion']);
    }
    Dashboard() {
        this.router.navigate(['/dashboard']);
    }
    Historial() {
        this.router.navigate(['/historial']);
    }
};
SolicitudPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SolicitudPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-solicitud',
        template: _raw_loader_solicitud_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_solicitud_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SolicitudPage);



/***/ }),

/***/ "4GNi":
/*!***********************************************!*\
  !*** ./src/app/solicitud/solicitud.module.ts ***!
  \***********************************************/
/*! exports provided: SolicitudPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudPageModule", function() { return SolicitudPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _solicitud_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solicitud-routing.module */ "9T2o");
/* harmony import */ var _solicitud_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./solicitud.page */ "3cJw");







let SolicitudPageModule = class SolicitudPageModule {
};
SolicitudPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _solicitud_routing_module__WEBPACK_IMPORTED_MODULE_5__["SolicitudPageRoutingModule"]
        ],
        declarations: [_solicitud_page__WEBPACK_IMPORTED_MODULE_6__["SolicitudPage"]]
    })
], SolicitudPageModule);



/***/ }),

/***/ "9T2o":
/*!*******************************************************!*\
  !*** ./src/app/solicitud/solicitud-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SolicitudPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudPageRoutingModule", function() { return SolicitudPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _solicitud_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solicitud.page */ "3cJw");




const routes = [
    {
        path: '',
        component: _solicitud_page__WEBPACK_IMPORTED_MODULE_3__["SolicitudPage"]
    }
];
let SolicitudPageRoutingModule = class SolicitudPageRoutingModule {
};
SolicitudPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SolicitudPageRoutingModule);



/***/ }),

/***/ "ZplJ":
/*!***********************************************!*\
  !*** ./src/app/solicitud/solicitud.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-Dashboard {\n  height: 230px;\n}\n\n.toolbar-dashboard {\n  --background: #4F47BF;\n  border-radius: 0px 0px 26px 26px;\n  box-shadow: 0px 12px #FF457A;\n}\n\n.imagen-header {\n  width: 130px;\n  height: 130px;\n}\n\n.card-dashboard {\n  box-shadow: -7px 5px 1px #FF457A;\n  border-radius: 26px;\n  margin: 17px;\n  border: solid 0.5px silver;\n  --background: #4F47BF;\n}\n\n.imagen-dashboard {\n  width: 120px;\n  height: 87px;\n}\n\n.toolbar-footer {\n  --background: rgb(243, 242, 242);\n}\n\n.Opcion1 {\n  border-radius: 26px;\n  background: #4F47BF;\n  height: 120px;\n  box-shadow: -7px 5px 1px #FF457A;\n}\n\n.Opcion2 {\n  border-radius: 26px;\n  background: #4F47BF;\n  height: 120px;\n  box-shadow: -7px 5px 1px #FF457A;\n}\n\n.card-dashboard {\n  width: 100%;\n  box-shadow: -7px 5px 1px #FF457A;\n  border-radius: 26px;\n  margin: 17px;\n  border: solid 0.5px #4F47BF;\n  --background: transparent;\n}\n\n.campos-register {\n  border: solid 0.5px #4F47BF;\n  border-radius: 26px;\n  padding-left: 12px !important;\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNvbGljaXR1ZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxnQ0FBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQUFGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFERiIsImZpbGUiOiJzb2xpY2l0dWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1EYXNoYm9hcmR7XHJcbiAgaGVpZ2h0OiAyMzBweDtcclxuXHJcbn1cclxuXHJcbi50b29sYmFyLWRhc2hib2FyZHtcclxuICAtLWJhY2tncm91bmQ6ICM0RjQ3QkY7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyNnB4IDI2cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDEycHggI0ZGNDU3QTtcclxufVxyXG5cclxuLmltYWdlbi1oZWFkZXJ7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWRhc2hib2FyZHtcclxuICBib3gtc2hhZG93OiAtN3B4IDVweCAxcHggI0ZGNDU3QTtcclxuICBib3JkZXItcmFkaXVzOiAyNnB4O1xyXG4gIG1hcmdpbjogMTdweDtcclxuICBib3JkZXI6IHNvbGlkIDAuNXB4IHNpbHZlcjtcclxuICAtLWJhY2tncm91bmQ6ICM0RjQ3QkY7XHJcbn1cclxuXHJcbi5pbWFnZW4tZGFzaGJvYXJke1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDg3cHg7XHJcbn1cclxuXHJcbi50b29sYmFyLWZvb3RlcntcclxuICAtLWJhY2tncm91bmQ6IHJnYigyNDMsIDI0MiwgMjQyKTtcclxufVxyXG5cclxuLk9wY2lvbjF7XHJcbiAgYm9yZGVyLXJhZGl1czogMjZweDtcclxuICBiYWNrZ3JvdW5kOiAjNEY0N0JGO1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgYm94LXNoYWRvdzogLTdweCA1cHggMXB4ICNGRjQ1N0E7XHJcbn1cclxuXHJcbi5PcGNpb24ye1xyXG4gIGJvcmRlci1yYWRpdXM6IDI2cHg7XHJcbiAgYmFja2dyb3VuZDogIzRGNDdCRjtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIGJveC1zaGFkb3c6IC03cHggNXB4IDFweCAjRkY0NTdBO1xyXG59XHJcblxyXG5cclxuLmNhcmQtZGFzaGJvYXJke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IC03cHggNXB4IDFweCAjRkY0NTdBO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI2cHg7XHJcbiAgbWFyZ2luOiAxN3B4O1xyXG4gIGJvcmRlcjogc29saWQgMC41cHggIzRGNDdCRjtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY2FtcG9zLXJlZ2lzdGVyIHtcclxuICBib3JkZXI6IHNvbGlkIDAuNXB4ICM0RjQ3QkY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjZweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEycHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "tY+z":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/solicitud/solicitud.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"header-Dashboard\">\r\n    <ion-toolbar class=\"toolbar-dashboard\">\r\n        <!-- <ion-title>Dashboard</ion-title> -->\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col size=\"4\" class=\"ion-text-center\">\r\n                    <img src=\"../../assets/images/IMAGEN PERFIL CABECERA.png\" alt=\"\" class=\"imagen-header\" (click)=\"editar()\">\r\n                </ion-col>\r\n                <ion-col size=\"8\" class=\"ion-text-left\">\r\n                    <ion-item lines=\"none\" style=\"--background: transparent;\">\r\n                        <p slot=\"start\" style=\"font-size: 20px;font-weight: bold;color: white;margin: 26px 0px 0px 0px;text-transform: capitalize;\">\r\n                            {{Nombre}}</p>\r\n                        <ion-icon style=\"font-size: 20px;font-weight: bold;color: white;margin: 26px 0px 0px 0px;text-transform: capitalize;\" slot=\"end\" name=\"exit-outline\" (click)=\"Salir()\"></ion-icon>\r\n\r\n                    </ion-item>\r\n                    <p style=\"font-size: 10px;color: white;margin-left:17px;\">Último ingreso: 19/03/2021</p>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <br>\r\n    <ion-item lines=\"none\">\r\n        <ion-card style=\"width: 100%;\" class=\"card-dashboard\">\r\n            <ion-card-header class=\"ion-text-center\">\r\n                <ion-card-title style=\"color: #4F47BF;\">\r\n                    Solicitud de Credito\r\n                </ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n                <ion-grid>\r\n                    <ion-row>\r\n                        <ion-col size=\"12\">\r\n                            <p class=\"ion-text-center\">¿Cuánto dinero necesitas?</p>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\">\r\n                            <ion-range min=\"0\" max=\"150000\" color=\"secondary\" [(ngModel)]=\"Valor\">\r\n                                <ion-label slot=\"start\">$0</ion-label>\r\n                                <ion-label slot=\"end\">$150.000</ion-label>\r\n                            </ion-range>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\" class=\"ion-text-center\">\r\n                            <p style=\"font-size: 15px;margin: 14px;\">{{Valor | currency}}</p>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                        <ion-col size=\"12\">\r\n                            <p class=\"ion-text-center\">¿Cuántos dias a diferir los pagos?</p>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\">\r\n                            <ion-range min=\"1\" max=\"30\" color=\"secondary\" [(ngModel)]=\"Dias\">\r\n                                <ion-label slot=\"start\">1</ion-label>\r\n                                <ion-label slot=\"end\">30</ion-label>\r\n                            </ion-range>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\" class=\"ion-text-center\">\r\n                            <p style=\"font-size: 15px;margin: 14px;\">{{Dias}} Dias</p>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\">\r\n                            <select style=\"width: 100%;\" placeholder=\"Multinivel...\" [(ngModel)]=\"Multi\">\r\n                <option selected>\r\n                  Seleccione\r\n                </option>\r\n                <option>\r\n                  Herbalife\r\n                </option>\r\n                <option>\r\n                  Omnilife\r\n                </option>\r\n                <option>\r\n                  Avon\r\n                </option>\r\n                <option>\r\n                  Marketing Personal\r\n                </option>\r\n              </select>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                        <ion-col size=\"12\">\r\n                            <ion-button style=\"width: 100%;--background: #4F47BF;\" (click)=\"ResumenSolicitud()\">\r\n                                Solicitar\r\n                            </ion-button>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </ion-item>\r\n\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-toolbar class=\"toolbar-footer\">\r\n        <ion-tabs>\r\n            <ion-tab-bar slot=\"bottom\">\r\n                <ion-tab-button (click)=\"Historial()\">\r\n                    <ion-icon name=\"list-circle-outline\" style=\"font-size: 23px;color: #FF457A;\"></ion-icon>\r\n                    <ion-label style=\"color: #FF457A;\">Historial</ion-label>\r\n                </ion-tab-button>\r\n\r\n                <ion-tab-button (click)=\"Dashboard()\">\r\n                    <ion-icon name=\"home-outline\" style=\"font-size: 23px;color: #FF457A;\"></ion-icon>\r\n                    <ion-label style=\"color: #FF457A;\">Home</ion-label>\r\n                </ion-tab-button>\r\n\r\n                <ion-tab-button (click)=\"Notificacion()\">\r\n                    <ion-icon name=\"notifications-outline\" style=\"font-size: 23px;color: #FF457A;\"></ion-icon>\r\n                    <ion-label style=\"color: #FF457A;\">Notificación</ion-label>\r\n                </ion-tab-button>\r\n            </ion-tab-bar>\r\n        </ion-tabs>\r\n    </ion-toolbar>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=solicitud-solicitud-module.js.map