webpackJsonp([115],{

/***/ 1783:
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

// EXTERNAL MODULE: ./src/pipes/pipes.module.ts + 1 modules
var pipes_module = __webpack_require__(110);

// EXTERNAL MODULE: ./src/addon/calendar/providers/calendar.ts
var calendar = __webpack_require__(331);

// EXTERNAL MODULE: ./src/addon/calendar/providers/helper.ts
var helper = __webpack_require__(646);

// EXTERNAL MODULE: ./src/core/courses/providers/courses.ts
var courses = __webpack_require__(73);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(2);

// EXTERNAL MODULE: ./src/providers/local-notifications.ts
var local_notifications = __webpack_require__(131);

// EXTERNAL MODULE: ./src/core/course/providers/course.ts
var course = __webpack_require__(16);

// EXTERNAL MODULE: ./src/providers/utils/time.ts
var time = __webpack_require__(43);

// CONCATENATED MODULE: ./src/addon/calendar/pages/event/event.ts













/**
 * Page that displays a single calendar event.
 */
var AddonCalendarEventPage = /*@__PURE__*/ (function () {
    function AddonCalendarEventPage(translate, calendarProvider, navParams, domUtils, coursesProvider, timeUtils, calendarHelper, sitesProvider, localNotificationsProvider, courseProvider) {
        var _this = this;
        this.translate = translate;
        this.calendarProvider = calendarProvider;
        this.domUtils = domUtils;
        this.coursesProvider = coursesProvider;
        this.calendarHelper = calendarHelper;
        this.courseProvider = courseProvider;
        this.event = {};
        this.notificationsEnabled = false;
        this.eventId = navParams.get('id');
        this.notificationsEnabled = localNotificationsProvider.isAvailable();
        this.siteHomeId = sitesProvider.getCurrentSite().getSiteHomeId();
        if (this.notificationsEnabled) {
            this.calendarProvider.getEventNotificationTimeOption(this.eventId).then(function (notificationTime) {
                _this.notificationTime = notificationTime;
            });
            this.calendarProvider.getDefaultNotificationTime().then(function (defaultTime) {
                if (defaultTime === 0) {
                    // Disabled by default.
                    _this.defaultTimeReadable = _this.translate.instant('core.settings.disabled');
                }
                else {
                    _this.defaultTimeReadable = timeUtils.formatTime(defaultTime * 60);
                }
            });
        }
    }
    /**
     * View loaded.
     */
    AddonCalendarEventPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fetchEvent().finally(function () {
            _this.eventLoaded = true;
        });
    };
    AddonCalendarEventPage.prototype.updateNotificationTime = function () {
        if (!isNaN(this.notificationTime) && this.event && this.event.id) {
            this.calendarProvider.updateNotificationTime(this.event, this.notificationTime);
        }
    };
    /**
     * Fetches the event and updates the view.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonCalendarEventPage.prototype.fetchEvent = function () {
        var _this = this;
        return this.calendarProvider.getEvent(this.eventId).then(function (event) {
            _this.calendarHelper.formatEventData(event);
            _this.event = event;
            // Guess event title.
            var title = _this.translate.instant('addon.calendar.type' + event.eventtype);
            if (event.moduleIcon) {
                // It's a module event, translate the module name to the current language.
                var name_1 = _this.courseProvider.translateModuleName(event.modulename);
                if (name_1.indexOf('core.mod_') === -1) {
                    event.moduleName = name_1;
                }
                if (title == 'addon.calendar.type' + event.eventtype) {
                    title = _this.translate.instant('core.mod_' + event.modulename + '.' + event.eventtype);
                    if (title == 'core.mod_' + event.modulename + '.' + event.eventtype) {
                        title = name_1;
                    }
                }
            }
            else {
                if (title == 'addon.calendar.type' + event.eventtype) {
                    title = event.name;
                }
            }
            _this.title = title;
            if (event.courseid && event.courseid != _this.siteHomeId) {
                // It's a course event, retrieve the course name.
                return _this.coursesProvider.getUserCourse(event.courseid, true).then(function (course) {
                    _this.courseName = course.fullname;
                });
            }
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.calendar.errorloadevent', true);
        });
    };
    /**
     * Refresh the event.
     *
     * @param {any} refresher Refresher.
     */
    AddonCalendarEventPage.prototype.refreshEvent = function (refresher) {
        var _this = this;
        this.calendarProvider.invalidateEvent(this.eventId).finally(function () {
            _this.fetchEvent().finally(function () {
                refresher.complete();
            });
        });
    };
    return AddonCalendarEventPage;
}());





// CONCATENATED MODULE: ./src/addon/calendar/pages/event/event.module.ts








var AddonCalendarEventPageModule = /*@__PURE__*/ (function () {
    function AddonCalendarEventPageModule() {
    }
    return AddonCalendarEventPageModule;
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

// EXTERNAL MODULE: ./src/components/icon/icon.ngfactory.js
var icon_ngfactory = __webpack_require__(194);

// EXTERNAL MODULE: ./src/components/icon/icon.ts
var icon = __webpack_require__(165);

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

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(40);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(12);

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
var providers_helper = __webpack_require__(23);

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

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/card/card.js
var card = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.ngfactory.js
var select_ngfactory = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.js
var select_select = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app_app = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/option/option.js
var option_option = __webpack_require__(101);

// EXTERNAL MODULE: ./src/pipes/to-locale-string.ts
var to_locale_string = __webpack_require__(640);

// EXTERNAL MODULE: ./src/pipes/duration.ts
var duration = __webpack_require__(1328);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/card/card-content.js
var card_content = __webpack_require__(435);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/card/card-title.js
var card_title = __webpack_require__(678);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(60);

// CONCATENATED MODULE: ./src/addon/calendar/pages/event/event.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._components_icon_icon.ngfactory,_.._.._.._components_icon_icon,_.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,_ngx_translate_core_src_translate.pipe,_ngx_translate_core_src_translate.service,_.._.._.._directives_format_text,_.._.._.._providers_sites,_.._.._.._providers_utils_dom,_.._.._.._providers_utils_text,ionic_angular_platform_platform,_.._.._.._providers_utils_utils,_.._.._.._providers_utils_url,_.._.._.._providers_logger,_.._.._.._providers_filepool,_.._.._.._providers_app,_.._.._.._core_contentlinks_providers_helper,ionic_angular_navigation_nav_controller,ionic_angular_components_content_content,_.._.._.._components_split_view_split_view,_.._.._.._providers_utils_iframe,_.._.._.._providers_events,_angular_common,ionic_angular_components_card_card,ionic_angular_components_label_label,_.._.._.._.._node_modules_ionic_angular_components_select_select.ngfactory,ionic_angular_components_select_select,ionic_angular_components_app_app,ionic_angular_navigation_deep_linker,_angular_forms,ionic_angular_components_option_option,_.._.._.._pipes_to_locale_string,_.._.._.._pipes_duration,_.._.._.._providers_utils_time,ionic_angular_components_toolbar_toolbar_header,ionic_angular_navigation_view_controller,_.._.._.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,_.._.._.._directives_back_button,_.._.._.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_toolbar,_.._.._.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_platform_dom_controller,ionic_angular_platform_keyboard,ionic_angular_components_refresher_refresher,ionic_angular_gestures_gesture_controller,_.._.._.._.._node_modules_ionic_angular_components_refresher_refresher_content.ngfactory,ionic_angular_components_refresher_refresher_content,_.._.._.._components_loading_loading.ngfactory,_.._.._.._components_loading_loading,ionic_angular_components_card_card_content,ionic_angular_components_card_card_title,_event,_.._providers_calendar,ionic_angular_navigation_nav_params,_.._.._.._core_courses_providers_courses,_.._providers_helper,_.._.._.._providers_local_notifications,_.._.._.._core_course_providers_course PURE_IMPORTS_END */

































































var styles_AddonCalendarEventPage = [];
var RenderType_AddonCalendarEventPage = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonCalendarEventPage, data: {} });

function View_AddonCalendarEventPage_1(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-icon", [["item-start", ""]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_15" /* ɵdid */](1, 114688, null, 0, icon["a" /* CoreIconComponent */], [core["p" /* ElementRef */]], { name: [0, "name"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.event.icon; _ck(_v, 1, 0, currVal_0); }, null); }
function View_AddonCalendarEventPage_2(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 5, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 6, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 7, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](8, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](11, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](12, null, ["", ""])), core["_34" /* ɵppd */](13, 1), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_41" /* ɵunv */](_v, 8, 0, core["_29" /* ɵnov */](_v, 9).transform("addon.calendar.eventendtime")); _ck(_v, 8, 0, currVal_0); var currVal_1 = core["_41" /* ɵunv */](_v, 12, 0, _ck(_v, 13, 0, core["_29" /* ɵnov */](_v.parent, 0), (_co.event.timestart + _co.event.timeduration))); _ck(_v, 12, 0, currVal_1); }); }
function View_AddonCalendarEventPage_3(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 8, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 9, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 10, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](8, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](11, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_16" /* ɵeld */](12, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](13, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.courseName; _ck(_v, 13, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 8, 0, core["_29" /* ɵnov */](_v, 9).transform("core.course")); _ck(_v, 8, 0, currVal_0); }); }
function View_AddonCalendarEventPage_5(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 0, "img", [["alt", ""], ["class", "core-module-icon"], ["item-start", ""], ["role", "presentation"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_19" /* ɵinlineInterpolate */](1, "", _co.event.moduleIcon, ""); _ck(_v, 0, 0, currVal_0); }); }
function View_AddonCalendarEventPage_4(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 9, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 11, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 12, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 13, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_AddonCalendarEventPage_5)), core["_15" /* ɵdid */](8, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](9, 2, [" ", "\n                "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.event.moduleIcon; _ck(_v, 8, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.event.moduleName; _ck(_v, 9, 0, currVal_1); }); }
function View_AddonCalendarEventPage_6(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 4, "p", [["text-wrap", ""]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](3, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.event.description; _ck(_v, 3, 0, currVal_0); }, null); }
function View_AddonCalendarEventPage_7(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 70, "ion-card", [["list", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 66, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 17, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 18, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 19, { _icons: 1 }), core["_15" /* ɵdid */](8, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](10, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), core["_15" /* ɵdid */](11, 16384, [[17, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_40" /* ɵted */](12, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](15, 0, null, 3, 53, "ion-select", [["interface", "popover"]], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionChange"], [null, "click"], [null, "keyup.space"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 16)._click($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keyup.space" === en)) {
                var pd_1 = (core["_29" /* ɵnov */](_v, 16)._keyup() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.notificationTime = $event) !== false);
                ad = (pd_2 && ad);
            }
            if (("ionChange" === en)) {
                var pd_3 = (_co.updateNotificationTime($event) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, select_ngfactory["b" /* View_Select_0 */], select_ngfactory["a" /* RenderType_Select */])), core["_15" /* ɵdid */](16, 1228800, null, 1, select_select["a" /* Select */], [app_app["a" /* App */], util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item["a" /* Item */]], deep_linker["a" /* DeepLinker */]], { interface: [0, "interface"] }, { ionChange: "ionChange" }), core["_37" /* ɵqud */](603979776, 20, { options: 1 }), core["_35" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [select_select["a" /* Select */]]), core["_15" /* ɵdid */](19, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_15" /* ɵdid */](21, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](23, 0, null, null, 4, "ion-option", [["value", "-1"]], null, null, null, null, null)), core["_15" /* ɵdid */](24, 16384, [[20, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](25, null, ["", ""])), core["_33" /* ɵpod */](26, { $a: 0 }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](29, 0, null, null, 3, "ion-option", [["value", "0"]], null, null, null, null, null)), core["_15" /* ɵdid */](30, 16384, [[20, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](31, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](34, 0, null, null, 3, "ion-option", [["value", "10"]], null, null, null, null, null)), core["_15" /* ɵdid */](35, 16384, [[20, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](36, null, ["", ""])), core["_34" /* ɵppd */](37, 1), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](39, 0, null, null, 3, "ion-option", [["value", "30"]], null, null, null, null, null)), core["_15" /* ɵdid */](40, 16384, [[20, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](41, null, ["", ""])), core["_34" /* ɵppd */](42, 1), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](44, 0, null, null, 3, "ion-option", [["value", "60"]], null, null, null, null, null)), core["_15" /* ɵdid */](45, 16384, [[20, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](46, null, ["", ""])), core["_34" /* ɵppd */](47, 1), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](49, 0, null, null, 3, "ion-option", [["value", "120"]], null, null, null, null, null)), core["_15" /* ɵdid */](50, 16384, [[20, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](51, null, ["", ""])), core["_34" /* ɵppd */](52, 1), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](54, 0, null, null, 3, "ion-option", [["value", "360"]], null, null, null, null, null)), core["_15" /* ɵdid */](55, 16384, [[20, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](56, null, ["", ""])), core["_34" /* ɵppd */](57, 1), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](59, 0, null, null, 3, "ion-option", [["value", "720"]], null, null, null, null, null)), core["_15" /* ɵdid */](60, 16384, [[20, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](61, null, ["", ""])), core["_34" /* ɵppd */](62, 1), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](64, 0, null, null, 3, "ion-option", [["value", "1440"]], null, null, null, null, null)), core["_15" /* ɵdid */](65, 16384, [[20, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](66, null, ["", ""])), core["_34" /* ɵppd */](67, 1), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_9 = "popover"; _ck(_v, 16, 0, currVal_9); var currVal_10 = _co.notificationTime; _ck(_v, 19, 0, currVal_10); var currVal_11 = "-1"; _ck(_v, 24, 0, currVal_11); var currVal_13 = "0"; _ck(_v, 30, 0, currVal_13); var currVal_15 = "10"; _ck(_v, 35, 0, currVal_15); var currVal_17 = "30"; _ck(_v, 40, 0, currVal_17); var currVal_19 = "60"; _ck(_v, 45, 0, currVal_19); var currVal_21 = "120"; _ck(_v, 50, 0, currVal_21); var currVal_23 = "360"; _ck(_v, 55, 0, currVal_23); var currVal_25 = "720"; _ck(_v, 60, 0, currVal_25); var currVal_27 = "1440"; _ck(_v, 65, 0, currVal_27); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_41" /* ɵunv */](_v, 12, 0, core["_29" /* ɵnov */](_v, 13).transform("addon.calendar.notifications")); _ck(_v, 12, 0, currVal_0); var currVal_1 = core["_29" /* ɵnov */](_v, 16)._disabled; var currVal_2 = core["_29" /* ɵnov */](_v, 21).ngClassUntouched; var currVal_3 = core["_29" /* ɵnov */](_v, 21).ngClassTouched; var currVal_4 = core["_29" /* ɵnov */](_v, 21).ngClassPristine; var currVal_5 = core["_29" /* ɵnov */](_v, 21).ngClassDirty; var currVal_6 = core["_29" /* ɵnov */](_v, 21).ngClassValid; var currVal_7 = core["_29" /* ɵnov */](_v, 21).ngClassInvalid; var currVal_8 = core["_29" /* ɵnov */](_v, 21).ngClassPending; _ck(_v, 15, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_12 = core["_41" /* ɵunv */](_v, 25, 0, core["_29" /* ɵnov */](_v, 27).transform("core.defaultvalue", _ck(_v, 26, 0, _co.defaultTimeReadable))); _ck(_v, 25, 0, currVal_12); var currVal_14 = core["_41" /* ɵunv */](_v, 31, 0, core["_29" /* ɵnov */](_v, 32).transform("core.settings.disabled")); _ck(_v, 31, 0, currVal_14); var currVal_16 = core["_41" /* ɵunv */](_v, 36, 0, _ck(_v, 37, 0, core["_29" /* ɵnov */](_v.parent, 1), 600)); _ck(_v, 36, 0, currVal_16); var currVal_18 = core["_41" /* ɵunv */](_v, 41, 0, _ck(_v, 42, 0, core["_29" /* ɵnov */](_v.parent, 1), 1800)); _ck(_v, 41, 0, currVal_18); var currVal_20 = core["_41" /* ɵunv */](_v, 46, 0, _ck(_v, 47, 0, core["_29" /* ɵnov */](_v.parent, 1), 3600)); _ck(_v, 46, 0, currVal_20); var currVal_22 = core["_41" /* ɵunv */](_v, 51, 0, _ck(_v, 52, 0, core["_29" /* ɵnov */](_v.parent, 1), 7200)); _ck(_v, 51, 0, currVal_22); var currVal_24 = core["_41" /* ɵunv */](_v, 56, 0, _ck(_v, 57, 0, core["_29" /* ɵnov */](_v.parent, 1), 21600)); _ck(_v, 56, 0, currVal_24); var currVal_26 = core["_41" /* ɵunv */](_v, 61, 0, _ck(_v, 62, 0, core["_29" /* ɵnov */](_v.parent, 1), 43200)); _ck(_v, 61, 0, currVal_26); var currVal_28 = core["_41" /* ɵunv */](_v, 66, 0, _ck(_v, 67, 0, core["_29" /* ɵnov */](_v.parent, 1), 86400)); _ck(_v, 66, 0, currVal_28); });
}
function View_AddonCalendarEventPage_0(_l) {
    return core["_42" /* ɵvid */](0, [core["_32" /* ɵpid */](0, to_locale_string["a" /* CoreToLocaleStringPipe */], [logger["a" /* CoreLoggerProvider */]]), core["_32" /* ɵpid */](0, duration["a" /* CoreDurationPipe */], [logger["a" /* CoreLoggerProvider */], time["a" /* CoreTimeUtilsProvider */]]), core["_37" /* ɵqud */](402653184, 1, { content: 0 }), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 12, "ion-header", [], null, null, null, null, null)), core["_15" /* ɵdid */](4, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_16" /* ɵeld */](6, 0, null, null, 8, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_15" /* ɵdid */](7, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), core["_15" /* ɵdid */](8, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_16" /* ɵeld */](10, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_15" /* ɵdid */](11, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_16" /* ɵeld */](12, 0, null, 0, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](13, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_16" /* ɵeld */](17, 0, null, null, 71, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_15" /* ɵdid */](18, 4374528, [[1, 4]], 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["K" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["D" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_16" /* ɵeld */](20, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ionRefresh" === en)) {
                var pd_0 = (_co.refreshEvent($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_15" /* ɵdid */](21, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["D" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_16" /* ɵeld */](23, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_15" /* ɵdid */](24, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_16" /* ɵeld */](28, 0, null, 1, 59, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_15" /* ɵdid */](29, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["p" /* ElementRef */], events["a" /* CoreEventsProvider */], utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_16" /* ɵeld */](31, 0, null, 0, 52, "ion-card", [], null, null, null, null, null)), core["_15" /* ɵdid */](32, 16384, null, 0, card["a" /* Card */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](34, 0, null, null, 48, "ion-card-content", [], null, null, null, null, null)), core["_15" /* ɵdid */](35, 16384, null, 0, card_content["a" /* CardContent */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](37, 0, null, null, 8, "ion-card-title", [["text-wrap", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](38, 16384, null, 0, card_title["a" /* CardTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonCalendarEventPage_1)), core["_15" /* ɵdid */](41, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](43, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](44, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](47, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](48, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 2, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 3, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 4, { _icons: 1 }), core["_15" /* ɵdid */](52, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](54, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](55, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](58, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](59, null, ["", ""])), core["_34" /* ɵppd */](60, 1), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonCalendarEventPage_2)), core["_15" /* ɵdid */](64, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonCalendarEventPage_3)), core["_15" /* ɵdid */](67, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonCalendarEventPage_4)), core["_15" /* ɵdid */](70, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](72, 0, null, null, 9, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](73, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 14, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 15, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 16, { _icons: 1 }), core["_15" /* ɵdid */](77, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, 2, 1, null, View_AddonCalendarEventPage_6)), core["_15" /* ɵdid */](80, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_AddonCalendarEventPage_7)), core["_15" /* ɵdid */](86, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 8, 0); var currVal_2 = _co.title; _ck(_v, 13, 0, currVal_2); var currVal_7 = _co.eventLoaded; _ck(_v, 21, 0, currVal_7); var currVal_9 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 24, 0, core["_29" /* ɵnov */](_v, 25).transform("core.pulltorefresh")), ""); _ck(_v, 24, 0, currVal_9); var currVal_10 = _co.eventLoaded; _ck(_v, 29, 0, currVal_10); var currVal_11 = (_co.event.icon && !_co.event.moduleIcon); _ck(_v, 41, 0, currVal_11); var currVal_12 = _co.event.name; _ck(_v, 44, 0, currVal_12); var currVal_15 = (_co.event.timeduration > 0); _ck(_v, 64, 0, currVal_15); var currVal_16 = _co.courseName; _ck(_v, 67, 0, currVal_16); var currVal_17 = _co.event.moduleIcon; _ck(_v, 70, 0, currVal_17); var currVal_18 = _co.event.description; _ck(_v, 80, 0, currVal_18); var currVal_19 = _co.notificationsEnabled; _ck(_v, 86, 0, currVal_19); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_29" /* ɵnov */](_v, 7)._hidden; var currVal_1 = core["_29" /* ɵnov */](_v, 7)._sbPadding; _ck(_v, 6, 0, currVal_0, currVal_1); var currVal_3 = core["_29" /* ɵnov */](_v, 18).statusbarPadding; var currVal_4 = core["_29" /* ɵnov */](_v, 18)._hasRefresher; _ck(_v, 17, 0, currVal_3, currVal_4); var currVal_5 = (core["_29" /* ɵnov */](_v, 21).state !== "inactive"); var currVal_6 = core["_29" /* ɵnov */](_v, 21)._top; _ck(_v, 20, 0, currVal_5, currVal_6); var currVal_8 = core["_29" /* ɵnov */](_v, 24).r.state; _ck(_v, 23, 0, currVal_8); var currVal_13 = core["_41" /* ɵunv */](_v, 55, 0, core["_29" /* ɵnov */](_v, 56).transform("addon.calendar.eventstarttime")); _ck(_v, 55, 0, currVal_13); var currVal_14 = core["_41" /* ɵunv */](_v, 59, 0, _ck(_v, 60, 0, core["_29" /* ɵnov */](_v, 0), _co.event.timestart)); _ck(_v, 59, 0, currVal_14); });
}
function View_AddonCalendarEventPage_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "page-addon-calendar-event", [], null, null, null, View_AddonCalendarEventPage_0, RenderType_AddonCalendarEventPage)), core["_15" /* ɵdid */](1, 49152, null, 0, AddonCalendarEventPage, [translate_service["a" /* TranslateService */], calendar["a" /* AddonCalendarProvider */], nav_params["a" /* NavParams */], dom["a" /* CoreDomUtilsProvider */], courses["a" /* CoreCoursesProvider */], time["a" /* CoreTimeUtilsProvider */], helper["a" /* AddonCalendarHelperProvider */], sites["a" /* CoreSitesProvider */], local_notifications["a" /* CoreLocalNotificationsProvider */], course["a" /* CoreCourseProvider */]], null, null)], null, null); }
var AddonCalendarEventPageNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("page-addon-calendar-event", AddonCalendarEventPage, View_AddonCalendarEventPage_Host_0, {}, {}, []);





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

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(237);

// CONCATENATED MODULE: ./src/addon/calendar/pages/event/event.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarEventPageModuleNgFactory", function() { return AddonCalendarEventPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_event.module,_.._.._.._.._node_modules_ionic_angular_components_action_sheet_action_sheet_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_alert_alert_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_app_app_root.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_loading_loading_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_modal_modal_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_picker_picker_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_popover_popover_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_select_select_popover_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_toast_toast_component.ngfactory,_.._.._.._components_context_menu_context_menu_popover.ngfactory,_.._.._.._components_course_picker_menu_course_picker_menu_popover.ngfactory,_.._.._.._components_recaptcha_recaptchamodal.ngfactory,_event.ngfactory,_angular_common,_angular_forms,_ngx_translate_core_src_translate.loader,_ngx_translate_core_src_translate.compiler,_ngx_translate_core_src_translate.parser,_ngx_translate_core_src_missing_translation_handler,_ngx_translate_core_src_translate.service,_ngx_translate_core_src_translate.store,ionic_angular_module,_ngx_translate_core_index,_.._.._.._directives_directives.module,_.._.._.._pipes_pipes.module,_.._.._.._components_components.module,ionic_angular_util_module_loader,_event PURE_IMPORTS_END */






























var AddonCalendarEventPageModuleNgFactory = /*@__PURE__*/ core["_13" /* ɵcmf */](AddonCalendarEventPageModule, [], function (_l) { return core["_25" /* ɵmod */]([core["_26" /* ɵmpd */](512, core["n" /* ComponentFactoryResolver */], core["_6" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], AddonCalendarEventPageNgFactory]], [3, core["n" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["_26" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["v" /* ɵa */]]]), core["_26" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_26" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_26" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_26" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_26" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_26" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_26" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_26" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_26" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_26" /* ɵmpd */](512, _ngx_translate_core["a" /* TranslateModule */], _ngx_translate_core["a" /* TranslateModule */], []), core["_26" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_26" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_26" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_26" /* ɵmpd */](512, AddonCalendarEventPageModule, AddonCalendarEventPageModule, []), core["_26" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_26" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_26" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], AddonCalendarEventPage, [])]); });






/***/ })

});
//# sourceMappingURL=115.js.map