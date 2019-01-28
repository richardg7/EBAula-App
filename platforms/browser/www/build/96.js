webpackJsonp([96],{

/***/ 1808:
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

// EXTERNAL MODULE: ./src/addon/mod/data/components/components.module.ts + 2 modules
var components_module = __webpack_require__(422);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(19);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils_utils = __webpack_require__(3);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(12);

// EXTERNAL MODULE: ./src/addon/mod/data/providers/fields-delegate.ts
var fields_delegate = __webpack_require__(106);

// CONCATENATED MODULE: ./src/addon/mod/data/pages/search/search.ts










/**
 * Page that displays the search modal.
 */
var search_AddonModDataSearchPage = /*@__PURE__*/ (function () {
    function AddonModDataSearchPage(params, viewCtrl, fb, utils, domUtils, fieldsDelegate, textUtils) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.utils = utils;
        this.domUtils = domUtils;
        this.fieldsDelegate = fieldsDelegate;
        this.textUtils = textUtils;
        this.extraImports = [components_module["a" /* AddonModDataComponentsModule */]];
        this.search = params.get('search');
        this.fields = params.get('fields');
        this.data = params.get('data');
        var advanced = {};
        if (typeof this.search.advanced == 'object') {
            Object.keys(this.search.advanced).forEach(function (index) {
                if (typeof _this.search.advanced[index] != 'undefined' && typeof _this.search.advanced[index].name != 'undefined') {
                    advanced[_this.search.advanced[index].name] = _this.search.advanced[index].value ?
                        _this.textUtils.parseJSON(_this.search.advanced[index].value) : '';
                }
                else {
                    advanced[index] = _this.search.advanced[index] ?
                        _this.textUtils.parseJSON(_this.search.advanced[index]) : '';
                }
            });
        }
        else {
            this.search.advanced.forEach(function (field) {
                advanced[field.name] = field.value ? _this.textUtils.parseJSON(field.value) : '';
            });
        }
        this.search.advanced = advanced;
        this.searchForm = fb.group({
            text: [this.search.text],
            sortBy: [this.search.sortBy || '0'],
            sortDirection: [this.search.sortDirection || 'DESC'],
            firstname: [this.search.advanced['firstname'] || ''],
            lastname: [this.search.advanced['lastname'] || '']
        });
        this.fieldsArray = this.utils.objectToArray(this.fields);
        this.advancedSearch = this.renderAdvancedSearchFields();
    }
    /**
     * Displays Advanced Search Fields.
     *
     * @return {string}         Generated HTML.
     */
    AddonModDataSearchPage.prototype.renderAdvancedSearchFields = function () {
        if (!this.data.asearchtemplate) {
            return '';
        }
        this.jsData = {
            fields: this.fields,
            form: this.searchForm,
            search: this.search.advanced
        };
        var template = this.data.asearchtemplate, replace, render;
        // Replace the fields found on template.
        this.fieldsArray.forEach(function (field) {
            replace = '[[' + field.name + ']]';
            replace = replace.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            replace = new RegExp(replace, 'gi');
            // Replace field by a generic directive.
            render = '<addon-mod-data-field-plugin mode="search" [field]="fields[' + field.id +
                ']" [form]="form" [search]="search"></addon-mod-data-field-plugin>';
            template = template.replace(replace, render);
        });
        // Not pluginable other search elements.
        // Replace firstname field by the text input.
        replace = new RegExp('##firstname##', 'gi');
        render = '<span [formGroup]="form"><ion-input type="text" name="firstname" \
        [placeholder]="\'addon.mod_data.authorfirstname\' | translate" formControlName="firstname"></ion-input></span>';
        template = template.replace(replace, render);
        // Replace lastname field by the text input.
        replace = new RegExp('##lastname##', 'gi');
        render = '<span [formGroup]="form"><ion-input type="text" name="lastname" \
        [placeholder]="\'addon.mod_data.authorlastname\' | translate" formControlName="lastname"></ion-input></span>';
        template = template.replace(replace, render);
        return template;
    };
    /**
     * Retrieve the entered data in search in a form.
     *
     * @param {any} searchedData Array with the entered form values.
     * @return {any[]}          Array with the answers.
     */
    AddonModDataSearchPage.prototype.getSearchDataFromForm = function (searchedData) {
        var _this = this;
        var advancedSearch = [];
        // Filter and translate fields to each field plugin.
        this.fieldsArray.forEach(function (field) {
            var fieldData = _this.fieldsDelegate.getFieldSearchData(field, searchedData);
            if (fieldData) {
                fieldData.forEach(function (data) {
                    data.value = JSON.stringify(data.value);
                    // WS wants values in Json format.
                    advancedSearch.push(data);
                });
            }
        });
        // Not pluginable other search elements.
        if (searchedData['firstname']) {
            // WS wants values in Json format.
            advancedSearch.push({
                name: 'firstname',
                value: JSON.stringify(searchedData['firstname'])
            });
        }
        if (searchedData['lastname']) {
            // WS wants values in Json format.
            advancedSearch.push({
                name: 'lastname',
                value: JSON.stringify(searchedData['lastname'])
            });
        }
        return advancedSearch;
    };
    /**
     * Close modal.
     *
     * @param {any} [data] Data to return to the page.
     */
    AddonModDataSearchPage.prototype.closeModal = function (data) {
        this.viewCtrl.dismiss(data);
    };
    /**
     * Toggles between advanced to normal search.
     */
    AddonModDataSearchPage.prototype.toggleAdvanced = function () {
        this.search.searchingAdvanced = !this.search.searchingAdvanced;
    };
    /**
     * Done editing.
     */
    AddonModDataSearchPage.prototype.searchEntries = function () {
        var searchedData = this.searchForm.value;
        if (this.search.searchingAdvanced) {
            this.search.advanced = this.getSearchDataFromForm(searchedData);
            this.search.searching = this.search.advanced.length > 0;
        }
        else {
            this.search.text = searchedData.text;
            this.search.searching = this.search.text.length > 0;
        }
        this.search.sortBy = searchedData.sortBy;
        this.search.sortDirection = searchedData.sortDirection;
        this.closeModal(this.search);
    };
    return AddonModDataSearchPage;
}());





// EXTERNAL MODULE: ./src/core/compile/components/compile-html/compile-html.module.ts
var compile_html_module = __webpack_require__(423);

// CONCATENATED MODULE: ./src/addon/mod/data/pages/search/search.module.ts








var AddonModDataSearchPageModule = /*@__PURE__*/ (function () {
    function AddonModDataSearchPageModule() {
    }
    return AddonModDataSearchPageModule;
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

// EXTERNAL MODULE: ./src/core/comments/components/comments/comments.ngfactory.js
var comments_ngfactory = __webpack_require__(643);

// EXTERNAL MODULE: ./src/addon/mod/data/components/index/index.ngfactory.js
var index_ngfactory = __webpack_require__(1306);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/option/option.js
var option_option = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(9);

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

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(1291);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(326);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(236);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(421);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(178);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(37);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.ngfactory.js
var input_ngfactory = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.js
var input = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.ngfactory.js
var select_ngfactory = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.js
var select_select = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/radio/radio-group.js
var radio_group = __webpack_require__(118);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/radio/radio-button.ngfactory.js
var radio_button_ngfactory = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/radio/radio-button.js
var radio_button = __webpack_require__(126);

// EXTERNAL MODULE: ./src/core/compile/components/compile-html/compile-html.ngfactory.js
var compile_html_ngfactory = __webpack_require__(185);

// EXTERNAL MODULE: ./src/core/compile/components/compile-html/compile-html.ts
var compile_html = __webpack_require__(158);

// EXTERNAL MODULE: ./src/core/compile/providers/compile.ts
var compile = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(60);

// CONCATENATED MODULE: ./src/addon/mod/data/pages/search/search.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,ionic_angular_components_option_option,_ngx_translate_core_src_translate.pipe,_ngx_translate_core_src_translate.service,_angular_common,ionic_angular_components_toolbar_toolbar_header,ionic_angular_config_config,ionic_angular_navigation_view_controller,_.._.._.._.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,_.._.._.._.._directives_back_button,ionic_angular_platform_platform,_.._.._.._.._providers_events,_.._.._.._.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_toolbar,ionic_angular_components_toolbar_toolbar_item,_.._.._.._.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_components_icon_icon,_.._.._.._.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_dom_controller,ionic_angular_platform_keyboard,_angular_forms,ionic_angular_components_list_list,ionic_angular_gestures_gesture_controller,_.._.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,_.._.._.._.._.._node_modules_ionic_angular_components_input_input.ngfactory,ionic_angular_components_input_input,ionic_angular_components_label_label,_.._.._.._.._.._node_modules_ionic_angular_components_select_select.ngfactory,ionic_angular_components_select_select,ionic_angular_navigation_deep_linker,ionic_angular_components_radio_radio_group,_.._.._.._.._.._node_modules_ionic_angular_components_radio_radio_button.ngfactory,ionic_angular_components_radio_radio_button,_.._.._.._.._core_compile_components_compile_html_compile_html.ngfactory,_.._.._.._.._core_compile_components_compile_html_compile_html,_.._.._.._.._core_compile_providers_compile,_.._.._.._.._providers_utils_dom,_search,ionic_angular_navigation_nav_params,_.._.._.._.._providers_utils_utils,_.._providers_fields_delegate,_.._.._.._.._providers_utils_text PURE_IMPORTS_END */




















































var styles_AddonModDataSearchPage = [];
var RenderType_AddonModDataSearchPage = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonModDataSearchPage, data: {} });

function View_AddonModDataSearchPage_2(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, [[8, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](2, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.name; _ck(_v, 2, 0, currVal_1); }); }
function View_AddonModDataSearchPage_1(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, "optgroup", [], [[8, "label", 0]], null, null, null, null)), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModDataSearchPage_2)), core["_15" /* ɵdid */](4, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.fieldsArray; _ck(_v, 4, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 0, 0, core["_29" /* ɵnov */](_v, 1).transform("addon.mod_data.fields")), ""); _ck(_v, 0, 0, currVal_0); }); }
function View_AddonModDataSearchPage_3(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 3, "ion-option", [["value", "-3"]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, [[8, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](2, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = "-3"; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = core["_41" /* ɵunv */](_v, 2, 0, core["_29" /* ɵnov */](_v, 3).transform("addon.mod_data.approved")); _ck(_v, 2, 0, currVal_1); }); }
function View_AddonModDataSearchPage_0(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 25, "ion-header", [], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 21, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_15" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), core["_15" /* ɵdid */](5, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_15" /* ɵdid */](8, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_40" /* ɵted */](9, 0, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_16" /* ɵeld */](12, 0, null, 2, 11, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](13, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_37" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](16, 0, null, null, 6, "button", [["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.closeModal() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](17, 1097728, [[1, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_16" /* ɵeld */](20, 0, null, 0, 1, "ion-icon", [["name", "close"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](21, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_16" /* ɵeld */](27, 0, null, null, 150, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_15" /* ɵdid */](28, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["K" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["D" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_16" /* ɵeld */](30, 0, null, 1, 9, "div", [["class", "fixed-content core-tabs-bar"]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_16" /* ɵeld */](32, 0, null, null, 2, "a", [["class", "tab-slide"]], [[1, "aria-selected", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.toggleAdvanced() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), core["_40" /* ɵted */](33, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_16" /* ɵeld */](36, 0, null, null, 2, "a", [["class", "tab-slide"]], [[1, "aria-selected", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.toggleAdvanced() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), core["_40" /* ɵted */](37, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_16" /* ɵeld */](41, 0, null, 1, 135, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("submit" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 43).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("reset" === en)) {
                var pd_1 = (core["_29" /* ɵnov */](_v, 43).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngSubmit" === en)) {
                var pd_2 = (_co.searchEntries() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), core["_15" /* ɵdid */](42, 16384, null, 0, esm5_forms["w" /* ɵbf */], [], null, null), core["_15" /* ɵdid */](43, 540672, null, 0, esm5_forms["h" /* FormGroupDirective */], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), core["_35" /* ɵprd */](2048, null, esm5_forms["b" /* ControlContainer */], null, [esm5_forms["h" /* FormGroupDirective */]]), core["_15" /* ɵdid */](45, 16384, null, 0, esm5_forms["o" /* NgControlStatusGroup */], [esm5_forms["b" /* ControlContainer */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_16" /* ɵeld */](47, 0, null, null, 117, "ion-list", [["no-margin", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](48, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](50, 0, null, null, 13, "ion-item", [["class", "item item-block"]], [[8, "hidden", 0]], null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](51, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 2, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 3, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 4, { _icons: 1 }), core["_15" /* ɵdid */](55, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](57, 0, null, 3, 5, "ion-input", [["formControlName", "text"], ["name", "text"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.search.text = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_15" /* ɵdid */](58, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [8, null]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_15" /* ɵdid */](60, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_15" /* ɵdid */](61, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"], placeholder: [1, "placeholder"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](65, 0, null, null, 50, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](66, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 5, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 6, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 7, { _icons: 1 }), core["_15" /* ɵdid */](70, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](72, 0, null, 1, 3, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](73, 16384, [[5, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_40" /* ɵted */](74, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](77, 0, null, 3, 37, "ion-select", [["formControlName", "sortBy"], ["interface", "popover"], ["name", "sortBy"]], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "click"], [null, "keyup.space"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 78)._click($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keyup.space" === en)) {
                var pd_1 = (core["_29" /* ɵnov */](_v, 78)._keyup() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, select_ngfactory["b" /* View_Select_0 */], select_ngfactory["a" /* RenderType_Select */])), core["_15" /* ɵdid */](78, 1228800, null, 1, select_select["a" /* Select */], [app["a" /* App */], util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item["a" /* Item */]], deep_linker["a" /* DeepLinker */]], { interface: [0, "interface"] }, null), core["_37" /* ɵqud */](603979776, 8, { options: 1 }), core["_35" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [select_select["a" /* Select */]]), core["_15" /* ɵdid */](81, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_15" /* ɵdid */](83, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModDataSearchPage_1)), core["_15" /* ɵdid */](86, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](88, 0, null, null, 25, "optgroup", [], [[8, "label", 0]], null, null, null, null)), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](91, 0, null, null, 3, "ion-option", [["value", "0"]], null, null, null, null, null)), core["_15" /* ɵdid */](92, 16384, [[8, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](93, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](96, 0, null, null, 3, "ion-option", [["value", "-4"]], null, null, null, null, null)), core["_15" /* ɵdid */](97, 16384, [[8, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](98, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](101, 0, null, null, 3, "ion-option", [["value", "-1"]], null, null, null, null, null)), core["_15" /* ɵdid */](102, 16384, [[8, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](103, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](106, 0, null, null, 3, "ion-option", [["value", "-2"]], null, null, null, null, null)), core["_15" /* ɵdid */](107, 16384, [[8, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](108, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModDataSearchPage_3)), core["_15" /* ɵdid */](112, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](117, 0, null, null, 40, "ion-list", [["formControlName", "sortDirection"], ["name", "sortDirection"], ["radio-group", ""], ["role", "radiogroup"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.search.sortDirection = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_15" /* ɵdid */](118, 1064960, null, 1, radio_group["a" /* RadioGroup */], [core["K" /* Renderer */], core["p" /* ElementRef */], core["i" /* ChangeDetectorRef */]], null, null), core["_37" /* ɵqud */](335544320, 9, { _header: 0 }), core["_35" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [radio_group["a" /* RadioGroup */]]), core["_15" /* ɵdid */](121, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_15" /* ɵdid */](123, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_15" /* ɵdid */](124, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](126, 0, null, null, 14, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](127, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 10, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 11, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 12, { _icons: 1 }), core["_15" /* ɵdid */](131, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](133, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), core["_15" /* ɵdid */](134, 16384, [[10, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_40" /* ɵted */](135, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](138, 0, null, 4, 1, "ion-radio", [["value", "ASC"]], [[2, "radio-disabled", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 139)._click($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, radio_button_ngfactory["b" /* View_RadioButton_0 */], radio_button_ngfactory["a" /* RenderType_RadioButton */])), core["_15" /* ɵdid */](139, 245760, null, 0, radio_button["a" /* RadioButton */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item["a" /* Item */]], [2, radio_group["a" /* RadioGroup */]]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](142, 0, null, null, 14, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](143, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 13, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 14, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 15, { _icons: 1 }), core["_15" /* ɵdid */](147, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](149, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), core["_15" /* ɵdid */](150, 16384, [[13, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_40" /* ɵted */](151, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](154, 0, null, 4, 1, "ion-radio", [["value", "DESC"]], [[2, "radio-disabled", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 155)._click($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, radio_button_ngfactory["b" /* View_RadioButton_0 */], radio_button_ngfactory["a" /* RenderType_RadioButton */])), core["_15" /* ɵdid */](155, 245760, null, 0, radio_button["a" /* RadioButton */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item["a" /* Item */]], [2, radio_group["a" /* RadioGroup */]]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](159, 0, null, null, 4, "div", [["class", "addon-data-advanced-search"], ["padding", ""]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](161, 0, null, null, 1, "core-compile-html", [], null, null, null, compile_html_ngfactory["b" /* View_CoreCompileHtmlComponent_0 */], compile_html_ngfactory["a" /* RenderType_CoreCompileHtmlComponent */])), core["_15" /* ɵdid */](162, 966656, null, 0, compile_html["a" /* CoreCompileHtmlComponent */], [compile["a" /* CoreCompileProvider */], core["i" /* ChangeDetectorRef */], core["p" /* ElementRef */], [2, nav_controller["a" /* NavController */]], core["w" /* KeyValueDiffers */], dom["a" /* CoreDomUtilsProvider */]], { text: [0, "text"], jsData: [1, "jsData"], extraImports: [2, "extraImports"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_16" /* ɵeld */](166, 0, null, null, 9, "div", [["padding", ""]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](168, 0, null, null, 6, "button", [["block", ""], ["icon-start", ""], ["ion-button", ""], ["type", "submit"]], null, null, null, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](169, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_16" /* ɵeld */](171, 0, null, 0, 1, "ion-icon", [["name", "search"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](172, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](173, 0, ["\n                ", "\n            "])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 5, 0); var currVal_5 = "close"; _ck(_v, 21, 0, currVal_5); var currVal_19 = _co.searchForm; _ck(_v, 43, 0, currVal_19); var currVal_28 = "text"; var currVal_29 = _co.search.text; _ck(_v, 58, 0, currVal_28, currVal_29); var currVal_30 = "text"; var currVal_31 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 61, 1, core["_29" /* ɵnov */](_v, 62).transform("addon.mod_data.search")), ""); _ck(_v, 61, 0, currVal_30, currVal_31); var currVal_41 = "popover"; _ck(_v, 78, 0, currVal_41); var currVal_42 = "sortBy"; _ck(_v, 81, 0, currVal_42); var currVal_43 = _co.fieldsArray.length; _ck(_v, 86, 0, currVal_43); var currVal_45 = "0"; _ck(_v, 92, 0, currVal_45); var currVal_47 = "-4"; _ck(_v, 97, 0, currVal_47); var currVal_49 = "-1"; _ck(_v, 102, 0, currVal_49); var currVal_51 = "-2"; _ck(_v, 107, 0, currVal_51); var currVal_53 = _co.data.approval; _ck(_v, 112, 0, currVal_53); var currVal_61 = "sortDirection"; var currVal_62 = _co.search.sortDirection; _ck(_v, 121, 0, currVal_61, currVal_62); var currVal_65 = "ASC"; _ck(_v, 139, 0, currVal_65); var currVal_68 = "DESC"; _ck(_v, 155, 0, currVal_68); var currVal_70 = _co.advancedSearch; var currVal_71 = _co.jsData; var currVal_72 = _co.extraImports; _ck(_v, 162, 0, currVal_70, currVal_71, currVal_72); var currVal_73 = ""; _ck(_v, 169, 0, currVal_73); var currVal_75 = "search"; _ck(_v, 172, 0, currVal_75); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_29" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_29" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_41" /* ɵunv */](_v, 9, 0, core["_29" /* ɵnov */](_v, 10).transform("addon.mod_data.search")); _ck(_v, 9, 0, currVal_2); var currVal_3 = core["_41" /* ɵunv */](_v, 16, 0, core["_29" /* ɵnov */](_v, 18).transform("core.close")); _ck(_v, 16, 0, currVal_3); var currVal_4 = core["_29" /* ɵnov */](_v, 21)._hidden; _ck(_v, 20, 0, currVal_4); var currVal_6 = core["_29" /* ɵnov */](_v, 28).statusbarPadding; var currVal_7 = core["_29" /* ɵnov */](_v, 28)._hasRefresher; _ck(_v, 27, 0, currVal_6, currVal_7); var currVal_8 = !_co.search.searchingAdvanced; _ck(_v, 32, 0, currVal_8); var currVal_9 = core["_41" /* ɵunv */](_v, 33, 0, core["_29" /* ɵnov */](_v, 34).transform("addon.mod_data.search")); _ck(_v, 33, 0, currVal_9); var currVal_10 = _co.search.searchingAdvanced; _ck(_v, 36, 0, currVal_10); var currVal_11 = core["_41" /* ɵunv */](_v, 37, 0, core["_29" /* ɵnov */](_v, 38).transform("addon.mod_data.advancedsearch")); _ck(_v, 37, 0, currVal_11); var currVal_12 = core["_29" /* ɵnov */](_v, 45).ngClassUntouched; var currVal_13 = core["_29" /* ɵnov */](_v, 45).ngClassTouched; var currVal_14 = core["_29" /* ɵnov */](_v, 45).ngClassPristine; var currVal_15 = core["_29" /* ɵnov */](_v, 45).ngClassDirty; var currVal_16 = core["_29" /* ɵnov */](_v, 45).ngClassValid; var currVal_17 = core["_29" /* ɵnov */](_v, 45).ngClassInvalid; var currVal_18 = core["_29" /* ɵnov */](_v, 45).ngClassPending; _ck(_v, 41, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18); var currVal_20 = _co.search.searchingAdvanced; _ck(_v, 50, 0, currVal_20); var currVal_21 = core["_29" /* ɵnov */](_v, 60).ngClassUntouched; var currVal_22 = core["_29" /* ɵnov */](_v, 60).ngClassTouched; var currVal_23 = core["_29" /* ɵnov */](_v, 60).ngClassPristine; var currVal_24 = core["_29" /* ɵnov */](_v, 60).ngClassDirty; var currVal_25 = core["_29" /* ɵnov */](_v, 60).ngClassValid; var currVal_26 = core["_29" /* ɵnov */](_v, 60).ngClassInvalid; var currVal_27 = core["_29" /* ɵnov */](_v, 60).ngClassPending; _ck(_v, 57, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27); var currVal_32 = core["_41" /* ɵunv */](_v, 74, 0, core["_29" /* ɵnov */](_v, 75).transform("core.sortby")); _ck(_v, 74, 0, currVal_32); var currVal_33 = core["_29" /* ɵnov */](_v, 78)._disabled; var currVal_34 = core["_29" /* ɵnov */](_v, 83).ngClassUntouched; var currVal_35 = core["_29" /* ɵnov */](_v, 83).ngClassTouched; var currVal_36 = core["_29" /* ɵnov */](_v, 83).ngClassPristine; var currVal_37 = core["_29" /* ɵnov */](_v, 83).ngClassDirty; var currVal_38 = core["_29" /* ɵnov */](_v, 83).ngClassValid; var currVal_39 = core["_29" /* ɵnov */](_v, 83).ngClassInvalid; var currVal_40 = core["_29" /* ɵnov */](_v, 83).ngClassPending; _ck(_v, 77, 0, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40); var currVal_44 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 88, 0, core["_29" /* ɵnov */](_v, 89).transform("addon.mod_data.other")), ""); _ck(_v, 88, 0, currVal_44); var currVal_46 = core["_41" /* ɵunv */](_v, 93, 0, core["_29" /* ɵnov */](_v, 94).transform("addon.mod_data.timeadded")); _ck(_v, 93, 0, currVal_46); var currVal_48 = core["_41" /* ɵunv */](_v, 98, 0, core["_29" /* ɵnov */](_v, 99).transform("addon.mod_data.timemodified")); _ck(_v, 98, 0, currVal_48); var currVal_50 = core["_41" /* ɵunv */](_v, 103, 0, core["_29" /* ɵnov */](_v, 104).transform("addon.mod_data.authorfirstname")); _ck(_v, 103, 0, currVal_50); var currVal_52 = core["_41" /* ɵunv */](_v, 108, 0, core["_29" /* ɵnov */](_v, 109).transform("addon.mod_data.authorlastname")); _ck(_v, 108, 0, currVal_52); var currVal_54 = core["_29" /* ɵnov */](_v, 123).ngClassUntouched; var currVal_55 = core["_29" /* ɵnov */](_v, 123).ngClassTouched; var currVal_56 = core["_29" /* ɵnov */](_v, 123).ngClassPristine; var currVal_57 = core["_29" /* ɵnov */](_v, 123).ngClassDirty; var currVal_58 = core["_29" /* ɵnov */](_v, 123).ngClassValid; var currVal_59 = core["_29" /* ɵnov */](_v, 123).ngClassInvalid; var currVal_60 = core["_29" /* ɵnov */](_v, 123).ngClassPending; _ck(_v, 117, 0, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60); var currVal_63 = core["_41" /* ɵunv */](_v, 135, 0, core["_29" /* ɵnov */](_v, 136).transform("addon.mod_data.ascending")); _ck(_v, 135, 0, currVal_63); var currVal_64 = core["_29" /* ɵnov */](_v, 139)._disabled; _ck(_v, 138, 0, currVal_64); var currVal_66 = core["_41" /* ɵunv */](_v, 151, 0, core["_29" /* ɵnov */](_v, 152).transform("addon.mod_data.descending")); _ck(_v, 151, 0, currVal_66); var currVal_67 = core["_29" /* ɵnov */](_v, 155)._disabled; _ck(_v, 154, 0, currVal_67); var currVal_69 = (!_co.advancedSearch || !_co.search.searchingAdvanced); _ck(_v, 159, 0, currVal_69); var currVal_74 = core["_29" /* ɵnov */](_v, 172)._hidden; _ck(_v, 171, 0, currVal_74); var currVal_76 = core["_41" /* ɵunv */](_v, 173, 0, core["_29" /* ɵnov */](_v, 174).transform("addon.mod_data.search")); _ck(_v, 173, 0, currVal_76); });
}
function View_AddonModDataSearchPage_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "page-addon-mod-data-search", [], null, null, null, View_AddonModDataSearchPage_0, RenderType_AddonModDataSearchPage)), core["_15" /* ɵdid */](1, 49152, null, 0, search_AddonModDataSearchPage, [nav_params["a" /* NavParams */], view_controller["a" /* ViewController */], esm5_forms["d" /* FormBuilder */], utils_utils["a" /* CoreUtilsProvider */], dom["a" /* CoreDomUtilsProvider */], fields_delegate["a" /* AddonModDataFieldsDelegate */], utils_text["a" /* CoreTextUtilsProvider */]], null, null)], null, null); }
var AddonModDataSearchPageNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("page-addon-mod-data-search", search_AddonModDataSearchPage, View_AddonModDataSearchPage_Host_0, {}, {}, []);





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

// EXTERNAL MODULE: ./src/core/comments/components/components.module.ts
var comments_components_components_module = __webpack_require__(425);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(237);

// CONCATENATED MODULE: ./src/addon/mod/data/pages/search/search.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModDataSearchPageModuleNgFactory", function() { return AddonModDataSearchPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_search.module,_.._.._.._.._.._node_modules_ionic_angular_components_action_sheet_action_sheet_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_alert_alert_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_app_app_root.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_loading_loading_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_modal_modal_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_picker_picker_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_popover_popover_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_select_select_popover_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_toast_toast_component.ngfactory,_.._.._.._.._components_context_menu_context_menu_popover.ngfactory,_.._.._.._.._components_course_picker_menu_course_picker_menu_popover.ngfactory,_.._.._.._.._components_recaptcha_recaptchamodal.ngfactory,_.._.._.._.._core_course_components_unsupported_module_unsupported_module.ngfactory,_.._.._.._.._core_comments_components_comments_comments.ngfactory,_.._components_index_index.ngfactory,_search.ngfactory,_angular_common,_angular_forms,_ngx_translate_core_src_translate.loader,_ngx_translate_core_src_translate.compiler,_ngx_translate_core_src_translate.parser,_ngx_translate_core_src_missing_translation_handler,_ngx_translate_core_src_translate.service,_ngx_translate_core_src_translate.store,_.._.._.._.._directives_directives.module,ionic_angular_module,_ngx_translate_core_index,_.._.._.._.._pipes_pipes.module,_.._.._.._.._components_components.module,_.._.._.._.._core_course_components_components.module,_.._.._.._.._core_compile_components_compile_html_compile_html.module,_.._.._.._.._core_comments_components_components.module,_.._components_components.module,ionic_angular_util_module_loader,_search PURE_IMPORTS_END */





































var AddonModDataSearchPageModuleNgFactory = /*@__PURE__*/ core["_13" /* ɵcmf */](AddonModDataSearchPageModule, [], function (_l) { return core["_25" /* ɵmod */]([core["_26" /* ɵmpd */](512, core["n" /* ComponentFactoryResolver */], core["_6" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], unsupported_module_ngfactory["a" /* CoreCourseUnsupportedModuleComponentNgFactory */], comments_ngfactory["a" /* CoreCommentsCommentsComponentNgFactory */], index_ngfactory["a" /* AddonModDataIndexComponentNgFactory */], AddonModDataSearchPageNgFactory]], [3, core["n" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["_26" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["v" /* ɵa */]]]), core["_26" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_26" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_26" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_26" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_26" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_26" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_26" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_26" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_26" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_26" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_26" /* ɵmpd */](512, _ngx_translate_core["a" /* TranslateModule */], _ngx_translate_core["a" /* TranslateModule */], []), core["_26" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_26" /* ɵmpd */](512, components_components_module["a" /* CoreComponentsModule */], components_components_module["a" /* CoreComponentsModule */], []), core["_26" /* ɵmpd */](512, course_components_components_module["a" /* CoreCourseComponentsModule */], course_components_components_module["a" /* CoreCourseComponentsModule */], []), core["_26" /* ɵmpd */](512, compile_html_module["a" /* CoreCompileHtmlComponentModule */], compile_html_module["a" /* CoreCompileHtmlComponentModule */], []), core["_26" /* ɵmpd */](512, comments_components_components_module["a" /* CoreCommentsComponentsModule */], comments_components_components_module["a" /* CoreCommentsComponentsModule */], []), core["_26" /* ɵmpd */](512, components_module["a" /* AddonModDataComponentsModule */], components_module["a" /* AddonModDataComponentsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_26" /* ɵmpd */](512, AddonModDataSearchPageModule, AddonModDataSearchPageModule, []), core["_26" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_26" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_26" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], search_AddonModDataSearchPage, [])]); });






/***/ })

});
//# sourceMappingURL=96.js.map