webpackJsonp([116],{

/***/ 1779:
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

// EXTERNAL MODULE: ./src/addon/badges/providers/badges.ts
var badges = __webpack_require__(271);

// EXTERNAL MODULE: ./src/providers/utils/time.ts
var time = __webpack_require__(43);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(2);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(35);

// CONCATENATED MODULE: ./src/addon/badges/pages/user-badges/user-badges.ts









/**
 * Page that displays the list of calendar events.
 */
var AddonBadgesUserBadgesPage = /*@__PURE__*/ (function () {
    function AddonBadgesUserBadgesPage(navParams, sitesProvider, badgesProvider, domUtils, timeUtils) {
        this.badgesProvider = badgesProvider;
        this.domUtils = domUtils;
        this.timeUtils = timeUtils;
        this.badgesLoaded = false;
        this.badges = [];
        this.currentTime = 0;
        this.courseId = navParams.get('courseId') || 0; // Use 0 for site badges.
        this.userId = navParams.get('userId') || sitesProvider.getCurrentSite().getUserId();
    }
    /**
     * View loaded.
     */
    AddonBadgesUserBadgesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fetchBadges().finally(function () {
            if (!_this.badgeHash && _this.splitviewCtrl.isOn() && _this.badges.length > 0) {
                // Take first and load it.
                _this.loadIssuedBadge(_this.badges[0].uniquehash);
            }
            _this.badgesLoaded = true;
        });
    };
    /**
     * Fetch all the badges required for the view.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonBadgesUserBadgesPage.prototype.fetchBadges = function () {
        var _this = this;
        this.currentTime = this.timeUtils.timestamp();
        return this.badgesProvider.getUserBadges(this.courseId, this.userId).then(function (badges) {
            _this.badges = badges;
        }).catch(function (message) {
            _this.domUtils.showErrorModalDefault(message, 'Error getting badges data.');
        });
    };
    /**
     * Refresh the badges.
     *
     * @param {any} refresher Refresher.
     */
    AddonBadgesUserBadgesPage.prototype.refreshBadges = function (refresher) {
        var _this = this;
        this.badgesProvider.invalidateUserBadges(this.courseId, this.userId).finally(function () {
            _this.fetchBadges().finally(function () {
                refresher.complete();
            });
        });
    };
    /**
     * Navigate to a particular badge.
     *
     * @param {string} badgeHash Badge to load.
     */
    AddonBadgesUserBadgesPage.prototype.loadIssuedBadge = function (badgeHash) {
        this.badgeHash = badgeHash;
        var params = { courseId: this.courseId, userId: this.userId, badgeHash: badgeHash };
        this.splitviewCtrl.push('AddonBadgesIssuedBadgePage', params);
    };
    return AddonBadgesUserBadgesPage;
}());





// CONCATENATED MODULE: ./src/addon/badges/pages/user-badges/user-badges.module.ts








var AddonBadgesUserBadgesPageModule = /*@__PURE__*/ (function () {
    function AddonBadgesUserBadgesPageModule() {
    }
    return AddonBadgesUserBadgesPageModule;
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

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ngfactory.js
var empty_box_ngfactory = __webpack_require__(164);

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ts
var empty_box = __webpack_require__(134);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/badge/badge.js
var badge = __webpack_require__(212);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(7);

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

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var url = __webpack_require__(25);

// EXTERNAL MODULE: ./src/providers/app.ts
var app = __webpack_require__(11);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(3);

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(40);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(12);

// EXTERNAL MODULE: ./src/core/contentlinks/providers/helper.ts
var helper = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(24);

// EXTERNAL MODULE: ./src/providers/utils/iframe.ts
var iframe = __webpack_require__(38);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(26);

// EXTERNAL MODULE: ./src/pipes/to-locale-string.ts
var to_locale_string = __webpack_require__(640);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher.js
var refresher = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.ngfactory.js
var refresher_content_ngfactory = __webpack_require__(192);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.js
var refresher_content = __webpack_require__(145);

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(57);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(60);

// CONCATENATED MODULE: ./src/addon/badges/pages/user-badges/user-badges.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._components_empty_box_empty_box.ngfactory,_.._.._.._components_empty_box_empty_box,_ngx_translate_core_src_translate.pipe,_ngx_translate_core_src_translate.service,ionic_angular_components_badge_badge,ionic_angular_config_config,_.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_avatar_avatar,_.._.._.._directives_external_content,_.._.._.._providers_logger,_.._.._.._providers_filepool,ionic_angular_platform_platform,_.._.._.._providers_sites,_.._.._.._providers_utils_dom,_.._.._.._providers_utils_url,_.._.._.._providers_app,_.._.._.._providers_utils_utils,_.._.._.._directives_format_text,_.._.._.._providers_utils_text,_.._.._.._core_contentlinks_providers_helper,ionic_angular_navigation_nav_controller,ionic_angular_components_content_content,_.._.._.._components_split_view_split_view,_.._.._.._providers_utils_iframe,_.._.._.._providers_events,_angular_common,ionic_angular_components_list_list,ionic_angular_gestures_gesture_controller,ionic_angular_platform_dom_controller,_.._.._.._pipes_to_locale_string,ionic_angular_components_toolbar_toolbar_header,ionic_angular_navigation_view_controller,_.._.._.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,_.._.._.._directives_back_button,_.._.._.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_toolbar,_.._.._.._components_split_view_split_view.ngfactory,_.._.._.._core_fileuploader_providers_fileuploader,_.._.._.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_platform_keyboard,ionic_angular_components_refresher_refresher,_.._.._.._.._node_modules_ionic_angular_components_refresher_refresher_content.ngfactory,ionic_angular_components_refresher_refresher_content,_.._.._.._components_loading_loading.ngfactory,_.._.._.._components_loading_loading,_user_badges,ionic_angular_navigation_nav_params,_.._providers_badges,_.._.._.._providers_utils_time PURE_IMPORTS_END */

























































var styles_AddonBadgesUserBadgesPage = [];
var RenderType_AddonBadgesUserBadgesPage = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonBadgesUserBadgesPage, data: {} });

function View_AddonBadgesUserBadgesPage_1(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 3, "core-empty-box", [["icon", "trophy"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_15" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], icon: [1, "icon"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n            "]))], function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, core["_29" /* ɵnov */](_v, 2).transform("addon.badges.nobadges")); var currVal_1 = "trophy"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AddonBadgesUserBadgesPage_4(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 3, "ion-badge", [["color", "danger"], ["item-end", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, badge["a" /* Badge */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_40" /* ɵted */](2, null, ["\n                        ", "\n                    "])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = "danger"; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = core["_41" /* ɵunv */](_v, 2, 0, core["_29" /* ɵnov */](_v, 3).transform("addon.badges.expired")); _ck(_v, 2, 0, currVal_1); }); }
function View_AddonBadgesUserBadgesPage_3(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 24, "a", [["class", "item item-block"], ["ion-item", ""], ["text-wrap", ""]], [[8, "title", 0], [2, "core-split-item-selected", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.loadIssuedBadge(_v.context.$implicit.uniquehash) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 3, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 4, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 5, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 0, 5, "ion-avatar", [["item-start", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](8, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](10, 0, null, null, 1, "img", [["core-external-content", ""], ["item-start", ""]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), core["_15" /* ɵdid */](11, 4210688, null, 0, external_content["a" /* CoreExternalContentDirective */], [core["p" /* ElementRef */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], platform["a" /* Platform */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], app["a" /* CoreAppProvider */], utils["a" /* CoreUtilsProvider */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](14, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_16" /* ɵeld */](15, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](16, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](18, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](19, null, ["", ""])), core["_34" /* ɵppd */](20, 1), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, 4, 1, null, View_AddonBadgesUserBadgesPage_4)), core["_15" /* ɵdid */](23, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = _v.context.$implicit.name; _ck(_v, 16, 0, currVal_4); var currVal_6 = (_v.context.$implicit.dateexpire && (_co.currentTime >= _v.context.$implicit.dateexpire)); _ck(_v, 23, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit.name; var currVal_1 = (_v.context.$implicit.uniquehash == _co.badgeHash); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _v.context.$implicit.badgeurl; var currVal_3 = _v.context.$implicit.name; _ck(_v, 10, 0, currVal_2, currVal_3); var currVal_5 = core["_41" /* ɵunv */](_v, 19, 0, _ck(_v, 20, 0, core["_29" /* ɵnov */](_v.parent.parent, 0), _v.context.$implicit.dateissued)); _ck(_v, 19, 0, currVal_5); });
}
function View_AddonBadgesUserBadgesPage_2(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, "ion-list", [["no-margin", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonBadgesUserBadgesPage_3)), core["_15" /* ɵdid */](4, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.badges; _ck(_v, 4, 0, currVal_0); }, null); }
function View_AddonBadgesUserBadgesPage_0(_l) {
    return core["_42" /* ɵvid */](0, [core["_32" /* ɵpid */](0, to_locale_string["a" /* CoreToLocaleStringPipe */], [logger["a" /* CoreLoggerProvider */]]), core["_37" /* ɵqud */](402653184, 1, { content: 0 }), core["_37" /* ɵqud */](402653184, 2, { splitviewCtrl: 0 }), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 12, "ion-header", [], null, null, null, null, null)), core["_15" /* ɵdid */](4, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_16" /* ɵeld */](6, 0, null, null, 8, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_15" /* ɵdid */](7, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), core["_15" /* ɵdid */](8, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_16" /* ɵeld */](10, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_15" /* ɵdid */](11, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_40" /* ɵted */](12, 0, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_16" /* ɵeld */](17, 0, null, null, 24, "core-split-view", [], null, null, null, split_view_ngfactory["b" /* View_CoreSplitViewComponent_0 */], split_view_ngfactory["a" /* RenderType_CoreSplitViewComponent */])), core["_15" /* ɵdid */](18, 245760, [[2, 4]], 0, split_view["a" /* CoreSplitViewComponent */], [[2, nav_controller["a" /* NavController */]], core["p" /* ElementRef */], fileuploader["a" /* CoreFileUploaderProvider */], platform["a" /* Platform */], translate_service["a" /* TranslateService */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_16" /* ɵeld */](20, 0, null, 0, 20, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_15" /* ɵdid */](21, 4374528, [[1, 4]], 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["K" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["D" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n        "])), (_l()(), core["_16" /* ɵeld */](23, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ionRefresh" === en)) {
                var pd_0 = (_co.refreshBadges($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_15" /* ɵdid */](24, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["D" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](26, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_15" /* ɵdid */](27, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n        "])), (_l()(), core["_16" /* ɵeld */](31, 0, null, 1, 8, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_15" /* ɵdid */](32, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["p" /* ElementRef */], events["a" /* CoreEventsProvider */], utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_AddonBadgesUserBadgesPage_1)), core["_15" /* ɵdid */](35, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_AddonBadgesUserBadgesPage_2)), core["_15" /* ɵdid */](38, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 8, 0); _ck(_v, 18, 0); var currVal_7 = _co.badgesLoaded; _ck(_v, 24, 0, currVal_7); var currVal_9 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 27, 0, core["_29" /* ɵnov */](_v, 28).transform("core.pulltorefresh")), ""); _ck(_v, 27, 0, currVal_9); var currVal_10 = _co.badgesLoaded; _ck(_v, 32, 0, currVal_10); var currVal_11 = (!_co.badges || (_co.badges.length == 0)); _ck(_v, 35, 0, currVal_11); var currVal_12 = (_co.badges && _co.badges.length); _ck(_v, 38, 0, currVal_12); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 7)._hidden; var currVal_1 = core["_29" /* ɵnov */](_v, 7)._sbPadding; _ck(_v, 6, 0, currVal_0, currVal_1); var currVal_2 = core["_41" /* ɵunv */](_v, 12, 0, core["_29" /* ɵnov */](_v, 13).transform("addon.badges.badges")); _ck(_v, 12, 0, currVal_2); var currVal_3 = core["_29" /* ɵnov */](_v, 21).statusbarPadding; var currVal_4 = core["_29" /* ɵnov */](_v, 21)._hasRefresher; _ck(_v, 20, 0, currVal_3, currVal_4); var currVal_5 = (core["_29" /* ɵnov */](_v, 24).state !== "inactive"); var currVal_6 = core["_29" /* ɵnov */](_v, 24)._top; _ck(_v, 23, 0, currVal_5, currVal_6); var currVal_8 = core["_29" /* ɵnov */](_v, 27).r.state; _ck(_v, 26, 0, currVal_8); });
}
function View_AddonBadgesUserBadgesPage_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "page-addon-badges-user-badges", [], null, null, null, View_AddonBadgesUserBadgesPage_0, RenderType_AddonBadgesUserBadgesPage)), core["_15" /* ɵdid */](1, 49152, null, 0, AddonBadgesUserBadgesPage, [nav_params["a" /* NavParams */], sites["a" /* CoreSitesProvider */], badges["a" /* AddonBadgesProvider */], dom["a" /* CoreDomUtilsProvider */], time["a" /* CoreTimeUtilsProvider */]], null, null)], null, null); }
var AddonBadgesUserBadgesPageNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("page-addon-badges-user-badges", AddonBadgesUserBadgesPage, View_AddonBadgesUserBadgesPage_Host_0, {}, {}, []);





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

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(237);

// CONCATENATED MODULE: ./src/addon/badges/pages/user-badges/user-badges.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonBadgesUserBadgesPageModuleNgFactory", function() { return AddonBadgesUserBadgesPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_user_badges.module,_.._.._.._.._node_modules_ionic_angular_components_action_sheet_action_sheet_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_alert_alert_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_app_app_root.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_loading_loading_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_modal_modal_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_picker_picker_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_popover_popover_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_select_select_popover_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_toast_toast_component.ngfactory,_.._.._.._components_context_menu_context_menu_popover.ngfactory,_.._.._.._components_course_picker_menu_course_picker_menu_popover.ngfactory,_.._.._.._components_recaptcha_recaptchamodal.ngfactory,_user_badges.ngfactory,_angular_common,_angular_forms,_ngx_translate_core_src_translate.loader,_ngx_translate_core_src_translate.compiler,_ngx_translate_core_src_translate.parser,_ngx_translate_core_src_missing_translation_handler,_ngx_translate_core_src_translate.service,_ngx_translate_core_src_translate.store,ionic_angular_module,_ngx_translate_core_index,_.._.._.._directives_directives.module,_.._.._.._pipes_pipes.module,_.._.._.._components_components.module,ionic_angular_util_module_loader,_user_badges PURE_IMPORTS_END */






























var AddonBadgesUserBadgesPageModuleNgFactory = /*@__PURE__*/ core["_13" /* ɵcmf */](AddonBadgesUserBadgesPageModule, [], function (_l) { return core["_25" /* ɵmod */]([core["_26" /* ɵmpd */](512, core["n" /* ComponentFactoryResolver */], core["_6" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], AddonBadgesUserBadgesPageNgFactory]], [3, core["n" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["_26" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["v" /* ɵa */]]]), core["_26" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_26" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_26" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_26" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_26" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_26" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_26" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_26" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_26" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_26" /* ɵmpd */](512, _ngx_translate_core["a" /* TranslateModule */], _ngx_translate_core["a" /* TranslateModule */], []), core["_26" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_26" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_26" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_26" /* ɵmpd */](512, AddonBadgesUserBadgesPageModule, AddonBadgesUserBadgesPageModule, []), core["_26" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_26" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_26" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], AddonBadgesUserBadgesPage, [])]); });






/***/ })

});
//# sourceMappingURL=116.js.map