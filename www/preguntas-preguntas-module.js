(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["preguntas-preguntas-module"],{

/***/ "6oej":
/*!*******************************************************!*\
  !*** ./src/app/preguntas/preguntas-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PreguntasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntasPageRoutingModule", function() { return PreguntasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _preguntas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preguntas.page */ "F9UW");




const routes = [
    {
        path: '',
        component: _preguntas_page__WEBPACK_IMPORTED_MODULE_3__["PreguntasPage"]
    }
];
let PreguntasPageRoutingModule = class PreguntasPageRoutingModule {
};
PreguntasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PreguntasPageRoutingModule);



/***/ }),

/***/ "F9UW":
/*!*********************************************!*\
  !*** ./src/app/preguntas/preguntas.page.ts ***!
  \*********************************************/
/*! exports provided: PreguntasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntasPage", function() { return PreguntasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_preguntas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./preguntas.page.html */ "TiRP");
/* harmony import */ var _preguntas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preguntas.page.scss */ "UVc3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");








let PreguntasPage = class PreguntasPage {
    constructor(router, alertController, loadingController, storage) {
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.storage = storage;
        this.Dias = 1;
        this.Show = false;
        this.Parte2 = false;
        this.Parte3 = false;
        this.Credito = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.Nombre = yield this.storage.get('name');
            this.Show = false;
        });
    }
    Si(valor) {
        if (valor == 1) {
            this.Show = true;
            console.log('Uno');
        }
        else if (valor == 2) {
            this.Show = false;
            console.log('Dos');
        }
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
    Salir() {
        this.router.navigate(['/inicio']);
    }
    swipeNext() {
        if (this.Valor == 0) {
            let message = "El monto no puede ser '0'";
            this.presentAlertError(message);
            return false;
        }
        else {
            if (this.Valor > 600000) {
                console.log(this.Valor);
                let message = "El valor ingresado supera el monto maximo.";
                this.presentAlertError(message);
                return false;
            }
            this.Show = false;
            this.Parte2 = true;
            let numero = +this.Valor;
            this.Credito.push({ 'Monto': numero });
        }
    }
    textareaMaxLengthValidation() {
        if (this.Valor.length > 6) {
            this.Valor = this.Valor.slice(0, 6);
            //console.log(this.Valor);
        }
    }
    swipeNext2() {
        this.Show = false;
        this.Parte2 = false;
        this.Parte3 = true;
        this.Credito.push({ 'Meses': this.Dias });
    }
    Simular() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.Multinivel == null) {
                let message = "Debe seleccionar un multinivel";
                this.presentAlertError(message);
                return false;
            }
            else {
                this.Credito.push({ 'Multinivel': this.Multinivel });
                yield this.storage.remove('Solicitud');
                yield this.storage.set('Solicitud', this.Credito);
                this.presentLoadingBasic();
                this.router.navigate(['/oferta-simulacion']);
            }
        });
    }
    presentAlertError(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Atención',
                //subHeader: 'Error',
                message: message,
                buttons: ['Continuar']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
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
};
PreguntasPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
PreguntasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-preguntas',
        template: _raw_loader_preguntas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_preguntas_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], PreguntasPage);



/***/ }),

/***/ "J3EP":
/*!***********************************************!*\
  !*** ./src/app/preguntas/preguntas.module.ts ***!
  \***********************************************/
/*! exports provided: PreguntasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntasPageModule", function() { return PreguntasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _preguntas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preguntas-routing.module */ "6oej");
/* harmony import */ var _preguntas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preguntas.page */ "F9UW");







let PreguntasPageModule = class PreguntasPageModule {
};
PreguntasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _preguntas_routing_module__WEBPACK_IMPORTED_MODULE_5__["PreguntasPageRoutingModule"],
        ],
        declarations: [_preguntas_page__WEBPACK_IMPORTED_MODULE_6__["PreguntasPage"]]
    })
], PreguntasPageModule);



/***/ }),

/***/ "TiRP":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/preguntas/preguntas.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"header-Dashboard\">\n    <ion-toolbar class=\"toolbar-dashboard\">\n        <!-- <ion-title>Dashboard</ion-title> -->\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"4\" class=\"ion-text-center\">\n                    <img src=\"../../assets/images/IMAGEN PERFIL CABECERA.png\" alt=\"\" class=\"imagen-header\" (click)=\"editar()\">\n                </ion-col>\n                <ion-col size=\"8\" class=\"ion-text-left\">\n                    <ion-item lines=\"none\" style=\"--background: transparent;\">\n                        <p slot=\"start\" style=\"font-size: 20px;font-weight: bold;color: white;margin: 26px 0px 0px 0px;text-transform: capitalize;\">\n                            {{Nombre}}</p>\n                        <ion-icon style=\"font-size: 20px;font-weight: bold;color: white;margin: 26px 0px 0px 0px;text-transform: capitalize;\" slot=\"end\" name=\"exit-outline\" (click)=\"Salir()\"></ion-icon>\n\n                    </ion-item>\n                    <p style=\"font-size: 10px;color: white;margin-left:17px;\">Último ingreso: 19/03/2021</p>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item lines=\"none\">\n        <p class=\"ion-text-center texto-simulador\">\n            ¿Sabes cuánto dinero necesitas?\n        </p>\n    </ion-item>\n    <ion-item lines=\"none\">\n        <ion-radio-group>\n            <ion-item lines=\"none\">\n                <ion-label>Si</ion-label>\n                <ion-radio slot=\"start\" value=\"cord\" (click)=\"Si(1)\"></ion-radio>\n            </ion-item>\n\n            <ion-item lines=\"none\">\n                <ion-label>No</ion-label>\n                <ion-radio slot=\"start\" value=\"duesenberg\" (click)=\"Si(2)\"></ion-radio>\n            </ion-item>\n        </ion-radio-group>\n    </ion-item>\n    <br>\n\n    <div *ngIf=\"Show\">\n        <ion-item lines=\"none\">\n            <ion-card style=\"width: 100%;\">\n                <ion-card-header class=\"ion-text-center\">\n                    <p style=\"color: #4F47BF;font-weight: bold;font-size: 20px;font-family: 'Berlin';\">Monto</p>\n                </ion-card-header>\n                <ion-card-content>\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col class=\"ion-text-center\">\n                                <p style=\"font-size: 45px;\">{{ Valor|currency }}</p>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col class=\"ion-text-left\">\n                                <ion-input type=\"text\" [(ngModel)]=\"Valor\" maxlength=\"6\" style=\"border-bottom: 0.5px solid #4F47BF;\" (change)=\"textareaMaxLengthValidation()\" required>\n                                </ion-input>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col class=\"ion-text-left\">\n                                <p>El monto maximoes de $600.000 <br> el monto minimo es de $150.000</p>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col class=\"ion-text-center\">\n                                <ion-button style=\"--background: #4F47BF;\" (click)=\"swipeNext()\">Siguiente</ion-button>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n\n                </ion-card-content>\n                <br>\n            </ion-card>\n        </ion-item>\n    </div>\n\n    <div *ngIf=\"Parte2\">\n        <ion-item lines=\"none\">\n            <ion-card style=\"background-color: white;--box-shadow: transparent;width: 100%;\">\n                <ion-card-header class=\"ion-text-center\">\n                    <p style=\"color: #4F47BF;font-weight: bold;font-size: 20px;font-family: 'Berlin';\">A diferir</p>\n                </ion-card-header>\n                <ion-card-content>\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col class=\"ion-text-center\">\n                                <p style=\"font-size: 45px;\">{{ Dias }} Meses</p>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col class=\"ion-text-center\">\n                                <ion-range min=\"1\" max=\"12\" color=\"secondary\" [(ngModel)]=\"Dias\">\n                                    <ion-label slot=\"start\">1</ion-label>\n                                    <ion-label slot=\"end\">12</ion-label>\n                                </ion-range>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col class=\"ion-text-center\">\n                                <p>El plazo maximo de 12 meses <br> El Plazo minimo es de 1 mes</p>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col class=\"ion-text-center\">\n                                <ion-button style=\"--background: #4F47BF;\" (click)=\"swipeNext2()\">Siguiente</ion-button>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n\n                </ion-card-content>\n            </ion-card>\n        </ion-item>\n    </div>\n\n    <div *ngIf=\"Parte3\">\n        <ion-item lines=\"none\">\n            <ion-card style=\"background-color: white;--box-shadow: transparent;width: 100%;\">\n                <ion-card-header class=\"ion-text-center\">\n                    <p style=\"color: #4F47BF;font-weight: bold;font-size: 20px;font-family: 'Berlin';\">Multinivel</p>\n                </ion-card-header>\n                <ion-card-content>\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col class=\"ion-text-center\">\n                                <p style=\"font-size: 45px;\">{{ Multinivel }}</p>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col class=\"ion-text-center\">\n                                <ion-item lines=\"none\">\n                                    <ion-select placeholder=\"Escoje Uno\" [(ngModel)]=\"Multinivel\">\n                                        <ion-select-option value=\"Avon\">Avon</ion-select-option>\n                                        <ion-select-option value=\"Marketing Personal\">Marketing Personal</ion-select-option>\n                                        <ion-select-option value=\"Omnilife\">Omnilife</ion-select-option>\n                                        <ion-select-option value=\"Lebel\">Lebel</ion-select-option>\n                                    </ion-select>\n                                </ion-item>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col class=\"ion-text-center\">\n                                <p>Escoje una de las empresas listadas.</p>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col class=\"ion-text-center\">\n                                <ion-button style=\"--background: #4F47BF;\" (click)=\"Simular()\">Simular</ion-button>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n\n                </ion-card-content>\n            </ion-card>\n        </ion-item>\n    </div>\n</ion-content>\n<ion-footer class=\"ion-no-border \" style=\"background-color: #4F47BF; \">\n    <ion-toolbar class=\"toolbar-footer \">\n        <ion-tabs style=\"background-color: #4F47BF; \">\n            <ion-tab-bar slot=\"bottom \" style=\"background-color: #4F47BF; \">\n                <ion-tab-button (click)=\"Historial() \" style=\"background-color: #4F47BF; \">\n                    <ion-icon name=\"list-circle\" style=\"font-size: 23px;color: white; \"></ion-icon>\n                    <ion-label style=\"color: white; \">Historial</ion-label>\n                </ion-tab-button>\n\n                <ion-tab-button (click)=\"Dashboard() \" style=\"background-color: #4F47BF; \">\n                    <ion-icon name=\"home\" style=\"font-size: 23px;color: white; \"></ion-icon>\n                    <ion-label style=\"color: white; \">Home</ion-label>\n                </ion-tab-button>\n\n                <ion-tab-button (click)=\"Notificacion() \" style=\"background-color: #4F47BF; \">\n                    <ion-icon name=\"notifications\" style=\"font-size: 23px;color: white; \"></ion-icon>\n                    <ion-label style=\"color: white; \">Notificación</ion-label>\n                </ion-tab-button>\n            </ion-tab-bar>\n        </ion-tabs>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "UVc3":
/*!***********************************************!*\
  !*** ./src/app/preguntas/preguntas.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-Dashboard {\n  height: 120px;\n}\n\n.toolbar-dashboard {\n  --background: #4F47BF;\n  border-radius: 0px 0px 0px 0px;\n}\n\n.imagen-header {\n  width: 100px;\n  height: 100px;\n}\n\n.card-dashboard {\n  border-radius: 26px;\n  margin: 17px;\n  border: solid 0.5px silver;\n  --background: #828CBF;\n}\n\n.imagen-dashboard {\n  width: 120px;\n  height: 87px;\n}\n\n.toolbar-footer {\n  --background: rgb(243, 242, 242);\n}\n\n.fondo-marca {\n  --background: url('marcaagua.png') 0 0/100% 100% no-repeat !important;\n}\n\n.texto-simulador {\n  font-family: \"Josefin-ligth\" !important;\n}\n\n.campo_valor {\n  border-bottom: solid 2px #4F47BF;\n  font-size: 15px;\n  border: solid 0.5px #4F47BF;\n  border-radius: 10px;\n  padding-left: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByZWd1bnRhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLGdDQUFBO0FBREo7O0FBSUE7RUFDSSxxRUFBQTtBQURKOztBQUlBO0VBQ0ksdUNBQUE7QUFESjs7QUFJQTtFQUNJLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQURKIiwiZmlsZSI6InByZWd1bnRhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLURhc2hib2FyZCB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4udG9vbGJhci1kYXNoYm9hcmQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNEY0N0JGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggMHB4O1xyXG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDEycHggI0ZGNDU3QTtcclxufVxyXG5cclxuLmltYWdlbi1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmNhcmQtZGFzaGJvYXJkIHtcclxuICAgIC8vIGJveC1zaGFkb3c6IC03cHggNXB4IDFweCAjRkY0NTdBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjZweDtcclxuICAgIG1hcmdpbjogMTdweDtcclxuICAgIGJvcmRlcjogc29saWQgMC41cHggc2lsdmVyO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjODI4Q0JGO1xyXG59XHJcblxyXG4uaW1hZ2VuLWRhc2hib2FyZCB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDg3cHg7XHJcbn1cclxuXHJcbi50b29sYmFyLWZvb3RlciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDMsIDI0MiwgMjQyKTtcclxufVxyXG5cclxuLmZvbmRvLW1hcmNhIHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL21hcmNhYWd1YS5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dG8tc2ltdWxhZG9yIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbi1saWd0aCcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhbXBvX3ZhbG9yIHtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjNEY0N0JGO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAwLjVweCAjNEY0N0JGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=preguntas-preguntas-module.js.map