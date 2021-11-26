(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["simulador-simulador-module"],{

/***/ "QmZg":
/*!***********************************************!*\
  !*** ./src/app/simulador/simulador.module.ts ***!
  \***********************************************/
/*! exports provided: SimuladorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimuladorPageModule", function() { return SimuladorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _simulador_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simulador-routing.module */ "phzn");
/* harmony import */ var _simulador_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./simulador.page */ "YXlS");







let SimuladorPageModule = class SimuladorPageModule {
};
SimuladorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _simulador_routing_module__WEBPACK_IMPORTED_MODULE_5__["SimuladorPageRoutingModule"]
        ],
        declarations: [_simulador_page__WEBPACK_IMPORTED_MODULE_6__["SimuladorPage"]]
    })
], SimuladorPageModule);



/***/ }),

/***/ "WJG2":
/*!***********************************************!*\
  !*** ./src/app/simulador/simulador.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-Dashboard {\n  height: 120px;\n}\n\n.toolbar-dashboard {\n  --background: #4F47BF;\n  border-radius: 0px 0px 0px 0px;\n}\n\n.imagen-header {\n  width: 100px;\n  height: 100px;\n}\n\n.card-dashboard {\n  border-radius: 26px;\n  margin: 17px;\n  border: solid 0.5px silver;\n  --background: #828CBF;\n}\n\n.imagen-dashboard {\n  width: 120px;\n  height: 87px;\n}\n\n.toolbar-footer {\n  --background: rgb(243, 242, 242);\n}\n\n.fondo-marca {\n  --background: url('marcaagua.png') 0 0/100% 100% no-repeat !important;\n}\n\n.texto-simulador {\n  font-family: \"Josefin-ligth\" !important;\n}\n\n.campo_valor {\n  border-bottom: solid 2px #4F47BF;\n  font-size: 15px;\n  border: solid 0.5px #4F47BF;\n  border-radius: 10px;\n  padding-left: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpbXVsYWRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLGdDQUFBO0FBREo7O0FBSUE7RUFDSSxxRUFBQTtBQURKOztBQUlBO0VBQ0ksdUNBQUE7QUFESjs7QUFJQTtFQUNJLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQURKIiwiZmlsZSI6InNpbXVsYWRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLURhc2hib2FyZCB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4udG9vbGJhci1kYXNoYm9hcmQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNEY0N0JGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDEycHggI0ZGNDU3QTtcclxufVxyXG5cclxuLmltYWdlbi1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmNhcmQtZGFzaGJvYXJkIHtcclxuICAgIC8vIGJveC1zaGFkb3c6IC03cHggNXB4IDFweCAjRkY0NTdBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcclxuICAgIG1hcmdpbjogMTdweDtcclxuICAgIGJvcmRlcjogc29saWQgMC41cHggc2lsdmVyO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjODI4Q0JGO1xyXG59XHJcblxyXG4uaW1hZ2VuLWRhc2hib2FyZCB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDg3cHg7XHJcbn1cclxuXHJcbi50b29sYmFyLWZvb3RlciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDMsIDI0MiwgMjQyKTtcclxufVxyXG5cclxuLmZvbmRvLW1hcmNhIHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL21hcmNhYWd1YS5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dG8tc2ltdWxhZG9yIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbi1saWd0aCcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhbXBvX3ZhbG9yIHtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjNEY0N0JGO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAwLjVweCAjNEY0N0JGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "YXlS":
/*!*********************************************!*\
  !*** ./src/app/simulador/simulador.page.ts ***!
  \*********************************************/
/*! exports provided: SimuladorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimuladorPage", function() { return SimuladorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_simulador_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./simulador.page.html */ "iV8J");
/* harmony import */ var _simulador_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simulador.page.scss */ "WJG2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "fwsW");






let SimuladorPage = class SimuladorPage {
    constructor(router, storage) {
        this.router = router;
        this.storage = storage;
        this.Valor = 1000;
        this.Dias = 1;
        this.Show = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.Nombre = yield this.storage.get('name');
            this.Show = false;
        });
    }
    Solicitud() {
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
    Siguiente() {
        this.router.navigate(['/preguntas']);
    }
    Salir() {
        this.router.navigate(['/inicio']);
    }
};
SimuladorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
SimuladorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-simulador',
        template: _raw_loader_simulador_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_simulador_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SimuladorPage);



/***/ }),

/***/ "iV8J":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/simulador/simulador.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"header-Dashboard\">\r\n    <ion-toolbar class=\"toolbar-dashboard\">\r\n        <!-- <ion-title>Dashboard</ion-title> -->\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col size=\"4\" class=\"ion-text-center\">\r\n                    <img src=\"../../assets/images/IMAGEN PERFIL CABECERA.png\" alt=\"\" class=\"imagen-header\" (click)=\"editar()\">\r\n                </ion-col>\r\n                <ion-col size=\"8\" class=\"ion-text-left\">\r\n                    <ion-item lines=\"none\" style=\"--background: transparent;\">\r\n                        <p slot=\"start\" style=\"font-size: 20px;font-weight: bold;color: white;margin: 26px 0px 0px 0px;text-transform: capitalize;\">\r\n                            {{Nombre}}</p>\r\n                        <ion-icon style=\"font-size: 20px;font-weight: bold;color: white;margin: 26px 0px 0px 0px;text-transform: capitalize;\" slot=\"end\" name=\"exit-outline\" (click)=\"Salir()\"></ion-icon>\r\n\r\n                    </ion-item>\r\n                    <p style=\"font-size: 10px;color: white;margin-left:17px;\">Último ingreso: 19/03/2021</p>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n    <br>\r\n    <ion-list>\r\n        <ion-item lines=\"none\" class=\"ion-text-center\">\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col size=\"12\" class=\"ion-text-center\">\r\n                        <p style=\"color: #4F47BF;font-size: 15px;font-family: 'Berlin';\" class=\"ion-text-center\">\r\n                            <!-- <ion-icon name=\"calculator-outline\" style=\"color: #EC268F;font-size: 19px;\"></ion-icon> -->\r\n                            <img src=\" ../../assets/images/LOGO BANKEM.png \" style=\"width: 30px;vertical-align: middle;\">Simulador\r\n                        </p>\r\n                        <hr style=\"color: #4F47BF;border: solid 0.5px #4F47BF\">\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\">\r\n            <p class=\"ion-text-left texto-simulador\" style=\"font-size: 15px;\">\r\n                Calcula el valor de la cuota o el monto que puedes solicitar de acuerdo con las necesidades de crédito y capacidad de pago.\r\n            </p>\r\n        </ion-item>\r\n        <ion-item lines=\"none\">\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col class=\"ion-text-center\">\r\n                        <p class=\"ion-text-center\" style=\"color:#4F47BF;font-family: 'Berlin';\">\r\n                            Caracteristicas\r\n                        </p>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"2\">\r\n                        <ion-icon name=\"person-outline\" style=\"font-size:40px;color:#EC268F;\"></ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"10\">\r\n                        <p class=\"ion-text-left texto-simulador\" style=\"font-size: 15px;\">\r\n                            Edad entre <span style=\"font-weight: bold;\">18 y 34</span>\r\n                        </p>\r\n                    </ion-col>\r\n\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"2\">\r\n                        <ion-icon name=\"cash-outline\" style=\"font-size:40px;color:#EC268F;\"></ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"10\">\r\n                        <p class=\"ion-text-left texto-simulador\" style=\"font-size: 15px;\">\r\n                            Monto Minimo de <span style=\"font-weight: bold;\">$150.000</span>\r\n                        </p>\r\n                    </ion-col>\r\n\r\n                </ion-row>\r\n\r\n                <ion-row>\r\n                    <ion-col size=\"2\">\r\n                        <ion-icon name=\"calendar-outline\" style=\"font-size:40px;color:#EC268F;\"></ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"10\">\r\n                        <p class=\"ion-text-left texto-simulador\" style=\"font-size: 15px;\">\r\n                            Plazo entre <span style=\"font-weight: bold;\">48 y 84 meses</span>\r\n                        </p>\r\n                    </ion-col>\r\n\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"2\">\r\n                        <ion-icon name=\"wallet-outline\" style=\"font-size:40px;color:#EC268F;\"></ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"10\">\r\n                        <p class=\"ion-text-left texto-simulador\" style=\"font-size: 15px;\">\r\n                            Puedes hacer pagos <span style=\"font-weight: bold;\">extraordinarios y cancelacion</span> sin sanción.\r\n                        </p>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" style=\"--background: transparent;\">\r\n            <ion-label slot=\"\" style=\"font-size: 12px;\">Aceptar <span style=\"color: #EC268F;font-weight: bold;\">Terminos</span> y <span style=\"color: #EC268F;font-weight: bold\">Condiciones</span> de <span style=\"color: #4F47BF;\">KEMBA</span>.\r\n            </ion-label>\r\n            <ion-checkbox [(ngModel)]=\"record\" slot=\"start\" color=\"tertiary\" required></ion-checkbox>\r\n        </ion-item>\r\n        <ion-item lines=\"none\">\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col size=\"12\" class=\"ion-text-center\">\r\n                        <ion-button size=\"full\" style=\"--background: #EC268F;\" (click)=\"Siguiente()\">Continuar</ion-button>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-item>\r\n    </ion-list>\r\n\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border \" style=\"background-color: #4F47BF; \">\r\n    <ion-toolbar class=\"toolbar-footer \">\r\n        <ion-tabs style=\"background-color: #4F47BF; \">\r\n            <ion-tab-bar slot=\"bottom \" style=\"background-color: #4F47BF; \">\r\n                <ion-tab-button (click)=\"Historial() \" style=\"background-color: #4F47BF; \">\r\n                    <ion-icon name=\"list-circle\" style=\"font-size: 23px;color: white; \"></ion-icon>\r\n                    <ion-label style=\"color: white; \">Historial</ion-label>\r\n                </ion-tab-button>\r\n\r\n                <ion-tab-button (click)=\"Dashboard() \" style=\"background-color: #4F47BF; \">\r\n                    <ion-icon name=\"home\" style=\"font-size: 23px;color: white; \"></ion-icon>\r\n                    <ion-label style=\"color: white; \">Home</ion-label>\r\n                </ion-tab-button>\r\n\r\n                <ion-tab-button (click)=\"Notificacion() \" style=\"background-color: #4F47BF; \">\r\n                    <ion-icon name=\"notifications\" style=\"font-size: 23px;color: white; \"></ion-icon>\r\n                    <ion-label style=\"color: white; \">Notificación</ion-label>\r\n                </ion-tab-button>\r\n            </ion-tab-bar>\r\n        </ion-tabs>\r\n    </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "phzn":
/*!*******************************************************!*\
  !*** ./src/app/simulador/simulador-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SimuladorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimuladorPageRoutingModule", function() { return SimuladorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _simulador_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simulador.page */ "YXlS");




const routes = [
    {
        path: '',
        component: _simulador_page__WEBPACK_IMPORTED_MODULE_3__["SimuladorPage"]
    }
];
let SimuladorPageRoutingModule = class SimuladorPageRoutingModule {
};
SimuladorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SimuladorPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=simulador-simulador-module.js.map