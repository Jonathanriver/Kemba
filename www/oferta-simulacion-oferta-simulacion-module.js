(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oferta-simulacion-oferta-simulacion-module"],{

/***/ "6WAY":
/*!*************************************************************!*\
  !*** ./src/app/oferta-simulacion/oferta-simulacion.page.ts ***!
  \*************************************************************/
/*! exports provided: OfertaSimulacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfertaSimulacionPage", function() { return OfertaSimulacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_oferta_simulacion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./oferta-simulacion.page.html */ "cccM");
/* harmony import */ var _oferta_simulacion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./oferta-simulacion.page.scss */ "pD/Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");







let OfertaSimulacionPage = class OfertaSimulacionPage {
    constructor(router, storage, alertController, loadingController) {
        this.router = router;
        this.storage = storage;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.TasaInteres = 0.024;
        this.ValordelSeguro = 1800;
        //Obj Credito
        this.CatMes = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.Nombre = yield this.storage.get('name');
            this.Credito = yield this.storage.get('Solicitud');
            //Tiempo del prestamo
            this.Tiempo = this.Credito[1]['Meses'];
            for (let i = 0; i < this.Tiempo; i++) {
                console.log(i + 1);
                if (i == 0) {
                    //Monto Incial
                    this.SaldoInicial = this.Credito[0]['Monto'];
                }
                else {
                    //Monto Incial
                    this.SaldoInicial = this.SaldoFinal;
                }
                //Tasa de Interes
                this.Interes = this.SaldoInicial * this.TasaInteres;
                //Abono a capital
                this.AbonoCapital = this.Credito[0]['Monto'] / this.Tiempo;
                //Valor cuota sin seguro
                this.ValorCuotaSinSeguro = this.AbonoCapital + this.Interes;
                //Valor cuota con seguro
                this.ValorCuotaConSeguro = this.ValorCuotaSinSeguro + this.ValordelSeguro;
                //Saldo Final
                this.SaldoFinal = this.SaldoInicial - this.AbonoCapital;
                this.CatMes.push({ 'NumeroCuota': i + 1, 'SaldoInicial': this.SaldoInicial, 'ValorCuotaSinSegur': this.ValorCuotaSinSeguro, 'AbonoCapital': this.AbonoCapital, 'Interes': this.Interes, 'ValorSeguro': this.ValordelSeguro, 'ValorCuotaConSeguro': this.ValorCuotaConSeguro, 'SaldoFinal': this.SaldoFinal });
            }
            this.ValorPaso = this.CatMes[0]['ValorCuotaConSeguro'];
            console.log(this.CatMes[0]['ValorCuotaConSeguro']);
        });
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
    Salir() {
        this.router.navigate(['/inicio']);
    }
    Resumen() {
        this.router.navigate(['/plan-pago']);
    }
};
OfertaSimulacionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
OfertaSimulacionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-oferta-simulacion',
        template: _raw_loader_oferta_simulacion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_oferta_simulacion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OfertaSimulacionPage);



/***/ }),

/***/ "F//N":
/*!***************************************************************!*\
  !*** ./src/app/oferta-simulacion/oferta-simulacion.module.ts ***!
  \***************************************************************/
/*! exports provided: OfertaSimulacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfertaSimulacionPageModule", function() { return OfertaSimulacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _oferta_simulacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oferta-simulacion-routing.module */ "TG2J");
/* harmony import */ var _oferta_simulacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oferta-simulacion.page */ "6WAY");







let OfertaSimulacionPageModule = class OfertaSimulacionPageModule {
};
OfertaSimulacionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _oferta_simulacion_routing_module__WEBPACK_IMPORTED_MODULE_5__["OfertaSimulacionPageRoutingModule"]
        ],
        declarations: [_oferta_simulacion_page__WEBPACK_IMPORTED_MODULE_6__["OfertaSimulacionPage"]]
    })
], OfertaSimulacionPageModule);



/***/ }),

/***/ "TG2J":
/*!***********************************************************************!*\
  !*** ./src/app/oferta-simulacion/oferta-simulacion-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: OfertaSimulacionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfertaSimulacionPageRoutingModule", function() { return OfertaSimulacionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _oferta_simulacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oferta-simulacion.page */ "6WAY");




const routes = [
    {
        path: '',
        component: _oferta_simulacion_page__WEBPACK_IMPORTED_MODULE_3__["OfertaSimulacionPage"]
    }
];
let OfertaSimulacionPageRoutingModule = class OfertaSimulacionPageRoutingModule {
};
OfertaSimulacionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OfertaSimulacionPageRoutingModule);



/***/ }),

/***/ "cccM":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oferta-simulacion/oferta-simulacion.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"header-Dashboard\">\n    <ion-toolbar class=\"toolbar-dashboard\">\n        <!-- <ion-title>Dashboard</ion-title> -->\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"4\" class=\"ion-text-center\">\n                    <img src=\"../../assets/images/IMAGEN PERFIL CABECERA.png\" alt=\"\" class=\"imagen-header\" (click)=\"editar()\">\n                </ion-col>\n                <ion-col size=\"8\" class=\"ion-text-left\">\n                    <ion-item lines=\"none\" style=\"--background: transparent;\">\n                        <p slot=\"start\" style=\"font-size: 20px;font-weight: bold;color: white;margin: 26px 0px 0px 0px;text-transform: capitalize;\">\n                            {{Nombre}}</p>\n                        <ion-icon style=\"font-size: 20px;font-weight: bold;color: white;margin: 26px 0px 0px 0px;text-transform: capitalize;\" slot=\"end\" name=\"exit-outline\" (click)=\"Salir()\"></ion-icon>\n\n                    </ion-item>\n                    <p style=\"font-size: 10px;color: white;margin-left:17px;\">Último ingreso: 19/03/2021</p>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item lines=\"none\">\n            <ion-grid>\n                <ion-row>\n                    <ion-col size=\"12\" class=\"ion-text-center\">\n                        <p>Te ofrecemos estas opciones para tu solicitud de Crédito</p>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n        <ion-item lines=\"none\">\n            <ion-card style=\"width: 100%;\">\n                <ion-card-header style=\"background: #4F47BF;\" class=\"ion-text-center\">\n                    <p style=\"font-family: 'Berlin';color: white;\">\n                        Tasa fija - Cuota Variable\n                    </p>\n                </ion-card-header>\n                <ion-card-content>\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col class=\"ion-text-center\" size=\"12\">\n                                Por un credito de:\n                            </ion-col>\n                            <ion-col class=\"ion-text-center\" size=\"12\">\n                                <p style=\"font-size: 25px;color: #EC268F;\">{{ SaldoInicial|currency }}</p>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row style=\"background: rgba(192, 192, 192, 0.322);\">\n                            <ion-col class=\"ion-text-center\" size=\"12\">\n                                Pagarias a {{Tiempo}} cuotas mensuales por un valor aproximado de :\n                            </ion-col>\n                            <ion-col class=\"ion-text-center\" size=\"12\">\n                                <p style=\"font-size: 25px;color: #EC268F;\">{{ ValorPaso|currency }}</p>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col class=\"ion-text-center\" size=\"12\">\n                                Tasas y tarifas:\n                            </ion-col>\n                            <ion-col class=\"ion-text-center\" size=\"12\">\n                                <table style=\"width: 100%;\">\n                                    <tr>\n                                        <td class=\"ion-text-left\">\n                                            Tasa mes vencido\n                                        </td>\n                                        <td class=\"ion-text-right\">\n                                            2.4%\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"ion-text-left\">\n                                            Seguro de vida\n                                        </td>\n                                        <td class=\"ion-text-right\">\n                                            $1.800.00\n                                        </td>\n                                    </tr>\n                                </table>\n                            </ion-col>\n                        </ion-row>\n                        <hr style=\"border: solid 0.5px #4F47BF;\">\n                        <ion-row>\n                            <ion-col class=\"ion-text-left\" size=\"12\">\n                                <table style=\"width: 100%;\">\n                                    <tr>\n                                        <td class=\"ion-text-left\">\n                                            <a style=\"text-decoration: underline;color: #EC268F;\" (click)=\"Resumen()\">Conocer el plan de\n                                                pagos</a>\n                                        </td>\n                                        <td class=\"ion-text-right\">\n                                            <ion-icon name=\"add-circle-outline\" style=\"color: #EC268F;font-size: 20px;\">\n                                            </ion-icon>\n                                        </td>\n                                    </tr>\n                                </table>\n                            </ion-col>\n                        </ion-row>\n                        <hr style=\"border: solid 0.5px #4F47BF;\">\n                        <ion-row>\n                            <ion-col class=\"ion-text-center\" size=\"12\">\n                                <ion-button style=\"--background: #EC268F;\">Solicitar Credito</ion-button>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n\n                </ion-card-content>\n            </ion-card>\n        </ion-item>\n    </ion-list>\n</ion-content>\n\n<ion-footer class=\"ion-no-border \" style=\"background-color: #4F47BF; \">\n    <ion-toolbar class=\"toolbar-footer \">\n        <ion-tabs style=\"background-color: #4F47BF; \">\n            <ion-tab-bar slot=\"bottom \" style=\"background-color: #4F47BF; \">\n                <ion-tab-button (click)=\"Historial() \" style=\"background-color: #4F47BF; \">\n                    <ion-icon name=\"list-circle\" style=\"font-size: 23px;color: white; \"></ion-icon>\n                    <ion-label style=\"color: white; \">Historial</ion-label>\n                </ion-tab-button>\n\n                <ion-tab-button (click)=\"Dashboard() \" style=\"background-color: #4F47BF; \">\n                    <ion-icon name=\"home\" style=\"font-size: 23px;color: white; \"></ion-icon>\n                    <ion-label style=\"color: white; \">Home</ion-label>\n                </ion-tab-button>\n\n                <ion-tab-button (click)=\"Notificacion() \" style=\"background-color: #4F47BF; \">\n                    <ion-icon name=\"notifications\" style=\"font-size: 23px;color: white; \"></ion-icon>\n                    <ion-label style=\"color: white; \">Notificación</ion-label>\n                </ion-tab-button>\n            </ion-tab-bar>\n        </ion-tabs>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "pD/Q":
/*!***************************************************************!*\
  !*** ./src/app/oferta-simulacion/oferta-simulacion.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-Dashboard {\n  height: 120px;\n}\n\n.toolbar-dashboard {\n  --background: #4F47BF;\n  border-radius: 0px 0px 0px 0px;\n}\n\n.imagen-header {\n  width: 100px;\n  height: 100px;\n}\n\n.card-dashboard {\n  border-radius: 26px;\n  margin: 17px;\n  border: solid 0.5px silver;\n  --background: #828CBF;\n}\n\n.imagen-dashboard {\n  width: 120px;\n  height: 87px;\n}\n\n.toolbar-footer {\n  --background: rgb(243, 242, 242);\n}\n\n.fondo-marca {\n  --background: url('marcaagua.png') 0 0/100% 100% no-repeat !important;\n}\n\n.texto-simulador {\n  font-family: \"Josefin-ligth\" !important;\n}\n\n.campo_valor {\n  border-bottom: solid 2px #4F47BF;\n  font-size: 15px;\n  border: solid 0.5px #4F47BF;\n  border-radius: 10px;\n  padding-left: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9mZXJ0YS1zaW11bGFjaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFFSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBQ0ksZ0NBQUE7QUFESjs7QUFJQTtFQUNJLHFFQUFBO0FBREo7O0FBSUE7RUFDSSx1Q0FBQTtBQURKOztBQUlBO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBREoiLCJmaWxlIjoib2ZlcnRhLXNpbXVsYWNpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1EYXNoYm9hcmQge1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG5cclxuLnRvb2xiYXItZGFzaGJvYXJkIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzRGNDdCRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMHB4IDBweDtcclxuICAgIC8vIGJveC1zaGFkb3c6IDBweCAxMnB4ICNGRjQ1N0E7XHJcbn1cclxuXHJcbi5pbWFnZW4taGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWRhc2hib2FyZCB7XHJcbiAgICAvLyBib3gtc2hhZG93OiAtN3B4IDVweCAxcHggI0ZGNDU3QTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XHJcbiAgICBtYXJnaW46IDE3cHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDAuNXB4IHNpbHZlcjtcclxuICAgIC0tYmFja2dyb3VuZDogIzgyOENCRjtcclxufVxyXG5cclxuLmltYWdlbi1kYXNoYm9hcmQge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiA4N3B4O1xyXG59XHJcblxyXG4udG9vbGJhci1mb290ZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQzLCAyNDIsIDI0Mik7XHJcbn1cclxuXHJcbi5mb25kby1tYXJjYSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9tYXJjYWFndWEucG5nJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHRvLXNpbXVsYWRvciB7XHJcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4tbGlndGgnICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYW1wb192YWxvciB7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzRGNDdCRjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJvcmRlcjogc29saWQgMC41cHggIzRGNDdCRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=oferta-simulacion-oferta-simulacion-module.js.map