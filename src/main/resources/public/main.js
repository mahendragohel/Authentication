(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_forgotpass_forgotpass_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forgotpass/forgotpass.component */ "./src/app/components/forgotpass/forgotpass.component.ts");
/* harmony import */ var _components_employee_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/employee/profile/profile.component */ "./src/app/components/employee/profile/profile.component.ts");
/* harmony import */ var src_app_components_designation_designation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/designation/designation.component */ "./src/app/components/designation/designation.component.ts");
/* harmony import */ var _components_department_department_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/department/department.component */ "./src/app/components/department/department.component.ts");
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/guards/auth.guard */ "./src/app/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
    },
    {
        path: 'forgotpass',
        component: _components_forgotpass_forgotpass_component__WEBPACK_IMPORTED_MODULE_3__["ForgotpassComponent"]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'myprofile',
        component: _components_employee_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
        canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'designations',
        component: src_app_components_designation_designation_component__WEBPACK_IMPORTED_MODULE_5__["DesignationComponent"],
        canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'departments',
        component: _components_department_department_component__WEBPACK_IMPORTED_MODULE_6__["DepartmentComponent"],
        canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"container\">\n    <app-header></app-header>\n    <div id=\"content\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-hrms';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_forgotpass_forgotpass_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/forgotpass/forgotpass.component */ "./src/app/components/forgotpass/forgotpass.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_employee_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/employee/profile/profile.component */ "./src/app/components/employee/profile/profile.component.ts");
/* harmony import */ var _components_employee_address_address_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/employee/address/address.component */ "./src/app/components/employee/address/address.component.ts");
/* harmony import */ var _components_employee_employment_details_employment_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/employee/employment-details/employment-details.component */ "./src/app/components/employee/employment-details/employment-details.component.ts");
/* harmony import */ var _components_employee_education_education_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/employee/education/education.component */ "./src/app/components/employee/education/education.component.ts");
/* harmony import */ var _components_employee_experience_experience_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/employee/experience/experience.component */ "./src/app/components/employee/experience/experience.component.ts");
/* harmony import */ var _components_employee_skills_skills_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/employee/skills/skills.component */ "./src/app/components/employee/skills/skills.component.ts");
/* harmony import */ var _components_employee_document_and_ids_document_and_ids_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/employee/document-and-ids/document-and-ids.component */ "./src/app/components/employee/document-and-ids/document-and-ids.component.ts");
/* harmony import */ var _components_employee_reporting_structure_reporting_structure_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/employee/reporting-structure/reporting-structure.component */ "./src/app/components/employee/reporting-structure/reporting-structure.component.ts");
/* harmony import */ var _services_ConfigService__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/ConfigService */ "./src/app/services/ConfigService.ts");
/* harmony import */ var src_app_components_designation_designation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/components/designation/designation.component */ "./src/app/components/designation/designation.component.ts");
/* harmony import */ var src_app_services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/services/jwt.interceptor */ "./src/app/services/jwt.interceptor.ts");
/* harmony import */ var _components_department_department_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/department/department.component */ "./src/app/components/department/department.component.ts");
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/guards/auth.guard */ "./src/app/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var appInitializerFn = function (appConfig) {
    return function () {
        return appConfig.loadAppConfig();
    };
};
Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_12___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_forgotpass_forgotpass_component__WEBPACK_IMPORTED_MODULE_6__["ForgotpassComponent"],
                _components_employee_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _components_employee_address_address_component__WEBPACK_IMPORTED_MODULE_14__["AddressComponent"],
                _components_employee_employment_details_employment_details_component__WEBPACK_IMPORTED_MODULE_15__["EmploymentDetailsComponent"],
                _components_employee_education_education_component__WEBPACK_IMPORTED_MODULE_16__["EducationComponent"],
                _components_employee_experience_experience_component__WEBPACK_IMPORTED_MODULE_17__["ExperienceComponent"],
                _components_employee_skills_skills_component__WEBPACK_IMPORTED_MODULE_18__["SkillsComponent"],
                _components_employee_document_and_ids_document_and_ids_component__WEBPACK_IMPORTED_MODULE_19__["DocumentAndIdsComponent"],
                _components_employee_reporting_structure_reporting_structure_component__WEBPACK_IMPORTED_MODULE_20__["ReportingStructureComponent"],
                src_app_components_designation_designation_component__WEBPACK_IMPORTED_MODULE_22__["DesignationComponent"],
                _components_department_department_component__WEBPACK_IMPORTED_MODULE_24__["DepartmentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ],
            providers: [
                _services_ConfigService__WEBPACK_IMPORTED_MODULE_21__["ConfigService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    useFactory: appInitializerFn,
                    multi: true,
                    deps: [_services_ConfigService__WEBPACK_IMPORTED_MODULE_21__["ConfigService"]]
                },
                { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["en_US"] },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: src_app_services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_23__["JwtInterceptor"], multi: true }, src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/department/department.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/department/department.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"departments\">\r\n  <div class=\"form-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\">\r\n        <h4 class=\"page-title\">Departments</h4>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4 text-right m-b-30\">\r\n        <button nz-button nzType=\"primary\" [nzSize]=\"size\" (click)=\"showModal()\">\r\n          <i nz-icon type=\"plus\"></i>Add Department</button>\r\n      </div>\r\n    </div>\r\n    <nz-modal [(nzVisible)]=\"isVisible\" [nzTitle]=\"modalTitle\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\" (nzOnCancel)=\"handleCancel()\">\r\n      <ng-template #modalTitle>\r\n        Add Department\r\n      </ng-template>\r\n\r\n      <ng-template #modalContent>\r\n        <form nz-form [formGroup]=\"validateForm\" class=\"login-form\" (ngSubmit)=\"submitForm()\">\r\n        <nz-form-item>\r\n          <nz-form-control>\r\n            <nz-input-group>\r\n              <input type=\"text\" nz-input formControlName=\"name\" placeholder=\"Department Name\">\r\n            </nz-input-group>\r\n            <nz-form-explain *ngIf=\"validateForm.get('name').dirty && validateForm.get('name').errors\">Please input designation name!</nz-form-explain>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        </form>\r\n      </ng-template>\r\n\r\n      <ng-template #modalFooter>\r\n        <button nz-button nzType=\"default\" (click)=\"handleCancel()\">Cancel</button>\r\n        <button nz-button nzType=\"primary\" (click)=\"submitForm()\" [nzLoading]=\"isConfirmLoading\">Submit</button>\r\n      </ng-template>\r\n    </nz-modal>\r\n    <nz-table #basicTable [nzData]=\"departments\">\r\n      <thead>\r\n        <tr>\r\n          <th>Department Name</th>\r\n          <th>Action</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let data of basicTable.data\">\r\n          <td>{{data.name}}</td>\r\n          <td>\r\n            <a class=\"edit-icon\">\r\n              <i nz-icon type=\"edit\"></i>\r\n            </a>\r\n            <nz-divider nzType=\"vertical\"></nz-divider>\r\n            <a class=\"delete-icon\">\r\n              <i nz-icon type=\"delete\"></i>\r\n            </a>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </nz-table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/department/department.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/department/department.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".departments {\n  width: 800px;\n  margin: auto;\n  box-shadow: 0 6px 15px rgba(36, 37, 38, 0.08); }\n  .departments .form-wrapper {\n    background-color: #fff;\n    padding: 30px; }\n"

/***/ }),

/***/ "./src/app/components/department/department.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/department/department.component.ts ***!
  \***************************************************************/
/*! exports provided: DepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function() { return DepartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_DepartmentModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/DepartmentModel */ "./src/app/models/DepartmentModel.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DepartmentComponent = /** @class */ (function () {
    function DepartmentComponent(fb, _AuthService, notification) {
        this.fb = fb;
        this._AuthService = _AuthService;
        this.notification = notification;
        this.isVisible = false;
        this.isConfirmLoading = false;
        this.departments = [];
        this.notification.config({
            nzTop: '70px'
        });
    }
    DepartmentComponent.prototype.showModal = function () {
        this.isVisible = true;
    };
    DepartmentComponent.prototype.handleCancel = function () {
        this.isVisible = false;
    };
    DepartmentComponent.prototype.getAllDepartments = function () {
        var _this = this;
        this._AuthService.getAllDepartments().subscribe(function (data) {
            _this.departments = data.payload;
            _this.departments = _this.departments.slice();
        });
    };
    DepartmentComponent.prototype.submitForm = function () {
        var _this = this;
        for (var i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        if (this.validateForm.status === "VALID") {
            this.isConfirmLoading = true;
            this.Department = new _models_DepartmentModel__WEBPACK_IMPORTED_MODULE_2__["Department"](this.validateForm.value);
            this._AuthService.addDepartment(this.Department).subscribe(function (data) {
                _this.isConfirmLoading = false;
                _this.isVisible = false;
                if (data.status === "SUCCESS") {
                    _this.notification.create('success', 'HRMS', 'Department added successfully!', { nzDuration: 2000 });
                }
                _this.departments = [];
                _this.getAllDepartments();
                _this.validateForm.reset();
            }, function (error) {
                console.log(error);
                _this.isConfirmLoading = false;
                _this.isVisible = false;
                _this.notification.create('error', 'HRMS', 'Some error occurred', { nzDuration: 2000 });
            });
        }
    };
    DepartmentComponent.prototype.ngOnInit = function () {
        this.getAllDepartments();
        this.validateForm = this.fb.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    DepartmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-department',
            template: __webpack_require__(/*! ./department.component.html */ "./src/app/components/department/department.component.html"),
            styles: [__webpack_require__(/*! ./department.component.scss */ "./src/app/components/department/department.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"]])
    ], DepartmentComponent);
    return DepartmentComponent;
}());



/***/ }),

/***/ "./src/app/components/designation/designation.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/designation/designation.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"designation\">\r\n  <div class=\"form-wrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\">\r\n        <h4 class=\"page-title\">Designations</h4>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4 text-right m-b-30\">\r\n        <button nz-button nzType=\"primary\" [nzSize]=\"size\" (click)=\"showModal()\">\r\n          <i nz-icon type=\"plus\"></i>Add Designation</button>\r\n      </div>\r\n    </div>\r\n    <nz-modal [(nzVisible)]=\"isVisible\" [nzTitle]=\"modalTitle\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\" (nzOnCancel)=\"handleCancel()\">\r\n      <ng-template #modalTitle>\r\n        Add Designation\r\n      </ng-template>\r\n\r\n      <ng-template #modalContent>\r\n        <form nz-form [formGroup]=\"validateForm\" class=\"login-form\" (ngSubmit)=\"submitForm()\">\r\n          <nz-form-item>\r\n            <nz-form-control>\r\n              <nz-input-group>\r\n                <input type=\"text\" nz-input formControlName=\"designationName\" placeholder=\"Designation Name\">\r\n              </nz-input-group>\r\n              <nz-form-explain *ngIf=\"validateForm.get('designationName').dirty && validateForm.get('designationName').errors\">Please input designation name!</nz-form-explain>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-control>\r\n              <nz-select style=\"width: 100%;\" formControlName=\"departmentId\" [(ngModel)]=\"selectedValue\" nzAllowClear nzPlaceHolder=\"Select Department\">\r\n                <nz-option *ngFor=\"let department of departments\" nzValue=\"{{department.id}}\" nzLabel=\"{{department.name}}\"></nz-option>\r\n              </nz-select>\r\n              <nz-form-explain *ngIf=\"validateForm.get('departmentId').dirty && validateForm.get('departmentId').errors\">Please select department name!</nz-form-explain>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </form>\r\n      </ng-template>\r\n\r\n      <ng-template #modalFooter>\r\n        <button nz-button nzType=\"default\" (click)=\"handleCancel()\">Cancel</button>\r\n        <button nz-button nzType=\"primary\" (click)=\"submitForm()\" [nzLoading]=\"isConfirmLoading\">Submit</button>\r\n      </ng-template>\r\n    </nz-modal>\r\n    <nz-table #basicTable [nzData]=\"designations\">\r\n      <thead>\r\n        <tr>\r\n          <th>Designtion Name</th>\r\n          <th>Department</th>\r\n          <th>Action</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let data of basicTable.data\">\r\n          <td>{{data.designation}}</td>\r\n          <td>{{data.department}}</td>\r\n          <td>\r\n            <a class=\"edit-icon\"><i nz-icon type=\"edit\"></i></a>\r\n            <nz-divider nzType=\"vertical\"></nz-divider>\r\n            <a class=\"delete-icon\"><i nz-icon type=\"delete\"></i></a>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </nz-table>\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/designation/designation.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/designation/designation.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".designation {\n  width: 800px;\n  margin: auto;\n  box-shadow: 0 6px 15px rgba(36, 37, 38, 0.08); }\n  .designation .form-wrapper {\n    background-color: #fff;\n    padding: 30px; }\n"

/***/ }),

/***/ "./src/app/components/designation/designation.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/designation/designation.component.ts ***!
  \*****************************************************************/
/*! exports provided: DesignationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignationComponent", function() { return DesignationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_DesignationModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/DesignationModel */ "./src/app/models/DesignationModel.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DesignationComponent = /** @class */ (function () {
    function DesignationComponent(fb, _AuthService, notification) {
        this.fb = fb;
        this._AuthService = _AuthService;
        this.notification = notification;
        this.isVisible = false;
        this.isConfirmLoading = false;
        this.departments = [];
        this.designations = [];
        this.notification.config({
            nzTop: '70px'
        });
    }
    DesignationComponent.prototype.showModal = function () {
        this.isVisible = true;
    };
    DesignationComponent.prototype.handleCancel = function () {
        this.isVisible = false;
    };
    DesignationComponent.prototype.submitForm = function () {
        var _this = this;
        for (var i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        if (this.validateForm.status === "VALID") {
            this.isConfirmLoading = true;
            this.Designation = new _models_DesignationModel__WEBPACK_IMPORTED_MODULE_2__["Designation"](this.validateForm.value);
            this._AuthService.addDesignation(this.Designation).subscribe(function (data) {
                if (data.status === "SUCCESS") {
                    _this.isConfirmLoading = false;
                    _this.isVisible = false;
                    _this.notification.create('success', 'HRMS', 'Designation added successfully!', { nzDuration: 2000 });
                    _this.getAllDesignations();
                    _this.validateForm.reset();
                }
            }, function (error) {
                console.log(error);
                _this.isConfirmLoading = false;
                _this.isVisible = false;
                _this.notification.create('error', 'HRMS', 'Some error occurred', { nzDuration: 2000 });
            });
        }
    };
    DesignationComponent.prototype.getAllDepartments = function () {
        var _this = this;
        this._AuthService.getAllDepartments().subscribe(function (data) {
            _this.departments = data.payload;
            _this.departments = _this.departments.slice();
        });
    };
    DesignationComponent.prototype.getAllDesignations = function () {
        var _this = this;
        this._AuthService.getAllDesignation().subscribe(function (data) {
            _this.designations = data.payload;
        }, function (error) {
            console.log(error);
        });
    };
    DesignationComponent.prototype.ngOnInit = function () {
        this.getAllDepartments();
        this.getAllDesignations();
        this.validateForm = this.fb.group({
            designationName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            departmentId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    DesignationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-designation',
            template: __webpack_require__(/*! ./designation.component.html */ "./src/app/components/designation/designation.component.html"),
            styles: [__webpack_require__(/*! ./designation.component.scss */ "./src/app/components/designation/designation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"]])
    ], DesignationComponent);
    return DesignationComponent;
}());



/***/ }),

/***/ "./src/app/components/employee/address/address.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/employee/address/address.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box\">\r\n    <h3 class=\"card-title\">Permanent Address</h3>\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/components/employee/address/address.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/employee/address/address.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-box {\n  background-color: #fff;\n  border: 1px solid #ededed;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);\n  margin-bottom: 30px;\n  padding: 20px; }\n  .card-box .card-title {\n    color: #333;\n    font-size: 18px;\n    font-weight: normal;\n    margin-bottom: 20px; }\n  .card-box .experience-box {\n    position: relative; }\n  .card-box .experience-box .experience-list {\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      position: relative; }\n  .card-box .experience-box .experience-list li {\n        position: relative; }\n  .card-box .experience-box .experience-list li .experience-user {\n          background: #fff;\n          height: 10px;\n          left: 4px;\n          margin: 0;\n          padding: 0;\n          position: absolute;\n          top: 4px;\n          width: 10px; }\n  .card-box .experience-box .experience-list li .experience-user .before-circle {\n            background-color: #ddd;\n            border-radius: 50%;\n            height: 10px;\n            width: 10px; }\n  .card-box .experience-box .experience-list li .experience-content {\n          background-color: #fff;\n          margin: 0 0 20px 40px;\n          padding: 0;\n          position: relative; }\n  .card-box .experience-box .experience-list li .experience-content .timeline-content {\n            color: #9e9e9e; }\n  .card-box .experience-box .experience-list li .experience-content .timeline-content a.name {\n              color: #616161;\n              font-weight: bold; }\n  .card-box .experience-box .experience-list li .experience-content .timeline-content .time {\n              color: #bdbdbd;\n              display: block;\n              font-size: 12px;\n              line-height: 1.35; }\n  .card-box .experience-box .experience-list::before {\n      background: #ddd;\n      bottom: 0;\n      content: \"\";\n      left: 8px;\n      position: absolute;\n      top: 8px;\n      width: 2px; }\n  .card-box .skills > span {\n    border: 1px solid #ccc;\n    border-radius: 500px;\n    display: block;\n    margin-bottom: 10px;\n    padding: 6px 12px;\n    text-align: center;\n    color: #616161; }\n  .card-box .profile-preview .profile-img-wrap {\n    height: 150px;\n    width: 150px;\n    float: left; }\n  .card-box .profile-preview .profile-img-wrap .user-avatar {\n      font-size: 80px;\n      height: 150px;\n      width: 150px;\n      border-radius: 75px;\n      line-height: 60px;\n      background: #ccc;\n      color: #fff;\n      margin-right: 40px; }\n  .card-box .profile-preview .profile-img-wrap .user-avatar .anticon-user {\n        margin-top: 20px !important;\n        height: 150px;\n        width: 150px; }\n  .card-box .profile-preview .profile-img-wrap .profile-img {\n      width: 150px;\n      height: 150px;\n      cursor: pointer;\n      margin: 0 auto;\n      position: relative; }\n  .card-box .profile-preview .profile-basic .dashed-border {\n    border-right: 2px dashed #ccc; }\n  .card-box .profile-preview .profile-basic .profile-info-left .user-name {\n    color: #333; }\n  .card-box .profile-preview .profile-basic .profile-info-left .text-muted {\n    color: #777; }\n  .card-box .profile-preview .profile-basic .profile-info-left .staff-id {\n    margin-top: 5px; }\n  .card-box .profile-preview .profile-basic .personal-info {\n    list-style: none;\n    margin-bottom: 0;\n    padding: 0; }\n  .card-box .profile-preview .profile-basic .personal-info li {\n      margin-bottom: 10px; }\n  .card-box .profile-preview .profile-basic .personal-info li .title {\n        color: #515365;\n        float: left;\n        font-weight: 500;\n        margin-right: 30px;\n        width: 25%; }\n  .card-box .profile-preview .profile-basic .personal-info li .text {\n        color: #888da8;\n        display: block;\n        overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/components/employee/address/address.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/employee/address/address.component.ts ***!
  \******************************************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddressComponent = /** @class */ (function () {
    function AddressComponent() {
    }
    AddressComponent.prototype.ngOnInit = function () {
    };
    AddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-address',
            template: __webpack_require__(/*! ./address.component.html */ "./src/app/components/employee/address/address.component.html"),
            styles: [__webpack_require__(/*! ./address.component.scss */ "./src/app/components/employee/address/address.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/app/components/employee/document-and-ids/document-and-ids.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/employee/document-and-ids/document-and-ids.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box\">\r\n    <h3 class=\"card-title\">Documents & IDs</h3>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/components/employee/document-and-ids/document-and-ids.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/employee/document-and-ids/document-and-ids.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-box {\n  background-color: #fff;\n  border: 1px solid #ededed;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);\n  margin-bottom: 30px;\n  padding: 20px; }\n  .card-box .card-title {\n    color: #333;\n    font-size: 18px;\n    font-weight: normal;\n    margin-bottom: 20px; }\n  .card-box .experience-box {\n    position: relative; }\n  .card-box .experience-box .experience-list {\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      position: relative; }\n  .card-box .experience-box .experience-list li {\n        position: relative; }\n  .card-box .experience-box .experience-list li .experience-user {\n          background: #fff;\n          height: 10px;\n          left: 4px;\n          margin: 0;\n          padding: 0;\n          position: absolute;\n          top: 4px;\n          width: 10px; }\n  .card-box .experience-box .experience-list li .experience-user .before-circle {\n            background-color: #ddd;\n            border-radius: 50%;\n            height: 10px;\n            width: 10px; }\n  .card-box .experience-box .experience-list li .experience-content {\n          background-color: #fff;\n          margin: 0 0 20px 40px;\n          padding: 0;\n          position: relative; }\n  .card-box .experience-box .experience-list li .experience-content .timeline-content {\n            color: #9e9e9e; }\n  .card-box .experience-box .experience-list li .experience-content .timeline-content a.name {\n              color: #616161;\n              font-weight: bold; }\n  .card-box .experience-box .experience-list li .experience-content .timeline-content .time {\n              color: #bdbdbd;\n              display: block;\n              font-size: 12px;\n              line-height: 1.35; }\n  .card-box .experience-box .experience-list::before {\n      background: #ddd;\n      bottom: 0;\n      content: \"\";\n      left: 8px;\n      position: absolute;\n      top: 8px;\n      width: 2px; }\n  .card-box .skills > span {\n    border: 1px solid #ccc;\n    border-radius: 500px;\n    display: block;\n    margin-bottom: 10px;\n    padding: 6px 12px;\n    text-align: center;\n    color: #616161; }\n  .card-box .profile-preview .profile-img-wrap {\n    height: 150px;\n    width: 150px;\n    float: left; }\n  .card-box .profile-preview .profile-img-wrap .user-avatar {\n      font-size: 80px;\n      height: 150px;\n      width: 150px;\n      border-radius: 75px;\n      line-height: 60px;\n      background: #ccc;\n      color: #fff;\n      margin-right: 40px; }\n  .card-box .profile-preview .profile-img-wrap .user-avatar .anticon-user {\n        margin-top: 20px !important;\n        height: 150px;\n        width: 150px; }\n  .card-box .profile-preview .profile-img-wrap .profile-img {\n      width: 150px;\n      height: 150px;\n      cursor: pointer;\n      margin: 0 auto;\n      position: relative; }\n  .card-box .profile-preview .profile-basic .dashed-border {\n    border-right: 2px dashed #ccc; }\n  .card-box .profile-preview .profile-basic .profile-info-left .user-name {\n    color: #333; }\n  .card-box .profile-preview .profile-basic .profile-info-left .text-muted {\n    color: #777; }\n  .card-box .profile-preview .profile-basic .profile-info-left .staff-id {\n    margin-top: 5px; }\n  .card-box .profile-preview .profile-basic .personal-info {\n    list-style: none;\n    margin-bottom: 0;\n    padding: 0; }\n  .card-box .profile-preview .profile-basic .personal-info li {\n      margin-bottom: 10px; }\n  .card-box .profile-preview .profile-basic .personal-info li .title {\n        color: #515365;\n        float: left;\n        font-weight: 500;\n        margin-right: 30px;\n        width: 25%; }\n  .card-box .profile-preview .profile-basic .personal-info li .text {\n        color: #888da8;\n        display: block;\n        overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/components/employee/document-and-ids/document-and-ids.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/employee/document-and-ids/document-and-ids.component.ts ***!
  \************************************************************************************/
/*! exports provided: DocumentAndIdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentAndIdsComponent", function() { return DocumentAndIdsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocumentAndIdsComponent = /** @class */ (function () {
    function DocumentAndIdsComponent() {
    }
    DocumentAndIdsComponent.prototype.ngOnInit = function () {
    };
    DocumentAndIdsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-document-and-ids',
            template: __webpack_require__(/*! ./document-and-ids.component.html */ "./src/app/components/employee/document-and-ids/document-and-ids.component.html"),
            styles: [__webpack_require__(/*! ./document-and-ids.component.scss */ "./src/app/components/employee/document-and-ids/document-and-ids.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocumentAndIdsComponent);
    return DocumentAndIdsComponent;
}());



/***/ }),

/***/ "./src/app/components/employee/education/education.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/employee/education/education.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box\">\r\n    <h3 class=\"card-title\">Education Informations</h3>\r\n    <div class=\"experience-box\">\r\n        <ul class=\"experience-list\">\r\n            <li>\r\n                <div class=\"experience-user\">\r\n                    <div class=\"before-circle\"></div>\r\n                </div>\r\n                <div class=\"experience-content\">\r\n                    <div class=\"timeline-content\">\r\n                        <a href=\"#/\" class=\"name\">International College of Arts and Science (UG)</a>\r\n                        <div>Bsc Computer Science</div>\r\n                        <span class=\"time\">2000 - 2003</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <div class=\"experience-user\">\r\n                    <div class=\"before-circle\"></div>\r\n                </div>\r\n                <div class=\"experience-content\">\r\n                    <div class=\"timeline-content\">\r\n                        <a href=\"#/\" class=\"name\">International College of Arts and Science (PG)</a>\r\n                        <div>Msc Computer Science</div>\r\n                        <span class=\"time\">2000 - 2003</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/employee/education/education.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/employee/education/education.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-box {\n  background-color: #fff;\n  border: 1px solid #ededed;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);\n  margin-bottom: 30px;\n  padding: 20px; }\n  .card-box .card-title {\n    color: #333;\n    font-size: 18px;\n    font-weight: normal;\n    margin-bottom: 20px; }\n  .card-box .experience-box {\n    position: relative; }\n  .card-box .experience-box .experience-list {\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      position: relative; }\n  .card-box .experience-box .experience-list li {\n        position: relative; }\n  .card-box .experience-box .experience-list li .experience-user {\n          background: #fff;\n          height: 10px;\n          left: 4px;\n          margin: 0;\n          padding: 0;\n          position: absolute;\n          top: 4px;\n          width: 10px; }\n  .card-box .experience-box .experience-list li .experience-user .before-circle {\n            background-color: #ddd;\n            border-radius: 50%;\n            height: 10px;\n            width: 10px; }\n  .card-box .experience-box .experience-list li .experience-content {\n          background-color: #fff;\n          margin: 0 0 20px 40px;\n          padding: 0;\n          position: relative; }\n  .card-box .experience-box .experience-list li .experience-content .timeline-content {\n            color: #9e9e9e; }\n  .card-box .experience-box .experience-list li .experience-content .timeline-content a.name {\n              color: #616161;\n              font-weight: bold; }\n  .card-box .experience-box .experience-list li .experience-content .timeline-content .time {\n              color: #bdbdbd;\n              display: block;\n              font-size: 12px;\n              line-height: 1.35; }\n  .card-box .experience-box .experience-list::before {\n      background: #ddd;\n      bottom: 0;\n      content: \"\";\n      left: 8px;\n      position: absolute;\n      top: 8px;\n      width: 2px; }\n  .card-box .skills > span {\n    border: 1px solid #ccc;\n    border-radius: 500px;\n    display: block;\n    margin-bottom: 10px;\n    padding: 6px 12px;\n    text-align: center;\n    color: #616161; }\n  .card-box .profile-preview .profile-img-wrap {\n    height: 150px;\n    width: 150px;\n    float: left; }\n  .card-box .profile-preview .profile-img-wrap .user-avatar {\n      font-size: 80px;\n      height: 150px;\n      width: 150px;\n      border-radius: 75px;\n      line-height: 60px;\n      background: #ccc;\n      color: #fff;\n      margin-right: 40px; }\n  .card-box .profile-preview .profile-img-wrap .user-avatar .anticon-user {\n        margin-top: 20px !important;\n        height: 150px;\n        width: 150px; }\n  .card-box .profile-preview .profile-img-wrap .profile-img {\n      width: 150px;\n      height: 150px;\n      cursor: pointer;\n      margin: 0 auto;\n      position: relative; }\n  .card-box .profile-preview .profile-basic .dashed-border {\n    border-right: 2px dashed #ccc; }\n  .card-box .profile-preview .profile-basic .profile-info-left .user-name {\n    color: #333; }\n  .card-box .profile-preview .profile-basic .profile-info-left .text-muted {\n    color: #777; }\n  .card-box .profile-preview .profile-basic .profile-info-left .staff-id {\n    margin-top: 5px; }\n  .card-box .profile-preview .profile-basic .personal-info {\n    list-style: none;\n    margin-bottom: 0;\n    padding: 0; }\n  .card-box .profile-preview .profile-basic .personal-info li {\n      margin-bottom: 10px; }\n  .card-box .profile-preview .profile-basic .personal-info li .title {\n        color: #515365;\n        float: left;\n        font-weight: 500;\n        margin-right: 30px;\n        width: 25%; }\n  .card-box .profile-preview .profile-basic .personal-info li .text {\n        color: #888da8;\n        display: block;\n        overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/components/employee/education/education.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/employee/education/education.component.ts ***!
  \**********************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/components/employee/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.scss */ "./src/app/components/employee/education/education.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/components/employee/employment-details/employment-details.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/employee/employment-details/employment-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"employement-details\" *ngFor=\"let detail of employeeDetails\">\r\n  <div class=\"emp-detail-row col-md-6\">\r\n    <label>Date Of Joining : {{detail.doj}}</label>\r\n  </div>\r\n  <div class=\"emp-detail-row col-md-6\">\r\n    <label>Birthdate : {{detail.dob}}</label>\r\n  </div>\r\n  <div class=\"emp-detail-row col-md-6\">\r\n    <label>Designation : {{detail.designation}}</label>\r\n  </div>\r\n  <div class=\"emp-detail-row col-md-6\">\r\n    <label>Grade : {{detail.grade}}</label>\r\n  </div>\r\n  <div class=\"emp-detail-row col-md-6\">\r\n    <label>Department : {{detail.deparment}}</label>\r\n  </div>\r\n  <div class=\"emp-detail-row col-md-6\">\r\n    <label>Job Category : {{detail.jobCategory}}</label>\r\n  </div>\r\n  <div class=\"emp-detail-row col-md-6\">\r\n    <label>Job Description : {{detail.jobDescription}}</label>\r\n  </div>\r\n  <div class=\"emp-detail-row col-md-6\">\r\n    <label>Experience : {{detail.experience}}</label>\r\n  </div>\r\n  <div class=\"emp-detail-row col-md-6\">\r\n    <label>Location : {{detail.location}}</label>\r\n  </div>\r\n  <div class=\"emp-detail-row col-md-6\">\r\n    <label>Cost center : {{detail.costCenter}}</label>\r\n  </div>\r\n  <div class=\"emp-detail-row col-md-6\">\r\n    <label>Status : {{detail.status}}</label>\r\n  </div>\r\n  <div class=\"emp-detail-row col-md-6\">\r\n    <label>Employment Type : {{detail.employmentType}}</label>\r\n  </div>\r\n  <div class=\"emp-detail-row col-md-6\">\r\n    <label>company : {{detail.company}}</label>\r\n  </div>\r\n  <div class=\"emp-detail-row col-md-6\">\r\n    <label>Department : {{detail.department}}</label>\r\n  </div>\r\n  <div class=\"emp-detail-row col-md-6\">\r\n    <label>Sub Department : {{detail.subDepartment}}</label>\r\n  </div>\r\n  <div class=\"emp-detail-row col-md-6\">\r\n    <label>Probation EndDate : {{detail.probationEndDate}}</label>\r\n  </div>\r\n  <div class=\"emp-detail-row col-md-6\">\r\n    <label>Confirmation Date : {{detail.confirmationDate}}</label>\r\n  </div>\r\n  <div class=\"emp-detail-row col-md-6\">\r\n    <label>Region : {{detail.region}}</label>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/employee/employment-details/employment-details.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/employee/employment-details/employment-details.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".employement-details .emp-detail-row {\n  float: left; }\n"

/***/ }),

/***/ "./src/app/components/employee/employment-details/employment-details.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/employee/employment-details/employment-details.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EmploymentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploymentDetailsComponent", function() { return EmploymentDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmploymentDetailsComponent = /** @class */ (function () {
    function EmploymentDetailsComponent() {
        this.employeeDetails = [{
                "doj": "05/03/2018",
                "dob": "16/09/1990",
                "designation": "Solution Developer",
                "grade": "-",
                "department": "Delivery",
                "jobCategory": "",
                "jobDescription": "",
                "experience": "2.4",
                "location": "Pune",
                "costCenter": "India",
                "status": "Current",
                "employmentType": "Permanent",
                "company": "SpadeWorx",
                "probationEndDate": "05/09/2018",
                "confirmationDate": "10/09/2018",
                "subDepartment": "SharePoint",
                "region": "India"
            }];
    }
    EmploymentDetailsComponent.prototype.ngOnInit = function () {
    };
    EmploymentDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employment-details',
            template: __webpack_require__(/*! ./employment-details.component.html */ "./src/app/components/employee/employment-details/employment-details.component.html"),
            styles: [__webpack_require__(/*! ./employment-details.component.scss */ "./src/app/components/employee/employment-details/employment-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmploymentDetailsComponent);
    return EmploymentDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/employee/experience/experience.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/employee/experience/experience.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box\">\r\n    <h3 class=\"card-title\">Experience</h3>\r\n    <div class=\"experience-box\">\r\n        <ul class=\"experience-list\">\r\n            <li>\r\n                <div class=\"experience-user\">\r\n                    <div class=\"before-circle\"></div>\r\n                </div>\r\n                <div class=\"experience-content\">\r\n                    <div class=\"timeline-content\">\r\n                        <a href=\"#/\" class=\"name\">Web Designer at Zen Corporation</a>\r\n                        <span class=\"time\">Jan 2013 - Present (5 years 2 months)</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <div class=\"experience-user\">\r\n                    <div class=\"before-circle\"></div>\r\n                </div>\r\n                <div class=\"experience-content\">\r\n                    <div class=\"timeline-content\">\r\n                        <a href=\"#/\" class=\"name\">Web Designer at Zen Corporation</a>\r\n                        <span class=\"time\">Jan 2013 - Present (5 years 2 months)</span>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/employee/experience/experience.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/employee/experience/experience.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-box {\n  background-color: #fff;\n  border: 1px solid #ededed;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);\n  margin-bottom: 30px;\n  padding: 20px; }\n  .card-box .card-title {\n    color: #333;\n    font-size: 18px;\n    font-weight: normal;\n    margin-bottom: 20px; }\n  .card-box .experience-box {\n    position: relative; }\n  .card-box .experience-box .experience-list {\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      position: relative; }\n  .card-box .experience-box .experience-list li {\n        position: relative; }\n  .card-box .experience-box .experience-list li .experience-user {\n          background: #fff;\n          height: 10px;\n          left: 4px;\n          margin: 0;\n          padding: 0;\n          position: absolute;\n          top: 4px;\n          width: 10px; }\n  .card-box .experience-box .experience-list li .experience-user .before-circle {\n            background-color: #ddd;\n            border-radius: 50%;\n            height: 10px;\n            width: 10px; }\n  .card-box .experience-box .experience-list li .experience-content {\n          background-color: #fff;\n          margin: 0 0 20px 40px;\n          padding: 0;\n          position: relative; }\n  .card-box .experience-box .experience-list li .experience-content .timeline-content {\n            color: #9e9e9e; }\n  .card-box .experience-box .experience-list li .experience-content .timeline-content a.name {\n              color: #616161;\n              font-weight: bold; }\n  .card-box .experience-box .experience-list li .experience-content .timeline-content .time {\n              color: #bdbdbd;\n              display: block;\n              font-size: 12px;\n              line-height: 1.35; }\n  .card-box .experience-box .experience-list::before {\n      background: #ddd;\n      bottom: 0;\n      content: \"\";\n      left: 8px;\n      position: absolute;\n      top: 8px;\n      width: 2px; }\n  .card-box .skills > span {\n    border: 1px solid #ccc;\n    border-radius: 500px;\n    display: block;\n    margin-bottom: 10px;\n    padding: 6px 12px;\n    text-align: center;\n    color: #616161; }\n  .card-box .profile-preview .profile-img-wrap {\n    height: 150px;\n    width: 150px;\n    float: left; }\n  .card-box .profile-preview .profile-img-wrap .user-avatar {\n      font-size: 80px;\n      height: 150px;\n      width: 150px;\n      border-radius: 75px;\n      line-height: 60px;\n      background: #ccc;\n      color: #fff;\n      margin-right: 40px; }\n  .card-box .profile-preview .profile-img-wrap .user-avatar .anticon-user {\n        margin-top: 20px !important;\n        height: 150px;\n        width: 150px; }\n  .card-box .profile-preview .profile-img-wrap .profile-img {\n      width: 150px;\n      height: 150px;\n      cursor: pointer;\n      margin: 0 auto;\n      position: relative; }\n  .card-box .profile-preview .profile-basic .dashed-border {\n    border-right: 2px dashed #ccc; }\n  .card-box .profile-preview .profile-basic .profile-info-left .user-name {\n    color: #333; }\n  .card-box .profile-preview .profile-basic .profile-info-left .text-muted {\n    color: #777; }\n  .card-box .profile-preview .profile-basic .profile-info-left .staff-id {\n    margin-top: 5px; }\n  .card-box .profile-preview .profile-basic .personal-info {\n    list-style: none;\n    margin-bottom: 0;\n    padding: 0; }\n  .card-box .profile-preview .profile-basic .personal-info li {\n      margin-bottom: 10px; }\n  .card-box .profile-preview .profile-basic .personal-info li .title {\n        color: #515365;\n        float: left;\n        font-weight: 500;\n        margin-right: 30px;\n        width: 25%; }\n  .card-box .profile-preview .profile-basic .personal-info li .text {\n        color: #888da8;\n        display: block;\n        overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/components/employee/experience/experience.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/employee/experience/experience.component.ts ***!
  \************************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/components/employee/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.scss */ "./src/app/components/employee/experience/experience.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/components/employee/profile/profile.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/employee/profile/profile.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8\">\r\n            <h4 class=\"page-title\">My Profile</h4>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4 text-right m-b-30\">\r\n            <button nz-button [nzType]=\"'primary'\">Edit Profile</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-box\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"profile-preview\">\r\n                    <div class=\"profile-img-wrap\">\r\n                        <div class=\"user-avatar\">\r\n                            <i nz-icon type=\"user\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"profile-basic\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-5 dashed-border p-l-40\">\r\n                                <div class=\"profile-info-left\">\r\n                                    <h3 class=\"user-name m-t-0 m-b-0\">Mahendra Gohel</h3>\r\n                                    <small class=\"text-muted\">Solution Developer</small>\r\n                                    <div class=\"staff-id\">Employee ID : S1070423</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-7 p-l-40\">\r\n                                <ul class=\"personal-info\">\r\n                                    <li>\r\n                                        <span class=\"title\">Phone:</span>\r\n                                        <span class=\"text\">\r\n                                            <a href=\"\">8000092239</a>\r\n                                        </span>\r\n                                    </li>\r\n                                    <li>\r\n                                        <span class=\"title\">Email:</span>\r\n                                        <span class=\"text\">\r\n                                            <a href=\"\">mahendra.gohel@spadeworx.com</a>\r\n                                        </span>\r\n                                    </li>\r\n                                    <li>\r\n                                        <span class=\"title\">Birthday:</span>\r\n                                        <span class=\"text\">16th Sep</span>\r\n                                    </li>\r\n                                    <li>\r\n                                        <span class=\"title\">Address:</span>\r\n                                        <span class=\"text\">Hinjewadi Pune - 411057</span>\r\n                                    </li>\r\n                                    <li>\r\n                                        <span class=\"title\">Gender:</span>\r\n                                        <span class=\"text\">Male</span>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n            <app-skills></app-skills>\r\n        </div>\r\n        <div class=\"col-md-9\">\r\n            <app-education></app-education>\r\n            <app-experience></app-experience>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <app-address></app-address>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <app-address></app-address>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <app-address></app-address>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <app-document-and-ids></app-document-and-ids>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <app-reporting-structure></app-reporting-structure>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/employee/profile/profile.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/employee/profile/profile.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile .card-box {\n  background-color: #fff;\n  border: 1px solid #ededed;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);\n  margin-bottom: 30px;\n  padding: 20px; }\n  .profile .card-box .card-title {\n    color: #333;\n    font-size: 18px;\n    font-weight: normal;\n    margin-bottom: 20px; }\n  .profile .card-box .experience-box {\n    position: relative; }\n  .profile .card-box .experience-box .experience-list {\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      position: relative; }\n  .profile .card-box .experience-box .experience-list li {\n        position: relative; }\n  .profile .card-box .experience-box .experience-list li .experience-user {\n          background: #fff;\n          height: 10px;\n          left: 4px;\n          margin: 0;\n          padding: 0;\n          position: absolute;\n          top: 4px;\n          width: 10px; }\n  .profile .card-box .experience-box .experience-list li .experience-user .before-circle {\n            background-color: #ddd;\n            border-radius: 50%;\n            height: 10px;\n            width: 10px; }\n  .profile .card-box .experience-box .experience-list li .experience-content {\n          background-color: #fff;\n          margin: 0 0 20px 40px;\n          padding: 0;\n          position: relative; }\n  .profile .card-box .experience-box .experience-list li .experience-content .timeline-content {\n            color: #9e9e9e; }\n  .profile .card-box .experience-box .experience-list li .experience-content .timeline-content a.name {\n              color: #616161;\n              font-weight: bold; }\n  .profile .card-box .experience-box .experience-list li .experience-content .timeline-content .time {\n              color: #bdbdbd;\n              display: block;\n              font-size: 12px;\n              line-height: 1.35; }\n  .profile .card-box .experience-box .experience-list::before {\n      background: #ddd;\n      bottom: 0;\n      content: \"\";\n      left: 8px;\n      position: absolute;\n      top: 8px;\n      width: 2px; }\n  .profile .card-box .skills > span {\n    border: 1px solid #ccc;\n    border-radius: 500px;\n    display: block;\n    margin-bottom: 10px;\n    padding: 6px 12px;\n    text-align: center;\n    color: #616161; }\n  .profile .card-box .profile-preview .profile-img-wrap {\n    height: 150px;\n    width: 150px;\n    float: left; }\n  .profile .card-box .profile-preview .profile-img-wrap .user-avatar {\n      font-size: 80px;\n      height: 150px;\n      width: 150px;\n      border-radius: 75px;\n      line-height: 60px;\n      background: #ccc;\n      color: #fff;\n      margin-right: 40px; }\n  .profile .card-box .profile-preview .profile-img-wrap .user-avatar .anticon-user {\n        margin-top: 20px !important;\n        height: 150px;\n        width: 150px; }\n  .profile .card-box .profile-preview .profile-img-wrap .profile-img {\n      width: 150px;\n      height: 150px;\n      cursor: pointer;\n      margin: 0 auto;\n      position: relative; }\n  .profile .card-box .profile-preview .profile-basic .dashed-border {\n    border-right: 2px dashed #ccc; }\n  .profile .card-box .profile-preview .profile-basic .profile-info-left .user-name {\n    color: #333; }\n  .profile .card-box .profile-preview .profile-basic .profile-info-left .text-muted {\n    color: #777; }\n  .profile .card-box .profile-preview .profile-basic .profile-info-left .staff-id {\n    margin-top: 5px; }\n  .profile .card-box .profile-preview .profile-basic .personal-info {\n    list-style: none;\n    margin-bottom: 0;\n    padding: 0; }\n  .profile .card-box .profile-preview .profile-basic .personal-info li {\n      margin-bottom: 10px; }\n  .profile .card-box .profile-preview .profile-basic .personal-info li .title {\n        color: #515365;\n        float: left;\n        font-weight: 500;\n        margin-right: 30px;\n        width: 25%; }\n  .profile .card-box .profile-preview .profile-basic .personal-info li .text {\n        color: #888da8;\n        display: block;\n        overflow: hidden; }\n  .profile .user-profile {\n  display: inline-block; }\n  .profile .user-profile .profile-info-left {\n    border-right: 2px dashed gray; }\n  .profile .user-profile .personal-info {\n    list-style: none;\n    margin-bottom: 0;\n    padding: 0; }\n  .profile .user-profile .user-avatar {\n    font-size: 80px;\n    height: 150px;\n    width: 150px;\n    border-radius: 75px;\n    line-height: 60px;\n    background: gray;\n    color: #fff;\n    margin-right: 40px; }\n  .profile .user-profile .user-avatar .anticon-user {\n      margin-top: 20px !important;\n      height: 150px;\n      width: 120px; }\n  .profile .user-profile .user-details {\n    float: left;\n    margin-left: 20px; }\n  .profile .employee-details {\n  padding: 10px;\n  border: 1px solid #dadada;\n  border-radius: 1px;\n  margin-top: 20px;\n  margin-bottom: 20px; }\n  .profile .employee-details .employee-number,\n  .profile .employee-details .job-desc, .profile .employee-details .designation {\n    vertical-align: top;\n    display: inline-block;\n    width: 33%; }\n"

/***/ }),

/***/ "./src/app/components/employee/profile/profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/employee/profile/profile.component.ts ***!
  \******************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/employee/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/employee/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/employee/reporting-structure/reporting-structure.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/employee/reporting-structure/reporting-structure.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box\">\r\n  <h3 class=\"card-title\">Reporting Structure</h3>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/employee/reporting-structure/reporting-structure.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/components/employee/reporting-structure/reporting-structure.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-box {\n  background-color: #fff;\n  border: 1px solid #ededed;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);\n  margin-bottom: 30px;\n  padding: 20px; }\n  .card-box .card-title {\n    color: #333;\n    font-size: 18px;\n    font-weight: normal;\n    margin-bottom: 20px; }\n  .card-box .experience-box {\n    position: relative; }\n  .card-box .experience-box .experience-list {\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      position: relative; }\n  .card-box .experience-box .experience-list li {\n        position: relative; }\n  .card-box .experience-box .experience-list li .experience-user {\n          background: #fff;\n          height: 10px;\n          left: 4px;\n          margin: 0;\n          padding: 0;\n          position: absolute;\n          top: 4px;\n          width: 10px; }\n  .card-box .experience-box .experience-list li .experience-user .before-circle {\n            background-color: #ddd;\n            border-radius: 50%;\n            height: 10px;\n            width: 10px; }\n  .card-box .experience-box .experience-list li .experience-content {\n          background-color: #fff;\n          margin: 0 0 20px 40px;\n          padding: 0;\n          position: relative; }\n  .card-box .experience-box .experience-list li .experience-content .timeline-content {\n            color: #9e9e9e; }\n  .card-box .experience-box .experience-list li .experience-content .timeline-content a.name {\n              color: #616161;\n              font-weight: bold; }\n  .card-box .experience-box .experience-list li .experience-content .timeline-content .time {\n              color: #bdbdbd;\n              display: block;\n              font-size: 12px;\n              line-height: 1.35; }\n  .card-box .experience-box .experience-list::before {\n      background: #ddd;\n      bottom: 0;\n      content: \"\";\n      left: 8px;\n      position: absolute;\n      top: 8px;\n      width: 2px; }\n  .card-box .skills > span {\n    border: 1px solid #ccc;\n    border-radius: 500px;\n    display: block;\n    margin-bottom: 10px;\n    padding: 6px 12px;\n    text-align: center;\n    color: #616161; }\n  .card-box .profile-preview .profile-img-wrap {\n    height: 150px;\n    width: 150px;\n    float: left; }\n  .card-box .profile-preview .profile-img-wrap .user-avatar {\n      font-size: 80px;\n      height: 150px;\n      width: 150px;\n      border-radius: 75px;\n      line-height: 60px;\n      background: #ccc;\n      color: #fff;\n      margin-right: 40px; }\n  .card-box .profile-preview .profile-img-wrap .user-avatar .anticon-user {\n        margin-top: 20px !important;\n        height: 150px;\n        width: 150px; }\n  .card-box .profile-preview .profile-img-wrap .profile-img {\n      width: 150px;\n      height: 150px;\n      cursor: pointer;\n      margin: 0 auto;\n      position: relative; }\n  .card-box .profile-preview .profile-basic .dashed-border {\n    border-right: 2px dashed #ccc; }\n  .card-box .profile-preview .profile-basic .profile-info-left .user-name {\n    color: #333; }\n  .card-box .profile-preview .profile-basic .profile-info-left .text-muted {\n    color: #777; }\n  .card-box .profile-preview .profile-basic .profile-info-left .staff-id {\n    margin-top: 5px; }\n  .card-box .profile-preview .profile-basic .personal-info {\n    list-style: none;\n    margin-bottom: 0;\n    padding: 0; }\n  .card-box .profile-preview .profile-basic .personal-info li {\n      margin-bottom: 10px; }\n  .card-box .profile-preview .profile-basic .personal-info li .title {\n        color: #515365;\n        float: left;\n        font-weight: 500;\n        margin-right: 30px;\n        width: 25%; }\n  .card-box .profile-preview .profile-basic .personal-info li .text {\n        color: #888da8;\n        display: block;\n        overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/components/employee/reporting-structure/reporting-structure.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/employee/reporting-structure/reporting-structure.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ReportingStructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingStructureComponent", function() { return ReportingStructureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportingStructureComponent = /** @class */ (function () {
    function ReportingStructureComponent() {
    }
    ReportingStructureComponent.prototype.ngOnInit = function () {
    };
    ReportingStructureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reporting-structure',
            template: __webpack_require__(/*! ./reporting-structure.component.html */ "./src/app/components/employee/reporting-structure/reporting-structure.component.html"),
            styles: [__webpack_require__(/*! ./reporting-structure.component.scss */ "./src/app/components/employee/reporting-structure/reporting-structure.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportingStructureComponent);
    return ReportingStructureComponent;
}());



/***/ }),

/***/ "./src/app/components/employee/skills/skills.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/employee/skills/skills.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box\">\r\n    <h3 class=\"card-title\">Skills</h3>\r\n    <div class=\"skills\">\r\n        <span>Java</span>\r\n        <span>Spring Boot</span>\r\n        <span>Hibernate</span>\r\n        <span>JPA</span>\r\n        <span>Rest Services</span>\r\n        <span>Spring MVC</span>\r\n        <span>J2EE</span>\r\n        <span>SharePoint</span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/employee/skills/skills.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/employee/skills/skills.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-box {\n  background-color: #fff;\n  border: 1px solid #ededed;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);\n  margin-bottom: 30px;\n  padding: 20px;\n  height: 94% !important; }\n  .card-box .card-title {\n    color: #333;\n    font-size: 18px;\n    font-weight: normal;\n    margin-bottom: 20px; }\n  .card-box .experience-box {\n    position: relative; }\n  .card-box .experience-box .experience-list {\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      position: relative; }\n  .card-box .experience-box .experience-list li {\n        position: relative; }\n  .card-box .experience-box .experience-list li .experience-user {\n          background: #fff;\n          height: 10px;\n          left: 4px;\n          margin: 0;\n          padding: 0;\n          position: absolute;\n          top: 4px;\n          width: 10px; }\n  .card-box .experience-box .experience-list li .experience-user .before-circle {\n            background-color: #ddd;\n            border-radius: 50%;\n            height: 10px;\n            width: 10px; }\n  .card-box .experience-box .experience-list li .experience-content {\n          background-color: #fff;\n          margin: 0 0 20px 40px;\n          padding: 0;\n          position: relative; }\n  .card-box .experience-box .experience-list li .experience-content .timeline-content {\n            color: #9e9e9e; }\n  .card-box .experience-box .experience-list li .experience-content .timeline-content a.name {\n              color: #616161;\n              font-weight: bold; }\n  .card-box .experience-box .experience-list li .experience-content .timeline-content .time {\n              color: #bdbdbd;\n              display: block;\n              font-size: 12px;\n              line-height: 1.35; }\n  .card-box .experience-box .experience-list::before {\n      background: #ddd;\n      bottom: 0;\n      content: \"\";\n      left: 8px;\n      position: absolute;\n      top: 8px;\n      width: 2px; }\n  .card-box .skills > span {\n    border: 1px solid #ccc;\n    border-radius: 500px;\n    display: block;\n    margin-bottom: 10px;\n    padding: 6px 12px;\n    text-align: center;\n    color: #616161; }\n  .card-box .profile-preview .profile-img-wrap {\n    height: 150px;\n    width: 150px;\n    float: left; }\n  .card-box .profile-preview .profile-img-wrap .user-avatar {\n      font-size: 80px;\n      height: 150px;\n      width: 150px;\n      border-radius: 75px;\n      line-height: 60px;\n      background: #ccc;\n      color: #fff;\n      margin-right: 40px; }\n  .card-box .profile-preview .profile-img-wrap .user-avatar .anticon-user {\n        margin-top: 20px !important;\n        height: 150px;\n        width: 150px; }\n  .card-box .profile-preview .profile-img-wrap .profile-img {\n      width: 150px;\n      height: 150px;\n      cursor: pointer;\n      margin: 0 auto;\n      position: relative; }\n  .card-box .profile-preview .profile-basic .dashed-border {\n    border-right: 2px dashed #ccc; }\n  .card-box .profile-preview .profile-basic .profile-info-left .user-name {\n    color: #333; }\n  .card-box .profile-preview .profile-basic .profile-info-left .text-muted {\n    color: #777; }\n  .card-box .profile-preview .profile-basic .profile-info-left .staff-id {\n    margin-top: 5px; }\n  .card-box .profile-preview .profile-basic .personal-info {\n    list-style: none;\n    margin-bottom: 0;\n    padding: 0; }\n  .card-box .profile-preview .profile-basic .personal-info li {\n      margin-bottom: 10px; }\n  .card-box .profile-preview .profile-basic .personal-info li .title {\n        color: #515365;\n        float: left;\n        font-weight: 500;\n        margin-right: 30px;\n        width: 25%; }\n  .card-box .profile-preview .profile-basic .personal-info li .text {\n        color: #888da8;\n        display: block;\n        overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/components/employee/skills/skills.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/employee/skills/skills.component.ts ***!
  \****************************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/components/employee/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/components/employee/skills/skills.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/components/forgotpass/forgotpass.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/forgotpass/forgotpass.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"validateForm\" class=\"login-form\" (ngSubmit)=\"submitForm()\">\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <nz-input-group [nzPrefix]=\"prefixUser\">\r\n        <input type=\"text\" nz-input formControlName=\"userName\" placeholder=\"Email or Username\">\r\n      </nz-input-group>\r\n      <nz-form-explain *ngIf=\"validateForm.get('userName').dirty && validateForm.get('userName').errors\">Please input your email or username!</nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\">Submit</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n<ng-template #prefixUser><i nz-icon type=\"user\"></i></ng-template>"

/***/ }),

/***/ "./src/app/components/forgotpass/forgotpass.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/forgotpass/forgotpass.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\n  max-width: 400px;\n  margin: auto; }\n\n.login-form-forgot {\n  float: right;\n  color: #1890ff !important; }\n\n.login-form-button {\n  width: 30%; }\n"

/***/ }),

/***/ "./src/app/components/forgotpass/forgotpass.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/forgotpass/forgotpass.component.ts ***!
  \***************************************************************/
/*! exports provided: ForgotpassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassComponent", function() { return ForgotpassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotpassComponent = /** @class */ (function () {
    function ForgotpassComponent(fb) {
        this.fb = fb;
    }
    ForgotpassComponent.prototype.submitForm = function () {
        for (var i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    };
    ForgotpassComponent.prototype.ngOnInit = function () {
        this.validateForm = this.fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            remember: [true]
        });
    };
    ForgotpassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgotpass',
            template: __webpack_require__(/*! ./forgotpass.component.html */ "./src/app/components/forgotpass/forgotpass.component.html"),
            styles: [__webpack_require__(/*! ./forgotpass.component.scss */ "./src/app/components/forgotpass/forgotpass.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ForgotpassComponent);
    return ForgotpassComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-header\">\r\n  <div class=\"header-container\">\r\n    <a routerLink=\"\">\r\n        <div class=\"app-title\"></div>\r\n    </a>\r\n    <ul [style.visibility]=\"isAuthenticated ? 'hidden':'visible'\" nz-menu [nzMode]=\"'horizontal'\" class=\"nav-menu\">\r\n        <li routerLink=\"/login\" nz-menu-item class=\"header-icon\">Login</li>\r\n    </ul>\r\n    <ul  [style.visibility]=\"isAuthenticated ? 'visible' : 'hidden'\" nz-menu [nzMode]=\"'horizontal'\" class=\"nav-menu\">\r\n      <li nz-menu-item class=\"header-icon\"><i nz-icon type=\"home\" style=\"font-size: 21px;\"></i></li>\r\n      <li nz-submenu class=\"header-icon\">\r\n        <span title><i nz-icon type=\"user\" style=\"font-size: 21px;\"></i></span>\r\n        <ul>\r\n          <li routerLink=\"/designations\" nz-menu-item>Designations</li>\r\n          <li routerLink=\"/departments\" nz-menu-item>Departments</li>\r\n        </ul>\r\n      </li>\r\n      <li nz-menu-item class=\"header-icon\"><i nz-icon type=\"setting\" style=\"font-size: 21px;\"></i></li>\r\n      \r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-header {\n  width: 100%;\n  box-shadow: 0 2px 8px #f0f1f2;\n  z-index: 10;\n  padding: 0;\n  height: 64px;\n  line-height: 64px;\n  background-color: #1976D2;\n  position: fixed; }\n  .app-header .header-container {\n    max-width: 1200px;\n    margin-left: auto;\n    margin-right: auto;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .app-header .header-container .app-title {\n      width: 180px;\n      height: 60px;\n      display: inline-block;\n      background: url(\"/assets/img/app-logo.png\"); }\n  .app-header .header-container .app-title a {\n        text-decoration: none;\n        color: #f0f1f2; }\n  .app-header .header-container ul {\n      list-style-type: none;\n      padding: 0;\n      margin: 0;\n      float: right; }\n  .app-header .header-container ul .header-icon {\n        padding: 10px !important; }\n  .app-header .header-container ul li {\n        float: left;\n        height: 64px; }\n  .app-header .header-container ul li a {\n          color: #fff;\n          padding: 20px;\n          text-decoration: none;\n          font-weight: 600; }\n  .app-header .header-container ul li .activated {\n          background-color: #00a8ff; }\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_AuthService) {
        this._AuthService = _AuthService;
        this.isAuthenticated = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._AuthService.jwtToken.subscribe(function (jwtToken) {
            if (jwtToken != "") {
                _this.isAuthenticated = true;
            }
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\r\n  <div class=\"login-form-wrapper\">\r\n    <!--<div class=\"account-logo\">\r\n      <a routerLink=\"/\">\r\n        <img src=\"/assets/img/app-logo.png\" alt=\"SpadeWorx\">\r\n      </a>\r\n    </div>-->\r\n    <form nz-form [formGroup]=\"validateForm\" class=\"login-form\" (ngSubmit)=\"submitForm()\">\r\n      <h3>Login</h3>\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group [nzPrefix]=\"prefixUser\">\r\n            <input type=\"text\" nz-input formControlName=\"usernameOrEmail\" placeholder=\"username Or Email\">\r\n          </nz-input-group>\r\n          <nz-form-explain *ngIf=\"validateForm.get('usernameOrEmail').dirty && validateForm.get('usernameOrEmail').errors\">Please input your username!</nz-form-explain>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group [nzPrefix]=\"prefixLock\">\r\n            <input type=\"password\" nz-input formControlName=\"password\" placeholder=\"Password\">\r\n          </nz-input-group>\r\n          <nz-form-explain *ngIf=\"validateForm.get('password').dirty && validateForm.get('password').errors\">Please input your Password!</nz-form-explain>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <a routerLink=\"/forgotpass\" class=\"login-form-forgot\" class=\"login-form-forgot\">Forgot password?</a>\r\n          <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\">Log in</button>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n    </form>\r\n    <ng-template #prefixUser>\r\n      <i nz-icon type=\"user\"></i>\r\n    </ng-template>\r\n    <ng-template #prefixLock>\r\n      <i nz-icon type=\"lock\"></i>\r\n    </ng-template>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-box {\n  width: 400px;\n  margin: 0 auto;\n  box-shadow: 0 6px 15px rgba(36, 37, 38, 0.08); }\n  .login-box .login-form-wrapper {\n    background-color: #fff;\n    padding: 30px; }\n  .login-box .account-logo {\n    margin-bottom: 20px;\n    text-align: center;\n    display: none; }\n  .login-box .login-form {\n    max-width: 300px;\n    margin: auto; }\n  .login-box .login-form-forgot {\n    float: right; }\n  .login-box .login-form-button {\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_UserModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/UserModel */ "./src/app/models/UserModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, _AuthService, router) {
        this.fb = fb;
        this._AuthService = _AuthService;
        this.router = router;
    }
    LoginComponent.prototype.submitForm = function () {
        var _this = this;
        for (var i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        if (this.validateForm.status === "VALID") {
            this.User = new _models_UserModel__WEBPACK_IMPORTED_MODULE_4__["User"](this.validateForm.value);
            this._AuthService.userAuthentication(this.User).subscribe(function (success) {
                console.log(success);
                _this.router.navigate(["/myprofile"]);
            }, function (error) {
                console.log(error);
            });
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.validateForm = this.fb.group({
            usernameOrEmail: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, _data) {
        this.router = router;
        this._data = _data;
        this.isAuthenticated = false;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        this._data.jwtToken.subscribe(function (jwtToken) {
            if (jwtToken != "") {
                _this.isAuthenticated = true;
            }
            else {
                _this.isAuthenticated = false;
            }
        });
        if (this.isAuthenticated) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/models/DepartmentModel.ts":
/*!*******************************************!*\
  !*** ./src/app/models/DepartmentModel.ts ***!
  \*******************************************/
/*! exports provided: Department */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Department", function() { return Department; });
var Department = /** @class */ (function () {
    function Department(Data) {
        if (Data) {
            this.id = Data.id;
            this.name = Data.name;
        }
    }
    return Department;
}());



/***/ }),

/***/ "./src/app/models/DesignationModel.ts":
/*!********************************************!*\
  !*** ./src/app/models/DesignationModel.ts ***!
  \********************************************/
/*! exports provided: Designation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Designation", function() { return Designation; });
var Designation = /** @class */ (function () {
    function Designation(Data) {
        if (Data) {
            this.designationName = Data.designationName;
            this.departmentId = Data.departmentId;
        }
    }
    return Designation;
}());



/***/ }),

/***/ "./src/app/models/UserModel.ts":
/*!*************************************!*\
  !*** ./src/app/models/UserModel.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(Data) {
        if (Data) {
            this.usernameOrEmail = Data.usernameOrEmail;
            this.password = Data.password;
        }
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/ConfigService.ts":
/*!*******************************************!*\
  !*** ./src/app/services/ConfigService.ts ***!
  \*******************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = /** @class */ (function () {
    function ConfigService(injector) {
        this.injector = injector;
        this.configUrl = '/assets/config/config.json';
    }
    ConfigService.prototype.loadAppConfig = function () {
        var _this = this;
        var http = this.injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]);
        return http.get(this.configUrl)
            .toPromise()
            .then(function (data) {
            _this.appConfig = data;
        });
    };
    Object.defineProperty(ConfigService.prototype, "Config", {
        get: function () {
            return this.appConfig;
        },
        enumerable: true,
        configurable: true
    });
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ConfigService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfigService */ "./src/app/services/ConfigService.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_Operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, _config) {
        this.http = http;
        this._config = _config;
        this.authToken = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.jwtToken = this.authToken.asObservable();
        this.ApiUrl = _config.Config.ApiUrl;
    }
    AuthService.prototype.userAuthentication = function (Data) {
        var _this = this;
        return this.http.post(this.ApiUrl + "/auth/signin", Data).pipe(Object(rxjs_Operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            if (data && data.payload.accessToken) {
                localStorage.setItem("user", JSON.stringify(data));
                _this.setAuthToken(data.payload.accessToken);
            }
            return data;
        }));
    };
    AuthService.prototype.setAuthToken = function (token) {
        this.authToken.next(token);
    };
    AuthService.prototype.deleteAuthToken = function () {
        this.authToken.next('');
    };
    AuthService.prototype.getAuthToken = function () {
        return this.authToken;
    };
    AuthService.prototype.addDesignation = function (Data) {
        return this.http.post(this.ApiUrl + "/designation/new?departmentId=" + Data.departmentId, { "name": Data.designationName });
    };
    AuthService.prototype.getAllDesignation = function () {
        return this.http.get(this.ApiUrl + "/designation/all");
    };
    AuthService.prototype.addDepartment = function (Data) {
        return this.http.post(this.ApiUrl + "/departments/new", { "name": Data.name });
    };
    AuthService.prototype.getAllDepartments = function () {
        return this.http.get(this.ApiUrl + "/departments/all");
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _ConfigService__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/services/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser && currentUser.payload.accessToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.payload.accessToken
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\Angular-Example\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map