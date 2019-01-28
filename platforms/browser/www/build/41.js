webpackJsonp([41],{

/***/ 1880:
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

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(13);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(2);

// EXTERNAL MODULE: ./src/core/mainmenu/providers/delegate.ts
var delegate = __webpack_require__(157);

// EXTERNAL MODULE: ./src/core/mainmenu/providers/mainmenu.ts
var mainmenu = __webpack_require__(656);

// CONCATENATED MODULE: ./src/core/mainmenu/pages/more/more.ts








/**
 * Page that displays the list of main menu options that aren't in the tabs.
 */
var more_CoreMainMenuMorePage = /*@__PURE__*/ (function () {
    function CoreMainMenuMorePage(menuDelegate, sitesProvider, navCtrl, mainMenuProvider, eventsProvider) {
        this.menuDelegate = menuDelegate;
        this.sitesProvider = sitesProvider;
        this.navCtrl = navCtrl;
        this.mainMenuProvider = mainMenuProvider;
        this.langObserver = eventsProvider.on(events["a" /* CoreEventsProvider */].LANGUAGE_CHANGED, this.loadSiteInfo.bind(this));
        this.updateSiteObserver = eventsProvider.on(events["a" /* CoreEventsProvider */].SITE_UPDATED, this.loadSiteInfo.bind(this), sitesProvider.getCurrentSiteId());
        this.loadSiteInfo();
    }
    /**
     * View loaded.
     */
    CoreMainMenuMorePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Load the handlers.
        this.subscription = this.menuDelegate.getHandlers().subscribe(function (handlers) {
            _this.handlers = handlers.slice(mainmenu["a" /* CoreMainMenuProvider */].NUM_MAIN_HANDLERS); // Remove the main handlers.
            _this.handlersLoaded = _this.menuDelegate.areHandlersLoaded();
        });
    };
    /**
     * Page destroyed.
     */
    CoreMainMenuMorePage.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * Load the site info required by the view.
     */
    CoreMainMenuMorePage.prototype.loadSiteInfo = function () {
        var _this = this;
        var currentSite = this.sitesProvider.getCurrentSite(), config = currentSite.getStoredConfig();
        this.siteInfo = currentSite.getInfo();
        this.logoutLabel = 'core.mainmenu.' + (config && config.tool_mobile_forcelogout == '1' ? 'logout' : 'changesite');
        this.showWeb = !currentSite.isFeatureDisabled('CoreMainMenuDelegate_website');
        this.showHelp = !currentSite.isFeatureDisabled('CoreMainMenuDelegate_help');
        currentSite.getDocsUrl().then(function (docsUrl) {
            _this.docsUrl = docsUrl;
        });
        this.mainMenuProvider.getCustomMenuItems().then(function (items) {
            _this.customItems = items;
        });
    };
    /**
     * Open a handler.
     *
     * @param {CoreMainMenuHandlerData} handler Handler to open.
     */
    CoreMainMenuMorePage.prototype.openHandler = function (handler) {
        this.navCtrl.push(handler.page, handler.pageParams);
    };
    /**
     * Open an embedded custom item.
     *
     * @param {CoreMainMenuCustomItem} item Item to open.
     */
    CoreMainMenuMorePage.prototype.openItem = function (item) {
        this.navCtrl.push('CoreViewerIframePage', { title: item.label, url: item.url });
    };
    /**
     * Open settings page.
     */
    CoreMainMenuMorePage.prototype.openSettings = function () {
        this.navCtrl.push('CoreSettingsListPage');
    };
    /**
     * Logout the user.
     */
    CoreMainMenuMorePage.prototype.logout = function () {
        this.sitesProvider.logout();
    };
    return CoreMainMenuMorePage;
}());





// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(33);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(29);

// CONCATENATED MODULE: ./src/core/mainmenu/pages/more/more.module.ts







var CoreMainMenuPageModule = /*@__PURE__*/ (function () {
    function CoreMainMenuPageModule() {
    }
    return CoreMainMenuPageModule;
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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/spinner/spinner.ngfactory.js
var spinner_ngfactory = __webpack_require__(180);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/spinner/spinner.js
var spinner = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/badge/badge.js
var badge = __webpack_require__(212);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

// EXTERNAL MODULE: ./src/components/icon/icon.ngfactory.js
var icon_ngfactory = __webpack_require__(194);

// EXTERNAL MODULE: ./src/components/icon/icon.ts
var icon = __webpack_require__(165);

// EXTERNAL MODULE: ./src/directives/link.ts
var directives_link = __webpack_require__(198);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(3);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var url = __webpack_require__(25);

// EXTERNAL MODULE: ./src/core/contentlinks/providers/helper.ts
var helper = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(24);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon_icon = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(420);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(1290);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(191);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(27);

// EXTERNAL MODULE: ./src/directives/back-button.ts
var back_button = __webpack_require__(635);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(1291);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(326);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(236);

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(40);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(12);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(6);

// EXTERNAL MODULE: ./src/providers/filepool.ts
var filepool = __webpack_require__(17);

// EXTERNAL MODULE: ./src/providers/app.ts
var providers_app = __webpack_require__(11);

// EXTERNAL MODULE: ./src/providers/utils/iframe.ts
var iframe = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(178);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(37);

// EXTERNAL MODULE: ./src/directives/user-link.ts
var user_link = __webpack_require__(238);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/avatar/avatar.js
var avatar = __webpack_require__(179);

// EXTERNAL MODULE: ./src/directives/external-content.ts
var external_content = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(163);

// CONCATENATED MODULE: ./src/core/mainmenu/pages/more/more.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,_.._.._.._.._node_modules_ionic_angular_components_spinner_spinner.ngfactory,ionic_angular_components_spinner_spinner,ionic_angular_components_badge_badge,_angular_common,_ngx_translate_core_src_translate.pipe,_ngx_translate_core_src_translate.service,_.._.._.._components_icon_icon.ngfactory,_.._.._.._components_icon_icon,_.._.._.._directives_link,_.._.._.._providers_utils_dom,_.._.._.._providers_utils_utils,_.._.._.._providers_sites,_.._.._.._providers_utils_url,_.._.._contentlinks_providers_helper,ionic_angular_navigation_nav_controller,ionic_angular_components_content_content,_.._.._.._components_split_view_split_view,ionic_angular_components_icon_icon,ionic_angular_components_toolbar_toolbar_header,ionic_angular_navigation_view_controller,_.._.._.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,_.._.._.._directives_back_button,ionic_angular_platform_platform,_.._.._.._providers_events,_.._.._.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_toolbar,_.._.._.._directives_format_text,_.._.._.._providers_utils_text,_.._.._.._providers_logger,_.._.._.._providers_filepool,_.._.._.._providers_app,_.._.._.._providers_utils_iframe,_.._.._.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_platform_dom_controller,ionic_angular_platform_keyboard,ionic_angular_components_list_list,ionic_angular_gestures_gesture_controller,_.._.._.._directives_user_link,ionic_angular_components_avatar_avatar,_.._.._.._directives_external_content,ionic_angular_components_item_item_divider,_more,_.._providers_delegate,_.._providers_mainmenu PURE_IMPORTS_END */






















































var styles_CoreMainMenuMorePage = [];
var RenderType_CoreMainMenuMorePage = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreMainMenuMorePage, data: {} });

function View_CoreMainMenuMorePage_1(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 9, "ion-item", [["class", "item item-block"], ["text-center", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 7, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 8, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 9, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 2, 1, "ion-spinner", [], [[2, "spinner-paused", null]], null, null, spinner_ngfactory["b" /* View_Spinner_0 */], spinner_ngfactory["a" /* RenderType_Spinner */])), core["_15" /* ɵdid */](8, 114688, null, 0, spinner["a" /* Spinner */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n        "]))], function (_ck, _v) { _ck(_v, 8, 0); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 8)._paused; _ck(_v, 7, 0, currVal_0); }); }
function View_CoreMainMenuMorePage_3(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "ion-badge", [["item-end", ""]], [[8, "hidden", 0]], null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, badge["a" /* Badge */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), (_l()(), core["_40" /* ɵted */](2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.parent.context.$implicit.loading || !_v.parent.context.$implicit.badge); _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.parent.context.$implicit.badge; _ck(_v, 2, 0, currVal_1); }); }
function View_CoreMainMenuMorePage_4(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "ion-spinner", [["item-end", ""]], [[2, "spinner-paused", null]], null, null, spinner_ngfactory["b" /* View_Spinner_0 */], spinner_ngfactory["a" /* RenderType_Spinner */])), core["_15" /* ɵdid */](1, 114688, null, 0, spinner["a" /* Spinner */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 1)._paused; _ck(_v, 0, 0, currVal_0); }); }
function View_CoreMainMenuMorePage_2(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 22, "a", [["class", "item item-block"], ["detail-push", ""], ["ion-item", ""]], [[8, "title", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.openHandler(_v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 278528, null, 0, common["i" /* NgClass */], [core["v" /* IterableDiffers */], core["w" /* KeyValueDiffers */], core["p" /* ElementRef */], core["L" /* Renderer2 */]], { ngClass: [0, "ngClass"] }, null), core["_31" /* ɵpad */](2, 2), core["_15" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 10, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 11, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 12, { _icons: 1 }), core["_15" /* ɵdid */](7, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_16" /* ɵeld */](10, 0, null, 0, 1, "core-icon", [["item-start", ""]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_15" /* ɵdid */](11, 114688, null, 0, icon["a" /* CoreIconComponent */], [core["p" /* ElementRef */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_16" /* ɵeld */](13, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](14, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, 4, 1, null, View_CoreMainMenuMorePage_3)), core["_15" /* ɵdid */](18, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, 4, 1, null, View_CoreMainMenuMorePage_4)), core["_15" /* ɵdid */](21, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n        "]))], function (_ck, _v) { var currVal_1 = _ck(_v, 2, 0, "core-moremenu-handler", _v.context.$implicit.class); _ck(_v, 1, 0, currVal_1); var currVal_2 = _v.context.$implicit.icon; _ck(_v, 11, 0, currVal_2); var currVal_4 = _v.context.$implicit.showBadge; _ck(_v, 18, 0, currVal_4); var currVal_5 = (_v.context.$implicit.showBadge && _v.context.$implicit.loading); _ck(_v, 21, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 0, 0, core["_29" /* ɵnov */](_v, 8).transform(_v.context.$implicit.title)), ""); _ck(_v, 0, 0, currVal_0); var currVal_3 = core["_41" /* ɵunv */](_v, 14, 0, core["_29" /* ɵnov */](_v, 15).transform(_v.context.$implicit.title)); _ck(_v, 14, 0, currVal_3); });
}
function View_CoreMainMenuMorePage_6(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 13, "a", [["class", "item item-block"], ["core-link", ""], ["ion-item", ""]], [[8, "href", 4], [8, "title", 0]], null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 81920, null, 0, directives_link["a" /* CoreLinkDirective */], [core["p" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */], utils["a" /* CoreUtilsProvider */], sites["a" /* CoreSitesProvider */], url["a" /* CoreUrlUtilsProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]]], { capture: [0, "capture"], inApp: [1, "inApp"] }, null), core["_15" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 13, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 14, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 15, { _icons: 1 }), core["_15" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](8, 0, null, 0, 1, "core-icon", [["item-start", ""]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_15" /* ɵdid */](9, 114688, null, 0, icon["a" /* CoreIconComponent */], [core["p" /* ElementRef */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](11, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](12, null, ["", ""])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "]))], function (_ck, _v) { var currVal_2 = (_v.parent.context.$implicit.type == "app"); var currVal_3 = (_v.parent.context.$implicit.type == "inappbrowser"); _ck(_v, 1, 0, currVal_2, currVal_3); var currVal_4 = _v.parent.context.$implicit.icon; _ck(_v, 9, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.url; var currVal_1 = core["_19" /* ɵinlineInterpolate */](1, "", _v.parent.context.$implicit.label, ""); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_5 = _v.parent.context.$implicit.label; _ck(_v, 12, 0, currVal_5); }); }
function View_CoreMainMenuMorePage_7(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 12, "a", [["class", "item item-block"], ["ion-item", ""]], [[8, "title", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.openItem(_v.parent.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 16, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 17, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 18, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 0, 1, "core-icon", [["item-start", ""]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_15" /* ɵdid */](8, 114688, null, 0, icon["a" /* CoreIconComponent */], [core["p" /* ElementRef */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](10, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](11, null, ["", ""])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "]))], function (_ck, _v) { var currVal_1 = _v.parent.context.$implicit.icon; _ck(_v, 8, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = core["_19" /* ɵinlineInterpolate */](1, "", _v.parent.context.$implicit.label, ""); _ck(_v, 0, 0, currVal_0); var currVal_2 = _v.parent.context.$implicit.label; _ck(_v, 11, 0, currVal_2); });
}
function View_CoreMainMenuMorePage_5(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 7, "div", [["class", "core-moremenu-customitem"]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreMainMenuMorePage_6)), core["_15" /* ɵdid */](3, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreMainMenuMorePage_7)), core["_15" /* ɵdid */](6, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit.type != "embedded"); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_v.context.$implicit.type == "embedded"); _ck(_v, 6, 0, currVal_1); }, null); }
function View_CoreMainMenuMorePage_8(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 15, "a", [["autoLogin", "yes"], ["class", "item item-block"], ["core-link", ""], ["ion-item", ""]], [[8, "href", 4], [8, "title", 0]], null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 81920, null, 0, directives_link["a" /* CoreLinkDirective */], [core["p" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */], utils["a" /* CoreUtilsProvider */], sites["a" /* CoreSitesProvider */], url["a" /* CoreUrlUtilsProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]]], { autoLogin: [0, "autoLogin"] }, null), core["_15" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 19, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 20, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 21, { _icons: 1 }), core["_15" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_16" /* ɵeld */](9, 0, null, 0, 1, "ion-icon", [["item-start", ""], ["name", "globe"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](10, 147456, [[21, 4]], 0, icon_icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_16" /* ɵeld */](12, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](13, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n        "]))], function (_ck, _v) { var currVal_2 = "yes"; _ck(_v, 1, 0, currVal_2); var currVal_4 = "globe"; _ck(_v, 10, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.siteInfo.siteurl; var currVal_1 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 0, 1, core["_29" /* ɵnov */](_v, 7).transform("core.mainmenu.website")), ""); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = core["_29" /* ɵnov */](_v, 10)._hidden; _ck(_v, 9, 0, currVal_3); var currVal_5 = core["_41" /* ɵunv */](_v, 13, 0, core["_29" /* ɵnov */](_v, 14).transform("core.mainmenu.website")); _ck(_v, 13, 0, currVal_5); }); }
function View_CoreMainMenuMorePage_9(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 15, "a", [["autoLogin", "no"], ["class", "item item-block"], ["core-link", ""], ["ion-item", ""]], [[8, "href", 4], [8, "title", 0]], null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 81920, null, 0, directives_link["a" /* CoreLinkDirective */], [core["p" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */], utils["a" /* CoreUtilsProvider */], sites["a" /* CoreSitesProvider */], url["a" /* CoreUrlUtilsProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]]], { autoLogin: [0, "autoLogin"] }, null), core["_15" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 22, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 23, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 24, { _icons: 1 }), core["_15" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_16" /* ɵeld */](9, 0, null, 0, 1, "ion-icon", [["item-start", ""], ["name", "help-buoy"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](10, 147456, [[24, 4]], 0, icon_icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_16" /* ɵeld */](12, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](13, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n        "]))], function (_ck, _v) { var currVal_2 = "no"; _ck(_v, 1, 0, currVal_2); var currVal_4 = "help-buoy"; _ck(_v, 10, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.docsUrl; var currVal_1 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 0, 1, core["_29" /* ɵnov */](_v, 7).transform("core.mainmenu.help")), ""); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = core["_29" /* ɵnov */](_v, 10)._hidden; _ck(_v, 9, 0, currVal_3); var currVal_5 = core["_41" /* ɵunv */](_v, 13, 0, core["_29" /* ɵnov */](_v, 14).transform("core.mainmenu.help")); _ck(_v, 13, 0, currVal_5); }); }
function View_CoreMainMenuMorePage_0(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 12, "ion-header", [], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 8, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_15" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), core["_15" /* ɵdid */](5, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_15" /* ɵdid */](8, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_16" /* ɵeld */](9, 0, null, 0, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](10, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], providers_app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_16" /* ɵeld */](14, 0, null, null, 81, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_15" /* ɵdid */](15, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["K" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["D" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_16" /* ɵeld */](17, 0, null, 1, 77, "ion-list", [], null, null, null, null, null)), core["_15" /* ɵdid */](18, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_16" /* ɵeld */](20, 0, null, null, 19, "a", [["class", "item item-block"], ["core-user-link", ""], ["ion-item", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](21, 81920, null, 0, user_link["a" /* CoreUserLinkDirective */], [core["p" /* ElementRef */], [2, nav_controller["a" /* NavController */]]], { userId: [0, "userId"] }, null), core["_15" /* ɵdid */](22, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_15" /* ɵdid */](26, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_16" /* ɵeld */](28, 0, null, 0, 7, "ion-avatar", [["item-start", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](29, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](31, 0, null, null, 3, "img", [["core-external-content", ""], ["role", "presentation"]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), core["_15" /* ɵdid */](32, 4210688, null, 0, external_content["a" /* CoreExternalContentDirective */], [core["p" /* ElementRef */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], platform["a" /* Platform */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], providers_app["a" /* CoreAppProvider */], utils["a" /* CoreUtilsProvider */]], null, null), core["_33" /* ɵpod */](33, { $a: 0 }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_16" /* ɵeld */](37, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](38, null, ["", ""])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_16" /* ɵeld */](41, 0, null, null, 5, "ion-item-divider", [["class", "item item-divider"], ["color", "light"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](42, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 6, { _icons: 1 }), core["_15" /* ɵdid */](46, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreMainMenuMorePage_1)), core["_15" /* ɵdid */](49, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreMainMenuMorePage_2)), core["_15" /* ɵdid */](52, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreMainMenuMorePage_5)), core["_15" /* ɵdid */](55, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreMainMenuMorePage_8)), core["_15" /* ɵdid */](58, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreMainMenuMorePage_9)), core["_15" /* ɵdid */](61, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_16" /* ɵeld */](63, 0, null, null, 14, "a", [["class", "item item-block"], ["ion-item", ""]], [[8, "title", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.openSettings() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](64, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 25, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 26, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 27, { _icons: 1 }), core["_15" /* ɵdid */](68, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_16" /* ɵeld */](71, 0, null, 0, 1, "ion-icon", [["item-start", ""], ["name", "cog"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](72, 147456, [[27, 4]], 0, icon_icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_16" /* ɵeld */](74, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](75, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_16" /* ɵeld */](79, 0, null, null, 14, "a", [["class", "item item-block"], ["ion-item", ""]], [[8, "title", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.logout() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](80, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 28, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 29, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 30, { _icons: 1 }), core["_15" /* ɵdid */](84, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_16" /* ɵeld */](87, 0, null, 0, 1, "ion-icon", [["item-start", ""], ["name", "log-out"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](88, 147456, [[30, 4]], 0, icon_icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_16" /* ɵeld */](90, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](91, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 5, 0); var currVal_2 = _co.siteInfo.sitename; _ck(_v, 10, 0, currVal_2); var currVal_5 = core["_19" /* ɵinlineInterpolate */](1, "", _co.siteInfo.userid, ""); _ck(_v, 21, 0, currVal_5); var currVal_9 = "light"; _ck(_v, 42, 0, currVal_9); var currVal_10 = "light"; _ck(_v, 46, 0, currVal_10); var currVal_11 = ((!_co.handlers || !_co.handlers.length) && !_co.handlersLoaded); _ck(_v, 49, 0, currVal_11); var currVal_12 = _co.handlers; _ck(_v, 52, 0, currVal_12); var currVal_13 = _co.customItems; _ck(_v, 55, 0, currVal_13); var currVal_14 = _co.showWeb; _ck(_v, 58, 0, currVal_14); var currVal_15 = _co.showHelp; _ck(_v, 61, 0, currVal_15); var currVal_18 = "cog"; _ck(_v, 72, 0, currVal_18); var currVal_22 = "log-out"; _ck(_v, 88, 0, currVal_22); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_29" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_29" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = core["_29" /* ɵnov */](_v, 15).statusbarPadding; var currVal_4 = core["_29" /* ɵnov */](_v, 15)._hasRefresher; _ck(_v, 14, 0, currVal_3, currVal_4); var currVal_6 = _co.siteInfo.userpictureurl; var currVal_7 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 31, 1, core["_29" /* ɵnov */](_v, 34).transform("core.pictureof", _ck(_v, 33, 0, _co.siteInfo.fullname))), ""); _ck(_v, 31, 0, currVal_6, currVal_7); var currVal_8 = _co.siteInfo.fullname; _ck(_v, 38, 0, currVal_8); var currVal_16 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 63, 0, core["_29" /* ɵnov */](_v, 69).transform("core.mainmenu.appsettings")), ""); _ck(_v, 63, 0, currVal_16); var currVal_17 = core["_29" /* ɵnov */](_v, 72)._hidden; _ck(_v, 71, 0, currVal_17); var currVal_19 = core["_41" /* ɵunv */](_v, 75, 0, core["_29" /* ɵnov */](_v, 76).transform("core.mainmenu.appsettings")); _ck(_v, 75, 0, currVal_19); var currVal_20 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 79, 0, core["_29" /* ɵnov */](_v, 85).transform(_co.logoutLabel)), ""); _ck(_v, 79, 0, currVal_20); var currVal_21 = core["_29" /* ɵnov */](_v, 88)._hidden; _ck(_v, 87, 0, currVal_21); var currVal_23 = core["_41" /* ɵunv */](_v, 91, 0, core["_29" /* ɵnov */](_v, 92).transform(_co.logoutLabel)); _ck(_v, 91, 0, currVal_23); });
}
function View_CoreMainMenuMorePage_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "page-core-mainmenu-more", [], null, null, null, View_CoreMainMenuMorePage_0, RenderType_CoreMainMenuMorePage)), core["_15" /* ɵdid */](1, 180224, null, 0, more_CoreMainMenuMorePage, [delegate["a" /* CoreMainMenuDelegate */], sites["a" /* CoreSitesProvider */], nav_controller["a" /* NavController */], mainmenu["a" /* CoreMainMenuProvider */], events["a" /* CoreEventsProvider */]], null, null)], null, null); }
var CoreMainMenuMorePageNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("page-core-mainmenu-more", more_CoreMainMenuMorePage, View_CoreMainMenuMorePage_Host_0, {}, {}, []);





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

// CONCATENATED MODULE: ./src/core/mainmenu/pages/more/more.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreMainMenuPageModuleNgFactory", function() { return CoreMainMenuPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_more.module,_.._.._.._.._node_modules_ionic_angular_components_action_sheet_action_sheet_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_alert_alert_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_app_app_root.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_loading_loading_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_modal_modal_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_picker_picker_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_popover_popover_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_select_select_popover_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_toast_toast_component.ngfactory,_.._.._.._components_context_menu_context_menu_popover.ngfactory,_.._.._.._components_course_picker_menu_course_picker_menu_popover.ngfactory,_.._.._.._components_recaptcha_recaptchamodal.ngfactory,_more.ngfactory,_angular_common,_angular_forms,_ngx_translate_core_src_translate.loader,_ngx_translate_core_src_translate.compiler,_ngx_translate_core_src_translate.parser,_ngx_translate_core_src_missing_translation_handler,_ngx_translate_core_src_translate.service,_ngx_translate_core_src_translate.store,ionic_angular_module,_ngx_translate_core_index,_.._.._.._directives_directives.module,_.._.._.._pipes_pipes.module,_.._.._.._components_components.module,ionic_angular_util_module_loader,_more PURE_IMPORTS_END */






























var CoreMainMenuPageModuleNgFactory = /*@__PURE__*/ core["_13" /* ɵcmf */](CoreMainMenuPageModule, [], function (_l) { return core["_25" /* ɵmod */]([core["_26" /* ɵmpd */](512, core["n" /* ComponentFactoryResolver */], core["_6" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], CoreMainMenuMorePageNgFactory]], [3, core["n" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["_26" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["v" /* ɵa */]]]), core["_26" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_26" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_26" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_26" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_26" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_26" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_26" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_26" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_26" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_26" /* ɵmpd */](512, _ngx_translate_core["a" /* TranslateModule */], _ngx_translate_core["a" /* TranslateModule */], []), core["_26" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_26" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_26" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_26" /* ɵmpd */](512, CoreMainMenuPageModule, CoreMainMenuPageModule, []), core["_26" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_26" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_26" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], more_CoreMainMenuMorePage, [])]); });






/***/ })

});
//# sourceMappingURL=41.js.map