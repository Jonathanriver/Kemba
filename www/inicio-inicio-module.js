(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inicio-inicio-module"],{

/***/ "7To4":
/*!***************************************!*\
  !*** ./src/app/inicio/inicio.page.ts ***!
  \***************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inicio.page.html */ "ECfs");
/* harmony import */ var _inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio.page.scss */ "uOyS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../provider.service */ "74+B");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");








let InicioPage = class InicioPage {
    constructor(router, loadingController, postServices, storage) {
        this.router = router;
        this.loadingController = loadingController;
        this.postServices = postServices;
        this.storage = storage;
    }
    ngOnInit() {
        this.presentLoadingBasic();
    }
    getPosts() {
        this.presentLoadingBasic();
        this.postServices.getPosts(this.usuario, this.password, this.record)
            .then(data => {
            this.arrayPosts = data;
            this.presentLoading();
            this.storage.remove('Usuario');
            this.storage.remove('name');
            this.storage.set('name', data['response']['nombre']);
            this.storage.set('Usuario', data['response']);
            console.log(data['response']);
            this.router.navigate(['/dashboard']);
        });
    }
    Registrar() {
        this.router.navigate(['/registrar']);
    }
    ResetPass() {
        this.router.navigate(['/reset-pass']);
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
};
InicioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _provider_service__WEBPACK_IMPORTED_MODULE_6__["ProviderService"] },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["Storage"] }
];
InicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inicio',
        template: _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InicioPage);



/***/ }),

/***/ "ECfs":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"body-App\">\r\n\r\n    <ion-list style=\"margin-top: 4%;background-color: transparent;\">\r\n        <div class=\"ion-text-center\">\r\n            <img src=\"../../assets/images/LOGO KEMBA.png\" alt=\"\" class=\"Imagen-Cabeza\">\r\n\r\n            <div>\r\n                <ion-card class=\"card-login\">\r\n                    <ion-card-content>\r\n                        <ion-item lines=\"none\" style=\"--background: transparent;\">\r\n                            <h4 style=\"font-family: Berlin;font-size: 12px;color: white;\">Usuario</h4>\r\n                        </ion-item>\r\n                        <ion-item lines=\"none\" style=\"--background: transparent;\">\r\n                            <ion-label position=\"stacked\" slot=\"strat\" style=\"font-family: Berlin;font-size: 12px;color: white;\">\r\n                                Usuario\r\n                            </ion-label>\r\n                            <ion-input [(ngModel)]=\"usuario\" style=\"font-size: 12px;font-family: 'Josefin-light';color: white;border-bottom: solid 0.5px white;\" placeholder=\"Nombre de usuario\"></ion-input>\r\n                            <ion-icon slot=\"end\" name=\"person-outline\" style=\"color: white;\"></ion-icon>\r\n                        </ion-item>\r\n                        <ion-item lines=\"none\" style=\"--background: transparent;\">\r\n                            <ion-label position=\"stacked\" slot=\"strat\" style=\"font-family: Berlin;font-size: 12px;color: white;\">\r\n                                Contraseña\r\n                            </ion-label>\r\n                            <ion-input [(ngModel)]=\"password\" type=\"password\" style=\"font-size: 12px;font-family: 'Josefin-light';color: white;border-bottom: solid 0.5px white;\" placeholder=\"Password\"></ion-input>\r\n                            <ion-icon slot=\"end\" name=\"key-outline\" style=\"color: white;\"></ion-icon>\r\n                        </ion-item>\r\n                        <ion-item lines=\"none\" style=\"--background: transparent;\">\r\n                            <ion-label slot=\"\" style=\"color: white;font-size: 12px;\">Acepta Recordar mi usuario\r\n                            </ion-label>\r\n                            <ion-checkbox [(ngModel)]=\"record\" slot=\"start\" color=\"tertiary\"></ion-checkbox>\r\n                        </ion-item>\r\n                        <ion-item lines=\"none\" class=\"ion-text-center\" style=\"--background: transparent;\">\r\n\r\n                            <ion-button class=\"Boton-Inicio-bajo\" expand=\"full\" (click)=\"getPosts()\" style=\"font-family: Berlin;--background: #EC4692 !important;\">INGRESAR</ion-button>\r\n                        </ion-item>\r\n                        <ion-item lines=\"none\" style=\"--background: transparent;\" class=\"ion-text-center\">\r\n                            <div class=\"ion-text-center\">\r\n                                <a href=\"registrar\" style=\"text-decoration: none !important;color: white;font-size: 12px;\">No tienes cuenta registrate <span style=\"color: #EC4692;\">Aqui!</span></a>\r\n                            </div>\r\n                        </ion-item>\r\n                    </ion-card-content>\r\n                </ion-card>\r\n            </div>\r\n        </div>\r\n    </ion-list>\r\n\r\n</ion-content>");

/***/ }),

/***/ "KrE+":
/*!*************************************************!*\
  !*** ./src/app/inicio/inicio-routing.module.ts ***!
  \*************************************************/
/*! exports provided: InicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function() { return InicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio.page */ "7To4");




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ "MpVM":
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.module.ts ***!
  \*****************************************/
/*! exports provided: InicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio-routing.module */ "KrE+");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio.page */ "7To4");







let InicioPageModule = class InicioPageModule {
};
InicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"]
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
    })
], InicioPageModule);



/***/ }),

/***/ "uOyS":
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body-App {\n  --background: url('BACKGROUND3.png') 0 0/100% 100% no-repeat !important;\n}\n\n.Imagen-Cabeza {\n  width: 202px;\n  height: 94px;\n  top: 90px;\n  position: relative;\n  z-index: 2;\n}\n\n.estilo-campo1 {\n  border: solid #666666 0.3px;\n  padding-left: 32px;\n  padding-top: 12px;\n  --padding-start: inherit !important;\n  border-radius: 10px 0px 0px 10px;\n  height: 50px;\n  margin-bottom: 20px;\n  width: 120px !important;\n}\n\n.estilo-campo2 {\n  border: solid #666666 0.3px;\n  padding-left: 12px;\n  --padding-start: inherit !important;\n  border-radius: 0px 10px 10px 0px;\n  height: 50px;\n  margin-bottom: 20px;\n}\n\n.Boton-Inicio {\n  --background: #4F47BF;\n  height: 40px;\n  width: 100%;\n  font-size: 15px;\n  text-transform: lowercase !important;\n}\n\n.espacio-campo1 {\n  margin-top: 0px;\n}\n\n.card-login {\n  margin-top: 40%;\n  background: #4F47BF;\n  --box-shadow: transparent;\n}\n\n.Boton-Inicio-bajo {\n  --background: transparent;\n  border-bottom: solid 0.5px #FF457A;\n  color: white;\n  font-size: 10px;\n  width: 100%;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGluaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1RUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFHSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQURKOztBQUlBO0VBQ0kseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFESiIsImZpbGUiOiJpbmljaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHktQXBwIHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL0JBQ0tHUk9VTkQzLnBuZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5JbWFnZW4tQ2FiZXphIHtcclxuICAgIHdpZHRoOiAyMDJweDtcclxuICAgIGhlaWdodDogOTRweDtcclxuICAgIHRvcDogOTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5lc3RpbG8tY2FtcG8xIHtcclxuICAgIGJvcmRlcjogc29saWQgIzY2NjY2NiAwLjNweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVzdGlsby1jYW1wbzIge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjNjY2NjY2IDAuM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5Cb3Rvbi1JbmljaW8ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNEY0N0JGO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lc3BhY2lvLWNhbXBvMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWxvZ2luIHtcclxuICAgIC8vIGJvcmRlcjogc29saWQgIzY2NjY2NiAwLjVweDtcclxuICAgIC8vIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tdG9wOiA0MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNEY0N0JGO1xyXG4gICAgLS1ib3gtc2hhZG93OiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLkJvdG9uLUluaWNpby1iYWpvIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCAjRkY0NTdBO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=inicio-inicio-module.js.map