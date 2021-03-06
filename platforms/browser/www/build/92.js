webpackJsonp([92],{

/***/ 1814:
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

// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(33);

// EXTERNAL MODULE: ./src/pipes/pipes.module.ts + 1 modules
var pipes_module = __webpack_require__(110);

// EXTERNAL MODULE: ./src/addon/mod/feedback/components/components.module.ts
var components_components_module = __webpack_require__(638);

// EXTERNAL MODULE: ./src/addon/mod/feedback/providers/feedback.ts
var feedback = __webpack_require__(132);

// EXTERNAL MODULE: ./src/addon/mod/feedback/providers/helper.ts
var helper = __webpack_require__(266);

// EXTERNAL MODULE: ./src/providers/groups.ts
var groups = __webpack_require__(64);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(35);

// CONCATENATED MODULE: ./src/addon/mod/feedback/pages/respondents/respondents.ts









/**
 * Page that displays feedback respondents.
 */
var AddonModFeedbackRespondentsPage = /*@__PURE__*/ (function () {
    function AddonModFeedbackRespondentsPage(navParams, feedbackProvider, groupsProvider, domUtils, feedbackHelper, navCtrl) {
        this.feedbackProvider = feedbackProvider;
        this.groupsProvider = groupsProvider;
        this.domUtils = domUtils;
        this.feedbackHelper = feedbackHelper;
        this.navCtrl = navCtrl;
        this.page = 0;
        this.groupInfo = {
            groups: [],
            separateGroups: false,
            visibleGroups: false
        };
        this.responses = {
            attempts: [],
            total: 0,
            canLoadMore: false
        };
        this.anonResponses = {
            attempts: [],
            total: 0,
            canLoadMore: false
        };
        this.feedbackLoaded = false;
        this.loadingMore = false;
        var module = navParams.get('module');
        this.moduleId = module.id;
        this.feedbackId = module.instance;
        this.courseId = navParams.get('courseId');
        this.selectedGroup = navParams.get('group') || 0;
    }
    /**
     * View loaded.
     */
    AddonModFeedbackRespondentsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fetchData().then(function () {
            if (_this.splitviewCtrl.isOn()) {
                if (_this.responses.attempts.length > 0) {
                    // Take first and load it.
                    _this.gotoAttempt(_this.responses.attempts[0]);
                }
                else if (_this.anonResponses.attempts.length > 0) {
                    // Take first and load it.
                    _this.gotoAttempt(_this.anonResponses.attempts[0]);
                }
            }
        });
    };
    /**
     * Fetch all the data required for the view.
     *
     * @param {boolean} [refresh] Empty events array first.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModFeedbackRespondentsPage.prototype.fetchData = function (refresh) {
        var _this = this;
        if (refresh === void 0) {
            refresh = false;
        }
        this.page = 0;
        this.responses.total = 0;
        this.responses.attempts = [];
        this.anonResponses.total = 0;
        this.anonResponses.attempts = [];
        return this.groupsProvider.getActivityGroupInfo(this.moduleId).then(function (groupInfo) {
            _this.groupInfo = groupInfo;
            return _this.loadGroupAttempts(_this.selectedGroup);
        }).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'core.course.errorgetmodule', true);
            if (!refresh) {
                // Some call failed on first fetch, go back.
                _this.navCtrl.pop();
            }
            return Promise.reject(null);
        });
    };
    /**
     * Load Group attempts.
     *
     * @param  {number} [groupId]   If defined it will change group if not, it will load more attempts for the same group.
     * @return {Promise<any>}       Resolved with the attempts loaded.
     */
    AddonModFeedbackRespondentsPage.prototype.loadGroupAttempts = function (groupId) {
        var _this = this;
        if (typeof groupId == 'undefined') {
            this.page++;
            this.loadingMore = true;
        }
        else {
            this.selectedGroup = groupId;
            this.page = 0;
            this.responses.total = 0;
            this.responses.attempts = [];
            this.anonResponses.total = 0;
            this.anonResponses.attempts = [];
            this.feedbackLoaded = false;
        }
        return this.feedbackHelper.getResponsesAnalysis(this.feedbackId, this.selectedGroup, this.page).then(function (responses) {
            _this.responses.total = responses.totalattempts;
            _this.anonResponses.total = responses.totalanonattempts;
            if (_this.anonResponses.attempts.length < responses.totalanonattempts) {
                _this.anonResponses.attempts = _this.anonResponses.attempts.concat(responses.anonattempts);
            }
            if (_this.responses.attempts.length < responses.totalattempts) {
                _this.responses.attempts = _this.responses.attempts.concat(responses.attempts);
            }
            _this.anonResponses.canLoadMore = _this.anonResponses.attempts.length < responses.totalanonattempts;
            _this.responses.canLoadMore = _this.responses.attempts.length < responses.totalattempts;
            return responses;
        }).finally(function () {
            _this.loadingMore = false;
            _this.feedbackLoaded = true;
        });
    };
    /**
     * Navigate to a particular attempt.
     *
     * @param {any} attempt Attempt object to load.
     */
    AddonModFeedbackRespondentsPage.prototype.gotoAttempt = function (attempt) {
        this.attemptId = attempt.id;
        this.splitviewCtrl.push('AddonModFeedbackAttemptPage', {
            attemptId: attempt.id,
            attempt: attempt,
            feedbackId: this.feedbackId,
            moduleId: this.moduleId,
            courseId: this.courseId
        });
    };
    /**
     * Change selected group or load more attempts.
     *
     * @param {number} [groupId] Group ID selected. If not defined, it will load more attempts.
     */
    AddonModFeedbackRespondentsPage.prototype.loadAttempts = function (groupId) {
        var _this = this;
        this.loadGroupAttempts(groupId).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'core.course.errorgetmodule', true);
        });
    };
    /**
     * Refresh the attempts.
     *
     * @param {any} refresher Refresher.
     */
    AddonModFeedbackRespondentsPage.prototype.refreshFeedback = function (refresher) {
        var _this = this;
        if (this.feedbackLoaded) {
            var promises = [];
            promises.push(this.feedbackProvider.invalidateResponsesAnalysisData(this.feedbackId));
            promises.push(this.groupsProvider.invalidateActivityGroupInfo(this.moduleId));
            Promise.all(promises).finally(function () {
                return _this.fetchData(true);
            }).finally(function () {
                refresher.complete();
            });
        }
    };
    return AddonModFeedbackRespondentsPage;
}());





// CONCATENATED MODULE: ./src/addon/mod/feedback/pages/respondents/respondents.module.ts









var AddonModFeedbackRespondentsPageModule = /*@__PURE__*/ (function () {
    function AddonModFeedbackRespondentsPageModule() {
    }
    return AddonModFeedbackRespondentsPageModule;
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

// EXTERNAL MODULE: ./src/addon/mod/feedback/components/index/index.ngfactory.js
var index_ngfactory = __webpack_require__(1304);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/option/option.js
var option_option = __webpack_require__(101);

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

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.ngfactory.js
var select_ngfactory = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.js
var select_select = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/avatar/avatar.js
var avatar = __webpack_require__(179);

// EXTERNAL MODULE: ./src/directives/external-content.ts
var external_content = __webpack_require__(162);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(6);

// EXTERNAL MODULE: ./src/providers/filepool.ts
var filepool = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(15);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(2);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var url = __webpack_require__(25);

// EXTERNAL MODULE: ./src/providers/app.ts
var providers_app = __webpack_require__(11);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(3);

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(40);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(12);

// EXTERNAL MODULE: ./src/core/contentlinks/providers/helper.ts
var providers_helper = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(24);

// EXTERNAL MODULE: ./src/providers/utils/iframe.ts
var iframe = __webpack_require__(38);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/spinner/spinner.ngfactory.js
var spinner_ngfactory = __webpack_require__(180);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/spinner/spinner.js
var spinner = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(163);

// EXTERNAL MODULE: ./src/pipes/format-date.ts
var format_date = __webpack_require__(327);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(420);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(1290);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(191);

// EXTERNAL MODULE: ./src/directives/back-button.ts
var back_button = __webpack_require__(635);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(1291);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(326);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(236);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ngfactory.js
var split_view_ngfactory = __webpack_require__(424);

// EXTERNAL MODULE: ./src/core/fileuploader/providers/fileuploader.ts
var fileuploader = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(178);

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

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(57);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(60);

// CONCATENATED MODULE: ./src/addon/mod/feedback/pages/respondents/respondents.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,ionic_angular_components_label_label,ionic_angular_config_config,_ngx_translate_core_src_translate.pipe,_ngx_translate_core_src_translate.service,ionic_angular_components_option_option,_.._.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,_angular_common,_.._.._.._.._.._node_modules_ionic_angular_components_select_select.ngfactory,ionic_angular_components_select_select,ionic_angular_components_app_app,ionic_angular_navigation_deep_linker,_angular_forms,ionic_angular_components_avatar_avatar,_.._.._.._.._directives_external_content,_.._.._.._.._providers_logger,_.._.._.._.._providers_filepool,ionic_angular_platform_platform,_.._.._.._.._providers_sites,_.._.._.._.._providers_utils_dom,_.._.._.._.._providers_utils_url,_.._.._.._.._providers_app,_.._.._.._.._providers_utils_utils,_.._.._.._.._directives_format_text,_.._.._.._.._providers_utils_text,_.._.._.._.._core_contentlinks_providers_helper,ionic_angular_navigation_nav_controller,ionic_angular_components_content_content,_.._.._.._.._components_split_view_split_view,_.._.._.._.._providers_utils_iframe,_.._.._.._.._providers_events,_.._.._.._.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,_.._.._.._.._.._node_modules_ionic_angular_components_spinner_spinner.ngfactory,ionic_angular_components_spinner_spinner,ionic_angular_components_item_item_divider,_.._.._.._.._pipes_format_date,ionic_angular_components_toolbar_toolbar_header,ionic_angular_navigation_view_controller,_.._.._.._.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,_.._.._.._.._directives_back_button,_.._.._.._.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_toolbar,_.._.._.._.._components_split_view_split_view.ngfactory,_.._.._.._.._core_fileuploader_providers_fileuploader,_.._.._.._.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_platform_dom_controller,ionic_angular_platform_keyboard,ionic_angular_components_refresher_refresher,ionic_angular_gestures_gesture_controller,_.._.._.._.._.._node_modules_ionic_angular_components_refresher_refresher_content.ngfactory,ionic_angular_components_refresher_refresher_content,_.._.._.._.._components_loading_loading.ngfactory,_.._.._.._.._components_loading_loading,ionic_angular_components_list_list,_respondents,ionic_angular_navigation_nav_params,_.._providers_feedback,_.._.._.._.._providers_groups,_.._providers_helper PURE_IMPORTS_END */


































































var styles_AddonModFeedbackRespondentsPage = [];
var RenderType_AddonModFeedbackRespondentsPage = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonModFeedbackRespondentsPage, data: {} });

function View_AddonModFeedbackRespondentsPage_2(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 3, "ion-label", [["id", "addon-feedback-groupslabel"]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, [[2, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], { id: [0, "id"] }, null), (_l()(), core["_40" /* ɵted */](2, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = "addon-feedback-groupslabel"; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = core["_41" /* ɵunv */](_v, 2, 0, core["_29" /* ɵnov */](_v, 3).transform("core.groupsseparate")); _ck(_v, 2, 0, currVal_1); }); }
function View_AddonModFeedbackRespondentsPage_3(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 3, "ion-label", [["id", "addon-feedback-groupslabel"]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, [[2, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], { id: [0, "id"] }, null), (_l()(), core["_40" /* ɵted */](2, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = "addon-feedback-groupslabel"; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = core["_41" /* ɵunv */](_v, 2, 0, core["_29" /* ɵnov */](_v, 3).transform("core.groupsvisible")); _ck(_v, 2, 0, currVal_1); }); }
function View_AddonModFeedbackRespondentsPage_4(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, [[5, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](2, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.name; _ck(_v, 2, 0, currVal_1); }); }
function View_AddonModFeedbackRespondentsPage_1(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 24, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](603979776, 2, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 3, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 4, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, 1, 1, null, View_AddonModFeedbackRespondentsPage_2)), core["_15" /* ɵdid */](8, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, 1, 1, null, View_AddonModFeedbackRespondentsPage_3)), core["_15" /* ɵdid */](11, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](13, 0, null, 3, 10, "ion-select", [["aria-labelledby", "addon-feedback-groupslabel"], ["interface", "popover"]], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionChange"], [null, "click"], [null, "keyup.space"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 14)._click($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keyup.space" === en)) {
                var pd_1 = (core["_29" /* ɵnov */](_v, 14)._keyup() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.selectedGroup = $event) !== false);
                ad = (pd_2 && ad);
            }
            if (("ionChange" === en)) {
                var pd_3 = (_co.loadAttempts(_co.selectedGroup) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, select_ngfactory["b" /* View_Select_0 */], select_ngfactory["a" /* RenderType_Select */])), core["_15" /* ɵdid */](14, 1228800, null, 1, select_select["a" /* Select */], [app["a" /* App */], util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item["a" /* Item */]], deep_linker["a" /* DeepLinker */]], { interface: [0, "interface"] }, { ionChange: "ionChange" }), core["_37" /* ɵqud */](603979776, 5, { options: 1 }), core["_35" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [select_select["a" /* Select */]]), core["_15" /* ɵdid */](17, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_15" /* ɵdid */](19, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackRespondentsPage_4)), core["_15" /* ɵdid */](22, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.groupInfo.separateGroups; _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.groupInfo.visibleGroups; _ck(_v, 11, 0, currVal_1); var currVal_10 = "popover"; _ck(_v, 14, 0, currVal_10); var currVal_11 = _co.selectedGroup; _ck(_v, 17, 0, currVal_11); var currVal_12 = _co.groupInfo.groups; _ck(_v, 22, 0, currVal_12); }, function (_ck, _v) { var currVal_2 = core["_29" /* ɵnov */](_v, 14)._disabled; var currVal_3 = core["_29" /* ɵnov */](_v, 19).ngClassUntouched; var currVal_4 = core["_29" /* ɵnov */](_v, 19).ngClassTouched; var currVal_5 = core["_29" /* ɵnov */](_v, 19).ngClassPristine; var currVal_6 = core["_29" /* ɵnov */](_v, 19).ngClassDirty; var currVal_7 = core["_29" /* ɵnov */](_v, 19).ngClassValid; var currVal_8 = core["_29" /* ɵnov */](_v, 19).ngClassInvalid; var currVal_9 = core["_29" /* ɵnov */](_v, 19).ngClassPending; _ck(_v, 13, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); });
}
function View_AddonModFeedbackRespondentsPage_7(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](1, null, ["", ""])), core["_34" /* ɵppd */](2, 2)], null, function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_29" /* ɵnov */](_v.parent.parent.parent, 0), (_v.parent.context.$implicit.timemodified * 1000), "LLL")); _ck(_v, 1, 0, currVal_0); }); }
function View_AddonModFeedbackRespondentsPage_6(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 22, "a", [["class", "item item-block"], ["ion-item", ""], ["text-wrap", ""]], [[2, "core-split-item-selected", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.gotoAttempt(_v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 9, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 10, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 11, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 0, 7, "ion-avatar", [["item-start", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](8, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_16" /* ɵeld */](10, 0, null, null, 3, "img", [["core-external-content", ""], ["onError", "this.src='assets/img/user-avatar.png'"]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), core["_15" /* ɵdid */](11, 4210688, null, 0, external_content["a" /* CoreExternalContentDirective */], [core["p" /* ElementRef */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], platform["a" /* Platform */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], providers_app["a" /* CoreAppProvider */], utils["a" /* CoreUtilsProvider */]], null, null), core["_33" /* ɵpod */](12, { $a: 0 }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](16, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_16" /* ɵeld */](17, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](18, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], providers_app["a" /* CoreAppProvider */], providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 2, 1, null, View_AddonModFeedbackRespondentsPage_7)), core["_15" /* ɵdid */](21, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "]))], function (_ck, _v) { var currVal_3 = _v.context.$implicit.fullname; _ck(_v, 18, 0, currVal_3); var currVal_4 = _v.context.$implicit.timemodified; _ck(_v, 21, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.$implicit.id == _co.attemptId); _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit.profileimageurl; var currVal_2 = core["_41" /* ɵunv */](_v, 10, 1, core["_29" /* ɵnov */](_v, 13).transform("core.pictureof", _ck(_v, 12, 0, _v.context.$implicit.fullname))); _ck(_v, 10, 0, currVal_1, currVal_2); });
}
function View_AddonModFeedbackRespondentsPage_9(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 3, "button", [["block", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.loadAttempts() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](1, 1097728, [[13, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_40" /* ɵted */](2, 0, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = ""; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = core["_41" /* ɵunv */](_v, 2, 0, core["_29" /* ɵnov */](_v, 3).transform("core.loadmore")); _ck(_v, 2, 0, currVal_1); });
}
function View_AddonModFeedbackRespondentsPage_10(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "ion-spinner", [], [[2, "spinner-paused", null]], null, null, spinner_ngfactory["b" /* View_Spinner_0 */], spinner_ngfactory["a" /* RenderType_Spinner */])), core["_15" /* ɵdid */](1, 114688, null, 0, spinner["a" /* Spinner */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 1)._paused; _ck(_v, 0, 0, currVal_0); }); }
function View_AddonModFeedbackRespondentsPage_8(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 13, "ion-item", [["class", "item item-block"], ["padding", ""], ["text-center", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 12, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 13, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 14, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 2, 1, null, View_AddonModFeedbackRespondentsPage_9)), core["_15" /* ɵdid */](9, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 2, 1, null, View_AddonModFeedbackRespondentsPage_10)), core["_15" /* ɵdid */](12, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.loadingMore; _ck(_v, 9, 0, currVal_0); var currVal_1 = _co.loadingMore; _ck(_v, 12, 0, currVal_1); }, null); }
function View_AddonModFeedbackRespondentsPage_5(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 17, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 8, "ion-item-divider", [["class", "item item-divider"], ["color", "light"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 6, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 7, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 8, { _icons: 1 }), core["_15" /* ɵdid */](7, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_40" /* ɵted */](8, 2, ["\n                        ", "\n                    "])), core["_33" /* ɵpod */](9, { $a: 0 }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackRespondentsPage_6)), core["_15" /* ɵdid */](13, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackRespondentsPage_8)), core["_15" /* ɵdid */](16, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "light"; _ck(_v, 3, 0, currVal_0); var currVal_1 = "light"; _ck(_v, 7, 0, currVal_1); var currVal_3 = _co.responses.attempts; _ck(_v, 13, 0, currVal_3); var currVal_4 = _co.responses.canLoadMore; _ck(_v, 16, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = core["_41" /* ɵunv */](_v, 8, 0, core["_29" /* ɵnov */](_v, 10).transform("addon.mod_feedback.non_anonymous_entries", _ck(_v, 9, 0, _co.responses.total))); _ck(_v, 8, 0, currVal_2); }); }
function View_AddonModFeedbackRespondentsPage_12(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 10, "a", [["class", "item item-block"], ["ion-item", ""], ["text-wrap", ""]], [[2, "core-split-item-selected", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.gotoAttempt(_v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 18, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 19, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 20, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](8, null, ["", ": ", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.$implicit.id == _co.attemptId); _ck(_v, 0, 0, currVal_0); var currVal_1 = core["_41" /* ɵunv */](_v, 8, 0, core["_29" /* ɵnov */](_v, 9).transform("addon.mod_feedback.response_nr")); var currVal_2 = _v.context.$implicit.number; _ck(_v, 8, 0, currVal_1, currVal_2); });
}
function View_AddonModFeedbackRespondentsPage_14(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 3, "button", [["block", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.loadAttempts() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](1, 1097728, [[22, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_40" /* ɵted */](2, 0, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = ""; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = core["_41" /* ɵunv */](_v, 2, 0, core["_29" /* ɵnov */](_v, 3).transform("core.loadmore")); _ck(_v, 2, 0, currVal_1); });
}
function View_AddonModFeedbackRespondentsPage_15(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "ion-spinner", [], [[2, "spinner-paused", null]], null, null, spinner_ngfactory["b" /* View_Spinner_0 */], spinner_ngfactory["a" /* RenderType_Spinner */])), core["_15" /* ɵdid */](1, 114688, null, 0, spinner["a" /* Spinner */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 1)._paused; _ck(_v, 0, 0, currVal_0); }); }
function View_AddonModFeedbackRespondentsPage_13(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 13, "ion-item", [["class", "item item-block"], ["padding", ""], ["text-center", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 21, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 22, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 23, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 2, 1, null, View_AddonModFeedbackRespondentsPage_14)), core["_15" /* ɵdid */](9, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 2, 1, null, View_AddonModFeedbackRespondentsPage_15)), core["_15" /* ɵdid */](12, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.loadingMore; _ck(_v, 9, 0, currVal_0); var currVal_1 = _co.loadingMore; _ck(_v, 12, 0, currVal_1); }, null); }
function View_AddonModFeedbackRespondentsPage_11(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 17, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 8, "ion-item-divider", [["class", "item item-divider"], ["color", "light"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 15, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 16, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 17, { _icons: 1 }), core["_15" /* ɵdid */](7, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_40" /* ɵted */](8, 2, ["\n                        ", "\n                    "])), core["_33" /* ɵpod */](9, { $a: 0 }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackRespondentsPage_12)), core["_15" /* ɵdid */](13, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackRespondentsPage_13)), core["_15" /* ɵdid */](16, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "light"; _ck(_v, 3, 0, currVal_0); var currVal_1 = "light"; _ck(_v, 7, 0, currVal_1); var currVal_3 = _co.anonResponses.attempts; _ck(_v, 13, 0, currVal_3); var currVal_4 = _co.anonResponses.canLoadMore; _ck(_v, 16, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = core["_41" /* ɵunv */](_v, 8, 0, core["_29" /* ɵnov */](_v, 10).transform("addon.mod_feedback.anonymous_entries", _ck(_v, 9, 0, _co.anonResponses.total))); _ck(_v, 8, 0, currVal_2); }); }
function View_AddonModFeedbackRespondentsPage_0(_l) {
    return core["_42" /* ɵvid */](0, [core["_32" /* ɵpid */](0, format_date["a" /* CoreFormatDatePipe */], [logger["a" /* CoreLoggerProvider */], translate_service["a" /* TranslateService */]]), core["_37" /* ɵqud */](402653184, 1, { splitviewCtrl: 0 }), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 12, "ion-header", [], null, null, null, null, null)), core["_15" /* ɵdid */](3, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_16" /* ɵeld */](5, 0, null, null, 8, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_15" /* ɵdid */](6, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), core["_15" /* ɵdid */](7, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_16" /* ɵeld */](9, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_15" /* ɵdid */](10, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_40" /* ɵted */](11, 0, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_16" /* ɵeld */](16, 0, null, null, 31, "core-split-view", [], null, null, null, split_view_ngfactory["b" /* View_CoreSplitViewComponent_0 */], split_view_ngfactory["a" /* RenderType_CoreSplitViewComponent */])), core["_15" /* ɵdid */](17, 245760, [[1, 4]], 0, split_view["a" /* CoreSplitViewComponent */], [[2, nav_controller["a" /* NavController */]], core["p" /* ElementRef */], fileuploader["a" /* CoreFileUploaderProvider */], platform["a" /* Platform */], translate_service["a" /* TranslateService */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_16" /* ɵeld */](19, 0, null, 0, 27, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_15" /* ɵdid */](20, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["K" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["D" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n        "])), (_l()(), core["_16" /* ɵeld */](22, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ionRefresh" === en)) {
                var pd_0 = (_co.refreshFeedback($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_15" /* ɵdid */](23, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["D" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](25, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_15" /* ɵdid */](26, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n        "])), (_l()(), core["_16" /* ɵeld */](30, 0, null, 1, 15, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_15" /* ɵdid */](31, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["p" /* ElementRef */], events["a" /* CoreEventsProvider */], utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_16" /* ɵeld */](33, 0, null, 0, 11, "ion-list", [["no-margin", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](34, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackRespondentsPage_1)), core["_15" /* ɵdid */](37, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackRespondentsPage_5)), core["_15" /* ɵdid */](40, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackRespondentsPage_11)), core["_15" /* ɵdid */](43, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 7, 0); _ck(_v, 17, 0); var currVal_7 = _co.feedbackLoaded; _ck(_v, 23, 0, currVal_7); var currVal_9 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 26, 0, core["_29" /* ɵnov */](_v, 27).transform("core.pulltorefresh")), ""); _ck(_v, 26, 0, currVal_9); var currVal_10 = _co.feedbackLoaded; _ck(_v, 31, 0, currVal_10); var currVal_11 = (_co.groupInfo.separateGroups || _co.groupInfo.visibleGroups); _ck(_v, 37, 0, currVal_11); var currVal_12 = (_co.responses.total > 0); _ck(_v, 40, 0, currVal_12); var currVal_13 = (_co.anonResponses.total > 0); _ck(_v, 43, 0, currVal_13); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 6)._hidden; var currVal_1 = core["_29" /* ɵnov */](_v, 6)._sbPadding; _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_2 = core["_41" /* ɵunv */](_v, 11, 0, core["_29" /* ɵnov */](_v, 12).transform("addon.mod_feedback.responses")); _ck(_v, 11, 0, currVal_2); var currVal_3 = core["_29" /* ɵnov */](_v, 20).statusbarPadding; var currVal_4 = core["_29" /* ɵnov */](_v, 20)._hasRefresher; _ck(_v, 19, 0, currVal_3, currVal_4); var currVal_5 = (core["_29" /* ɵnov */](_v, 23).state !== "inactive"); var currVal_6 = core["_29" /* ɵnov */](_v, 23)._top; _ck(_v, 22, 0, currVal_5, currVal_6); var currVal_8 = core["_29" /* ɵnov */](_v, 26).r.state; _ck(_v, 25, 0, currVal_8); });
}
function View_AddonModFeedbackRespondentsPage_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "page-addon-mod-feedback-respondents", [], null, null, null, View_AddonModFeedbackRespondentsPage_0, RenderType_AddonModFeedbackRespondentsPage)), core["_15" /* ɵdid */](1, 49152, null, 0, AddonModFeedbackRespondentsPage, [nav_params["a" /* NavParams */], feedback["a" /* AddonModFeedbackProvider */], groups["a" /* CoreGroupsProvider */], dom["a" /* CoreDomUtilsProvider */], helper["a" /* AddonModFeedbackHelperProvider */], nav_controller["a" /* NavController */]], null, null)], null, null); }
var AddonModFeedbackRespondentsPageNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("page-addon-mod-feedback-respondents", AddonModFeedbackRespondentsPage, View_AddonModFeedbackRespondentsPage_Host_0, {}, {}, []);





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

// EXTERNAL MODULE: ./src/core/course/components/components.module.ts
var course_components_components_module = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(237);

// CONCATENATED MODULE: ./src/addon/mod/feedback/pages/respondents/respondents.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackRespondentsPageModuleNgFactory", function() { return AddonModFeedbackRespondentsPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_respondents.module,_.._.._.._.._.._node_modules_ionic_angular_components_action_sheet_action_sheet_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_alert_alert_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_app_app_root.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_loading_loading_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_modal_modal_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_picker_picker_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_popover_popover_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_select_select_popover_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_toast_toast_component.ngfactory,_.._.._.._.._components_context_menu_context_menu_popover.ngfactory,_.._.._.._.._components_course_picker_menu_course_picker_menu_popover.ngfactory,_.._.._.._.._components_recaptcha_recaptchamodal.ngfactory,_.._.._.._.._core_course_components_unsupported_module_unsupported_module.ngfactory,_.._components_index_index.ngfactory,_respondents.ngfactory,_angular_common,_angular_forms,_ngx_translate_core_src_translate.loader,_ngx_translate_core_src_translate.compiler,_ngx_translate_core_src_translate.parser,_ngx_translate_core_src_missing_translation_handler,_ngx_translate_core_src_translate.service,_ngx_translate_core_src_translate.store,_.._.._.._.._directives_directives.module,ionic_angular_module,_ngx_translate_core_index,_.._.._.._.._pipes_pipes.module,_.._.._.._.._components_components.module,_.._.._.._.._core_course_components_components.module,_.._components_components.module,ionic_angular_util_module_loader,_respondents PURE_IMPORTS_END */


































var AddonModFeedbackRespondentsPageModuleNgFactory = /*@__PURE__*/ core["_13" /* ɵcmf */](AddonModFeedbackRespondentsPageModule, [], function (_l) { return core["_25" /* ɵmod */]([core["_26" /* ɵmpd */](512, core["n" /* ComponentFactoryResolver */], core["_6" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], unsupported_module_ngfactory["a" /* CoreCourseUnsupportedModuleComponentNgFactory */], index_ngfactory["a" /* AddonModFeedbackIndexComponentNgFactory */], AddonModFeedbackRespondentsPageNgFactory]], [3, core["n" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["_26" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["v" /* ɵa */]]]), core["_26" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_26" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_26" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_26" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_26" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_26" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_26" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_26" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_26" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_26" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_26" /* ɵmpd */](512, _ngx_translate_core["a" /* TranslateModule */], _ngx_translate_core["a" /* TranslateModule */], []), core["_26" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_26" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_26" /* ɵmpd */](512, course_components_components_module["a" /* CoreCourseComponentsModule */], course_components_components_module["a" /* CoreCourseComponentsModule */], []), core["_26" /* ɵmpd */](512, components_components_module["a" /* AddonModFeedbackComponentsModule */], components_components_module["a" /* AddonModFeedbackComponentsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_26" /* ɵmpd */](512, AddonModFeedbackRespondentsPageModule, AddonModFeedbackRespondentsPageModule, []), core["_26" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_26" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_26" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], AddonModFeedbackRespondentsPage, [])]); });






/***/ })

});
//# sourceMappingURL=92.js.map