(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registrar-registrar-module"],{

/***/ "5zMm":
/*!***********************************************!*\
  !*** ./src/app/registrar/registrar.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imagen-registro {\n  width: 202px;\n  height: 94px;\n  text-align: center;\n}\n\n.campos-register {\n  border: solid 0.5px #4F47BF;\n  border-radius: 26px;\n  padding-left: 12px !important;\n  margin-bottom: 12px;\n}\n\n.accordion {\n  background-color: #4F47BF;\n  color: #444;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 15px;\n  transition: 0.4s;\n  border-radius: 26px 26px 0px 0px;\n  color: white;\n  font-weight: bold;\n  box-shadow: -7px 0px 1px #FF457A;\n}\n\n.active,\n.accordion:hover {\n  background-color: #4F47BF;\n}\n\n.panel {\n  padding: 0 18px;\n  background-color: white;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out;\n  border-radius: 26px;\n  box-shadow: -7px 0px 1px #FF457A;\n  border: solid 0.6px #4F47BF;\n  border-radius: 0px 0px 26px 26px;\n}\n\nion-card {\n  border: 0 !important;\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlZ2lzdHJhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUE7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFISjs7QUFNQTs7RUFFSSx5QkFBQTtBQUhKOztBQU1BO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtBQUhKOztBQU1BO0VBQ0ksb0JBQUE7RUFDQSwyQkFBQTtBQUhKIiwiZmlsZSI6InJlZ2lzdHJhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keS1BcHAge1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvQkFDS0dST1VORDIucG5nXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWFnZW4tcmVnaXN0cm8ge1xyXG4gICAgd2lkdGg6IDIwMnB4O1xyXG4gICAgaGVpZ2h0OiA5NHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FtcG9zLXJlZ2lzdGVyIHtcclxuICAgIGJvcmRlcjogc29saWQgMC41cHggIzRGNDdCRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRGNDdCRjtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMThweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjZweCAyNnB4IDBweCAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJveC1zaGFkb3c6IC03cHggMHB4IDFweCAjRkY0NTdBO1xyXG59XHJcblxyXG4uYWN0aXZlLFxyXG4uYWNjb3JkaW9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0RjQ3QkY7XHJcbn1cclxuXHJcbi5wYW5lbCB7XHJcbiAgICBwYWRkaW5nOiAwIDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2Utb3V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcclxuICAgIGJveC1zaGFkb3c6IC03cHggMHB4IDFweCAjRkY0NTdBO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAwLjZweCAjNEY0N0JGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyNnB4IDI2cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "9Uor":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registrar/registrar.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"body-App\">\r\n    <ion-item style=\"--background: transparent;margin-top: 35px;text-align: center;\" lines=\"none\" class=\"ion-text-center\">\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col class=\"ion-text-center\">\r\n                    <img src=\"../../assets/images/LOGO KEMBA.png\" alt=\"\" class=\"imagen-registro\">\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-item>\r\n\r\n    <div>\r\n        <ion-card lines=\"none\" no-lines>\r\n            <ion-card-header>\r\n                <h4 class=\"ion-text-left\" style=\"font-family: 'Berlin';color: #EF248E;text-transform: capitalize;font-size: 17px;\">Crear\r\n                    <br>Cuenta\r\n                </h4>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n                <ion-item>\r\n                    <!-- <ion-label position=\"stacked\" >Nombre Completo</ion-label> -->\r\n                    <ion-input [(ngModel)]=\"nombre\" style=\"font-size: 12px;font-family: 'Josefin-light';color: gray;\" placeholder=\"Nombre Completo\"></ion-input>\r\n                    <ion-icon name=\"person-outline\" style=\"color: gray;\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <!-- <ion-label position=\"stacked\" >Nombre Completo</ion-label> -->\r\n                    <ion-select [(ngModel)]=\"tipo_doc\" style=\"font-size: 12px;font-family: 'Josefin-light';color: gray;\" placeholder=\"Tipo Documento\">\r\n                        <ion-select-option>Cédula de Ciudadania</ion-select-option>\r\n                        <ion-select-option>Cédula de Extrangeria</ion-select-option>\r\n                        <ion-select-option>Pasaporte</ion-select-option>\r\n                    </ion-select>\r\n                    <ion-icon name=\"id-card-outline\" slot=\"end\" style=\"color: gray;\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <!-- <ion-label position=\"stacked\" >Nombre Completo</ion-label> -->\r\n                    <ion-input [(ngModel)]=\"documento\" type=\"number\" style=\"font-size: 12px;font-family: 'Josefin-light';color: gray;\" placeholder=\"Número Documento\"></ion-input>\r\n                    <ion-icon name=\"document-text-outline\" style=\"color: gray;\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <!-- <ion-label position=\"stacked\" >Nombre Completo</ion-label> -->\r\n                    <ion-input [(ngModel)]=\"email\" type=\"email\" style=\"font-size: 12px;font-family: 'Josefin-light';color: gray;\" placeholder=\"Email\"></ion-input>\r\n                    <ion-icon name=\"mail-outline\" style=\"color: gray;\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <!-- <ion-label position=\"stacked\" >Nombre Completo</ion-label> -->\r\n                    <ion-input [(ngModel)]=\"telefono\" type=\"number\" style=\"font-size: 12px;font-family: 'Josefin-light';color: gray;\" placeholder=\"Teléfono\"></ion-input>\r\n                    <ion-icon name=\"call-outline\" style=\"color: gray;\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <!-- <ion-label position=\"stacked\" >Nombre Completo</ion-label> -->\r\n                    <ion-input [(ngModel)]=\"username\" type=\"text\" style=\"font-size: 12px;font-family: 'Josefin-light';color: gray;\" placeholder=\"Nombre Usuario\"></ion-input>\r\n                    <ion-icon name=\"person-outline\" style=\"color: gray;\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <!-- <ion-label position=\"stacked\" >Nombre Completo</ion-label> -->\r\n                    <ion-input [(ngModel)]=\"password\" type=\"password\" style=\"font-size: 12px;font-family: 'Josefin-light';color: gray;\" placeholder=\"Contraseña\"></ion-input>\r\n                    <ion-icon name=\"key-outline\" style=\"color: gray;\"></ion-icon>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <!-- <ion-label position=\"stacked\" >Nombre Completo</ion-label> -->\r\n                    <ion-input [(ngModel)]=\"repassword\" type=\"password\" style=\"font-size: 12px;font-family: 'Josefin-light';color: gray;\" placeholder=\"Confirmar Contraseña\"></ion-input>\r\n                    <ion-icon name=\"key-outline\" style=\"color: gray;\"></ion-icon>\r\n                </ion-item>\r\n\r\n                <ion-item lines=\"none\">\r\n                    <ion-label style=\"color: gray;\">Acepta <span style=\"color:#404E9E;font-weight: bold;\">terminos</span> y <span style=\"color:#404E9E;font-weight: bold;\">condiciones</span></ion-label>\r\n                    <ion-checkbox slot=\"end\" [(ngModel)]=\"valida\" color=\"tertiary\"></ion-checkbox>\r\n                </ion-item>\r\n\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </div>\r\n\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n        <ion-item lines=\"none\">\r\n            <ion-button style=\"--background: #4F47BF;width: 100%;height: 40px;\" (click)=\"Registrar()\">Registrar</ion-button>\r\n\r\n        </ion-item>\r\n        <ion-item lines=\"none\">\r\n            <p style=\"color: gray;font-size: 17px;\">Ya tienes una cuenta, por favor <a style=\"color:#404E9E;font-weight: bold;\" (click)=\"Atras()\">Inicia sesión</a></p>\r\n\r\n        </ion-item>\r\n    </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "SruG":
/*!***********************************************!*\
  !*** ./src/app/registrar/registrar.module.ts ***!
  \***********************************************/
/*! exports provided: RegistrarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarPageModule", function() { return RegistrarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _registrar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registrar-routing.module */ "SysP");
/* harmony import */ var _registrar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registrar.page */ "wDLk");







let RegistrarPageModule = class RegistrarPageModule {
};
RegistrarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registrar_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrarPageRoutingModule"]
        ],
        declarations: [_registrar_page__WEBPACK_IMPORTED_MODULE_6__["RegistrarPage"]]
    })
], RegistrarPageModule);



/***/ }),

/***/ "SysP":
/*!*******************************************************!*\
  !*** ./src/app/registrar/registrar-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: RegistrarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarPageRoutingModule", function() { return RegistrarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _registrar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registrar.page */ "wDLk");




const routes = [
    {
        path: '',
        component: _registrar_page__WEBPACK_IMPORTED_MODULE_3__["RegistrarPage"]
    }
];
let RegistrarPageRoutingModule = class RegistrarPageRoutingModule {
};
RegistrarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistrarPageRoutingModule);



/***/ }),

/***/ "wDLk":
/*!*********************************************!*\
  !*** ./src/app/registrar/registrar.page.ts ***!
  \*********************************************/
/*! exports provided: RegistrarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarPage", function() { return RegistrarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registrar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registrar.page.html */ "9Uor");
/* harmony import */ var _registrar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registrar.page.scss */ "5zMm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../provider.service */ "74+B");








let RegistrarPage = class RegistrarPage {
    constructor(router, alertController, loadingController, postServices) {
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.postServices = postServices;
    }
    ngOnInit() {
        this.presentLoadingBasic();
    }
    Registrar() {
        let resulta = this.validacionCampos();
        if (resulta == 1) {
            this.postServices.AddUser(this.nombre, this.tipo_doc, this.documento, this.email, this.telefono, this.username, this.password)
                .then(data => {
                this.presentLoadingBasic();
                this.presentLoading();
                if (data > 0) {
                    this.Dismiss();
                    this.presentAlertOk();
                    this.router.navigate(['/inicio']);
                }
                else {
                    this.presentAlertError();
                }
            });
        }
    }
    presentLoadingBasic() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                spinner: 'circles',
                message: 'Por favor espere...',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                duration: 5000,
                message: 'Haga click en cualquier parte de la pantalla para cerrara esta ventana de espera',
                translucent: true,
                cssClass: 'custom-class custom-loading',
                backdropDismiss: true
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed with role:', role);
        });
    }
    Dismiss() {
        this.loadingController.dismiss().then((response) => {
            console.log('Loader closed!', response);
        }).catch((err) => {
            console.log('Error occured : ', err);
        });
    }
    validacionCampos() {
        let valor;
        if (this.nombre == '' || this.nombre == null || this.nombre == undefined) {
            this.presentAlert();
            valor = 0;
            return false;
        }
        else {
            valor = 1;
        }
        if (this.tipo_doc == '' || this.tipo_doc == null || this.tipo_doc == undefined) {
            this.presentAlert();
            valor = 0;
            return false;
        }
        else {
            valor = 1;
        }
        if (this.documento == '' || this.documento == null || this.documento == undefined) {
            this.presentAlert();
            valor = 0;
            return false;
        }
        else {
            valor = 1;
        }
        if (this.email == '' || this.email == null || this.email == undefined) {
            this.presentAlert();
            valor = 0;
            return false;
        }
        else {
            valor = 1;
        }
        if (this.telefono == '' || this.telefono == null || this.telefono == undefined) {
            this.presentAlert();
            valor = 0;
            return false;
        }
        else {
            valor = 1;
        }
        if (this.username == '' || this.username == null || this.username == undefined) {
            this.presentAlert();
            valor = 0;
            return false;
        }
        else {
            valor = 1;
        }
        if (this.password == '' || this.password == null || this.password == undefined) {
            this.presentAlert();
            valor = 0;
            return false;
        }
        else {
            valor = 1;
        }
        if (this.repassword == '' || this.repassword == null || this.repassword == undefined) {
            this.presentAlert();
            valor = 0;
            return false;
        }
        else {
            valor = 1;
        }
        return valor;
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alerta',
                subHeader: '',
                message: 'Por favor llene todos los campos.',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    presentAlertError() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alerta',
                subHeader: '',
                message: 'Se ha presentado un error durante la consulta por favor intentelo de nuevo.',
                buttons: ['Cerrar']
            });
            yield alert.present();
        });
    }
    presentAlertOk() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Atención',
                subHeader: '',
                message: 'Se ha registrado correctamente, ya puede usar Kemba.',
                buttons: ['Continuar']
            });
            yield alert.present();
        });
    }
    Atras() {
        this.router.navigate(['/inicio']);
    }
};
RegistrarPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _provider_service__WEBPACK_IMPORTED_MODULE_6__["ProviderService"] }
];
RegistrarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registrar',
        template: _raw_loader_registrar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registrar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegistrarPage);



/***/ })

}]);
//# sourceMappingURL=registrar-registrar-module.js.map