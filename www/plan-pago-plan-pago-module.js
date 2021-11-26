(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plan-pago-plan-pago-module"],{

/***/ "0Vq4":
/*!***********************************************!*\
  !*** ./src/app/plan-pago/plan-pago.module.ts ***!
  \***********************************************/
/*! exports provided: PlanPagoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanPagoPageModule", function() { return PlanPagoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _plan_pago_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plan-pago-routing.module */ "6Kgd");
/* harmony import */ var _plan_pago_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plan-pago.page */ "PJvE");







let PlanPagoPageModule = class PlanPagoPageModule {
};
PlanPagoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _plan_pago_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlanPagoPageRoutingModule"]
        ],
        declarations: [_plan_pago_page__WEBPACK_IMPORTED_MODULE_6__["PlanPagoPage"]]
    })
], PlanPagoPageModule);



/***/ }),

/***/ "6Kgd":
/*!*******************************************************!*\
  !*** ./src/app/plan-pago/plan-pago-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PlanPagoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanPagoPageRoutingModule", function() { return PlanPagoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _plan_pago_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plan-pago.page */ "PJvE");




const routes = [
    {
        path: '',
        component: _plan_pago_page__WEBPACK_IMPORTED_MODULE_3__["PlanPagoPage"]
    }
];
let PlanPagoPageRoutingModule = class PlanPagoPageRoutingModule {
};
PlanPagoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlanPagoPageRoutingModule);



/***/ }),

/***/ "8N7Y":
/*!***********************************************!*\
  !*** ./src/app/plan-pago/plan-pago.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-Dashboard {\n  height: 120px;\n}\n\n.toolbar-dashboard {\n  --background: #4F47BF;\n  border-radius: 0px 0px 0px 0px;\n}\n\n.imagen-header {\n  width: 100px;\n  height: 100px;\n}\n\n.card-dashboard {\n  border-radius: 26px;\n  margin: 17px;\n  border: solid 0.5px silver;\n  --background: #828CBF;\n}\n\n.imagen-dashboard {\n  width: 120px;\n  height: 87px;\n}\n\n.toolbar-footer {\n  --background: rgb(243, 242, 242);\n}\n\n.fondo-marca {\n  --background: url('marcaagua.png') 0 0/100% 100% no-repeat !important;\n}\n\n.texto-simulador {\n  font-family: \"Josefin-ligth\" !important;\n}\n\n.campo_valor {\n  border-bottom: solid 2px #4F47BF;\n  font-size: 15px;\n  border: solid 0.5px #4F47BF;\n  border-radius: 10px;\n  padding-left: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBsYW4tcGFnby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLGdDQUFBO0FBREo7O0FBSUE7RUFDSSxxRUFBQTtBQURKOztBQUlBO0VBQ0ksdUNBQUE7QUFESjs7QUFJQTtFQUNJLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQURKIiwiZmlsZSI6InBsYW4tcGFnby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLURhc2hib2FyZCB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4udG9vbGJhci1kYXNoYm9hcmQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNEY0N0JGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDEycHggI0ZGNDU3QTtcclxufVxyXG5cclxuLmltYWdlbi1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmNhcmQtZGFzaGJvYXJkIHtcclxuICAgIC8vIGJveC1zaGFkb3c6IC03cHggNXB4IDFweCAjRkY0NTdBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcclxuICAgIG1hcmdpbjogMTdweDtcclxuICAgIGJvcmRlcjogc29saWQgMC41cHggc2lsdmVyO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjODI4Q0JGO1xyXG59XHJcblxyXG4uaW1hZ2VuLWRhc2hib2FyZCB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDg3cHg7XHJcbn1cclxuXHJcbi50b29sYmFyLWZvb3RlciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDMsIDI0MiwgMjQyKTtcclxufVxyXG5cclxuLmZvbmRvLW1hcmNhIHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL21hcmNhYWd1YS5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dG8tc2ltdWxhZG9yIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbi1saWd0aCcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhbXBvX3ZhbG9yIHtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjNEY0N0JGO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAwLjVweCAjNEY0N0JGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "PJvE":
/*!*********************************************!*\
  !*** ./src/app/plan-pago/plan-pago.page.ts ***!
  \*********************************************/
/*! exports provided: PlanPagoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanPagoPage", function() { return PlanPagoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_plan_pago_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./plan-pago.page.html */ "mc1z");
/* harmony import */ var _plan_pago_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plan-pago.page.scss */ "8N7Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");







let PlanPagoPage = class PlanPagoPage {
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
            console.log(this.CatMes);
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
};
PlanPagoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
PlanPagoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-plan-pago',
        template: _raw_loader_plan_pago_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_plan_pago_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PlanPagoPage);



/***/ }),

/***/ "mc1z":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/plan-pago/plan-pago.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"header-Dashboard\">\n    <ion-toolbar class=\"toolbar-dashboard\">\n        <!-- <ion-title>Dashboard</ion-title> -->\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"4\" class=\"ion-text-center\">\n                    <img src=\"../../assets/images/IMAGEN PERFIL CABECERA.png\" alt=\"\" class=\"imagen-header\" (click)=\"editar()\">\n                </ion-col>\n                <ion-col size=\"8\" class=\"ion-text-left\">\n                    <ion-item lines=\"none\" style=\"--background: transparent;\">\n                        <p slot=\"start\" style=\"font-size: 20px;font-weight: bold;color: white;margin: 26px 0px 0px 0px;text-transform: capitalize;\">\n                            {{Nombre}}</p>\n                        <ion-icon style=\"font-size: 20px;font-weight: bold;color: white;margin: 26px 0px 0px 0px;text-transform: capitalize;\" slot=\"end\" name=\"exit-outline\" (click)=\"Salir()\"></ion-icon>\n\n                    </ion-item>\n                    <p style=\"font-size: 10px;color: white;margin-left:17px;\">Último ingreso: 19/03/2021</p>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item lines=\"none\">\n            <ion-grid>\n                <ion-row>\n                    <ion-col size=\"12\" class=\"ion-text-center\">\n                        <p>Plan de pagos para la solicitud de credito con <span style=\"color: #4F47BF;font-weight: bold;\">{{Multinivel}}</span> por un valor de <span style=\"color: #4F47BF;font-weight: bold;\">{{Monto|currency}}</span> que se pagara a\n                            <span style=\"color: #4F47BF;font-weight: bold;\">{{Meses}}</span> cuotas.\n                        </p>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n        <ion-item lines=\"none\">\n            <ion-row>\n                <ion-col size=\"12\" class=\"ion-text-left\" style=\"color: gray;\">\n                    Resultados aproximados y sujetos a estudio de crédito y políticas de la entidad.\n                </ion-col>\n            </ion-row>\n        </ion-item>\n        <ion-item lines=\"none\">\n            <ion-card style=\"width: 100%;\">\n                <ion-card-header style=\"background: #4F47BF;color: white;\" class=\"ion-text-center\">\n                    <h5>Lista de Pagos</h5>\n                </ion-card-header>\n                <ion-card-content>\n                    <div>\n                        <ion-grid style=\"width: 100%;\">\n                            <ion-row>\n                                <ion-col style=\"background: #4F47BF;\" class=\"ion-text-center\">\n                                    <p style=\"color:white;\">N. Cuota</p>\n                                </ion-col>\n                                <ion-col style=\"background: #4F47BF;\" class=\"ion-text-center\">\n                                    <p style=\"color:white;\">Valor Cuota</p>\n                                </ion-col>\n                                <ion-col style=\"background: #4F47BF;\" class=\"ion-text-center\">\n                                    <p style=\"color:white;\">Saldo Final</p>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row *ngFor=\"let Cat of CatMes\">\n                                <ion-col>\n                                    <p>{{Cat.NumeroCuota}}</p>\n                                </ion-col>\n                                <ion-col>\n                                    <p>{{Cat.ValorCuotaConSeguro}}</p>\n                                </ion-col>\n                                <ion-col>\n                                    <p>{{Cat.SaldoFinal}}</p>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row>\n                                <ion-col class=\"ion-text-center\">\n                                    <p style=\"font-weight: bold;\">Valor Seguro: {{ValordelSeguro}}</p>\n                                </ion-col>\n                                <ion-col class=\"ion-text-center\">\n                                    <p style=\"font-weight: bold;\">Tasa: 2.4%</p>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </ion-item>\n    </ion-list>\n</ion-content>\n\n<ion-footer class=\"ion-no-border \" style=\"background-color: #4F47BF; \">\n    <ion-toolbar class=\"toolbar-footer \">\n        <ion-tabs style=\"background-color: #4F47BF; \">\n            <ion-tab-bar slot=\"bottom \" style=\"background-color: #4F47BF; \">\n                <ion-tab-button (click)=\"Historial() \" style=\"background-color: #4F47BF; \">\n                    <ion-icon name=\"list-circle\" style=\"font-size: 23px;color: white; \"></ion-icon>\n                    <ion-label style=\"color: white; \">Historial</ion-label>\n                </ion-tab-button>\n\n                <ion-tab-button (click)=\"Dashboard() \" style=\"background-color: #4F47BF; \">\n                    <ion-icon name=\"home\" style=\"font-size: 23px;color: white; \"></ion-icon>\n                    <ion-label style=\"color: white; \">Home</ion-label>\n                </ion-tab-button>\n\n                <ion-tab-button (click)=\"Notificacion() \" style=\"background-color: #4F47BF; \">\n                    <ion-icon name=\"notifications\" style=\"font-size: 23px;color: white; \"></ion-icon>\n                    <ion-label style=\"color: white; \">Notificación</ion-label>\n                </ion-tab-button>\n            </ion-tab-bar>\n        </ion-tabs>\n    </ion-toolbar>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=plan-pago-plan-pago-module.js.map