(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "B3xu":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-Dashboard {\n  height: 120px;\n}\n\n.toolbar-dashboard {\n  --background: #4F47BF;\n  border-radius: 0px 0px 0px 0px;\n}\n\n.imagen-header {\n  width: 100px;\n  height: 100px;\n}\n\n.card-dashboard {\n  border-radius: 26px;\n  margin: 17px;\n  border: solid 0.5px silver;\n  --background: #d3d6e2b0;\n}\n\n.imagen-dashboard {\n  width: 120px;\n  height: 87px;\n}\n\n.toolbar-footer {\n  --background: rgb(243, 242, 242);\n}\n\n.fondo-marca {\n  --background: url('marcaagua.png') 0 0/100% 100% no-repeat !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLGdDQUFBO0FBREo7O0FBSUE7RUFDSSxxRUFBQTtBQURKIiwiZmlsZSI6ImRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLURhc2hib2FyZCB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4udG9vbGJhci1kYXNoYm9hcmQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNEY0N0JGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDEycHggI0ZGNDU3QTtcclxufVxyXG5cclxuLmltYWdlbi1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmNhcmQtZGFzaGJvYXJkIHtcclxuICAgIC8vIGJveC1zaGFkb3c6IC03cHggNXB4IDFweCAjRkY0NTdBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcclxuICAgIG1hcmdpbjogMTdweDtcclxuICAgIGJvcmRlcjogc29saWQgMC41cHggc2lsdmVyO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZDNkNmUyYjA7XHJcbn1cclxuXHJcbi5pbWFnZW4tZGFzaGJvYXJkIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogODdweDtcclxufVxyXG5cclxuLnRvb2xiYXItZm9vdGVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI0MywgMjQyLCAyNDIpO1xyXG59XHJcblxyXG4uZm9uZG8tbWFyY2Ege1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFyY2FhZ3VhLnBuZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "KR73":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"header-Dashboard\">\r\n    <ion-toolbar class=\"toolbar-dashboard\">\r\n        <!-- <ion-title>Dashboard</ion-title> -->\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col size=\"4\" class=\"ion-text-center\">\r\n                    <img src=\"../../assets/images/IMAGEN PERFIL CABECERA.png\" alt=\"\" class=\"imagen-header\" (click)=\"editar()\">\r\n                </ion-col>\r\n                <ion-col size=\"8\" class=\"ion-text-left\">\r\n                    <ion-item lines=\"none\" style=\"--background: transparent;\">\r\n                        <p slot=\"start\" style=\"font-size: 20px;font-weight: bold;color: white;margin: 26px 0px 0px 0px;text-transform: capitalize;\">\r\n                            {{Nombre}}</p>\r\n                        <ion-icon style=\"font-size: 20px;font-weight: bold;color: white;margin: 26px 0px 0px 0px;text-transform: capitalize;\" slot=\"end\" name=\"exit-outline\" (click)=\"Salir()\"></ion-icon>\r\n\r\n                    </ion-item>\r\n                    <p style=\"font-size: 10px;color: white;margin-left:17px;\">Último ingreso: 19/03/2021</p>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"\">\r\n\r\n    <br>\r\n    <ion-list style=\"background: transparent;\">\r\n        <ion-item lines=\"none\" style=\"--background: transparent;\">\r\n            <ion-grid style=\"--background: transparent;\">\r\n                <ion-row>\r\n                    <ion-col size=\"12\" class=\"ion-text-center\">\r\n                        <p style=\"color: #4F47BF;font-size: 15px;font-family: 'Berlin';\" class=\"ion-text-center\">\r\n                            <!-- <ion-icon name=\"calculator-outline\" style=\"color: #EC268F;font-size: 19px;\"></ion-icon> -->\r\n                            <img src=\" ../../assets/images/LOGO BANKEM.png \" style=\"width: 30px;vertical-align: middle;\">Productos\r\n                        </p>\r\n                        <hr style=\"color: #4F47BF;border: solid 0.5px #4F47BF\">\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </ion-item>\r\n        <ion-card class=\"card-dashboard\" (click)=\"Credito()\">\r\n            <ion-card-content>\r\n                <ion-grid>\r\n                    <ion-row>\r\n                        <ion-col col-3>\r\n                            <img src=\"../../assets/images/IMAGEN 1.png\" alt=\"\" class=\"imagen-dashboard\">\r\n                        </ion-col>\r\n                        <ion-col col-9>\r\n                            <p style=\"margin-top: 43px !important; margin-left: 14px !important;color: #4F47BF;font-size: 15px;font-weight: bold;\">\r\n                                Mi CrediKemba </p>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </ion-card-content>\r\n        </ion-card>\r\n        <ion-card class=\"card-dashboard\">\r\n            <ion-card-content>\r\n                <ion-grid>\r\n\r\n                    <ion-row>\r\n                        <ion-col col-9>\r\n                            <p style=\"margin-top: 43px !important; margin-left: 14px !important;color: #4F47BF;font-size: 15px;font-weight: bold;\">\r\n                                Mi EcoAhorro</p>\r\n                        </ion-col>\r\n                        <ion-col col-3>\r\n                            <img src=\"../../assets/images/IMAGEN 2.png\" alt=\"\" class=\"imagen-dashboard\">\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </ion-card-content>\r\n        </ion-card>\r\n        <ion-card class=\"card-dashboard\" (click)=\"Productos()\">\r\n            <ion-card-content>\r\n                <ion-grid>\r\n                    <ion-row>\r\n                        <ion-col col-3>\r\n                            <img src=\"../../assets/images/IMAGEN 3.png\" alt=\"\" class=\"imagen-dashboard\">\r\n                        </ion-col>\r\n                        <ion-col col-9>\r\n                            <p style=\"margin-top: 43px !important; margin-left: 14px !important;color: #4F47BF;font-size: 15px;font-weight: bold;\">\r\n                                Kemba-Elerning</p>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </ion-list>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\" style=\"background-color: #4F47BF;\">\r\n    <ion-toolbar class=\"toolbar-footer\">\r\n        <ion-tabs style=\"background-color: #4F47BF;\">\r\n            <ion-tab-bar slot=\"bottom\" style=\"background-color: #4F47BF;\">\r\n                <ion-tab-button (click)=\"Historial()\" style=\"background-color: #4F47BF;\">\r\n                    <ion-icon name=\"list-circle\" style=\"font-size: 23px;color: white;\"></ion-icon>\r\n                    <ion-label style=\"color: white;\">Historial</ion-label>\r\n                </ion-tab-button>\r\n\r\n                <ion-tab-button (click)=\"Dashboard()\" style=\"background-color: #4F47BF;\">\r\n                    <ion-icon name=\"home\" style=\"font-size: 23px;color: white; \"></ion-icon>\r\n                    <ion-label style=\"color: white; \">Home</ion-label>\r\n                </ion-tab-button>\r\n\r\n                <ion-tab-button (click)=\"Notificacion() \" style=\"background-color: #4F47BF;\">\r\n                    <ion-icon name=\"notifications\" style=\"font-size: 23px;color: white; \"></ion-icon>\r\n                    <ion-label style=\"color: white; \">Notificación</ion-label>\r\n                </ion-tab-button>\r\n            </ion-tab-bar>\r\n        </ion-tabs>\r\n    </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "NcNw":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.page.html */ "KR73");
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.page.scss */ "B3xu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");






let DashboardPage = class DashboardPage {
    constructor(router, storage) {
        this.router = router;
        this.storage = storage;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.Nombre = yield this.storage.get('name');
            console.log(this.Nombre);
        });
    }
    Productos() {
        this.router.navigate(['/dashboard']);
    }
    Credito() {
        this.router.navigate(['/credi-bankem']);
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
        this.storage.remove('Usuario');
        this.storage.remove('name');
        this.router.navigate(['/inicio']);
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardPage);



/***/ }),

/***/ "Oy4E":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "NcNw");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "TDBs":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "Oy4E");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "NcNw");







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })
], DashboardPageModule);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map