webpackJsonp([21],{

/***/ 1810:
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

// EXTERNAL MODULE: ./src/addon/mod/feedback/components/components.module.ts
var components_components_module = __webpack_require__(638);

// EXTERNAL MODULE: ./node_modules/@ionic-native/network/index.js
var _ionic_native_network = __webpack_require__(199);

// EXTERNAL MODULE: ./src/addon/mod/feedback/providers/feedback.ts
var feedback = __webpack_require__(132);

// EXTERNAL MODULE: ./src/addon/mod/feedback/providers/helper.ts
var helper = __webpack_require__(266);

// EXTERNAL MODULE: ./src/addon/mod/feedback/providers/sync.ts
var sync = __webpack_require__(274);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils_utils = __webpack_require__(3);

// EXTERNAL MODULE: ./src/providers/app.ts
var app = __webpack_require__(11);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(13);

// EXTERNAL MODULE: ./src/core/course/providers/course.ts
var course = __webpack_require__(16);

// EXTERNAL MODULE: ./src/core/login/providers/helper.ts
var providers_helper = __webpack_require__(125);

// EXTERNAL MODULE: ./src/core/contentlinks/providers/helper.ts
var contentlinks_providers_helper = __webpack_require__(23);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(2);

// CONCATENATED MODULE: ./src/addon/mod/feedback/pages/form/form.ts


















/**
 * Page that displays feedback form.
 */
var form_AddonModFeedbackFormPage = /*@__PURE__*/ (function () {
    function AddonModFeedbackFormPage(navParams, feedbackProvider, appProvider, utils, domUtils, navCtrl, feedbackHelper, courseProvider, eventsProvider, feedbackSync, network, translate, loginHelper, linkHelper, sitesProvider, content, zone) {
        var _this = this;
        this.feedbackProvider = feedbackProvider;
        this.appProvider = appProvider;
        this.utils = utils;
        this.domUtils = domUtils;
        this.navCtrl = navCtrl;
        this.feedbackHelper = feedbackHelper;
        this.courseProvider = courseProvider;
        this.eventsProvider = eventsProvider;
        this.feedbackSync = feedbackSync;
        this.translate = translate;
        this.loginHelper = loginHelper;
        this.linkHelper = linkHelper;
        this.content = content;
        this.forceLeave = false;
        this.preview = false;
        this.component = feedback["a" /* AddonModFeedbackProvider */].COMPONENT;
        this.offline = false;
        this.feedbackLoaded = false;
        this.items = [];
        this.hasPrevPage = false;
        this.hasNextPage = false;
        this.completed = false;
        this.completedOffline = false;
        this.module = navParams.get('module');
        this.courseId = navParams.get('courseId');
        this.currentPage = navParams.get('page');
        this.title = navParams.get('title');
        this.preview = !!navParams.get('preview');
        this.componentId = navParams.get('moduleId') || this.module.id;
        this.currentSite = sitesProvider.getCurrentSite();
        // Refresh online status when changes.
        this.onlineObserver = network.onchange().subscribe(function (online) {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            zone.run(function () {
                _this.offline = !online;
            });
        });
    }
    /**
     * View loaded.
     */
    AddonModFeedbackFormPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fetchData().then(function () {
            _this.feedbackProvider.logView(_this.feedback.id, true).then(function () {
                _this.courseProvider.checkModuleCompletion(_this.courseId, _this.module.completionstatus);
            });
        });
    };
    /**
     * View entered.
     */
    AddonModFeedbackFormPage.prototype.ionViewDidEnter = function () {
        this.forceLeave = false;
    };
    /**
     * Check if we can leave the page or not.
     *
     * @return {boolean | Promise<void>} Resolved if we can leave it, rejected if not.
     */
    AddonModFeedbackFormPage.prototype.ionViewCanLeave = function () {
        if (this.forceLeave) {
            return true;
        }
        if (!this.preview) {
            var responses = this.feedbackHelper.getPageItemsResponses(this.items);
            if (this.items && !this.completed && this.originalData) {
                // Form submitted. Check if there is any change.
                if (!this.utils.basicLeftCompare(responses, this.originalData, 3)) {
                    return this.domUtils.showConfirm(this.translate.instant('core.confirmcanceledit'));
                }
            }
        }
        return Promise.resolve();
    };
    /**
     * Fetch all the data required for the view.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModFeedbackFormPage.prototype.fetchData = function () {
        var _this = this;
        this.offline = !this.appProvider.isOnline();
        return this.feedbackProvider.getFeedback(this.courseId, this.module.id).then(function (feedbackData) {
            _this.feedback = feedbackData;
            _this.title = _this.feedback.name || _this.title;
            return _this.fetchAccessData();
        }).then(function (accessData) {
            if (!_this.preview && accessData.cansubmit && !accessData.isempty) {
                return typeof _this.currentPage == 'undefined' ?
                    _this.feedbackProvider.getResumePage(_this.feedback.id, _this.offline, true) :
                    Promise.resolve(_this.currentPage);
            }
            else {
                _this.preview = true;
                return Promise.resolve(0);
            }
        }).catch(function (error) {
            if (!_this.offline && !_this.utils.isWebServiceError(error)) {
                // If it fails, go offline.
                _this.offline = true;
                return _this.feedbackProvider.getResumePage(_this.feedback.id, true);
            }
            return Promise.reject(error);
        }).then(function (page) {
            return _this.fetchFeedbackPageData(page || 0);
        }).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'core.course.errorgetmodule', true);
            _this.forceLeave = true;
            _this.navCtrl.pop();
            return Promise.reject(null);
        }).finally(function () {
            _this.feedbackLoaded = true;
        });
    };
    /**
     * Fetch access information.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonModFeedbackFormPage.prototype.fetchAccessData = function () {
        var _this = this;
        return this.feedbackProvider.getFeedbackAccessInformation(this.feedback.id, this.offline, true).catch(function (error) {
            if (!_this.offline && !_this.utils.isWebServiceError(error)) {
                // If it fails, go offline.
                _this.offline = true;
                return _this.feedbackProvider.getFeedbackAccessInformation(_this.feedback.id, true);
            }
            return Promise.reject(error);
        }).then(function (accessData) {
            _this.access = accessData;
            return accessData;
        });
    };
    AddonModFeedbackFormPage.prototype.fetchFeedbackPageData = function (page) {
        var _this = this;
        if (page === void 0) {
            page = 0;
        }
        var promise;
        this.items = [];
        if (this.preview) {
            promise = this.feedbackProvider.getItems(this.feedback.id);
        }
        else {
            this.currentPage = page;
            promise = this.feedbackProvider.getPageItemsWithValues(this.feedback.id, page, this.offline, true).catch(function (error) {
                if (!_this.offline && !_this.utils.isWebServiceError(error)) {
                    // If it fails, go offline.
                    _this.offline = true;
                    return _this.feedbackProvider.getPageItemsWithValues(_this.feedback.id, page, true);
                }
                return Promise.reject(error);
            }).then(function (response) {
                _this.hasPrevPage = !!response.hasprevpage;
                _this.hasNextPage = !!response.hasnextpage;
                return response;
            });
        }
        return promise.then(function (response) {
            _this.items = response.items.map(function (itemData) {
                return _this.feedbackHelper.getItemForm(itemData, _this.preview);
            }).filter(function (itemData) {
                // Filter items with errors.
                return itemData;
            });
            if (!_this.preview) {
                var itemsCopy = _this.utils.clone(_this.items); // Copy the array to avoid modifications.
                _this.originalData = _this.feedbackHelper.getPageItemsResponses(itemsCopy);
            }
        });
    };
    /**
     * Function to allow page navigation through the questions form.
     *
     * @param  {boolean}       goPrevious If true it will go back to the previous page, if false, it will go forward.
     * @return {Promise<void>}            Resolved when done.
     */
    AddonModFeedbackFormPage.prototype.gotoPage = function (goPrevious) {
        var _this = this;
        this.domUtils.scrollToTop(this.content);
        this.feedbackLoaded = false;
        var responses = this.feedbackHelper.getPageItemsResponses(this.items), formHasErrors = this.items.some(function (item) {
            return item.isEmpty || item.hasError;
        });
        // Sync other pages first.
        return this.feedbackSync.syncFeedback(this.feedback.id).catch(function () {
            // Ignore errors.
        }).then(function () {
            return _this.feedbackProvider.processPage(_this.feedback.id, _this.currentPage, responses, goPrevious, formHasErrors, _this.courseId).then(function (response) {
                var jumpTo = parseInt(response.jumpto, 10);
                if (response.completed) {
                    // Form is completed, show completion message and buttons.
                    _this.items = [];
                    _this.completed = true;
                    _this.completedOffline = !!response.offline;
                    _this.completionPageContents = response.completionpagecontents;
                    _this.siteAfterSubmit = response.siteaftersubmit;
                    _this.submitted = true;
                    // Invalidate access information so user will see home page updated (continue form or completion messages).
                    var promises = [];
                    promises.push(_this.feedbackProvider.invalidateFeedbackAccessInformationData(_this.feedback.id));
                    promises.push(_this.feedbackProvider.invalidateResumePageData(_this.feedback.id));
                    return Promise.all(promises).then(function () {
                        return _this.fetchAccessData();
                    });
                }
                else if (isNaN(jumpTo) || jumpTo == _this.currentPage) {
                    // Errors on questions, stay in page.
                    return Promise.resolve();
                }
                else {
                    _this.submitted = true;
                    // Invalidate access information so user will see home page updated (continue form).
                    _this.feedbackProvider.invalidateResumePageData(_this.feedback.id);
                    // Fetch the new page.
                    return _this.fetchFeedbackPageData(jumpTo);
                }
            });
        }).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'core.course.errorgetmodule', true);
            return Promise.reject(null);
        }).finally(function () {
            _this.feedbackLoaded = true;
        });
    };
    /**
     * Function to link implemented features.
     */
    AddonModFeedbackFormPage.prototype.showAnalysis = function () {
        this.submitted = 'analysis';
        this.feedbackHelper.openFeature('analysis', this.navCtrl, this.module, this.courseId);
    };
    /**
     * Function to go to the page after submit.
     */
    AddonModFeedbackFormPage.prototype.continue = function () {
        var _this = this;
        if (this.siteAfterSubmit) {
            var modal_1 = this.domUtils.showModalLoading();
            this.linkHelper.handleLink(this.siteAfterSubmit).then(function (treated) {
                if (!treated) {
                    return _this.currentSite.openInBrowserWithAutoLoginIfSameSite(_this.siteAfterSubmit);
                }
            }).finally(function () {
                modal_1.dismiss();
            });
        }
        else {
            // Use redirect to make the course the new history root (to avoid "loops" in history).
            this.loginHelper.redirect('CoreCourseSectionPage', {
                course: { id: this.courseId }
            }, this.currentSite.getId());
        }
    };
    /**
     * Component being destroyed.
     */
    AddonModFeedbackFormPage.prototype.ngOnDestroy = function () {
        if (this.submitted) {
            var tab = this.submitted == 'analysis' ? 'analysis' : 'overview';
            // If form has been submitted, the info has been already invalidated but we should update index view.
            this.eventsProvider.trigger(feedback["a" /* AddonModFeedbackProvider */].FORM_SUBMITTED, { feedbackId: this.feedback.id, tab: tab });
        }
        this.onlineObserver && this.onlineObserver.unsubscribe();
    };
    AddonModFeedbackFormPage = Object(tslib_es6["__decorate"])([
        Object(tslib_es6["__param"])(15, Object(core["E" /* Optional */])())
    ], AddonModFeedbackFormPage);
    return AddonModFeedbackFormPage;
}());





// CONCATENATED MODULE: ./src/addon/mod/feedback/pages/form/form.module.ts








var AddonModFeedbackFormPageModule = /*@__PURE__*/ (function () {
    function AddonModFeedbackFormPageModule() {
    }
    return AddonModFeedbackFormPageModule;
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

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(163);

// EXTERNAL MODULE: ./src/components/mark-required/mark-required.ngfactory.js
var mark_required_ngfactory = __webpack_require__(83);

// EXTERNAL MODULE: ./src/components/mark-required/mark-required.ts
var mark_required = __webpack_require__(74);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(9);

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(15);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var url = __webpack_require__(25);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(6);

// EXTERNAL MODULE: ./src/providers/filepool.ts
var filepool = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content_content = __webpack_require__(24);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(35);

// EXTERNAL MODULE: ./src/providers/utils/iframe.ts
var iframe = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.ngfactory.js
var input_ngfactory = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.js
var input = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app_app = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/radio/radio-button.ngfactory.js
var radio_button_ngfactory = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/radio/radio-button.js
var radio_button = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/radio/radio-group.js
var radio_group = __webpack_require__(118);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/checkbox/checkbox.ngfactory.js
var checkbox_ngfactory = __webpack_require__(216);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/checkbox/checkbox.js
var checkbox_checkbox = __webpack_require__(170);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/option/option.js
var option_option = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.ngfactory.js
var select_ngfactory = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.js
var select_select = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(50);

// EXTERNAL MODULE: ./src/components/recaptcha/recaptcha.ngfactory.js
var recaptcha_ngfactory = __webpack_require__(1909);

// EXTERNAL MODULE: ./src/components/recaptcha/recaptcha.ts
var recaptcha = __webpack_require__(1309);

// EXTERNAL MODULE: ./src/providers/lang.ts
var lang = __webpack_require__(136);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-controller.js
var modal_controller = __webpack_require__(197);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/col.js
var col = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/grid.js
var grid = __webpack_require__(150);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/row.js
var row = __webpack_require__(116);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(178);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(100);

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(57);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(60);

// CONCATENATED MODULE: ./src/addon/mod/feedback/pages/form/form.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_ngx_translate_core_src_translate.pipe,_ngx_translate_core_src_translate.service,_.._.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_divider,_.._.._.._.._components_mark_required_mark_required.ngfactory,_.._.._.._.._components_mark_required_mark_required,_.._.._.._.._providers_utils_text,_.._.._.._.._providers_utils_utils,ionic_angular_components_label_label,_angular_common,_.._.._.._.._directives_format_text,_.._.._.._.._providers_sites,_.._.._.._.._providers_utils_dom,ionic_angular_platform_platform,_.._.._.._.._providers_utils_url,_.._.._.._.._providers_logger,_.._.._.._.._providers_filepool,_.._.._.._.._providers_app,_.._.._.._.._core_contentlinks_providers_helper,ionic_angular_navigation_nav_controller,ionic_angular_components_content_content,_.._.._.._.._components_split_view_split_view,_.._.._.._.._providers_utils_iframe,_.._.._.._.._providers_events,_.._.._.._.._.._node_modules_ionic_angular_components_input_input.ngfactory,_angular_forms,ionic_angular_components_input_input,ionic_angular_components_app_app,ionic_angular_platform_dom_controller,ionic_angular_components_item_item_content,_.._.._.._.._.._node_modules_ionic_angular_components_radio_radio_button.ngfactory,ionic_angular_components_radio_radio_button,ionic_angular_components_radio_radio_group,ionic_angular_components_list_list,ionic_angular_gestures_gesture_controller,_.._.._.._.._.._node_modules_ionic_angular_components_checkbox_checkbox.ngfactory,ionic_angular_components_checkbox_checkbox,ionic_angular_components_option_option,_.._.._.._.._.._node_modules_ionic_angular_components_select_select.ngfactory,ionic_angular_components_select_select,ionic_angular_navigation_deep_linker,_.._.._.._.._components_recaptcha_recaptcha.ngfactory,_.._.._.._.._components_recaptcha_recaptcha,_.._.._.._.._providers_lang,ionic_angular_components_modal_modal_controller,ionic_angular_components_icon_icon,ionic_angular_components_grid_col,_.._.._.._.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_components_grid_grid,ionic_angular_components_grid_row,ionic_angular_components_toolbar_toolbar_header,ionic_angular_navigation_view_controller,_.._.._.._.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,_.._.._.._.._directives_back_button,_.._.._.._.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_toolbar,_.._.._.._.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_platform_keyboard,_.._.._.._.._components_loading_loading.ngfactory,_.._.._.._.._components_loading_loading,_form,ionic_angular_navigation_nav_params,_.._providers_feedback,_.._providers_helper,_.._.._.._.._core_course_providers_course,_.._providers_sync,_ionic_native_network_index,_.._.._.._.._core_login_providers_helper PURE_IMPORTS_END */












































































var styles_AddonModFeedbackFormPage = [];
var RenderType_AddonModFeedbackFormPage = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonModFeedbackFormPage, data: {} });

function View_AddonModFeedbackFormPage_2(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](1, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], null, function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, core["_29" /* ɵnov */](_v, 2).transform("addon.mod_feedback.anonymous")); _ck(_v, 1, 0, currVal_0); }); }
function View_AddonModFeedbackFormPage_3(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](1, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], null, function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, core["_29" /* ɵnov */](_v, 2).transform("addon.mod_feedback.non_anonymous")); _ck(_v, 1, 0, currVal_0); }); }
function View_AddonModFeedbackFormPage_5(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, "ion-item-divider", [["class", "item item-divider"], ["color", "light"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 6, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null)], function (_ck, _v) { var currVal_0 = "light"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "light"; _ck(_v, 5, 0, currVal_1); }, null); }
function View_AddonModFeedbackFormPage_8(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](1, null, ["", ". "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.parent.context.$implicit.itemnumber; _ck(_v, 1, 0, currVal_0); }); }
function View_AddonModFeedbackFormPage_7(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 9, "ion-label", [["stacked", ""]], null, null, null, mark_required_ngfactory["b" /* View_CoreMarkRequiredComponent_0 */], mark_required_ngfactory["a" /* RenderType_CoreMarkRequiredComponent */])), core["_15" /* ɵdid */](1, 4308992, null, 0, mark_required["a" /* CoreMarkRequiredComponent */], [core["p" /* ElementRef */], translate_service["a" /* TranslateService */], utils_text["a" /* CoreTextUtilsProvider */], utils_utils["a" /* CoreUtilsProvider */]], { coreMarkRequired: [0, "coreMarkRequired"] }, null), core["_15" /* ɵdid */](2, 16384, [[7, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                            "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_AddonModFeedbackFormPage_8)), core["_15" /* ɵdid */](5, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                            "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 0, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](8, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils_utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], contentlinks_providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content_content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"], component: [1, "component"], componentId: [2, "componentId"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.parent.parent.context.$implicit.required; _ck(_v, 1, 0, currVal_0); var currVal_1 = (_co.feedback.autonumbering && _v.parent.parent.context.$implicit.itemnumber); _ck(_v, 5, 0, currVal_1); var currVal_2 = _v.parent.parent.context.$implicit.name; var currVal_3 = _co.component; var currVal_4 = _co.componentId; _ck(_v, 8, 0, currVal_2, currVal_3, currVal_4); }, null); }
function View_AddonModFeedbackFormPage_10(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](4, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils_utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], contentlinks_providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content_content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"], component: [1, "component"], componentId: [2, "componentId"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.parent.parent.parent.context.$implicit.presentation; var currVal_1 = _co.component; var currVal_2 = _co.componentId; _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_AddonModFeedbackFormPage_11(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 10, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 7, "ion-input", [["autocorrect", "off"], ["type", "text"]], [[1, "required", 0], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_v.parent.parent.parent.context.$implicit.value = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_15" /* ɵdid */](3, 16384, null, 0, esm5_forms["t" /* RequiredValidator */], [], { required: [0, "required"] }, null), core["_15" /* ɵdid */](4, 540672, null, 0, esm5_forms["j" /* MaxLengthValidator */], [], { maxlength: [0, "maxlength"] }, null), core["_35" /* ɵprd */](1024, null, esm5_forms["k" /* NG_VALIDATORS */], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [esm5_forms["t" /* RequiredValidator */], esm5_forms["j" /* MaxLengthValidator */]]), core["_15" /* ɵdid */](6, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [2, esm5_forms["k" /* NG_VALIDATORS */]], [8, null], [8, null]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_15" /* ɵdid */](8, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_15" /* ɵdid */](9, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app_app["a" /* App */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, content_content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"], autocorrect: [1, "autocorrect"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "]))], function (_ck, _v) { var currVal_9 = _v.parent.parent.parent.context.$implicit.required; _ck(_v, 3, 0, currVal_9); var currVal_10 = core["_19" /* ɵinlineInterpolate */](1, "", _v.parent.parent.parent.context.$implicit.maxlength, ""); _ck(_v, 4, 0, currVal_10); var currVal_11 = core["_19" /* ɵinlineInterpolate */](2, "", _v.parent.parent.parent.context.$implicit.typ, "_", _v.parent.parent.parent.context.$implicit.id, ""); var currVal_12 = _v.parent.parent.parent.context.$implicit.value; _ck(_v, 6, 0, currVal_11, currVal_12); var currVal_13 = "text"; var currVal_14 = "off"; _ck(_v, 9, 0, currVal_13, currVal_14); }, function (_ck, _v) { var currVal_0 = (core["_29" /* ɵnov */](_v, 3).required ? "" : null); var currVal_1 = (core["_29" /* ɵnov */](_v, 4).maxlength ? core["_29" /* ɵnov */](_v, 4).maxlength : null); var currVal_2 = core["_29" /* ɵnov */](_v, 8).ngClassUntouched; var currVal_3 = core["_29" /* ɵnov */](_v, 8).ngClassTouched; var currVal_4 = core["_29" /* ɵnov */](_v, 8).ngClassPristine; var currVal_5 = core["_29" /* ɵnov */](_v, 8).ngClassDirty; var currVal_6 = core["_29" /* ɵnov */](_v, 8).ngClassValid; var currVal_7 = core["_29" /* ɵnov */](_v, 8).ngClassInvalid; var currVal_8 = core["_29" /* ɵnov */](_v, 8).ngClassPending; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); });
}
function View_AddonModFeedbackFormPage_14(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, [", "]))], null, null); }
function View_AddonModFeedbackFormPage_13(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, "p", [["color", "error"]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](1, null, ["", " [", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_14)), core["_15" /* ɵdid */](4, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](5, null, ["", "]"]))], function (_ck, _v) { var currVal_2 = (_v.parent.parent.parent.parent.context.$implicit.rangefrom && _v.parent.parent.parent.parent.context.$implicit.rangeto); _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, core["_29" /* ɵnov */](_v, 2).transform("addon.mod_feedback.numberoutofrange")); var currVal_1 = _v.parent.parent.parent.parent.context.$implicit.rangefrom; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_3 = _v.parent.parent.parent.parent.context.$implicit.rangeto; _ck(_v, 5, 0, currVal_3); }); }
function View_AddonModFeedbackFormPage_12(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 12, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 6, "ion-input", [["type", "number"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_v.parent.parent.parent.context.$implicit.value = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_15" /* ɵdid */](3, 16384, null, 0, esm5_forms["t" /* RequiredValidator */], [], { required: [0, "required"] }, null), core["_35" /* ɵprd */](1024, null, esm5_forms["k" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [esm5_forms["t" /* RequiredValidator */]]), core["_15" /* ɵdid */](5, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [2, esm5_forms["k" /* NG_VALIDATORS */]], [8, null], [8, null]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_15" /* ɵdid */](7, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_15" /* ɵdid */](8, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app_app["a" /* App */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, content_content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_13)), core["_15" /* ɵdid */](11, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "]))], function (_ck, _v) { var currVal_8 = _v.parent.parent.parent.context.$implicit.required; _ck(_v, 3, 0, currVal_8); var currVal_9 = core["_19" /* ɵinlineInterpolate */](2, "", _v.parent.parent.parent.context.$implicit.typ, "_", _v.parent.parent.parent.context.$implicit.id, ""); var currVal_10 = _v.parent.parent.parent.context.$implicit.value; _ck(_v, 5, 0, currVal_9, currVal_10); var currVal_11 = "number"; _ck(_v, 8, 0, currVal_11); var currVal_12 = _v.parent.parent.parent.context.$implicit.hasError; _ck(_v, 11, 0, currVal_12); }, function (_ck, _v) { var currVal_0 = (core["_29" /* ɵnov */](_v, 3).required ? "" : null); var currVal_1 = core["_29" /* ɵnov */](_v, 7).ngClassUntouched; var currVal_2 = core["_29" /* ɵnov */](_v, 7).ngClassTouched; var currVal_3 = core["_29" /* ɵnov */](_v, 7).ngClassPristine; var currVal_4 = core["_29" /* ɵnov */](_v, 7).ngClassDirty; var currVal_5 = core["_29" /* ɵnov */](_v, 7).ngClassValid; var currVal_6 = core["_29" /* ɵnov */](_v, 7).ngClassInvalid; var currVal_7 = core["_29" /* ɵnov */](_v, 7).ngClassPending; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); });
}
function View_AddonModFeedbackFormPage_15(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 9, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 6, "ion-textarea", [], [[1, "aria-multiline", 0], [1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_v.parent.parent.parent.context.$implicit.value = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_15" /* ɵdid */](3, 16384, null, 0, esm5_forms["t" /* RequiredValidator */], [], { required: [0, "required"] }, null), core["_35" /* ɵprd */](1024, null, esm5_forms["k" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [esm5_forms["t" /* RequiredValidator */]]), core["_15" /* ɵdid */](5, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [2, esm5_forms["k" /* NG_VALIDATORS */]], [8, null], [8, null]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_15" /* ɵdid */](7, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_15" /* ɵdid */](8, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app_app["a" /* App */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, content_content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "]))], function (_ck, _v) { var currVal_9 = _v.parent.parent.parent.context.$implicit.required; _ck(_v, 3, 0, currVal_9); var currVal_10 = core["_19" /* ɵinlineInterpolate */](2, "", _v.parent.parent.parent.context.$implicit.typ, "_", _v.parent.parent.parent.context.$implicit.id, ""); var currVal_11 = _v.parent.parent.parent.context.$implicit.value; _ck(_v, 5, 0, currVal_10, currVal_11); }, function (_ck, _v) { var currVal_0 = true; var currVal_1 = (core["_29" /* ɵnov */](_v, 3).required ? "" : null); var currVal_2 = core["_29" /* ɵnov */](_v, 7).ngClassUntouched; var currVal_3 = core["_29" /* ɵnov */](_v, 7).ngClassTouched; var currVal_4 = core["_29" /* ɵnov */](_v, 7).ngClassPristine; var currVal_5 = core["_29" /* ɵnov */](_v, 7).ngClassDirty; var currVal_6 = core["_29" /* ɵnov */](_v, 7).ngClassValid; var currVal_7 = core["_29" /* ɵnov */](_v, 7).ngClassInvalid; var currVal_8 = core["_29" /* ɵnov */](_v, 7).ngClassPending; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); });
}
function View_AddonModFeedbackFormPage_17(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 11, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 12, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 13, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                                            "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), core["_15" /* ɵdid */](8, 16384, [[11, 4], [7, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_16" /* ɵeld */](9, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](10, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils_utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], contentlinks_providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content_content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"], component: [1, "component"], componentId: [2, "componentId"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                                            "])), (_l()(), core["_16" /* ɵeld */](12, 0, null, 4, 1, "ion-radio", [], [[2, "radio-disabled", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 13)._click($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, radio_button_ngfactory["b" /* View_RadioButton_0 */], radio_button_ngfactory["a" /* RenderType_RadioButton */])), core["_15" /* ɵdid */](13, 245760, null, 0, radio_button["a" /* RadioButton */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item["a" /* Item */]], [2, radio_group["a" /* RadioGroup */]]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                                        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit.label; var currVal_1 = _co.component; var currVal_2 = _co.componentId; _ck(_v, 10, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = _v.context.$implicit.value; _ck(_v, 13, 0, currVal_4); }, function (_ck, _v) { var currVal_3 = core["_29" /* ɵnov */](_v, 13)._disabled; _ck(_v, 12, 0, currVal_3); });
}
function View_AddonModFeedbackFormPage_16(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 16, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 13, "ion-list", [["radio-group", ""], ["role", "radiogroup"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
            var ad = true;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_v.parent.parent.parent.context.$implicit.value = $event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_15" /* ɵdid */](3, 16384, null, 0, esm5_forms["t" /* RequiredValidator */], [], { required: [0, "required"] }, null), core["_35" /* ɵprd */](1024, null, esm5_forms["k" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [esm5_forms["t" /* RequiredValidator */]]), core["_15" /* ɵdid */](5, 1064960, null, 1, radio_group["a" /* RadioGroup */], [core["K" /* Renderer */], core["p" /* ElementRef */], core["i" /* ChangeDetectorRef */]], null, null), core["_37" /* ɵqud */](335544320, 10, { _header: 0 }), core["_35" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [radio_group["a" /* RadioGroup */]]), core["_15" /* ɵdid */](8, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [2, esm5_forms["k" /* NG_VALIDATORS */]], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_15" /* ɵdid */](10, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_15" /* ɵdid */](11, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_17)), core["_15" /* ɵdid */](14, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "]))], function (_ck, _v) { var currVal_8 = _v.parent.parent.parent.context.$implicit.required; _ck(_v, 3, 0, currVal_8); var currVal_9 = core["_19" /* ɵinlineInterpolate */](2, "", _v.parent.parent.parent.context.$implicit.typ, "_", _v.parent.parent.parent.context.$implicit.id, ""); var currVal_10 = _v.parent.parent.parent.context.$implicit.value; _ck(_v, 8, 0, currVal_9, currVal_10); var currVal_11 = _v.parent.parent.parent.context.$implicit.choices; _ck(_v, 14, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = (core["_29" /* ɵnov */](_v, 3).required ? "" : null); var currVal_1 = core["_29" /* ɵnov */](_v, 10).ngClassUntouched; var currVal_2 = core["_29" /* ɵnov */](_v, 10).ngClassTouched; var currVal_3 = core["_29" /* ɵnov */](_v, 10).ngClassPristine; var currVal_4 = core["_29" /* ɵnov */](_v, 10).ngClassDirty; var currVal_5 = core["_29" /* ɵnov */](_v, 10).ngClassValid; var currVal_6 = core["_29" /* ɵnov */](_v, 10).ngClassInvalid; var currVal_7 = core["_29" /* ɵnov */](_v, 10).ngClassPending; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); });
}
function View_AddonModFeedbackFormPage_19(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 20, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 14, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 15, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 16, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                                        "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), core["_15" /* ɵdid */](8, 16384, [[14, 4], [7, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_16" /* ɵeld */](9, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](10, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils_utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], contentlinks_providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content_content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"], component: [1, "component"], componentId: [2, "componentId"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                                        "])), (_l()(), core["_16" /* ɵeld */](12, 0, null, 0, 7, "ion-checkbox", [["value", "option.value"]], [[1, "required", 0], [2, "checkbox-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 15)._click($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_1 = ((_v.context.$implicit.checked = $event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, checkbox_ngfactory["b" /* View_Checkbox_0 */], checkbox_ngfactory["a" /* RenderType_Checkbox */])), core["_15" /* ɵdid */](13, 16384, null, 0, esm5_forms["t" /* RequiredValidator */], [], { required: [0, "required"] }, null), core["_35" /* ɵprd */](1024, null, esm5_forms["k" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [esm5_forms["t" /* RequiredValidator */]]), core["_15" /* ɵdid */](15, 1228800, null, 0, checkbox_checkbox["a" /* Checkbox */], [config["a" /* Config */], util_form["a" /* Form */], [2, item["a" /* Item */]], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), core["_35" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [checkbox_checkbox["a" /* Checkbox */]]), core["_15" /* ɵdid */](17, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [2, esm5_forms["k" /* NG_VALIDATORS */]], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_15" /* ɵdid */](19, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                                    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit.label; var currVal_1 = _co.component; var currVal_2 = _co.componentId; _ck(_v, 10, 0, currVal_0, currVal_1, currVal_2); var currVal_12 = _v.parent.parent.parent.parent.context.$implicit.required; _ck(_v, 13, 0, currVal_12); var currVal_13 = core["_19" /* ɵinlineInterpolate */](2, "", _v.parent.parent.parent.parent.context.$implicit.typ, "_", _v.parent.parent.parent.parent.context.$implicit.id, ""); var currVal_14 = _v.context.$implicit.checked; _ck(_v, 17, 0, currVal_13, currVal_14); }, function (_ck, _v) { var currVal_3 = (core["_29" /* ɵnov */](_v, 13).required ? "" : null); var currVal_4 = core["_29" /* ɵnov */](_v, 15)._disabled; var currVal_5 = core["_29" /* ɵnov */](_v, 19).ngClassUntouched; var currVal_6 = core["_29" /* ɵnov */](_v, 19).ngClassTouched; var currVal_7 = core["_29" /* ɵnov */](_v, 19).ngClassPristine; var currVal_8 = core["_29" /* ɵnov */](_v, 19).ngClassDirty; var currVal_9 = core["_29" /* ɵnov */](_v, 19).ngClassValid; var currVal_10 = core["_29" /* ɵnov */](_v, 19).ngClassInvalid; var currVal_11 = core["_29" /* ɵnov */](_v, 19).ngClassPending; _ck(_v, 12, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); });
}
function View_AddonModFeedbackFormPage_18(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, "ion-list", [], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_19)), core["_15" /* ɵdid */](4, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "]))], function (_ck, _v) { var currVal_0 = _v.parent.parent.parent.context.$implicit.choices; _ck(_v, 4, 0, currVal_0); }, null); }
function View_AddonModFeedbackFormPage_21(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 3, "ion-option", [], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, [[17, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](3, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils_utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], contentlinks_providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content_content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"], component: [1, "component"], componentId: [2, "componentId"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit.value; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.label; var currVal_2 = _co.component; var currVal_3 = _co.componentId; _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3); }, null); }
function View_AddonModFeedbackFormPage_20(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 15, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 12, "ion-select", [["interface", "popover"]], [[1, "required", 0], [2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"], [null, "keyup.space"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 5)._click($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keyup.space" === en)) {
                var pd_1 = (core["_29" /* ɵnov */](_v, 5)._keyup() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_v.parent.parent.parent.context.$implicit.value = $event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, select_ngfactory["b" /* View_Select_0 */], select_ngfactory["a" /* RenderType_Select */])), core["_15" /* ɵdid */](3, 16384, null, 0, esm5_forms["t" /* RequiredValidator */], [], { required: [0, "required"] }, null), core["_35" /* ɵprd */](1024, null, esm5_forms["k" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [esm5_forms["t" /* RequiredValidator */]]), core["_15" /* ɵdid */](5, 1228800, null, 1, select_select["a" /* Select */], [app_app["a" /* App */], util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item["a" /* Item */]], deep_linker["a" /* DeepLinker */]], { interface: [0, "interface"] }, null), core["_37" /* ɵqud */](603979776, 17, { options: 1 }), core["_35" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [select_select["a" /* Select */]]), core["_15" /* ɵdid */](8, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [2, esm5_forms["k" /* NG_VALIDATORS */]], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_15" /* ɵdid */](10, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_21)), core["_15" /* ɵdid */](13, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "]))], function (_ck, _v) { var currVal_9 = _v.parent.parent.parent.context.$implicit.required; _ck(_v, 3, 0, currVal_9); var currVal_10 = "popover"; _ck(_v, 5, 0, currVal_10); var currVal_11 = core["_19" /* ɵinlineInterpolate */](2, "", _v.parent.parent.parent.context.$implicit.typ, "_", _v.parent.parent.parent.context.$implicit.id, ""); var currVal_12 = _v.parent.parent.parent.context.$implicit.value; _ck(_v, 8, 0, currVal_11, currVal_12); var currVal_13 = _v.parent.parent.parent.context.$implicit.choices; _ck(_v, 13, 0, currVal_13); }, function (_ck, _v) { var currVal_0 = (core["_29" /* ɵnov */](_v, 3).required ? "" : null); var currVal_1 = core["_29" /* ɵnov */](_v, 5)._disabled; var currVal_2 = core["_29" /* ɵnov */](_v, 10).ngClassUntouched; var currVal_3 = core["_29" /* ɵnov */](_v, 10).ngClassTouched; var currVal_4 = core["_29" /* ɵnov */](_v, 10).ngClassPristine; var currVal_5 = core["_29" /* ɵnov */](_v, 10).ngClassDirty; var currVal_6 = core["_29" /* ɵnov */](_v, 10).ngClassValid; var currVal_7 = core["_29" /* ɵnov */](_v, 10).ngClassInvalid; var currVal_8 = core["_29" /* ɵnov */](_v, 10).ngClassPending; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); });
}
function View_AddonModFeedbackFormPage_23(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-recaptcha", [["modelValueName", "value"]], null, null, null, recaptcha_ngfactory["b" /* View_CoreRecaptchaComponent_0 */], recaptcha_ngfactory["a" /* RenderType_CoreRecaptchaComponent */])), core["_15" /* ɵdid */](1, 114688, null, 0, recaptcha["a" /* CoreRecaptchaComponent */], [sites["a" /* CoreSitesProvider */], lang["a" /* CoreLangProvider */], utils_text["a" /* CoreTextUtilsProvider */], modal_controller["a" /* ModalController */]], { model: [0, "model"], publicKey: [1, "publicKey"], modelValueName: [2, "modelValueName"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.parent.parent.parent.context.$implicit; var currVal_1 = _v.parent.parent.parent.parent.context.$implicit.captcha.recaptchapublickey; var currVal_2 = "value"; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_AddonModFeedbackFormPage_24(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, "div", [["class", "core-warning-card"], ["icon-start", ""]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                        "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 1, "ion-icon", [["name", "warning"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](3, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](4, null, ["\n                                        ", "\n                                    "])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_1 = "warning"; _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 3)._hidden; _ck(_v, 2, 0, currVal_0); var currVal_2 = core["_41" /* ɵunv */](_v, 4, 0, core["_29" /* ɵnov */](_v, 5).transform("addon.mod_feedback.captchaofflinewarning")); _ck(_v, 4, 0, currVal_2); }); }
function View_AddonModFeedbackFormPage_22(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_23)), core["_15" /* ɵdid */](3, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_24)), core["_15" /* ɵdid */](6, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.preview && !_co.offline); _ck(_v, 3, 0, currVal_0); var currVal_1 = (!_co.preview && (!_v.parent.parent.parent.context.$implicit.captcha || _co.offline)); _ck(_v, 6, 0, currVal_1); }, null); }
function View_AddonModFeedbackFormPage_9(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 29, "div", [["class", "addon-mod_feedback-form-content"], ["item-content", ""]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 26, null, null, null, null, null, null, null)), core["_15" /* ɵdid */](3, 16384, null, 0, common["o" /* NgSwitch */], [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_10)), core["_15" /* ɵdid */](6, 278528, null, 0, common["p" /* NgSwitchCase */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], common["o" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_11)), core["_15" /* ɵdid */](9, 278528, null, 0, common["p" /* NgSwitchCase */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], common["o" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_12)), core["_15" /* ɵdid */](12, 278528, null, 0, common["p" /* NgSwitchCase */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], common["o" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_15)), core["_15" /* ɵdid */](15, 278528, null, 0, common["p" /* NgSwitchCase */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], common["o" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_16)), core["_15" /* ɵdid */](18, 278528, null, 0, common["p" /* NgSwitchCase */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], common["o" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_18)), core["_15" /* ɵdid */](21, 278528, null, 0, common["p" /* NgSwitchCase */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], common["o" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_20)), core["_15" /* ɵdid */](24, 278528, null, 0, common["p" /* NgSwitchCase */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], common["o" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_22)), core["_15" /* ɵdid */](27, 278528, null, 0, common["p" /* NgSwitchCase */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], common["o" /* NgSwitch */]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "]))], function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.template; _ck(_v, 3, 0, currVal_0); var currVal_1 = "label"; _ck(_v, 6, 0, currVal_1); var currVal_2 = "textfield"; _ck(_v, 9, 0, currVal_2); var currVal_3 = "numeric"; _ck(_v, 12, 0, currVal_3); var currVal_4 = "textarea"; _ck(_v, 15, 0, currVal_4); var currVal_5 = "multichoice-r"; _ck(_v, 18, 0, currVal_5); var currVal_6 = "multichoice-c"; _ck(_v, 21, 0, currVal_6); var currVal_7 = "multichoice-d"; _ck(_v, 24, 0, currVal_7); var currVal_8 = "captcha"; _ck(_v, 27, 0, currVal_8); }, null); }
function View_AddonModFeedbackFormPage_6(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 12, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], [[2, "core-danger-item", null]], null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](603979776, 7, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 8, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 9, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 1, 1, null, View_AddonModFeedbackFormPage_7)), core["_15" /* ɵdid */](8, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 3, 1, null, View_AddonModFeedbackFormPage_9)), core["_15" /* ɵdid */](11, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "]))], function (_ck, _v) { var currVal_1 = ((_v.parent.context.$implicit.dependitem > 0) ? "light" : ""); _ck(_v, 1, 0, currVal_1); var currVal_2 = _v.parent.context.$implicit.name; _ck(_v, 8, 0, currVal_2); var currVal_3 = _v.parent.context.$implicit.template; _ck(_v, 11, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = (_v.parent.context.$implicit.isEmpty || _v.parent.context.$implicit.hasError); _ck(_v, 0, 0, currVal_0); }); }
function View_AddonModFeedbackFormPage_4(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_5)), core["_15" /* ɵdid */](3, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_6)), core["_15" /* ɵdid */](6, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "]))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit.typ == "pagebreak"); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_v.context.$implicit.typ != "pagebreak"); _ck(_v, 6, 0, currVal_1); }, null); }
function View_AddonModFeedbackFormPage_26(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 10, "ion-col", [["class", "col"]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 6, "button", [["block", ""], ["icon-start", ""], ["ion-button", ""], ["outline", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.gotoPage(true) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](4, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { outline: [0, "outline"], block: [1, "block"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                                "])), (_l()(), core["_16" /* ɵeld */](6, 0, null, 0, 1, "ion-icon", [["name", "arrow-back"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](7, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](8, 0, ["\n                                ", "\n                            "])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "]))], function (_ck, _v) { var currVal_0 = ""; var currVal_1 = ""; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_3 = "arrow-back"; _ck(_v, 7, 0, currVal_3); }, function (_ck, _v) { var currVal_2 = core["_29" /* ɵnov */](_v, 7)._hidden; _ck(_v, 6, 0, currVal_2); var currVal_4 = core["_41" /* ɵunv */](_v, 8, 0, core["_29" /* ɵnov */](_v, 9).transform("addon.mod_feedback.previous_page")); _ck(_v, 8, 0, currVal_4); });
}
function View_AddonModFeedbackFormPage_27(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 10, "ion-col", [["class", "col"]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 6, "button", [["block", ""], ["icon-end", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.gotoPage(false) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](4, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_40" /* ɵted */](5, 0, ["\n                                ", "\n                                "])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_16" /* ɵeld */](7, 0, null, 0, 1, "ion-icon", [["name", "arrow-forward"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](8, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "]))], function (_ck, _v) { var currVal_0 = ""; _ck(_v, 4, 0, currVal_0); var currVal_3 = "arrow-forward"; _ck(_v, 8, 0, currVal_3); }, function (_ck, _v) { var currVal_1 = core["_41" /* ɵunv */](_v, 5, 0, core["_29" /* ɵnov */](_v, 6).transform("addon.mod_feedback.next_page")); _ck(_v, 5, 0, currVal_1); var currVal_2 = core["_29" /* ɵnov */](_v, 8)._hidden; _ck(_v, 7, 0, currVal_2); });
}
function View_AddonModFeedbackFormPage_28(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 7, "ion-col", [["class", "col"]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 3, "button", [["block", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.gotoPage(false) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](4, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_40" /* ɵted */](5, 0, ["\n                                ", "\n                            "])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "]))], function (_ck, _v) { var currVal_0 = ""; _ck(_v, 4, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = core["_41" /* ɵunv */](_v, 5, 0, core["_29" /* ɵnov */](_v, 6).transform("addon.mod_feedback.save_entries")); _ck(_v, 5, 0, currVal_1); });
}
function View_AddonModFeedbackFormPage_25(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 15, "ion-grid", [["class", "grid"]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, grid["a" /* Grid */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 11, "ion-row", [["align-items-center", ""], ["class", "row"]], null, null, null, null, null)), core["_15" /* ɵdid */](4, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_26)), core["_15" /* ɵdid */](7, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_27)), core["_15" /* ɵdid */](10, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_28)), core["_15" /* ɵdid */](13, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hasPrevPage; _ck(_v, 7, 0, currVal_0); var currVal_1 = _co.hasNextPage; _ck(_v, 10, 0, currVal_1); var currVal_2 = !_co.hasNextPage; _ck(_v, 13, 0, currVal_2); }, null); }
function View_AddonModFeedbackFormPage_1(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 29, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 26, "ion-list", [["no-margin", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](3, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](5, 0, null, null, 16, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](6, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_15" /* ɵdid */](10, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](12, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](13, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, 2, 1, null, View_AddonModFeedbackFormPage_2)), core["_15" /* ɵdid */](17, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, 2, 1, null, View_AddonModFeedbackFormPage_3)), core["_15" /* ɵdid */](20, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_4)), core["_15" /* ɵdid */](24, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_25)), core["_15" /* ɵdid */](27, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.access.isanonymous; _ck(_v, 17, 0, currVal_1); var currVal_2 = !_co.access.isanonymous; _ck(_v, 20, 0, currVal_2); var currVal_3 = _co.items; _ck(_v, 24, 0, currVal_3); var currVal_4 = !_co.preview; _ck(_v, 27, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 13, 0, core["_29" /* ɵnov */](_v, 14).transform("addon.mod_feedback.mode")); _ck(_v, 13, 0, currVal_0); }); }
function View_AddonModFeedbackFormPage_30(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](1, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], null, function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, core["_29" /* ɵnov */](_v, 2).transform("addon.mod_feedback.this_feedback_is_already_submitted")); _ck(_v, 1, 0, currVal_0); }); }
function View_AddonModFeedbackFormPage_31(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](1, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], null, function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, core["_29" /* ɵnov */](_v, 2).transform("addon.mod_feedback.feedback_submitted_offline")); _ck(_v, 1, 0, currVal_0); }); }
function View_AddonModFeedbackFormPage_32(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), core["_16" /* ɵeld */](1, 0, null, null, 1, "core-format-text", [["componentId", "componentId"]], null, null, null, null, null)), core["_15" /* ɵdid */](2, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils_utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], contentlinks_providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content_content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"], component: [1, "component"], componentId: [2, "componentId"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.completionPageContents; var currVal_1 = _co.component; var currVal_2 = "componentId"; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_AddonModFeedbackFormPage_29(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 13, "div", [["class", "core-success-card"], ["icon-start", ""]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 1, "ion-icon", [["name", "checkmark"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](3, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_30)), core["_15" /* ɵdid */](6, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_31)), core["_15" /* ɵdid */](9, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_32)), core["_15" /* ɵdid */](12, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "checkmark"; _ck(_v, 3, 0, currVal_1); var currVal_2 = (!_co.completionPageContents && !_co.completedOffline); _ck(_v, 6, 0, currVal_2); var currVal_3 = (!_co.completionPageContents && _co.completedOffline); _ck(_v, 9, 0, currVal_3); var currVal_4 = _co.completionPageContents; _ck(_v, 12, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 3)._hidden; _ck(_v, 2, 0, currVal_0); }); }
function View_AddonModFeedbackFormPage_34(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 10, "ion-col", [["class", "col"]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 6, "button", [["block", ""], ["icon-start", ""], ["ion-button", ""], ["outline", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.showAnalysis() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](4, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { outline: [0, "outline"], block: [1, "block"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](6, 0, null, 0, 1, "ion-icon", [["name", "stats"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](7, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](8, 0, ["\n                        ", "\n                    "])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "]))], function (_ck, _v) { var currVal_0 = ""; var currVal_1 = ""; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_3 = "stats"; _ck(_v, 7, 0, currVal_3); }, function (_ck, _v) { var currVal_2 = core["_29" /* ɵnov */](_v, 7)._hidden; _ck(_v, 6, 0, currVal_2); var currVal_4 = core["_41" /* ɵunv */](_v, 8, 0, core["_29" /* ɵnov */](_v, 9).transform("addon.mod_feedback.completed_feedbacks")); _ck(_v, 8, 0, currVal_4); });
}
function View_AddonModFeedbackFormPage_35(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 10, "ion-col", [["class", "col"]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 6, "button", [["block", ""], ["icon-end", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.continue() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](4, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_40" /* ɵted */](5, 0, ["\n                        ", "\n                        "])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_16" /* ɵeld */](7, 0, null, 0, 1, "ion-icon", [["name", "arrow-forward"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](8, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "]))], function (_ck, _v) { var currVal_0 = ""; _ck(_v, 4, 0, currVal_0); var currVal_3 = "arrow-forward"; _ck(_v, 8, 0, currVal_3); }, function (_ck, _v) { var currVal_1 = core["_41" /* ɵunv */](_v, 5, 0, core["_29" /* ɵnov */](_v, 6).transform("core.continue")); _ck(_v, 5, 0, currVal_1); var currVal_2 = core["_29" /* ɵnov */](_v, 8)._hidden; _ck(_v, 7, 0, currVal_2); });
}
function View_AddonModFeedbackFormPage_33(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 12, "ion-grid", [["class", "grid"]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, grid["a" /* Grid */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 8, "ion-row", [["align-items-center", ""], ["class", "row"]], null, null, null, null, null)), core["_15" /* ɵdid */](4, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_34)), core["_15" /* ɵdid */](7, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonModFeedbackFormPage_35)), core["_15" /* ɵdid */](10, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.access.canviewanalysis; _ck(_v, 7, 0, currVal_0); var currVal_1 = _co.hasNextPage; _ck(_v, 10, 0, currVal_1); }, null); }
function View_AddonModFeedbackFormPage_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 12, "ion-header", [], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 8, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_15" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), core["_15" /* ɵdid */](5, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_15" /* ɵdid */](8, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_16" /* ɵeld */](9, 0, null, 0, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](10, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils_utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], contentlinks_providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content_content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_16" /* ɵeld */](14, 0, null, null, 15, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_15" /* ɵdid */](15, 4374528, null, 0, content_content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["K" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["D" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_16" /* ɵeld */](17, 0, null, 1, 11, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_15" /* ɵdid */](18, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["p" /* ElementRef */], events["a" /* CoreEventsProvider */], utils_utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_AddonModFeedbackFormPage_1)), core["_15" /* ɵdid */](21, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_AddonModFeedbackFormPage_29)), core["_15" /* ɵdid */](24, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_AddonModFeedbackFormPage_33)), core["_15" /* ɵdid */](27, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 5, 0); var currVal_2 = _co.title; _ck(_v, 10, 0, currVal_2); var currVal_5 = _co.feedbackLoaded; _ck(_v, 18, 0, currVal_5); var currVal_6 = (_co.items && _co.items.length); _ck(_v, 21, 0, currVal_6); var currVal_7 = _co.completed; _ck(_v, 24, 0, currVal_7); var currVal_8 = _co.completed; _ck(_v, 27, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_29" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = core["_29" /* ɵnov */](_v, 15).statusbarPadding; var currVal_4 = core["_29" /* ɵnov */](_v, 15)._hasRefresher; _ck(_v, 14, 0, currVal_3, currVal_4); }); }
function View_AddonModFeedbackFormPage_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "page-addon-mod-feedback-form", [], null, null, null, View_AddonModFeedbackFormPage_0, RenderType_AddonModFeedbackFormPage)), core["_15" /* ɵdid */](1, 180224, null, 0, form_AddonModFeedbackFormPage, [nav_params["a" /* NavParams */], feedback["a" /* AddonModFeedbackProvider */], app["a" /* CoreAppProvider */], utils_utils["a" /* CoreUtilsProvider */], dom["a" /* CoreDomUtilsProvider */], nav_controller["a" /* NavController */], helper["a" /* AddonModFeedbackHelperProvider */], course["a" /* CoreCourseProvider */], events["a" /* CoreEventsProvider */], sync["a" /* AddonModFeedbackSyncProvider */], _ionic_native_network["a" /* Network */], translate_service["a" /* TranslateService */], providers_helper["a" /* CoreLoginHelperProvider */], contentlinks_providers_helper["a" /* CoreContentLinksHelperProvider */], sites["a" /* CoreSitesProvider */], [2, content_content["a" /* Content */]], core["D" /* NgZone */]], null, null)], null, null); }
var AddonModFeedbackFormPageNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("page-addon-mod-feedback-form", form_AddonModFeedbackFormPage, View_AddonModFeedbackFormPage_Host_0, {}, {}, []);





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

// EXTERNAL MODULE: ./src/core/course/components/components.module.ts
var course_components_components_module = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(237);

// CONCATENATED MODULE: ./src/addon/mod/feedback/pages/form/form.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFeedbackFormPageModuleNgFactory", function() { return AddonModFeedbackFormPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_form.module,_.._.._.._.._.._node_modules_ionic_angular_components_action_sheet_action_sheet_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_alert_alert_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_app_app_root.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_loading_loading_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_modal_modal_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_picker_picker_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_popover_popover_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_select_select_popover_component.ngfactory,_.._.._.._.._.._node_modules_ionic_angular_components_toast_toast_component.ngfactory,_.._.._.._.._components_context_menu_context_menu_popover.ngfactory,_.._.._.._.._components_course_picker_menu_course_picker_menu_popover.ngfactory,_.._.._.._.._components_recaptcha_recaptchamodal.ngfactory,_.._.._.._.._core_course_components_unsupported_module_unsupported_module.ngfactory,_.._components_index_index.ngfactory,_form.ngfactory,_angular_common,_angular_forms,_ngx_translate_core_src_translate.loader,_ngx_translate_core_src_translate.compiler,_ngx_translate_core_src_translate.parser,_ngx_translate_core_src_missing_translation_handler,_ngx_translate_core_src_translate.service,_ngx_translate_core_src_translate.store,_.._.._.._.._directives_directives.module,ionic_angular_module,_ngx_translate_core_index,_.._.._.._.._pipes_pipes.module,_.._.._.._.._components_components.module,_.._.._.._.._core_course_components_components.module,_.._components_components.module,ionic_angular_util_module_loader,_form PURE_IMPORTS_END */


































var AddonModFeedbackFormPageModuleNgFactory = /*@__PURE__*/ core["_13" /* ɵcmf */](AddonModFeedbackFormPageModule, [], function (_l) { return core["_25" /* ɵmod */]([core["_26" /* ɵmpd */](512, core["n" /* ComponentFactoryResolver */], core["_6" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], unsupported_module_ngfactory["a" /* CoreCourseUnsupportedModuleComponentNgFactory */], index_ngfactory["a" /* AddonModFeedbackIndexComponentNgFactory */], AddonModFeedbackFormPageNgFactory]], [3, core["n" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["_26" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["v" /* ɵa */]]]), core["_26" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_26" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_26" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_26" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_26" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_26" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_26" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_26" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_26" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_26" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_26" /* ɵmpd */](512, _ngx_translate_core["a" /* TranslateModule */], _ngx_translate_core["a" /* TranslateModule */], []), core["_26" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_26" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_26" /* ɵmpd */](512, course_components_components_module["a" /* CoreCourseComponentsModule */], course_components_components_module["a" /* CoreCourseComponentsModule */], []), core["_26" /* ɵmpd */](512, components_components_module["a" /* AddonModFeedbackComponentsModule */], components_components_module["a" /* AddonModFeedbackComponentsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_26" /* ɵmpd */](512, AddonModFeedbackFormPageModule, AddonModFeedbackFormPageModule, []), core["_26" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_26" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_26" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], form_AddonModFeedbackFormPage, [])]); });






/***/ }),

/***/ 1909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_CoreRecaptchaComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_CoreRecaptchaComponent_0;
/* unused harmony export View_CoreRecaptchaComponent_Host_0 */
/* unused harmony export CoreRecaptchaComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = /*@__PURE__*/__webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_button_button_ngfactory__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_button_button__ = /*@__PURE__*/__webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__ = /*@__PURE__*/__webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core_src_translate_pipe__ = /*@__PURE__*/__webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core_src_translate_service__ = /*@__PURE__*/__webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = /*@__PURE__*/__webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_icon_icon__ = /*@__PURE__*/__webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__recaptcha__ = /*@__PURE__*/__webpack_require__(1309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_lang__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_utils_text__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_modal_modal_controller__ = /*@__PURE__*/__webpack_require__(197);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_config_config,_ngx_translate_core_src_translate.pipe,_ngx_translate_core_src_translate.service,_angular_common,ionic_angular_components_icon_icon,_recaptcha,_.._providers_sites,_.._providers_lang,_.._providers_utils_text,ionic_angular_components_modal_modal_controller PURE_IMPORTS_END */













var styles_CoreRecaptchaComponent = [];
var RenderType_CoreRecaptchaComponent = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreRecaptchaComponent, data: {} });

function View_CoreRecaptchaComponent_2(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](0, 0, null, null, 3, "button", [["block", ""], ["ion-button", ""], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.answerRecaptcha() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_angular_components_button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](1, 1097728, null, 0, __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](2, 0, ["", ""])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core_src_translate_pipe__["a" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core_src_translate_service__["a" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = ""; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_41" /* ɵunv */](_v, 2, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 3).transform("core.answer")); _ck(_v, 2, 0, currVal_1); });
}
function View_CoreRecaptchaComponent_3(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](0, 0, null, null, 2, "p", [["class", "text-success"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](1, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core_src_translate_pipe__["a" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core_src_translate_service__["a" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectorRef */]])], null, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_41" /* ɵunv */](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 2).transform("core.answered")); _ck(_v, 1, 0, currVal_0); }); }
function View_CoreRecaptchaComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](0, 0, null, null, 2, "p", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](1, null, ["", ""])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core_src_translate_pipe__["a" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core_src_translate_service__["a" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectorRef */]])], null, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_41" /* ɵunv */](_v, 1, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 2).transform("core.login.recaptchaexpired")); _ck(_v, 1, 0, currVal_0); }); }
function View_CoreRecaptchaComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](0, 0, null, null, 12, "div", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreRecaptchaComponent_2)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreRecaptchaComponent_3)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](8, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreRecaptchaComponent_4)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](11, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.model[_co.modelValueName]; _ck(_v, 5, 0, currVal_0); var currVal_1 = _co.model[_co.modelValueName]; _ck(_v, 8, 0, currVal_1); var currVal_2 = _co.expired; _ck(_v, 11, 0, currVal_2); }, null); }
function View_CoreRecaptchaComponent_5(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](0, 0, null, null, 5, "div", [["class", "core-warning-card"], ["icon-start", ""]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](2, 0, null, null, 1, "ion-icon", [["name", "warning"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](3, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_icon_icon__["a" /* Icon */], [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](4, null, ["\n    ", "\n"])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core_src_translate_pipe__["a" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core_src_translate_service__["a" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_1 = "warning"; _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 3)._hidden; _ck(_v, 2, 0, currVal_0); var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_41" /* ɵunv */](_v, 4, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 5).transform("core.errorloadingcontent")); _ck(_v, 4, 0, currVal_2); }); }
function View_CoreRecaptchaComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreRecaptchaComponent_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](2, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreRecaptchaComponent_5)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.publicKey; _ck(_v, 2, 0, currVal_0); var currVal_1 = (!_co.challengehash && _co.challengeimage); _ck(_v, 6, 0, currVal_1); }, null); }
function View_CoreRecaptchaComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](0, 0, null, null, 1, "core-recaptcha", [], null, null, null, View_CoreRecaptchaComponent_0, RenderType_CoreRecaptchaComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_8__recaptcha__["a" /* CoreRecaptchaComponent */], [__WEBPACK_IMPORTED_MODULE_9__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_lang__["a" /* CoreLangProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_utils_text__["a" /* CoreTextUtilsProvider */], __WEBPACK_IMPORTED_MODULE_12_ionic_angular_components_modal_modal_controller__["a" /* ModalController */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CoreRecaptchaComponentNgFactory = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ɵccf */]("core-recaptcha", __WEBPACK_IMPORTED_MODULE_8__recaptcha__["a" /* CoreRecaptchaComponent */], View_CoreRecaptchaComponent_Host_0, { model: "model", publicKey: "publicKey", modelValueName: "modelValueName", siteUrl: "siteUrl" }, {}, []);






/***/ })

});
//# sourceMappingURL=21.js.map