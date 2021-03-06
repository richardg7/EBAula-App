webpackJsonp([7],{

/***/ 1795:
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

// EXTERNAL MODULE: ./src/addon/messages/providers/messages.ts
var messages = __webpack_require__(168);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(35);

// EXTERNAL MODULE: ./src/components/tabs/tabs.ts
var tabs = __webpack_require__(137);

// CONCATENATED MODULE: ./src/addon/messages/pages/index/index.ts








/**
 * Page that displays the messages index page.
 */
var index_AddonMessagesIndexPage = /*@__PURE__*/ (function () {
    function AddonMessagesIndexPage(eventsProvider, sitesProvider) {
        var _this = this;
        this.siteId = sitesProvider.getCurrentSiteId();
        // Update split view or navigate.
        this.loadSplitViewObserver = eventsProvider.on(messages["a" /* AddonMessagesProvider */].SPLIT_VIEW_LOAD_EVENT, function (data) {
            if (data.discussion && (_this.splitviewCtrl.isOn() || !data.onlyWithSplitView)) {
                _this.gotoDiscussion(data.discussion, data.message);
            }
        }, this.siteId);
    }
    /**
     * Navigate to a particular discussion.
     *
     * @param {number} discussionUserId Discussion Id to load.
     * @param {number} [messageId]      Message to scroll after loading the discussion. Used when searching.
     */
    AddonMessagesIndexPage.prototype.gotoDiscussion = function (discussionUserId, messageId) {
        var params = {
            userId: discussionUserId
        };
        if (messageId) {
            params['message'] = messageId;
        }
        this.splitviewCtrl.push('AddonMessagesDiscussionPage', params);
    };
    /**
     * User entered the page.
     */
    AddonMessagesIndexPage.prototype.ionViewDidEnter = function () {
        this.tabsComponent && this.tabsComponent.ionViewDidEnter();
    };
    /**
     * User left the page.
     */
    AddonMessagesIndexPage.prototype.ionViewDidLeave = function () {
        this.tabsComponent && this.tabsComponent.ionViewDidLeave();
    };
    /**
     * Page destroyed.
     */
    AddonMessagesIndexPage.prototype.ngOnDestroy = function () {
        this.loadSplitViewObserver && this.loadSplitViewObserver.off();
    };
    return AddonMessagesIndexPage;
}());





// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(33);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(29);

// EXTERNAL MODULE: ./src/addon/messages/components/components.module.ts
var components_components_module = __webpack_require__(1904);

// CONCATENATED MODULE: ./src/addon/messages/pages/index/index.module.ts








var AddonMessagesIndexPageModule = /*@__PURE__*/ (function () {
    function AddonMessagesIndexPageModule() {
    }
    return AddonMessagesIndexPageModule;
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

// EXTERNAL MODULE: ./src/components/search-box/search-box.ngfactory.js
var search_box_ngfactory = __webpack_require__(1324);

// EXTERNAL MODULE: ./src/components/search-box/search-box.ts
var search_box = __webpack_require__(433);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(30);

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ngfactory.js
var empty_box_ngfactory = __webpack_require__(164);

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ts
var empty_box = __webpack_require__(134);

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

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var url = __webpack_require__(25);

// EXTERNAL MODULE: ./src/providers/app.ts
var app = __webpack_require__(11);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(163);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/note/note.js
var note = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(9);

// EXTERNAL MODULE: ./src/pipes/date-day-or-time.ts
var date_day_or_time = __webpack_require__(334);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(178);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app_app = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(36);

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

// EXTERNAL MODULE: ./src/addon/messages/components/discussions/discussions.ts
var discussions = __webpack_require__(1905);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(60);

// EXTERNAL MODULE: ./src/addon/pushnotifications/providers/delegate.ts
var delegate = __webpack_require__(218);

// CONCATENATED MODULE: ./src/addon/messages/components/discussions/discussions.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._components_search_box_search_box.ngfactory,_.._.._.._components_search_box_search_box,_ngx_translate_core_src_translate.service,_.._.._.._providers_utils_utils,_ngx_translate_core_src_translate.pipe,_.._.._.._components_empty_box_empty_box.ngfactory,_.._.._.._components_empty_box_empty_box,_.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_avatar_avatar,_.._.._.._directives_external_content,_.._.._.._providers_logger,_.._.._.._providers_filepool,ionic_angular_platform_platform,_.._.._.._providers_sites,_.._.._.._providers_utils_dom,_.._.._.._providers_utils_url,_.._.._.._providers_app,_.._.._.._directives_format_text,_.._.._.._providers_utils_text,_.._.._.._core_contentlinks_providers_helper,ionic_angular_navigation_nav_controller,ionic_angular_components_content_content,_.._.._.._components_split_view_split_view,_.._.._.._providers_utils_iframe,_.._.._.._providers_events,ionic_angular_components_list_list,ionic_angular_gestures_gesture_controller,ionic_angular_platform_dom_controller,ionic_angular_components_item_item_divider,ionic_angular_components_note_note,_angular_common,_.._.._.._pipes_date_day_or_time,_.._.._.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_app_app,ionic_angular_platform_keyboard,ionic_angular_navigation_view_controller,ionic_angular_components_refresher_refresher,_.._.._.._.._node_modules_ionic_angular_components_refresher_refresher_content.ngfactory,ionic_angular_components_refresher_refresher_content,_.._.._.._components_loading_loading.ngfactory,_.._.._.._components_loading_loading,_discussions,_.._providers_messages,ionic_angular_navigation_nav_params,_.._.._pushnotifications_providers_delegate PURE_IMPORTS_END */



















































var styles_AddonMessagesDiscussionsComponent = [];
var RenderType_AddonMessagesDiscussionsComponent = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonMessagesDiscussionsComponent, data: {} });

function View_AddonMessagesDiscussionsComponent_1(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "core-search-box", [["autocorrect", "off"], ["lengthCheck", "2"], ["spellcheck", "false"]], null, [[null, "onSubmit"], [null, "onClear"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("onSubmit" === en)) {
                var pd_0 = (_co.searchMessage($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("onClear" === en)) {
                var pd_1 = (_co.clearSearch($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, search_box_ngfactory["b" /* View_CoreSearchBoxComponent_0 */], search_box_ngfactory["a" /* RenderType_CoreSearchBoxComponent */])), core["_15" /* ɵdid */](1, 114688, null, 0, search_box["a" /* CoreSearchBoxComponent */], [translate_service["a" /* TranslateService */], utils["a" /* CoreUtilsProvider */]], { placeholder: [0, "placeholder"], autocorrect: [1, "autocorrect"], spellcheck: [2, "spellcheck"], lengthCheck: [3, "lengthCheck"], disabled: [4, "disabled"] }, { onSubmit: "onSubmit", onClear: "onClear" }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, core["_29" /* ɵnov */](_v, 2).transform("addon.messages.message")); var currVal_1 = "off"; var currVal_2 = "false"; var currVal_3 = "2"; var currVal_4 = !_co.loaded; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }, null);
}
function View_AddonMessagesDiscussionsComponent_2(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "core-empty-box", [["icon", "chatbubbles"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_15" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], icon: [1, "icon"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, core["_29" /* ɵnov */](_v, 2).transform("addon.messages.nomessages")); var currVal_1 = "chatbubbles"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AddonMessagesDiscussionsComponent_3(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "core-empty-box", [["icon", "search"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_15" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], icon: [1, "icon"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, core["_29" /* ɵnov */](_v, 2).transform("core.noresults")); var currVal_1 = "search"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AddonMessagesDiscussionsComponent_5(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 23, "a", [["class", "item item-block"], ["detail-none", ""], ["ion-item", ""], ["text-wrap", ""]], [[8, "title", 0], [2, "core-split-item-selected", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.gotoDiscussion(_v.context.$implicit.userid, _v.context.$implicit.messageid) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 6, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 0, 7, "ion-avatar", [["item-start", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](8, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](10, 0, null, null, 3, "img", [["core-external-content", ""], ["onError", "this.src='assets/img/user-avatar.png'"]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), core["_15" /* ɵdid */](11, 4210688, null, 0, external_content["a" /* CoreExternalContentDirective */], [core["p" /* ElementRef */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], platform["a" /* Platform */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], app["a" /* CoreAppProvider */], utils["a" /* CoreUtilsProvider */]], null, null), core["_33" /* ɵpod */](12, { $a: 0 }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](16, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_16" /* ɵeld */](17, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](18, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](20, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_16" /* ɵeld */](21, 0, null, null, 1, "core-format-text", [["clean", "true"], ["singleLine", "true"]], null, null, null, null, null)), core["_15" /* ɵdid */](22, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"], clean: [1, "clean"], singleLine: [2, "singleLine"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "]))], function (_ck, _v) { var currVal_4 = _v.context.$implicit.fullname; _ck(_v, 18, 0, currVal_4); var currVal_5 = _v.context.$implicit.lastmessage; var currVal_6 = "true"; var currVal_7 = "true"; _ck(_v, 22, 0, currVal_5, currVal_6, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit.fullname; var currVal_1 = (_v.context.$implicit.userid == _co.discussionUserId); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = core["_19" /* ɵinlineInterpolate */](1, "", _v.context.$implicit.profileimageurl, ""); var currVal_3 = core["_41" /* ɵunv */](_v, 10, 1, core["_29" /* ɵnov */](_v, 13).transform("core.pictureof", _ck(_v, 12, 0, _v.context.$implicit.fullname))); _ck(_v, 10, 0, currVal_2, currVal_3); });
}
function View_AddonMessagesDiscussionsComponent_4(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 21, "ion-list", [["no-margin", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 14, "ion-item-divider", [["class", "item item-divider"], ["color", "light"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_15" /* ɵdid */](8, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](10, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](11, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](14, 0, null, 4, 2, "ion-note", [["item-end", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](15, 16384, null, 0, note["a" /* Note */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), (_l()(), core["_40" /* ɵted */](16, null, ["", ""])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonMessagesDiscussionsComponent_5)), core["_15" /* ɵdid */](20, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "light"; _ck(_v, 4, 0, currVal_0); var currVal_1 = "light"; _ck(_v, 8, 0, currVal_1); var currVal_4 = _co.search.results; _ck(_v, 20, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = core["_41" /* ɵunv */](_v, 11, 0, core["_29" /* ɵnov */](_v, 12).transform("core.searchresults")); _ck(_v, 11, 0, currVal_2); var currVal_3 = _co.search.results.length; _ck(_v, 16, 0, currVal_3); }); }
function View_AddonMessagesDiscussionsComponent_9(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 0, "span", [["class", "core-primary-circle"]], null, null, null, null, null))], null, null); }
function View_AddonMessagesDiscussionsComponent_10(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](1, null, ["", ""])), core["_34" /* ɵppd */](2, 1)], null, function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, _ck(_v, 2, 0, core["_29" /* ɵnov */](_v.parent.parent.parent.parent, 0), (_v.parent.parent.context.$implicit.message.timecreated / 1000))); _ck(_v, 1, 0, currVal_0); }); }
function View_AddonMessagesDiscussionsComponent_8(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 8, "ion-note", [], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, note["a" /* Note */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonMessagesDiscussionsComponent_9)), core["_15" /* ɵdid */](4, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonMessagesDiscussionsComponent_10)), core["_15" /* ɵdid */](7, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "]))], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.unread; _ck(_v, 4, 0, currVal_0); var currVal_1 = (_v.parent.context.$implicit.message.timecreated > 0); _ck(_v, 7, 0, currVal_1); }, null); }
function View_AddonMessagesDiscussionsComponent_7(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 28, "a", [["class", "item item-block"], ["detail-none", ""], ["ion-item", ""], ["text-wrap", ""]], [[8, "title", 0], [2, "core-split-item-selected", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.gotoDiscussion(_v.context.$implicit.message.user) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 7, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 8, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 9, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 0, 7, "ion-avatar", [["item-start", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](8, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](10, 0, null, null, 3, "img", [["core-external-content", ""], ["onError", "this.src='assets/img/user-avatar.png'"]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), core["_15" /* ɵdid */](11, 4210688, null, 0, external_content["a" /* CoreExternalContentDirective */], [core["p" /* ElementRef */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], platform["a" /* Platform */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], app["a" /* CoreAppProvider */], utils["a" /* CoreUtilsProvider */]], null, null), core["_33" /* ɵpod */](12, { $a: 0 }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](16, 0, null, 2, 7, "h2", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](18, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](19, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonMessagesDiscussionsComponent_8)), core["_15" /* ɵdid */](22, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](25, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_16" /* ɵeld */](26, 0, null, null, 1, "core-format-text", [["clean", "true"], ["singleLine", "true"]], null, null, null, null, null)), core["_15" /* ɵdid */](27, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"], clean: [1, "clean"], singleLine: [2, "singleLine"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "]))], function (_ck, _v) { var currVal_4 = _v.context.$implicit.fullname; _ck(_v, 19, 0, currVal_4); var currVal_5 = ((_v.context.$implicit.message.timecreated > 0) || _v.context.$implicit.unread); _ck(_v, 22, 0, currVal_5); var currVal_6 = _v.context.$implicit.message.message; var currVal_7 = "true"; var currVal_8 = "true"; _ck(_v, 27, 0, currVal_6, currVal_7, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit.fullname; var currVal_1 = (_v.context.$implicit.message.user == _co.discussionUserId); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = core["_19" /* ɵinlineInterpolate */](1, "", _v.context.$implicit.profileimageurl, ""); var currVal_3 = core["_41" /* ɵunv */](_v, 10, 1, core["_29" /* ɵnov */](_v, 13).transform("core.pictureof", _ck(_v, 12, 0, _v.context.$implicit.fullname))); _ck(_v, 10, 0, currVal_2, currVal_3); });
}
function View_AddonMessagesDiscussionsComponent_6(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, "ion-list", [["no-margin", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonMessagesDiscussionsComponent_7)), core["_15" /* ɵdid */](4, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.discussions; _ck(_v, 4, 0, currVal_0); }, null); }
function View_AddonMessagesDiscussionsComponent_0(_l) {
    return core["_42" /* ɵvid */](0, [core["_32" /* ɵpid */](0, date_day_or_time["a" /* CoreDateDayOrTimePipe */], [logger["a" /* CoreLoggerProvider */], translate_service["a" /* TranslateService */]]), (_l()(), core["_16" /* ɵeld */](1, 0, null, null, 29, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_15" /* ɵdid */](2, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["K" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["D" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_16" /* ɵeld */](4, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ionRefresh" === en)) {
                var pd_0 = (_co.refreshData($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_15" /* ɵdid */](5, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["D" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_15" /* ɵdid */](8, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n\n    "])), (_l()(), core["_11" /* ɵand */](16777216, null, 1, 1, null, View_AddonMessagesDiscussionsComponent_1)), core["_15" /* ɵdid */](13, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n\n    "])), (_l()(), core["_16" /* ɵeld */](15, 0, null, 1, 14, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_15" /* ɵdid */](16, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["p" /* ElementRef */], events["a" /* CoreEventsProvider */], utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"], message: [1, "message"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_AddonMessagesDiscussionsComponent_2)), core["_15" /* ɵdid */](19, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_AddonMessagesDiscussionsComponent_3)), core["_15" /* ɵdid */](22, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_AddonMessagesDiscussionsComponent_4)), core["_15" /* ɵdid */](25, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_AddonMessagesDiscussionsComponent_6)), core["_15" /* ɵdid */](28, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.loaded; _ck(_v, 5, 0, currVal_4); var currVal_6 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 8, 0, core["_29" /* ɵnov */](_v, 9).transform("core.pulltorefresh")), ""); _ck(_v, 8, 0, currVal_6); var currVal_7 = _co.search.enabled; _ck(_v, 13, 0, currVal_7); var currVal_8 = _co.loaded; var currVal_9 = _co.loadingMessage; _ck(_v, 16, 0, currVal_8, currVal_9); var currVal_10 = ((!_co.discussions || (_co.discussions.length <= 0)) && !_co.search.showResults); _ck(_v, 19, 0, currVal_10); var currVal_11 = ((!_co.search.results || (_co.search.results.length <= 0)) && _co.search.showResults); _ck(_v, 22, 0, currVal_11); var currVal_12 = _co.search.showResults; _ck(_v, 25, 0, currVal_12); var currVal_13 = !_co.search.showResults; _ck(_v, 28, 0, currVal_13); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 2).statusbarPadding; var currVal_1 = core["_29" /* ɵnov */](_v, 2)._hasRefresher; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = (core["_29" /* ɵnov */](_v, 5).state !== "inactive"); var currVal_3 = core["_29" /* ɵnov */](_v, 5)._top; _ck(_v, 4, 0, currVal_2, currVal_3); var currVal_5 = core["_29" /* ɵnov */](_v, 8).r.state; _ck(_v, 7, 0, currVal_5); });
}
function View_AddonMessagesDiscussionsComponent_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "addon-messages-discussions", [], null, null, null, View_AddonMessagesDiscussionsComponent_0, RenderType_AddonMessagesDiscussionsComponent)), core["_15" /* ɵdid */](1, 245760, null, 0, discussions["a" /* AddonMessagesDiscussionsComponent */], [events["a" /* CoreEventsProvider */], sites["a" /* CoreSitesProvider */], translate_service["a" /* TranslateService */], messages["a" /* AddonMessagesProvider */], dom["a" /* CoreDomUtilsProvider */], nav_params["a" /* NavParams */], app["a" /* CoreAppProvider */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], delegate["a" /* AddonPushNotificationsDelegate */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AddonMessagesDiscussionsComponentNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("addon-messages-discussions", discussions["a" /* AddonMessagesDiscussionsComponent */], View_AddonMessagesDiscussionsComponent_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./src/addon/messages/components/contacts/contacts.ts
var contacts = __webpack_require__(1906);

// CONCATENATED MODULE: ./src/addon/messages/components/contacts/contacts.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._components_empty_box_empty_box.ngfactory,_.._.._.._components_empty_box_empty_box,_ngx_translate_core_src_translate.pipe,_ngx_translate_core_src_translate.service,_.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_avatar_avatar,_.._.._.._directives_external_content,_.._.._.._providers_logger,_.._.._.._providers_filepool,ionic_angular_platform_platform,_.._.._.._providers_sites,_.._.._.._providers_utils_dom,_.._.._.._providers_utils_url,_.._.._.._providers_app,_.._.._.._providers_utils_utils,_.._.._.._directives_format_text,_.._.._.._providers_utils_text,_.._.._.._core_contentlinks_providers_helper,ionic_angular_navigation_nav_controller,ionic_angular_components_content_content,_.._.._.._components_split_view_split_view,_.._.._.._providers_utils_iframe,_.._.._.._providers_events,_angular_common,ionic_angular_components_item_item_divider,ionic_angular_components_note_note,ionic_angular_components_list_list,ionic_angular_gestures_gesture_controller,ionic_angular_platform_dom_controller,_.._.._.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_app_app,ionic_angular_platform_keyboard,ionic_angular_navigation_view_controller,ionic_angular_components_refresher_refresher,_.._.._.._.._node_modules_ionic_angular_components_refresher_refresher_content.ngfactory,ionic_angular_components_refresher_refresher_content,_.._.._.._components_search_box_search_box.ngfactory,_.._.._.._components_search_box_search_box,_.._.._.._components_loading_loading.ngfactory,_.._.._.._components_loading_loading,_contacts,_.._providers_messages,ionic_angular_navigation_nav_params PURE_IMPORTS_END */

















































var styles_AddonMessagesContactsComponent = [];
var RenderType_AddonMessagesContactsComponent = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonMessagesContactsComponent, data: {} });

function View_AddonMessagesContactsComponent_1(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "core-empty-box", [["icon", "person"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_15" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], icon: [1, "icon"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, core["_29" /* ɵnov */](_v, 2).transform("addon.messages.contactlistempty")); var currVal_1 = "person"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AddonMessagesContactsComponent_2(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "core-empty-box", [["icon", "person"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_15" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], icon: [1, "icon"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, core["_29" /* ɵnov */](_v, 2).transform("addon.messages.nousersfound")); var currVal_1 = "person"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AddonMessagesContactsComponent_6(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 19, "a", [["class", "item item-block"], ["detail-none", ""], ["ion-item", ""], ["text-wrap", ""]], [[8, "title", 0], [2, "core-split-item-selected", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.gotoDiscussion(_v.parent.context.$implicit.id) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 6, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 0, 7, "ion-avatar", [["item-start", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](8, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_16" /* ɵeld */](10, 0, null, null, 3, "img", [["core-external-content", ""], ["onError", "this.src='assets/img/user-avatar.png'"]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), core["_15" /* ɵdid */](11, 4210688, null, 0, external_content["a" /* CoreExternalContentDirective */], [core["p" /* ElementRef */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], platform["a" /* Platform */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], app["a" /* CoreAppProvider */], utils["a" /* CoreUtilsProvider */]], null, null), core["_33" /* ɵpod */](12, { $a: 0 }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](16, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_16" /* ɵeld */](17, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](18, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "]))], function (_ck, _v) { var currVal_4 = _v.parent.context.$implicit.fullname; _ck(_v, 18, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.parent.context.$implicit.fullname; var currVal_1 = (_v.parent.context.$implicit.id == _co.discussionUserId); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = core["_19" /* ɵinlineInterpolate */](1, "", (_v.parent.context.$implicit.profileimageurl || _v.parent.context.$implicit.profileimageurlsmall), ""); var currVal_3 = core["_41" /* ɵunv */](_v, 10, 1, core["_29" /* ɵnov */](_v, 13).transform("core.pictureof", _ck(_v, 12, 0, _v.parent.context.$implicit.fullname))); _ck(_v, 10, 0, currVal_2, currVal_3); });
}
function View_AddonMessagesContactsComponent_5(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonMessagesContactsComponent_6)), core["_15" /* ɵdid */](4, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "]))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit.profileimageurl || _v.context.$implicit.profileimageurlsmall); _ck(_v, 4, 0, currVal_0); }, null); }
function View_AddonMessagesContactsComponent_4(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 20, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 14, "ion-item-divider", [["class", "item item-divider"], ["color", "light"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_15" /* ɵdid */](7, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](9, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](10, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](13, 0, null, 4, 2, "ion-note", [["item-end", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](14, 16384, null, 0, note["a" /* Note */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), (_l()(), core["_40" /* ɵted */](15, null, ["", ""])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonMessagesContactsComponent_5)), core["_15" /* ɵdid */](19, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "light"; _ck(_v, 3, 0, currVal_0); var currVal_1 = "light"; _ck(_v, 7, 0, currVal_1); var currVal_4 = _co.contacts[_v.parent.context.$implicit]; _ck(_v, 19, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = core["_41" /* ɵunv */](_v, 10, 0, core["_29" /* ɵnov */](_v, 11).transform(("addon.messages.type_" + _v.parent.context.$implicit))); _ck(_v, 10, 0, currVal_2); var currVal_3 = _co.contacts[_v.parent.context.$implicit].length; _ck(_v, 15, 0, currVal_3); }); }
function View_AddonMessagesContactsComponent_3(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, "ion-list", [["no-margin", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_AddonMessagesContactsComponent_4)), core["_15" /* ɵdid */](4, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.contacts[_v.context.$implicit] && ((_co.contacts[_v.context.$implicit].length > 0) || (_v.context.$implicit === _co.searchType))); _ck(_v, 4, 0, currVal_0); }, null); }
function View_AddonMessagesContactsComponent_0(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 27, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_15" /* ɵdid */](1, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["K" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["D" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ionRefresh" === en)) {
                var pd_0 = (_co.refreshData($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_15" /* ɵdid */](4, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["D" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_16" /* ɵeld */](6, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_15" /* ɵdid */](7, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n\n    "])), (_l()(), core["_16" /* ɵeld */](11, 0, null, 1, 2, "core-search-box", [["autocorrect", "off"], ["lengthCheck", "2"], ["spellcheck", "false"]], null, [[null, "onSubmit"], [null, "onClear"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("onSubmit" === en)) {
                var pd_0 = (_co.search($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("onClear" === en)) {
                var pd_1 = (_co.clearSearch($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, search_box_ngfactory["b" /* View_CoreSearchBoxComponent_0 */], search_box_ngfactory["a" /* RenderType_CoreSearchBoxComponent */])), core["_15" /* ɵdid */](12, 114688, null, 0, search_box["a" /* CoreSearchBoxComponent */], [translate_service["a" /* TranslateService */], utils["a" /* CoreUtilsProvider */]], { placeholder: [0, "placeholder"], autocorrect: [1, "autocorrect"], spellcheck: [2, "spellcheck"], lengthCheck: [3, "lengthCheck"], disabled: [4, "disabled"] }, { onSubmit: "onSubmit", onClear: "onClear" }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n\n    "])), (_l()(), core["_16" /* ɵeld */](15, 0, null, 1, 11, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_15" /* ɵdid */](16, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["p" /* ElementRef */], events["a" /* CoreEventsProvider */], utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"], message: [1, "message"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_AddonMessagesContactsComponent_1)), core["_15" /* ɵdid */](19, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_AddonMessagesContactsComponent_2)), core["_15" /* ɵdid */](22, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_AddonMessagesContactsComponent_3)), core["_15" /* ɵdid */](25, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.loaded; _ck(_v, 4, 0, currVal_4); var currVal_6 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 7, 0, core["_29" /* ɵnov */](_v, 8).transform("core.pulltorefresh")), ""); _ck(_v, 7, 0, currVal_6); var currVal_7 = core["_41" /* ɵunv */](_v, 12, 0, core["_29" /* ɵnov */](_v, 13).transform("addon.messages.contactname")); var currVal_8 = "off"; var currVal_9 = "false"; var currVal_10 = "2"; var currVal_11 = !_co.loaded; _ck(_v, 12, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_12 = _co.loaded; var currVal_13 = _co.loadingMessage; _ck(_v, 16, 0, currVal_12, currVal_13); var currVal_14 = (!_co.hasContacts && (_co.searchString == "")); _ck(_v, 19, 0, currVal_14); var currVal_15 = (!_co.hasContacts && (_co.searchString != "")); _ck(_v, 22, 0, currVal_15); var currVal_16 = _co.contactTypes; _ck(_v, 25, 0, currVal_16); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 1).statusbarPadding; var currVal_1 = core["_29" /* ɵnov */](_v, 1)._hasRefresher; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = (core["_29" /* ɵnov */](_v, 4).state !== "inactive"); var currVal_3 = core["_29" /* ɵnov */](_v, 4)._top; _ck(_v, 3, 0, currVal_2, currVal_3); var currVal_5 = core["_29" /* ɵnov */](_v, 7).r.state; _ck(_v, 6, 0, currVal_5); });
}
function View_AddonMessagesContactsComponent_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "addon-messages-contacts", [], null, null, null, View_AddonMessagesContactsComponent_0, RenderType_AddonMessagesContactsComponent)), core["_15" /* ɵdid */](1, 114688, null, 0, contacts["a" /* AddonMessagesContactsComponent */], [sites["a" /* CoreSitesProvider */], translate_service["a" /* TranslateService */], app["a" /* CoreAppProvider */], messages["a" /* AddonMessagesProvider */], dom["a" /* CoreDomUtilsProvider */], nav_params["a" /* NavParams */], events["a" /* CoreEventsProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AddonMessagesContactsComponentNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("addon-messages-contacts", contacts["a" /* AddonMessagesContactsComponent */], View_AddonMessagesContactsComponent_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(420);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(421);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ngfactory.js
var split_view_ngfactory = __webpack_require__(424);

// EXTERNAL MODULE: ./src/core/fileuploader/providers/fileuploader.ts
var fileuploader = __webpack_require__(63);

// EXTERNAL MODULE: ./src/components/tabs/tabs.ngfactory.js
var tabs_ngfactory = __webpack_require__(426);

// EXTERNAL MODULE: ./src/components/tabs/tab.ngfactory.js
var tab_ngfactory = __webpack_require__(427);

// EXTERNAL MODULE: ./src/components/tabs/tab.ts
var tab = __webpack_require__(70);

// CONCATENATED MODULE: ./src/addon/messages/pages/index/index.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._components_discussions_discussions.ngfactory,_.._components_discussions_discussions,_.._.._.._providers_events,_.._.._.._providers_sites,_ngx_translate_core_src_translate.service,_.._providers_messages,_.._.._.._providers_utils_dom,ionic_angular_navigation_nav_params,_.._.._.._providers_app,ionic_angular_platform_platform,_.._.._.._providers_utils_utils,_.._.._pushnotifications_providers_delegate,_.._components_contacts_contacts.ngfactory,_.._components_contacts_contacts,ionic_angular_components_toolbar_toolbar_header,ionic_angular_config_config,ionic_angular_navigation_view_controller,_.._.._.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,ionic_angular_components_app_app,ionic_angular_navigation_nav_controller,_.._.._.._directives_back_button,_.._.._.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_toolbar,_ngx_translate_core_src_translate.pipe,ionic_angular_components_toolbar_toolbar_item,_.._.._.._components_split_view_split_view.ngfactory,_.._.._.._components_split_view_split_view,_.._.._.._core_fileuploader_providers_fileuploader,_.._.._.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_dom_controller,ionic_angular_platform_keyboard,_.._.._.._components_tabs_tabs.ngfactory,_.._.._.._components_tabs_tabs,_.._.._.._components_tabs_tab.ngfactory,_.._.._.._components_tabs_tab,_index PURE_IMPORTS_END */








































var styles_AddonMessagesIndexPage = [];
var RenderType_AddonMessagesIndexPage = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonMessagesIndexPage, data: {} });

function View_AddonMessagesIndexPage_1(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](1, 0, null, null, 1, "addon-messages-discussions", [], null, null, null, View_AddonMessagesDiscussionsComponent_0, RenderType_AddonMessagesDiscussionsComponent)), core["_15" /* ɵdid */](2, 245760, null, 0, discussions["a" /* AddonMessagesDiscussionsComponent */], [events["a" /* CoreEventsProvider */], sites["a" /* CoreSitesProvider */], translate_service["a" /* TranslateService */], messages["a" /* AddonMessagesProvider */], dom["a" /* CoreDomUtilsProvider */], nav_params["a" /* NavParams */], app["a" /* CoreAppProvider */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], delegate["a" /* AddonPushNotificationsDelegate */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "]))], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
function View_AddonMessagesIndexPage_2(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](1, 0, null, null, 1, "addon-messages-contacts", [], null, null, null, View_AddonMessagesContactsComponent_0, RenderType_AddonMessagesContactsComponent)), core["_15" /* ɵdid */](2, 114688, null, 0, contacts["a" /* AddonMessagesContactsComponent */], [sites["a" /* CoreSitesProvider */], translate_service["a" /* TranslateService */], app["a" /* CoreAppProvider */], messages["a" /* AddonMessagesProvider */], dom["a" /* CoreDomUtilsProvider */], nav_params["a" /* NavParams */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "]))], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
function View_AddonMessagesIndexPage_0(_l) { return core["_42" /* ɵvid */](0, [core["_37" /* ɵqud */](402653184, 1, { splitviewCtrl: 0 }), core["_37" /* ɵqud */](402653184, 2, { tabsComponent: 0 }), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 16, "ion-header", [], null, null, null, null, null)), core["_15" /* ɵdid */](3, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_16" /* ɵeld */](5, 0, null, null, 12, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_15" /* ɵdid */](6, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), core["_15" /* ɵdid */](7, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_16" /* ɵeld */](9, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_15" /* ɵdid */](10, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_40" /* ɵted */](11, 0, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_16" /* ɵeld */](14, 0, null, 2, 2, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](15, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_37" /* ɵqud */](603979776, 3, { _buttons: 1 }), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_16" /* ɵeld */](20, 0, null, null, 28, "core-split-view", [], null, null, null, split_view_ngfactory["b" /* View_CoreSplitViewComponent_0 */], split_view_ngfactory["a" /* RenderType_CoreSplitViewComponent */])), core["_15" /* ɵdid */](21, 245760, [[1, 4]], 0, split_view["a" /* CoreSplitViewComponent */], [[2, nav_controller["a" /* NavController */]], core["p" /* ElementRef */], fileuploader["a" /* CoreFileUploaderProvider */], platform["a" /* Platform */], translate_service["a" /* TranslateService */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_16" /* ɵeld */](23, 0, null, 0, 24, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_15" /* ɵdid */](24, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["K" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["D" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n        "])), (_l()(), core["_16" /* ɵeld */](26, 0, null, 1, 20, "core-tabs", [], null, null, null, tabs_ngfactory["b" /* View_CoreTabsComponent_0 */], tabs_ngfactory["a" /* RenderType_CoreTabsComponent */])), core["_15" /* ɵdid */](27, 4964352, [[2, 4]], 0, tabs["a" /* CoreTabsComponent */], [core["p" /* ElementRef */], content["a" /* Content */], dom["a" /* CoreDomUtilsProvider */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_16" /* ɵeld */](29, 0, null, 0, 7, "core-tab", [["icon", "chatbubbles"]], null, null, null, tab_ngfactory["b" /* View_CoreTabComponent_0 */], tab_ngfactory["a" /* RenderType_CoreTabComponent */])), core["_15" /* ɵdid */](30, 245760, null, 2, tab["a" /* CoreTabComponent */], [tabs["a" /* CoreTabsComponent */], core["p" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */]], { title: [0, "title"], icon: [1, "icon"] }, null), core["_37" /* ɵqud */](335544320, 4, { template: 0 }), core["_37" /* ɵqud */](335544320, 5, { scroll: 0 }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](0, [[4, 2]], null, 0, null, View_AddonMessagesIndexPage_1)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_16" /* ɵeld */](38, 0, null, 0, 7, "core-tab", [["icon", "person"]], null, null, null, tab_ngfactory["b" /* View_CoreTabComponent_0 */], tab_ngfactory["a" /* RenderType_CoreTabComponent */])), core["_15" /* ɵdid */](39, 245760, null, 2, tab["a" /* CoreTabComponent */], [tabs["a" /* CoreTabsComponent */], core["p" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */]], { title: [0, "title"], icon: [1, "icon"] }, null), core["_37" /* ɵqud */](335544320, 6, { template: 0 }), core["_37" /* ɵqud */](335544320, 7, { scroll: 0 }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](0, [[6, 2]], null, 0, null, View_AddonMessagesIndexPage_2)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n"]))], function (_ck, _v) { _ck(_v, 7, 0); _ck(_v, 21, 0); _ck(_v, 27, 0); var currVal_5 = core["_41" /* ɵunv */](_v, 30, 0, core["_29" /* ɵnov */](_v, 33).transform("addon.messages.messages")); var currVal_6 = "chatbubbles"; _ck(_v, 30, 0, currVal_5, currVal_6); var currVal_7 = core["_41" /* ɵunv */](_v, 39, 0, core["_29" /* ɵnov */](_v, 42).transform("addon.messages.contacts")); var currVal_8 = "person"; _ck(_v, 39, 0, currVal_7, currVal_8); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 6)._hidden; var currVal_1 = core["_29" /* ɵnov */](_v, 6)._sbPadding; _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_2 = core["_41" /* ɵunv */](_v, 11, 0, core["_29" /* ɵnov */](_v, 12).transform("addon.messages.messages")); _ck(_v, 11, 0, currVal_2); var currVal_3 = core["_29" /* ɵnov */](_v, 24).statusbarPadding; var currVal_4 = core["_29" /* ɵnov */](_v, 24)._hasRefresher; _ck(_v, 23, 0, currVal_3, currVal_4); }); }
function View_AddonMessagesIndexPage_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "page-addon-messages-index", [], null, null, null, View_AddonMessagesIndexPage_0, RenderType_AddonMessagesIndexPage)), core["_15" /* ɵdid */](1, 180224, null, 0, index_AddonMessagesIndexPage, [events["a" /* CoreEventsProvider */], sites["a" /* CoreSitesProvider */]], null, null)], null, null); }
var AddonMessagesIndexPageNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("page-addon-messages-index", index_AddonMessagesIndexPage, View_AddonMessagesIndexPage_Host_0, {}, {}, []);





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

// CONCATENATED MODULE: ./src/addon/messages/pages/index/index.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesIndexPageModuleNgFactory", function() { return AddonMessagesIndexPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_index.module,_.._.._.._.._node_modules_ionic_angular_components_action_sheet_action_sheet_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_alert_alert_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_app_app_root.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_loading_loading_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_modal_modal_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_picker_picker_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_popover_popover_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_select_select_popover_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_toast_toast_component.ngfactory,_.._.._.._components_context_menu_context_menu_popover.ngfactory,_.._.._.._components_course_picker_menu_course_picker_menu_popover.ngfactory,_.._.._.._components_recaptcha_recaptchamodal.ngfactory,_index.ngfactory,_angular_common,_angular_forms,_ngx_translate_core_src_translate.loader,_ngx_translate_core_src_translate.compiler,_ngx_translate_core_src_translate.parser,_ngx_translate_core_src_missing_translation_handler,_ngx_translate_core_src_translate.service,_ngx_translate_core_src_translate.store,ionic_angular_module,_ngx_translate_core_index,_.._.._.._directives_directives.module,_.._.._.._pipes_pipes.module,_.._.._.._components_components.module,_.._components_components.module,ionic_angular_util_module_loader,_index PURE_IMPORTS_END */































var AddonMessagesIndexPageModuleNgFactory = /*@__PURE__*/ core["_13" /* ɵcmf */](AddonMessagesIndexPageModule, [], function (_l) { return core["_25" /* ɵmod */]([core["_26" /* ɵmpd */](512, core["n" /* ComponentFactoryResolver */], core["_6" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], AddonMessagesIndexPageNgFactory]], [3, core["n" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["_26" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["v" /* ɵa */]]]), core["_26" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_26" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_26" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_26" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_26" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_26" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_26" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_26" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_26" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_26" /* ɵmpd */](512, _ngx_translate_core["a" /* TranslateModule */], _ngx_translate_core["a" /* TranslateModule */], []), core["_26" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_26" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_26" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_26" /* ɵmpd */](512, components_components_module["a" /* AddonMessagesComponentsModule */], components_components_module["a" /* AddonMessagesComponentsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_26" /* ɵmpd */](512, AddonMessagesIndexPageModule, AddonMessagesIndexPageModule, []), core["_26" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_26" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_26" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], index_AddonMessagesIndexPage, [])]); });






/***/ }),

/***/ 1904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonMessagesComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = /*@__PURE__*/__webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = /*@__PURE__*/__webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_directives_module__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_pipes_module__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_discussions_discussions__ = __webpack_require__(1905);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_contacts_contacts__ = __webpack_require__(1906);










var AddonMessagesComponentsModule = /*@__PURE__*/ (function () {
    function AddonMessagesComponentsModule() {
    }
    return AddonMessagesComponentsModule;
}());






/***/ }),

/***/ 1905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonMessagesDiscussionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = /*@__PURE__*/__webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_events__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_messages__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_utils_utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_app__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__addon_pushnotifications_providers_delegate__ = __webpack_require__(218);












/**
 * Component that displays the list of discussions.
 */
var AddonMessagesDiscussionsComponent = /*@__PURE__*/ (function () {
    function AddonMessagesDiscussionsComponent(eventsProvider, sitesProvider, translate, messagesProvider, domUtils, navParams, appProvider, platform, utils, pushNotificationsDelegate) {
        var _this = this;
        this.eventsProvider = eventsProvider;
        this.messagesProvider = messagesProvider;
        this.domUtils = domUtils;
        this.appProvider = appProvider;
        this.loaded = false;
        this.search = {
            enabled: false,
            showResults: false,
            results: [],
            loading: '',
            text: ''
        };
        this.search.loading = translate.instant('core.searching');
        this.loadingMessages = translate.instant('core.loading');
        this.siteId = sitesProvider.getCurrentSiteId();
        // Update discussions when new message is received.
        this.newMessagesObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_6__providers_messages__["a" /* AddonMessagesProvider */].NEW_MESSAGE_EVENT, function (data) {
            if (data.userId) {
                var discussion = _this.discussions.find(function (disc) {
                    return disc.message.user == data.userId;
                });
                if (typeof discussion == 'undefined') {
                    _this.loaded = false;
                    _this.refreshData().finally(function () {
                        _this.loaded = true;
                    });
                }
                else {
                    // An existing discussion has a new message, update the last message.
                    discussion.message.message = data.message;
                    discussion.message.timecreated = data.timecreated;
                }
            }
        }, this.siteId);
        // Update discussions when a message is read.
        this.readChangedObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_6__providers_messages__["a" /* AddonMessagesProvider */].READ_CHANGED_EVENT, function (data) {
            if (data.userId) {
                var discussion = _this.discussions.find(function (disc) {
                    return disc.message.user == data.userId;
                });
                if (typeof discussion != 'undefined') {
                    // A discussion has been read reset counter.
                    discussion.unread = false;
                    // Discussions changed, invalidate them.
                    _this.messagesProvider.invalidateDiscussionsCache();
                }
            }
        }, this.siteId);
        // Update discussions when cron read is executed.
        this.cronObserver = eventsProvider.on(__WEBPACK_IMPORTED_MODULE_6__providers_messages__["a" /* AddonMessagesProvider */].READ_CRON_EVENT, function (data) {
            _this.refreshData();
        }, this.siteId);
        // Refresh the view when the app is resumed.
        this.appResumeSubscription = platform.resume.subscribe(function () {
            if (!_this.loaded) {
                return;
            }
            _this.loaded = false;
            _this.refreshData();
        });
        this.discussionUserId = navParams.get('discussionUserId') || false;
        // If a message push notification is received, refresh the view.
        this.pushObserver = pushNotificationsDelegate.on('receive').subscribe(function (notification) {
            // New message received. If it's from current site, refresh the data.
            if (utils.isFalseOrZero(notification.notif) && notification.site == _this.siteId) {
                _this.refreshData();
            }
        });
    }
    /**
     * Component loaded.
     */
    AddonMessagesDiscussionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.discussionUserId) {
            // There is a discussion to load, open the discussion in a new state.
            this.gotoDiscussion(this.discussionUserId);
        }
        this.fetchData().then(function () {
            if (!_this.discussionUserId && _this.discussions.length > 0) {
                // Take first and load it.
                _this.gotoDiscussion(_this.discussions[0].message.user, undefined, true);
            }
        });
    };
    /**
     * Refresh the data.
     *
     * @param {any} [refresher] Refresher.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonMessagesDiscussionsComponent.prototype.refreshData = function (refresher) {
        var _this = this;
        return this.messagesProvider.invalidateDiscussionsCache().then(function () {
            return _this.fetchData().finally(function () {
                if (refresher) {
                    // Actions to take if refresh comes from the user.
                    _this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_6__providers_messages__["a" /* AddonMessagesProvider */].READ_CHANGED_EVENT, undefined, _this.siteId);
                    refresher.complete();
                }
            });
        });
    };
    /**
     * Fetch discussions.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonMessagesDiscussionsComponent.prototype.fetchData = function () {
        var _this = this;
        this.loadingMessage = this.loadingMessages;
        this.search.enabled = this.messagesProvider.isSearchMessagesEnabled();
        return this.messagesProvider.getDiscussions().then(function (discussions) {
            // Convert to an array for sorting.
            var discussionsSorted = [];
            for (var userId in discussions) {
                discussions[userId].unread = !!discussions[userId].unread;
                discussionsSorted.push(discussions[userId]);
            }
            _this.discussions = discussionsSorted.sort(function (a, b) {
                return b.message.timecreated - a.message.timecreated;
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingdiscussions', true);
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Clear search and show discussions again.
     */
    AddonMessagesDiscussionsComponent.prototype.clearSearch = function () {
        var _this = this;
        this.loaded = false;
        this.search.showResults = false;
        this.search.text = ''; // Reset searched string.
        this.fetchData().finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Search messages cotaining text.
     *
     * @param  {string}       query Text to search for.
     * @return {Promise<any>}       Resolved when done.
     */
    AddonMessagesDiscussionsComponent.prototype.searchMessage = function (query) {
        var _this = this;
        this.appProvider.closeKeyboard();
        this.loaded = false;
        this.loadingMessage = this.search.loading;
        return this.messagesProvider.searchMessages(query).then(function (searchResults) {
            _this.search.showResults = true;
            _this.search.results = searchResults;
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingmessages', true);
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Navigate to a particular discussion.
     *
     * @param {number} discussionUserId Discussion Id to load.
     * @param {number} [messageId]      Message to scroll after loading the discussion. Used when searching.
     * @param {boolean} [onlyWithSplitView=false]  Only go to Discussion if split view is on.
     */
    AddonMessagesDiscussionsComponent.prototype.gotoDiscussion = function (discussionUserId, messageId, onlyWithSplitView) {
        if (onlyWithSplitView === void 0) {
            onlyWithSplitView = false;
        }
        this.discussionUserId = discussionUserId;
        var params = {
            discussion: discussionUserId,
            onlyWithSplitView: onlyWithSplitView
        };
        if (messageId) {
            params['message'] = messageId;
        }
        this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_6__providers_messages__["a" /* AddonMessagesProvider */].SPLIT_VIEW_LOAD_EVENT, params, this.siteId);
    };
    /**
     * Component destroyed.
     */
    AddonMessagesDiscussionsComponent.prototype.ngOnDestroy = function () {
        this.newMessagesObserver && this.newMessagesObserver.off();
        this.readChangedObserver && this.readChangedObserver.off();
        this.cronObserver && this.cronObserver.off();
        this.appResumeSubscription && this.appResumeSubscription.unsubscribe();
        this.pushObserver && this.pushObserver.unsubscribe();
    };
    return AddonMessagesDiscussionsComponent;
}());






/***/ }),

/***/ 1906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonMessagesContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = /*@__PURE__*/__webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_messages__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_app__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_events__ = __webpack_require__(13);










/**
 * Component that displays the list of contacts.
 */
var AddonMessagesContactsComponent = /*@__PURE__*/ (function () {
    function AddonMessagesContactsComponent(sitesProvider, translate, appProvider, messagesProvider, domUtils, navParams, eventsProvider) {
        this.appProvider = appProvider;
        this.messagesProvider = messagesProvider;
        this.domUtils = domUtils;
        this.eventsProvider = eventsProvider;
        this.noSearchTypes = ['online', 'offline', 'blocked', 'strangers'];
        this.loaded = false;
        this.contactTypes = this.noSearchTypes;
        this.searchType = 'search';
        this.loadingMessage = '';
        this.hasContacts = false;
        this.contacts = {
            search: []
        };
        this.searchString = '';
        this.currentUserId = sitesProvider.getCurrentSiteUserId();
        this.siteId = sitesProvider.getCurrentSiteId();
        this.searchingMessages = translate.instant('core.searching');
        this.loadingMessages = translate.instant('core.loading');
        this.loadingMessage = this.loadingMessages;
        this.discussionUserId = navParams.get('discussionUserId') || false;
    }
    /**
     * Component loaded.
     */
    AddonMessagesContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.discussionUserId) {
            // There is a discussion to load, open the discussion in a new state.
            this.gotoDiscussion(this.discussionUserId);
        }
        this.fetchData().then(function () {
            if (!_this.discussionUserId && _this.hasContacts) {
                var contact = void 0;
                for (var x in _this.contacts) {
                    if (_this.contacts[x].length > 0) {
                        contact = _this.contacts[x][0];
                        break;
                    }
                }
                if (contact) {
                    // Take first and load it.
                    _this.gotoDiscussion(contact.id, true);
                }
            }
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Refresh the data.
     *
     * @param {any} [refresher] Refresher.
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonMessagesContactsComponent.prototype.refreshData = function (refresher) {
        var _this = this;
        var promise;
        if (this.searchString) {
            // User has searched, update the search.
            promise = this.performSearch(this.searchString);
        }
        else {
            // Update contacts.
            promise = this.messagesProvider.invalidateAllContactsCache(this.currentUserId).then(function () {
                return _this.fetchData();
            });
        }
        return promise.finally(function () {
            refresher.complete();
        });
    };
    /**
     * Fetch contacts.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    AddonMessagesContactsComponent.prototype.fetchData = function () {
        var _this = this;
        this.loadingMessage = this.loadingMessages;
        return this.messagesProvider.getAllContacts().then(function (contacts) {
            for (var x in contacts) {
                if (contacts[x].length > 0) {
                    _this.contacts[x] = _this.sortUsers(contacts[x]);
                }
                else {
                    _this.contacts[x] = [];
                }
            }
            _this.clearSearch();
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
        });
    };
    /**
     * Sort user list by fullname
     * @param  {any[]} list List to sort.
     * @return {any[]}      Sorted list.
     */
    AddonMessagesContactsComponent.prototype.sortUsers = function (list) {
        return list.sort(function (a, b) {
            var compareA = a.fullname.toLowerCase(), compareB = b.fullname.toLowerCase();
            return compareA.localeCompare(compareB);
        });
    };
    /**
     * Clear search and show all contacts again.
     */
    AddonMessagesContactsComponent.prototype.clearSearch = function () {
        this.searchString = ''; // Reset searched string.
        this.contactTypes = this.noSearchTypes;
        this.hasContacts = false;
        for (var x in this.contacts) {
            if (this.contacts[x].length > 0) {
                this.hasContacts = true;
                return;
            }
        }
    };
    /**
     * Search users from the UI.
     *
     * @param  {string}       query Text to search for.
     * @return {Promise<any>}       Resolved when done.
     */
    AddonMessagesContactsComponent.prototype.search = function (query) {
        var _this = this;
        this.appProvider.closeKeyboard();
        this.loaded = false;
        this.loadingMessage = this.searchingMessages;
        return this.performSearch(query).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Perform the search of users.
     *
     * @param  {string}       query Text to search for.
     * @return {Promise<any>}       Resolved when done.
     */
    AddonMessagesContactsComponent.prototype.performSearch = function (query) {
        var _this = this;
        return this.messagesProvider.searchContacts(query).then(function (result) {
            _this.hasContacts = result.length > 0;
            _this.searchString = query;
            _this.contactTypes = ['search'];
            _this.contacts['search'] = _this.sortUsers(result);
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
        });
    };
    /**
     * Navigate to a particular discussion.
     *
     * @param {number} discussionUserId Discussion Id to load.
     * @param {boolean} [onlyWithSplitView=false]  Only go to Discussion if split view is on.
     */
    AddonMessagesContactsComponent.prototype.gotoDiscussion = function (discussionUserId, onlyWithSplitView) {
        if (onlyWithSplitView === void 0) {
            onlyWithSplitView = false;
        }
        this.discussionUserId = discussionUserId;
        var params = {
            discussion: discussionUserId,
            onlyWithSplitView: onlyWithSplitView
        };
        this.eventsProvider.trigger(__WEBPACK_IMPORTED_MODULE_5__providers_messages__["a" /* AddonMessagesProvider */].SPLIT_VIEW_LOAD_EVENT, params, this.siteId);
    };
    return AddonMessagesContactsComponent;
}());






/***/ })

});
//# sourceMappingURL=7.js.map