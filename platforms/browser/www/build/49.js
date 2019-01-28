webpackJsonp([49],{

/***/ 1870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@ionic-native/splash-screen/index.js
var splash_screen = __webpack_require__(665);

// EXTERNAL MODULE: ./src/providers/app.ts
var app = __webpack_require__(11);

// EXTERNAL MODULE: ./src/providers/init.ts
var init = __webpack_require__(154);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(2);

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__(58);

// EXTERNAL MODULE: ./src/core/login/providers/helper.ts
var helper = __webpack_require__(125);

// CONCATENATED MODULE: ./src/core/login/pages/init/init.ts










/**
 * Page that displays a "splash screen" while the app is being initialized.
 */
var init_CoreLoginInitPage = /*@__PURE__*/ (function () {
    function CoreLoginInitPage(navCtrl, appProvider, initDelegate, sitesProvider, loginHelper, splashScreen) {
        this.navCtrl = navCtrl;
        this.appProvider = appProvider;
        this.initDelegate = initDelegate;
        this.sitesProvider = sitesProvider;
        this.loginHelper = loginHelper;
        this.splashScreen = splashScreen;
    }
    /**
     * View loaded.
     */
    CoreLoginInitPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Wait for the app to be ready.
        this.initDelegate.ready().then(function () {
            // Check if there was a pending redirect.
            var redirectData = _this.appProvider.getRedirect();
            if (redirectData.siteId && redirectData.page) {
                // Unset redirect data.
                _this.appProvider.storeRedirect('', '', '');
                // Only accept the redirect if it was stored less than 20 seconds ago.
                if (Date.now() - redirectData.timemodified < 20000) {
                    if (redirectData.siteId != constants["a" /* CoreConstants */].NO_SITE_ID) {
                        // The redirect is pointing to a site, load it.
                        return _this.sitesProvider.loadSite(redirectData.siteId).then(function () {
                            if (!_this.loginHelper.isSiteLoggedOut(redirectData.page, redirectData.params)) {
                                return _this.navCtrl.setRoot(redirectData.page, redirectData.params, { animate: false });
                            }
                        }).catch(function () {
                            // Site doesn't exist.
                            return _this.loadPage();
                        });
                    }
                    else {
                        // No site to load, just open the state.
                        return _this.navCtrl.setRoot(redirectData.page, redirectData.params, { animate: false });
                    }
                }
            }
            return _this.loadPage();
        }).then(function () {
            // If we hide the splash screen now, the init view is still seen for an instant. Wait a bit to make sure it isn't seen.
            setTimeout(function () {
                _this.splashScreen.hide();
            }, 100);
        });
    };
    /**
     * Load the right page.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    CoreLoginInitPage.prototype.loadPage = function () {
        var _this = this;
        if (this.sitesProvider.isLoggedIn()) {
            if (!this.loginHelper.isSiteLoggedOut()) {
                // User is logged in, go to site initial page.
                return this.loginHelper.goToSiteInitialPage();
            }
            else {
                // The site is marked as logged out. Logout and try again.
                return this.sitesProvider.logout().then(function () {
                    return _this.loadPage();
                });
            }
        }
        else {
            return this.sitesProvider.hasSites().then(function (hasSites) {
                if (hasSites) {
                    return _this.navCtrl.setRoot('CoreLoginSitesPage');
                }
                else {
                    return _this.loginHelper.goToAddSite(true);
                }
            });
        }
    };
    return CoreLoginInitPage;
}());





// CONCATENATED MODULE: ./src/core/login/pages/init/init.module.ts




var CoreLoginInitPageModule = /*@__PURE__*/ (function () {
    function CoreLoginInitPageModule() {
    }
    return CoreLoginInitPageModule;
}());





// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory.js
var action_sheet_component_ngfactory = __webpack_require__(1281);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-component.ngfactory.js
var alert_component_ngfactory = __webpack_require__(1282);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.ngfactory.js
var app_root_ngfactory = __webpack_require__(1283);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-component.ngfactory.js
var loading_component_ngfactory = __webpack_require__(1284);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-component.ngfactory.js
var modal_component_ngfactory = __webpack_require__(1285);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-component.ngfactory.js + 1 modules
var picker_component_ngfactory = __webpack_require__(1286);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-component.ngfactory.js
var popover_component_ngfactory = __webpack_require__(1287);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select-popover-component.ngfactory.js
var select_popover_component_ngfactory = __webpack_require__(1288);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-component.ngfactory.js
var toast_component_ngfactory = __webpack_require__(1289);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(178);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app_app = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/spinner/spinner.ngfactory.js
var spinner_ngfactory = __webpack_require__(180);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/spinner/spinner.js
var spinner = __webpack_require__(135);

// CONCATENATED MODULE: ./src/core/login/pages/init/init.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_config_config,ionic_angular_platform_platform,ionic_angular_platform_dom_controller,ionic_angular_components_app_app,ionic_angular_platform_keyboard,ionic_angular_navigation_view_controller,ionic_angular_navigation_nav_controller,_.._.._.._.._node_modules_ionic_angular_components_spinner_spinner.ngfactory,ionic_angular_components_spinner_spinner,_init,_.._.._.._providers_app,_.._.._.._providers_init,_.._.._.._providers_sites,_.._providers_helper,_ionic_native_splash_screen_index PURE_IMPORTS_END */


















var styles_CoreLoginInitPage = [];
var RenderType_CoreLoginInitPage = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreLoginInitPage, data: {} });

function View_CoreLoginInitPage_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 13, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_15" /* ɵdid */](1, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["K" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["D" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, 1, 9, "div", [["class", "core-bglogo"]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_16" /* ɵeld */](5, 0, null, null, 6, "div", [["class", "core-logo"]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, null, 0, "img", [["src", "assets/img/splash_logo.png"]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](9, 0, null, null, 1, "ion-spinner", [], [[2, "spinner-paused", null]], null, null, spinner_ngfactory["b" /* View_Spinner_0 */], spinner_ngfactory["a" /* RenderType_Spinner */])), core["_15" /* ɵdid */](10, 114688, null, 0, spinner["a" /* Spinner */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { _ck(_v, 10, 0); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 1).statusbarPadding; var currVal_1 = core["_29" /* ɵnov */](_v, 1)._hasRefresher; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = core["_29" /* ɵnov */](_v, 10)._paused; _ck(_v, 9, 0, currVal_2); }); }
function View_CoreLoginInitPage_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "page-core-login-init", [], null, null, null, View_CoreLoginInitPage_0, RenderType_CoreLoginInitPage)), core["_15" /* ɵdid */](1, 49152, null, 0, init_CoreLoginInitPage, [nav_controller["a" /* NavController */], app["a" /* CoreAppProvider */], init["a" /* CoreInitDelegate */], sites["a" /* CoreSitesProvider */], helper["a" /* CoreLoginHelperProvider */], splash_screen["a" /* SplashScreen */]], null, null)], null, null); }
var CoreLoginInitPageNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("page-core-login-init", init_CoreLoginInitPage, View_CoreLoginInitPage_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/ionic-angular/module.js
var ionic_angular_module = __webpack_require__(634);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(237);

// CONCATENATED MODULE: ./src/core/login/pages/init/init.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginInitPageModuleNgFactory", function() { return CoreLoginInitPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_init.module,_.._.._.._.._node_modules_ionic_angular_components_action_sheet_action_sheet_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_alert_alert_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_app_app_root.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_loading_loading_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_modal_modal_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_picker_picker_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_popover_popover_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_select_select_popover_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_toast_toast_component.ngfactory,_init.ngfactory,_angular_common,_angular_forms,ionic_angular_module,ionic_angular_util_module_loader,_init PURE_IMPORTS_END */

















var CoreLoginInitPageModuleNgFactory = /*@__PURE__*/ core["_13" /* ɵcmf */](CoreLoginInitPageModule, [], function (_l) { return core["_25" /* ɵmod */]([core["_26" /* ɵmpd */](512, core["n" /* ComponentFactoryResolver */], core["_6" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], CoreLoginInitPageNgFactory]], [3, core["n" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["_26" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["v" /* ɵa */]]]), core["_26" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_26" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_26" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_26" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_26" /* ɵmpd */](512, CoreLoginInitPageModule, CoreLoginInitPageModule, []), core["_26" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], init_CoreLoginInitPage, [])]); });






/***/ })

});
//# sourceMappingURL=49.js.map