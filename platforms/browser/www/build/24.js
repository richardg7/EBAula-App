webpackJsonp([24],{

/***/ 1882:
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

// EXTERNAL MODULE: ./src/providers/app.ts
var app = __webpack_require__(11);

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__(58);

// EXTERNAL MODULE: ./src/providers/config.ts
var config = __webpack_require__(172);

// EXTERNAL MODULE: ./src/providers/file.ts
var file = __webpack_require__(47);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(13);

// EXTERNAL MODULE: ./src/providers/lang.ts
var lang = __webpack_require__(136);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/local-notifications.ts
var local_notifications = __webpack_require__(131);

// EXTERNAL MODULE: ./src/configconstants.ts
var configconstants = __webpack_require__(127);

// CONCATENATED MODULE: ./src/core/settings/pages/general/general.ts












/**
 * Page that displays the general settings.
 */
var general_CoreSettingsGeneralPage = /*@__PURE__*/ (function () {
    function CoreSettingsGeneralPage(appProvider, configProvider, fileProvider, eventsProvider, langProvider, domUtils, localNotificationsProvider) {
        var _this = this;
        this.configProvider = configProvider;
        this.eventsProvider = eventsProvider;
        this.langProvider = langProvider;
        this.domUtils = domUtils;
        this.languages = {};
        this.languageCodes = [];
        this.languages = configconstants["a" /* CoreConfigConstants */].languages;
        this.languageCodes = Object.keys(this.languages);
        langProvider.getCurrentLanguage().then(function (currentLanguage) {
            _this.selectedLanguage = currentLanguage;
        });
        this.rteSupported = this.domUtils.isRichTextEditorSupported();
        if (this.rteSupported) {
            this.configProvider.get(constants["a" /* CoreConstants */].SETTINGS_RICH_TEXT_EDITOR, true).then(function (richTextEditorEnabled) {
                _this.richTextEditor = !!richTextEditorEnabled;
            });
        }
        if (localStorage && localStorage.getItem && localStorage.setItem) {
            this.showReport = true;
            this.reportInBackground = parseInt(localStorage.getItem(constants["a" /* CoreConstants */].SETTINGS_REPORT_IN_BACKGROUND), 10) === 1;
        }
        else {
            this.showReport = false;
        }
    }
    /**
     * Called when a new language is selected.
     */
    CoreSettingsGeneralPage.prototype.languageChanged = function () {
        var _this = this;
        this.langProvider.changeCurrentLanguage(this.selectedLanguage).finally(function () {
            _this.eventsProvider.trigger(events["a" /* CoreEventsProvider */].LANGUAGE_CHANGED);
        });
    };
    /**
     * Called when the rich text editor is enabled or disabled.
     */
    CoreSettingsGeneralPage.prototype.richTextEditorChanged = function () {
        this.configProvider.set(constants["a" /* CoreConstants */].SETTINGS_RICH_TEXT_EDITOR, this.richTextEditor ? 1 : 0);
    };
    /**
     * Called when the report in background setting is enabled or disabled.
     */
    CoreSettingsGeneralPage.prototype.reportInBackgroundChanged = function () {
        localStorage.setItem(constants["a" /* CoreConstants */].SETTINGS_REPORT_IN_BACKGROUND, this.reportInBackground ? '1' : '0');
    };
    return CoreSettingsGeneralPage;
}());





// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(33);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(29);

// CONCATENATED MODULE: ./src/core/settings/pages/general/general.module.ts







var CoreSettingsGeneralPageModule = /*@__PURE__*/ (function () {
    function CoreSettingsGeneralPageModule() {
    }
    return CoreSettingsGeneralPageModule;
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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/option/option.js
var option_option = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.ngfactory.js + 1 modules
var item_ngfactory = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.js
var item = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config_config = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-reorder.js + 1 modules
var item_reorder = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toggle/toggle.ngfactory.js
var toggle_ngfactory = __webpack_require__(1897);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toggle/toggle.js + 1 modules
var toggle = __webpack_require__(636);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/haptic.js
var haptic = __webpack_require__(193);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(420);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(1290);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(191);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app_app = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(22);

// EXTERNAL MODULE: ./src/directives/back-button.ts
var back_button = __webpack_require__(635);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(1291);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(326);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(236);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(178);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.ngfactory.js
var select_ngfactory = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.js
var select_select = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(9);

// CONCATENATED MODULE: ./src/core/settings/pages/general/general.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,ionic_angular_components_option_option,_.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_label_label,_ngx_translate_core_src_translate.pipe,_ngx_translate_core_src_translate.service,_.._.._.._.._node_modules_ionic_angular_components_toggle_toggle.ngfactory,ionic_angular_components_toggle_toggle,ionic_angular_platform_platform,ionic_angular_tap_click_haptic,ionic_angular_gestures_gesture_controller,ionic_angular_platform_dom_controller,_angular_forms,ionic_angular_components_toolbar_toolbar_header,ionic_angular_navigation_view_controller,_.._.._.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,_.._.._.._directives_back_button,_.._.._.._providers_events,_.._.._.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_toolbar,_.._.._.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_keyboard,_.._.._.._.._node_modules_ionic_angular_components_select_select.ngfactory,ionic_angular_components_select_select,ionic_angular_navigation_deep_linker,_angular_common,_general,_.._.._.._providers_app,_.._.._.._providers_config,_.._.._.._providers_file,_.._.._.._providers_lang,_.._.._.._providers_utils_dom,_.._.._.._providers_local_notifications PURE_IMPORTS_END */











































var styles_CoreSettingsGeneralPage = [];
var RenderType_CoreSettingsGeneralPage = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreSettingsGeneralPage, data: {} });

function View_CoreSettingsGeneralPage_1(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, [[4, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](2, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.languages[_v.context.$implicit]; _ck(_v, 2, 0, currVal_1); }); }
function View_CoreSettingsGeneralPage_2(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 25, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 5, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 6, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 7, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 1, 10, "ion-label", [], null, null, null, null, null)), core["_15" /* ɵdid */](8, 16384, [[5, 4]], 0, label["a" /* Label */], [config_config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](10, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](11, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](14, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](15, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_16" /* ɵeld */](19, 0, null, 4, 5, "ion-toggle", [], [[2, "toggle-disabled", null], [2, "toggle-checked", null], [2, "toggle-activated", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keyup"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("keyup" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 20)._keyup($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_1 = ((_co.richTextEditor = $event) !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = (_co.richTextEditorChanged() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, toggle_ngfactory["b" /* View_Toggle_0 */], toggle_ngfactory["a" /* RenderType_Toggle */])), core["_15" /* ɵdid */](20, 1228800, null, 0, toggle["a" /* Toggle */], [util_form["a" /* Form */], config_config["a" /* Config */], platform["a" /* Platform */], core["p" /* ElementRef */], core["K" /* Renderer */], haptic["a" /* Haptic */], [2, item["a" /* Item */]], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */], core["D" /* NgZone */]], null, null), core["_35" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [toggle["a" /* Toggle */]]), core["_15" /* ɵdid */](22, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_15" /* ɵdid */](24, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_12 = _co.richTextEditor; _ck(_v, 22, 0, currVal_12); }, function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 11, 0, core["_29" /* ɵnov */](_v, 12).transform("core.settings.enablerichtexteditor")); _ck(_v, 11, 0, currVal_0); var currVal_1 = core["_41" /* ɵunv */](_v, 15, 0, core["_29" /* ɵnov */](_v, 16).transform("core.settings.enablerichtexteditordescription")); _ck(_v, 15, 0, currVal_1); var currVal_2 = core["_29" /* ɵnov */](_v, 20)._disabled; var currVal_3 = core["_29" /* ɵnov */](_v, 20)._value; var currVal_4 = core["_29" /* ɵnov */](_v, 20)._activated; var currVal_5 = core["_29" /* ɵnov */](_v, 24).ngClassUntouched; var currVal_6 = core["_29" /* ɵnov */](_v, 24).ngClassTouched; var currVal_7 = core["_29" /* ɵnov */](_v, 24).ngClassPristine; var currVal_8 = core["_29" /* ɵnov */](_v, 24).ngClassDirty; var currVal_9 = core["_29" /* ɵnov */](_v, 24).ngClassValid; var currVal_10 = core["_29" /* ɵnov */](_v, 24).ngClassInvalid; var currVal_11 = core["_29" /* ɵnov */](_v, 24).ngClassPending; _ck(_v, 19, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); });
}
function View_CoreSettingsGeneralPage_3(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 19, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 8, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 9, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 10, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 1, 4, "ion-label", [], null, null, null, null, null)), core["_15" /* ɵdid */](8, 16384, [[8, 4]], 0, label["a" /* Label */], [config_config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_16" /* ɵeld */](9, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](10, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_16" /* ɵeld */](13, 0, null, 4, 5, "ion-toggle", [], [[2, "toggle-disabled", null], [2, "toggle-checked", null], [2, "toggle-activated", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keyup"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("keyup" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 14)._keyup($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_1 = ((_co.reportInBackground = $event) !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = (_co.reportInBackgroundChanged() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, toggle_ngfactory["b" /* View_Toggle_0 */], toggle_ngfactory["a" /* RenderType_Toggle */])), core["_15" /* ɵdid */](14, 1228800, null, 0, toggle["a" /* Toggle */], [util_form["a" /* Form */], config_config["a" /* Config */], platform["a" /* Platform */], core["p" /* ElementRef */], core["K" /* Renderer */], haptic["a" /* Haptic */], [2, item["a" /* Item */]], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */], core["D" /* NgZone */]], null, null), core["_35" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [toggle["a" /* Toggle */]]), core["_15" /* ɵdid */](16, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_15" /* ɵdid */](18, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_11 = _co.reportInBackground; _ck(_v, 16, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 10, 0, core["_29" /* ɵnov */](_v, 11).transform("core.settings.reportinbackground")); _ck(_v, 10, 0, currVal_0); var currVal_1 = core["_29" /* ɵnov */](_v, 14)._disabled; var currVal_2 = core["_29" /* ɵnov */](_v, 14)._value; var currVal_3 = core["_29" /* ɵnov */](_v, 14)._activated; var currVal_4 = core["_29" /* ɵnov */](_v, 18).ngClassUntouched; var currVal_5 = core["_29" /* ɵnov */](_v, 18).ngClassTouched; var currVal_6 = core["_29" /* ɵnov */](_v, 18).ngClassPristine; var currVal_7 = core["_29" /* ɵnov */](_v, 18).ngClassDirty; var currVal_8 = core["_29" /* ɵnov */](_v, 18).ngClassValid; var currVal_9 = core["_29" /* ɵnov */](_v, 18).ngClassInvalid; var currVal_10 = core["_29" /* ɵnov */](_v, 18).ngClassPending; _ck(_v, 13, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); });
}
function View_CoreSettingsGeneralPage_0(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 12, "ion-header", [], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config_config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 8, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_15" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config_config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), core["_15" /* ɵdid */](5, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_15" /* ɵdid */](8, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config_config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_40" /* ɵted */](9, 0, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_16" /* ɵeld */](14, 0, null, null, 34, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_15" /* ɵdid */](15, 4374528, null, 0, content["a" /* Content */], [config_config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["K" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["D" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_16" /* ɵeld */](17, 0, null, 1, 24, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](18, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_15" /* ɵdid */](22, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_16" /* ɵeld */](24, 0, null, 1, 4, "ion-label", [], null, null, null, null, null)), core["_15" /* ɵdid */](25, 16384, [[1, 4]], 0, label["a" /* Label */], [config_config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_16" /* ɵeld */](26, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](27, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_16" /* ɵeld */](30, 0, null, 3, 10, "ion-select", [["interface", "popover"]], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"], [null, "keyup.space"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 31)._click($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keyup.space" === en)) {
                var pd_1 = (core["_29" /* ɵnov */](_v, 31)._keyup() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.selectedLanguage = $event) !== false);
                ad = (pd_2 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_3 = (_co.languageChanged() !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, select_ngfactory["b" /* View_Select_0 */], select_ngfactory["a" /* RenderType_Select */])), core["_15" /* ɵdid */](31, 1228800, null, 1, select_select["a" /* Select */], [app_app["a" /* App */], util_form["a" /* Form */], config_config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item["a" /* Item */]], deep_linker["a" /* DeepLinker */]], { interface: [0, "interface"] }, null), core["_37" /* ɵqud */](603979776, 4, { options: 1 }), core["_35" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [select_select["a" /* Select */]]), core["_15" /* ɵdid */](34, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_15" /* ɵdid */](36, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSettingsGeneralPage_1)), core["_15" /* ɵdid */](39, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_11" /* ɵand */](16777216, null, 1, 1, null, View_CoreSettingsGeneralPage_2)), core["_15" /* ɵdid */](44, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_11" /* ɵand */](16777216, null, 1, 1, null, View_CoreSettingsGeneralPage_3)), core["_15" /* ɵdid */](47, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 5, 0); var currVal_14 = "popover"; _ck(_v, 31, 0, currVal_14); var currVal_15 = _co.selectedLanguage; _ck(_v, 34, 0, currVal_15); var currVal_16 = _co.languageCodes; _ck(_v, 39, 0, currVal_16); var currVal_17 = _co.rteSupported; _ck(_v, 44, 0, currVal_17); var currVal_18 = _co.showReport; _ck(_v, 47, 0, currVal_18); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_29" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_41" /* ɵunv */](_v, 9, 0, core["_29" /* ɵnov */](_v, 10).transform("core.settings.general")); _ck(_v, 9, 0, currVal_2); var currVal_3 = core["_29" /* ɵnov */](_v, 15).statusbarPadding; var currVal_4 = core["_29" /* ɵnov */](_v, 15)._hasRefresher; _ck(_v, 14, 0, currVal_3, currVal_4); var currVal_5 = core["_41" /* ɵunv */](_v, 27, 0, core["_29" /* ɵnov */](_v, 28).transform("core.settings.language")); _ck(_v, 27, 0, currVal_5); var currVal_6 = core["_29" /* ɵnov */](_v, 31)._disabled; var currVal_7 = core["_29" /* ɵnov */](_v, 36).ngClassUntouched; var currVal_8 = core["_29" /* ɵnov */](_v, 36).ngClassTouched; var currVal_9 = core["_29" /* ɵnov */](_v, 36).ngClassPristine; var currVal_10 = core["_29" /* ɵnov */](_v, 36).ngClassDirty; var currVal_11 = core["_29" /* ɵnov */](_v, 36).ngClassValid; var currVal_12 = core["_29" /* ɵnov */](_v, 36).ngClassInvalid; var currVal_13 = core["_29" /* ɵnov */](_v, 36).ngClassPending; _ck(_v, 30, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); });
}
function View_CoreSettingsGeneralPage_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "page-core-settings-general", [], null, null, null, View_CoreSettingsGeneralPage_0, RenderType_CoreSettingsGeneralPage)), core["_15" /* ɵdid */](1, 49152, null, 0, general_CoreSettingsGeneralPage, [app["a" /* CoreAppProvider */], config["a" /* CoreConfigProvider */], file["a" /* CoreFileProvider */], events["a" /* CoreEventsProvider */], lang["a" /* CoreLangProvider */], dom["a" /* CoreDomUtilsProvider */], local_notifications["a" /* CoreLocalNotificationsProvider */]], null, null)], null, null); }
var CoreSettingsGeneralPageNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("page-core-settings-general", general_CoreSettingsGeneralPage, View_CoreSettingsGeneralPage_Host_0, {}, {}, []);





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

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(237);

// CONCATENATED MODULE: ./src/core/settings/pages/general/general.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsGeneralPageModuleNgFactory", function() { return CoreSettingsGeneralPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_general.module,_.._.._.._.._node_modules_ionic_angular_components_action_sheet_action_sheet_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_alert_alert_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_app_app_root.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_loading_loading_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_modal_modal_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_picker_picker_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_popover_popover_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_select_select_popover_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_toast_toast_component.ngfactory,_.._.._.._components_context_menu_context_menu_popover.ngfactory,_.._.._.._components_course_picker_menu_course_picker_menu_popover.ngfactory,_.._.._.._components_recaptcha_recaptchamodal.ngfactory,_general.ngfactory,_angular_common,_angular_forms,_ngx_translate_core_src_translate.loader,_ngx_translate_core_src_translate.compiler,_ngx_translate_core_src_translate.parser,_ngx_translate_core_src_missing_translation_handler,_ngx_translate_core_src_translate.service,_ngx_translate_core_src_translate.store,ionic_angular_module,_ngx_translate_core_index,_.._.._.._directives_directives.module,_.._.._.._pipes_pipes.module,_.._.._.._components_components.module,ionic_angular_util_module_loader,_general PURE_IMPORTS_END */






























var CoreSettingsGeneralPageModuleNgFactory = /*@__PURE__*/ core["_13" /* ɵcmf */](CoreSettingsGeneralPageModule, [], function (_l) { return core["_25" /* ɵmod */]([core["_26" /* ɵmpd */](512, core["n" /* ComponentFactoryResolver */], core["_6" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], CoreSettingsGeneralPageNgFactory]], [3, core["n" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["_26" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["v" /* ɵa */]]]), core["_26" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_26" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_26" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_26" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_26" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_26" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_26" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_26" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_26" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_26" /* ɵmpd */](512, _ngx_translate_core["a" /* TranslateModule */], _ngx_translate_core["a" /* TranslateModule */], []), core["_26" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_26" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_26" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_26" /* ɵmpd */](512, CoreSettingsGeneralPageModule, CoreSettingsGeneralPageModule, []), core["_26" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_26" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_26" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], general_CoreSettingsGeneralPage, [])]); });






/***/ }),

/***/ 1897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_Toggle; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_Toggle_0;
/* unused harmony export View_Toggle_Host_0 */
/* unused harmony export ToggleNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = /*@__PURE__*/__webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_button_ngfactory__ = /*@__PURE__*/__webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_button__ = /*@__PURE__*/__webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = /*@__PURE__*/__webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toggle__ = /*@__PURE__*/__webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_form__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__platform_platform__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tap_click_haptic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__item_item__ = /*@__PURE__*/__webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gestures_gesture_controller__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__platform_dom_controller__ = __webpack_require__(26);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_button_button.ngfactory,_button_button,_.._config_config,_angular_forms,_toggle,_.._util_form,_.._platform_platform,_.._tap_click_haptic,_item_item,_.._gestures_gesture_controller,_.._platform_dom_controller PURE_IMPORTS_END */












var styles_Toggle = [];
var RenderType_Toggle = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_Toggle, data: {} });

function View_Toggle_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](0, 0, null, null, 1, "div", [["class", "toggle-icon"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](1, 0, null, null, 0, "div", [["class", "toggle-inner"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](2, 0, null, null, 1, "button", [["class", "item-cover"], ["disable-activated", ""], ["ion-button", "item-cover"], ["role", "checkbox"], ["type", "button"]], [[8, "id", 0], [1, "aria-checked", 0], [1, "aria-labelledby", 0], [1, "aria-disabled", 0]], null, null, __WEBPACK_IMPORTED_MODULE_1__button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_1__button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](3, 1097728, null, 0, __WEBPACK_IMPORTED_MODULE_2__button_button__["a" /* Button */], [[8, "item-cover"], __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Renderer */]], null, null)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.id; var currVal_1 = _co._value; var currVal_2 = _co._labelId; var currVal_3 = _co._disabled; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
function View_Toggle_Host_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](0, 0, null, null, 2, "ion-toggle", [], [[2, "toggle-disabled", null], [2, "toggle-checked", null], [2, "toggle-activated", null]], [[null, "keyup"]], function (_v, en, $event) {
            var ad = true;
            if (("keyup" === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 2)._keyup($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_Toggle_0, RenderType_Toggle)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵprd */](5120, null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [__WEBPACK_IMPORTED_MODULE_5__toggle__["a" /* Toggle */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](2, 1228800, null, 0, __WEBPACK_IMPORTED_MODULE_5__toggle__["a" /* Toggle */], [__WEBPACK_IMPORTED_MODULE_6__util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_7__platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Renderer */], __WEBPACK_IMPORTED_MODULE_8__tap_click_haptic__["a" /* Haptic */], [2, __WEBPACK_IMPORTED_MODULE_9__item_item__["a" /* Item */]], __WEBPACK_IMPORTED_MODULE_10__gestures_gesture_controller__["l" /* GestureController */], __WEBPACK_IMPORTED_MODULE_11__platform_dom_controller__["a" /* DomController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* NgZone */]], null, null)], null, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 2)._disabled; var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 2)._value; var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 2)._activated; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); });
}
var ToggleNgFactory = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ɵccf */]("ion-toggle", __WEBPACK_IMPORTED_MODULE_5__toggle__["a" /* Toggle */], View_Toggle_Host_0, { color: "color", mode: "mode", disabled: "disabled", checked: "checked" }, { ionFocus: "ionFocus", ionChange: "ionChange", ionBlur: "ionBlur" }, []);






/***/ })

});
//# sourceMappingURL=24.js.map