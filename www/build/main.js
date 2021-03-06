webpackJsonp([1],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crear_crear__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_lista__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profesiones_profesiones__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__profesiones_profesiones__["a" /* ProfesionesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__crear_crear__["a" /* CrearPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__lista_lista__["a" /* ListaPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/oscardary/Documents/proyectos/lista-prospectos-networkmarketing/src/pages/tabs/tabs.html"*/'<ion-tabs color="primary">\n  <ion-tab [root]="tab1Root" tabTitle="Profesiones" tabIcon="man"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Crear" tabIcon="add-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Lista" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/oscardary/Documents/proyectos/lista-prospectos-networkmarketing/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_lista__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_popover_menu_popover__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_agregar_prospecto_agregar_prospecto_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_autenticacion_autenticacion_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_datos_general_datos_general_service__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { AngularFireDatabase } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';
var CrearPage = (function () {
    //items: Observable<any[]>;
    //nombre: any;
    //mensajeValor: string = '';
    function CrearPage(navCtrl, navParams, aps, auth, dgs, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aps = aps;
        this.auth = auth;
        this.dgs = dgs;
        this.popoverCtrl = popoverCtrl;
        this.nombres = [];
        this.apellidos = [];
        this.profesiones = [];
        this.boolNombre = false;
        this.boolApellido = false;
        this.boolProfesiones = false;
        //profesionSeleccionada: any = {};
        this.nuevoProspecto = {};
        this.fnObtenerNombres();
        this.fnObtenerApellidos();
        this.fnObtenerProfesiones();
    }
    ;
    CrearPage.prototype.createContact = function (nuevoProspecto) {
        var _this = this;
        //Consultar UID
        this.auth.fnSesion.subscribe(function (sesion) {
            if (sesion) {
                nuevoProspecto.uid = sesion.uid;
                //Agregar a Firebase
                _this.aps.addContactToList(nuevoProspecto)
                    .then(function (ref) {
                    //Ir a Lista
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__lista_lista__["a" /* ListaPage */], { key: ref.key });
                });
            }
        });
    };
    CrearPage.prototype.fnObtenerNombres = function () {
        var _this = this;
        this.dgs.fnLoadDataNombres()
            .subscribe(function (data) {
            _this.nombres = data.json();
            _this.boolNombre = true;
        });
    };
    CrearPage.prototype.fnObtenerApellidos = function () {
        var _this = this;
        this.dgs.fnLoadDataApellidos()
            .subscribe(function (data) {
            _this.apellidos = data.json();
            _this.boolApellido = true;
        });
    };
    CrearPage.prototype.fnObtenerProfesiones = function () {
        var _this = this;
        this.dgs.fnLoadDataProfesiones()
            .subscribe(function (data) {
            _this.profesiones = data.json();
            _this.boolProfesiones = true;
        });
    };
    CrearPage.prototype.fnMenuPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__menu_popover_menu_popover__["a" /* MenuPopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    CrearPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crear',template:/*ion-inline-start:"/Users/oscardary/Documents/proyectos/lista-prospectos-networkmarketing/src/pages/crear/crear.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<ion-title>\n			Ingresa la Persona\n		</ion-title>\n\n		<ion-buttons end>\n			<button ion-button icon-only (click)="fnMenuPopover($event)">\n				<ion-icon name="more"></ion-icon>\n			</button>\n		</ion-buttons>\n\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<br>\n	<br>\n	<br>\n\n	<ion-grid>\n\n		<ion-row>\n			<ion-col>\n				<ion-list>\n					<ion-item>\n						<ion-label>Nombre</ion-label>\n						<ion-select [(ngModel)]="nuevoProspecto.nombre" interface="action-sheet">\n							<ion-option *ngFor="let nombre of nombres" value="{{nombre.nombre}}">\n								{{nombre.nombre}}\n							</ion-option>\n						</ion-select>\n					</ion-item>\n				</ion-list>\n			</ion-col>\n		</ion-row>\n\n		<ion-row>\n			<ion-col>\n				<ion-list>\n					<ion-item>\n						<ion-label>Apellido</ion-label>\n						<ion-select [(ngModel)]="nuevoProspecto.apellido" interface="action-sheet">\n							<ion-option *ngFor="let apellido of apellidos" value="{{apellido.apellido}}">{{apellido.apellido}}\n							</ion-option>\n						</ion-select>\n					</ion-item>\n				</ion-list>\n			</ion-col>\n		</ion-row>\n\n		<ion-row>\n			<ion-col>\n				<ion-list>\n					<ion-item>\n						<ion-label>Profesion</ion-label>\n						<ion-select [(ngModel)]="nuevoProspecto.profesion" interface="action-sheet">\n							<ion-option *ngFor="let profesion of profesiones" value="{{profesion.profesion}}">{{profesion.profesion}}\n							</ion-option>\n						</ion-select>\n					</ion-item>\n				</ion-list>\n			</ion-col>\n		</ion-row>\n\n	</ion-grid>\n\n	<ion-input type="number" placeholder="Agrega el Celular de la Persona" [(ngModel)]="nuevoProspecto.telefono">\n		<!-- (keyup.enter)="addcelular($event.target.value)" -->\n	</ion-input>\n	<br>\n	<br>\n	<br>\n	<br>\n	<br>\n	<button icon-start="" ion-button color="addcolor" full large (click)="createContact(nuevoProspecto)">\n		<ion-icon name="list-box"></ion-icon>Agregar a la Lista\n	</button>\n	<br>\n</ion-content>'/*ion-inline-end:"/Users/oscardary/Documents/proyectos/lista-prospectos-networkmarketing/src/pages/crear/crear.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__services_agregar_prospecto_agregar_prospecto_service__["a" /* AgregarProspectoService */],
            __WEBPACK_IMPORTED_MODULE_5__services_autenticacion_autenticacion_service__["a" /* AutenticacionService */],
            __WEBPACK_IMPORTED_MODULE_6__services_datos_general_datos_general_service__["a" /* DatosGeneralService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */]])
    ], CrearPage);
    return CrearPage;
}());

//# sourceMappingURL=crear.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_agregar_prospecto_agregar_prospecto_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_autenticacion_autenticacion_service__ = __webpack_require__(37);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListaPage = (function () {
    function ListaPage(navCtrl, aps, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.aps = aps;
        this.auth = auth;
        this.auth.fnSesion.subscribe(function (sesion) {
            if (sesion) {
                _this.listaContactos$ = _this.aps.getContactList(sesion.uid) //DB List
                    .snapshotChanges() // Key and Value
                    .map(function (changes) {
                    return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
                });
            }
        });
    }
    ListaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista',template:/*ion-inline-start:"/Users/oscardary/Documents/proyectos/lista-prospectos-networkmarketing/src/pages/lista/lista.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Lista\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg social-cards">\n  <ion-list>\n\n\n    <ion-item-divider color="light">Prospectos</ion-item-divider>\n\n    <ion-card *ngFor="let contacto of listaContactos$ | async">\n    		<ion-card-content>\n    			<ion-row>\n    				<ion-col col-1>\n    				<ion-icon name="person" item-start></ion-icon>\n    				</ion-col>\n    				<ion-col col-10>\n    					<p>{{contacto.nombre}} {{contacto.apellido}}</p>\n    				</ion-col>\n    				<!-- <ion-col col-5>\n    					<p></p>\n    				</ion-col> -->\n    				<ion-col col-1>\n    				</ion-col>\n 				</ion-row>\n 				<ion-row>\n 					<ion-col col-1>\n    				<ion-icon [name]="contacto.icon" item-start></ion-icon>\n    				</ion-col>\n    				<ion-col col-6>\n    					<p>{{contacto.profesion}}</p>\n    				</ion-col>\n    				<ion-col col-4>\n    					<p>{{contacto.telefono}}</p>\n    				</ion-col>\n    				<ion-col col-1>\n    				</ion-col>\n 				</ion-row>\n\n  			</ion-card-content>\n\n    </ion-card>\n\n\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/oscardary/Documents/proyectos/lista-prospectos-networkmarketing/src/pages/lista/lista.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_agregar_prospecto_agregar_prospecto_service__["a" /* AgregarProspectoService */],
            __WEBPACK_IMPORTED_MODULE_3__services_autenticacion_autenticacion_service__["a" /* AutenticacionService */]])
    ], ListaPage);
    return ListaPage;
}());

//# sourceMappingURL=lista.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarProspectoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgregarProspectoService = (function () {
    //Validar tipos de datos con el item.module.ts
    function AgregarProspectoService(afd) {
        this.afd = afd;
        // code...
    }
    AgregarProspectoService.prototype.getContactList = function (sUserID) {
        //return this.apListRef;
        return this.afd.list('/listaprospectos/', function (ref) { return ref.orderByChild('uid').equalTo(sUserID); });
    };
    AgregarProspectoService.prototype.addContactToList = function (nuevoProspecto) {
        //return this.apListRef.push(nuevoProspecto);
        return this.afd.list('/listaprospectos/').push(nuevoProspecto);
    };
    AgregarProspectoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AgregarProspectoService);
    return AgregarProspectoService;
}());

//# sourceMappingURL=agregar-prospecto.service.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_autenticacion_autenticacion_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MenuPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var MenuPopoverPage = (function () {
    function MenuPopoverPage(navCtrl, navParams, vCtrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vCtrl = vCtrl;
        this.auth = auth;
    }
    MenuPopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPopoverPage');
    };
    MenuPopoverPage.prototype.fnCloseMenuPopover = function () {
        this.vCtrl.dismiss();
    };
    MenuPopoverPage.prototype.fnCerrarSesion = function () {
        this.fnCloseMenuPopover();
        this.auth.fnLogout();
        //Validar si la sesión si fue cerrada correctamente
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    MenuPopoverPage.prototype.fnVerPerfil = function () {
        this.fnCloseMenuPopover();
        //this.navCtrl.setRoot(PerfilPage);
    };
    MenuPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu-popover',template:/*ion-inline-start:"/Users/oscardary/Documents/proyectos/lista-prospectos-networkmarketing/src/pages/menu-popover/menu-popover.html"*/'<ion-content>\n  <ion-list>\n    <!-- <ion-list-header>Configuración</ion-list-header> -->\n    <button ion-item (click)="fnVerPerfil()">\n      <ion-icon name="person"></ion-icon> Perfil\n    </button>\n    <button ion-item (click)="fnCerrarSesion()">\n      <ion-icon name="exit"></ion-icon> Cerrar Sesión\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/oscardary/Documents/proyectos/lista-prospectos-networkmarketing/src/pages/menu-popover/menu-popover.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_autenticacion_autenticacion_service__["a" /* AutenticacionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_autenticacion_autenticacion_service__["a" /* AutenticacionService */]) === "function" && _d || Object])
    ], MenuPopoverPage);
    return MenuPopoverPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=menu-popover.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_autenticacion_autenticacion_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//@IonicPage()
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.user = {
            email: "",
            password: ""
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.fnRegister = function () {
        var _this = this;
        this.auth.fnRegisterUser(this.user.email, this.user.password)
            .then(function (user) {
            console.log("Usuario Creado");
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: "Error",
                subTitle: err.message,
                buttons: ['Aceptar']
            });
            alert.present();
        });
    };
    LoginPage.prototype.fnLogin = function () {
        var _this = this;
        this.auth.fnLoginUser(this.user.email, this.user.password)
            .then(function (user) {
            console.log("Sesión Activa");
            // Validar si la sesion esta activa, si no direcciona al Login
            _this.auth.fnSesion.subscribe(function (sesion) {
                if (sesion) {
                    //Ir a profesiones
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                }
            });
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: "Error",
                subTitle: err.messaje,
                buttons: ['Aceptar']
            });
            alert.present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/oscardary/Documents/proyectos/lista-prospectos-networkmarketing/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Acceso</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding><br><br><br><br><br><br>\n    <ion-list>\n        <form>\n            <ion-item href="#">\n                <ion-label floating></ion-label>\n                <ion-input placeholder="Email" type="text" autocapitalize="off" required\n                name="email" [(ngModel)]="user.email" ></ion-input>\n            </ion-item>\n\n            <ion-item href="#">\n                <ion-label floating></ion-label>\n                <ion-input placeholder="Contraseña" type="password" required\n                name="password" [(ngModel)]="user.password" ></ion-input>\n            </ion-item>\n<br><br>\n            <div>\n                <button type="submit" ion-button (click)="fnLogin()"\n                block color="primary" large full>Iniciar Sesión</button>\n\n                <button type="submit" ion-button (click)="fnRegister()"\n                block color="secondary" large full>Registrarse</button>\n            </div>\n        </form>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/oscardary/Documents/proyectos/lista-prospectos-networkmarketing/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_autenticacion_autenticacion_service__["a" /* AutenticacionService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_autenticacion_autenticacion_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_perfil_perfil_service__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = (function () {
    // perfil = {
    //   nombre : 'casimiro',
    //   telefono : '3333'
    // }
    function PerfilPage(navCtrl, navParams, auth, ps) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.ps = ps;
        // this.fnCargarPerfil();
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/Users/oscardary/Documents/proyectos/lista-prospectos-networkmarketing/src/pages/perfil/perfil.html"*/'<!--\n  Generated template for the PerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>perfil</ion-title>\n\n    <ion-buttons end>\n			<button ion-button icon-only (click)="fnCerrarPerfil()">\n				<ion-icon name="close"></ion-icon>\n			</button>\n		</ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Nombre completo</ion-label>\n      <ion-input type="text" [(ngModel)]="perfil.nombre">perfil.nombre</ion-input>\n      <!-- readonly="false" -->\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Teléfono/Celular</ion-label>\n      <ion-input type="text" [(ngModel)]="perfil.telefono">perfil.telefono</ion-input>\n    </ion-item>\n\n  </ion-list>\n  <button icon-start="" ion-button color="addcolor" full large (click)="fnGuardaPerfil(perfil)">\n		<ion-icon name="checkmark"></ion-icon>Guardar\n	</button>\n</ion-content>'/*ion-inline-end:"/Users/oscardary/Documents/proyectos/lista-prospectos-networkmarketing/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_autenticacion_autenticacion_service__["a" /* AutenticacionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_autenticacion_autenticacion_service__["a" /* AutenticacionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_perfil_perfil_service__["a" /* PerfilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_perfil_perfil_service__["a" /* PerfilService */]) === "function" && _d || Object])
    ], PerfilPage);
    return PerfilPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/perfil/perfil.module": [
		459,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 195;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the PerfilService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PerfilService = (function () {
    function PerfilService(afd) {
        this.afd = afd;
        console.log('Hello PerfilService Provider');
    }
    PerfilService.prototype.getPerfilData = function (userId) {
        return this.afd.list('/perfil/' + userId);
    };
    PerfilService.prototype.setPerfilData = function (datos) {
        return this.afd.list('/perfil/' + datos.k).push(datos.d);
    };
    PerfilService.prototype.updPerfilData = function () {
    };
    PerfilService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], PerfilService);
    return PerfilService;
}());

//# sourceMappingURL=perfil.service.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosGeneralService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatosGeneralService = (function () {
    function DatosGeneralService(http) {
        this.http = http;
    }
    DatosGeneralService.prototype.fnLoadDataNombres = function () {
        return this.http.get("assets/data/nombres.json");
    };
    DatosGeneralService.prototype.fnLoadDataApellidos = function () {
        return this.http.get("assets/data/apellidos.json");
    };
    DatosGeneralService.prototype.fnLoadDataProfesiones = function () {
        return this.http.get("assets/data/profesiones.json");
    };
    DatosGeneralService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DatosGeneralService);
    return DatosGeneralService;
}());

//# sourceMappingURL=datos-general.service.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfesionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crear_crear__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_popover_menu_popover__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfesionesPage = (function () {
    function ProfesionesPage(navCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.items = [];
        this.items = [
            {
                'title': 'Maneje Uber',
                'icon': 'car',
                'description': 'Alguien que sepas que maneje Uber, o tenga algo que ver con Uber',
            },
            {
                'title': 'Analice Datos',
                'icon': 'analytics',
                'description': 'Analice Datos en una Empresa',
            },
            {
                'title': 'Haga Picnic',
                'icon': 'basket',
                'description': 'Alguien que recuerdes en un picnic',
            },
            {
                'title': 'Tome Cerveza',
                'icon': 'beer',
                'description': 'Alguien que recuerdes tomando mucha cerveza',
            },
            {
                'title': 'Monte Bicicleta',
                'icon': 'bicycle',
                'description': 'Vaya a la ciclovia o monte mucho e bicicleta',
            },
            {
                'title': 'Lee Libros',
                'icon': 'book',
                'description': 'Alguien a quien le guste leer mucho',
            },
            {
                'title': 'Maquille Profesionalmente',
                'icon': 'brush',
                'description': 'Le Guste maquillar por profesion o hobby',
            },
            {
                'title': 'Sabe Mecanica',
                'icon': 'build',
                'description': 'Que sepa mecanica, tenga taller o con familiar mecanico',
            },
            {
                'title': 'Monte Bus',
                'icon': 'bus',
                'description': 'Que lo recuerdes montado en un bus',
            },
            {
                'title': 'Tome Tinto',
                'icon': 'cafe',
                'description': 'Alguien que le guste mucho el tinto',
            },
            {
                'title': 'Call Center',
                'icon': 'call',
                'description': 'Trabaje en un Call Center o reciba muchas llamadas',
            },
            {
                'title': 'Sepa Fotografía',
                'icon': 'camera',
                'description': 'Sepa de Fotografia, sea profesional tomando fotos',
            },
            {
                'title': 'Super Mercado',
                'icon': 'cart',
                'description': 'Trabaje para un SuperMercado en cualquier area',
            },
            {
                'title': 'Trabaje Valores',
                'icon': 'cash',
                'description': 'Tenga o Trabaje en Casa de Cambio',
            },
            {
                'title': 'Pinte Cuadros',
                'icon': 'color-palette',
                'description': 'Sepa Pintar Cuadros',
            },
            {
                'title': 'Obras Construccion',
                'icon': 'construct',
                'description': 'Trabe en Obras de Construcción',
            },
            {
                'title': 'Peluqueria Estilista',
                'icon': 'cut',
                'description': 'Tenga o Trabaje en peluquería',
            },
            {
                'title': 'Optómetra Optica',
                'icon': 'eye',
                'description': 'Trabaje con los ojos con gafas y más',
            },
            {
                'title': 'Community Manager',
                'icon': 'logo-facebook',
                'description': 'Maneje Redes Sociales como profesión',
            },
            {
                'title': 'Bombero Socorrista',
                'icon': 'flame',
                'description': 'Sepa Pintar Cuadros',
            },
            {
                'title': 'Ingenieria Electrica',
                'icon': 'flash',
                'description': 'Sepa de Voltajes y cosas electricas',
            },
            {
                'title': 'Químico Laboratorio',
                'icon': 'flask',
                'description': 'Sea Quimico de algun tipo',
            },
            {
                'title': 'Jardinería Plantas',
                'icon': 'flower',
                'description': 'Venda plantas o flores para vivir, sea Jardinero',
            },
            {
                'title': 'Futbol Microfutbol',
                'icon': 'football',
                'description': 'Sepa mucho de Futbol, le guste jugar futbol, juega microfutbol',
            },
            {
                'title': 'Madera Carpintero',
                'icon': 'hammer',
                'description': 'Trabaje con Madera',
            },
            {
                'title': 'Futbol Microfutbol',
                'icon': 'football',
                'description': 'Sepa mucho de Futbol, le guste jugar futbol, juega microfutbol',
            },
            {
                'title': 'Amor Pasado',
                'icon': 'heart',
                'description': 'Algun Exnovio(a) o amor del pasado',
            },
            {
                'title': 'Bienes Raices',
                'icon': 'home',
                'description': 'Trabaje comprando o vendiendo bienes raices',
            },
            {
                'title': 'Llaves Cerraduras',
                'icon': 'key',
                'description': 'Trabaje con Cerraduras y Llaves',
            },
            {
                'title': 'Tecnología Sistemas',
                'icon': 'laptop',
                'description': 'Sabe de sistemas y tecnología, programacion, software',
            },
            {
                'title': 'Soldado Militar',
                'icon': 'medal',
                'description': 'Alguien que haya o este en el ejercito',
            },
            {
                'title': 'Medico Especialista',
                'icon': 'medkit',
                'description': 'Tiene alguna especialidad en medicina o simplemente es médico',
            },
            {
                'title': 'Cantante Musico',
                'icon': 'microphone',
                'description': 'Hayas visto cantar en algun lado',
            },
            {
                'title': 'Toca Instrumentos',
                'icon': 'musical-notes',
                'description': 'Toca algun instrumento y sabe de musica',
            },
            {
                'title': 'Vegetariano Verduras',
                'icon': 'nutrition',
                'description': 'Es vegetariano, Vegano o solo come verduras',
            },
            {
                'title': 'Ayuda Mascotas',
                'icon': 'paw',
                'description': 'Cuida los animalitos o tiene muchas mascotas',
            },
            {
                'title': 'Vende Celulares',
                'icon': 'phone-portrait',
                'description': 'Vende Celulares, Accesorios o todo con telefonos inteligentes',
            },
            {
                'title': 'Pizzero Pizzeria',
                'icon': 'pizza',
                'description': 'Tiene que ver con la industria de la pizza',
            },
            {
                'title': 'Azafata Piloto',
                'icon': 'plane',
                'description': 'Tiene que ver con la industria de la aviacion',
            },
            {
                'title': 'Vende Ropa',
                'icon': 'pricetags',
                'description': 'Vende Ropa en General',
            },
            {
                'title': 'Mesero Restaurante',
                'icon': 'restaurant',
                'description': 'Trabaja en un restaurante o es dueño de alguno',
            },
            {
                'title': 'Recien Graduado',
                'icon': 'school',
                'description': 'Está Estudiando o Recién Graduado de la Universidad',
            },
            {
                'title': 'Costura Confeccion',
                'icon': 'shirt',
                'description': 'Confecciona o tiene taller de costura',
            },
            {
                'title': 'Carro Velocidad',
                'icon': 'speedometer',
                'description': 'Piloto de Autos o le guste la Velocidad y los Carros',
            },
            {
                'title': 'Deportista Rendimiento',
                'icon': 'tennisball',
                'description': 'Deportista de Alto Rendimiento',
            },
            {
                'title': 'Youtuber Animador',
                'icon': 'logo-youtube',
                'description': 'Youtuber o Animador en Videos en Redes Sociales',
            },
        ];
    }
    ProfesionesPage.prototype.irACrearPage = function (item) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__crear_crear__["a" /* CrearPage */], { item: item });
    };
    ProfesionesPage.prototype.fnMenuPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__menu_popover_menu_popover__["a" /* MenuPopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    ProfesionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profesiones',template:/*ion-inline-start:"/Users/oscardary/Documents/proyectos/lista-prospectos-networkmarketing/src/pages/profesiones/profesiones.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Profesiones</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="fnMenuPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <br>\n  <ion-list>\n    <ion-list-header>¿A quien conoces que?</ion-list-header>\n    <button ion-item *ngFor="let item of items" icon-start (click)=irACrearPage(item)>\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{ item.title }}\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/oscardary/Documents/proyectos/lista-prospectos-networkmarketing/src/pages/profesiones/profesiones.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */]])
    ], ProfesionesPage);
    return ProfesionesPage;
}());

//# sourceMappingURL=profesiones.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(315);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_crear_crear__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_lista_lista__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profesiones_profesiones__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_menu_popover_menu_popover__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__enviroment__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_agregar_prospecto_agregar_prospecto_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_autenticacion_autenticacion_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_datos_general_datos_general_service__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_perfil_perfil_service__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_crear_crear__["a" /* CrearPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_lista_lista__["a" /* ListaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_profesiones_profesiones__["a" /* ProfesionesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_menu_popover_menu_popover__["a" /* MenuPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__["a" /* PerfilPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_14__enviroment__["a" /* firebaseConfig */], 'lista-prospectos'),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_crear_crear__["a" /* CrearPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_lista_lista__["a" /* ListaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_profesiones_profesiones__["a" /* ProfesionesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_menu_popover_menu_popover__["a" /* MenuPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__["a" /* PerfilPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__services_agregar_prospecto_agregar_prospecto_service__["a" /* AgregarProspectoService */],
                __WEBPACK_IMPORTED_MODULE_19__services_autenticacion_autenticacion_service__["a" /* AutenticacionService */],
                __WEBPACK_IMPORTED_MODULE_20__services_datos_general_datos_general_service__["a" /* DatosGeneralService */],
                __WEBPACK_IMPORTED_MODULE_21__services_perfil_perfil_service__["a" /* PerfilService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutenticacionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import * as firebase from 'firebase/app';
var AutenticacionService = (function () {
    function AutenticacionService(afAuth) {
        this.afAuth = afAuth;
        // code...
    }
    AutenticacionService.prototype.fnRegisterUser = function (email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (res) {
            console.log("Usuario creado correctamente =D");
        })
            .catch(function (err) { return Promise.reject(err); });
    };
    AutenticacionService.prototype.fnLoginUser = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) { return Promise.resolve(user); })
            .catch(function (err) { return Promise.resolve(err); });
    };
    Object.defineProperty(AutenticacionService.prototype, "fnSesion", {
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    AutenticacionService.prototype.fnLogout = function () {
        this.afAuth.auth.signOut()
            .then(function () {
            console.log("Cerrar Sesión");
        });
    };
    AutenticacionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AutenticacionService);
    return AutenticacionService;
}());

//# sourceMappingURL=autenticacion.service.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_autenticacion_autenticacion_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        var _this = this;
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //----- INICIO
            // Validar si la sesion esta activa, si no direcciona al Login
            _this.auth.fnSesion.subscribe(function (sesion) {
                if (!sesion) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                }
            });
            //----- FIN
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/oscardary/Documents/proyectos/lista-prospectos-networkmarketing/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/oscardary/Documents/proyectos/lista-prospectos-networkmarketing/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__services_autenticacion_autenticacion_service__["a" /* AutenticacionService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyB4C6vu6f1sVh8VfoqBJc2Cr0SOsKXwhXo",
    authDomain: "lista-prospectos.firebaseapp.com",
    databaseURL: "https://lista-prospectos.firebaseio.com",
    projectId: "lista-prospectos",
    storageBucket: "",
    messagingSenderId: "879756516909"
};
//# sourceMappingURL=enviroment.js.map

/***/ })

},[294]);
//# sourceMappingURL=main.js.map