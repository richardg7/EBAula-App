webpackJsonp([9],{

/***/ 1888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(5);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(29);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(2);

// EXTERNAL MODULE: ./src/core/course/providers/helper.ts
var helper = __webpack_require__(44);

// EXTERNAL MODULE: ./src/core/sitehome/components/index/index.ts
var index = __webpack_require__(1303);

// CONCATENATED MODULE: ./src/core/sitehome/pages/index/index.ts







/**
 * Page that displays site home index.
 */
var CoreSiteHomeIndexPage = /*@__PURE__*/ (function () {
    function CoreSiteHomeIndexPage(navParams, navCtrl, courseHelper, sitesProvider) {
        var module = navParams.get('module');
        if (module) {
            courseHelper.openModule(navCtrl, module, sitesProvider.getCurrentSite().getSiteHomeId());
        }
    }
    return CoreSiteHomeIndexPage;
}());





// EXTERNAL MODULE: ./src/core/sitehome/components/components.module.ts
var components_module = __webpack_require__(1312);

// CONCATENATED MODULE: ./src/core/sitehome/pages/index/index.module.ts







var CoreSiteHomeIndexPageModule = /*@__PURE__*/ (function () {
    function CoreSiteHomeIndexPageModule() {
    }
    return CoreSiteHomeIndexPageModule;
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

// EXTERNAL MODULE: ./src/components/context-menu/context-menu-popover.ngfactory.js
var context_menu_popover_ngfactory = __webpack_require__(1292);

// EXTERNAL MODULE: ./src/components/course-picker-menu/course-picker-menu-popover.ngfactory.js
var course_picker_menu_popover_ngfactory = __webpack_require__(1293);

// EXTERNAL MODULE: ./src/components/recaptcha/recaptchamodal.ngfactory.js
var recaptchamodal_ngfactory = __webpack_require__(1294);

// EXTERNAL MODULE: ./src/core/course/components/unsupported-module/unsupported-module.ngfactory.js
var unsupported_module_ngfactory = __webpack_require__(1295);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(420);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(1290);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(191);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(22);

// EXTERNAL MODULE: ./src/directives/back-button.ts
var back_button = __webpack_require__(635);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(1291);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(326);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(236);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(178);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher.js
var refresher = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.ngfactory.js
var refresher_content_ngfactory = __webpack_require__(192);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.js
var refresher_content = __webpack_require__(145);

// EXTERNAL MODULE: ./src/core/sitehome/components/index/index.ngfactory.js + 5 modules
var index_ngfactory = __webpack_require__(1916);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/core/course/providers/course.ts
var course = __webpack_require__(16);

// EXTERNAL MODULE: ./src/core/course/providers/module-prefetch-delegate.ts
var module_prefetch_delegate = __webpack_require__(52);

// EXTERNAL MODULE: ./src/core/sitehome/providers/sitehome.ts
var sitehome = __webpack_require__(217);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(60);

// CONCATENATED MODULE: ./src/core/sitehome/pages/index/index.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,ionic_angular_components_toolbar_toolbar_header,ionic_angular_config_config,ionic_angular_navigation_view_controller,_.._.._.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,_.._.._.._directives_back_button,ionic_angular_platform_platform,_ngx_translate_core_src_translate.service,_.._.._.._providers_events,_.._.._.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_toolbar,_ngx_translate_core_src_translate.pipe,_.._.._.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_dom_controller,ionic_angular_platform_keyboard,ionic_angular_components_refresher_refresher,ionic_angular_gestures_gesture_controller,_.._.._.._.._node_modules_ionic_angular_components_refresher_refresher_content.ngfactory,ionic_angular_components_refresher_refresher_content,_.._components_index_index.ngfactory,_.._components_index_index,_.._.._.._providers_utils_dom,_.._.._.._providers_sites,_.._.._course_providers_course,_.._.._course_providers_helper,_.._.._course_providers_module_prefetch_delegate,_.._providers_sitehome,_index,ionic_angular_navigation_nav_params PURE_IMPORTS_END */


































var styles_CoreSiteHomeIndexPage = [];
var RenderType_CoreSiteHomeIndexPage = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreSiteHomeIndexPage, data: {} });

function View_CoreSiteHomeIndexPage_0(_l) {
    return core["_42" /* ɵvid */](0, [core["_37" /* ɵqud */](402653184, 1, { siteHomeComponent: 0 }), (_l()(), core["_16" /* ɵeld */](1, 0, null, null, 12, "ion-header", [], null, null, null, null, null)), core["_15" /* ɵdid */](2, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_16" /* ɵeld */](4, 0, null, null, 8, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_15" /* ɵdid */](5, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), core["_15" /* ɵdid */](6, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_16" /* ɵeld */](8, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_15" /* ɵdid */](9, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_40" /* ɵted */](10, 0, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_16" /* ɵeld */](15, 0, null, null, 13, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_15" /* ɵdid */](16, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["K" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["D" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_16" /* ɵeld */](18, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ionRefresh" === en)) {
                var pd_0 = (_co.siteHomeComponent.doRefresh($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_15" /* ɵdid */](19, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["D" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_16" /* ɵeld */](21, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_15" /* ɵdid */](22, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_16" /* ɵeld */](26, 0, null, 1, 1, "core-sitehome-index", [], null, null, null, index_ngfactory["b" /* View_CoreSiteHomeIndexComponent_0 */], index_ngfactory["a" /* RenderType_CoreSiteHomeIndexComponent */])), core["_15" /* ɵdid */](27, 114688, [[1, 4]], 0, index["a" /* CoreSiteHomeIndexComponent */], [dom["a" /* CoreDomUtilsProvider */], sites["a" /* CoreSitesProvider */], course["a" /* CoreCourseProvider */], helper["a" /* CoreCourseHelperProvider */], module_prefetch_delegate["a" /* CoreCourseModulePrefetchDelegate */], sitehome["a" /* CoreSiteHomeProvider */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 6, 0); var currVal_7 = (_co.siteHomeComponent && _co.siteHomeComponent.dataLoaded); _ck(_v, 19, 0, currVal_7); var currVal_9 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 22, 0, core["_29" /* ɵnov */](_v, 23).transform("core.pulltorefresh")), ""); _ck(_v, 22, 0, currVal_9); _ck(_v, 27, 0); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 5)._hidden; var currVal_1 = core["_29" /* ɵnov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = core["_41" /* ɵunv */](_v, 10, 0, core["_29" /* ɵnov */](_v, 11).transform("core.sitehome.sitehome")); _ck(_v, 10, 0, currVal_2); var currVal_3 = core["_29" /* ɵnov */](_v, 16).statusbarPadding; var currVal_4 = core["_29" /* ɵnov */](_v, 16)._hasRefresher; _ck(_v, 15, 0, currVal_3, currVal_4); var currVal_5 = (core["_29" /* ɵnov */](_v, 19).state !== "inactive"); var currVal_6 = core["_29" /* ɵnov */](_v, 19)._top; _ck(_v, 18, 0, currVal_5, currVal_6); var currVal_8 = core["_29" /* ɵnov */](_v, 22).r.state; _ck(_v, 21, 0, currVal_8); });
}
function View_CoreSiteHomeIndexPage_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "page-core-sitehome-index", [], null, null, null, View_CoreSiteHomeIndexPage_0, RenderType_CoreSiteHomeIndexPage)), core["_15" /* ɵdid */](1, 49152, null, 0, CoreSiteHomeIndexPage, [nav_params["a" /* NavParams */], nav_controller["a" /* NavController */], helper["a" /* CoreCourseHelperProvider */], sites["a" /* CoreSitesProvider */]], null, null)], null, null); }
var CoreSiteHomeIndexPageNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("page-core-sitehome-index", CoreSiteHomeIndexPage, View_CoreSiteHomeIndexPage_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.loader.js
var translate_loader = __webpack_require__(322);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.compiler.js
var translate_compiler = __webpack_require__(323);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.parser.js
var translate_parser = __webpack_require__(325);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/missing-translation-handler.js
var missing_translation_handler = __webpack_require__(324);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.store.js
var translate_store = __webpack_require__(419);

// EXTERNAL MODULE: ./node_modules/ionic-angular/module.js
var ionic_angular_module = __webpack_require__(634);

// EXTERNAL MODULE: ./src/pipes/pipes.module.ts + 1 modules
var pipes_module = __webpack_require__(110);

// EXTERNAL MODULE: ./src/components/components.module.ts
var components_components_module = __webpack_require__(33);

// EXTERNAL MODULE: ./src/core/course/components/components.module.ts
var course_components_components_module = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(237);

// CONCATENATED MODULE: ./src/core/sitehome/pages/index/index.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSiteHomeIndexPageModuleNgFactory", function() { return CoreSiteHomeIndexPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_index.module,_.._.._.._.._node_modules_ionic_angular_components_action_sheet_action_sheet_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_alert_alert_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_app_app_root.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_loading_loading_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_modal_modal_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_picker_picker_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_popover_popover_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_select_select_popover_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_toast_toast_component.ngfactory,_.._.._.._components_context_menu_context_menu_popover.ngfactory,_.._.._.._components_course_picker_menu_course_picker_menu_popover.ngfactory,_.._.._.._components_recaptcha_recaptchamodal.ngfactory,_.._.._course_components_unsupported_module_unsupported_module.ngfactory,_index.ngfactory,_angular_common,_angular_forms,_ngx_translate_core_src_translate.loader,_ngx_translate_core_src_translate.compiler,_ngx_translate_core_src_translate.parser,_ngx_translate_core_src_missing_translation_handler,_ngx_translate_core_src_translate.service,_ngx_translate_core_src_translate.store,_.._.._.._directives_directives.module,ionic_angular_module,_ngx_translate_core_index,_.._.._.._pipes_pipes.module,_.._.._.._components_components.module,_.._.._course_components_components.module,_.._components_components.module,ionic_angular_util_module_loader,_index PURE_IMPORTS_END */

































var CoreSiteHomeIndexPageModuleNgFactory = /*@__PURE__*/ core["_13" /* ɵcmf */](CoreSiteHomeIndexPageModule, [], function (_l) { return core["_25" /* ɵmod */]([core["_26" /* ɵmpd */](512, core["n" /* ComponentFactoryResolver */], core["_6" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], unsupported_module_ngfactory["a" /* CoreCourseUnsupportedModuleComponentNgFactory */], CoreSiteHomeIndexPageNgFactory]], [3, core["n" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["_26" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["v" /* ɵa */]]]), core["_26" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_26" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_26" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_26" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_26" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_26" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_26" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_26" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_26" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_26" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_26" /* ɵmpd */](512, _ngx_translate_core["a" /* TranslateModule */], _ngx_translate_core["a" /* TranslateModule */], []), core["_26" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_26" /* ɵmpd */](512, components_components_module["a" /* CoreComponentsModule */], components_components_module["a" /* CoreComponentsModule */], []), core["_26" /* ɵmpd */](512, course_components_components_module["a" /* CoreCourseComponentsModule */], course_components_components_module["a" /* CoreCourseComponentsModule */], []), core["_26" /* ɵmpd */](512, components_module["a" /* CoreSiteHomeComponentsModule */], components_module["a" /* CoreSiteHomeComponentsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_26" /* ɵmpd */](512, CoreSiteHomeIndexPageModule, CoreSiteHomeIndexPageModule, []), core["_26" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_26" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_26" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], CoreSiteHomeIndexPage, [])]); });






/***/ }),

/***/ 1902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(9);

// EXTERNAL MODULE: ./src/core/course/components/module-completion/module-completion.ts
var module_completion = __webpack_require__(1301);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(12);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(2);

// EXTERNAL MODULE: ./src/core/user/providers/user.ts
var user = __webpack_require__(45);

// CONCATENATED MODULE: ./src/core/course/components/module-completion/module-completion.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_angular_common,_module_completion,_.._.._.._providers_utils_text,_.._.._.._providers_utils_dom,_ngx_translate_core_src_translate.service,_.._.._.._providers_sites,_.._.._user_providers_user PURE_IMPORTS_END */








var styles_CoreCourseModuleCompletionComponent = [];
var RenderType_CoreCourseModuleCompletionComponent = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreCourseModuleCompletionComponent, data: {} });

function View_CoreCourseModuleCompletionComponent_1(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 3, "a", [], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.completionClicked($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0], [8, "title", 0]], null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.completionImage; var currVal_1 = _co.completionDescription; var currVal_2 = _co.completionDescription; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); });
}
function View_CoreCourseModuleCompletionComponent_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseModuleCompletionComponent_1)), core["_15" /* ɵdid */](1, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.completion; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CoreCourseModuleCompletionComponent_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-course-module-completion", [], null, null, null, View_CoreCourseModuleCompletionComponent_0, RenderType_CoreCourseModuleCompletionComponent)), core["_15" /* ɵdid */](1, 573440, null, 0, module_completion["a" /* CoreCourseModuleCompletionComponent */], [utils_text["a" /* CoreTextUtilsProvider */], dom["a" /* CoreDomUtilsProvider */], translate_service["a" /* TranslateService */], sites["a" /* CoreSitesProvider */], user["a" /* CoreUserProvider */]], null, null)], null, null); }
var CoreCourseModuleCompletionComponentNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("core-course-module-completion", module_completion["a" /* CoreCourseModuleCompletionComponent */], View_CoreCourseModuleCompletionComponent_Host_0, { completion: "completion", moduleName: "moduleName" }, { completionChanged: "completionChanged" }, []);





// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(42);

// EXTERNAL MODULE: ./src/components/icon/icon.ngfactory.js
var icon_ngfactory = __webpack_require__(194);

// EXTERNAL MODULE: ./src/components/icon/icon.ts
var icon_icon = __webpack_require__(165);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/spinner/spinner.ngfactory.js
var spinner_ngfactory = __webpack_require__(180);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/spinner/spinner.js
var spinner = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/badge/badge.js
var badge = __webpack_require__(212);

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(15);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(3);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var url = __webpack_require__(25);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(6);

// EXTERNAL MODULE: ./src/providers/filepool.ts
var filepool = __webpack_require__(17);

// EXTERNAL MODULE: ./src/providers/app.ts
var app = __webpack_require__(11);

// EXTERNAL MODULE: ./src/core/contentlinks/providers/helper.ts
var helper = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(24);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(35);

// EXTERNAL MODULE: ./src/providers/utils/iframe.ts
var iframe = __webpack_require__(38);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.ngfactory.js + 1 modules
var item_ngfactory = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.js
var item = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-reorder.js + 1 modules
var item_reorder = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(31);

// EXTERNAL MODULE: ./src/core/course/components/module/module.ts
var module_module = __webpack_require__(1300);

// EXTERNAL MODULE: ./src/core/course/providers/module-prefetch-delegate.ts
var module_prefetch_delegate = __webpack_require__(52);

// EXTERNAL MODULE: ./src/core/course/providers/helper.ts
var providers_helper = __webpack_require__(44);

// CONCATENATED MODULE: ./src/core/course/components/module/module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_CoreCourseModuleComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_CoreCourseModuleComponent_0;
/* unused harmony export View_CoreCourseModuleComponent_Host_0 */
/* unused harmony export CoreCourseModuleComponentNgFactory */
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_module_completion_module_completion.ngfactory,_module_completion_module_completion,_.._.._.._providers_utils_text,_.._.._.._providers_utils_dom,_ngx_translate_core_src_translate.service,_.._.._.._providers_sites,_.._.._user_providers_user,_.._.._.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_config_config,_ngx_translate_core_src_translate.pipe,ionic_angular_components_icon_icon,_.._.._.._components_icon_icon.ngfactory,_.._.._.._components_icon_icon,_.._.._.._.._node_modules_ionic_angular_components_spinner_spinner.ngfactory,ionic_angular_components_spinner_spinner,_angular_common,ionic_angular_components_badge_badge,_.._.._.._directives_format_text,ionic_angular_platform_platform,_.._.._.._providers_utils_utils,_.._.._.._providers_utils_url,_.._.._.._providers_logger,_.._.._.._providers_filepool,_.._.._.._providers_app,_.._.._contentlinks_providers_helper,ionic_angular_navigation_nav_controller,ionic_angular_components_content_content,_.._.._.._components_split_view_split_view,_.._.._.._providers_utils_iframe,_.._.._.._providers_events,_.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,_module,_.._providers_module_prefetch_delegate,_.._providers_helper PURE_IMPORTS_END */








































var styles_CoreCourseModuleComponent = [];
var RenderType_CoreCourseModuleComponent = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreCourseModuleComponent, data: {} });

function View_CoreCourseModuleComponent_2(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 0, "img", [["alt", ""], ["class", "core-module-icon"], ["item-start", ""], ["role", "presentation"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.module.handlerData.icon; _ck(_v, 0, 0, currVal_0); }); }
function View_CoreCourseModuleComponent_4(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-course-module-completion", [], null, [[null, "completionChanged"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("completionChanged" === en)) {
                var pd_0 = (_co.completionChanged.emit() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_CoreCourseModuleCompletionComponent_0, RenderType_CoreCourseModuleCompletionComponent)), core["_15" /* ɵdid */](1, 573440, null, 0, module_completion["a" /* CoreCourseModuleCompletionComponent */], [utils_text["a" /* CoreTextUtilsProvider */], dom["a" /* CoreDomUtilsProvider */], translate_service["a" /* TranslateService */], sites["a" /* CoreSitesProvider */], user["a" /* CoreUserProvider */]], { completion: [0, "completion"], moduleName: [1, "moduleName"] }, { completionChanged: "completionChanged" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.module.completionstatus; var currVal_1 = _co.module.name; _ck(_v, 1, 0, currVal_0, currVal_1); }, null);
}
function View_CoreCourseModuleComponent_5(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 6, "button", [["class", "core-animate-show-hide"], ["clear", ""], ["color", "dark"], ["icon-only", ""], ["ion-button", ""]], [[8, "hidden", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.download($event, false) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](1, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"], clear: [1, "clear"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](4, 0, null, 0, 1, "ion-icon", [["name", "cloud-download"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](5, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                "]))], function (_ck, _v) { var currVal_2 = "dark"; var currVal_3 = ""; _ck(_v, 1, 0, currVal_2, currVal_3); var currVal_5 = "cloud-download"; _ck(_v, 5, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.spinner || _co.module.handlerData.spinner); var currVal_1 = core["_41" /* ɵunv */](_v, 0, 1, core["_29" /* ɵnov */](_v, 2).transform("core.download")); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = core["_29" /* ɵnov */](_v, 5)._hidden; _ck(_v, 4, 0, currVal_4); });
}
function View_CoreCourseModuleComponent_6(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 6, "button", [["class", "core-animate-show-hide"], ["clear", ""], ["color", "dark"], ["icon-only", ""], ["ion-button", ""]], [[8, "hidden", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.download($event, true) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](1, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"], clear: [1, "clear"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](4, 0, null, 0, 1, "ion-icon", [["name", "refresh"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](5, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                "]))], function (_ck, _v) { var currVal_2 = "dark"; var currVal_3 = ""; _ck(_v, 1, 0, currVal_2, currVal_3); var currVal_5 = "refresh"; _ck(_v, 5, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.spinner || _co.module.handlerData.spinner); var currVal_1 = core["_41" /* ɵunv */](_v, 0, 1, core["_29" /* ɵnov */](_v, 2).transform("core.refresh")); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = core["_29" /* ɵnov */](_v, 5)._hidden; _ck(_v, 4, 0, currVal_4); });
}
function View_CoreCourseModuleComponent_7(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 6, "button", [["class", "core-animate-show-hide"], ["clear", ""], ["color", "dark"], ["icon-only", ""], ["ion-button", ""]], [[8, "hidden", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.buttonClicked($event, _v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](1, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"], clear: [1, "clear"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](4, 0, null, 0, 1, "core-icon", [], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_15" /* ɵdid */](5, 114688, null, 0, icon_icon["a" /* CoreIconComponent */], [core["p" /* ElementRef */]], { name: [0, "name"], md: [1, "md"], ios: [2, "ios"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                "]))], function (_ck, _v) { var currVal_2 = "dark"; var currVal_3 = ""; _ck(_v, 1, 0, currVal_2, currVal_3); var currVal_4 = _v.context.$implicit.icon; var currVal_5 = (_v.context.$implicit.mdIcon || ""); var currVal_6 = (_v.context.$implicit.iosIcon || ""); _ck(_v, 5, 0, currVal_4, currVal_5, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_v.context.$implicit.hidden || _co.spinner) || _co.module.handlerData.spinner); var currVal_1 = core["_41" /* ɵunv */](_v, 0, 1, core["_29" /* ɵnov */](_v, 2).transform(_v.context.$implicit.label)); _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_CoreCourseModuleComponent_8(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "ion-spinner", [["class", "core-animate-show-hide"]], [[2, "spinner-paused", null]], null, null, spinner_ngfactory["b" /* View_Spinner_0 */], spinner_ngfactory["a" /* RenderType_Spinner */])), core["_15" /* ɵdid */](1, 114688, null, 0, spinner["a" /* Spinner */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 1)._paused; _ck(_v, 0, 0, currVal_0); }); }
function View_CoreCourseModuleComponent_3(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 26, "div", [["class", "buttons core-module-buttons"], ["item-end", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 278528, null, 0, common["i" /* NgClass */], [core["v" /* IterableDiffers */], core["w" /* KeyValueDiffers */], core["p" /* ElementRef */], core["L" /* Renderer2 */]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), core["_33" /* ɵpod */](2, { "core-button-completion": 0 }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseModuleComponent_4)), core["_15" /* ɵdid */](6, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_16" /* ɵeld */](8, 0, null, null, 17, "div", [["class", "core-module-buttons-more"]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseModuleComponent_5)), core["_15" /* ɵdid */](12, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseModuleComponent_6)), core["_15" /* ɵdid */](16, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseModuleComponent_7)), core["_15" /* ɵdid */](20, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseModuleComponent_8)), core["_15" /* ɵdid */](24, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "buttons core-module-buttons"; var currVal_1 = _ck(_v, 2, 0, _co.module.completionstatus); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.module.completionstatus; _ck(_v, 6, 0, currVal_2); var currVal_3 = (_co.downloadEnabled && _co.showDownload); _ck(_v, 12, 0, currVal_3); var currVal_4 = (_co.downloadEnabled && _co.showRefresh); _ck(_v, 16, 0, currVal_4); var currVal_5 = _co.module.handlerData.buttons; _ck(_v, 20, 0, currVal_5); var currVal_6 = (_co.spinner || _co.module.handlerData.spinner); _ck(_v, 24, 0, currVal_6); }, null); }
function View_CoreCourseModuleComponent_10(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, "ion-badge", [["item-end", ""], ["text-start", ""], ["text-wrap", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, badge["a" /* Badge */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](4, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.module.handlerData.extraBadgeColor; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.module.handlerData.extraBadge; _ck(_v, 4, 0, currVal_1); }, null); }
function View_CoreCourseModuleComponent_11(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 3, "ion-badge", [["item-end", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, badge["a" /* Badge */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), (_l()(), core["_40" /* ɵted */](2, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], null, function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 2, 0, core["_29" /* ɵnov */](_v, 3).transform("core.course.hiddenfromstudents")); _ck(_v, 2, 0, currVal_0); }); }
function View_CoreCourseModuleComponent_12(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 3, "ion-badge", [["item-end", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, badge["a" /* Badge */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), (_l()(), core["_40" /* ɵted */](2, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], null, function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 2, 0, core["_29" /* ɵnov */](_v, 3).transform("core.course.hiddenoncoursepage")); _ck(_v, 2, 0, currVal_0); }); }
function View_CoreCourseModuleComponent_13(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 3, "ion-badge", [["item-end", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, badge["a" /* Badge */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](3, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.module.availabilityinfo; _ck(_v, 3, 0, currVal_0); }, null); }
function View_CoreCourseModuleComponent_9(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 13, "div", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseModuleComponent_10)), core["_15" /* ɵdid */](3, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseModuleComponent_11)), core["_15" /* ɵdid */](6, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseModuleComponent_12)), core["_15" /* ɵdid */](9, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseModuleComponent_13)), core["_15" /* ɵdid */](12, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.module.handlerData.extraBadge; _ck(_v, 3, 0, currVal_0); var currVal_1 = (_co.module.visible === 0); _ck(_v, 6, 0, currVal_1); var currVal_2 = ((_co.module.visible !== 0) && _co.module.isStealth); _ck(_v, 9, 0, currVal_2); var currVal_3 = _co.module.availabilityinfo; _ck(_v, 12, 0, currVal_3); }, null); }
function View_CoreCourseModuleComponent_14(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-format-text", [["class", "core-module-description"], ["maxHeight", "80"]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"], maxHeight: [1, "maxHeight"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.module.description; var currVal_1 = "80"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CoreCourseModuleComponent_1(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 27, "a", [["class", "item item-block"], ["detail-none", ""], ["ion-item", ""], ["text-wrap", ""]], [[8, "id", 0], [8, "title", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.moduleClicked($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 278528, null, 0, common["i" /* NgClass */], [core["v" /* IterableDiffers */], core["w" /* KeyValueDiffers */], core["p" /* ElementRef */], core["L" /* Renderer2 */]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), core["_33" /* ɵpod */](2, { "item-media": 0, "core-not-clickable": 1, "item-dimmed": 2 }), core["_15" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_15" /* ɵdid */](7, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n\n    "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_CoreCourseModuleComponent_2)), core["_15" /* ɵdid */](10, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_16" /* ɵeld */](12, 0, null, 2, 8, "div", [["class", "core-module-title"]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_16" /* ɵeld */](14, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](15, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseModuleComponent_3)), core["_15" /* ɵdid */](19, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_11" /* ɵand */](16777216, null, 2, 1, null, View_CoreCourseModuleComponent_9)), core["_15" /* ɵdid */](23, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_11" /* ɵand */](16777216, null, 2, 1, null, View_CoreCourseModuleComponent_14)), core["_15" /* ɵdid */](26, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = core["_19" /* ɵinlineInterpolate */](1, "core-course-module-handler ", _co.module.handlerData.class, ""); var currVal_3 = _ck(_v, 2, 0, _co.module.handlerData.icon, (!_co.module.handlerData.action || (!_co.module.uservisible === false)), ((_co.module.visible === 0) || (_co.module.uservisible === false))); _ck(_v, 1, 0, currVal_2, currVal_3); var currVal_4 = _co.module.handlerData.icon; _ck(_v, 10, 0, currVal_4); var currVal_5 = _co.module.handlerData.title; _ck(_v, 15, 0, currVal_5); var currVal_6 = (_co.module.uservisible !== false); _ck(_v, 19, 0, currVal_6); var currVal_7 = ((((_co.module.visible === 0) || _co.module.availabilityinfo) || _co.module.handlerData.extraBadge) || _co.module.isStealth); _ck(_v, 23, 0, currVal_7); var currVal_8 = _co.module.description; _ck(_v, 26, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_19" /* ɵinlineInterpolate */](1, "core-course-module-", _co.module.id, ""); var currVal_1 = core["_19" /* ɵinlineInterpolate */](1, "", _co.module.handlerData.title, ""); _ck(_v, 0, 0, currVal_0, currVal_1); });
}
function View_CoreCourseModuleComponent_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseModuleComponent_1)), core["_15" /* ɵdid */](1, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.module && (_co.module.visibleoncoursepage !== 0)); _ck(_v, 1, 0, currVal_0); }, null); }
function View_CoreCourseModuleComponent_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-course-module", [], null, null, null, View_CoreCourseModuleComponent_0, RenderType_CoreCourseModuleComponent)), core["_15" /* ɵdid */](1, 245760, null, 0, module_module["a" /* CoreCourseModuleComponent */], [[2, nav_controller["a" /* NavController */]], module_prefetch_delegate["a" /* CoreCourseModulePrefetchDelegate */], dom["a" /* CoreDomUtilsProvider */], providers_helper["a" /* CoreCourseHelperProvider */], events["a" /* CoreEventsProvider */], sites["a" /* CoreSitesProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CoreCourseModuleComponentNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("core-course-module", module_module["a" /* CoreCourseModuleComponent */], View_CoreCourseModuleComponent_Host_0, { module: "module", courseId: "courseId", enabled: "downloadEnabled" }, { completionChanged: "completionChanged" }, []);






/***/ }),

/***/ 1916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.ngfactory.js + 1 modules
var item_ngfactory = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.js
var item = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-reorder.js + 1 modules
var item_reorder = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(31);

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(40);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(2);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(15);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(3);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var url = __webpack_require__(25);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(6);

// EXTERNAL MODULE: ./src/providers/filepool.ts
var filepool = __webpack_require__(17);

// EXTERNAL MODULE: ./src/providers/app.ts
var app = __webpack_require__(11);

// EXTERNAL MODULE: ./src/core/contentlinks/providers/helper.ts
var helper = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(24);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(35);

// EXTERNAL MODULE: ./src/providers/utils/iframe.ts
var iframe = __webpack_require__(38);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(13);

// EXTERNAL MODULE: ./src/core/course/components/module/module.ngfactory.js + 1 modules
var module_ngfactory = __webpack_require__(1902);

// EXTERNAL MODULE: ./src/core/course/components/module/module.ts
var module_module = __webpack_require__(1300);

// EXTERNAL MODULE: ./src/core/course/providers/module-prefetch-delegate.ts
var module_prefetch_delegate = __webpack_require__(52);

// EXTERNAL MODULE: ./src/core/course/providers/helper.ts
var providers_helper = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(163);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav-push.js
var nav_push = __webpack_require__(239);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav-push-anchor.js
var nav_push_anchor = __webpack_require__(265);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(50);

// EXTERNAL MODULE: ./src/components/icon/icon.ngfactory.js
var icon_ngfactory = __webpack_require__(194);

// EXTERNAL MODULE: ./src/components/icon/icon.ts
var icon = __webpack_require__(165);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(30);

// EXTERNAL MODULE: ./src/core/sitehome/components/all-course-list/all-course-list.ts
var all_course_list = __webpack_require__(1313);

// EXTERNAL MODULE: ./src/core/courses/providers/courses.ts
var courses = __webpack_require__(73);

// CONCATENATED MODULE: ./src/core/sitehome/components/all-course-list/all-course-list.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_nav_nav_push,ionic_angular_navigation_nav_controller,ionic_angular_components_nav_nav_push_anchor,ionic_angular_navigation_deep_linker,_.._.._.._components_icon_icon.ngfactory,_.._.._.._components_icon_icon,_ngx_translate_core_src_translate.pipe,_ngx_translate_core_src_translate.service,_angular_common,_all_course_list,_.._.._courses_providers_courses PURE_IMPORTS_END */


















var styles_CoreSiteHomeAllCourseListComponent = [];
var RenderType_CoreSiteHomeAllCourseListComponent = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreSiteHomeAllCourseListComponent, data: {} });

function View_CoreSiteHomeAllCourseListComponent_1(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 15, "a", [["class", "item item-block"], ["ion-item", ""], ["text-wrap", ""]], [[1, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 6).onClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_15" /* ɵdid */](6, 16384, null, 0, nav_push["a" /* NavPush */], [[2, nav_controller["a" /* NavController */]]], { navPush: [0, "navPush"] }, null), core["_15" /* ɵdid */](7, 1064960, null, 0, nav_push_anchor["a" /* NavPushAnchor */], [nav_push["a" /* NavPush */], [2, deep_linker["a" /* DeepLinker */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_16" /* ɵeld */](9, 0, null, 0, 1, "core-icon", [["fixed-width", ""], ["item-start", ""], ["name", "fa-graduation-cap"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_15" /* ɵdid */](10, 114688, null, 0, icon["a" /* CoreIconComponent */], [core["p" /* ElementRef */]], { name: [0, "name"], fixedWidth: [1, "fixedWidth"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_16" /* ɵeld */](12, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](13, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n"]))], function (_ck, _v) { var currVal_1 = "CoreCoursesAvailableCoursesPage"; _ck(_v, 6, 0, currVal_1); var currVal_2 = "fa-graduation-cap"; var currVal_3 = ""; _ck(_v, 10, 0, currVal_2, currVal_3); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 7)._href; _ck(_v, 0, 0, currVal_0); var currVal_4 = core["_41" /* ɵunv */](_v, 13, 0, core["_29" /* ɵnov */](_v, 14).transform("core.courses.availablecourses")); _ck(_v, 13, 0, currVal_4); });
}
function View_CoreSiteHomeAllCourseListComponent_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeAllCourseListComponent_1)), core["_15" /* ɵdid */](1, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.show; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CoreSiteHomeAllCourseListComponent_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-sitehome-all-course-list", [], null, null, null, View_CoreSiteHomeAllCourseListComponent_0, RenderType_CoreSiteHomeAllCourseListComponent)), core["_15" /* ɵdid */](1, 49152, null, 0, all_course_list["a" /* CoreSiteHomeAllCourseListComponent */], [courses["a" /* CoreCoursesProvider */]], null, null)], null, null); }
var CoreSiteHomeAllCourseListComponentNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("core-sitehome-all-course-list", all_course_list["a" /* CoreSiteHomeAllCourseListComponent */], View_CoreSiteHomeAllCourseListComponent_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon_icon = __webpack_require__(42);

// EXTERNAL MODULE: ./src/core/sitehome/components/categories/categories.ts
var categories = __webpack_require__(1314);

// CONCATENATED MODULE: ./src/core/sitehome/components/categories/categories.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_nav_nav_push,ionic_angular_navigation_nav_controller,ionic_angular_components_nav_nav_push_anchor,ionic_angular_navigation_deep_linker,ionic_angular_components_icon_icon,_ngx_translate_core_src_translate.pipe,_ngx_translate_core_src_translate.service,_angular_common,_categories,_.._.._courses_providers_courses PURE_IMPORTS_END */

















var styles_CoreSiteHomeCategoriesComponent = [];
var RenderType_CoreSiteHomeCategoriesComponent = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreSiteHomeCategoriesComponent, data: {} });

function View_CoreSiteHomeCategoriesComponent_1(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 15, "a", [["class", "item item-block"], ["ion-item", ""], ["text-wrap", ""]], [[1, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 6).onClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_15" /* ɵdid */](6, 16384, null, 0, nav_push["a" /* NavPush */], [[2, nav_controller["a" /* NavController */]]], { navPush: [0, "navPush"] }, null), core["_15" /* ɵdid */](7, 1064960, null, 0, nav_push_anchor["a" /* NavPushAnchor */], [nav_push["a" /* NavPush */], [2, deep_linker["a" /* DeepLinker */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_16" /* ɵeld */](9, 0, null, 0, 1, "ion-icon", [["item-start", ""], ["name", "folder"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](10, 147456, [[3, 4]], 0, icon_icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_16" /* ɵeld */](12, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](13, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n"]))], function (_ck, _v) { var currVal_1 = "CoreCoursesCategoriesPage"; _ck(_v, 6, 0, currVal_1); var currVal_3 = "folder"; _ck(_v, 10, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 7)._href; _ck(_v, 0, 0, currVal_0); var currVal_2 = core["_29" /* ɵnov */](_v, 10)._hidden; _ck(_v, 9, 0, currVal_2); var currVal_4 = core["_41" /* ɵunv */](_v, 13, 0, core["_29" /* ɵnov */](_v, 14).transform("core.courses.categories")); _ck(_v, 13, 0, currVal_4); });
}
function View_CoreSiteHomeCategoriesComponent_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeCategoriesComponent_1)), core["_15" /* ɵdid */](1, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.show; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CoreSiteHomeCategoriesComponent_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-sitehome-categories", [], null, null, null, View_CoreSiteHomeCategoriesComponent_0, RenderType_CoreSiteHomeCategoriesComponent)), core["_15" /* ɵdid */](1, 49152, null, 0, categories["a" /* CoreSiteHomeCategoriesComponent */], [courses["a" /* CoreCoursesProvider */]], null, null)], null, null); }
var CoreSiteHomeCategoriesComponentNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("core-sitehome-categories", categories["a" /* CoreSiteHomeCategoriesComponent */], View_CoreSiteHomeCategoriesComponent_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./src/core/sitehome/components/course-search/course-search.ts
var course_search = __webpack_require__(1315);

// CONCATENATED MODULE: ./src/core/sitehome/components/course-search/course-search.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_nav_nav_push,ionic_angular_navigation_nav_controller,ionic_angular_components_nav_nav_push_anchor,ionic_angular_navigation_deep_linker,ionic_angular_components_icon_icon,_ngx_translate_core_src_translate.pipe,_ngx_translate_core_src_translate.service,_angular_common,_course_search,_.._.._courses_providers_courses PURE_IMPORTS_END */

















var styles_CoreSiteHomeCourseSearchComponent = [];
var RenderType_CoreSiteHomeCourseSearchComponent = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreSiteHomeCourseSearchComponent, data: {} });

function View_CoreSiteHomeCourseSearchComponent_1(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 15, "a", [["class", "item item-block"], ["ion-item", ""], ["text-wrap", ""]], [[1, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 6).onClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_15" /* ɵdid */](6, 16384, null, 0, nav_push["a" /* NavPush */], [[2, nav_controller["a" /* NavController */]]], { navPush: [0, "navPush"] }, null), core["_15" /* ɵdid */](7, 1064960, null, 0, nav_push_anchor["a" /* NavPushAnchor */], [nav_push["a" /* NavPush */], [2, deep_linker["a" /* DeepLinker */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_16" /* ɵeld */](9, 0, null, 0, 1, "ion-icon", [["item-start", ""], ["name", "search"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](10, 147456, [[3, 4]], 0, icon_icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_16" /* ɵeld */](12, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](13, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n"]))], function (_ck, _v) { var currVal_1 = "CoreCoursesSearchPage"; _ck(_v, 6, 0, currVal_1); var currVal_3 = "search"; _ck(_v, 10, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 7)._href; _ck(_v, 0, 0, currVal_0); var currVal_2 = core["_29" /* ɵnov */](_v, 10)._hidden; _ck(_v, 9, 0, currVal_2); var currVal_4 = core["_41" /* ɵunv */](_v, 13, 0, core["_29" /* ɵnov */](_v, 14).transform("core.courses.searchcourses")); _ck(_v, 13, 0, currVal_4); });
}
function View_CoreSiteHomeCourseSearchComponent_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeCourseSearchComponent_1)), core["_15" /* ɵdid */](1, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.show; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CoreSiteHomeCourseSearchComponent_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-sitehome-course-search", [], null, null, null, View_CoreSiteHomeCourseSearchComponent_0, RenderType_CoreSiteHomeCourseSearchComponent)), core["_15" /* ɵdid */](1, 49152, null, 0, course_search["a" /* CoreSiteHomeCourseSearchComponent */], [courses["a" /* CoreCoursesProvider */]], null, null)], null, null); }
var CoreSiteHomeCourseSearchComponentNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("core-sitehome-course-search", course_search["a" /* CoreSiteHomeCourseSearchComponent */], View_CoreSiteHomeCourseSearchComponent_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./src/core/sitehome/components/enrolled-course-list/enrolled-course-list.ts
var enrolled_course_list = __webpack_require__(1316);

// CONCATENATED MODULE: ./src/core/sitehome/components/enrolled-course-list/enrolled-course-list.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_nav_nav_push,ionic_angular_navigation_nav_controller,ionic_angular_components_nav_nav_push_anchor,ionic_angular_navigation_deep_linker,_.._.._.._components_icon_icon.ngfactory,_.._.._.._components_icon_icon,_ngx_translate_core_src_translate.pipe,_ngx_translate_core_src_translate.service,_angular_common,_enrolled_course_list,_.._.._courses_providers_courses PURE_IMPORTS_END */


















var styles_CoreSiteHomeEnrolledCourseListComponent = [];
var RenderType_CoreSiteHomeEnrolledCourseListComponent = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreSiteHomeEnrolledCourseListComponent, data: {} });

function View_CoreSiteHomeEnrolledCourseListComponent_1(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 15, "a", [["class", "item item-block"], ["ion-item", ""], ["text-wrap", ""]], [[1, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 6).onClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_15" /* ɵdid */](6, 16384, null, 0, nav_push["a" /* NavPush */], [[2, nav_controller["a" /* NavController */]]], { navPush: [0, "navPush"] }, null), core["_15" /* ɵdid */](7, 1064960, null, 0, nav_push_anchor["a" /* NavPushAnchor */], [nav_push["a" /* NavPush */], [2, deep_linker["a" /* DeepLinker */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_16" /* ɵeld */](9, 0, null, 0, 1, "core-icon", [["fixed-width", ""], ["item-start", ""], ["name", "fa-graduation-cap"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_15" /* ɵdid */](10, 114688, null, 0, icon["a" /* CoreIconComponent */], [core["p" /* ElementRef */]], { name: [0, "name"], fixedWidth: [1, "fixedWidth"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_16" /* ɵeld */](12, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](13, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n"]))], function (_ck, _v) { var currVal_1 = "CoreCoursesMyCoursesPage"; _ck(_v, 6, 0, currVal_1); var currVal_2 = "fa-graduation-cap"; var currVal_3 = ""; _ck(_v, 10, 0, currVal_2, currVal_3); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 7)._href; _ck(_v, 0, 0, currVal_0); var currVal_4 = core["_41" /* ɵunv */](_v, 13, 0, core["_29" /* ɵnov */](_v, 14).transform("core.courses.mycourses")); _ck(_v, 13, 0, currVal_4); });
}
function View_CoreSiteHomeEnrolledCourseListComponent_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeEnrolledCourseListComponent_1)), core["_15" /* ɵdid */](1, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.show; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CoreSiteHomeEnrolledCourseListComponent_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-sitehome-enrolled-course-list", [], null, null, null, View_CoreSiteHomeEnrolledCourseListComponent_0, RenderType_CoreSiteHomeEnrolledCourseListComponent)), core["_15" /* ɵdid */](1, 114688, null, 0, enrolled_course_list["a" /* CoreSiteHomeEnrolledCourseListComponent */], [courses["a" /* CoreCoursesProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CoreSiteHomeEnrolledCourseListComponentNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("core-sitehome-enrolled-course-list", enrolled_course_list["a" /* CoreSiteHomeEnrolledCourseListComponent */], View_CoreSiteHomeEnrolledCourseListComponent_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./src/core/sitehome/components/news/news.ts
var news = __webpack_require__(1317);

// EXTERNAL MODULE: ./src/core/course/providers/course.ts
var course = __webpack_require__(16);

// EXTERNAL MODULE: ./src/core/course/providers/module-delegate.ts
var module_delegate = __webpack_require__(54);

// EXTERNAL MODULE: ./src/core/sitehome/providers/sitehome.ts
var sitehome = __webpack_require__(217);

// CONCATENATED MODULE: ./src/core/sitehome/components/news/news.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._course_components_module_module.ngfactory,_.._.._course_components_module_module,ionic_angular_navigation_nav_controller,_.._.._course_providers_module_prefetch_delegate,_.._.._.._providers_utils_dom,_.._.._course_providers_helper,_.._.._.._providers_events,_.._.._.._providers_sites,_angular_common,_news,_.._.._course_providers_course,_.._.._course_providers_module_delegate,_.._providers_sitehome PURE_IMPORTS_END */














var styles_CoreSiteHomeNewsComponent = [];
var RenderType_CoreSiteHomeNewsComponent = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreSiteHomeNewsComponent, data: {} });

function View_CoreSiteHomeNewsComponent_1(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-course-module", [["class", "core-sitehome-news"]], null, null, null, module_ngfactory["b" /* View_CoreCourseModuleComponent_0 */], module_ngfactory["a" /* RenderType_CoreCourseModuleComponent */])), core["_15" /* ɵdid */](1, 245760, null, 0, module_module["a" /* CoreCourseModuleComponent */], [[2, nav_controller["a" /* NavController */]], module_prefetch_delegate["a" /* CoreCourseModulePrefetchDelegate */], dom["a" /* CoreDomUtilsProvider */], providers_helper["a" /* CoreCourseHelperProvider */], events["a" /* CoreEventsProvider */], sites["a" /* CoreSitesProvider */]], { module: [0, "module"], courseId: [1, "courseId"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.module; var currVal_1 = _co.siteHomeId; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CoreSiteHomeNewsComponent_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeNewsComponent_1)), core["_15" /* ɵdid */](1, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.show; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CoreSiteHomeNewsComponent_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-sitehome-news", [], null, null, null, View_CoreSiteHomeNewsComponent_0, RenderType_CoreSiteHomeNewsComponent)), core["_15" /* ɵdid */](1, 114688, null, 0, news["a" /* CoreSiteHomeNewsComponent */], [sites["a" /* CoreSitesProvider */], course["a" /* CoreCourseProvider */], module_delegate["a" /* CoreCourseModuleDelegate */], sitehome["a" /* CoreSiteHomeProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CoreSiteHomeNewsComponentNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("core-sitehome-news", news["a" /* CoreSiteHomeNewsComponent */], View_CoreSiteHomeNewsComponent_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ngfactory.js
var empty_box_ngfactory = __webpack_require__(164);

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ts
var empty_box = __webpack_require__(134);

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(57);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(26);

// EXTERNAL MODULE: ./src/core/sitehome/components/index/index.ts
var index = __webpack_require__(1303);

// CONCATENATED MODULE: ./src/core/sitehome/components/index/index.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_CoreSiteHomeIndexComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_CoreSiteHomeIndexComponent_0;
/* unused harmony export View_CoreSiteHomeIndexComponent_Host_0 */
/* unused harmony export CoreSiteHomeIndexComponentNgFactory */
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,_.._.._.._directives_format_text,_.._.._.._providers_sites,_.._.._.._providers_utils_dom,_.._.._.._providers_utils_text,_ngx_translate_core_src_translate.service,ionic_angular_platform_platform,_.._.._.._providers_utils_utils,_.._.._.._providers_utils_url,_.._.._.._providers_logger,_.._.._.._providers_filepool,_.._.._.._providers_app,_.._.._contentlinks_providers_helper,ionic_angular_navigation_nav_controller,ionic_angular_components_content_content,_.._.._.._components_split_view_split_view,_.._.._.._providers_utils_iframe,_.._.._.._providers_events,_.._.._course_components_module_module.ngfactory,_.._.._course_components_module_module,_.._.._course_providers_module_prefetch_delegate,_.._.._course_providers_helper,_angular_common,ionic_angular_components_item_item_divider,_all_course_list_all_course_list.ngfactory,_all_course_list_all_course_list,_.._.._courses_providers_courses,_categories_categories.ngfactory,_categories_categories,_course_search_course_search.ngfactory,_course_search_course_search,_enrolled_course_list_enrolled_course_list.ngfactory,_enrolled_course_list_enrolled_course_list,_news_news.ngfactory,_news_news,_.._.._course_providers_course,_.._.._course_providers_module_delegate,_.._providers_sitehome,_.._.._.._components_empty_box_empty_box.ngfactory,_.._.._.._components_empty_box_empty_box,_ngx_translate_core_src_translate.pipe,_.._.._.._components_loading_loading.ngfactory,_.._.._.._components_loading_loading,ionic_angular_components_list_list,ionic_angular_gestures_gesture_controller,ionic_angular_platform_dom_controller,_index PURE_IMPORTS_END */





















































var styles_CoreSiteHomeIndexComponent = [];
var RenderType_CoreSiteHomeIndexComponent = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreSiteHomeIndexComponent, data: {} });

function View_CoreSiteHomeIndexComponent_2(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 9, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 2, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](8, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.section.summary; _ck(_v, 8, 0, currVal_0); }, null); }
function View_CoreSiteHomeIndexComponent_3(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-course-module", [], null, null, null, module_ngfactory["b" /* View_CoreCourseModuleComponent_0 */], module_ngfactory["a" /* RenderType_CoreCourseModuleComponent */])), core["_15" /* ɵdid */](1, 245760, null, 0, module_module["a" /* CoreCourseModuleComponent */], [[2, nav_controller["a" /* NavController */]], module_prefetch_delegate["a" /* CoreCourseModulePrefetchDelegate */], dom["a" /* CoreDomUtilsProvider */], providers_helper["a" /* CoreCourseHelperProvider */], events["a" /* CoreEventsProvider */], sites["a" /* CoreSitesProvider */]], { module: [0, "module"], courseId: [1, "courseId"], enabled: [2, "enabled"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit; var currVal_1 = _co.siteHomeId; var currVal_2 = true; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_CoreSiteHomeIndexComponent_1(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_2)), core["_15" /* ɵdid */](3, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_3)), core["_15" /* ɵdid */](6, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.section.summary; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.section.modules; _ck(_v, 6, 0, currVal_1); }, null); }
function View_CoreSiteHomeIndexComponent_5(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, "ion-item-divider", [["class", "item item-divider"], ["color", "light"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 6, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null)], function (_ck, _v) { var currVal_0 = "light"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "light"; _ck(_v, 5, 0, currVal_1); }, null); }
function View_CoreSiteHomeIndexComponent_7(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-sitehome-all-course-list", [["class", "item"]], null, null, null, View_CoreSiteHomeAllCourseListComponent_0, RenderType_CoreSiteHomeAllCourseListComponent)), core["_15" /* ɵdid */](1, 49152, null, 0, all_course_list["a" /* CoreSiteHomeAllCourseListComponent */], [courses["a" /* CoreCoursesProvider */]], null, null)], null, null); }
function View_CoreSiteHomeIndexComponent_8(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-sitehome-categories", [], null, null, null, View_CoreSiteHomeCategoriesComponent_0, RenderType_CoreSiteHomeCategoriesComponent)), core["_15" /* ɵdid */](1, 49152, null, 0, categories["a" /* CoreSiteHomeCategoriesComponent */], [courses["a" /* CoreCoursesProvider */]], null, null)], null, null); }
function View_CoreSiteHomeIndexComponent_9(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-sitehome-course-search", [], null, null, null, View_CoreSiteHomeCourseSearchComponent_0, RenderType_CoreSiteHomeCourseSearchComponent)), core["_15" /* ɵdid */](1, 49152, null, 0, course_search["a" /* CoreSiteHomeCourseSearchComponent */], [courses["a" /* CoreCoursesProvider */]], null, null)], null, null); }
function View_CoreSiteHomeIndexComponent_10(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-sitehome-enrolled-course-list", [], null, null, null, View_CoreSiteHomeEnrolledCourseListComponent_0, RenderType_CoreSiteHomeEnrolledCourseListComponent)), core["_15" /* ɵdid */](1, 114688, null, 0, enrolled_course_list["a" /* CoreSiteHomeEnrolledCourseListComponent */], [courses["a" /* CoreCoursesProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_CoreSiteHomeIndexComponent_11(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-sitehome-news", [], null, null, null, View_CoreSiteHomeNewsComponent_0, RenderType_CoreSiteHomeNewsComponent)), core["_15" /* ɵdid */](1, 114688, null, 0, news["a" /* CoreSiteHomeNewsComponent */], [sites["a" /* CoreSitesProvider */], course["a" /* CoreCourseProvider */], module_delegate["a" /* CoreCourseModuleDelegate */], sitehome["a" /* CoreSiteHomeProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_CoreSiteHomeIndexComponent_6(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 16, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_7)), core["_15" /* ɵdid */](3, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_8)), core["_15" /* ɵdid */](6, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_9)), core["_15" /* ɵdid */](9, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_10)), core["_15" /* ɵdid */](12, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_11)), core["_15" /* ɵdid */](15, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit == "all-course-list"); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_v.context.$implicit == "categories"); _ck(_v, 6, 0, currVal_1); var currVal_2 = (_v.context.$implicit == "course-search"); _ck(_v, 9, 0, currVal_2); var currVal_3 = (_v.context.$implicit == "enrolled-course-list"); _ck(_v, 12, 0, currVal_3); var currVal_4 = (_v.context.$implicit == "news"); _ck(_v, 15, 0, currVal_4); }, null); }
function View_CoreSiteHomeIndexComponent_4(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_5)), core["_15" /* ɵdid */](3, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_6)), core["_15" /* ɵdid */](6, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.section && _co.section.hasContent); _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.items; _ck(_v, 6, 0, currVal_1); }, null); }
function View_CoreSiteHomeIndexComponent_13(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, "ion-item-divider", [["class", "item item-divider"], ["color", "light"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 7, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 8, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 9, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null)], function (_ck, _v) { var currVal_0 = "light"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "light"; _ck(_v, 5, 0, currVal_1); }, null); }
function View_CoreSiteHomeIndexComponent_14(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 9, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 10, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 11, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 12, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 2, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](8, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.block.summary; _ck(_v, 8, 0, currVal_0); }, null); }
function View_CoreSiteHomeIndexComponent_15(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-course-module", [], null, null, null, module_ngfactory["b" /* View_CoreCourseModuleComponent_0 */], module_ngfactory["a" /* RenderType_CoreCourseModuleComponent */])), core["_15" /* ɵdid */](1, 245760, null, 0, module_module["a" /* CoreCourseModuleComponent */], [[2, nav_controller["a" /* NavController */]], module_prefetch_delegate["a" /* CoreCourseModulePrefetchDelegate */], dom["a" /* CoreDomUtilsProvider */], providers_helper["a" /* CoreCourseHelperProvider */], events["a" /* CoreEventsProvider */], sites["a" /* CoreSitesProvider */]], { module: [0, "module"], courseId: [1, "courseId"], enabled: [2, "enabled"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit; var currVal_1 = _co.siteHomeId; var currVal_2 = true; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_CoreSiteHomeIndexComponent_12(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 10, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_13)), core["_15" /* ɵdid */](3, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_14)), core["_15" /* ɵdid */](6, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_15)), core["_15" /* ɵdid */](9, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.section && _co.section.hasContent) || (_co.items.length > 0)); _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.block.summary; _ck(_v, 6, 0, currVal_1); var currVal_2 = _co.block.modules; _ck(_v, 9, 0, currVal_2); }, null); }
function View_CoreSiteHomeIndexComponent_16(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "core-empty-box", [["icon", "qr-scanner"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_15" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], icon: [1, "icon"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, core["_29" /* ɵnov */](_v, 2).transform("core.course.nocontentavailable")); var currVal_1 = "qr-scanner"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CoreSiteHomeIndexComponent_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 21, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_15" /* ɵdid */](1, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["p" /* ElementRef */], events["a" /* CoreEventsProvider */], utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n    "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, 0, 14, "ion-list", [], null, null, null, null, null)), core["_15" /* ɵdid */](4, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_1)), core["_15" /* ɵdid */](8, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_4)), core["_15" /* ɵdid */](12, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_12)), core["_15" /* ɵdid */](16, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n    "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_CoreSiteHomeIndexComponent_16)), core["_15" /* ɵdid */](20, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.dataLoaded; _ck(_v, 1, 0, currVal_0); var currVal_1 = (_co.section && _co.section.hasContent); _ck(_v, 8, 0, currVal_1); var currVal_2 = (_co.items.length > 0); _ck(_v, 12, 0, currVal_2); var currVal_3 = (_co.block && _co.block.hasContent); _ck(_v, 16, 0, currVal_3); var currVal_4 = !_co.hasContent; _ck(_v, 20, 0, currVal_4); }, null); }
function View_CoreSiteHomeIndexComponent_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-sitehome-index", [], null, null, null, View_CoreSiteHomeIndexComponent_0, RenderType_CoreSiteHomeIndexComponent)), core["_15" /* ɵdid */](1, 114688, null, 0, index["a" /* CoreSiteHomeIndexComponent */], [dom["a" /* CoreDomUtilsProvider */], sites["a" /* CoreSitesProvider */], course["a" /* CoreCourseProvider */], providers_helper["a" /* CoreCourseHelperProvider */], module_prefetch_delegate["a" /* CoreCourseModulePrefetchDelegate */], sitehome["a" /* CoreSiteHomeProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CoreSiteHomeIndexComponentNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("core-sitehome-index", index["a" /* CoreSiteHomeIndexComponent */], View_CoreSiteHomeIndexComponent_Host_0, {}, {}, []);






/***/ })

});
//# sourceMappingURL=9.js.map