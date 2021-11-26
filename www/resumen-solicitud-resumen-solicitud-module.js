(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resumen-solicitud-resumen-solicitud-module"],{

/***/ "UIrj":
/*!***********************************************************************!*\
  !*** ./src/app/resumen-solicitud/resumen-solicitud-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ResumenSolicitudPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumenSolicitudPageRoutingModule", function() { return ResumenSolicitudPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _resumen_solicitud_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resumen-solicitud.page */ "uFsl");




const routes = [
    {
        path: '',
        component: _resumen_solicitud_page__WEBPACK_IMPORTED_MODULE_3__["ResumenSolicitudPage"]
    }
];
let ResumenSolicitudPageRoutingModule = class ResumenSolicitudPageRoutingModule {
};
ResumenSolicitudPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResumenSolicitudPageRoutingModule);



/***/ }),

/***/ "qCQd":
/*!***************************************************************!*\
  !*** ./src/app/resumen-solicitud/resumen-solicitud.module.ts ***!
  \***************************************************************/
/*! exports provided: ResumenSolicitudPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumenSolicitudPageModule", function() { return ResumenSolicitudPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _resumen_solicitud_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resumen-solicitud-routing.module */ "UIrj");
/* harmony import */ var _resumen_solicitud_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resumen-solicitud.page */ "uFsl");







let ResumenSolicitudPageModule = class ResumenSolicitudPageModule {
};
ResumenSolicitudPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _resumen_solicitud_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResumenSolicitudPageRoutingModule"]
        ],
        declarations: [_resumen_solicitud_page__WEBPACK_IMPORTED_MODULE_6__["ResumenSolicitudPage"]]
    })
], ResumenSolicitudPageModule);



/***/ }),

/***/ "t81n":
/*!***************************************************************!*\
  !*** ./src/app/resumen-solicitud/resumen-solicitud.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-Dashboard {\n  height: 230px;\n}\n\n.toolbar-dashboard {\n  --background: #4F47BF;\n  border-radius: 0px 0px 26px 26px;\n  box-shadow: 0px 12px #FF457A;\n}\n\n.imagen-header {\n  width: 130px;\n  height: 130px;\n}\n\n.card-dashboard {\n  box-shadow: -7px 5px 1px #FF457A;\n  border-radius: 26px;\n  margin: 17px;\n  border: solid 0.5px silver;\n  --background: #4F47BF;\n}\n\n.imagen-dashboard {\n  width: 120px;\n  height: 87px;\n}\n\n.toolbar-footer {\n  --background: rgb(243, 242, 242);\n}\n\n.Opcion1 {\n  border-radius: 26px;\n  background: #4F47BF;\n  height: 120px;\n  box-shadow: -7px 5px 1px #FF457A;\n}\n\n.Opcion2 {\n  border-radius: 26px;\n  background: #4F47BF;\n  height: 120px;\n  box-shadow: -7px 5px 1px #FF457A;\n}\n\n.card-dashboard {\n  width: 100%;\n  box-shadow: -7px 5px 1px #FF457A;\n  border-radius: 26px;\n  margin: 17px;\n  border: solid 0.5px #4F47BF;\n  --background: transparent;\n}\n\n.campos-register {\n  border: solid 0.5px #4F47BF;\n  border-radius: 26px;\n  padding-left: 12px !important;\n  margin-bottom: 12px;\n}\n\n.accordion {\n  background-color: #4F47BF;\n  color: #444;\n  cursor: pointer;\n  padding: 10px;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n  transition: 0.4s;\n  color: white;\n  font-weight: none;\n  box-shadow: -7px 0px 1px #FF457A;\n}\n\n.active, .accordion:hover {\n  background-color: #4F47BF;\n}\n\n.panel {\n  padding: 0 18px;\n  background-color: white;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out;\n  border-radius: 26px;\n  box-shadow: -7px 0px 1px #FF457A;\n  border: solid 0.6px #4F47BF;\n  border-radius: 0px 0px 26px 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlc3VtZW4tc29saWNpdHVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGdDQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FBQUY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtBQUZGIiwiZmlsZSI6InJlc3VtZW4tc29saWNpdHVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItRGFzaGJvYXJke1xyXG4gIGhlaWdodDogMjMwcHg7XHJcblxyXG59XHJcblxyXG4udG9vbGJhci1kYXNoYm9hcmR7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNEY0N0JGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjZweCAyNnB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAxMnB4ICNGRjQ1N0E7XHJcbn1cclxuXHJcbi5pbWFnZW4taGVhZGVye1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG59XHJcblxyXG4uY2FyZC1kYXNoYm9hcmR7XHJcbiAgYm94LXNoYWRvdzogLTdweCA1cHggMXB4ICNGRjQ1N0E7XHJcbiAgYm9yZGVyLXJhZGl1czogMjZweDtcclxuICBtYXJnaW46IDE3cHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAwLjVweCBzaWx2ZXI7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNEY0N0JGO1xyXG59XHJcblxyXG4uaW1hZ2VuLWRhc2hib2FyZHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiA4N3B4O1xyXG59XHJcblxyXG4udG9vbGJhci1mb290ZXJ7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQzLCAyNDIsIDI0Mik7XHJcbn1cclxuXHJcbi5PcGNpb24xe1xyXG4gIGJvcmRlci1yYWRpdXM6IDI2cHg7XHJcbiAgYmFja2dyb3VuZDogIzRGNDdCRjtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIGJveC1zaGFkb3c6IC03cHggNXB4IDFweCAjRkY0NTdBO1xyXG59XHJcblxyXG4uT3BjaW9uMntcclxuICBib3JkZXItcmFkaXVzOiAyNnB4O1xyXG4gIGJhY2tncm91bmQ6ICM0RjQ3QkY7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBib3gtc2hhZG93OiAtN3B4IDVweCAxcHggI0ZGNDU3QTtcclxufVxyXG5cclxuXHJcbi5jYXJkLWRhc2hib2FyZHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAtN3B4IDVweCAxcHggI0ZGNDU3QTtcclxuICBib3JkZXItcmFkaXVzOiAyNnB4O1xyXG4gIG1hcmdpbjogMTdweDtcclxuICBib3JkZXI6IHNvbGlkIDAuNXB4ICM0RjQ3QkY7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmNhbXBvcy1yZWdpc3RlciB7XHJcbiAgYm9yZGVyOiBzb2xpZCAwLjVweCAjNEY0N0JGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI2cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLmFjY29yZGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRGNDdCRjtcclxuICBjb2xvcjogIzQ0NDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDI2cHggMjZweCAwcHggMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogbm9uZTtcclxuICBib3gtc2hhZG93OiAtN3B4IDBweCAxcHggI0ZGNDU3QTtcclxufVxyXG5cclxuLmFjdGl2ZSwgLmFjY29yZGlvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRGNDdCRjtcclxufVxyXG5cclxuLnBhbmVsIHtcclxuICBwYWRkaW5nOiAwIDE4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWF4LWhlaWdodDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcclxuICBib3JkZXItcmFkaXVzOiAyNnB4O1xyXG4gIGJveC1zaGFkb3c6IC03cHggMHB4IDFweCAjRkY0NTdBO1xyXG4gIGJvcmRlcjogc29saWQgMC42cHggIzRGNDdCRjtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDI2cHggMjZweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "uFsl":
/*!*************************************************************!*\
  !*** ./src/app/resumen-solicitud/resumen-solicitud.page.ts ***!
  \*************************************************************/
/*! exports provided: ResumenSolicitudPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumenSolicitudPage", function() { return ResumenSolicitudPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_resumen_solicitud_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./resumen-solicitud.page.html */ "wAWu");
/* harmony import */ var _resumen_solicitud_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resumen-solicitud.page.scss */ "t81n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let ResumenSolicitudPage = class ResumenSolicitudPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        let acc = document.getElementsByClassName("accordion");
        let i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                let panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                }
                else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
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
ResumenSolicitudPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ResumenSolicitudPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-resumen-solicitud',
        template: _raw_loader_resumen_solicitud_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_resumen_solicitud_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResumenSolicitudPage);



/***/ }),

/***/ "wAWu":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resumen-solicitud/resumen-solicitud.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"header-Dashboard\">\r\n  <ion-toolbar class=\"toolbar-dashboard\">\r\n    <!-- <ion-title>Dashboard</ion-title> -->\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col col-1></ion-col>\r\n        <ion-col col-10 text-center>\r\n          <img src=\"../../assets/images/IMAGEN PERFIL CABECERA.png\" alt=\"\" class=\"imagen-header\">\r\n\r\n        </ion-col>\r\n        <ion-col col-1>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\">\r\n          <span style=\"font-size: 15px;font-weight: bold;color: white;margin-bottom: 2px;\">MAURICIO TOVAR</span> <br>\r\n          <span style=\"font-size: 13px;color: white;\">Último ingreso: 19/03/2021</span>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center\">\r\n          <a href=\"#\" style=\"font-size: 13px;color: white;margin-bottom: 2px;\">Ver mi perfil</a> <br>\r\n          <!-- <span style=\"font-size: 30px;color: white;font-weight: bold;\">$3.000.000</span> -->\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n  <br>\r\n  <ion-item lines=\"none\">\r\n    <ion-card style=\"width: 100%;\" class=\"card-dashboard\">\r\n      <ion-card-header class=\"ion-text-center\">\r\n        <ion-card-title style=\"color: #4F47BF;\">\r\n          Resumen de Solicitud\r\n        </ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <span style=\"font-weight: bold;\">NOMBRE DEUDOR:</span>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              MAURICIO TOVAR\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <span style=\"font-weight: bold;\">MULTINIVEL:</span>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              HERBALIFE\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <span style=\"font-weight: bold;\">N. SOLICITUD:</span>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              1234567898\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <span style=\"font-weight: bold;\">FECHA SOLICITUD:</span>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              29-04-2021\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <br>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row style=\"background-color: #FF457A;border-radius: 26px;color: white;\">\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n              <span style=\"font-weight: bold;margin: 12px;font-size: 20px;\">MONTO SOLICITADO</span>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n              <span style=\"font-size: 30px;font-weight: bold;\">$ 120000</span>\r\n            </ion-col>\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n              <span style=\"margin: 12px;font-size: 12px;\">Diferido a 30 dias</span>\r\n            </ion-col>\r\n          </ion-row>\r\n          <!-- <ion-row>\r\n            <ion-col>\r\n              <br>\r\n            </ion-col>\r\n          </ion-row> -->\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <button class=\"accordion ion-text-left\">Detalle Pagos <ion-icon name=\"add-circle-outline\" slot=\"end\"\r\n                  style=\"margin-left: 50%;\"></ion-icon></button>\r\n              <div class=\"panel\">\r\n                <ion-row>\r\n                  <ion-col size=\"6\">\r\n                    <span style=\"font-weight: bold;\">Proxima Cuota:</span>\r\n                  </ion-col>\r\n                  <ion-col size=\"6\">\r\n                    <span style=\"font-weight: none;\">30-04-2021</span>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"6\">\r\n                    <span style=\"font-weight: bold;\">Valor Cuota:</span>\r\n                  </ion-col>\r\n                  <ion-col size=\"6\">\r\n                    <span style=\"font-weight: none;\">$25000</span>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\">\r\n                    <br>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\" class=\"ion-text-left\" style=\"border-bottom: solid 0.5px silver;\">\r\n                    <span style=\"font-weight: bold;\">Pagos Mensuales</span>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col>\r\n                    <span style=\"font-weight: bold;\">Fecha</span>\r\n                  </ion-col>\r\n                  <ion-col>\r\n                    <span style=\"font-weight: bold;\">Valor</span>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"6\">\r\n                    30-05-2021\r\n                  </ion-col>\r\n                  <ion-col size=\"6\">\r\n                    $25000\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"6\">\r\n                    30-05-2021\r\n                  </ion-col>\r\n                  <ion-col size=\"6\">\r\n                    $25000\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"6\">\r\n                    30-05-2021\r\n                  </ion-col>\r\n                  <ion-col size=\"6\">\r\n                    $25000\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"6\">\r\n                    30-05-2021\r\n                  </ion-col>\r\n                  <ion-col size=\"6\">\r\n                    $25000\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"12\">\r\n                    <br>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-button style=\"--background: #4F47BF;width: 100%;\">\r\n                Solicitar Credito\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-item>\r\n\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar class=\"toolbar-footer\">\r\n    <ion-tabs>\r\n      <ion-tab-bar slot=\"bottom\">\r\n        <ion-tab-button (click)=\"Historial()\">\r\n          <ion-icon name=\"list-circle-outline\" style=\"font-size: 23px;color: #FF457A;\"></ion-icon>\r\n          <ion-label style=\"color: #FF457A;\">Historial</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button (click)=\"Dashboard()\">\r\n          <ion-icon name=\"home-outline\" style=\"font-size: 23px;color: #FF457A;\"></ion-icon>\r\n          <ion-label style=\"color: #FF457A;\">Home</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button (click)=\"Notificacion()\">\r\n          <ion-icon name=\"notifications-outline\" style=\"font-size: 23px;color: #FF457A;\"></ion-icon>\r\n          <ion-label style=\"color: #FF457A;\">Notificación</ion-label>\r\n        </ion-tab-button>\r\n      </ion-tab-bar>\r\n    </ion-tabs>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=resumen-solicitud-resumen-solicitud-module.js.map