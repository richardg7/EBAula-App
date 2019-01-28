webpackJsonp([19],{

/***/ 1854:
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

// EXTERNAL MODULE: ./src/core/course/pages/section/section.ts
var section = __webpack_require__(1325);

// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(33);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(29);

// EXTERNAL MODULE: ./src/core/course/components/components.module.ts
var components_components_module = __webpack_require__(76);

// CONCATENATED MODULE: ./src/core/course/pages/section/section.module.ts








var CoreCourseSectionPageModule = /*@__PURE__*/ (function () {
    function CoreCourseSectionPageModule() {
    }
    return CoreCourseSectionPageModule;
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

// EXTERNAL MODULE: ./src/components/context-menu/context-menu-item.ngfactory.js
var context_menu_item_ngfactory = __webpack_require__(87);

// EXTERNAL MODULE: ./src/components/context-menu/context-menu-item.ts
var context_menu_item = __webpack_require__(78);

// EXTERNAL MODULE: ./src/components/context-menu/context-menu.ts
var context_menu = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

// EXTERNAL MODULE: ./src/components/navbar-buttons/navbar-buttons.ngfactory.js
var navbar_buttons_ngfactory = __webpack_require__(88);

// EXTERNAL MODULE: ./src/components/navbar-buttons/navbar-buttons.ts
var navbar_buttons = __webpack_require__(79);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(6);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/components/context-menu/context-menu.ngfactory.js
var context_menu_ngfactory = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-controller.js
var popover_controller = __webpack_require__(69);

// EXTERNAL MODULE: ./src/components/tabs/tab.ts
var tab = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(9);

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
var app = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher.js
var refresher = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.ngfactory.js
var refresher_content_ngfactory = __webpack_require__(192);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.js
var refresher_content = __webpack_require__(145);

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(57);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(51);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(13);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(3);

// EXTERNAL MODULE: ./src/directives/external-content.ts
var external_content = __webpack_require__(162);

// EXTERNAL MODULE: ./src/providers/filepool.ts
var filepool = __webpack_require__(17);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(2);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var url = __webpack_require__(25);

// EXTERNAL MODULE: ./src/providers/app.ts
var providers_app = __webpack_require__(11);

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

// EXTERNAL MODULE: ./src/components/progress-bar/progress-bar.ngfactory.js
var progress_bar_ngfactory = __webpack_require__(641);

// EXTERNAL MODULE: ./src/components/progress-bar/progress-bar.ts
var progress_bar = __webpack_require__(330);

// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/esm5/platform-browser.js
var platform_browser = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/row.js
var row = __webpack_require__(116);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/col.js
var col = __webpack_require__(115);

// EXTERNAL MODULE: ./src/components/icon/icon.ngfactory.js
var icon_ngfactory = __webpack_require__(194);

// EXTERNAL MODULE: ./src/components/icon/icon.ts
var icon = __webpack_require__(165);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon_icon = __webpack_require__(42);

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ngfactory.js
var empty_box_ngfactory = __webpack_require__(164);

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ts
var empty_box = __webpack_require__(134);

// EXTERNAL MODULE: ./src/components/dynamic-component/dynamic-component.ngfactory.js
var dynamic_component_ngfactory = __webpack_require__(1296);

// EXTERNAL MODULE: ./src/components/dynamic-component/dynamic-component.ts
var dynamic_component = __webpack_require__(196);

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(40);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(12);

// EXTERNAL MODULE: ./src/core/contentlinks/providers/helper.ts
var helper = __webpack_require__(23);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(35);

// EXTERNAL MODULE: ./src/providers/utils/iframe.ts
var iframe = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(421);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(236);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(191);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(163);

// EXTERNAL MODULE: ./src/core/course/components/module/module.ngfactory.js + 1 modules
var module_ngfactory = __webpack_require__(1902);

// EXTERNAL MODULE: ./src/core/course/components/module/module.ts
var module_module = __webpack_require__(1300);

// EXTERNAL MODULE: ./src/core/course/providers/module-prefetch-delegate.ts
var module_prefetch_delegate = __webpack_require__(52);

// EXTERNAL MODULE: ./src/core/course/providers/helper.ts
var providers_helper = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/badge/badge.js
var badge = __webpack_require__(212);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/spinner/spinner.ngfactory.js
var spinner_ngfactory = __webpack_require__(180);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/spinner/spinner.js
var spinner = __webpack_require__(135);

// EXTERNAL MODULE: ./src/core/course/components/format/format.ts
var format = __webpack_require__(439);

// EXTERNAL MODULE: ./src/core/course/providers/format-delegate.ts
var format_delegate = __webpack_require__(147);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-controller.js
var modal_controller = __webpack_require__(197);

// CONCATENATED MODULE: ./src/core/course/components/format/format.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._components_navbar_buttons_navbar_buttons.ngfactory,_.._.._.._components_navbar_buttons_navbar_buttons,_.._.._.._providers_logger,_.._.._.._providers_utils_dom,_.._.._.._components_context_menu_context_menu.ngfactory,_.._.._.._components_context_menu_context_menu,_ngx_translate_core_src_translate.service,ionic_angular_components_popover_popover_controller,_.._.._.._components_tabs_tab,_.._.._.._components_context_menu_context_menu_item.ngfactory,_.._.._.._components_context_menu_context_menu_item,_ngx_translate_core_src_translate.pipe,_.._.._.._directives_external_content,_.._.._.._providers_filepool,ionic_angular_platform_platform,_.._.._.._providers_sites,_.._.._.._providers_utils_url,_.._.._.._providers_app,_.._.._.._providers_utils_utils,_.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,_.._.._.._components_progress_bar_progress_bar.ngfactory,_.._.._.._components_progress_bar_progress_bar,_angular_platform_browser,ionic_angular_components_list_list,ionic_angular_gestures_gesture_controller,ionic_angular_platform_dom_controller,_angular_common,ionic_angular_components_grid_row,_.._.._.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_components_grid_col,_.._.._.._components_icon_icon.ngfactory,_.._.._.._components_icon_icon,ionic_angular_components_icon_icon,_.._.._.._components_empty_box_empty_box.ngfactory,_.._.._.._components_empty_box_empty_box,_.._.._.._components_dynamic_component_dynamic_component.ngfactory,_.._.._.._components_dynamic_component_dynamic_component,ionic_angular_navigation_nav_controller,_.._.._.._directives_format_text,_.._.._.._providers_utils_text,_.._.._contentlinks_providers_helper,ionic_angular_components_content_content,_.._.._.._components_split_view_split_view,_.._.._.._providers_utils_iframe,_.._.._.._providers_events,ionic_angular_components_toolbar_toolbar_item,ionic_angular_components_toolbar_toolbar,ionic_angular_components_toolbar_navbar,ionic_angular_components_item_item_divider,_module_module.ngfactory,_module_module,_.._providers_module_prefetch_delegate,_.._providers_helper,ionic_angular_components_badge_badge,_.._.._.._.._node_modules_ionic_angular_components_spinner_spinner.ngfactory,ionic_angular_components_spinner_spinner,_.._.._.._components_loading_loading.ngfactory,_.._.._.._components_loading_loading,_format,_.._providers_format_delegate,ionic_angular_components_modal_modal_controller PURE_IMPORTS_END */




































































var styles_CoreCourseFormatComponent = [];
var RenderType_CoreCourseFormatComponent = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreCourseFormatComponent, data: {} });

function View_CoreCourseFormatComponent_1(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 11, "core-navbar-buttons", [["end", ""]], null, null, null, navbar_buttons_ngfactory["b" /* View_CoreNavBarButtonsComponent_0 */], navbar_buttons_ngfactory["a" /* RenderType_CoreNavBarButtonsComponent */])), core["_15" /* ɵdid */](1, 245760, null, 1, navbar_buttons["a" /* CoreNavBarButtonsComponent */], [core["p" /* ElementRef */], logger["a" /* CoreLoggerProvider */], dom["a" /* CoreDomUtilsProvider */]], null, null), core["_37" /* ɵqud */](603979776, 2, { buttons: 1 }), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_16" /* ɵeld */](4, 0, null, 0, 6, "core-context-menu", [], null, null, null, context_menu_ngfactory["b" /* View_CoreContextMenuComponent_0 */], context_menu_ngfactory["a" /* RenderType_CoreContextMenuComponent */])), core["_15" /* ɵdid */](5, 245760, null, 0, context_menu["a" /* CoreContextMenuComponent */], [translate_service["a" /* TranslateService */], popover_controller["a" /* PopoverController */], core["p" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */], [2, tab["a" /* CoreTabComponent */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 0, 2, "core-context-menu-item", [["iconAction", "menu"]], null, [[null, "action"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("action" === en)) {
                var pd_0 = (_co.showSectionSelector($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, context_menu_item_ngfactory["b" /* View_CoreContextMenuItemComponent_0 */], context_menu_item_ngfactory["a" /* RenderType_CoreContextMenuItemComponent */])), core["_15" /* ɵdid */](8, 770048, null, 0, context_menu_item["a" /* CoreContextMenuItemComponent */], [context_menu["a" /* CoreContextMenuComponent */]], { content: [0, "content"], iconAction: [1, "iconAction"], priority: [2, "priority"], hidden: [3, "hidden"] }, { action: "action" }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); _ck(_v, 5, 0); var currVal_0 = core["_41" /* ɵunv */](_v, 8, 0, core["_29" /* ɵnov */](_v, 9).transform("core.course.sections")); var currVal_1 = "menu"; var currVal_2 = 500; var currVal_3 = ((!_co.displaySectionSelector || !_co.sections) || !_co.sections.length); _ck(_v, 8, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null);
}
function View_CoreCourseFormatComponent_3(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 4, "div", [["class", "core-course-thumb"]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 1, "img", [["alt", ""], ["core-external-content", ""]], [[8, "src", 4]], null, null, null, null)), core["_15" /* ɵdid */](3, 4210688, null, 0, external_content["a" /* CoreExternalContentDirective */], [core["p" /* ElementRef */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], platform["a" /* Platform */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], providers_app["a" /* CoreAppProvider */], utils["a" /* CoreUtilsProvider */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.course.imageThumb; _ck(_v, 2, 0, currVal_0); }); }
function View_CoreCourseFormatComponent_4(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 9, "ion-item", [["class", "core-course-progress item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 3, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 4, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 5, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 2, 1, "core-progress-bar", [], null, null, null, progress_bar_ngfactory["b" /* View_CoreProgressBarComponent_0 */], progress_bar_ngfactory["a" /* RenderType_CoreProgressBarComponent */])), core["_15" /* ɵdid */](8, 573440, null, 0, progress_bar["a" /* CoreProgressBarComponent */], [platform_browser["c" /* DomSanitizer */]], { progress: [0, "progress"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.course.progress; _ck(_v, 8, 0, currVal_0); }, null); }
function View_CoreCourseFormatComponent_2(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 8, "ion-list", [["class", "core-format-progress-list"], ["no-lines", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseFormatComponent_3)), core["_15" /* ɵdid */](4, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseFormatComponent_4)), core["_15" /* ɵdid */](7, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.course.imageThumb; _ck(_v, 4, 0, currVal_0); var currVal_1 = ((_co.course.progress != null) && (_co.course.progress >= 0)); _ck(_v, 7, 0, currVal_1); }, null); }
function View_CoreCourseFormatComponent_6(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_CoreCourseFormatComponent_5(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 19, "div", [["class", "clearfix row"], ["ion-row", ""], ["justify-content-between", ""], ["padding", ""], ["text-wrap", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 10, "button", [["class", "core-button-select button-no-uppercase col"], ["color", "light"], ["float-start", ""], ["icon-start", ""], ["ion-button", ""], ["ion-col", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.showSectionSelector($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](4, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), core["_15" /* ɵdid */](5, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 0, 1, "core-icon", [["name", "fa-folder"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_15" /* ɵdid */](8, 114688, null, 0, icon["a" /* CoreIconComponent */], [core["p" /* ElementRef */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](9, 0, ["\n                    ", "\n                    "])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_16" /* ɵeld */](11, 0, null, 0, 1, "ion-icon", [["ios", "md-arrow-dropdown"], ["name", "arrow-dropdown"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](12, 147456, null, 0, icon_icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"], ios: [1, "ios"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 2, null, View_CoreCourseFormatComponent_6)), core["_15" /* ɵdid */](17, 540672, null, 0, common["r" /* NgTemplateOutlet */], [core["W" /* ViewContainerRef */]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), core["_33" /* ɵpod */](18, { section: 0 }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "light"; _ck(_v, 4, 0, currVal_0); var currVal_1 = "fa-folder"; _ck(_v, 8, 0, currVal_1); var currVal_4 = "arrow-dropdown"; var currVal_5 = "md-arrow-dropdown"; _ck(_v, 12, 0, currVal_4, currVal_5); var currVal_6 = _ck(_v, 18, 0, _co.selectedSection); var currVal_7 = core["_29" /* ɵnov */](_v.parent, 45); _ck(_v, 17, 0, currVal_6, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = core["_41" /* ɵunv */](_v, 9, 0, core["_29" /* ɵnov */](_v, 10).transform(((_co.selectedSection && (_co.selectedSection.formattedName || _co.selectedSection.name)) || "core.course.sections"))); _ck(_v, 9, 0, currVal_2); var currVal_3 = core["_29" /* ɵnov */](_v, 12)._hidden; _ck(_v, 11, 0, currVal_3); });
}
function View_CoreCourseFormatComponent_8(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_CoreCourseFormatComponent_9(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "core-empty-box", [["icon", "qr-scanner"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_15" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], icon: [1, "icon"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, core["_29" /* ɵnov */](_v, 2).transform("core.course.nocontentavailable")); var currVal_1 = "qr-scanner"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CoreCourseFormatComponent_7(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 12, "div", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 9, "core-dynamic-component", [], null, null, null, dynamic_component_ngfactory["b" /* View_CoreDynamicComponent_0 */], dynamic_component_ngfactory["a" /* RenderType_CoreDynamicComponent */])), core["_15" /* ɵdid */](3, 901120, [[1, 4]], 0, dynamic_component["a" /* CoreDynamicComponent */], [logger["a" /* CoreLoggerProvider */], core["n" /* ComponentFactoryResolver */], core["w" /* KeyValueDiffers */], [2, nav_controller["a" /* NavController */]], core["i" /* ChangeDetectorRef */], core["p" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */]], { component: [0, "component"], data: [1, "data"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 2, null, View_CoreCourseFormatComponent_8)), core["_15" /* ɵdid */](6, 540672, null, 0, common["r" /* NgTemplateOutlet */], [core["W" /* ViewContainerRef */]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), core["_33" /* ɵpod */](7, { section: 0 }), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_CoreCourseFormatComponent_9)), core["_15" /* ɵdid */](10, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.singleSectionComponent; var currVal_1 = _co.data; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = _ck(_v, 7, 0, _co.selectedSection); var currVal_3 = core["_29" /* ɵnov */](_v.parent, 42); _ck(_v, 6, 0, currVal_2, currVal_3); var currVal_4 = !_co.selectedSection.hasContent; _ck(_v, 10, 0, currVal_4); }, null); }
function View_CoreCourseFormatComponent_12(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_CoreCourseFormatComponent_11(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 2, null, View_CoreCourseFormatComponent_12)), core["_15" /* ɵdid */](3, 540672, null, 0, common["r" /* NgTemplateOutlet */], [core["W" /* ViewContainerRef */]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), core["_33" /* ɵpod */](4, { section: 0 }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "]))], function (_ck, _v) { var currVal_0 = _ck(_v, 4, 0, _v.context.$implicit); var currVal_1 = core["_29" /* ɵnov */](_v.parent.parent, 42); _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_CoreCourseFormatComponent_10(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 8, "div", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 5, "core-dynamic-component", [], null, null, null, dynamic_component_ngfactory["b" /* View_CoreDynamicComponent_0 */], dynamic_component_ngfactory["a" /* RenderType_CoreDynamicComponent */])), core["_15" /* ɵdid */](3, 901120, [[1, 4]], 0, dynamic_component["a" /* CoreDynamicComponent */], [logger["a" /* CoreLoggerProvider */], core["n" /* ComponentFactoryResolver */], core["w" /* KeyValueDiffers */], [2, nav_controller["a" /* NavController */]], core["i" /* ChangeDetectorRef */], core["p" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */]], { component: [0, "component"], data: [1, "data"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_CoreCourseFormatComponent_11)), core["_15" /* ɵdid */](6, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.allSectionsComponent; var currVal_1 = _co.data; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = _co.sections; _ck(_v, 6, 0, currVal_2); }, null); }
function View_CoreCourseFormatComponent_14(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 9, "button", [["color", "light"], ["icon-only", ""], ["ion-button", ""]], [[8, "title", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.sectionChanged(_co.previousSection) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](1, 1097728, [[6, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_16" /* ɵeld */](4, 0, null, 0, 1, "ion-icon", [["md", "ios-arrow-back"], ["name", "arrow-back"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](5, 147456, null, 0, icon_icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"], md: [1, "md"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 0, 1, "core-format-text", [["class", "accesshide"]], null, null, null, null, null)), core["_15" /* ɵdid */](8, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], providers_app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "light"; _ck(_v, 1, 0, currVal_1); var currVal_3 = "arrow-back"; var currVal_4 = "ios-arrow-back"; _ck(_v, 5, 0, currVal_3, currVal_4); var currVal_5 = (_co.previousSection.formattedName || _co.previousSection.name); _ck(_v, 8, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 0, 0, core["_29" /* ɵnov */](_v, 2).transform("core.previous")), ""); _ck(_v, 0, 0, currVal_0); var currVal_2 = core["_29" /* ɵnov */](_v, 5)._hidden; _ck(_v, 4, 0, currVal_2); });
}
function View_CoreCourseFormatComponent_15(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 9, "button", [["icon-only", ""], ["ion-button", ""]], [[8, "title", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.sectionChanged(_co.nextSection) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](1, 1097728, [[6, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_16" /* ɵeld */](4, 0, null, 0, 1, "core-format-text", [["class", "accesshide"]], null, null, null, null, null)), core["_15" /* ɵdid */](5, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], providers_app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 0, 1, "ion-icon", [["md", "ios-arrow-forward"], ["name", "arrow-forward"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](8, 147456, null, 0, icon_icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"], md: [1, "md"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.nextSection.formattedName || _co.nextSection.name); _ck(_v, 5, 0, currVal_1); var currVal_3 = "arrow-forward"; var currVal_4 = "ios-arrow-forward"; _ck(_v, 8, 0, currVal_3, currVal_4); }, function (_ck, _v) { var currVal_0 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 0, 0, core["_29" /* ɵnov */](_v, 2).transform("core.next")), ""); _ck(_v, 0, 0, currVal_0); var currVal_2 = core["_29" /* ɵnov */](_v, 8)._hidden; _ck(_v, 7, 0, currVal_2); });
}
function View_CoreCourseFormatComponent_13(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 9, "ion-buttons", [["class", "core-course-section-nav-buttons"], ["end", ""], ["padding", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_37" /* ɵqud */](603979776, 6, { _buttons: 1 }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseFormatComponent_14)), core["_15" /* ɵdid */](5, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseFormatComponent_15)), core["_15" /* ɵdid */](8, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.previousSection; _ck(_v, 5, 0, currVal_0); var currVal_1 = _co.nextSection; _ck(_v, 8, 0, currVal_1); }, null); }
function View_CoreCourseFormatComponent_19(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_CoreCourseFormatComponent_18(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 14, "ion-item-divider", [["class", "item item-divider"], ["color", "light"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 7, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 8, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 9, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 2, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](8, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], providers_app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, 2, 2, null, View_CoreCourseFormatComponent_19)), core["_15" /* ɵdid */](12, 540672, null, 0, common["r" /* NgTemplateOutlet */], [core["W" /* ViewContainerRef */]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), core["_33" /* ɵpod */](13, { section: 0 }), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n        "]))], function (_ck, _v) { var currVal_0 = "light"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "light"; _ck(_v, 5, 0, currVal_1); var currVal_2 = _v.parent.parent.context.section.name; _ck(_v, 8, 0, currVal_2); var currVal_3 = _ck(_v, 13, 0, _v.parent.parent.context.section); var currVal_4 = core["_29" /* ɵnov */](_v.parent.parent.parent, 45); _ck(_v, 12, 0, currVal_3, currVal_4); }, null); }
function View_CoreCourseFormatComponent_20(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 9, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 10, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 11, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 12, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 2, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](8, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], providers_app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n        "]))], function (_ck, _v) { var currVal_0 = _v.parent.parent.context.section.summary; _ck(_v, 8, 0, currVal_0); }, null); }
function View_CoreCourseFormatComponent_22(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-course-module", [], null, [[null, "completionChanged"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("completionChanged" === en)) {
                var pd_0 = (_co.completionChanged.emit() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, module_ngfactory["b" /* View_CoreCourseModuleComponent_0 */], module_ngfactory["a" /* RenderType_CoreCourseModuleComponent */])), core["_15" /* ɵdid */](1, 245760, null, 0, module_module["a" /* CoreCourseModuleComponent */], [[2, nav_controller["a" /* NavController */]], module_prefetch_delegate["a" /* CoreCourseModulePrefetchDelegate */], dom["a" /* CoreDomUtilsProvider */], providers_helper["a" /* CoreCourseHelperProvider */], events["a" /* CoreEventsProvider */], sites["a" /* CoreSitesProvider */]], { module: [0, "module"], courseId: [1, "courseId"], enabled: [2, "enabled"] }, { completionChanged: "completionChanged" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.parent.context.$implicit; var currVal_1 = _co.course.id; var currVal_2 = _co.downloadEnabled; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null);
}
function View_CoreCourseFormatComponent_21(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseFormatComponent_22)), core["_15" /* ɵdid */](3, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit.visibleoncoursepage !== 0); _ck(_v, 3, 0, currVal_0); }, null); }
function View_CoreCourseFormatComponent_17(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 11, "section", [["ion-list", ""]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseFormatComponent_18)), core["_15" /* ɵdid */](4, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseFormatComponent_20)), core["_15" /* ɵdid */](7, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseFormatComponent_21)), core["_15" /* ɵdid */](10, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.selectedSection.id == _co.allSectionsId) && _v.parent.context.section.name); _ck(_v, 4, 0, currVal_0); var currVal_1 = _v.parent.context.section.summary; _ck(_v, 7, 0, currVal_1); var currVal_2 = _v.parent.context.section.modules; _ck(_v, 10, 0, currVal_2); }, null); }
function View_CoreCourseFormatComponent_16(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseFormatComponent_17)), core["_15" /* ɵdid */](2, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.section.hasContent && (_v.context.section.id != _co.allSectionsId)); _ck(_v, 2, 0, currVal_0); }, null); }
function View_CoreCourseFormatComponent_25(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 6, "button", [["clear", ""], ["color", "dark"], ["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.prefetch($event, _v.parent.parent.context.section) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](1, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"], clear: [1, "clear"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_16" /* ɵeld */](4, 0, null, 0, 1, "ion-icon", [["name", "cloud-download"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](5, 147456, null, 0, icon_icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "]))], function (_ck, _v) { var currVal_1 = "dark"; var currVal_2 = ""; _ck(_v, 1, 0, currVal_1, currVal_2); var currVal_4 = "cloud-download"; _ck(_v, 5, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 0, 0, core["_29" /* ɵnov */](_v, 2).transform("core.download")); _ck(_v, 0, 0, currVal_0); var currVal_3 = core["_29" /* ɵnov */](_v, 5)._hidden; _ck(_v, 4, 0, currVal_3); });
}
function View_CoreCourseFormatComponent_26(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 6, "button", [["clear", ""], ["color", "dark"], ["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.prefetch($event, _v.parent.parent.context.section) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](1, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"], clear: [1, "clear"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_16" /* ɵeld */](4, 0, null, 0, 1, "ion-icon", [["name", "refresh"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](5, 147456, null, 0, icon_icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "]))], function (_ck, _v) { var currVal_1 = "dark"; var currVal_2 = ""; _ck(_v, 1, 0, currVal_1, currVal_2); var currVal_4 = "refresh"; _ck(_v, 5, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 0, 0, core["_29" /* ɵnov */](_v, 2).transform("core.refresh")); _ck(_v, 0, 0, currVal_0); var currVal_3 = core["_29" /* ɵnov */](_v, 5)._hidden; _ck(_v, 4, 0, currVal_3); });
}
function View_CoreCourseFormatComponent_27(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "ion-badge", [["class", "core-course-download-section-progress"]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, badge["a" /* Badge */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), (_l()(), core["_40" /* ɵted */](2, null, ["", " / ", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.section.count; var currVal_1 = _v.parent.parent.context.section.total; _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_CoreCourseFormatComponent_28(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "ion-spinner", [], [[2, "spinner-paused", null]], null, null, spinner_ngfactory["b" /* View_Spinner_0 */], spinner_ngfactory["a" /* RenderType_Spinner */])), core["_15" /* ɵdid */](1, 114688, null, 0, spinner["a" /* Spinner */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 1)._paused; _ck(_v, 0, 0, currVal_0); }); }
function View_CoreCourseFormatComponent_24(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 17, "div", [["class", "core-button-spinner"], ["float-end", ""]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseFormatComponent_25)), core["_15" /* ɵdid */](4, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseFormatComponent_26)), core["_15" /* ɵdid */](8, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseFormatComponent_27)), core["_15" /* ɵdid */](12, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseFormatComponent_28)), core["_15" /* ɵdid */](16, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var currVal_0 = ((_v.parent.context.section.showDownload && !_v.parent.context.section.isDownloading) && !_v.parent.context.section.isCalculating); _ck(_v, 4, 0, currVal_0); var currVal_1 = ((_v.parent.context.section.showRefresh && !_v.parent.context.section.isDownloading) && !_v.parent.context.section.isCalculating); _ck(_v, 8, 0, currVal_1); var currVal_2 = ((_v.parent.context.section.isDownloading && (_v.parent.context.section.total > 0)) && (_v.parent.context.section.count < _v.parent.context.section.total)); _ck(_v, 12, 0, currVal_2); var currVal_3 = ((_v.parent.context.section.isDownloading && (_v.parent.context.section.total > 0)) || _v.parent.context.section.isCalculating); _ck(_v, 16, 0, currVal_3); }, null); }
function View_CoreCourseFormatComponent_23(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseFormatComponent_24)), core["_15" /* ɵdid */](2, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.section && _co.downloadEnabled); _ck(_v, 2, 0, currVal_0); }, null); }
function View_CoreCourseFormatComponent_0(_l) { return core["_42" /* ɵvid */](0, [core["_37" /* ɵqud */](671088640, 1, { dynamicComponents: 1 }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCourseFormatComponent_1)), core["_15" /* ɵdid */](3, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_16" /* ɵeld */](6, 0, null, null, 33, "core-dynamic-component", [], null, null, null, dynamic_component_ngfactory["b" /* View_CoreDynamicComponent_0 */], dynamic_component_ngfactory["a" /* RenderType_CoreDynamicComponent */])), core["_15" /* ɵdid */](7, 901120, [[1, 4]], 0, dynamic_component["a" /* CoreDynamicComponent */], [logger["a" /* CoreLoggerProvider */], core["n" /* ComponentFactoryResolver */], core["w" /* KeyValueDiffers */], [2, nav_controller["a" /* NavController */]], core["i" /* ChangeDetectorRef */], core["p" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */]], { component: [0, "component"], data: [1, "data"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_16" /* ɵeld */](10, 0, null, 0, 5, "core-dynamic-component", [], null, null, null, dynamic_component_ngfactory["b" /* View_CoreDynamicComponent_0 */], dynamic_component_ngfactory["a" /* RenderType_CoreDynamicComponent */])), core["_15" /* ɵdid */](11, 901120, [[1, 4]], 0, dynamic_component["a" /* CoreDynamicComponent */], [logger["a" /* CoreLoggerProvider */], core["n" /* ComponentFactoryResolver */], core["w" /* KeyValueDiffers */], [2, nav_controller["a" /* NavController */]], core["i" /* ChangeDetectorRef */], core["p" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */]], { component: [0, "component"], data: [1, "data"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_CoreCourseFormatComponent_2)), core["_15" /* ɵdid */](14, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n    "])), (_l()(), core["_16" /* ɵeld */](17, 0, null, 0, 18, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_15" /* ɵdid */](18, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["p" /* ElementRef */], events["a" /* CoreEventsProvider */], utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_16" /* ɵeld */](21, 0, null, 0, 5, "core-dynamic-component", [], null, null, null, dynamic_component_ngfactory["b" /* View_CoreDynamicComponent_0 */], dynamic_component_ngfactory["a" /* RenderType_CoreDynamicComponent */])), core["_15" /* ɵdid */](22, 901120, [[1, 4]], 0, dynamic_component["a" /* CoreDynamicComponent */], [logger["a" /* CoreLoggerProvider */], core["n" /* ComponentFactoryResolver */], core["w" /* KeyValueDiffers */], [2, nav_controller["a" /* NavController */]], core["i" /* ChangeDetectorRef */], core["p" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */]], { component: [0, "component"], data: [1, "data"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_CoreCourseFormatComponent_5)), core["_15" /* ɵdid */](25, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_CoreCourseFormatComponent_7)), core["_15" /* ɵdid */](30, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_CoreCourseFormatComponent_10)), core["_15" /* ɵdid */](34, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_CoreCourseFormatComponent_13)), core["_15" /* ɵdid */](38, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_11" /* ɵand */](0, [["sectionTemplate", 2]], null, 0, null, View_CoreCourseFormatComponent_16)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_11" /* ɵand */](0, [["sectionDownloadTemplate", 2]], null, 0, null, View_CoreCourseFormatComponent_23)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.loaded; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.courseFormatComponent; var currVal_2 = _co.data; _ck(_v, 7, 0, currVal_1, currVal_2); var currVal_3 = _co.courseSummaryComponent; var currVal_4 = _co.data; _ck(_v, 11, 0, currVal_3, currVal_4); var currVal_5 = (_co.course.imageThumb || ((_co.course.progress != null) && (_co.course.progress >= 0))); _ck(_v, 14, 0, currVal_5); var currVal_6 = _co.loaded; _ck(_v, 18, 0, currVal_6); var currVal_7 = _co.sectionSelectorComponent; var currVal_8 = _co.data; _ck(_v, 22, 0, currVal_7, currVal_8); var currVal_9 = ((_co.displaySectionSelector && _co.sections) && _co.sections.length); _ck(_v, 25, 0, currVal_9); var currVal_10 = (_co.selectedSection && (_co.selectedSection.id != _co.allSectionsId)); _ck(_v, 30, 0, currVal_10); var currVal_11 = (_co.selectedSection && (_co.selectedSection.id == _co.allSectionsId)); _ck(_v, 34, 0, currVal_11); var currVal_12 = ((_co.displaySectionSelector && _co.sections) && _co.sections.length); _ck(_v, 38, 0, currVal_12); }, null); }
function View_CoreCourseFormatComponent_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-course-format", [], null, null, null, View_CoreCourseFormatComponent_0, RenderType_CoreCourseFormatComponent)), core["_15" /* ɵdid */](1, 770048, null, 0, format["a" /* CoreCourseFormatComponent */], [format_delegate["a" /* CoreCourseFormatDelegate */], translate_service["a" /* TranslateService */], core["u" /* Injector */], providers_helper["a" /* CoreCourseHelperProvider */], dom["a" /* CoreDomUtilsProvider */], events["a" /* CoreEventsProvider */], sites["a" /* CoreSitesProvider */], content["a" /* Content */], module_prefetch_delegate["a" /* CoreCourseModulePrefetchDelegate */], modal_controller["a" /* ModalController */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CoreCourseFormatComponentNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("core-course-format", format["a" /* CoreCourseFormatComponent */], View_CoreCourseFormatComponent_Host_0, { course: "course", sections: "sections", downloadEnabled: "downloadEnabled", initialSectionId: "initialSectionId", initialSectionNumber: "initialSectionNumber", moduleId: "moduleId" }, { completionChanged: "completionChanged" }, []);





// EXTERNAL MODULE: ./src/components/tabs/tab.ngfactory.js
var tab_ngfactory = __webpack_require__(427);

// EXTERNAL MODULE: ./src/components/tabs/tabs.ts
var tabs = __webpack_require__(137);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(420);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(1290);

// EXTERNAL MODULE: ./src/directives/back-button.ts
var back_button = __webpack_require__(635);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(1291);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(326);

// EXTERNAL MODULE: ./src/components/tabs/tabs.ngfactory.js
var tabs_ngfactory = __webpack_require__(426);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(60);

// EXTERNAL MODULE: ./src/core/course/providers/course.ts
var course = __webpack_require__(16);

// EXTERNAL MODULE: ./src/core/course/providers/options-delegate.ts
var options_delegate = __webpack_require__(171);

// EXTERNAL MODULE: ./src/core/courses/providers/courses.ts
var courses = __webpack_require__(73);

// CONCATENATED MODULE: ./src/core/course/pages/section/section.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._components_context_menu_context_menu_item.ngfactory,_.._.._.._components_context_menu_context_menu_item,_.._.._.._components_context_menu_context_menu,_ngx_translate_core_src_translate.pipe,_ngx_translate_core_src_translate.service,_.._.._.._components_navbar_buttons_navbar_buttons.ngfactory,_.._.._.._components_navbar_buttons_navbar_buttons,_.._.._.._providers_logger,_.._.._.._providers_utils_dom,_.._.._.._components_context_menu_context_menu.ngfactory,ionic_angular_components_popover_popover_controller,_.._.._.._components_tabs_tab,_angular_common,_.._.._.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_config_config,ionic_angular_platform_platform,ionic_angular_platform_dom_controller,ionic_angular_components_app_app,ionic_angular_platform_keyboard,ionic_angular_navigation_view_controller,ionic_angular_navigation_nav_controller,ionic_angular_components_refresher_refresher,ionic_angular_gestures_gesture_controller,_.._.._.._.._node_modules_ionic_angular_components_refresher_refresher_content.ngfactory,ionic_angular_components_refresher_refresher_content,_.._.._.._components_loading_loading.ngfactory,_.._.._.._components_loading_loading,_.._.._.._providers_events,_.._.._.._providers_utils_utils,_.._components_format_format.ngfactory,_.._components_format_format,_.._providers_format_delegate,_.._providers_helper,_.._.._.._providers_sites,_.._providers_module_prefetch_delegate,ionic_angular_components_modal_modal_controller,_.._.._.._components_dynamic_component_dynamic_component.ngfactory,_.._.._.._components_dynamic_component_dynamic_component,_.._.._.._components_tabs_tab.ngfactory,_.._.._.._components_tabs_tabs,ionic_angular_components_toolbar_toolbar_header,_.._.._.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,_.._.._.._directives_back_button,_.._.._.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_toolbar,_.._.._.._directives_format_text,_.._.._.._providers_utils_text,_.._.._.._providers_utils_url,_.._.._.._providers_filepool,_.._.._.._providers_app,_.._.._contentlinks_providers_helper,_.._.._.._components_split_view_split_view,_.._.._.._providers_utils_iframe,ionic_angular_components_toolbar_toolbar_item,_.._.._.._components_tabs_tabs.ngfactory,_section,ionic_angular_navigation_nav_params,_.._providers_course,_.._providers_options_delegate,_.._.._courses_providers_courses PURE_IMPORTS_END */
































































var styles_CoreCourseSectionPage = [];
var RenderType_CoreCourseSectionPage = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreCourseSectionPage, data: {} });

function View_CoreCourseSectionPage_2(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "core-context-menu-item", [], null, [[null, "action"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("action" === en)) {
                var pd_0 = (_co.toggleDownload() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, context_menu_item_ngfactory["b" /* View_CoreContextMenuItemComponent_0 */], context_menu_item_ngfactory["a" /* RenderType_CoreContextMenuItemComponent */])), core["_15" /* ɵdid */](1, 770048, null, 0, context_menu_item["a" /* CoreContextMenuItemComponent */], [context_menu["a" /* CoreContextMenuComponent */]], { content: [0, "content"], iconAction: [1, "iconAction"], priority: [2, "priority"] }, { action: "action" }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, core["_29" /* ɵnov */](_v, 2).transform("core.settings.enabledownloadsection")); var currVal_1 = _co.downloadEnabledIcon; var currVal_2 = 2000; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null);
}
function View_CoreCourseSectionPage_1(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](1, 0, null, null, 18, "core-navbar-buttons", [], null, null, null, navbar_buttons_ngfactory["b" /* View_CoreNavBarButtonsComponent_0 */], navbar_buttons_ngfactory["a" /* RenderType_CoreNavBarButtonsComponent */])), core["_15" /* ɵdid */](2, 245760, null, 1, navbar_buttons["a" /* CoreNavBarButtonsComponent */], [core["p" /* ElementRef */], logger["a" /* CoreLoggerProvider */], dom["a" /* CoreDomUtilsProvider */]], null, null), core["_37" /* ɵqud */](603979776, 7, { buttons: 1 }), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](5, 0, null, 0, 13, "core-context-menu", [], null, null, null, context_menu_ngfactory["b" /* View_CoreContextMenuComponent_0 */], context_menu_ngfactory["a" /* RenderType_CoreContextMenuComponent */])), core["_15" /* ɵdid */](6, 245760, null, 0, context_menu["a" /* CoreContextMenuComponent */], [translate_service["a" /* TranslateService */], popover_controller["a" /* PopoverController */], core["p" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */], [2, tab["a" /* CoreTabComponent */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_11" /* ɵand */](16777216, [[5, 2]], 0, 1, null, View_CoreCourseSectionPage_2)), core["_15" /* ɵdid */](9, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](11, 0, null, 0, 2, "core-context-menu-item", [], null, [[null, "action"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("action" === en)) {
                var pd_0 = (_co.prefetchCourse() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, context_menu_item_ngfactory["b" /* View_CoreContextMenuItemComponent_0 */], context_menu_item_ngfactory["a" /* RenderType_CoreContextMenuItemComponent */])), core["_15" /* ɵdid */](12, 770048, null, 0, context_menu_item["a" /* CoreContextMenuItemComponent */], [context_menu["a" /* CoreContextMenuComponent */]], { content: [0, "content"], iconAction: [1, "iconAction"], closeOnClick: [2, "closeOnClick"], priority: [3, "priority"], hidden: [4, "hidden"] }, { action: "action" }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](15, 0, null, 0, 2, "core-context-menu-item", [["iconAction", "fa-graduation-cap"]], null, [[null, "action"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("action" === en)) {
                var pd_0 = (_co.openCourseSummary() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, context_menu_item_ngfactory["b" /* View_CoreContextMenuItemComponent_0 */], context_menu_item_ngfactory["a" /* RenderType_CoreContextMenuItemComponent */])), core["_15" /* ɵdid */](16, 770048, null, 0, context_menu_item["a" /* CoreContextMenuItemComponent */], [context_menu["a" /* CoreContextMenuComponent */]], { content: [0, "content"], iconAction: [1, "iconAction"], priority: [2, "priority"] }, { action: "action" }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](21, 0, null, null, 17, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_15" /* ɵdid */](22, 4374528, [[6, 4], [1, 4], ["courseSectionContent", 4]], 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["K" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["D" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](24, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ionRefresh" === en)) {
                var pd_0 = (_co.doRefresh($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_15" /* ɵdid */](25, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["D" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](27, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_15" /* ɵdid */](28, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n\n                    "])), (_l()(), core["_16" /* ɵeld */](32, 0, null, 1, 5, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_15" /* ɵdid */](33, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["p" /* ElementRef */], events["a" /* CoreEventsProvider */], utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](35, 0, null, 0, 1, "core-course-format", [], null, [[null, "completionChanged"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("completionChanged" === en)) {
                var pd_0 = (_co.onCompletionChange() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_CoreCourseFormatComponent_0, RenderType_CoreCourseFormatComponent)), core["_15" /* ɵdid */](36, 770048, [[2, 4]], 0, format["a" /* CoreCourseFormatComponent */], [format_delegate["a" /* CoreCourseFormatDelegate */], translate_service["a" /* TranslateService */], core["u" /* Injector */], providers_helper["a" /* CoreCourseHelperProvider */], dom["a" /* CoreDomUtilsProvider */], events["a" /* CoreEventsProvider */], sites["a" /* CoreSitesProvider */], content["a" /* Content */], module_prefetch_delegate["a" /* CoreCourseModulePrefetchDelegate */], modal_controller["a" /* ModalController */]], { course: [0, "course"], sections: [1, "sections"], downloadEnabled: [2, "downloadEnabled"], initialSectionId: [3, "initialSectionId"], initialSectionNumber: [4, "initialSectionNumber"], moduleId: [5, "moduleId"] }, { completionChanged: "completionChanged" }), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); _ck(_v, 6, 0); var currVal_0 = _co.displayEnableDownload; _ck(_v, 9, 0, currVal_0); var currVal_1 = core["_41" /* ɵunv */](_v, 12, 0, core["_29" /* ɵnov */](_v, 13).transform(_co.prefetchCourseData.title)); var currVal_2 = _co.prefetchCourseData.prefetchCourseIcon; var currVal_3 = false; var currVal_4 = 1900; var currVal_5 = !_co.downloadCourseEnabled; _ck(_v, 12, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = core["_41" /* ɵunv */](_v, 16, 0, core["_29" /* ɵnov */](_v, 17).transform("core.course.coursesummary")); var currVal_7 = "fa-graduation-cap"; var currVal_8 = 1800; _ck(_v, 16, 0, currVal_6, currVal_7, currVal_8); var currVal_13 = (_co.dataLoaded && _co.displayRefresher); _ck(_v, 25, 0, currVal_13); var currVal_15 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 28, 0, core["_29" /* ɵnov */](_v, 29).transform("core.pulltorefresh")), ""); _ck(_v, 28, 0, currVal_15); var currVal_16 = _co.dataLoaded; _ck(_v, 33, 0, currVal_16); var currVal_17 = _co.course; var currVal_18 = _co.sections; var currVal_19 = _co.downloadEnabled; var currVal_20 = _co.sectionId; var currVal_21 = _co.sectionNumber; var currVal_22 = _co.moduleId; _ck(_v, 36, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22); }, function (_ck, _v) { var currVal_9 = core["_29" /* ɵnov */](_v, 22).statusbarPadding; var currVal_10 = core["_29" /* ɵnov */](_v, 22)._hasRefresher; _ck(_v, 21, 0, currVal_9, currVal_10); var currVal_11 = (core["_29" /* ɵnov */](_v, 25).state !== "inactive"); var currVal_12 = core["_29" /* ɵnov */](_v, 25)._top; _ck(_v, 24, 0, currVal_11, currVal_12); var currVal_14 = core["_29" /* ɵnov */](_v, 28).r.state; _ck(_v, 27, 0, currVal_14); });
}
function View_CoreCourseSectionPage_4(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](1, 0, null, null, 1, "core-dynamic-component", [], null, null, null, dynamic_component_ngfactory["b" /* View_CoreDynamicComponent_0 */], dynamic_component_ngfactory["a" /* RenderType_CoreDynamicComponent */])), core["_15" /* ɵdid */](2, 901120, null, 0, dynamic_component["a" /* CoreDynamicComponent */], [logger["a" /* CoreLoggerProvider */], core["n" /* ComponentFactoryResolver */], core["w" /* KeyValueDiffers */], [2, nav_controller["a" /* NavController */]], core["i" /* ChangeDetectorRef */], core["p" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */]], { component: [0, "component"], data: [1, "data"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.data.component; var currVal_1 = _v.parent.context.$implicit.data.componentData; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_CoreCourseSectionPage_3(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 7, "core-tab", [], [[8, "className", 0]], null, null, tab_ngfactory["b" /* View_CoreTabComponent_0 */], tab_ngfactory["a" /* RenderType_CoreTabComponent */])), core["_15" /* ɵdid */](1, 245760, null, 2, tab["a" /* CoreTabComponent */], [tabs["a" /* CoreTabsComponent */], core["p" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */]], { title: [0, "title"] }, null), core["_37" /* ɵqud */](335544320, 8, { template: 0 }), core["_37" /* ɵqud */](335544320, 9, { scroll: 0 }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](0, [[8, 2]], null, 0, null, View_CoreCourseSectionPage_4)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_1 = core["_41" /* ɵunv */](_v, 1, 0, core["_29" /* ɵnov */](_v, 4).transform(_v.context.$implicit.data.title)); _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = core["_19" /* ɵinlineInterpolate */](1, "", _v.context.$implicit.data.class, ""); _ck(_v, 0, 0, currVal_0); }); }
function View_CoreCourseSectionPage_0(_l) { return core["_42" /* ɵvid */](0, [core["_37" /* ɵqud */](671088640, 1, { content: 0 }), core["_37" /* ɵqud */](671088640, 2, { formatComponent: 0 }), core["_37" /* ɵqud */](402653184, 3, { tabsComponent: 0 }), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 16, "ion-header", [], null, null, null, null, null)), core["_15" /* ɵdid */](4, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_16" /* ɵeld */](6, 0, null, null, 12, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_15" /* ɵdid */](7, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), core["_15" /* ɵdid */](8, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_16" /* ɵeld */](10, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_15" /* ɵdid */](11, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_16" /* ɵeld */](12, 0, null, 0, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](13, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], providers_app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n\n        "])), (_l()(), core["_16" /* ɵeld */](15, 0, null, 2, 2, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](16, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_37" /* ɵqud */](603979776, 4, { _buttons: 1 }), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_16" /* ɵeld */](21, 0, null, null, 20, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_15" /* ɵdid */](22, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["K" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["D" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_16" /* ɵeld */](24, 0, null, 1, 16, "core-tabs", [], null, null, null, tabs_ngfactory["b" /* View_CoreTabsComponent_0 */], tabs_ngfactory["a" /* RenderType_CoreTabsComponent */])), core["_15" /* ɵdid */](25, 4964352, [[3, 4]], 0, tabs["a" /* CoreTabsComponent */], [core["p" /* ElementRef */], content["a" /* Content */], dom["a" /* CoreDomUtilsProvider */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_16" /* ɵeld */](28, 0, null, 0, 7, "core-tab", [], null, null, null, tab_ngfactory["b" /* View_CoreTabComponent_0 */], tab_ngfactory["a" /* RenderType_CoreTabComponent */])), core["_15" /* ɵdid */](29, 245760, null, 2, tab["a" /* CoreTabComponent */], [tabs["a" /* CoreTabsComponent */], core["p" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */]], { title: [0, "title"] }, null), core["_37" /* ɵqud */](603979776, 5, { template: 0 }), core["_37" /* ɵqud */](603979776, 6, { scroll: 0 }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](0, [[5, 2]], null, 0, null, View_CoreCourseSectionPage_1)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_CoreCourseSectionPage_3)), core["_15" /* ɵdid */](39, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 8, 0); var currVal_2 = _co.title; _ck(_v, 13, 0, currVal_2); _ck(_v, 25, 0); var currVal_5 = core["_41" /* ɵunv */](_v, 29, 0, core["_29" /* ɵnov */](_v, 32).transform("core.course.contents")); _ck(_v, 29, 0, currVal_5); var currVal_6 = _co.courseHandlers; _ck(_v, 39, 0, currVal_6); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 7)._hidden; var currVal_1 = core["_29" /* ɵnov */](_v, 7)._sbPadding; _ck(_v, 6, 0, currVal_0, currVal_1); var currVal_3 = core["_29" /* ɵnov */](_v, 22).statusbarPadding; var currVal_4 = core["_29" /* ɵnov */](_v, 22)._hasRefresher; _ck(_v, 21, 0, currVal_3, currVal_4); }); }
function View_CoreCourseSectionPage_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "page-core-course-section", [], null, null, null, View_CoreCourseSectionPage_0, RenderType_CoreCourseSectionPage)), core["_15" /* ɵdid */](1, 180224, null, 0, section["a" /* CoreCourseSectionPage */], [nav_params["a" /* NavParams */], course["a" /* CoreCourseProvider */], dom["a" /* CoreDomUtilsProvider */], format_delegate["a" /* CoreCourseFormatDelegate */], options_delegate["a" /* CoreCourseOptionsDelegate */], translate_service["a" /* TranslateService */], providers_helper["a" /* CoreCourseHelperProvider */], events["a" /* CoreEventsProvider */], utils_text["a" /* CoreTextUtilsProvider */], courses["a" /* CoreCoursesProvider */], sites["a" /* CoreSitesProvider */], nav_controller["a" /* NavController */], core["u" /* Injector */], module_prefetch_delegate["a" /* CoreCourseModulePrefetchDelegate */]], null, null)], null, null); }
var CoreCourseSectionPageNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("page-core-course-section", section["a" /* CoreCourseSectionPage */], View_CoreCourseSectionPage_Host_0, {}, {}, []);





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

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(237);

// CONCATENATED MODULE: ./src/core/course/pages/section/section.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCourseSectionPageModuleNgFactory", function() { return CoreCourseSectionPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_section.module,_.._.._.._.._node_modules_ionic_angular_components_action_sheet_action_sheet_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_alert_alert_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_app_app_root.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_loading_loading_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_modal_modal_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_picker_picker_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_popover_popover_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_select_select_popover_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_toast_toast_component.ngfactory,_.._.._.._components_context_menu_context_menu_popover.ngfactory,_.._.._.._components_course_picker_menu_course_picker_menu_popover.ngfactory,_.._.._.._components_recaptcha_recaptchamodal.ngfactory,_.._components_unsupported_module_unsupported_module.ngfactory,_section.ngfactory,_angular_common,_angular_forms,_ngx_translate_core_src_translate.loader,_ngx_translate_core_src_translate.compiler,_ngx_translate_core_src_translate.parser,_ngx_translate_core_src_missing_translation_handler,_ngx_translate_core_src_translate.service,_ngx_translate_core_src_translate.store,ionic_angular_module,_ngx_translate_core_index,_.._.._.._directives_directives.module,_.._.._.._pipes_pipes.module,_.._.._.._components_components.module,_.._components_components.module,ionic_angular_util_module_loader,_section PURE_IMPORTS_END */
































var CoreCourseSectionPageModuleNgFactory = /*@__PURE__*/ core["_13" /* ɵcmf */](CoreCourseSectionPageModule, [], function (_l) { return core["_25" /* ɵmod */]([core["_26" /* ɵmpd */](512, core["n" /* ComponentFactoryResolver */], core["_6" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], unsupported_module_ngfactory["a" /* CoreCourseUnsupportedModuleComponentNgFactory */], CoreCourseSectionPageNgFactory]], [3, core["n" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["_26" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["v" /* ɵa */]]]), core["_26" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_26" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_26" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_26" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_26" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_26" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_26" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_26" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_26" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_26" /* ɵmpd */](512, _ngx_translate_core["a" /* TranslateModule */], _ngx_translate_core["a" /* TranslateModule */], []), core["_26" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_26" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_26" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_26" /* ɵmpd */](512, components_components_module["a" /* CoreCourseComponentsModule */], components_components_module["a" /* CoreCourseComponentsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_26" /* ɵmpd */](512, CoreCourseSectionPageModule, CoreCourseSectionPageModule, []), core["_26" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_26" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_26" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], section["a" /* CoreCourseSectionPage */], [])]); });






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






/***/ })

});
//# sourceMappingURL=19.js.map