webpackJsonp([26],{

/***/ 1819:
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

// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(33);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(19);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(13);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(2);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(12);

// EXTERNAL MODULE: ./src/core/fileuploader/providers/fileuploader.ts
var fileuploader = __webpack_require__(63);

// EXTERNAL MODULE: ./src/addon/mod/glossary/providers/glossary.ts
var glossary = __webpack_require__(182);

// EXTERNAL MODULE: ./src/addon/mod/glossary/providers/offline.ts
var offline = __webpack_require__(220);

// EXTERNAL MODULE: ./src/addon/mod/glossary/providers/helper.ts
var helper = __webpack_require__(450);

// CONCATENATED MODULE: ./src/addon/mod/glossary/pages/edit/edit.ts














/**
 * Page that displays the edit form.
 */
var edit_AddonModGlossaryEditPage = /*@__PURE__*/ (function () {
    function AddonModGlossaryEditPage(navParams, navCtrl, translate, domUtils, eventsProvider, sitesProvider, uploaderProvider, textUtils, glossaryProvider, glossaryOffline, glossaryHelper) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.domUtils = domUtils;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.uploaderProvider = uploaderProvider;
        this.textUtils = textUtils;
        this.glossaryProvider = glossaryProvider;
        this.glossaryOffline = glossaryOffline;
        this.glossaryHelper = glossaryHelper;
        this.component = glossary["a" /* AddonModGlossaryProvider */].COMPONENT;
        this.loaded = false;
        this.entry = {
            concept: '',
            definition: '',
            timecreated: 0,
        };
        this.options = {
            categories: [],
            aliases: '',
            usedynalink: false,
            casesensitive: false,
            fullmatch: false
        };
        this.attachments = [];
        this.definitionControl = new esm5_forms["e" /* FormControl */]();
        this.categories = [];
        this.isDestroyed = false;
        this.saved = false;
        this.courseId = navParams.get('courseId');
        this.module = navParams.get('module');
        this.glossary = navParams.get('glossary');
    }
    /**
     * Component being initialized.
     */
    AddonModGlossaryEditPage.prototype.ngOnInit = function () {
        var _this = this;
        var entry = this.navParams.get('entry');
        var promise;
        if (entry) {
            this.entry.concept = entry.concept || '';
            this.entry.definition = entry.definition || '';
            this.originalData = {
                concept: this.entry.concept,
                definition: this.entry.definition,
                files: [],
            };
            if (entry.options) {
                this.options.categories = entry.options.categories || [];
                this.options.aliases = entry.options.aliases || '';
                this.options.usedynalink = !!entry.options.usedynalink;
                if (this.options.usedynalink) {
                    this.options.casesensitive = !!entry.options.casesensitive;
                    this.options.fullmatch = !!entry.options.fullmatch;
                }
            }
            // Treat offline attachments if any.
            if (entry.attachments && entry.attachments.offline) {
                promise = this.glossaryHelper.getStoredFiles(this.glossary.id, entry.concept, entry.timecreated).then(function (files) {
                    _this.attachments = files;
                    _this.originalData.files = files.slice();
                });
            }
        }
        this.definitionControl.setValue(this.entry.definition);
        Promise.resolve(promise).then(function () {
            _this.glossaryProvider.getAllCategories(_this.glossary.id).then(function (categories) {
                _this.categories = categories;
            }).finally(function () {
                _this.loaded = true;
            });
        });
    };
    /**
     * Definition changed.
     *
     * @param {string} text The new text.
     */
    AddonModGlossaryEditPage.prototype.onDefinitionChange = function (text) {
        this.entry.definition = text;
    };
    /**
     * Check if we can leave the page or not.
     *
     * @return {boolean|Promise<void>} Resolved if we can leave it, rejected if not.
     */
    AddonModGlossaryEditPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        var promise;
        if (!this.saved && this.glossaryHelper.hasEntryDataChanged(this.entry, this.attachments, this.originalData)) {
            // Show confirmation if some data has been modified.
            promise = this.domUtils.showConfirm(this.translate.instant('core.confirmcanceledit'));
        }
        else {
            promise = Promise.resolve();
        }
        return promise.then(function () {
            // Delete the local files from the tmp folder.
            _this.uploaderProvider.clearTmpFiles(_this.attachments);
        });
    };
    /**
     * Save the entry.
     */
    AddonModGlossaryEditPage.prototype.save = function () {
        var _this = this;
        var definition = this.entry.definition, saveOffline = false, promise;
        var timecreated = this.entry.timecreated || Date.now();
        if (!this.entry.concept || !definition) {
            this.domUtils.showErrorModal('addon.mod_glossary.fillfields', true);
            return;
        }
        var modal = this.domUtils.showModalLoading('core.sending', true);
        // Add some HTML to the definition if needed.
        definition = this.textUtils.formatHtmlLines(definition);
        // Upload attachments first if any.
        if (this.attachments.length > 0) {
            promise = this.glossaryHelper.uploadOrStoreFiles(this.glossary.id, this.entry.concept, timecreated, this.attachments, false).catch(function () {
                // Cannot upload them in online, save them in offline.
                saveOffline = true;
                return _this.glossaryHelper.uploadOrStoreFiles(_this.glossary.id, _this.entry.concept, timecreated, _this.attachments, true);
            });
        }
        else {
            promise = Promise.resolve();
        }
        promise.then(function (attach) {
            var options = {
                aliases: _this.options.aliases,
                categories: _this.options.categories.join(',')
            };
            if (_this.glossary.usedynalink) {
                options.usedynalink = _this.options.usedynalink ? 1 : 0;
                if (_this.options.usedynalink) {
                    options.casesensitive = _this.options.casesensitive ? 1 : 0;
                    options.fullmatch = _this.options.fullmatch ? 1 : 0;
                }
            }
            if (saveOffline) {
                var promise_1;
                if (_this.entry && !_this.glossary.allowduplicatedentries) {
                    // Check if the entry is duplicated in online or offline mode.
                    promise_1 = _this.glossaryProvider.isConceptUsed(_this.glossary.id, _this.entry.concept, _this.entry.timecreated)
                        .then(function (used) {
                        if (used) {
                            // There's a entry with same name, reject with error message.
                            return Promise.reject(_this.translate.instant('addon.mod_glossary.errconceptalreadyexists'));
                        }
                    });
                }
                else {
                    promise_1 = Promise.resolve();
                }
                return promise_1.then(function () {
                    // Save entry in offline.
                    return _this.glossaryOffline.addNewEntry(_this.glossary.id, _this.entry.concept, definition, _this.courseId, options, attach, timecreated, undefined, undefined, _this.entry).then(function () {
                        // Don't return anything.
                    });
                });
            }
            else {
                // Try to send it to server.
                // Don't allow offline if there are attachments since they were uploaded fine.
                return _this.glossaryProvider.addEntry(_this.glossary.id, _this.entry.concept, definition, _this.courseId, options, attach, timecreated, undefined, _this.entry, !_this.attachments.length, !_this.glossary.allowduplicatedentries);
            }
        }).then(function (entryId) {
            if (entryId) {
                // Data sent to server, delete stored files (if any).
                _this.glossaryHelper.deleteStoredFiles(_this.glossary.id, _this.entry.concept, timecreated);
            }
            var data = {
                glossaryId: _this.glossary.id,
            };
            _this.eventsProvider.trigger(glossary["a" /* AddonModGlossaryProvider */].ADD_ENTRY_EVENT, data, _this.sitesProvider.getCurrentSiteId());
            _this.saved = true;
            _this.navCtrl.pop();
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.mod_glossary.cannoteditentry', true);
        }).finally(function () {
            modal.dismiss();
        });
    };
    return AddonModGlossaryEditPage;
}());





// CONCATENATED MODULE: ./src/addon/mod/glossary/pages/edit/edit.module.ts







var AddonModGlossaryNewDiscussionPageModule = /*@__PURE__*/ (function () {
    function AddonModGlossaryNewDiscussionPageModule() {
    }
    return AddonModGlossaryNewDiscussionPageModule;
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
var config = __webpack_require__(7);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.ngfactory.js
var select_ngfactory = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.js
var select_select = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(163);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(420);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(1290);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(191);

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

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(40);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(3);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var url = __webpack_require__(25);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(6);

// EXTERNAL MODULE: ./src/providers/filepool.ts
var filepool = __webpack_require__(17);

// EXTERNAL MODULE: ./src/providers/app.ts
var providers_app = __webpack_require__(11);

// EXTERNAL MODULE: ./src/core/contentlinks/providers/helper.ts
var providers_helper = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(24);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(35);

// EXTERNAL MODULE: ./src/providers/utils/iframe.ts
var iframe = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(421);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(178);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(100);

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(57);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.ngfactory.js
var input_ngfactory = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.js
var input = __webpack_require__(77);

// EXTERNAL MODULE: ./src/components/rich-text-editor/rich-text-editor.ngfactory.js
var rich_text_editor_ngfactory = __webpack_require__(264);

// EXTERNAL MODULE: ./src/components/rich-text-editor/rich-text-editor.ts
var rich_text_editor = __webpack_require__(213);

// EXTERNAL MODULE: ./src/directives/auto-rows.ts
var auto_rows = __webpack_require__(337);

// EXTERNAL MODULE: ./src/components/attachments/attachments.ngfactory.js
var attachments_ngfactory = __webpack_require__(430);

// EXTERNAL MODULE: ./src/components/attachments/attachments.ts
var attachments = __webpack_require__(268);

// EXTERNAL MODULE: ./src/core/fileuploader/providers/helper.ts
var fileuploader_providers_helper = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(60);

// CONCATENATED MODULE: ./src/addon/mod/glossary/pages/edit/edit.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,ionic_angular_components_option_option,_.._.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_label_label,_ngx_translate_core_src_translate.pipe,_ngx_translate_core_src_translate.service,_.._.._.._.._.._node_modules_ionic_angular_components_select_select.ngfactory,ionic_angular_components_select_select,ionic_angular_components_app_app,ionic_angular_navigation_deep_linker,_angular_forms,_angular_common,ionic_angular_components_item_item_divider,_.._.._.._.._.._node_modules_ionic_angular_components_toggle_toggle.ngfactory,ionic_angular_components_toggle_toggle,ionic_angular_platform_platform,ionic_angular_tap_click_haptic,ionic_angular_gestures_gesture_controller,ionic_angular_platform_dom_controller,ionic_angular_components_toolbar_toolbar_header,ionic_angular_navigation_view_controller,_.._.._.._.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_navigation_nav_controller,_.._.._.._.._directives_back_button,_.._.._.._.._providers_events,_.._.._.._.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_toolbar,_.._.._.._.._directives_format_text,_.._.._.._.._providers_sites,_.._.._.._.._providers_utils_dom,_.._.._.._.._providers_utils_text,_.._.._.._.._providers_utils_utils,_.._.._.._.._providers_utils_url,_.._.._.._.._providers_logger,_.._.._.._.._providers_filepool,_.._.._.._.._providers_app,_.._.._.._.._core_contentlinks_providers_helper,ionic_angular_components_content_content,_.._.._.._.._components_split_view_split_view,_.._.._.._.._providers_utils_iframe,ionic_angular_components_toolbar_toolbar_item,_.._.._.._.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,_.._.._.._.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_platform_keyboard,_.._.._.._.._components_loading_loading.ngfactory,_.._.._.._.._components_loading_loading,ionic_angular_components_list_list,_.._.._.._.._.._node_modules_ionic_angular_components_input_input.ngfactory,ionic_angular_components_input_input,_.._.._.._.._components_rich_text_editor_rich_text_editor.ngfactory,_.._.._.._.._components_rich_text_editor_rich_text_editor,_.._.._.._.._directives_auto_rows,_.._.._.._.._components_attachments_attachments.ngfactory,_.._.._.._.._components_attachments_attachments,_.._.._.._.._core_fileuploader_providers_fileuploader,_.._.._.._.._core_fileuploader_providers_helper,_edit,ionic_angular_navigation_nav_params,_.._providers_glossary,_.._providers_offline,_.._providers_helper PURE_IMPORTS_END */





































































var styles_AddonModGlossaryEditPage = [];
var RenderType_AddonModGlossaryEditPage = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonModGlossaryEditPage, data: {} });

function View_AddonModGlossaryEditPage_2(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, [[11, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](2, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.name; _ck(_v, 2, 0, currVal_1); }); }
function View_AddonModGlossaryEditPage_1(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 23, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 8, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 9, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 10, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 1, 3, "ion-label", [["id", "addon-mod-glossary-categories-label"], ["stacked", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](8, 16384, [[8, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], { id: [0, "id"] }, null), (_l()(), core["_40" /* ɵted */](9, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](12, 0, null, 3, 10, "ion-select", [["aria-labelledby", "addon-mod-glossary-categories-label"], ["interface", "popover"], ["multiple", "true"]], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"], [null, "keyup.space"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 13)._click($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keyup.space" === en)) {
                var pd_1 = (core["_29" /* ɵnov */](_v, 13)._keyup() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.options.categories = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, select_ngfactory["b" /* View_Select_0 */], select_ngfactory["a" /* RenderType_Select */])), core["_15" /* ɵdid */](13, 1228800, null, 1, select_select["a" /* Select */], [app["a" /* App */], util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item["a" /* Item */]], deep_linker["a" /* DeepLinker */]], { interface: [0, "interface"], multiple: [1, "multiple"] }, null), core["_37" /* ɵqud */](603979776, 11, { options: 1 }), core["_35" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [select_select["a" /* Select */]]), core["_15" /* ɵdid */](16, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_15" /* ɵdid */](18, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModGlossaryEditPage_2)), core["_15" /* ɵdid */](21, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "addon-mod-glossary-categories-label"; _ck(_v, 8, 0, currVal_0); var currVal_10 = "popover"; var currVal_11 = "true"; _ck(_v, 13, 0, currVal_10, currVal_11); var currVal_12 = _co.options.categories; _ck(_v, 16, 0, currVal_12); var currVal_13 = _co.categories; _ck(_v, 21, 0, currVal_13); }, function (_ck, _v) { var currVal_1 = core["_41" /* ɵunv */](_v, 9, 0, core["_29" /* ɵnov */](_v, 10).transform("addon.mod_glossary.categories")); _ck(_v, 9, 0, currVal_1); var currVal_2 = core["_29" /* ɵnov */](_v, 13)._disabled; var currVal_3 = core["_29" /* ɵnov */](_v, 18).ngClassUntouched; var currVal_4 = core["_29" /* ɵnov */](_v, 18).ngClassTouched; var currVal_5 = core["_29" /* ɵnov */](_v, 18).ngClassPristine; var currVal_6 = core["_29" /* ɵnov */](_v, 18).ngClassDirty; var currVal_7 = core["_29" /* ɵnov */](_v, 18).ngClassValid; var currVal_8 = core["_29" /* ɵnov */](_v, 18).ngClassInvalid; var currVal_9 = core["_29" /* ɵnov */](_v, 18).ngClassPending; _ck(_v, 12, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); });
}
function View_AddonModGlossaryEditPage_3(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 70, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 7, "ion-item-divider", [["class", "item item-divider"], ["color", "light"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 18, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 19, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 20, { _icons: 1 }), core["_15" /* ɵdid */](7, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_40" /* ɵted */](8, 2, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](11, 0, null, null, 18, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](12, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 21, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 22, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 23, { _icons: 1 }), core["_15" /* ɵdid */](16, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](18, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), core["_15" /* ɵdid */](19, 16384, [[21, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_40" /* ɵted */](20, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](23, 0, null, 4, 5, "ion-toggle", [], [[2, "toggle-disabled", null], [2, "toggle-checked", null], [2, "toggle-activated", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keyup"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("keyup" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 24)._keyup($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_1 = ((_co.options.usedynalink = $event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, toggle_ngfactory["b" /* View_Toggle_0 */], toggle_ngfactory["a" /* RenderType_Toggle */])), core["_15" /* ɵdid */](24, 1228800, null, 0, toggle["a" /* Toggle */], [util_form["a" /* Form */], config["a" /* Config */], platform["a" /* Platform */], core["p" /* ElementRef */], core["K" /* Renderer */], haptic["a" /* Haptic */], [2, item["a" /* Item */]], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */], core["D" /* NgZone */]], null, null), core["_35" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [toggle["a" /* Toggle */]]), core["_15" /* ɵdid */](26, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_15" /* ɵdid */](28, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](31, 0, null, null, 18, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](32, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 24, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 25, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 26, { _icons: 1 }), core["_15" /* ɵdid */](36, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](38, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), core["_15" /* ɵdid */](39, 16384, [[24, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_40" /* ɵted */](40, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](43, 0, null, 4, 5, "ion-toggle", [], [[2, "toggle-disabled", null], [2, "toggle-checked", null], [2, "toggle-activated", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keyup"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("keyup" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 44)._keyup($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_1 = ((_co.options.casesensitive = $event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, toggle_ngfactory["b" /* View_Toggle_0 */], toggle_ngfactory["a" /* RenderType_Toggle */])), core["_15" /* ɵdid */](44, 1228800, null, 0, toggle["a" /* Toggle */], [util_form["a" /* Form */], config["a" /* Config */], platform["a" /* Platform */], core["p" /* ElementRef */], core["K" /* Renderer */], haptic["a" /* Haptic */], [2, item["a" /* Item */]], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */], core["D" /* NgZone */]], { disabled: [0, "disabled"] }, null), core["_35" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [toggle["a" /* Toggle */]]), core["_15" /* ɵdid */](46, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { isDisabled: [0, "isDisabled"], model: [1, "model"] }, { update: "ngModelChange" }), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_15" /* ɵdid */](48, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](51, 0, null, null, 18, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](52, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 27, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 28, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 29, { _icons: 1 }), core["_15" /* ɵdid */](56, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](58, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), core["_15" /* ɵdid */](59, 16384, [[27, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_40" /* ɵted */](60, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](63, 0, null, 4, 5, "ion-toggle", [], [[2, "toggle-disabled", null], [2, "toggle-checked", null], [2, "toggle-activated", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keyup"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("keyup" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 64)._keyup($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_1 = ((_co.options.fullmatch = $event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, toggle_ngfactory["b" /* View_Toggle_0 */], toggle_ngfactory["a" /* RenderType_Toggle */])), core["_15" /* ɵdid */](64, 1228800, null, 0, toggle["a" /* Toggle */], [util_form["a" /* Form */], config["a" /* Config */], platform["a" /* Platform */], core["p" /* ElementRef */], core["K" /* Renderer */], haptic["a" /* Haptic */], [2, item["a" /* Item */]], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */], core["D" /* NgZone */]], { disabled: [0, "disabled"] }, null), core["_35" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [toggle["a" /* Toggle */]]), core["_15" /* ɵdid */](66, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { isDisabled: [0, "isDisabled"], model: [1, "model"] }, { update: "ngModelChange" }), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_15" /* ɵdid */](68, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "light"; _ck(_v, 3, 0, currVal_0); var currVal_1 = "light"; _ck(_v, 7, 0, currVal_1); var currVal_14 = _co.options.usedynalink; _ck(_v, 26, 0, currVal_14); var currVal_26 = !_co.options.usedynalink; _ck(_v, 44, 0, currVal_26); var currVal_27 = !_co.options.usedynalink; var currVal_28 = _co.options.casesensitive; _ck(_v, 46, 0, currVal_27, currVal_28); var currVal_40 = !_co.options.usedynalink; _ck(_v, 64, 0, currVal_40); var currVal_41 = !_co.options.usedynalink; var currVal_42 = _co.options.fullmatch; _ck(_v, 66, 0, currVal_41, currVal_42); }, function (_ck, _v) { var currVal_2 = core["_41" /* ɵunv */](_v, 8, 0, core["_29" /* ɵnov */](_v, 9).transform("addon.mod_glossary.linking")); _ck(_v, 8, 0, currVal_2); var currVal_3 = core["_41" /* ɵunv */](_v, 20, 0, core["_29" /* ɵnov */](_v, 21).transform("addon.mod_glossary.entryusedynalink")); _ck(_v, 20, 0, currVal_3); var currVal_4 = core["_29" /* ɵnov */](_v, 24)._disabled; var currVal_5 = core["_29" /* ɵnov */](_v, 24)._value; var currVal_6 = core["_29" /* ɵnov */](_v, 24)._activated; var currVal_7 = core["_29" /* ɵnov */](_v, 28).ngClassUntouched; var currVal_8 = core["_29" /* ɵnov */](_v, 28).ngClassTouched; var currVal_9 = core["_29" /* ɵnov */](_v, 28).ngClassPristine; var currVal_10 = core["_29" /* ɵnov */](_v, 28).ngClassDirty; var currVal_11 = core["_29" /* ɵnov */](_v, 28).ngClassValid; var currVal_12 = core["_29" /* ɵnov */](_v, 28).ngClassInvalid; var currVal_13 = core["_29" /* ɵnov */](_v, 28).ngClassPending; _ck(_v, 23, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_15 = core["_41" /* ɵunv */](_v, 40, 0, core["_29" /* ɵnov */](_v, 41).transform("addon.mod_glossary.casesensitive")); _ck(_v, 40, 0, currVal_15); var currVal_16 = core["_29" /* ɵnov */](_v, 44)._disabled; var currVal_17 = core["_29" /* ɵnov */](_v, 44)._value; var currVal_18 = core["_29" /* ɵnov */](_v, 44)._activated; var currVal_19 = core["_29" /* ɵnov */](_v, 48).ngClassUntouched; var currVal_20 = core["_29" /* ɵnov */](_v, 48).ngClassTouched; var currVal_21 = core["_29" /* ɵnov */](_v, 48).ngClassPristine; var currVal_22 = core["_29" /* ɵnov */](_v, 48).ngClassDirty; var currVal_23 = core["_29" /* ɵnov */](_v, 48).ngClassValid; var currVal_24 = core["_29" /* ɵnov */](_v, 48).ngClassInvalid; var currVal_25 = core["_29" /* ɵnov */](_v, 48).ngClassPending; _ck(_v, 43, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25); var currVal_29 = core["_41" /* ɵunv */](_v, 60, 0, core["_29" /* ɵnov */](_v, 61).transform("addon.mod_glossary.fullmatch")); _ck(_v, 60, 0, currVal_29); var currVal_30 = core["_29" /* ɵnov */](_v, 64)._disabled; var currVal_31 = core["_29" /* ɵnov */](_v, 64)._value; var currVal_32 = core["_29" /* ɵnov */](_v, 64)._activated; var currVal_33 = core["_29" /* ɵnov */](_v, 68).ngClassUntouched; var currVal_34 = core["_29" /* ɵnov */](_v, 68).ngClassTouched; var currVal_35 = core["_29" /* ɵnov */](_v, 68).ngClassPristine; var currVal_36 = core["_29" /* ɵnov */](_v, 68).ngClassDirty; var currVal_37 = core["_29" /* ɵnov */](_v, 68).ngClassValid; var currVal_38 = core["_29" /* ɵnov */](_v, 68).ngClassInvalid; var currVal_39 = core["_29" /* ɵnov */](_v, 68).ngClassPending; _ck(_v, 63, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39); });
}
function View_AddonModGlossaryEditPage_0(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 22, "ion-header", [], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 18, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_15" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), core["_15" /* ɵdid */](5, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_15" /* ɵdid */](8, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_16" /* ɵeld */](9, 0, null, 0, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](10, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], providers_app["a" /* CoreAppProvider */], providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_16" /* ɵeld */](12, 0, null, 2, 8, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](13, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_37" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](16, 0, null, null, 3, "button", [["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.save() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](17, 1097728, [[1, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), (_l()(), core["_40" /* ɵted */](18, 0, [" ", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_16" /* ɵeld */](24, 0, null, null, 85, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_15" /* ɵdid */](25, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["K" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["D" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_16" /* ɵeld */](27, 0, null, 1, 81, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_15" /* ɵdid */](28, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["p" /* ElementRef */], events["a" /* CoreEventsProvider */], utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_16" /* ɵeld */](30, 0, null, 0, 77, "ion-list", [], null, null, null, null, null)), core["_15" /* ɵdid */](31, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](33, 0, null, null, 18, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](34, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 2, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 3, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 4, { _icons: 1 }), core["_15" /* ɵdid */](38, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](40, 0, null, 1, 3, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](41, 16384, [[2, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_40" /* ɵted */](42, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](45, 0, null, 3, 5, "ion-input", [["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.entry.concept = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_15" /* ɵdid */](46, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [8, null], [8, null], [8, null]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_15" /* ɵdid */](48, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_15" /* ɵdid */](49, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"], placeholder: [1, "placeholder"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](53, 0, null, null, 15, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](54, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 5, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 6, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 7, { _icons: 1 }), core["_15" /* ɵdid */](58, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](60, 0, null, 1, 3, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](61, 16384, [[5, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_40" /* ɵted */](62, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](65, 0, null, 3, 2, "core-rich-text-editor", [["item-content", ""], ["name", "addon_mod_glossary_edit"]], null, [[null, "contentChanged"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("contentChanged" === en)) {
                var pd_0 = (_co.onDefinitionChange($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, rich_text_editor_ngfactory["b" /* View_CoreRichTextEditorComponent_0 */], rich_text_editor_ngfactory["a" /* RenderType_CoreRichTextEditorComponent */])), core["_15" /* ɵdid */](66, 1228800, null, 0, rich_text_editor["a" /* CoreRichTextEditorComponent */], [dom["a" /* CoreDomUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], sites["a" /* CoreSitesProvider */], filepool["a" /* CoreFilepoolProvider */], [2, content["a" /* Content */]], core["p" /* ElementRef */], events["a" /* CoreEventsProvider */], utils["a" /* CoreUtilsProvider */], platform["a" /* Platform */]], { placeholder: [0, "placeholder"], control: [1, "control"], name: [2, "name"], component: [3, "component"], componentId: [4, "componentId"] }, { contentChanged: "contentChanged" }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModGlossaryEditPage_1)), core["_15" /* ɵdid */](71, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](73, 0, null, null, 18, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](74, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 12, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 13, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 14, { _icons: 1 }), core["_15" /* ɵdid */](78, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](80, 0, null, 1, 3, "ion-label", [["id", "addon-mod-glossary-aliases-label"], ["stacked", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](81, 16384, [[12, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], { id: [0, "id"] }, null), (_l()(), core["_40" /* ɵted */](82, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](85, 0, null, 3, 5, "ion-textarea", [["aria-labelledby", "addon-mod-glossary-aliases-label"], ["core-auto-rows", ""], ["rows", "1"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "change"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 86).onInput() !== false);
                ad = (pd_0 && ad);
            }
            if (("change" === en)) {
                var pd_1 = (core["_29" /* ɵnov */](_v, 86).onChange() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.options.aliases = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_15" /* ɵdid */](86, 4210688, null, 0, auto_rows["a" /* CoreAutoRowsDirective */], [core["p" /* ElementRef */]], null, null), core["_15" /* ɵdid */](87, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [8, null], [8, null], [8, null]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_15" /* ɵdid */](89, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_15" /* ɵdid */](90, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], null, { input: "input" }), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](93, 0, null, null, 7, "ion-item-divider", [["class", "item item-divider"], ["color", "light"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](94, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 15, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 16, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 17, { _icons: 1 }), core["_15" /* ɵdid */](98, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_40" /* ɵted */](99, 2, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](102, 0, null, null, 1, "core-attachments", [], null, null, null, attachments_ngfactory["b" /* View_CoreAttachmentsComponent_0 */], attachments_ngfactory["a" /* RenderType_CoreAttachmentsComponent */])), core["_15" /* ɵdid */](103, 114688, null, 0, attachments["a" /* CoreAttachmentsComponent */], [providers_app["a" /* CoreAppProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], fileuploader["a" /* CoreFileUploaderProvider */], translate_service["a" /* TranslateService */], fileuploader_providers_helper["a" /* CoreFileUploaderHelperProvider */]], { files: [0, "files"], component: [1, "component"], componentId: [2, "componentId"], allowOffline: [3, "allowOffline"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModGlossaryEditPage_3)), core["_15" /* ɵdid */](106, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 5, 0); var currVal_2 = _co.module.name; _ck(_v, 10, 0, currVal_2); var currVal_6 = _co.loaded; _ck(_v, 28, 0, currVal_6); var currVal_15 = _co.entry.concept; _ck(_v, 46, 0, currVal_15); var currVal_16 = "text"; var currVal_17 = core["_41" /* ɵunv */](_v, 49, 1, core["_29" /* ɵnov */](_v, 50).transform("addon.mod_glossary.concept")); _ck(_v, 49, 0, currVal_16, currVal_17); var currVal_19 = core["_41" /* ɵunv */](_v, 66, 0, core["_29" /* ɵnov */](_v, 67).transform("addon.mod_glossary.definition")); var currVal_20 = _co.definitionControl; var currVal_21 = "addon_mod_glossary_edit"; var currVal_22 = _co.component; var currVal_23 = _co.glossary.cmid; _ck(_v, 66, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23); var currVal_24 = (_co.categories.length > 0); _ck(_v, 71, 0, currVal_24); var currVal_25 = "addon-mod-glossary-aliases-label"; _ck(_v, 81, 0, currVal_25); var currVal_34 = _co.options.aliases; _ck(_v, 87, 0, currVal_34); var currVal_35 = "light"; _ck(_v, 94, 0, currVal_35); var currVal_36 = "light"; _ck(_v, 98, 0, currVal_36); var currVal_38 = _co.attachments; var currVal_39 = _co.component; var currVal_40 = _co.glossary.cmid; var currVal_41 = true; _ck(_v, 103, 0, currVal_38, currVal_39, currVal_40, currVal_41); var currVal_42 = _co.glossary.usedynalink; _ck(_v, 106, 0, currVal_42); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_29" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = core["_41" /* ɵunv */](_v, 18, 0, core["_29" /* ɵnov */](_v, 19).transform("core.save")); _ck(_v, 18, 0, currVal_3); var currVal_4 = core["_29" /* ɵnov */](_v, 25).statusbarPadding; var currVal_5 = core["_29" /* ɵnov */](_v, 25)._hasRefresher; _ck(_v, 24, 0, currVal_4, currVal_5); var currVal_7 = core["_41" /* ɵunv */](_v, 42, 0, core["_29" /* ɵnov */](_v, 43).transform("addon.mod_glossary.concept")); _ck(_v, 42, 0, currVal_7); var currVal_8 = core["_29" /* ɵnov */](_v, 48).ngClassUntouched; var currVal_9 = core["_29" /* ɵnov */](_v, 48).ngClassTouched; var currVal_10 = core["_29" /* ɵnov */](_v, 48).ngClassPristine; var currVal_11 = core["_29" /* ɵnov */](_v, 48).ngClassDirty; var currVal_12 = core["_29" /* ɵnov */](_v, 48).ngClassValid; var currVal_13 = core["_29" /* ɵnov */](_v, 48).ngClassInvalid; var currVal_14 = core["_29" /* ɵnov */](_v, 48).ngClassPending; _ck(_v, 45, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_18 = core["_41" /* ɵunv */](_v, 62, 0, core["_29" /* ɵnov */](_v, 63).transform("addon.mod_glossary.definition")); _ck(_v, 62, 0, currVal_18); var currVal_26 = core["_41" /* ɵunv */](_v, 82, 0, core["_29" /* ɵnov */](_v, 83).transform("addon.mod_glossary.aliases")); _ck(_v, 82, 0, currVal_26); var currVal_27 = core["_29" /* ɵnov */](_v, 89).ngClassUntouched; var currVal_28 = core["_29" /* ɵnov */](_v, 89).ngClassTouched; var currVal_29 = core["_29" /* ɵnov */](_v, 89).ngClassPristine; var currVal_30 = core["_29" /* ɵnov */](_v, 89).ngClassDirty; var currVal_31 = core["_29" /* ɵnov */](_v, 89).ngClassValid; var currVal_32 = core["_29" /* ɵnov */](_v, 89).ngClassInvalid; var currVal_33 = core["_29" /* ɵnov */](_v, 89).ngClassPending; _ck(_v, 85, 0, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33); var currVal_37 = core["_41" /* ɵunv */](_v, 99, 0, core["_29" /* ɵnov */](_v, 100).transform("addon.mod_glossary.attachment")); _ck(_v, 99, 0, currVal_37); });
}
function View_AddonModGlossaryEditPage_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "page-addon-mod-glossary-edit", [], null, null, null, View_AddonModGlossaryEditPage_0, RenderType_AddonModGlossaryEditPage)), core["_15" /* ɵdid */](1, 114688, null, 0, edit_AddonModGlossaryEditPage, [nav_params["a" /* NavParams */], nav_controller["a" /* NavController */], translate_service["a" /* TranslateService */], dom["a" /* CoreDomUtilsProvider */], events["a" /* CoreEventsProvider */], sites["a" /* CoreSitesProvider */], fileuploader["a" /* CoreFileUploaderProvider */], utils_text["a" /* CoreTextUtilsProvider */], glossary["a" /* AddonModGlossaryProvider */], offline["a" /* AddonModGlossaryOfflineProvider */], helper["a" /* AddonModGlossaryHelperProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AddonModGlossaryEditPageNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("page-addon-mod-glossary-edit", edit_AddonModGlossaryEditPage, View_AddonModGlossaryEditPage_Host_0, {}, {}, []);





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

// CONCATENATED MODULE: ./src/addon/mod/glossary/pages/edit/edit.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModGlossaryNewDiscussionPageModuleNgFactory", function() { return AddonModGlossaryNewDiscussionPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_edit.module,_.._.._.._.._.._node_modules_ionic_angular_components_action_sheet_action_sheet_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_alert_alert_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_app_app_root.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_loading_loading_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_modal_modal_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_picker_picker_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_popover_popover_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_select_select_popover_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_toast_toast_component.ngfactory,_.._.._.._.._components_context_menu_context_menu_popover.ngfactory,_.._.._.._.._components_course_picker_menu_course_picker_menu_popover.ngfactory,_.._.._.._.._components_recaptcha_recaptchamodal.ngfactory,_edit.ngfactory,_angular_common,_angular_forms,_ngx_translate_core_src_translate.loader,_ngx_translate_core_src_translate.compiler,_ngx_translate_core_src_translate.parser,_ngx_translate_core_src_missing_translation_handler,_ngx_translate_core_src_translate.service,_ngx_translate_core_src_translate.store,ionic_angular_module,_ngx_translate_core_index,_.._.._.._.._directives_directives.module,_.._.._.._.._pipes_pipes.module,_.._.._.._.._components_components.module,ionic_angular_util_module_loader,_edit PURE_IMPORTS_END */






























var AddonModGlossaryNewDiscussionPageModuleNgFactory = /*@__PURE__*/ core["_13" /* ɵcmf */](AddonModGlossaryNewDiscussionPageModule, [], function (_l) { return core["_25" /* ɵmod */]([core["_26" /* ɵmpd */](512, core["n" /* ComponentFactoryResolver */], core["_6" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], AddonModGlossaryEditPageNgFactory]], [3, core["n" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["_26" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["v" /* ɵa */]]]), core["_26" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_26" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_26" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_26" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_26" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_26" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_26" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_26" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_26" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_26" /* ɵmpd */](512, _ngx_translate_core["a" /* TranslateModule */], _ngx_translate_core["a" /* TranslateModule */], []), core["_26" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_26" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_26" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_26" /* ɵmpd */](512, AddonModGlossaryNewDiscussionPageModule, AddonModGlossaryNewDiscussionPageModule, []), core["_26" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_26" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_26" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], edit_AddonModGlossaryEditPage, [])]); });






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
//# sourceMappingURL=26.js.map