webpackJsonp([10],{

/***/ 1869:
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

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(2);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(12);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils_utils = __webpack_require__(3);

// EXTERNAL MODULE: ./src/providers/ws.ts
var ws = __webpack_require__(188);

// EXTERNAL MODULE: ./src/core/login/providers/helper.ts
var helper = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(19);

// EXTERNAL MODULE: ./src/core/user/providers/user-profile-field-delegate.ts
var user_profile_field_delegate = __webpack_require__(181);

// CONCATENATED MODULE: ./src/core/login/pages/email-signup/email-signup.ts













/**
 * Page to signup using email.
 */
var email_signup_CoreLoginEmailSignupPage = /*@__PURE__*/ (function () {
    function CoreLoginEmailSignupPage(navCtrl, navParams, fb, wsProvider, sitesProvider, loginHelper, domUtils, translate, utils, textUtils, userProfileFieldDelegate) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.wsProvider = wsProvider;
        this.sitesProvider = sitesProvider;
        this.loginHelper = loginHelper;
        this.domUtils = domUtils;
        this.translate = translate;
        this.utils = utils;
        this.textUtils = textUtils;
        this.userProfileFieldDelegate = userProfileFieldDelegate;
        this.settingsLoaded = false;
        this.captcha = {
            recaptcharesponse: ''
        };
        this.isMinor = false; // Whether the user is minor age.
        this.siteUrl = navParams.get('siteUrl');
        // Create the ageVerificationForm.
        this.ageVerificationForm = this.fb.group({
            age: ['', esm5_forms["u" /* Validators */].required]
        });
        this.countryControl = this.fb.control('', esm5_forms["u" /* Validators */].required);
        this.ageVerificationForm.addControl('country', this.countryControl);
        // Create the signupForm with the basic controls. More controls will be added later.
        this.signupForm = this.fb.group({
            username: ['', esm5_forms["u" /* Validators */].required],
            password: ['', esm5_forms["u" /* Validators */].required],
            email: ['', esm5_forms["u" /* Validators */].compose([esm5_forms["u" /* Validators */].required, esm5_forms["u" /* Validators */].email])],
            email2: ['', esm5_forms["u" /* Validators */].compose([esm5_forms["u" /* Validators */].required, esm5_forms["u" /* Validators */].email])]
        });
        // Setup validation errors.
        this.usernameErrors = this.loginHelper.getErrorMessages('core.login.usernamerequired');
        this.passwordErrors = this.loginHelper.getErrorMessages('core.login.passwordrequired');
        this.emailErrors = this.loginHelper.getErrorMessages('core.login.missingemail');
        this.email2Errors = this.loginHelper.getErrorMessages('core.login.missingemail', undefined, 'core.login.emailnotmatch');
        this.policyErrors = this.loginHelper.getErrorMessages('core.login.policyagree');
    }
    /**
     * View loaded.
     */
    CoreLoginEmailSignupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Fetch the data.
        this.fetchData().finally(function () {
            _this.settingsLoaded = true;
        });
    };
    /**
     * Complete the FormGroup using the settings received from server.
     */
    CoreLoginEmailSignupPage.prototype.completeFormGroup = function () {
        this.signupForm.addControl('city', this.fb.control(this.settings.defaultcity || ''));
        this.signupForm.addControl('country', this.fb.control(this.settings.country || ''));
        // Add the name fields.
        for (var i in this.settings.namefields) {
            this.signupForm.addControl(this.settings.namefields[i], this.fb.control('', esm5_forms["u" /* Validators */].required));
        }
        if (this.settings.sitepolicy) {
            this.signupForm.addControl('policyagreed', this.fb.control(false, esm5_forms["u" /* Validators */].requiredTrue));
        }
    };
    /**
     * Fetch the required data from the server-
     */
    CoreLoginEmailSignupPage.prototype.fetchData = function () {
        var _this = this;
        // Get site config.
        return this.sitesProvider.getSitePublicConfig(this.siteUrl).then(function (config) {
            _this.siteConfig = config;
            if (_this.treatSiteConfig(config)) {
                // Check content verification.
                if (typeof _this.ageDigitalConsentVerification == 'undefined') {
                    return _this.wsProvider.callAjax('core_auth_is_age_digital_consent_verification_enabled', {}, { siteUrl: _this.siteUrl }).then(function (result) {
                        _this.ageDigitalConsentVerification = result.status;
                    }).catch(function (e) {
                        // Capture exceptions, fail silently.
                    }).then(function () {
                        return _this.getSignupSettings();
                    });
                }
                else {
                    return _this.getSignupSettings();
                }
            }
        }).then(function () {
            _this.completeFormGroup();
        }).catch(function (err) {
            _this.domUtils.showErrorModal(err);
        });
    };
    /**
     * Get signup settings from server.
     */
    CoreLoginEmailSignupPage.prototype.getSignupSettings = function () {
        var _this = this;
        return this.wsProvider.callAjax('auth_email_get_signup_settings', {}, { siteUrl: this.siteUrl }).then(function (settings) {
            _this.settings = settings;
            _this.categories = _this.loginHelper.formatProfileFieldsForSignup(settings.profilefields);
            if (_this.settings.recaptchapublickey) {
                _this.captcha.recaptcharesponse = ''; // Reset captcha.
            }
            if (!_this.countryControl.value) {
                _this.countryControl.setValue(settings.country || '');
            }
            _this.namefieldsErrors = {};
            if (settings.namefields) {
                settings.namefields.forEach(function (field) {
                    _this.namefieldsErrors[field] = _this.loginHelper.getErrorMessages('core.login.missing' + field);
                });
            }
            return _this.utils.getCountryList().then(function (countries) {
                _this.countries = countries;
                _this.countriesKeys = Object.keys(countries);
            });
        });
    };
    /**
     * Treat the site config, checking if it's valid and extracting the data we're interested in.
     *
     * @param {any} siteConfig Site config to treat.
     * @return {boolean} True if success.
     */
    CoreLoginEmailSignupPage.prototype.treatSiteConfig = function (siteConfig) {
        if (siteConfig && siteConfig.registerauth == 'email' && !this.loginHelper.isEmailSignupDisabled(siteConfig)) {
            this.siteName = siteConfig.sitename;
            this.authInstructions = siteConfig.authinstructions;
            this.ageDigitalConsentVerification = siteConfig.agedigitalconsentverification;
            this.supportName = siteConfig.supportname;
            this.supportEmail = siteConfig.supportemail;
            this.countryControl.setValue(siteConfig.country || '');
            return true;
        }
        else {
            this.domUtils.showErrorModal(this.translate.instant('core.login.signupplugindisabled', { $a: this.translate.instant('core.login.auth_email') }));
            this.navCtrl.pop();
            return false;
        }
    };
    /**
     * Pull to refresh.
     *
     * @param {any} refresher Refresher.
     */
    CoreLoginEmailSignupPage.prototype.refreshSettings = function (refresher) {
        this.fetchData().finally(function () {
            refresher.complete();
        });
    };
    /**
     * Create account.
     */
    CoreLoginEmailSignupPage.prototype.create = function () {
        var _this = this;
        if (!this.signupForm.valid || (this.settings.recaptchapublickey && !this.captcha.recaptcharesponse)) {
            // Form not valid. Scroll to the first element with errors.
            if (!this.domUtils.scrollToInputError(this.content)) {
                // Input not found, show an error modal.
                this.domUtils.showErrorModal('core.errorinvalidform', true);
            }
        }
        else {
            var params_1 = {
                username: this.signupForm.value.username.trim().toLowerCase(),
                password: this.signupForm.value.password,
                firstname: this.textUtils.cleanTags(this.signupForm.value.firstname),
                lastname: this.textUtils.cleanTags(this.signupForm.value.lastname),
                email: this.signupForm.value.email.trim(),
                city: this.textUtils.cleanTags(this.signupForm.value.city),
                country: this.signupForm.value.country
            }, modal_1 = this.domUtils.showModalLoading('core.sending', true);
            if (this.siteConfig.launchurl) {
                var service = this.sitesProvider.determineService(this.siteUrl);
                params_1.redirect = this.loginHelper.prepareForSSOLogin(this.siteUrl, service, this.siteConfig.launchurl);
            }
            // Get the recaptcha response (if needed).
            if (this.settings.recaptchapublickey && this.captcha.recaptcharesponse) {
                params_1.recaptcharesponse = this.captcha.recaptcharesponse;
            }
            // Get the data for the custom profile fields.
            this.userProfileFieldDelegate.getDataForFields(this.settings.profilefields, true, 'email', this.signupForm.value).then(function (fieldsData) {
                params_1.customprofilefields = fieldsData;
                _this.wsProvider.callAjax('auth_email_signup_user', params_1, { siteUrl: _this.siteUrl }).then(function (result) {
                    if (result.success) {
                        // Show alert and ho back.
                        var message = _this.translate.instant('core.login.emailconfirmsent', { $a: params_1.email });
                        _this.domUtils.showAlert(_this.translate.instant('core.success'), message);
                        _this.navCtrl.pop();
                    }
                    else {
                        if (result.warnings && result.warnings.length) {
                            var error = result.warnings[0].message;
                            if (error == 'incorrect-captcha-sol') {
                                error = _this.translate.instant('core.login.recaptchaincorrect');
                            }
                            _this.domUtils.showErrorModal(error);
                        }
                        else {
                            _this.domUtils.showErrorModal('core.login.usernotaddederror', true);
                        }
                    }
                });
            }).catch(function (error) {
                _this.domUtils.showErrorModalDefault(error && error.error, 'core.login.usernotaddederror', true);
            }).finally(function () {
                modal_1.dismiss();
            });
        }
    };
    /**
     * Escape mail to avoid special characters to be treated as a RegExp.
     *
     * @param  {string} text Initial mail.
     * @return {string}      Escaped mail.
     */
    CoreLoginEmailSignupPage.prototype.escapeMail = function (text) {
        return this.textUtils.escapeForRegex(text);
    };
    /**
     * Show authentication instructions.
     */
    CoreLoginEmailSignupPage.prototype.showAuthInstructions = function () {
        this.textUtils.expandText(this.translate.instant('core.login.instructions'), this.authInstructions);
    };
    /**
     * Show contact information on site (we have to display again the age verification form).
     */
    CoreLoginEmailSignupPage.prototype.showContactOnSite = function () {
        this.utils.openInBrowser(this.siteUrl + '/login/verify_age_location.php');
    };
    /**
     * Verify Age.
     */
    CoreLoginEmailSignupPage.prototype.verifyAge = function () {
        var _this = this;
        if (!this.ageVerificationForm.valid) {
            this.domUtils.showErrorModal('core.errorinvalidform', true);
            return;
        }
        var modal = this.domUtils.showModalLoading('core.sending', true), params = this.ageVerificationForm.value;
        params.age = parseInt(params.age, 10); // Use just the integer part.
        this.wsProvider.callAjax('core_auth_is_minor', params, { siteUrl: this.siteUrl }).then(function (result) {
            if (!result.status) {
                // Not a minor, go ahead!
                _this.ageDigitalConsentVerification = false;
            }
            else {
                // Is a minor!!
                _this.isMinor = true;
            }
        }).catch(function () {
            // Something wrong, redirect to the site.
            _this.domUtils.showErrorModal('There was an error verifying your age, please try again using the browser.');
        }).finally(function () {
            modal.dismiss();
        });
    };
    return CoreLoginEmailSignupPage;
}());





// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(33);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(29);

// EXTERNAL MODULE: ./src/core/user/components/components.module.ts
var components_components_module = __webpack_require__(428);

// CONCATENATED MODULE: ./src/core/login/pages/email-signup/email-signup.module.ts








var CoreLoginCredentialsPageModule = /*@__PURE__*/ (function () {
    function CoreLoginCredentialsPageModule() {
    }
    return CoreLoginCredentialsPageModule;
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

// EXTERNAL MODULE: ./src/core/user/components/participants/participants.ngfactory.js
var participants_ngfactory = __webpack_require__(1322);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(42);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(163);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(31);

// EXTERNAL MODULE: ./src/components/mark-required/mark-required.ngfactory.js
var mark_required_ngfactory = __webpack_require__(83);

// EXTERNAL MODULE: ./src/components/mark-required/mark-required.ts
var mark_required = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.ngfactory.js
var input_ngfactory = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.js
var input = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.ngfactory.js
var select_ngfactory = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.js
var select_select = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(9);

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(40);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(22);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(35);

// EXTERNAL MODULE: ./src/providers/utils/iframe.ts
var iframe = __webpack_require__(38);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(13);

// EXTERNAL MODULE: ./src/components/input-errors/input-errors.ngfactory.js
var input_errors_ngfactory = __webpack_require__(89);

// EXTERNAL MODULE: ./src/components/input-errors/input-errors.ts
var input_errors = __webpack_require__(80);

// EXTERNAL MODULE: ./src/core/user/components/user-profile-field/user-profile-field.ngfactory.js
var user_profile_field_ngfactory = __webpack_require__(1917);

// EXTERNAL MODULE: ./src/core/user/components/user-profile-field/user-profile-field.ts
var user_profile_field = __webpack_require__(1310);

// EXTERNAL MODULE: ./src/components/recaptcha/recaptcha.ngfactory.js
var recaptcha_ngfactory = __webpack_require__(1909);

// EXTERNAL MODULE: ./src/components/recaptcha/recaptcha.ts
var recaptcha = __webpack_require__(1309);

// EXTERNAL MODULE: ./src/providers/lang.ts
var lang = __webpack_require__(136);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-controller.js
var modal_controller = __webpack_require__(197);

// EXTERNAL MODULE: ./src/directives/link.ts
var directives_link = __webpack_require__(198);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/checkbox/checkbox.ngfactory.js
var checkbox_ngfactory = __webpack_require__(216);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/checkbox/checkbox.js
var checkbox_checkbox = __webpack_require__(170);

// EXTERNAL MODULE: ./src/components/show-password/show-password.ngfactory.js
var show_password_ngfactory = __webpack_require__(644);

// EXTERNAL MODULE: ./src/components/show-password/show-password.ts
var show_password = __webpack_require__(332);

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(57);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(37);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(421);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(60);

// CONCATENATED MODULE: ./src/core/login/pages/email-signup/email-signup.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_config_config,_ngx_translate_core_src_translate.pipe,_ngx_translate_core_src_translate.service,ionic_angular_components_icon_icon,ionic_angular_components_option_option,_angular_forms,_.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_divider,ionic_angular_components_item_item_content,_.._.._.._components_mark_required_mark_required.ngfactory,_.._.._.._components_mark_required_mark_required,_.._.._.._providers_utils_text,_.._.._.._providers_utils_utils,ionic_angular_components_label_label,_.._.._.._.._node_modules_ionic_angular_components_input_input.ngfactory,ionic_angular_components_input_input,ionic_angular_platform_platform,ionic_angular_components_app_app,ionic_angular_components_content_content,ionic_angular_platform_dom_controller,_.._.._.._.._node_modules_ionic_angular_components_select_select.ngfactory,ionic_angular_components_select_select,ionic_angular_navigation_deep_linker,_angular_common,_.._.._.._directives_format_text,_.._.._.._providers_sites,_.._.._.._providers_utils_dom,_.._.._.._providers_utils_url,_.._.._.._providers_logger,_.._.._.._providers_filepool,_.._.._.._providers_app,_.._.._contentlinks_providers_helper,ionic_angular_navigation_nav_controller,_.._.._.._components_split_view_split_view,_.._.._.._providers_utils_iframe,_.._.._.._providers_events,_.._.._.._components_input_errors_input_errors.ngfactory,_.._.._.._components_input_errors_input_errors,_.._.._user_components_user_profile_field_user_profile_field.ngfactory,_.._.._user_components_user_profile_field_user_profile_field,_.._.._user_providers_user_profile_field_delegate,_.._.._.._components_recaptcha_recaptcha.ngfactory,_.._.._.._components_recaptcha_recaptcha,_.._.._.._providers_lang,ionic_angular_components_modal_modal_controller,_.._.._.._directives_link,_.._.._.._.._node_modules_ionic_angular_components_checkbox_checkbox.ngfactory,ionic_angular_components_checkbox_checkbox,_.._.._.._components_show_password_show_password.ngfactory,_.._.._.._components_show_password_show_password,_.._.._.._components_loading_loading.ngfactory,_.._.._.._components_loading_loading,ionic_angular_components_list_list,ionic_angular_gestures_gesture_controller,ionic_angular_components_toolbar_toolbar_header,ionic_angular_navigation_view_controller,_.._.._.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,_.._.._.._directives_back_button,_.._.._.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_toolbar,ionic_angular_components_toolbar_toolbar_item,_.._.._.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_platform_keyboard,ionic_angular_components_refresher_refresher,_.._.._.._.._node_modules_ionic_angular_components_refresher_refresher_content.ngfactory,ionic_angular_components_refresher_refresher_content,_email_signup,ionic_angular_navigation_nav_params,_.._.._.._providers_ws,_.._providers_helper PURE_IMPORTS_END */














































































var styles_CoreLoginEmailSignupPage = [];
var RenderType_CoreLoginEmailSignupPage = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreLoginEmailSignupPage, data: {} });

function View_CoreLoginEmailSignupPage_1(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 6, "button", [["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.showAuthInstructions() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](1, 1097728, [[2, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_16" /* ɵeld */](4, 0, null, 0, 1, "ion-icon", [["name", "help-circle"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](5, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n            "]))], function (_ck, _v) { var currVal_2 = "help-circle"; _ck(_v, 5, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 0, 0, core["_29" /* ɵnov */](_v, 2).transform("core.login.instructions")); _ck(_v, 0, 0, currVal_0); var currVal_1 = core["_29" /* ɵnov */](_v, 5)._hidden; _ck(_v, 4, 0, currVal_1); });
}
function View_CoreLoginEmailSignupPage_4(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, [[12, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](2, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.countries[_v.context.$implicit]; _ck(_v, 2, 0, currVal_1); }); }
function View_CoreLoginEmailSignupPage_3(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 98, "form", [["ion-list", ""], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("submit" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 2).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("reset" === en)) {
                var pd_1 = (core["_29" /* ɵnov */](_v, 2).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngSubmit" === en)) {
                var pd_2 = (_co.verifyAge() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, esm5_forms["w" /* ɵbf */], [], null, null), core["_15" /* ɵdid */](2, 540672, null, 0, esm5_forms["h" /* FormGroupDirective */], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), core["_35" /* ɵprd */](2048, null, esm5_forms["b" /* ControlContainer */], null, [esm5_forms["h" /* FormGroupDirective */]]), core["_15" /* ɵdid */](4, 16384, null, 0, esm5_forms["o" /* NgControlStatusGroup */], [esm5_forms["b" /* ControlContainer */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](6, 0, null, null, 10, "ion-item-divider", [["class", "item item-divider"], ["color", "light"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](7, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 3, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 4, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 5, { _icons: 1 }), core["_15" /* ɵdid */](11, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](13, 0, null, 2, 2, "p", [["class", "item-heading"]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](14, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_16" /* ɵeld */](18, 0, null, null, 18, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](19, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 6, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 7, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 8, { _icons: 1 }), core["_15" /* ɵdid */](23, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](25, 0, null, 1, 4, "ion-label", [["core-mark-required", "true"], ["stacked", ""]], null, null, null, mark_required_ngfactory["b" /* View_CoreMarkRequiredComponent_0 */], mark_required_ngfactory["a" /* RenderType_CoreMarkRequiredComponent */])), core["_15" /* ɵdid */](26, 4308992, null, 0, mark_required["a" /* CoreMarkRequiredComponent */], [core["p" /* ElementRef */], translate_service["a" /* TranslateService */], utils_text["a" /* CoreTextUtilsProvider */], utils_utils["a" /* CoreUtilsProvider */]], { coreMarkRequired: [0, "coreMarkRequired"] }, null), core["_15" /* ɵdid */](27, 16384, [[6, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_40" /* ɵted */](28, 0, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](31, 0, null, 3, 4, "ion-input", [["autocapitalize", "none"], ["autocorrect", "off"], ["formControlName", "age"], ["name", "age"], ["placeholder", "0"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_15" /* ɵdid */](32, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [8, null]], { name: [0, "name"] }, null), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_15" /* ɵdid */](34, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_15" /* ɵdid */](35, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"], autocorrect: [1, "autocorrect"], placeholder: [2, "placeholder"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_16" /* ɵeld */](38, 0, null, null, 29, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](39, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 9, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 10, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 11, { _icons: 1 }), core["_15" /* ɵdid */](43, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](45, 0, null, 1, 4, "ion-label", [["core-mark-required", "true"], ["stacked", ""]], null, null, null, mark_required_ngfactory["b" /* View_CoreMarkRequiredComponent_0 */], mark_required_ngfactory["a" /* RenderType_CoreMarkRequiredComponent */])), core["_15" /* ɵdid */](46, 4308992, null, 0, mark_required["a" /* CoreMarkRequiredComponent */], [core["p" /* ElementRef */], translate_service["a" /* TranslateService */], utils_text["a" /* CoreTextUtilsProvider */], utils_utils["a" /* CoreUtilsProvider */]], { coreMarkRequired: [0, "coreMarkRequired"] }, null), core["_15" /* ɵdid */](47, 16384, [[9, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_40" /* ɵted */](48, 0, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](51, 0, null, 3, 15, "ion-select", [["formControlName", "country"], ["name", "country"]], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "click"], [null, "keyup.space"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 52)._click($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keyup.space" === en)) {
                var pd_1 = (core["_29" /* ɵnov */](_v, 52)._keyup() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, select_ngfactory["b" /* View_Select_0 */], select_ngfactory["a" /* RenderType_Select */])), core["_15" /* ɵdid */](52, 1228800, null, 1, select_select["a" /* Select */], [app["a" /* App */], util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item["a" /* Item */]], deep_linker["a" /* DeepLinker */]], null, null), core["_37" /* ɵqud */](603979776, 12, { options: 1 }), core["_35" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [select_select["a" /* Select */]]), core["_15" /* ɵdid */](55, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_15" /* ɵdid */](57, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](59, 0, null, null, 3, "ion-option", [["value", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](60, 16384, [[12, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](61, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginEmailSignupPage_4)), core["_15" /* ɵdid */](65, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](70, 0, null, null, 11, "ion-item", [["class", "item item-block"], ["padding", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](71, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 13, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 14, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 15, { _icons: 1 }), core["_15" /* ɵdid */](75, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](77, 0, null, 2, 3, "button", [["block", ""], ["ion-button", ""], ["type", "submit"]], [[8, "disabled", 0]], null, null, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](78, 1097728, [[14, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_40" /* ɵted */](79, 0, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_16" /* ɵeld */](83, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](84, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 16, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 17, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 18, { _icons: 1 }), core["_15" /* ɵdid */](88, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](90, 0, null, 2, 2, "p", [["class", "item-heading"]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](91, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](94, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](95, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.ageVerificationForm; _ck(_v, 2, 0, currVal_7); var currVal_8 = "light"; _ck(_v, 7, 0, currVal_8); var currVal_9 = "light"; _ck(_v, 11, 0, currVal_9); var currVal_11 = "true"; _ck(_v, 26, 0, currVal_11); var currVal_20 = "age"; _ck(_v, 32, 0, currVal_20); var currVal_21 = "number"; var currVal_22 = "off"; var currVal_23 = "0"; _ck(_v, 35, 0, currVal_21, currVal_22, currVal_23); var currVal_24 = "true"; _ck(_v, 46, 0, currVal_24); var currVal_34 = "country"; _ck(_v, 55, 0, currVal_34); var currVal_35 = ""; _ck(_v, 60, 0, currVal_35); var currVal_37 = _co.countriesKeys; _ck(_v, 65, 0, currVal_37); var currVal_39 = ""; _ck(_v, 78, 0, currVal_39); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_29" /* ɵnov */](_v, 4).ngClassUntouched; var currVal_1 = core["_29" /* ɵnov */](_v, 4).ngClassTouched; var currVal_2 = core["_29" /* ɵnov */](_v, 4).ngClassPristine; var currVal_3 = core["_29" /* ɵnov */](_v, 4).ngClassDirty; var currVal_4 = core["_29" /* ɵnov */](_v, 4).ngClassValid; var currVal_5 = core["_29" /* ɵnov */](_v, 4).ngClassInvalid; var currVal_6 = core["_29" /* ɵnov */](_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_10 = core["_41" /* ɵunv */](_v, 14, 0, core["_29" /* ɵnov */](_v, 15).transform("core.agelocationverification")); _ck(_v, 14, 0, currVal_10); var currVal_12 = core["_41" /* ɵunv */](_v, 28, 0, core["_29" /* ɵnov */](_v, 29).transform("core.whatisyourage")); _ck(_v, 28, 0, currVal_12); var currVal_13 = core["_29" /* ɵnov */](_v, 34).ngClassUntouched; var currVal_14 = core["_29" /* ɵnov */](_v, 34).ngClassTouched; var currVal_15 = core["_29" /* ɵnov */](_v, 34).ngClassPristine; var currVal_16 = core["_29" /* ɵnov */](_v, 34).ngClassDirty; var currVal_17 = core["_29" /* ɵnov */](_v, 34).ngClassValid; var currVal_18 = core["_29" /* ɵnov */](_v, 34).ngClassInvalid; var currVal_19 = core["_29" /* ɵnov */](_v, 34).ngClassPending; _ck(_v, 31, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_25 = core["_41" /* ɵunv */](_v, 48, 0, core["_29" /* ɵnov */](_v, 49).transform("core.wheredoyoulive")); _ck(_v, 48, 0, currVal_25); var currVal_26 = core["_29" /* ɵnov */](_v, 52)._disabled; var currVal_27 = core["_29" /* ɵnov */](_v, 57).ngClassUntouched; var currVal_28 = core["_29" /* ɵnov */](_v, 57).ngClassTouched; var currVal_29 = core["_29" /* ɵnov */](_v, 57).ngClassPristine; var currVal_30 = core["_29" /* ɵnov */](_v, 57).ngClassDirty; var currVal_31 = core["_29" /* ɵnov */](_v, 57).ngClassValid; var currVal_32 = core["_29" /* ɵnov */](_v, 57).ngClassInvalid; var currVal_33 = core["_29" /* ɵnov */](_v, 57).ngClassPending; _ck(_v, 51, 0, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33); var currVal_36 = core["_41" /* ɵunv */](_v, 61, 0, core["_29" /* ɵnov */](_v, 62).transform("core.login.selectacountry")); _ck(_v, 61, 0, currVal_36); var currVal_38 = !_co.ageVerificationForm.valid; _ck(_v, 77, 0, currVal_38); var currVal_40 = core["_41" /* ɵunv */](_v, 79, 0, core["_29" /* ɵnov */](_v, 80).transform("core.proceed")); _ck(_v, 79, 0, currVal_40); var currVal_41 = core["_41" /* ɵunv */](_v, 91, 0, core["_29" /* ɵnov */](_v, 92).transform("core.whyisthisrequired")); _ck(_v, 91, 0, currVal_41); var currVal_42 = core["_41" /* ɵunv */](_v, 95, 0, core["_29" /* ɵnov */](_v, 96).transform("core.explanationdigitalminor")); _ck(_v, 95, 0, currVal_42); });
}
function View_CoreLoginEmailSignupPage_6(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "p", [["class", "item-heading"], ["padding", ""]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.siteUrl; _ck(_v, 1, 0, currVal_0); }); }
function View_CoreLoginEmailSignupPage_7(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "p", [["class", "item-heading"], ["padding", ""]], null, null, null, null, null)), (_l()(), core["_16" /* ɵeld */](1, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](2, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils_utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], providers_app["a" /* CoreAppProvider */], providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.siteName; _ck(_v, 2, 0, currVal_0); }, null); }
function View_CoreLoginEmailSignupPage_8(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.siteUrl; _ck(_v, 1, 0, currVal_0); }); }
function View_CoreLoginEmailSignupPage_9(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "p", [["class", "core-input-footnote"], ["item-content", ""]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](1, null, ["\n                    ", "\n                "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.settings.passwordpolicy; _ck(_v, 1, 0, currVal_0); }); }
function View_CoreLoginEmailSignupPage_10(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 22, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 40, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 41, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 42, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 1, 4, "ion-label", [["core-mark-required", "true"], ["stacked", ""]], null, null, null, mark_required_ngfactory["b" /* View_CoreMarkRequiredComponent_0 */], mark_required_ngfactory["a" /* RenderType_CoreMarkRequiredComponent */])), core["_15" /* ɵdid */](8, 4308992, null, 0, mark_required["a" /* CoreMarkRequiredComponent */], [core["p" /* ElementRef */], translate_service["a" /* TranslateService */], utils_text["a" /* CoreTextUtilsProvider */], utils_utils["a" /* CoreUtilsProvider */]], { coreMarkRequired: [0, "coreMarkRequired"] }, null), core["_15" /* ɵdid */](9, 16384, [[40, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_40" /* ɵted */](10, 0, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](13, 0, null, 3, 5, "ion-input", [["autocorrect", "off"], ["name", "nameField"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_15" /* ɵdid */](14, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [8, null]], { name: [0, "name"] }, null), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_15" /* ɵdid */](16, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_15" /* ɵdid */](17, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"], autocorrect: [1, "autocorrect"], placeholder: [2, "placeholder"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](20, 0, null, 3, 1, "core-input-errors", [["item-content", ""]], null, null, null, input_errors_ngfactory["b" /* View_CoreInputErrorsComponent_0 */], input_errors_ngfactory["a" /* RenderType_CoreInputErrorsComponent */])), core["_15" /* ɵdid */](21, 638976, null, 0, input_errors["a" /* CoreInputErrorsComponent */], [translate_service["a" /* TranslateService */]], { formControl: [0, "formControl"], errorMessages: [1, "errorMessages"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "true"; _ck(_v, 8, 0, currVal_0); var currVal_9 = core["_19" /* ɵinlineInterpolate */](1, "", _v.context.$implicit, ""); _ck(_v, 14, 0, currVal_9); var currVal_10 = "text"; var currVal_11 = "off"; var currVal_12 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 17, 2, core["_29" /* ɵnov */](_v, 18).transform(("core.user." + _v.context.$implicit))), ""); _ck(_v, 17, 0, currVal_10, currVal_11, currVal_12); var currVal_13 = _co.signupForm.controls[_v.context.$implicit]; var currVal_14 = _co.namefieldsErrors[_v.context.$implicit]; _ck(_v, 21, 0, currVal_13, currVal_14); }, function (_ck, _v) { var currVal_1 = core["_41" /* ɵunv */](_v, 10, 0, core["_29" /* ɵnov */](_v, 11).transform(("core.user." + _v.context.$implicit))); _ck(_v, 10, 0, currVal_1); var currVal_2 = core["_29" /* ɵnov */](_v, 16).ngClassUntouched; var currVal_3 = core["_29" /* ɵnov */](_v, 16).ngClassTouched; var currVal_4 = core["_29" /* ɵnov */](_v, 16).ngClassPristine; var currVal_5 = core["_29" /* ɵnov */](_v, 16).ngClassDirty; var currVal_6 = core["_29" /* ɵnov */](_v, 16).ngClassValid; var currVal_7 = core["_29" /* ɵnov */](_v, 16).ngClassInvalid; var currVal_8 = core["_29" /* ɵnov */](_v, 16).ngClassPending; _ck(_v, 13, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
function View_CoreLoginEmailSignupPage_11(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, [[49, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](2, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.countries[_v.context.$implicit]; _ck(_v, 2, 0, currVal_1); }); }
function View_CoreLoginEmailSignupPage_13(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-user-profile-field", [["edit", "true"], ["registerAuth", "email"], ["signup", "true"]], null, null, null, user_profile_field_ngfactory["b" /* View_CoreUserProfileFieldComponent_0 */], user_profile_field_ngfactory["a" /* RenderType_CoreUserProfileFieldComponent */])), core["_15" /* ɵdid */](1, 114688, null, 0, user_profile_field["a" /* CoreUserProfileFieldComponent */], [user_profile_field_delegate["a" /* CoreUserProfileFieldDelegate */], utils_utils["a" /* CoreUtilsProvider */], core["u" /* Injector */]], { field: [0, "field"], signup: [1, "signup"], edit: [2, "edit"], form: [3, "form"], registerAuth: [4, "registerAuth"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit; var currVal_1 = "true"; var currVal_2 = "true"; var currVal_3 = _co.signupForm; var currVal_4 = "email"; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }, null); }
function View_CoreLoginEmailSignupPage_12(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 12, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 6, "ion-item-divider", [["class", "item item-divider"], ["color", "light"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 50, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 51, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 52, { _icons: 1 }), core["_15" /* ɵdid */](7, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_40" /* ɵted */](8, 2, ["", ""])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginEmailSignupPage_13)), core["_15" /* ɵdid */](11, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var currVal_0 = "light"; _ck(_v, 3, 0, currVal_0); var currVal_1 = "light"; _ck(_v, 7, 0, currVal_1); var currVal_3 = _v.context.$implicit.fields; _ck(_v, 11, 0, currVal_3); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.name; _ck(_v, 8, 0, currVal_2); }); }
function View_CoreLoginEmailSignupPage_14(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 21, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 7, "ion-item-divider", [["class", "item item-divider"], ["color", "light"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 53, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 54, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 55, { _icons: 1 }), core["_15" /* ɵdid */](7, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_40" /* ɵted */](8, 2, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](11, 0, null, null, 9, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](12, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 56, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 57, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 58, { _icons: 1 }), core["_15" /* ɵdid */](16, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](18, 0, null, 2, 1, "core-recaptcha", [], null, null, null, recaptcha_ngfactory["b" /* View_CoreRecaptchaComponent_0 */], recaptcha_ngfactory["a" /* RenderType_CoreRecaptchaComponent */])), core["_15" /* ɵdid */](19, 114688, null, 0, recaptcha["a" /* CoreRecaptchaComponent */], [sites["a" /* CoreSitesProvider */], lang["a" /* CoreLangProvider */], utils_text["a" /* CoreTextUtilsProvider */], modal_controller["a" /* ModalController */]], { model: [0, "model"], publicKey: [1, "publicKey"], siteUrl: [2, "siteUrl"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "light"; _ck(_v, 3, 0, currVal_0); var currVal_1 = "light"; _ck(_v, 7, 0, currVal_1); var currVal_3 = _co.captcha; var currVal_4 = _co.settings.recaptchapublickey; var currVal_5 = _co.siteUrl; _ck(_v, 19, 0, currVal_3, currVal_4, currVal_5); }, function (_ck, _v) { var currVal_2 = core["_41" /* ɵunv */](_v, 8, 0, core["_29" /* ɵnov */](_v, 9).transform("core.login.security_question")); _ck(_v, 8, 0, currVal_2); }); }
function View_CoreLoginEmailSignupPage_15(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 51, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 7, "ion-item-divider", [["class", "item item-divider"], ["color", "light"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 59, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 60, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 61, { _icons: 1 }), core["_15" /* ɵdid */](7, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_40" /* ɵted */](8, 2, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](11, 0, null, null, 12, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](12, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 62, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 63, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 64, { _icons: 1 }), core["_15" /* ɵdid */](16, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](18, 0, null, 2, 4, "p", [], null, null, null, null, null)), (_l()(), core["_16" /* ɵeld */](19, 0, null, null, 3, "a", [["capture", "false"], ["core-link", ""]], [[8, "href", 4]], null, null, null, null)), core["_15" /* ɵdid */](20, 81920, null, 0, directives_link["a" /* CoreLinkDirective */], [core["p" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */], utils_utils["a" /* CoreUtilsProvider */], sites["a" /* CoreSitesProvider */], url["a" /* CoreUrlUtilsProvider */], providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]]], { capture: [0, "capture"] }, null), (_l()(), core["_40" /* ɵted */](21, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](25, 0, null, null, 25, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](26, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 65, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 66, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 67, { _icons: 1 }), core["_15" /* ɵdid */](30, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](32, 0, null, 1, 10, "ion-label", [], null, null, null, null, null)), core["_15" /* ɵdid */](33, 16384, [[65, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](35, 0, null, null, 3, "span", [], null, null, null, mark_required_ngfactory["b" /* View_CoreMarkRequiredComponent_0 */], mark_required_ngfactory["a" /* RenderType_CoreMarkRequiredComponent */])), core["_15" /* ɵdid */](36, 4308992, null, 0, mark_required["a" /* CoreMarkRequiredComponent */], [core["p" /* ElementRef */], translate_service["a" /* TranslateService */], utils_text["a" /* CoreTextUtilsProvider */], utils_utils["a" /* CoreUtilsProvider */]], { coreMarkRequired: [0, "coreMarkRequired"] }, null), (_l()(), core["_40" /* ɵted */](37, 0, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](40, 0, null, null, 1, "core-input-errors", [], null, null, null, input_errors_ngfactory["b" /* View_CoreInputErrorsComponent_0 */], input_errors_ngfactory["a" /* RenderType_CoreInputErrorsComponent */])), core["_15" /* ɵdid */](41, 638976, null, 0, input_errors["a" /* CoreInputErrorsComponent */], [translate_service["a" /* TranslateService */]], { formControl: [0, "formControl"], errorMessages: [1, "errorMessages"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](44, 0, null, 4, 5, "ion-checkbox", [["formControlName", "policyagreed"], ["item-end", ""], ["name", "policyagreed"]], [[2, "checkbox-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 45)._click($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, checkbox_ngfactory["b" /* View_Checkbox_0 */], checkbox_ngfactory["a" /* RenderType_Checkbox */])), core["_15" /* ɵdid */](45, 1228800, null, 0, checkbox_checkbox["a" /* Checkbox */], [config["a" /* Config */], util_form["a" /* Form */], [2, item["a" /* Item */]], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), core["_35" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [checkbox_checkbox["a" /* Checkbox */]]), core["_15" /* ɵdid */](47, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_15" /* ɵdid */](49, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "light"; _ck(_v, 3, 0, currVal_0); var currVal_1 = "light"; _ck(_v, 7, 0, currVal_1); var currVal_4 = "false"; _ck(_v, 20, 0, currVal_4); var currVal_6 = true; _ck(_v, 36, 0, currVal_6); var currVal_8 = _co.signupForm.controls.policyagreed; var currVal_9 = _co.policyErrors; _ck(_v, 41, 0, currVal_8, currVal_9); var currVal_18 = "policyagreed"; _ck(_v, 47, 0, currVal_18); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = core["_41" /* ɵunv */](_v, 8, 0, core["_29" /* ɵnov */](_v, 9).transform("core.login.policyagreement")); _ck(_v, 8, 0, currVal_2); var currVal_3 = _co.settings.sitepolicy; _ck(_v, 19, 0, currVal_3); var currVal_5 = core["_41" /* ɵunv */](_v, 21, 0, core["_29" /* ɵnov */](_v, 22).transform("core.login.policyagreementclick")); _ck(_v, 21, 0, currVal_5); var currVal_7 = core["_41" /* ɵunv */](_v, 37, 0, core["_29" /* ɵnov */](_v, 38).transform("core.login.policyaccept")); _ck(_v, 37, 0, currVal_7); var currVal_10 = core["_29" /* ɵnov */](_v, 45)._disabled; var currVal_11 = core["_29" /* ɵnov */](_v, 49).ngClassUntouched; var currVal_12 = core["_29" /* ɵnov */](_v, 49).ngClassTouched; var currVal_13 = core["_29" /* ɵnov */](_v, 49).ngClassPristine; var currVal_14 = core["_29" /* ɵnov */](_v, 49).ngClassDirty; var currVal_15 = core["_29" /* ɵnov */](_v, 49).ngClassValid; var currVal_16 = core["_29" /* ɵnov */](_v, 49).ngClassInvalid; var currVal_17 = core["_29" /* ɵnov */](_v, 49).ngClassPending; _ck(_v, 44, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17); });
}
function View_CoreLoginEmailSignupPage_5(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 228, "form", [["ion-list", ""], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("submit" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 2).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("reset" === en)) {
                var pd_1 = (core["_29" /* ɵnov */](_v, 2).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngSubmit" === en)) {
                var pd_2 = (_co.create() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, esm5_forms["w" /* ɵbf */], [], null, null), core["_15" /* ɵdid */](2, 540672, null, 0, esm5_forms["h" /* FormGroupDirective */], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), core["_35" /* ɵprd */](2048, null, esm5_forms["b" /* ControlContainer */], null, [esm5_forms["h" /* FormGroupDirective */]]), core["_15" /* ɵdid */](4, 16384, null, 0, esm5_forms["o" /* NgControlStatusGroup */], [esm5_forms["b" /* ControlContainer */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](6, 0, null, null, 17, "ion-item", [["class", "item item-block"], ["text-center", ""], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](7, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 19, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 20, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 21, { _icons: 1 }), core["_15" /* ɵdid */](11, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, 2, 1, null, View_CoreLoginEmailSignupPage_6)), core["_15" /* ɵdid */](15, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, 2, 1, null, View_CoreLoginEmailSignupPage_7)), core["_15" /* ɵdid */](19, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, 2, 1, null, View_CoreLoginEmailSignupPage_8)), core["_15" /* ɵdid */](22, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](26, 0, null, null, 7, "ion-item-divider", [["class", "item item-divider"], ["color", "light"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](27, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 22, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 23, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 24, { _icons: 1 }), core["_15" /* ɵdid */](31, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_40" /* ɵted */](32, 2, ["\n                ", "\n            "])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](35, 0, null, null, 22, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](36, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 25, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 26, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 27, { _icons: 1 }), core["_15" /* ɵdid */](40, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](42, 0, null, 1, 4, "ion-label", [["core-mark-required", "true"], ["stacked", ""]], null, null, null, mark_required_ngfactory["b" /* View_CoreMarkRequiredComponent_0 */], mark_required_ngfactory["a" /* RenderType_CoreMarkRequiredComponent */])), core["_15" /* ɵdid */](43, 4308992, null, 0, mark_required["a" /* CoreMarkRequiredComponent */], [core["p" /* ElementRef */], translate_service["a" /* TranslateService */], utils_text["a" /* CoreTextUtilsProvider */], utils_utils["a" /* CoreUtilsProvider */]], { coreMarkRequired: [0, "coreMarkRequired"] }, null), core["_15" /* ɵdid */](44, 16384, [[25, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_40" /* ɵted */](45, 0, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](48, 0, null, 3, 5, "ion-input", [["autocapitalize", "none"], ["autocorrect", "off"], ["formControlName", "username"], ["name", "username"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_15" /* ɵdid */](49, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [8, null]], { name: [0, "name"] }, null), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_15" /* ɵdid */](51, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_15" /* ɵdid */](52, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"], autocorrect: [1, "autocorrect"], placeholder: [2, "placeholder"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](55, 0, null, 3, 1, "core-input-errors", [["item-content", ""]], null, null, null, input_errors_ngfactory["b" /* View_CoreInputErrorsComponent_0 */], input_errors_ngfactory["a" /* RenderType_CoreInputErrorsComponent */])), core["_15" /* ɵdid */](56, 638976, null, 0, input_errors["a" /* CoreInputErrorsComponent */], [translate_service["a" /* TranslateService */]], { formControl: [0, "formControl"], errorMessages: [1, "errorMessages"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](59, 0, null, null, 29, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](60, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 28, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 29, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 30, { _icons: 1 }), core["_15" /* ɵdid */](64, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](66, 0, null, 1, 4, "ion-label", [["core-mark-required", "true"], ["stacked", ""]], null, null, null, mark_required_ngfactory["b" /* View_CoreMarkRequiredComponent_0 */], mark_required_ngfactory["a" /* RenderType_CoreMarkRequiredComponent */])), core["_15" /* ɵdid */](67, 4308992, null, 0, mark_required["a" /* CoreMarkRequiredComponent */], [core["p" /* ElementRef */], translate_service["a" /* TranslateService */], utils_text["a" /* CoreTextUtilsProvider */], utils_utils["a" /* CoreUtilsProvider */]], { coreMarkRequired: [0, "coreMarkRequired"] }, null), core["_15" /* ɵdid */](68, 16384, [[28, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_40" /* ɵted */](69, 0, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](72, 0, null, 3, 9, "core-show-password", [["item-content", ""]], null, null, null, show_password_ngfactory["b" /* View_CoreShowPasswordComponent_0 */], show_password_ngfactory["a" /* RenderType_CoreShowPasswordComponent */])), core["_15" /* ɵdid */](73, 4308992, null, 0, show_password["a" /* CoreShowPasswordComponent */], [core["p" /* ElementRef */], utils_utils["a" /* CoreUtilsProvider */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](75, 0, null, 0, 5, "ion-input", [["formControlName", "password"], ["name", "password"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_15" /* ɵdid */](76, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [8, null]], { name: [0, "name"] }, null), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_15" /* ɵdid */](78, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_15" /* ɵdid */](79, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"], clearOnEdit: [1, "clearOnEdit"], placeholder: [2, "placeholder"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, 3, 1, null, View_CoreLoginEmailSignupPage_9)), core["_15" /* ɵdid */](84, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](86, 0, null, 3, 1, "core-input-errors", [["item-content", ""]], null, null, null, input_errors_ngfactory["b" /* View_CoreInputErrorsComponent_0 */], input_errors_ngfactory["a" /* RenderType_CoreInputErrorsComponent */])), core["_15" /* ɵdid */](87, 638976, null, 0, input_errors["a" /* CoreInputErrorsComponent */], [translate_service["a" /* TranslateService */]], { formControl: [0, "formControl"], errorMessages: [1, "errorMessages"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](91, 0, null, null, 7, "ion-item-divider", [["class", "item item-divider"], ["color", "light"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](92, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 31, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 32, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 33, { _icons: 1 }), core["_15" /* ɵdid */](96, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_40" /* ɵted */](97, 2, ["\n                ", "\n            "])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](100, 0, null, null, 22, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](101, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 34, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 35, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 36, { _icons: 1 }), core["_15" /* ɵdid */](105, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](107, 0, null, 1, 4, "ion-label", [["core-mark-required", "true"], ["stacked", ""]], null, null, null, mark_required_ngfactory["b" /* View_CoreMarkRequiredComponent_0 */], mark_required_ngfactory["a" /* RenderType_CoreMarkRequiredComponent */])), core["_15" /* ɵdid */](108, 4308992, null, 0, mark_required["a" /* CoreMarkRequiredComponent */], [core["p" /* ElementRef */], translate_service["a" /* TranslateService */], utils_text["a" /* CoreTextUtilsProvider */], utils_utils["a" /* CoreUtilsProvider */]], { coreMarkRequired: [0, "coreMarkRequired"] }, null), core["_15" /* ɵdid */](109, 16384, [[34, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_40" /* ɵted */](110, 0, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](113, 0, null, 3, 5, "ion-input", [["autocapitalize", "none"], ["autocorrect", "off"], ["formControlName", "email"], ["name", "email"], ["type", "email"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_15" /* ɵdid */](114, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [8, null]], { name: [0, "name"] }, null), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_15" /* ɵdid */](116, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_15" /* ɵdid */](117, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"], autocorrect: [1, "autocorrect"], placeholder: [2, "placeholder"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](120, 0, null, 3, 1, "core-input-errors", [["item-content", ""]], null, null, null, input_errors_ngfactory["b" /* View_CoreInputErrorsComponent_0 */], input_errors_ngfactory["a" /* RenderType_CoreInputErrorsComponent */])), core["_15" /* ɵdid */](121, 638976, null, 0, input_errors["a" /* CoreInputErrorsComponent */], [translate_service["a" /* TranslateService */]], { formControl: [0, "formControl"], errorMessages: [1, "errorMessages"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](124, 0, null, null, 24, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](125, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 37, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 38, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 39, { _icons: 1 }), core["_15" /* ɵdid */](129, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](131, 0, null, 1, 4, "ion-label", [["core-mark-required", "true"], ["stacked", ""]], null, null, null, mark_required_ngfactory["b" /* View_CoreMarkRequiredComponent_0 */], mark_required_ngfactory["a" /* RenderType_CoreMarkRequiredComponent */])), core["_15" /* ɵdid */](132, 4308992, null, 0, mark_required["a" /* CoreMarkRequiredComponent */], [core["p" /* ElementRef */], translate_service["a" /* TranslateService */], utils_text["a" /* CoreTextUtilsProvider */], utils_utils["a" /* CoreUtilsProvider */]], { coreMarkRequired: [0, "coreMarkRequired"] }, null), core["_15" /* ɵdid */](133, 16384, [[37, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_40" /* ɵted */](134, 0, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](137, 0, null, 3, 7, "ion-input", [["autocapitalize", "none"], ["autocorrect", "off"], ["formControlName", "email2"], ["name", "email2"], ["type", "email"]], [[1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_15" /* ɵdid */](138, 540672, null, 0, esm5_forms["r" /* PatternValidator */], [], { pattern: [0, "pattern"] }, null), core["_35" /* ɵprd */](1024, null, esm5_forms["k" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [esm5_forms["r" /* PatternValidator */]]), core["_15" /* ɵdid */](140, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [2, esm5_forms["k" /* NG_VALIDATORS */]], [8, null], [8, null]], { name: [0, "name"] }, null), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_15" /* ɵdid */](142, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_15" /* ɵdid */](143, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"], autocorrect: [1, "autocorrect"], placeholder: [2, "placeholder"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](146, 0, null, 3, 1, "core-input-errors", [["item-content", ""]], null, null, null, input_errors_ngfactory["b" /* View_CoreInputErrorsComponent_0 */], input_errors_ngfactory["a" /* RenderType_CoreInputErrorsComponent */])), core["_15" /* ɵdid */](147, 638976, null, 0, input_errors["a" /* CoreInputErrorsComponent */], [translate_service["a" /* TranslateService */]], { formControl: [0, "formControl"], errorMessages: [1, "errorMessages"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginEmailSignupPage_10)), core["_15" /* ɵdid */](151, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](153, 0, null, null, 18, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](154, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 43, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 44, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 45, { _icons: 1 }), core["_15" /* ɵdid */](158, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](160, 0, null, 1, 3, "ion-label", [["stacked", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](161, 16384, [[43, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], null, null), (_l()(), core["_40" /* ɵted */](162, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](165, 0, null, 3, 5, "ion-input", [["autocorrect", "off"], ["formControlName", "city"], ["name", "city"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_15" /* ɵdid */](166, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [8, null]], { name: [0, "name"] }, null), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_15" /* ɵdid */](168, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_15" /* ɵdid */](169, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app["a" /* App */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { type: [0, "type"], autocorrect: [1, "autocorrect"], placeholder: [2, "placeholder"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](173, 0, null, null, 28, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](174, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 46, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 47, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 48, { _icons: 1 }), core["_15" /* ɵdid */](178, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](180, 0, null, 1, 3, "ion-label", [["id", "core-login-signup-country"], ["stacked", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](181, 16384, [[46, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [8, null], [8, ""], [8, null], [8, null]], { id: [0, "id"] }, null), (_l()(), core["_40" /* ɵted */](182, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](185, 0, null, 3, 15, "ion-select", [["aria-labelledby", "core-login-signup-country"], ["formControlName", "country"], ["name", "country"]], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "click"], [null, "keyup.space"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 186)._click($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keyup.space" === en)) {
                var pd_1 = (core["_29" /* ɵnov */](_v, 186)._keyup() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, select_ngfactory["b" /* View_Select_0 */], select_ngfactory["a" /* RenderType_Select */])), core["_15" /* ɵdid */](186, 1228800, null, 1, select_select["a" /* Select */], [app["a" /* App */], util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item["a" /* Item */]], deep_linker["a" /* DeepLinker */]], null, null), core["_37" /* ɵqud */](603979776, 49, { options: 1 }), core["_35" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [select_select["a" /* Select */]]), core["_15" /* ɵdid */](189, 671744, null, 0, esm5_forms["f" /* FormControlName */], [[3, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"] }, null), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["f" /* FormControlName */]]), core["_15" /* ɵdid */](191, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](193, 0, null, null, 3, "ion-option", [["value", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](194, 16384, [[49, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](195, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginEmailSignupPage_11)), core["_15" /* ɵdid */](199, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginEmailSignupPage_12)), core["_15" /* ɵdid */](205, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginEmailSignupPage_14)), core["_15" /* ɵdid */](209, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginEmailSignupPage_15)), core["_15" /* ɵdid */](213, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_16" /* ɵeld */](216, 0, null, null, 11, "ion-item", [["class", "item item-block"], ["padding", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](217, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 68, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 69, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 70, { _icons: 1 }), core["_15" /* ɵdid */](221, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](223, 0, null, 2, 3, "button", [["block", ""], ["color", "primary"], ["ion-button", ""], ["type", "submit"]], null, null, null, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](224, 1097728, [[69, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"], block: [1, "block"] }, null), (_l()(), core["_40" /* ɵted */](225, 0, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.signupForm; _ck(_v, 2, 0, currVal_7); var currVal_8 = !_co.siteName; _ck(_v, 15, 0, currVal_8); var currVal_9 = _co.siteName; _ck(_v, 19, 0, currVal_9); var currVal_10 = _co.siteName; _ck(_v, 22, 0, currVal_10); var currVal_11 = "light"; _ck(_v, 27, 0, currVal_11); var currVal_12 = "light"; _ck(_v, 31, 0, currVal_12); var currVal_14 = "true"; _ck(_v, 43, 0, currVal_14); var currVal_23 = "username"; _ck(_v, 49, 0, currVal_23); var currVal_24 = "text"; var currVal_25 = "off"; var currVal_26 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 52, 2, core["_29" /* ɵnov */](_v, 53).transform("core.login.username")), ""); _ck(_v, 52, 0, currVal_24, currVal_25, currVal_26); var currVal_27 = _co.signupForm.controls.username; var currVal_28 = _co.usernameErrors; _ck(_v, 56, 0, currVal_27, currVal_28); var currVal_29 = "true"; _ck(_v, 67, 0, currVal_29); var currVal_31 = "password"; _ck(_v, 73, 0, currVal_31); var currVal_39 = "password"; _ck(_v, 76, 0, currVal_39); var currVal_40 = "password"; var currVal_41 = false; var currVal_42 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 79, 2, core["_29" /* ɵnov */](_v, 80).transform("core.login.password")), ""); _ck(_v, 79, 0, currVal_40, currVal_41, currVal_42); var currVal_43 = _co.settings.passwordpolicy; _ck(_v, 84, 0, currVal_43); var currVal_44 = _co.signupForm.controls.password; var currVal_45 = _co.passwordErrors; _ck(_v, 87, 0, currVal_44, currVal_45); var currVal_46 = "light"; _ck(_v, 92, 0, currVal_46); var currVal_47 = "light"; _ck(_v, 96, 0, currVal_47); var currVal_49 = "true"; _ck(_v, 108, 0, currVal_49); var currVal_58 = "email"; _ck(_v, 114, 0, currVal_58); var currVal_59 = "email"; var currVal_60 = "off"; var currVal_61 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 117, 2, core["_29" /* ɵnov */](_v, 118).transform("core.user.email")), ""); _ck(_v, 117, 0, currVal_59, currVal_60, currVal_61); var currVal_62 = _co.signupForm.controls.email; var currVal_63 = _co.emailErrors; _ck(_v, 121, 0, currVal_62, currVal_63); var currVal_64 = "true"; _ck(_v, 132, 0, currVal_64); var currVal_74 = _co.escapeMail(_co.signupForm.controls.email.value); _ck(_v, 138, 0, currVal_74); var currVal_75 = "email2"; _ck(_v, 140, 0, currVal_75); var currVal_76 = "email"; var currVal_77 = "off"; var currVal_78 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 143, 2, core["_29" /* ɵnov */](_v, 144).transform("core.user.emailagain")), ""); _ck(_v, 143, 0, currVal_76, currVal_77, currVal_78); var currVal_79 = _co.signupForm.controls.email2; var currVal_80 = _co.email2Errors; _ck(_v, 147, 0, currVal_79, currVal_80); var currVal_81 = _co.settings.namefields; _ck(_v, 151, 0, currVal_81); var currVal_90 = "city"; _ck(_v, 166, 0, currVal_90); var currVal_91 = "text"; var currVal_92 = "off"; var currVal_93 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 169, 2, core["_29" /* ɵnov */](_v, 170).transform("core.user.city")), ""); _ck(_v, 169, 0, currVal_91, currVal_92, currVal_93); var currVal_94 = "core-login-signup-country"; _ck(_v, 181, 0, currVal_94); var currVal_104 = "country"; _ck(_v, 189, 0, currVal_104); var currVal_105 = ""; _ck(_v, 194, 0, currVal_105); var currVal_107 = _co.countriesKeys; _ck(_v, 199, 0, currVal_107); var currVal_108 = _co.categories; _ck(_v, 205, 0, currVal_108); var currVal_109 = _co.settings.recaptchapublickey; _ck(_v, 209, 0, currVal_109); var currVal_110 = _co.settings.sitepolicy; _ck(_v, 213, 0, currVal_110); var currVal_111 = "primary"; var currVal_112 = ""; _ck(_v, 224, 0, currVal_111, currVal_112); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 4).ngClassUntouched; var currVal_1 = core["_29" /* ɵnov */](_v, 4).ngClassTouched; var currVal_2 = core["_29" /* ɵnov */](_v, 4).ngClassPristine; var currVal_3 = core["_29" /* ɵnov */](_v, 4).ngClassDirty; var currVal_4 = core["_29" /* ɵnov */](_v, 4).ngClassValid; var currVal_5 = core["_29" /* ɵnov */](_v, 4).ngClassInvalid; var currVal_6 = core["_29" /* ɵnov */](_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_13 = core["_41" /* ɵunv */](_v, 32, 0, core["_29" /* ɵnov */](_v, 33).transform("core.login.createuserandpass")); _ck(_v, 32, 0, currVal_13); var currVal_15 = core["_41" /* ɵunv */](_v, 45, 0, core["_29" /* ɵnov */](_v, 46).transform("core.login.username")); _ck(_v, 45, 0, currVal_15); var currVal_16 = core["_29" /* ɵnov */](_v, 51).ngClassUntouched; var currVal_17 = core["_29" /* ɵnov */](_v, 51).ngClassTouched; var currVal_18 = core["_29" /* ɵnov */](_v, 51).ngClassPristine; var currVal_19 = core["_29" /* ɵnov */](_v, 51).ngClassDirty; var currVal_20 = core["_29" /* ɵnov */](_v, 51).ngClassValid; var currVal_21 = core["_29" /* ɵnov */](_v, 51).ngClassInvalid; var currVal_22 = core["_29" /* ɵnov */](_v, 51).ngClassPending; _ck(_v, 48, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22); var currVal_30 = core["_41" /* ɵunv */](_v, 69, 0, core["_29" /* ɵnov */](_v, 70).transform("core.login.password")); _ck(_v, 69, 0, currVal_30); var currVal_32 = core["_29" /* ɵnov */](_v, 78).ngClassUntouched; var currVal_33 = core["_29" /* ɵnov */](_v, 78).ngClassTouched; var currVal_34 = core["_29" /* ɵnov */](_v, 78).ngClassPristine; var currVal_35 = core["_29" /* ɵnov */](_v, 78).ngClassDirty; var currVal_36 = core["_29" /* ɵnov */](_v, 78).ngClassValid; var currVal_37 = core["_29" /* ɵnov */](_v, 78).ngClassInvalid; var currVal_38 = core["_29" /* ɵnov */](_v, 78).ngClassPending; _ck(_v, 75, 0, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38); var currVal_48 = core["_41" /* ɵunv */](_v, 97, 0, core["_29" /* ɵnov */](_v, 98).transform("core.login.supplyinfo")); _ck(_v, 97, 0, currVal_48); var currVal_50 = core["_41" /* ɵunv */](_v, 110, 0, core["_29" /* ɵnov */](_v, 111).transform("core.user.email")); _ck(_v, 110, 0, currVal_50); var currVal_51 = core["_29" /* ɵnov */](_v, 116).ngClassUntouched; var currVal_52 = core["_29" /* ɵnov */](_v, 116).ngClassTouched; var currVal_53 = core["_29" /* ɵnov */](_v, 116).ngClassPristine; var currVal_54 = core["_29" /* ɵnov */](_v, 116).ngClassDirty; var currVal_55 = core["_29" /* ɵnov */](_v, 116).ngClassValid; var currVal_56 = core["_29" /* ɵnov */](_v, 116).ngClassInvalid; var currVal_57 = core["_29" /* ɵnov */](_v, 116).ngClassPending; _ck(_v, 113, 0, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57); var currVal_65 = core["_41" /* ɵunv */](_v, 134, 0, core["_29" /* ɵnov */](_v, 135).transform("core.user.emailagain")); _ck(_v, 134, 0, currVal_65); var currVal_66 = (core["_29" /* ɵnov */](_v, 138).pattern ? core["_29" /* ɵnov */](_v, 138).pattern : null); var currVal_67 = core["_29" /* ɵnov */](_v, 142).ngClassUntouched; var currVal_68 = core["_29" /* ɵnov */](_v, 142).ngClassTouched; var currVal_69 = core["_29" /* ɵnov */](_v, 142).ngClassPristine; var currVal_70 = core["_29" /* ɵnov */](_v, 142).ngClassDirty; var currVal_71 = core["_29" /* ɵnov */](_v, 142).ngClassValid; var currVal_72 = core["_29" /* ɵnov */](_v, 142).ngClassInvalid; var currVal_73 = core["_29" /* ɵnov */](_v, 142).ngClassPending; _ck(_v, 137, 0, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73); var currVal_82 = core["_41" /* ɵunv */](_v, 162, 0, core["_29" /* ɵnov */](_v, 163).transform("core.user.city")); _ck(_v, 162, 0, currVal_82); var currVal_83 = core["_29" /* ɵnov */](_v, 168).ngClassUntouched; var currVal_84 = core["_29" /* ɵnov */](_v, 168).ngClassTouched; var currVal_85 = core["_29" /* ɵnov */](_v, 168).ngClassPristine; var currVal_86 = core["_29" /* ɵnov */](_v, 168).ngClassDirty; var currVal_87 = core["_29" /* ɵnov */](_v, 168).ngClassValid; var currVal_88 = core["_29" /* ɵnov */](_v, 168).ngClassInvalid; var currVal_89 = core["_29" /* ɵnov */](_v, 168).ngClassPending; _ck(_v, 165, 0, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89); var currVal_95 = core["_41" /* ɵunv */](_v, 182, 0, core["_29" /* ɵnov */](_v, 183).transform("core.user.country")); _ck(_v, 182, 0, currVal_95); var currVal_96 = core["_29" /* ɵnov */](_v, 186)._disabled; var currVal_97 = core["_29" /* ɵnov */](_v, 191).ngClassUntouched; var currVal_98 = core["_29" /* ɵnov */](_v, 191).ngClassTouched; var currVal_99 = core["_29" /* ɵnov */](_v, 191).ngClassPristine; var currVal_100 = core["_29" /* ɵnov */](_v, 191).ngClassDirty; var currVal_101 = core["_29" /* ɵnov */](_v, 191).ngClassValid; var currVal_102 = core["_29" /* ɵnov */](_v, 191).ngClassInvalid; var currVal_103 = core["_29" /* ɵnov */](_v, 191).ngClassPending; _ck(_v, 185, 0, currVal_96, currVal_97, currVal_98, currVal_99, currVal_100, currVal_101, currVal_102, currVal_103); var currVal_106 = core["_41" /* ɵunv */](_v, 195, 0, core["_29" /* ɵnov */](_v, 196).transform("core.login.selectacountry")); _ck(_v, 195, 0, currVal_106); var currVal_113 = core["_41" /* ɵunv */](_v, 225, 0, core["_29" /* ɵnov */](_v, 226).transform("core.login.createaccount")); _ck(_v, 225, 0, currVal_113); });
}
function View_CoreLoginEmailSignupPage_2(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 10, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_15" /* ɵdid */](1, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["p" /* ElementRef */], events["a" /* CoreEventsProvider */], utils_utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_CoreLoginEmailSignupPage_3)), core["_15" /* ɵdid */](5, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_CoreLoginEmailSignupPage_5)), core["_15" /* ɵdid */](9, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.settingsLoaded; _ck(_v, 1, 0, currVal_0); var currVal_1 = ((_co.settingsLoaded && _co.settings) && _co.ageDigitalConsentVerification); _ck(_v, 5, 0, currVal_1); var currVal_2 = ((_co.settingsLoaded && _co.settings) && !_co.ageDigitalConsentVerification); _ck(_v, 9, 0, currVal_2); }, null); }
function View_CoreLoginEmailSignupPage_17(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "p", [["class", "item-heading padding"]], null, null, null, null, null)), (_l()(), core["_16" /* ɵeld */](1, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](2, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils_utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], providers_app["a" /* CoreAppProvider */], providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.siteName; _ck(_v, 2, 0, currVal_0); }, null); }
function View_CoreLoginEmailSignupPage_18(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.supportName; _ck(_v, 1, 0, currVal_0); }); }
function View_CoreLoginEmailSignupPage_19(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.supportEmail; _ck(_v, 1, 0, currVal_0); }); }
function View_CoreLoginEmailSignupPage_20(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 6, "div", [["padding", ""]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](2, 0, null, null, 3, "button", [["block", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.showContactOnSite() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](3, 1097728, [[75, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_40" /* ɵted */](4, 0, ["\n                    ", "\n                "])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var currVal_0 = ""; _ck(_v, 3, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = core["_41" /* ɵunv */](_v, 4, 0, core["_29" /* ɵnov */](_v, 5).transform("core.openinbrowser")); _ck(_v, 4, 0, currVal_1); });
}
function View_CoreLoginEmailSignupPage_16(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 38, "ion-list", [], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 9, "ion-item-divider", [["class", "item item-divider"], ["color", "light"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 71, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 72, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 73, { _icons: 1 }), core["_15" /* ɵdid */](8, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, 2, 1, null, View_CoreLoginEmailSignupPage_17)), core["_15" /* ɵdid */](11, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_16" /* ɵeld */](14, 0, null, null, 23, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](15, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 74, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 75, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 76, { _icons: 1 }), core["_15" /* ɵdid */](19, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_16" /* ɵeld */](21, 0, null, 2, 2, "p", [["class", "item-heading"]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](22, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_16" /* ɵeld */](25, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](26, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, 2, 1, null, View_CoreLoginEmailSignupPage_18)), core["_15" /* ɵdid */](30, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, 2, 1, null, View_CoreLoginEmailSignupPage_19)), core["_15" /* ɵdid */](33, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, 2, 1, null, View_CoreLoginEmailSignupPage_20)), core["_15" /* ɵdid */](36, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "light"; _ck(_v, 4, 0, currVal_0); var currVal_1 = "light"; _ck(_v, 8, 0, currVal_1); var currVal_2 = _co.siteName; _ck(_v, 11, 0, currVal_2); var currVal_5 = _co.supportName; _ck(_v, 30, 0, currVal_5); var currVal_6 = _co.supportEmail; _ck(_v, 33, 0, currVal_6); var currVal_7 = (!_co.supportName && !_co.supportEmail); _ck(_v, 36, 0, currVal_7); }, function (_ck, _v) { var currVal_3 = core["_41" /* ɵunv */](_v, 22, 0, core["_29" /* ɵnov */](_v, 23).transform("core.considereddigitalminor")); _ck(_v, 22, 0, currVal_3); var currVal_4 = core["_41" /* ɵunv */](_v, 26, 0, core["_29" /* ɵnov */](_v, 27).transform("core.digitalminor_desc")); _ck(_v, 26, 0, currVal_4); }); }
function View_CoreLoginEmailSignupPage_0(_l) {
    return core["_42" /* ɵvid */](0, [core["_37" /* ɵqud */](402653184, 1, { content: 0 }), (_l()(), core["_16" /* ɵeld */](1, 0, null, null, 20, "ion-header", [], null, null, null, null, null)), core["_15" /* ɵdid */](2, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_16" /* ɵeld */](4, 0, null, null, 16, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_15" /* ɵdid */](5, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), core["_15" /* ɵdid */](6, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_16" /* ɵeld */](8, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_15" /* ɵdid */](9, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_40" /* ɵted */](10, 0, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n\n        "])), (_l()(), core["_16" /* ɵeld */](13, 0, null, 2, 6, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](14, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_37" /* ɵqud */](603979776, 2, { _buttons: 1 }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreLoginEmailSignupPage_1)), core["_15" /* ɵdid */](18, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_16" /* ɵeld */](23, 0, null, null, 16, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_15" /* ɵdid */](24, 4374528, [[1, 4]], 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["K" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["D" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_16" /* ɵeld */](26, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ionRefresh" === en)) {
                var pd_0 = (_co.refreshSettings($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_15" /* ɵdid */](27, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["D" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_16" /* ɵeld */](29, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_15" /* ɵdid */](30, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n\n    "])), (_l()(), core["_11" /* ɵand */](16777216, null, 1, 1, null, View_CoreLoginEmailSignupPage_2)), core["_15" /* ɵdid */](35, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n\n    "])), (_l()(), core["_11" /* ɵand */](16777216, null, 1, 1, null, View_CoreLoginEmailSignupPage_16)), core["_15" /* ɵdid */](38, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 6, 0); var currVal_3 = _co.authInstructions; _ck(_v, 18, 0, currVal_3); var currVal_8 = (_co.settingsLoaded && !_co.isMinor); _ck(_v, 27, 0, currVal_8); var currVal_10 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 30, 0, core["_29" /* ɵnov */](_v, 31).transform("core.pulltorefresh")), ""); _ck(_v, 30, 0, currVal_10); var currVal_11 = !_co.isMinor; _ck(_v, 35, 0, currVal_11); var currVal_12 = _co.isMinor; _ck(_v, 38, 0, currVal_12); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 5)._hidden; var currVal_1 = core["_29" /* ɵnov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = core["_41" /* ɵunv */](_v, 10, 0, core["_29" /* ɵnov */](_v, 11).transform("core.login.newaccount")); _ck(_v, 10, 0, currVal_2); var currVal_4 = core["_29" /* ɵnov */](_v, 24).statusbarPadding; var currVal_5 = core["_29" /* ɵnov */](_v, 24)._hasRefresher; _ck(_v, 23, 0, currVal_4, currVal_5); var currVal_6 = (core["_29" /* ɵnov */](_v, 27).state !== "inactive"); var currVal_7 = core["_29" /* ɵnov */](_v, 27)._top; _ck(_v, 26, 0, currVal_6, currVal_7); var currVal_9 = core["_29" /* ɵnov */](_v, 30).r.state; _ck(_v, 29, 0, currVal_9); });
}
function View_CoreLoginEmailSignupPage_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "page-core-login-email-signup", [], null, null, null, View_CoreLoginEmailSignupPage_0, RenderType_CoreLoginEmailSignupPage)), core["_15" /* ɵdid */](1, 49152, null, 0, email_signup_CoreLoginEmailSignupPage, [nav_controller["a" /* NavController */], nav_params["a" /* NavParams */], esm5_forms["d" /* FormBuilder */], ws["a" /* CoreWSProvider */], sites["a" /* CoreSitesProvider */], helper["a" /* CoreLoginHelperProvider */], dom["a" /* CoreDomUtilsProvider */], translate_service["a" /* TranslateService */], utils_utils["a" /* CoreUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], user_profile_field_delegate["a" /* CoreUserProfileFieldDelegate */]], null, null)], null, null); }
var CoreLoginEmailSignupPageNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("page-core-login-email-signup", email_signup_CoreLoginEmailSignupPage, View_CoreLoginEmailSignupPage_Host_0, {}, {}, []);





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

// CONCATENATED MODULE: ./src/core/login/pages/email-signup/email-signup.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginCredentialsPageModuleNgFactory", function() { return CoreLoginCredentialsPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_email_signup.module,_.._.._.._.._node_modules_ionic_angular_components_action_sheet_action_sheet_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_alert_alert_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_app_app_root.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_loading_loading_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_modal_modal_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_picker_picker_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_popover_popover_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_select_select_popover_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_toast_toast_component.ngfactory,_.._.._.._components_context_menu_context_menu_popover.ngfactory,_.._.._.._components_course_picker_menu_course_picker_menu_popover.ngfactory,_.._.._.._components_recaptcha_recaptchamodal.ngfactory,_.._.._user_components_participants_participants.ngfactory,_email_signup.ngfactory,_angular_common,_angular_forms,_ngx_translate_core_src_translate.loader,_ngx_translate_core_src_translate.compiler,_ngx_translate_core_src_translate.parser,_ngx_translate_core_src_missing_translation_handler,_ngx_translate_core_src_translate.service,_ngx_translate_core_src_translate.store,ionic_angular_module,_ngx_translate_core_index,_.._.._.._directives_directives.module,_.._.._.._pipes_pipes.module,_.._.._.._components_components.module,_.._.._user_components_components.module,ionic_angular_util_module_loader,_email_signup PURE_IMPORTS_END */
































var CoreLoginCredentialsPageModuleNgFactory = /*@__PURE__*/ core["_13" /* ɵcmf */](CoreLoginCredentialsPageModule, [], function (_l) { return core["_25" /* ɵmod */]([core["_26" /* ɵmpd */](512, core["n" /* ComponentFactoryResolver */], core["_6" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], participants_ngfactory["a" /* CoreUserParticipantsComponentNgFactory */], CoreLoginEmailSignupPageNgFactory]], [3, core["n" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["_26" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["v" /* ɵa */]]]), core["_26" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_26" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_26" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_26" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_26" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_26" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_26" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_26" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_26" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_26" /* ɵmpd */](512, _ngx_translate_core["a" /* TranslateModule */], _ngx_translate_core["a" /* TranslateModule */], []), core["_26" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_26" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_26" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_26" /* ɵmpd */](512, components_components_module["a" /* CoreUserComponentsModule */], components_components_module["a" /* CoreUserComponentsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_26" /* ɵmpd */](512, CoreLoginCredentialsPageModule, CoreLoginCredentialsPageModule, []), core["_26" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_26" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_26" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], email_signup_CoreLoginEmailSignupPage, [])]); });






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






/***/ }),

/***/ 1917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_CoreUserProfileFieldComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_CoreUserProfileFieldComponent_0;
/* unused harmony export View_CoreUserProfileFieldComponent_Host_0 */
/* unused harmony export CoreUserProfileFieldComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = /*@__PURE__*/__webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_dynamic_component_dynamic_component_ngfactory__ = __webpack_require__(1296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dynamic_component_dynamic_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_logger__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_controller__ = /*@__PURE__*/__webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_profile_field__ = /*@__PURE__*/__webpack_require__(1310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_profile_field_delegate__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_utils_utils__ = __webpack_require__(3);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._components_dynamic_component_dynamic_component.ngfactory,_.._.._.._components_dynamic_component_dynamic_component,_.._.._.._providers_logger,ionic_angular_navigation_nav_controller,_.._.._.._providers_utils_dom,_user_profile_field,_.._providers_user_profile_field_delegate,_.._.._.._providers_utils_utils PURE_IMPORTS_END */









var styles_CoreUserProfileFieldComponent = [];
var RenderType_CoreUserProfileFieldComponent = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreUserProfileFieldComponent, data: {} });

function View_CoreUserProfileFieldComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](0, 0, null, null, 1, "core-dynamic-component", [], null, null, null, __WEBPACK_IMPORTED_MODULE_1__components_dynamic_component_dynamic_component_ngfactory__["b" /* View_CoreDynamicComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__components_dynamic_component_dynamic_component_ngfactory__["a" /* RenderType_CoreDynamicComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](1, 901120, null, 0, __WEBPACK_IMPORTED_MODULE_2__components_dynamic_component_dynamic_component__["a" /* CoreDynamicComponent */], [__WEBPACK_IMPORTED_MODULE_3__providers_logger__["a" /* CoreLoggerProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* KeyValueDiffers */], [2, __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_controller__["a" /* NavController */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_5__providers_utils_dom__["a" /* CoreDomUtilsProvider */]], { component: [0, "component"], data: [1, "data"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.componentClass; var currVal_1 = _co.data; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CoreUserProfileFieldComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](0, 0, null, null, 1, "core-user-profile-field", [], null, null, null, View_CoreUserProfileFieldComponent_0, RenderType_CoreUserProfileFieldComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_6__user_profile_field__["a" /* CoreUserProfileFieldComponent */], [__WEBPACK_IMPORTED_MODULE_7__providers_user_profile_field_delegate__["a" /* CoreUserProfileFieldDelegate */], __WEBPACK_IMPORTED_MODULE_8__providers_utils_utils__["a" /* CoreUtilsProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Injector */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CoreUserProfileFieldComponentNgFactory = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ɵccf */]("core-user-profile-field", __WEBPACK_IMPORTED_MODULE_6__user_profile_field__["a" /* CoreUserProfileFieldComponent */], View_CoreUserProfileFieldComponent_Host_0, { field: "field", signup: "signup", edit: "edit", form: "form", registerAuth: "registerAuth" }, {}, []);






/***/ })

});
//# sourceMappingURL=10.js.map