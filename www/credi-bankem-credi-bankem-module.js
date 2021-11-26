(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["credi-bankem-credi-bankem-module"],{

/***/ "8Zpg":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/credi-bankem/credi-bankem.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"header-Dashboard\">\r\n    <ion-toolbar class=\"toolbar-dashboard\">\r\n        <!-- <ion-title>Dashboard</ion-title> -->\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col size=\"4\" class=\"ion-text-center\">\r\n                    <img src=\"../../assets/images/IMAGEN PERFIL CABECERA.png\" alt=\"\" class=\"imagen-header\" (click)=\"editar()\">\r\n                </ion-col>\r\n                <ion-col size=\"8\" class=\"ion-text-left\">\r\n                    <ion-item lines=\"none\" style=\"--background: transparent;\">\r\n                        <p slot=\"start\" style=\"font-size: 20px;font-weight: bold;color: white;margin: 26px 0px 0px 0px;text-transform: capitalize;\">\r\n                            {{Nombre}}</p>\r\n                        <ion-icon style=\"font-size: 20px;font-weight: bold;color: white;margin: 26px 0px 0px 0px;text-transform: capitalize;\" slot=\"end\" name=\"exit-outline\" (click)=\"Salir()\"></ion-icon>\r\n\r\n                    </ion-item>\r\n                    <p style=\"font-size: 10px;color: white;margin-left:17px;\">Último ingreso: 19/03/2021</p>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"\">\r\n    <ion-list style=\"background: transparent;\">\r\n        <ion-item lines=\"none\" style=\"--background: transparent;\">\r\n            <ion-grid style=\"--background: transparent;\">\r\n                <ion-row>\r\n                    <ion-col size=\"4\" class=\"ion-text-right\">\r\n                        <img src=\"../../assets/images/LOGO BANKEM.png\" alt=\"\" style=\"width: 60px;height: 60px;\">\r\n                    </ion-col>\r\n                    <ion-col size=\"8\" class=\"ion-text-left\">\r\n                        <p style=\"color: #4F47BF;text-transform: uppercase;margin-top: 18px;font-weight: bold;font-size: 20px;\">\r\n                            Mi CrediKemba</p>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" style=\"--background: transparent;\">\r\n            <p class=\"ion-text-center\" style=\"font-size: 15px;color: #4A4A4A;\">\r\n                Nuestros emprendedores obtendrán créditos para que inicien sus negocios en empresas multinivel debidamente constituidas y que cumplan con las normas de la legislación colombiana\r\n            </p>\r\n        </ion-item>\r\n\r\n        <div>\r\n            <ion-card lines=\"none\">\r\n                <ion-card-content>\r\n                    <ion-item lines=\"none\" (click)=\"Simulador()\">\r\n                        <!-- <ion-label position=\"stacked\" >Nombre Completo</ion-label> -->\r\n                        <ion-icon name=\"calculator-outline\" style=\"color: #EC268F;font-size: 30px;\"></ion-icon>\r\n                        <p style=\"font-size: 17px;font-family: 'Josefin-light';color: #4F47BF;\" class=\"ion-text-center\">\r\n                            &nbsp;&nbsp;&nbsp;Simulador Credito</p>\r\n                        <ion-icon slot=\"end\" name=\"arrow-forward-circle-outline\" style=\"color: #EC268F;font-size: 30px;\"></ion-icon>\r\n                    </ion-item>\r\n\r\n\r\n                </ion-card-content>\r\n            </ion-card>\r\n\r\n\r\n            <ion-card lines=\"none\">\r\n                <ion-card-content>\r\n                    <ion-item lines=\"none\" (click)=\"Solicitud()\">\r\n                        <!-- <ion-label position=\"stacked\" >Nombre Completo</ion-label> -->\r\n                        <ion-icon name=\"document-text-outline\" style=\"color: #EC268F;font-size: 30px;\"></ion-icon>\r\n                        <p style=\"font-size: 17px;font-family: 'Josefin-light';color: #4F47BF;\" class=\"ion-text-center\">\r\n                            &nbsp;&nbsp;&nbsp;Solicitud Credito</p>\r\n                        <ion-icon slot=\"end\" name=\"arrow-forward-circle-outline\" style=\"color: #EC268F;font-size: 30px;\"></ion-icon>\r\n                    </ion-item>\r\n                </ion-card-content>\r\n            </ion-card>\r\n\r\n\r\n            <ion-card lines=\"none\">\r\n                <ion-card-content>\r\n                    <ion-item lines=\"none\" (click)=\"Documentacion()\">\r\n                        <!-- <ion-label position=\"stacked\" >Nombre Completo</ion-label> -->\r\n                        <ion-icon name=\"folder-outline\" style=\"color: #EC268F;font-size: 30px;\"></ion-icon>\r\n                        <p style=\"font-size: 17px;font-family: 'Josefin-light';color: #4F47BF;\" class=\"ion-text-center\">\r\n                            &nbsp;&nbsp;&nbsp;Documentos Credito</p>\r\n                        <ion-icon slot=\"end\" name=\"arrow-forward-circle-outline\" style=\"color: #EC268F;font-size: 30px;\"></ion-icon>\r\n                    </ion-item>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </div>\r\n    </ion-list>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\" style=\"background-color: #4F47BF;\">\r\n    <ion-toolbar class=\"toolbar-footer\">\r\n        <ion-tabs style=\"background-color: #4F47BF;\">\r\n            <ion-tab-bar slot=\"bottom\" style=\"background-color: #4F47BF;\">\r\n                <ion-tab-button (click)=\"Historial()\" style=\"background-color: #4F47BF;\">\r\n                    <ion-icon name=\"list-circle\" style=\"font-size: 23px;color: white;\"></ion-icon>\r\n                    <ion-label style=\"color: white;\">Historial</ion-label>\r\n                </ion-tab-button>\r\n\r\n                <ion-tab-button (click)=\"Dashboard()\" style=\"background-color: #4F47BF;\">\r\n                    <ion-icon name=\"home\" style=\"font-size: 23px;color: white; \"></ion-icon>\r\n                    <ion-label style=\"color: white; \">Home</ion-label>\r\n                </ion-tab-button>\r\n\r\n                <ion-tab-button (click)=\"Notificacion() \" style=\"background-color: #4F47BF;\">\r\n                    <ion-icon name=\"notifications\" style=\"font-size: 23px;color: white; \"></ion-icon>\r\n                    <ion-label style=\"color: white; \">Notificación</ion-label>\r\n                </ion-tab-button>\r\n            </ion-tab-bar>\r\n        </ion-tabs>\r\n    </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "AXnC":
/*!*************************************************************!*\
  !*** ./src/app/credi-bankem/credi-bankem-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CrediBankemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrediBankemPageRoutingModule", function() { return CrediBankemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _credi_bankem_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./credi-bankem.page */ "af4/");




const routes = [
    {
        path: '',
        component: _credi_bankem_page__WEBPACK_IMPORTED_MODULE_3__["CrediBankemPage"]
    }
];
let CrediBankemPageRoutingModule = class CrediBankemPageRoutingModule {
};
CrediBankemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CrediBankemPageRoutingModule);



/***/ }),

/***/ "Omei":
/*!*****************************************************!*\
  !*** ./src/app/credi-bankem/credi-bankem.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-Dashboard {\n  height: 120px;\n}\n\n.toolbar-dashboard {\n  --background: #4F47BF;\n  border-radius: 0px 0px 0px 0px;\n}\n\n.imagen-header {\n  width: 100px;\n  height: 100px;\n}\n\n.card-dashboard {\n  border-radius: 26px;\n  margin: 17px;\n  border: solid 0.5px silver;\n  --background: #828CBF;\n}\n\n.imagen-dashboard {\n  width: 120px;\n  height: 87px;\n}\n\n.toolbar-footer {\n  --background: rgb(243, 242, 242);\n}\n\n.fondo-marca {\n  --background: url('marcaagua.png') 0 0/100% 100% no-repeat !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNyZWRpLWJhbmtlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLGdDQUFBO0FBREo7O0FBSUE7RUFDSSxxRUFBQTtBQURKIiwiZmlsZSI6ImNyZWRpLWJhbmtlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLURhc2hib2FyZCB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4udG9vbGJhci1kYXNoYm9hcmQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNEY0N0JGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDEycHggI0ZGNDU3QTtcclxufVxyXG5cclxuLmltYWdlbi1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmNhcmQtZGFzaGJvYXJkIHtcclxuICAgIC8vIGJveC1zaGFkb3c6IC03cHggNXB4IDFweCAjRkY0NTdBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcclxuICAgIG1hcmdpbjogMTdweDtcclxuICAgIGJvcmRlcjogc29saWQgMC41cHggc2lsdmVyO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjODI4Q0JGO1xyXG59XHJcblxyXG4uaW1hZ2VuLWRhc2hib2FyZCB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDg3cHg7XHJcbn1cclxuXHJcbi50b29sYmFyLWZvb3RlciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDMsIDI0MiwgMjQyKTtcclxufVxyXG5cclxuLmZvbmRvLW1hcmNhIHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL21hcmNhYWd1YS5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "af4/":
/*!***************************************************!*\
  !*** ./src/app/credi-bankem/credi-bankem.page.ts ***!
  \***************************************************/
/*! exports provided: CrediBankemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrediBankemPage", function() { return CrediBankemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_credi_bankem_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./credi-bankem.page.html */ "8Zpg");
/* harmony import */ var _credi_bankem_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./credi-bankem.page.scss */ "Omei");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "fwsW");






let CrediBankemPage = class CrediBankemPage {
    constructor(router, storage) {
        this.router = router;
        this.storage = storage;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.Nombre = yield this.storage.get('name');
        });
    }
    Simulador() {
        this.router.navigate(['/simulador']);
    }
    Solicitud() {
        this.router.navigate(['/solicitud']);
    }
    Documentacion() {
        this.router.navigate(['/documentos']);
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
CrediBankemPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
CrediBankemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-credi-bankem',
        template: _raw_loader_credi_bankem_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_credi_bankem_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CrediBankemPage);



/***/ }),

/***/ "qiyL":
/*!*****************************************************!*\
  !*** ./src/app/credi-bankem/credi-bankem.module.ts ***!
  \*****************************************************/
/*! exports provided: CrediBankemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrediBankemPageModule", function() { return CrediBankemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _credi_bankem_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./credi-bankem-routing.module */ "AXnC");
/* harmony import */ var _credi_bankem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./credi-bankem.page */ "af4/");







let CrediBankemPageModule = class CrediBankemPageModule {
};
CrediBankemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _credi_bankem_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrediBankemPageRoutingModule"]
        ],
        declarations: [_credi_bankem_page__WEBPACK_IMPORTED_MODULE_6__["CrediBankemPage"]]
    })
], CrediBankemPageModule);



/***/ })

}]);
//# sourceMappingURL=credi-bankem-credi-bankem-module.js.map