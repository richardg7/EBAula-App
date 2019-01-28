webpackJsonp([6],{

/***/ 1863:
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

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(3);

// EXTERNAL MODULE: ./src/core/courses/providers/courses.ts
var providers_courses = __webpack_require__(73);

// EXTERNAL MODULE: ./src/core/courses/providers/helper.ts
var helper = __webpack_require__(647);

// EXTERNAL MODULE: ./src/core/courses/providers/my-overview.ts
var my_overview = __webpack_require__(344);

// EXTERNAL MODULE: ./src/core/course/providers/helper.ts
var providers_helper = __webpack_require__(44);

// EXTERNAL MODULE: ./src/core/course/providers/options-delegate.ts
var options_delegate = __webpack_require__(171);

// EXTERNAL MODULE: ./src/addon/coursecompletion/providers/coursecompletion.ts
var coursecompletion = __webpack_require__(245);

// EXTERNAL MODULE: ./src/core/sitehome/providers/sitehome.ts
var sitehome = __webpack_require__(217);

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(14);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./src/components/tabs/tabs.ts
var tabs = __webpack_require__(137);

// EXTERNAL MODULE: ./src/core/sitehome/components/index/index.ts
var index = __webpack_require__(1303);

// CONCATENATED MODULE: ./src/core/courses/pages/my-overview/my-overview.ts


















/**
 * Page that displays My Overview.
 */
var my_overview_CoreCoursesMyOverviewPage = /*@__PURE__*/ (function () {
    function CoreCoursesMyOverviewPage(navCtrl, coursesProvider, domUtils, myOverviewProvider, courseHelper, sitesProvider, siteHomeProvider, courseOptionsDelegate, eventsProvider, coursesHelper, utils, courseCompletionProvider) {
        this.navCtrl = navCtrl;
        this.coursesProvider = coursesProvider;
        this.domUtils = domUtils;
        this.myOverviewProvider = myOverviewProvider;
        this.courseHelper = courseHelper;
        this.sitesProvider = sitesProvider;
        this.siteHomeProvider = siteHomeProvider;
        this.courseOptionsDelegate = courseOptionsDelegate;
        this.eventsProvider = eventsProvider;
        this.coursesHelper = coursesHelper;
        this.utils = utils;
        this.courseCompletionProvider = courseCompletionProvider;
        this.tabsReady = false;
        this.tabShown = 'courses';
        this.timeline = {
            sort: 'sortbydates',
            events: [],
            loaded: false,
            canLoadMore: undefined
        };
        this.timelineCourses = {
            courses: [],
            loaded: false,
            canLoadMore: false
        };
        this.courses = {
            selected: 'inprogress',
            loaded: false,
            filter: '',
            past: [],
            inprogress: [],
            future: []
        };
        this.showFilter = false;
        this.tabs = [];
        this.prefetchCoursesData = {
            inprogress: {},
            past: {},
            future: {}
        };
        this.prefetchIconsInitialized = false;
        this.courseIds = '';
        this.loadSiteName();
    }
    /**
     * View loaded.
     */
    CoreCoursesMyOverviewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.searchEnabled = !this.coursesProvider.isSearchCoursesDisabledInSite();
        this.downloadAllCoursesEnabled = !this.coursesProvider.isDownloadCoursesDisabledInSite();
        // Refresh the enabled flags if site is updated.
        this.updateSiteObserver = this.eventsProvider.on(events["a" /* CoreEventsProvider */].SITE_UPDATED, function () {
            var wasEnabled = _this.downloadAllCoursesEnabled;
            _this.searchEnabled = !_this.coursesProvider.isSearchCoursesDisabledInSite();
            _this.downloadAllCoursesEnabled = !_this.coursesProvider.isDownloadCoursesDisabledInSite();
            if (!wasEnabled && _this.downloadAllCoursesEnabled && _this.courses.loaded) {
                // Download all courses is enabled now, initialize it.
                _this.initPrefetchCoursesIcons();
            }
            _this.loadSiteName();
        });
        // Decide which tab to load first.
        this.siteHomeProvider.isAvailable().then(function (enabled) {
            var site = _this.sitesProvider.getCurrentSite(), displaySiteHome = site.getInfo() && site.getInfo().userhomepage === 0;
            _this.siteHomeEnabled = enabled;
            _this.firstSelectedTab = displaySiteHome ? 0 : 1;
            _this.tabsReady = true;
        });
    };
    /**
     * User entered the page.
     */
    CoreCoursesMyOverviewPage.prototype.ionViewDidEnter = function () {
        this.tabsComponent && this.tabsComponent.ionViewDidEnter();
    };
    /**
     * User left the page.
     */
    CoreCoursesMyOverviewPage.prototype.ionViewDidLeave = function () {
        this.tabsComponent && this.tabsComponent.ionViewDidLeave();
    };
    /**
     * Fetch the timeline.
     *
     * @param {number} [afterEventId] The last event id.
     * @return {Promise<any>} Promise resolved when done.
     */
    CoreCoursesMyOverviewPage.prototype.fetchMyOverviewTimeline = function (afterEventId) {
        var _this = this;
        return this.myOverviewProvider.getActionEventsByTimesort(afterEventId).then(function (events) {
            _this.timeline.events = events.events;
            _this.timeline.canLoadMore = events.canLoadMore;
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error getting my overview data.');
        });
    };
    /**
     * Fetch the timeline by courses.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    CoreCoursesMyOverviewPage.prototype.fetchMyOverviewTimelineByCourses = function () {
        var _this = this;
        return this.fetchUserCourses().then(function (courses) {
            var today = moment().unix();
            var courseIds;
            courses = courses.filter(function (course) {
                return course.startdate <= today && (!course.enddate || course.enddate >= today);
            });
            _this.timelineCourses.courses = courses;
            if (courses.length > 0) {
                courseIds = courses.map(function (course) {
                    return course.id;
                });
                return _this.myOverviewProvider.getActionEventsByCourses(courseIds).then(function (courseEvents) {
                    _this.timelineCourses.courses.forEach(function (course) {
                        course.events = courseEvents[course.id].events;
                        course.canLoadMore = courseEvents[course.id].canLoadMore;
                    });
                });
            }
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error getting my overview data.');
        });
    };
    /**
     * Fetch the courses for my overview.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    CoreCoursesMyOverviewPage.prototype.fetchMyOverviewCourses = function () {
        var _this = this;
        return this.fetchUserCourses().then(function (courses) {
            // Fetch course completion status.
            return Promise.all(courses.map(function (course) {
                if (typeof course.enablecompletion != 'undefined' && course.enablecompletion == 0) {
                    // Completion is disabled for this course, there is no need to fetch the completion status.
                    return Promise.resolve(course);
                }
                return _this.courseCompletionProvider.getCompletion(course.id).catch(function () {
                    // Ignore error, maybe course compleiton is disabled or user ha no permission.
                }).then(function (completion) {
                    course.completed = completion && completion.completed;
                    return course;
                });
            }));
        }).then(function (courses) {
            var today = moment().unix();
            _this.courses.past = [];
            _this.courses.inprogress = [];
            _this.courses.future = [];
            courses.forEach(function (course) {
                if ((course.enddate && course.enddate < today) || course.completed) {
                    // Courses that have already ended.
                    _this.courses.past.push(course);
                }
                else if (course.startdate > today) {
                    // Courses that have not started yet.
                    _this.courses.future.push(course);
                }
                else {
                    // Courses still in progress.
                    _this.courses.inprogress.push(course);
                }
            });
            _this.courses.filter = '';
            _this.showFilter = false;
            _this.filteredCourses = _this.courses[_this.courses.selected];
            _this.initPrefetchCoursesIcons();
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error getting my overview data.');
        });
    };
    /**
     * Fetch user courses.
     *
     * @return {Promise<any[]>} Promise resolved when done.
     */
    CoreCoursesMyOverviewPage.prototype.fetchUserCourses = function () {
        var _this = this;
        return this.coursesProvider.getUserCourses().then(function (courses) {
            var promises = [], courseIds = courses.map(function (course) {
                return course.id;
            });
            if (_this.coursesProvider.canGetAdminAndNavOptions()) {
                // Load course options of the course.
                promises.push(_this.coursesProvider.getCoursesAdminAndNavOptions(courseIds).then(function (options) {
                    courses.forEach(function (course) {
                        course.navOptions = options.navOptions[course.id];
                        course.admOptions = options.admOptions[course.id];
                    });
                }));
            }
            _this.courseIds = courseIds.join(',');
            promises.push(_this.coursesHelper.loadCoursesExtraInfo(courses));
            return Promise.all(promises).then(function () {
                return courses.sort(function (a, b) {
                    var compareA = a.fullname.toLowerCase(), compareB = b.fullname.toLowerCase();
                    return compareA.localeCompare(compareB);
                });
            });
        });
    };
    /**
     * Show or hide the filter.
     */
    CoreCoursesMyOverviewPage.prototype.switchFilter = function () {
        var _this = this;
        this.showFilter = !this.showFilter;
        this.courses.filter = '';
        this.filteredCourses = this.courses[this.courses.selected];
        if (this.showFilter) {
            setTimeout(function () {
                _this.searchbar.setFocus();
            }, 500);
        }
    };
    /**
     * The filter has changed.
     *
     * @param {any} Received Event.
     */
    CoreCoursesMyOverviewPage.prototype.filterChanged = function (event) {
        var newValue = event.target.value && event.target.value.trim().toLowerCase();
        if (!newValue || !this.courses[this.courses.selected]) {
            this.filteredCourses = this.courses[this.courses.selected];
        }
        else {
            this.filteredCourses = this.courses[this.courses.selected].filter(function (course) {
                return course.fullname.toLowerCase().indexOf(newValue) > -1;
            });
        }
    };
    /**
     * Refresh the data.
     *
     * @param {any} refresher Refresher.
     * @return {Promise<any>} Promise resolved when done.
     */
    CoreCoursesMyOverviewPage.prototype.refreshMyOverview = function (refresher) {
        var _this = this;
        var promises = [];
        if (this.tabShown == 'timeline') {
            promises.push(this.myOverviewProvider.invalidateActionEventsByTimesort());
            promises.push(this.myOverviewProvider.invalidateActionEventsByCourses());
        }
        promises.push(this.coursesProvider.invalidateUserCourses().finally(function () {
            // Invalidate course completion data.
            return _this.coursesProvider.getUserCourses().then(function (courses) {
                return _this.utils.allPromises(courses.map(function (course) {
                    return _this.courseCompletionProvider.invalidateCourseCompletion(course.id);
                }));
            });
        }));
        promises.push(this.courseOptionsDelegate.clearAndInvalidateCoursesOptions());
        if (this.courseIds) {
            promises.push(this.coursesProvider.invalidateCoursesByField('ids', this.courseIds));
        }
        return this.utils.allPromises(promises).finally(function () {
            switch (_this.tabShown) {
                case 'timeline':
                    switch (_this.timeline.sort) {
                        case 'sortbydates':
                            return _this.fetchMyOverviewTimeline();
                        case 'sortbycourses':
                            return _this.fetchMyOverviewTimelineByCourses();
                        default:
                    }
                    break;
                case 'courses':
                    _this.prefetchIconsInitialized = false;
                    return _this.fetchMyOverviewCourses();
                default:
            }
        }).finally(function () {
            refresher.complete();
        });
    };
    /**
     * Change timeline sort being viewed.
     */
    CoreCoursesMyOverviewPage.prototype.switchSort = function () {
        var _this = this;
        switch (this.timeline.sort) {
            case 'sortbydates':
                if (!this.timeline.loaded) {
                    this.fetchMyOverviewTimeline().finally(function () {
                        _this.timeline.loaded = true;
                    });
                }
                break;
            case 'sortbycourses':
                if (!this.timelineCourses.loaded) {
                    this.fetchMyOverviewTimelineByCourses().finally(function () {
                        _this.timelineCourses.loaded = true;
                    });
                }
                break;
            default:
        }
    };
    /**
     * The tab has changed.
     *
     * @param {string} tab Name of the new tab.
     */
    CoreCoursesMyOverviewPage.prototype.tabChanged = function (tab) {
        var _this = this;
        this.tabShown = tab;
        switch (this.tabShown) {
            case 'timeline':
                if (!this.timeline.loaded) {
                    this.fetchMyOverviewTimeline().finally(function () {
                        _this.timeline.loaded = true;
                    });
                }
                break;
            case 'courses':
                if (!this.courses.loaded) {
                    this.fetchMyOverviewCourses().finally(function () {
                        _this.courses.loaded = true;
                    });
                }
                break;
            default:
        }
    };
    /**
     * Load more events.
     */
    CoreCoursesMyOverviewPage.prototype.loadMoreTimeline = function () {
        return this.fetchMyOverviewTimeline(this.timeline.canLoadMore);
    };
    /**
     * Load more events.
     *
     * @param {any} course Course.
     * @return {Promise<any>} Promise resolved when done.
     */
    CoreCoursesMyOverviewPage.prototype.loadMoreCourse = function (course) {
        return this.myOverviewProvider.getActionEventsByCourse(course.id, course.canLoadMore).then(function (courseEvents) {
            course.events = course.events.concat(courseEvents.events);
            course.canLoadMore = courseEvents.canLoadMore;
        });
    };
    /**
     * Go to search courses.
     */
    CoreCoursesMyOverviewPage.prototype.openSearch = function () {
        this.navCtrl.push('CoreCoursesSearchPage');
    };
    /**
     * The selected courses have changed.
     */
    CoreCoursesMyOverviewPage.prototype.selectedChanged = function () {
        this.filteredCourses = this.courses[this.courses.selected];
    };
    /**
     * Prefetch all the shown courses.
     *
     * @return {Promise<any>} Promise resolved when done.
     */
    CoreCoursesMyOverviewPage.prototype.prefetchCourses = function () {
        var _this = this;
        var selected = this.courses.selected, selectedData = this.prefetchCoursesData[selected], initialIcon = selectedData.icon;
        selectedData.icon = 'spinner';
        selectedData.badge = '';
        return this.courseHelper.confirmAndPrefetchCourses(this.courses[selected], function (progress) {
            selectedData.badge = progress.count + ' / ' + progress.total;
        }).then(function () {
            selectedData.icon = 'refresh';
        }).catch(function (error) {
            if (!_this.isDestroyed) {
                _this.domUtils.showErrorModalDefault(error, 'core.course.errordownloadingcourse', true);
                selectedData.icon = initialIcon;
            }
        }).finally(function () {
            selectedData.badge = '';
        });
    };
    /**
     * Initialize the prefetch icon for selected courses.
     */
    CoreCoursesMyOverviewPage.prototype.initPrefetchCoursesIcons = function () {
        var _this = this;
        if (this.prefetchIconsInitialized || !this.downloadAllCoursesEnabled) {
            // Already initialized.
            return;
        }
        this.prefetchIconsInitialized = true;
        Object.keys(this.prefetchCoursesData).forEach(function (filter) {
            if (!_this.courses[filter] || _this.courses[filter].length < 2) {
                // Not enough courses.
                _this.prefetchCoursesData[filter].icon = '';
                return;
            }
            _this.courseHelper.determineCoursesStatus(_this.courses[filter]).then(function (status) {
                var icon = _this.courseHelper.getCourseStatusIconAndTitleFromStatus(status).icon;
                if (icon == 'spinner') {
                    // It seems all courses are being downloaded, show a download button instead.
                    icon = 'cloud-download';
                }
                _this.prefetchCoursesData[filter].icon = icon;
            });
        });
    };
    /**
     * Load the site name.
     */
    CoreCoursesMyOverviewPage.prototype.loadSiteName = function () {
        this.siteName = this.sitesProvider.getCurrentSite().getInfo().sitename;
    };
    /**
     * Component being destroyed.
     */
    CoreCoursesMyOverviewPage.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
        this.updateSiteObserver && this.updateSiteObserver.off();
    };
    return CoreCoursesMyOverviewPage;
}());





// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(33);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(29);

// EXTERNAL MODULE: ./src/core/courses/components/components.module.ts
var components_components_module = __webpack_require__(1297);

// EXTERNAL MODULE: ./src/core/sitehome/components/components.module.ts
var sitehome_components_components_module = __webpack_require__(1312);

// CONCATENATED MODULE: ./src/core/courses/pages/my-overview/my-overview.module.ts









var CoreCoursesMyOverviewPageModule = /*@__PURE__*/ (function () {
    function CoreCoursesMyOverviewPageModule() {
    }
    return CoreCoursesMyOverviewPageModule;
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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(178);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(24);

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

// EXTERNAL MODULE: ./src/core/sitehome/components/index/index.ngfactory.js + 5 modules
var index_ngfactory = __webpack_require__(1916);

// EXTERNAL MODULE: ./src/core/course/providers/course.ts
var course = __webpack_require__(16);

// EXTERNAL MODULE: ./src/core/course/providers/module-prefetch-delegate.ts
var module_prefetch_delegate = __webpack_require__(52);

// EXTERNAL MODULE: ./src/components/icon/icon.ngfactory.js
var icon_ngfactory = __webpack_require__(194);

// EXTERNAL MODULE: ./src/components/icon/icon.ts
var icon_icon = __webpack_require__(165);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/badge/badge.js
var badge = __webpack_require__(212);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/spinner/spinner.ngfactory.js
var spinner_ngfactory = __webpack_require__(180);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/spinner/spinner.js
var spinner = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(9);

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ngfactory.js
var empty_box_ngfactory = __webpack_require__(164);

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ts
var empty_box = __webpack_require__(134);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/searchbar/searchbar.ngfactory.js
var searchbar_ngfactory = __webpack_require__(1914);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/searchbar/searchbar.js
var searchbar = __webpack_require__(645);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/col.js
var col = __webpack_require__(115);

// EXTERNAL MODULE: ./src/core/courses/components/course-progress/course-progress.ngfactory.js
var course_progress_ngfactory = __webpack_require__(1915);

// EXTERNAL MODULE: ./src/core/courses/components/course-progress/course-progress.ts
var course_progress = __webpack_require__(1311);

// EXTERNAL MODULE: ./src/core/course/providers/format-delegate.ts
var format_delegate = __webpack_require__(147);

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(57);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/row.js
var row = __webpack_require__(116);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.ngfactory.js
var select_ngfactory = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.js
var select_select = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.js
var item = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/option/option.js
var option_option = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/grid.js
var grid = __webpack_require__(150);

// EXTERNAL MODULE: ./src/directives/external-content.ts
var external_content = __webpack_require__(162);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(6);

// EXTERNAL MODULE: ./src/providers/filepool.ts
var filepool = __webpack_require__(17);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var url = __webpack_require__(25);

// EXTERNAL MODULE: ./src/providers/app.ts
var providers_app = __webpack_require__(11);

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(40);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(12);

// EXTERNAL MODULE: ./src/core/contentlinks/providers/helper.ts
var contentlinks_providers_helper = __webpack_require__(23);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(35);

// EXTERNAL MODULE: ./src/providers/utils/iframe.ts
var iframe = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.ngfactory.js + 1 modules
var item_ngfactory = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-reorder.js + 1 modules
var item_reorder = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(31);

// EXTERNAL MODULE: ./src/directives/link.ts
var directives_link = __webpack_require__(198);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-group.js
var item_group = __webpack_require__(431);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(163);

// EXTERNAL MODULE: ./src/pipes/format-date.ts
var format_date = __webpack_require__(327);

// EXTERNAL MODULE: ./src/core/courses/components/overview-events/overview-events.ts
var overview_events = __webpack_require__(1337);

// CONCATENATED MODULE: ./src/core/courses/components/overview-events/overview-events.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._directives_external_content,_.._.._.._providers_logger,_.._.._.._providers_filepool,ionic_angular_platform_platform,_.._.._.._providers_sites,_.._.._.._providers_utils_dom,_.._.._.._providers_utils_url,_.._.._.._providers_app,_.._.._.._providers_utils_utils,_.._.._.._directives_format_text,_.._.._.._providers_utils_text,_ngx_translate_core_src_translate.service,_.._.._contentlinks_providers_helper,ionic_angular_navigation_nav_controller,ionic_angular_components_content_content,_.._.._.._components_split_view_split_view,_.._.._.._providers_utils_iframe,_.._.._.._providers_events,ionic_angular_components_badge_badge,ionic_angular_config_config,_.._.._.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,_angular_common,_.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,_.._.._.._directives_link,ionic_angular_components_item_item_group,ionic_angular_components_item_item_divider,_ngx_translate_core_src_translate.pipe,_.._.._.._.._node_modules_ionic_angular_components_spinner_spinner.ngfactory,ionic_angular_components_spinner_spinner,_.._.._.._components_empty_box_empty_box.ngfactory,_.._.._.._components_empty_box_empty_box,_.._.._.._pipes_format_date,_overview_events,_.._.._course_providers_course PURE_IMPORTS_END */








































var styles_CoreCoursesOverviewEventsComponent = [];
var RenderType_CoreCoursesOverviewEventsComponent = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreCoursesOverviewEventsComponent, data: {} });

function View_CoreCoursesOverviewEventsComponent_2(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "img", [["alt", ""], ["class", "core-module-icon"], ["core-external-content", ""], ["item-start", ""], ["role", "presentation"]], [[8, "src", 4]], null, null, null, null)), core["_15" /* ɵdid */](1, 4210688, null, 0, external_content["a" /* CoreExternalContentDirective */], [core["p" /* ElementRef */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], platform["a" /* Platform */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], providers_app["a" /* CoreAppProvider */], utils["a" /* CoreUtilsProvider */]], null, null)], null, function (_ck, _v) { var currVal_0 = _v.parent.context.event.iconUrl; _ck(_v, 0, 0, currVal_0); }); }
function View_CoreCoursesOverviewEventsComponent_3(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](1, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], providers_app["a" /* CoreAppProvider */], contentlinks_providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.event.course.fullnamedisplay; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CoreCoursesOverviewEventsComponent_5(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "ion-badge", [["item-end", ""], ["margin-start", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, badge["a" /* Badge */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), (_l()(), core["_40" /* ɵted */](2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.event.action.itemcount; _ck(_v, 2, 0, currVal_0); }); }
function View_CoreCoursesOverviewEventsComponent_4(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, "button", [["class", "hidden-phone"], ["clear", ""], ["ion-button", ""], ["item-end", ""]], [[8, "title", 0], [8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.action($event, _v.parent.context.event.action.url) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](1, 1097728, [[2, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { clear: [0, "clear"] }, null), (_l()(), core["_40" /* ɵted */](2, 0, ["\n            ", "\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_CoreCoursesOverviewEventsComponent_5)), core["_15" /* ɵdid */](4, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); var currVal_4 = _v.parent.context.event.action.showitemcount; _ck(_v, 4, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = _v.parent.context.event.action.name; var currVal_1 = !_v.parent.context.event.action.actionable; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _v.parent.context.event.action.name; _ck(_v, 2, 0, currVal_3); });
}
function View_CoreCoursesOverviewEventsComponent_6(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "ion-badge", [["class", "hidden-tablet"], ["item-end", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, badge["a" /* Badge */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), (_l()(), core["_40" /* ɵted */](2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.event.action.itemcount; _ck(_v, 2, 0, currVal_0); }); }
function View_CoreCoursesOverviewEventsComponent_1(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_16" /* ɵeld */](1, 0, null, null, 26, "a", [["capture", "true"], ["class", "core-course-module-handler item-media item item-block"], ["core-link", ""], ["detail-none", ""], ["ion-item", ""], ["text-wrap", ""]], [[8, "href", 4], [8, "title", 0]], null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](2, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_15" /* ɵdid */](6, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_15" /* ɵdid */](7, 81920, null, 0, directives_link["a" /* CoreLinkDirective */], [core["p" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */], utils["a" /* CoreUtilsProvider */], sites["a" /* CoreSitesProvider */], url["a" /* CoreUrlUtilsProvider */], contentlinks_providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]]], { capture: [0, "capture"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_CoreCoursesOverviewEventsComponent_2)), core["_15" /* ɵdid */](10, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_16" /* ɵeld */](12, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_16" /* ɵeld */](13, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](14, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], providers_app["a" /* CoreAppProvider */], contentlinks_providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_16" /* ɵeld */](16, 0, null, 2, 4, "p", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](17, null, ["", " "])), core["_34" /* ɵppd */](18, 2), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesOverviewEventsComponent_3)), core["_15" /* ɵdid */](20, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 4, 1, null, View_CoreCoursesOverviewEventsComponent_4)), core["_15" /* ɵdid */](23, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, 4, 1, null, View_CoreCoursesOverviewEventsComponent_6)), core["_15" /* ɵdid */](26, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "true"; _ck(_v, 7, 0, currVal_2); var currVal_3 = _v.context.event.iconUrl; _ck(_v, 10, 0, currVal_3); var currVal_4 = _v.context.event.name; _ck(_v, 14, 0, currVal_4); var currVal_6 = _co.showCourse; _ck(_v, 20, 0, currVal_6); var currVal_7 = _v.context.event.action; _ck(_v, 23, 0, currVal_7); var currVal_8 = _v.context.event.action.showitemcount; _ck(_v, 26, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = _v.context.event.url; var currVal_1 = _v.context.event.name; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_5 = core["_41" /* ɵunv */](_v, 17, 0, _ck(_v, 18, 0, core["_29" /* ɵnov */](_v.parent, 0), (_v.context.event.timesort * 1000), "dfmediumdate")); _ck(_v, 17, 0, currVal_5); }); }
function View_CoreCoursesOverviewEventsComponent_9(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_CoreCoursesOverviewEventsComponent_8(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 2, null, View_CoreCoursesOverviewEventsComponent_9)), core["_15" /* ɵdid */](3, 540672, null, 0, common["r" /* NgTemplateOutlet */], [core["W" /* ViewContainerRef */]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), core["_33" /* ɵpod */](4, { event: 0 }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var currVal_0 = _ck(_v, 4, 0, _v.context.$implicit); var currVal_1 = core["_29" /* ɵnov */](_v.parent.parent, 1); _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_CoreCoursesOverviewEventsComponent_7(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 14, "ion-item-group", [], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, item_group["a" /* ItemGroup */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 7, "ion-item-divider", [["class", "item item-divider"], ["color", "danger"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 6, { _icons: 1 }), core["_15" /* ɵdid */](8, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_40" /* ɵted */](9, 2, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesOverviewEventsComponent_8)), core["_15" /* ɵdid */](13, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "danger"; _ck(_v, 4, 0, currVal_0); var currVal_1 = "danger"; _ck(_v, 8, 0, currVal_1); var currVal_3 = _co.recentlyOverdue; _ck(_v, 13, 0, currVal_3); }, function (_ck, _v) { var currVal_2 = core["_41" /* ɵunv */](_v, 9, 0, core["_29" /* ɵnov */](_v, 10).transform("core.courses.recentlyoverdue")); _ck(_v, 9, 0, currVal_2); }); }
function View_CoreCoursesOverviewEventsComponent_12(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_CoreCoursesOverviewEventsComponent_11(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 2, null, View_CoreCoursesOverviewEventsComponent_12)), core["_15" /* ɵdid */](3, 540672, null, 0, common["r" /* NgTemplateOutlet */], [core["W" /* ViewContainerRef */]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), core["_33" /* ɵpod */](4, { event: 0 }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var currVal_0 = _ck(_v, 4, 0, _v.context.$implicit); var currVal_1 = core["_29" /* ɵnov */](_v.parent.parent, 1); _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_CoreCoursesOverviewEventsComponent_10(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 14, "ion-item-group", [], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, item_group["a" /* ItemGroup */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 7, "ion-item-divider", [["class", "item item-divider"], ["color", "light"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 7, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 8, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 9, { _icons: 1 }), core["_15" /* ɵdid */](8, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_40" /* ɵted */](9, 2, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesOverviewEventsComponent_11)), core["_15" /* ɵdid */](13, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "light"; _ck(_v, 4, 0, currVal_0); var currVal_1 = "light"; _ck(_v, 8, 0, currVal_1); var currVal_3 = _co.next7Days; _ck(_v, 13, 0, currVal_3); }, function (_ck, _v) { var currVal_2 = core["_41" /* ɵunv */](_v, 9, 0, core["_29" /* ɵnov */](_v, 10).transform("core.courses.next7days")); _ck(_v, 9, 0, currVal_2); }); }
function View_CoreCoursesOverviewEventsComponent_15(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_CoreCoursesOverviewEventsComponent_14(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 2, null, View_CoreCoursesOverviewEventsComponent_15)), core["_15" /* ɵdid */](3, 540672, null, 0, common["r" /* NgTemplateOutlet */], [core["W" /* ViewContainerRef */]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), core["_33" /* ɵpod */](4, { event: 0 }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var currVal_0 = _ck(_v, 4, 0, _v.context.$implicit); var currVal_1 = core["_29" /* ɵnov */](_v.parent.parent, 1); _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_CoreCoursesOverviewEventsComponent_13(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 14, "ion-item-group", [], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, item_group["a" /* ItemGroup */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 7, "ion-item-divider", [["class", "item item-divider"], ["color", "light"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 10, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 11, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 12, { _icons: 1 }), core["_15" /* ɵdid */](8, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_40" /* ɵted */](9, 2, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesOverviewEventsComponent_14)), core["_15" /* ɵdid */](13, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "light"; _ck(_v, 4, 0, currVal_0); var currVal_1 = "light"; _ck(_v, 8, 0, currVal_1); var currVal_3 = _co.next30Days; _ck(_v, 13, 0, currVal_3); }, function (_ck, _v) { var currVal_2 = core["_41" /* ɵunv */](_v, 9, 0, core["_29" /* ɵnov */](_v, 10).transform("core.courses.next30days")); _ck(_v, 9, 0, currVal_2); }); }
function View_CoreCoursesOverviewEventsComponent_18(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_CoreCoursesOverviewEventsComponent_17(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 2, null, View_CoreCoursesOverviewEventsComponent_18)), core["_15" /* ɵdid */](3, 540672, null, 0, common["r" /* NgTemplateOutlet */], [core["W" /* ViewContainerRef */]], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), core["_33" /* ɵpod */](4, { event: 0 }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "]))], function (_ck, _v) { var currVal_0 = _ck(_v, 4, 0, _v.context.$implicit); var currVal_1 = core["_29" /* ɵnov */](_v.parent.parent, 1); _ck(_v, 3, 0, currVal_0, currVal_1); }, null); }
function View_CoreCoursesOverviewEventsComponent_16(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 14, "ion-item-group", [], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, item_group["a" /* ItemGroup */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 7, "ion-item-divider", [["class", "item item-divider"], ["color", "light"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 13, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 14, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 15, { _icons: 1 }), core["_15" /* ɵdid */](8, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_40" /* ɵted */](9, 2, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesOverviewEventsComponent_17)), core["_15" /* ɵdid */](13, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "light"; _ck(_v, 4, 0, currVal_0); var currVal_1 = "light"; _ck(_v, 8, 0, currVal_1); var currVal_3 = _co.future; _ck(_v, 13, 0, currVal_3); }, function (_ck, _v) { var currVal_2 = core["_41" /* ɵunv */](_v, 9, 0, core["_29" /* ɵnov */](_v, 10).transform("core.courses.future")); _ck(_v, 9, 0, currVal_2); }); }
function View_CoreCoursesOverviewEventsComponent_20(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 3, "button", [["block", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.loadMoreEvents() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](1, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_40" /* ɵted */](2, 0, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = ""; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = core["_41" /* ɵunv */](_v, 2, 0, core["_29" /* ɵnov */](_v, 3).transform("core.loadmore")); _ck(_v, 2, 0, currVal_1); });
}
function View_CoreCoursesOverviewEventsComponent_21(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "ion-spinner", [], [[2, "spinner-paused", null]], null, null, spinner_ngfactory["b" /* View_Spinner_0 */], spinner_ngfactory["a" /* RenderType_Spinner */])), core["_15" /* ɵdid */](1, 114688, null, 0, spinner["a" /* Spinner */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 1)._paused; _ck(_v, 0, 0, currVal_0); }); }
function View_CoreCoursesOverviewEventsComponent_19(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 8, "div", [["padding", ""], ["text-center", ""]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesOverviewEventsComponent_20)), core["_15" /* ɵdid */](4, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesOverviewEventsComponent_21)), core["_15" /* ɵdid */](7, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.loadingMore; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.loadingMore; _ck(_v, 7, 0, currVal_1); }, null); }
function View_CoreCoursesOverviewEventsComponent_22(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "core-empty-box", [["image", "assets/img/icons/activities.svg"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_15" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], image: [1, "image"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, core["_29" /* ɵnov */](_v, 2).transform("core.courses.noevents")); var currVal_1 = "assets/img/icons/activities.svg"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CoreCoursesOverviewEventsComponent_23(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "core-empty-box", [], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_15" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, core["_29" /* ɵnov */](_v, 2).transform("core.courses.noevents")); _ck(_v, 1, 0, currVal_0); }, null); }
function View_CoreCoursesOverviewEventsComponent_0(_l) { return core["_42" /* ɵvid */](0, [core["_32" /* ɵpid */](0, format_date["a" /* CoreFormatDatePipe */], [logger["a" /* CoreLoggerProvider */], translate_service["a" /* TranslateService */]]), (_l()(), core["_11" /* ɵand */](0, [["eventTemplate", 2]], null, 0, null, View_CoreCoursesOverviewEventsComponent_1)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesOverviewEventsComponent_7)), core["_15" /* ɵdid */](4, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesOverviewEventsComponent_10)), core["_15" /* ɵdid */](7, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesOverviewEventsComponent_13)), core["_15" /* ɵdid */](10, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesOverviewEventsComponent_16)), core["_15" /* ɵdid */](13, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesOverviewEventsComponent_19)), core["_15" /* ɵdid */](16, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n"])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesOverviewEventsComponent_22)), core["_15" /* ɵdid */](19, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesOverviewEventsComponent_23)), core["_15" /* ɵdid */](22, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.recentlyOverdue.length > 0); _ck(_v, 4, 0, currVal_0); var currVal_1 = (_co.next7Days.length > 0); _ck(_v, 7, 0, currVal_1); var currVal_2 = (_co.next30Days.length > 0); _ck(_v, 10, 0, currVal_2); var currVal_3 = (_co.future.length > 0); _ck(_v, 13, 0, currVal_3); var currVal_4 = (_co.canLoadMore && !_co.empty); _ck(_v, 16, 0, currVal_4); var currVal_5 = (_co.empty && _co.showCourse); _ck(_v, 19, 0, currVal_5); var currVal_6 = (_co.empty && !_co.showCourse); _ck(_v, 22, 0, currVal_6); }, null); }
function View_CoreCoursesOverviewEventsComponent_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-courses-overview-events", [], null, null, null, View_CoreCoursesOverviewEventsComponent_0, RenderType_CoreCoursesOverviewEventsComponent)), core["_15" /* ɵdid */](1, 573440, null, 0, overview_events["a" /* CoreCoursesOverviewEventsComponent */], [[2, nav_controller["a" /* NavController */]], utils["a" /* CoreUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], dom["a" /* CoreDomUtilsProvider */], sites["a" /* CoreSitesProvider */], course["a" /* CoreCourseProvider */], contentlinks_providers_helper["a" /* CoreContentLinksHelperProvider */]], null, null)], null, null); }
var CoreCoursesOverviewEventsComponentNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("core-courses-overview-events", overview_events["a" /* CoreCoursesOverviewEventsComponent */], View_CoreCoursesOverviewEventsComponent_Host_0, { events: "events", showCourse: "showCourse", canLoadMore: "canLoadMore" }, { loadMore: "loadMore" }, []);





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

// EXTERNAL MODULE: ./src/components/tabs/tabs.ngfactory.js
var tabs_ngfactory = __webpack_require__(426);

// EXTERNAL MODULE: ./src/components/tabs/tab.ngfactory.js
var tab_ngfactory = __webpack_require__(427);

// EXTERNAL MODULE: ./src/components/tabs/tab.ts
var tab = __webpack_require__(70);

// CONCATENATED MODULE: ./src/core/courses/pages/my-overview/my-overview.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_config_config,_ngx_translate_core_src_translate.pipe,_ngx_translate_core_src_translate.service,ionic_angular_components_icon_icon,_.._.._.._.._node_modules_ionic_angular_components_content_content.ngfactory,ionic_angular_components_content_content,ionic_angular_platform_platform,ionic_angular_platform_dom_controller,ionic_angular_components_app_app,ionic_angular_platform_keyboard,ionic_angular_navigation_view_controller,ionic_angular_navigation_nav_controller,ionic_angular_components_refresher_refresher,ionic_angular_gestures_gesture_controller,_.._.._.._.._node_modules_ionic_angular_components_refresher_refresher_content.ngfactory,ionic_angular_components_refresher_refresher_content,_.._.._sitehome_components_index_index.ngfactory,_.._.._sitehome_components_index_index,_.._.._.._providers_utils_dom,_.._.._.._providers_sites,_.._.._course_providers_course,_.._.._course_providers_helper,_.._.._course_providers_module_prefetch_delegate,_.._.._sitehome_providers_sitehome,_.._.._.._components_icon_icon.ngfactory,_.._.._.._components_icon_icon,ionic_angular_components_badge_badge,_.._.._.._.._node_modules_ionic_angular_components_spinner_spinner.ngfactory,ionic_angular_components_spinner_spinner,_angular_common,_.._.._.._components_empty_box_empty_box.ngfactory,_.._.._.._components_empty_box_empty_box,_.._.._.._.._node_modules_ionic_angular_components_searchbar_searchbar.ngfactory,_angular_forms,ionic_angular_components_searchbar_searchbar,ionic_angular_components_grid_col,_.._components_course_progress_course_progress.ngfactory,_.._components_course_progress_course_progress,_.._.._course_providers_format_delegate,_.._.._.._providers_events,_.._providers_courses,_.._.._.._components_loading_loading.ngfactory,_.._.._.._components_loading_loading,_.._.._.._providers_utils_utils,ionic_angular_components_grid_row,_.._.._.._.._node_modules_ionic_angular_components_select_select.ngfactory,ionic_angular_components_select_select,ionic_angular_util_form,ionic_angular_components_item_item,ionic_angular_navigation_deep_linker,ionic_angular_components_option_option,ionic_angular_components_grid_grid,_.._components_overview_events_overview_events.ngfactory,_.._components_overview_events_overview_events,_.._.._.._providers_utils_text,_.._.._contentlinks_providers_helper,ionic_angular_components_toolbar_toolbar_header,_.._.._.._.._node_modules_ionic_angular_components_toolbar_navbar.ngfactory,ionic_angular_components_toolbar_navbar,_.._.._.._directives_back_button,_.._.._.._.._node_modules_ionic_angular_components_toolbar_toolbar_title.ngfactory,ionic_angular_components_toolbar_toolbar_title,ionic_angular_components_toolbar_toolbar,_.._.._.._directives_format_text,_.._.._.._providers_utils_url,_.._.._.._providers_logger,_.._.._.._providers_filepool,_.._.._.._providers_app,_.._.._.._components_split_view_split_view,_.._.._.._providers_utils_iframe,ionic_angular_components_toolbar_toolbar_item,_.._.._.._components_tabs_tabs.ngfactory,_.._.._.._components_tabs_tabs,_.._.._.._components_tabs_tab.ngfactory,_.._.._.._components_tabs_tab,_my_overview,_.._providers_my_overview,_.._.._course_providers_options_delegate,_.._providers_helper,_.._.._.._addon_coursecompletion_providers_coursecompletion PURE_IMPORTS_END */



















































































var styles_CoreCoursesMyOverviewPage = [];
var RenderType_CoreCoursesMyOverviewPage = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreCoursesMyOverviewPage, data: {} });

function View_CoreCoursesMyOverviewPage_1(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 6, "button", [["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.switchFilter() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](1, 1097728, [[4, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_16" /* ɵeld */](4, 0, null, 0, 1, "ion-icon", [["name", "funnel"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](5, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n            "]))], function (_ck, _v) { var currVal_2 = "funnel"; _ck(_v, 5, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 0, 0, core["_29" /* ɵnov */](_v, 2).transform("core.courses.filtermycourses")); _ck(_v, 0, 0, currVal_0); var currVal_1 = core["_29" /* ɵnov */](_v, 5)._hidden; _ck(_v, 4, 0, currVal_1); });
}
function View_CoreCoursesMyOverviewPage_2(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 6, "button", [["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.openSearch() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](1, 1097728, [[4, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_16" /* ɵeld */](4, 0, null, 0, 1, "ion-icon", [["name", "search"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](5, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n            "]))], function (_ck, _v) { var currVal_2 = "search"; _ck(_v, 5, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 0, 0, core["_29" /* ɵnov */](_v, 2).transform("core.courses.searchcourses")); _ck(_v, 0, 0, currVal_0); var currVal_1 = core["_29" /* ɵnov */](_v, 5)._hidden; _ck(_v, 4, 0, currVal_1); });
}
function View_CoreCoursesMyOverviewPage_3(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](1, 0, null, null, 13, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_15" /* ɵdid */](2, 4374528, [[6, 4]], 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["K" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["D" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](4, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ionRefresh" === en)) {
                var pd_0 = (_co.siteHomeComponent.doRefresh($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_15" /* ɵdid */](5, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["D" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_15" /* ɵdid */](8, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](12, 0, null, 1, 1, "core-sitehome-index", [], null, null, null, index_ngfactory["b" /* View_CoreSiteHomeIndexComponent_0 */], index_ngfactory["a" /* RenderType_CoreSiteHomeIndexComponent */])), core["_15" /* ɵdid */](13, 114688, [[3, 4]], 0, index["a" /* CoreSiteHomeIndexComponent */], [dom["a" /* CoreDomUtilsProvider */], sites["a" /* CoreSitesProvider */], course["a" /* CoreCourseProvider */], providers_helper["a" /* CoreCourseHelperProvider */], module_prefetch_delegate["a" /* CoreCourseModulePrefetchDelegate */], sitehome["a" /* CoreSiteHomeProvider */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = (_co.siteHomeComponent && _co.siteHomeComponent.dataLoaded); _ck(_v, 5, 0, currVal_4); var currVal_6 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 8, 0, core["_29" /* ɵnov */](_v, 9).transform("core.pulltorefresh")), ""); _ck(_v, 8, 0, currVal_6); _ck(_v, 13, 0); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 2).statusbarPadding; var currVal_1 = core["_29" /* ɵnov */](_v, 2)._hasRefresher; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = (core["_29" /* ɵnov */](_v, 5).state !== "inactive"); var currVal_3 = core["_29" /* ɵnov */](_v, 5)._top; _ck(_v, 4, 0, currVal_2, currVal_3); var currVal_5 = core["_29" /* ɵnov */](_v, 8).r.state; _ck(_v, 7, 0, currVal_5); });
}
function View_CoreCoursesMyOverviewPage_6(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, "button", [["clear", ""], ["color", "dark"], ["icon-only", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.prefetchCourses() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_15" /* ɵdid */](1, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"], clear: [1, "clear"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                                    "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, 0, 1, "core-icon", [], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_15" /* ɵdid */](4, 114688, null, 0, icon_icon["a" /* CoreIconComponent */], [core["p" /* ElementRef */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                                "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "dark"; var currVal_1 = ""; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.prefetchCoursesData[_co.courses.selected].icon; _ck(_v, 4, 0, currVal_2); }, null);
}
function View_CoreCoursesMyOverviewPage_7(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "ion-badge", [["class", "core-course-download-courses-progress"]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, badge["a" /* Badge */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), (_l()(), core["_40" /* ɵted */](2, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.prefetchCoursesData[_co.courses.selected].badge; _ck(_v, 2, 0, currVal_0); }); }
function View_CoreCoursesMyOverviewPage_8(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "ion-spinner", [], [[2, "spinner-paused", null]], null, null, spinner_ngfactory["b" /* View_Spinner_0 */], spinner_ngfactory["a" /* RenderType_Spinner */])), core["_15" /* ɵdid */](1, 114688, null, 0, spinner["a" /* Spinner */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 1)._paused; _ck(_v, 0, 0, currVal_0); }); }
function View_CoreCoursesMyOverviewPage_5(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 10, "div", [["class", "core-button-spinner"]], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "])), (_l()(), core["_11" /* ɵand */](16777216, [[7, 2]], null, 1, null, View_CoreCoursesMyOverviewPage_6)), core["_15" /* ɵdid */](3, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "])), (_l()(), core["_11" /* ɵand */](16777216, [[7, 2]], null, 1, null, View_CoreCoursesMyOverviewPage_7)), core["_15" /* ɵdid */](6, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "])), (_l()(), core["_11" /* ɵand */](16777216, [[7, 2]], null, 1, null, View_CoreCoursesMyOverviewPage_8)), core["_15" /* ɵdid */](9, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.prefetchCoursesData[_co.courses.selected].icon && (_co.prefetchCoursesData[_co.courses.selected].icon != "spinner")); _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.prefetchCoursesData[_co.courses.selected].badge; _ck(_v, 6, 0, currVal_1); var currVal_2 = (!_co.prefetchCoursesData[_co.courses.selected].icon || (_co.prefetchCoursesData[_co.courses.selected].icon == "spinner")); _ck(_v, 9, 0, currVal_2); }, null); }
function View_CoreCoursesMyOverviewPage_9(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "core-empty-box", [["image", "assets/img/icons/courses.svg"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_15" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], image: [1, "image"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, core["_29" /* ɵnov */](_v, 2).transform("core.courses.nocoursesinprogress")); var currVal_1 = "assets/img/icons/courses.svg"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CoreCoursesMyOverviewPage_10(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "core-empty-box", [["image", "assets/img/icons/courses.svg"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_15" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], image: [1, "image"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, core["_29" /* ɵnov */](_v, 2).transform("core.courses.nocoursesfuture")); var currVal_1 = "assets/img/icons/courses.svg"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CoreCoursesMyOverviewPage_11(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "core-empty-box", [["image", "assets/img/icons/courses.svg"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_15" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], image: [1, "image"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, core["_29" /* ɵnov */](_v, 2).transform("core.courses.nocoursespast")); var currVal_1 = "assets/img/icons/courses.svg"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CoreCoursesMyOverviewPage_12(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 6, "ion-searchbar", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "searchbar-animated", null], [2, "searchbar-has-value", null], [2, "searchbar-active", null], [2, "searchbar-show-cancel", null], [2, "searchbar-left-aligned", null], [2, "searchbar-has-focus", null]], [[null, "ngModelChange"], [null, "ionInput"], [null, "ionCancel"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ngModelChange" === en)) {
                var pd_0 = ((_co.courses.filter = $event) !== false);
                ad = (pd_0 && ad);
            }
            if (("ionInput" === en)) {
                var pd_1 = (_co.filterChanged($event) !== false);
                ad = (pd_1 && ad);
            }
            if (("ionCancel" === en)) {
                var pd_2 = (_co.filterChanged() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, searchbar_ngfactory["b" /* View_Searchbar_0 */], searchbar_ngfactory["a" /* RenderType_Searchbar */])), core["_15" /* ɵdid */](1, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [8, null], [8, null], [8, null]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_15" /* ɵdid */](3, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_15" /* ɵdid */](4, 1294336, [[2, 4], ["searchbar", 4]], 0, searchbar["a" /* Searchbar */], [config["a" /* Config */], platform["a" /* Platform */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, esm5_forms["m" /* NgControl */]]], { placeholder: [0, "placeholder"] }, { ionInput: "ionInput", ionCancel: "ionCancel" }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "]))], function (_ck, _v) { var _co = _v.component; var currVal_13 = _co.courses.filter; _ck(_v, 1, 0, currVal_13); var currVal_14 = core["_41" /* ɵunv */](_v, 4, 0, core["_29" /* ɵnov */](_v, 5).transform("core.courses.filtermycourses")); _ck(_v, 4, 0, currVal_14); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 3).ngClassUntouched; var currVal_1 = core["_29" /* ɵnov */](_v, 3).ngClassTouched; var currVal_2 = core["_29" /* ɵnov */](_v, 3).ngClassPristine; var currVal_3 = core["_29" /* ɵnov */](_v, 3).ngClassDirty; var currVal_4 = core["_29" /* ɵnov */](_v, 3).ngClassValid; var currVal_5 = core["_29" /* ɵnov */](_v, 3).ngClassInvalid; var currVal_6 = core["_29" /* ɵnov */](_v, 3).ngClassPending; var currVal_7 = core["_29" /* ɵnov */](_v, 4)._animated; var currVal_8 = core["_29" /* ɵnov */](_v, 4)._value; var currVal_9 = core["_29" /* ɵnov */](_v, 4)._isActive; var currVal_10 = core["_29" /* ɵnov */](_v, 4)._showCancelButton; var currVal_11 = core["_29" /* ɵnov */](_v, 4)._shouldAlignLeft; var currVal_12 = core["_29" /* ɵnov */](_v, 4)._isFocus; _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12]); });
}
function View_CoreCoursesMyOverviewPage_13(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, "ion-col", [["align-self-stretch", ""], ["class", "col"], ["col-12", ""], ["col-lg-4", ""], ["col-md-6", ""], ["col-sm-6", ""], ["col-xl-4", ""], ["no-padding", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                        "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 1, "core-courses-course-progress", [["class", "core-courseoverview"]], null, null, null, course_progress_ngfactory["b" /* View_CoreCoursesCourseProgressComponent_0 */], course_progress_ngfactory["a" /* RenderType_CoreCoursesCourseProgressComponent */])), core["_15" /* ɵdid */](4, 245760, null, 0, course_progress["a" /* CoreCoursesCourseProgressComponent */], [[2, nav_controller["a" /* NavController */]], providers_helper["a" /* CoreCourseHelperProvider */], format_delegate["a" /* CoreCourseFormatDelegate */], dom["a" /* CoreDomUtilsProvider */], course["a" /* CoreCourseProvider */], events["a" /* CoreEventsProvider */], sites["a" /* CoreSitesProvider */], providers_courses["a" /* CoreCoursesProvider */]], { course: [0, "course"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                    "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 4, 0, currVal_0); }, null); }
function View_CoreCoursesMyOverviewPage_4(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](1, 0, null, null, 77, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_15" /* ɵdid */](2, 4374528, [[8, 4]], 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["K" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["D" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](4, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ionRefresh" === en)) {
                var pd_0 = (_co.refreshMyOverview($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_15" /* ɵdid */](5, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["D" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_15" /* ɵdid */](8, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n\n                    "])), (_l()(), core["_16" /* ɵeld */](12, 0, null, 1, 65, "core-loading", [["class", "core-loading-center"]], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_15" /* ɵdid */](13, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["p" /* ElementRef */], events["a" /* CoreEventsProvider */], utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](16, 0, null, 0, 32, "div", [["class", "clearfix row"], ["ion-row", ""], ["justify-content-between", ""], ["padding", ""]], [[8, "hidden", 0]], null, null, null, null)), core["_15" /* ɵdid */](17, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_16" /* ɵeld */](19, 0, null, null, 24, "ion-select", [["class", "core-button-select col"], ["float-start", ""], ["interface", "popover"], ["ion-col", ""]], [[8, "title", 0], [2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"], [null, "keyup.space"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 20)._click($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keyup.space" === en)) {
                var pd_1 = (core["_29" /* ɵnov */](_v, 20)._keyup() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.courses.selected = $event) !== false);
                ad = (pd_2 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_3 = (_co.selectedChanged() !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, select_ngfactory["b" /* View_Select_0 */], select_ngfactory["a" /* RenderType_Select */])), core["_15" /* ɵdid */](20, 1228800, null, 1, select_select["a" /* Select */], [app["a" /* App */], util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item["a" /* Item */]], deep_linker["a" /* DeepLinker */]], { interface: [0, "interface"] }, null), core["_37" /* ɵqud */](603979776, 9, { options: 1 }), core["_35" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [select_select["a" /* Select */]]), core["_15" /* ɵdid */](23, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_15" /* ɵdid */](25, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_15" /* ɵdid */](26, 16384, null, 0, col["a" /* Col */], [], null, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "])), (_l()(), core["_16" /* ɵeld */](29, 0, null, null, 3, "ion-option", [["value", "inprogress"]], null, null, null, null, null)), core["_15" /* ɵdid */](30, 16384, [[9, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](31, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "])), (_l()(), core["_16" /* ɵeld */](34, 0, null, null, 3, "ion-option", [["value", "future"]], null, null, null, null, null)), core["_15" /* ɵdid */](35, 16384, [[9, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](36, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "])), (_l()(), core["_16" /* ɵeld */](39, 0, null, null, 3, "ion-option", [["value", "past"]], null, null, null, null, null)), core["_15" /* ɵdid */](40, 16384, [[9, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](41, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_11" /* ɵand */](16777216, [[7, 2]], null, 1, null, View_CoreCoursesMyOverviewPage_5)), core["_15" /* ɵdid */](47, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_11" /* ɵand */](16777216, [[7, 2]], 0, 1, null, View_CoreCoursesMyOverviewPage_9)), core["_15" /* ɵdid */](51, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_11" /* ɵand */](16777216, [[7, 2]], 0, 1, null, View_CoreCoursesMyOverviewPage_10)), core["_15" /* ɵdid */](54, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_11" /* ɵand */](16777216, [[7, 2]], 0, 1, null, View_CoreCoursesMyOverviewPage_11)), core["_15" /* ɵdid */](57, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n                        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_11" /* ɵand */](16777216, [[7, 2]], 0, 1, null, View_CoreCoursesMyOverviewPage_12)), core["_15" /* ɵdid */](61, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](64, 0, null, 0, 12, "div", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_16" /* ɵeld */](66, 0, null, null, 9, "ion-grid", [["class", "grid"], ["no-padding", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](67, 16384, null, 0, grid["a" /* Grid */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "])), (_l()(), core["_16" /* ɵeld */](69, 0, null, null, 5, "ion-row", [["class", "row"], ["no-padding", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](70, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), core["_11" /* ɵand */](16777216, [[7, 2]], null, 1, null, View_CoreCoursesMyOverviewPage_13)), core["_15" /* ɵdid */](73, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = ((_co.timeline.loaded || _co.timelineCourses.loaded) || _co.courses.loaded); _ck(_v, 5, 0, currVal_4); var currVal_6 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 8, 0, core["_29" /* ɵnov */](_v, 9).transform("core.pulltorefresh")), ""); _ck(_v, 8, 0, currVal_6); var currVal_7 = _co.courses.loaded; _ck(_v, 13, 0, currVal_7); var currVal_18 = "popover"; _ck(_v, 20, 0, currVal_18); var currVal_19 = _co.courses.selected; _ck(_v, 23, 0, currVal_19); var currVal_20 = "inprogress"; _ck(_v, 30, 0, currVal_20); var currVal_22 = "future"; _ck(_v, 35, 0, currVal_22); var currVal_24 = "past"; _ck(_v, 40, 0, currVal_24); var currVal_26 = ((_co.downloadAllCoursesEnabled && _co.courses[_co.courses.selected]) && (_co.courses[_co.courses.selected].length > 1)); _ck(_v, 47, 0, currVal_26); var currVal_27 = ((_co.courses[_co.courses.selected].length == 0) && (_co.courses.selected == "inprogress")); _ck(_v, 51, 0, currVal_27); var currVal_28 = ((_co.courses[_co.courses.selected].length == 0) && (_co.courses.selected == "future")); _ck(_v, 54, 0, currVal_28); var currVal_29 = ((_co.courses[_co.courses.selected].length == 0) && (_co.courses.selected == "past")); _ck(_v, 57, 0, currVal_29); var currVal_30 = _co.showFilter; _ck(_v, 61, 0, currVal_30); var currVal_31 = _co.filteredCourses; _ck(_v, 73, 0, currVal_31); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_29" /* ɵnov */](_v, 2).statusbarPadding; var currVal_1 = core["_29" /* ɵnov */](_v, 2)._hasRefresher; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = (core["_29" /* ɵnov */](_v, 5).state !== "inactive"); var currVal_3 = core["_29" /* ɵnov */](_v, 5)._top; _ck(_v, 4, 0, currVal_2, currVal_3); var currVal_5 = core["_29" /* ɵnov */](_v, 8).r.state; _ck(_v, 7, 0, currVal_5); var currVal_8 = _co.showFilter; _ck(_v, 16, 0, currVal_8); var currVal_9 = core["_41" /* ɵunv */](_v, 19, 0, core["_29" /* ɵnov */](_v, 27).transform("core.show")); var currVal_10 = core["_29" /* ɵnov */](_v, 20)._disabled; var currVal_11 = core["_29" /* ɵnov */](_v, 25).ngClassUntouched; var currVal_12 = core["_29" /* ɵnov */](_v, 25).ngClassTouched; var currVal_13 = core["_29" /* ɵnov */](_v, 25).ngClassPristine; var currVal_14 = core["_29" /* ɵnov */](_v, 25).ngClassDirty; var currVal_15 = core["_29" /* ɵnov */](_v, 25).ngClassValid; var currVal_16 = core["_29" /* ɵnov */](_v, 25).ngClassInvalid; var currVal_17 = core["_29" /* ɵnov */](_v, 25).ngClassPending; _ck(_v, 19, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17); var currVal_21 = core["_41" /* ɵunv */](_v, 31, 0, core["_29" /* ɵnov */](_v, 32).transform("core.courses.inprogress")); _ck(_v, 31, 0, currVal_21); var currVal_23 = core["_41" /* ɵunv */](_v, 36, 0, core["_29" /* ɵnov */](_v, 37).transform("core.courses.future")); _ck(_v, 36, 0, currVal_23); var currVal_25 = core["_41" /* ɵunv */](_v, 41, 0, core["_29" /* ɵnov */](_v, 42).transform("core.courses.past")); _ck(_v, 41, 0, currVal_25); });
}
function View_CoreCoursesMyOverviewPage_15(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 9, "ion-col", [["class", "col"], ["col-12", ""], ["col-md-6", ""], ["no-padding", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](1, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                    "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 5, "core-courses-course-progress", [], null, null, null, course_progress_ngfactory["b" /* View_CoreCoursesCourseProgressComponent_0 */], course_progress_ngfactory["a" /* RenderType_CoreCoursesCourseProgressComponent */])), core["_15" /* ɵdid */](4, 245760, null, 0, course_progress["a" /* CoreCoursesCourseProgressComponent */], [[2, nav_controller["a" /* NavController */]], providers_helper["a" /* CoreCourseHelperProvider */], format_delegate["a" /* CoreCourseFormatDelegate */], dom["a" /* CoreDomUtilsProvider */], course["a" /* CoreCourseProvider */], events["a" /* CoreEventsProvider */], sites["a" /* CoreSitesProvider */], providers_courses["a" /* CoreCoursesProvider */]], { course: [0, "course"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                                        "])), (_l()(), core["_16" /* ɵeld */](6, 0, null, 0, 1, "core-courses-overview-events", [], null, [[null, "loadMore"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("loadMore" === en)) {
                var pd_0 = (_co.loadMoreCourse(_v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_CoreCoursesOverviewEventsComponent_0, RenderType_CoreCoursesOverviewEventsComponent)), core["_15" /* ɵdid */](7, 573440, null, 0, overview_events["a" /* CoreCoursesOverviewEventsComponent */], [[2, nav_controller["a" /* NavController */]], utils["a" /* CoreUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], dom["a" /* CoreDomUtilsProvider */], sites["a" /* CoreSitesProvider */], course["a" /* CoreCourseProvider */], contentlinks_providers_helper["a" /* CoreContentLinksHelperProvider */]], { events: [0, "events"], canLoadMore: [1, "canLoadMore"] }, { loadMore: "loadMore" }), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                                    "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 4, 0, currVal_0); var currVal_1 = _v.context.$implicit.events; var currVal_2 = _v.context.$implicit.canLoadMore; _ck(_v, 7, 0, currVal_1, currVal_2); }, null);
}
function View_CoreCoursesMyOverviewPage_16(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "core-empty-box", [["image", "assets/img/icons/courses.svg"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_15" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], image: [1, "image"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, core["_29" /* ɵnov */](_v, 2).transform("core.courses.nocoursesoverview")); var currVal_1 = "assets/img/icons/courses.svg"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CoreCoursesMyOverviewPage_14(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_16" /* ɵeld */](1, 0, null, null, 57, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_15" /* ɵdid */](2, 4374528, [[11, 4]], 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["K" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["D" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](4, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ionRefresh" === en)) {
                var pd_0 = (_co.refreshMyOverview($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), core["_15" /* ɵdid */](5, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["D" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_15" /* ɵdid */](8, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n\n                    "])), (_l()(), core["_16" /* ɵeld */](12, 0, null, 1, 20, "div", [["padding", ""]], [[8, "hidden", 0]], null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](14, 0, null, null, 17, "ion-select", [["class", "core-button-select"], ["interface", "popover"]], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"], [null, "keyup.space"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 15)._click($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("keyup.space" === en)) {
                var pd_1 = (core["_29" /* ɵnov */](_v, 15)._keyup() !== false);
                ad = (pd_1 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_2 = ((_co.timeline.sort = $event) !== false);
                ad = (pd_2 && ad);
            }
            if (("ngModelChange" === en)) {
                var pd_3 = (_co.switchSort() !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, select_ngfactory["b" /* View_Select_0 */], select_ngfactory["a" /* RenderType_Select */])), core["_15" /* ɵdid */](15, 1228800, null, 1, select_select["a" /* Select */], [app["a" /* App */], util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item["a" /* Item */]], deep_linker["a" /* DeepLinker */]], { interface: [0, "interface"] }, null), core["_37" /* ɵqud */](603979776, 12, { options: 1 }), core["_35" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [select_select["a" /* Select */]]), core["_15" /* ɵdid */](18, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_35" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_15" /* ɵdid */](20, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_16" /* ɵeld */](22, 0, null, null, 3, "ion-option", [["value", "sortbydates"]], null, null, null, null, null)), core["_15" /* ɵdid */](23, 16384, [[12, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](24, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_16" /* ɵeld */](27, 0, null, null, 3, "ion-option", [["value", "sortbycourses"]], null, null, null, null, null)), core["_15" /* ɵdid */](28, 16384, [[12, 4]], 0, option_option["a" /* Option */], [core["p" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_40" /* ɵted */](29, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](34, 0, null, 1, 5, "core-loading", [["class", "core-loading-center"]], [[8, "hidden", 0]], null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_15" /* ɵdid */](35, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["p" /* ElementRef */], events["a" /* CoreEventsProvider */], utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](37, 0, null, 0, 1, "core-courses-overview-events", [["showCourse", "true"]], null, [[null, "loadMore"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("loadMore" === en)) {
                var pd_0 = (_co.loadMoreTimeline() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_CoreCoursesOverviewEventsComponent_0, RenderType_CoreCoursesOverviewEventsComponent)), core["_15" /* ɵdid */](38, 573440, null, 0, overview_events["a" /* CoreCoursesOverviewEventsComponent */], [[2, nav_controller["a" /* NavController */]], utils["a" /* CoreUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], dom["a" /* CoreDomUtilsProvider */], sites["a" /* CoreSitesProvider */], course["a" /* CoreCourseProvider */], contentlinks_providers_helper["a" /* CoreContentLinksHelperProvider */]], { events: [0, "events"], showCourse: [1, "showCourse"], canLoadMore: [2, "canLoadMore"] }, { loadMore: "loadMore" }), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n                    "])), (_l()(), core["_16" /* ɵeld */](41, 0, null, 1, 16, "core-loading", [["class", "core-loading-center"]], [[8, "hidden", 0]], null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_15" /* ɵdid */](42, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["p" /* ElementRef */], events["a" /* CoreEventsProvider */], utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_16" /* ɵeld */](44, 0, null, 0, 9, "ion-grid", [["class", "grid"], ["no-padding", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](45, 16384, null, 0, grid["a" /* Grid */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_16" /* ɵeld */](47, 0, null, null, 5, "ion-row", [["class", "row"], ["no-padding", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](48, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                                "])), (_l()(), core["_11" /* ɵand */](16777216, [[10, 2]], null, 1, null, View_CoreCoursesMyOverviewPage_15)), core["_15" /* ɵdid */](51, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                            "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                        "])), (_l()(), core["_11" /* ɵand */](16777216, [[10, 2]], 0, 1, null, View_CoreCoursesMyOverviewPage_16)), core["_15" /* ɵdid */](56, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n                    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n                "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = ((_co.timeline.loaded || _co.timelineCourses.loaded) || _co.courses.loaded); _ck(_v, 5, 0, currVal_4); var currVal_6 = core["_19" /* ɵinlineInterpolate */](1, "", core["_41" /* ɵunv */](_v, 8, 0, core["_29" /* ɵnov */](_v, 9).transform("core.pulltorefresh")), ""); _ck(_v, 8, 0, currVal_6); var currVal_16 = "popover"; _ck(_v, 15, 0, currVal_16); var currVal_17 = _co.timeline.sort; _ck(_v, 18, 0, currVal_17); var currVal_18 = "sortbydates"; _ck(_v, 23, 0, currVal_18); var currVal_20 = "sortbycourses"; _ck(_v, 28, 0, currVal_20); var currVal_23 = _co.timeline.loaded; _ck(_v, 35, 0, currVal_23); var currVal_24 = _co.timeline.events; var currVal_25 = "true"; var currVal_26 = _co.timeline.canLoadMore; _ck(_v, 38, 0, currVal_24, currVal_25, currVal_26); var currVal_28 = _co.timelineCourses.loaded; _ck(_v, 42, 0, currVal_28); var currVal_29 = _co.timelineCourses.courses; _ck(_v, 51, 0, currVal_29); var currVal_30 = (_co.timelineCourses.courses.length == 0); _ck(_v, 56, 0, currVal_30); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_29" /* ɵnov */](_v, 2).statusbarPadding; var currVal_1 = core["_29" /* ɵnov */](_v, 2)._hasRefresher; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = (core["_29" /* ɵnov */](_v, 5).state !== "inactive"); var currVal_3 = core["_29" /* ɵnov */](_v, 5)._top; _ck(_v, 4, 0, currVal_2, currVal_3); var currVal_5 = core["_29" /* ɵnov */](_v, 8).r.state; _ck(_v, 7, 0, currVal_5); var currVal_7 = !(_co.timeline.loaded || _co.timelineCourses.loaded); _ck(_v, 12, 0, currVal_7); var currVal_8 = core["_29" /* ɵnov */](_v, 15)._disabled; var currVal_9 = core["_29" /* ɵnov */](_v, 20).ngClassUntouched; var currVal_10 = core["_29" /* ɵnov */](_v, 20).ngClassTouched; var currVal_11 = core["_29" /* ɵnov */](_v, 20).ngClassPristine; var currVal_12 = core["_29" /* ɵnov */](_v, 20).ngClassDirty; var currVal_13 = core["_29" /* ɵnov */](_v, 20).ngClassValid; var currVal_14 = core["_29" /* ɵnov */](_v, 20).ngClassInvalid; var currVal_15 = core["_29" /* ɵnov */](_v, 20).ngClassPending; _ck(_v, 14, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_19 = core["_41" /* ɵunv */](_v, 24, 0, core["_29" /* ɵnov */](_v, 25).transform("core.courses.sortbydates")); _ck(_v, 24, 0, currVal_19); var currVal_21 = core["_41" /* ɵunv */](_v, 29, 0, core["_29" /* ɵnov */](_v, 30).transform("core.courses.sortbycourses")); _ck(_v, 29, 0, currVal_21); var currVal_22 = (_co.timeline.sort != "sortbydates"); _ck(_v, 34, 0, currVal_22); var currVal_27 = (_co.timeline.sort != "sortbycourses"); _ck(_v, 41, 0, currVal_27); });
}
function View_CoreCoursesMyOverviewPage_0(_l) {
    return core["_42" /* ɵvid */](0, [core["_37" /* ɵqud */](402653184, 1, { tabsComponent: 0 }), core["_37" /* ɵqud */](671088640, 2, { searchbar: 0 }), core["_37" /* ɵqud */](671088640, 3, { siteHomeComponent: 0 }), (_l()(), core["_16" /* ɵeld */](3, 0, null, null, 23, "ion-header", [], null, null, null, null, null)), core["_15" /* ɵdid */](4, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_16" /* ɵeld */](6, 0, null, null, 19, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_15" /* ɵdid */](7, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], null, null), core["_15" /* ɵdid */](8, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_16" /* ɵeld */](10, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_15" /* ɵdid */](11, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_16" /* ɵeld */](12, 0, null, 0, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](13, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], providers_app["a" /* CoreAppProvider */], contentlinks_providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n\n        "])), (_l()(), core["_16" /* ɵeld */](15, 0, null, 2, 9, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_15" /* ɵdid */](16, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_37" /* ɵqud */](603979776, 4, { _buttons: 1 }), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesMyOverviewPage_1)), core["_15" /* ɵdid */](20, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesMyOverviewPage_2)), core["_15" /* ɵdid */](23, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_16" /* ɵeld */](28, 0, null, null, 36, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_15" /* ɵdid */](29, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["p" /* ElementRef */], core["K" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["D" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_16" /* ɵeld */](31, 0, null, 1, 32, "core-tabs", [], null, null, null, tabs_ngfactory["b" /* View_CoreTabsComponent_0 */], tabs_ngfactory["a" /* RenderType_CoreTabsComponent */])), core["_15" /* ɵdid */](32, 4964352, [[1, 4]], 0, tabs["a" /* CoreTabsComponent */], [core["p" /* ElementRef */], content["a" /* Content */], dom["a" /* CoreDomUtilsProvider */]], { selectedIndex: [0, "selectedIndex"], hideUntil: [1, "hideUntil"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_16" /* ɵeld */](35, 0, null, 0, 7, "core-tab", [], null, [[null, "ionSelect"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ionSelect" === en)) {
                var pd_0 = (_co.tabChanged("sitehome") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, tab_ngfactory["b" /* View_CoreTabComponent_0 */], tab_ngfactory["a" /* RenderType_CoreTabComponent */])), core["_15" /* ɵdid */](36, 245760, null, 2, tab["a" /* CoreTabComponent */], [tabs["a" /* CoreTabsComponent */], core["p" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */]], { title: [0, "title"], show: [1, "show"] }, { ionSelect: "ionSelect" }), core["_37" /* ɵqud */](335544320, 5, { template: 0 }), core["_37" /* ɵqud */](603979776, 6, { scroll: 0 }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](0, [[5, 2]], null, 0, null, View_CoreCoursesMyOverviewPage_3)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_16" /* ɵeld */](45, 0, null, 0, 7, "core-tab", [], null, [[null, "ionSelect"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ionSelect" === en)) {
                var pd_0 = (_co.tabChanged("courses") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, tab_ngfactory["b" /* View_CoreTabComponent_0 */], tab_ngfactory["a" /* RenderType_CoreTabComponent */])), core["_15" /* ɵdid */](46, 245760, null, 2, tab["a" /* CoreTabComponent */], [tabs["a" /* CoreTabsComponent */], core["p" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */]], { title: [0, "title"] }, { ionSelect: "ionSelect" }), core["_37" /* ɵqud */](603979776, 7, { template: 0 }), core["_37" /* ɵqud */](603979776, 8, { scroll: 0 }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](0, [[7, 2]], null, 0, null, View_CoreCoursesMyOverviewPage_4)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n        "])), (_l()(), core["_16" /* ɵeld */](55, 0, null, 0, 7, "core-tab", [], null, [[null, "ionSelect"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("ionSelect" === en)) {
                var pd_0 = (_co.tabChanged("timeline") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, tab_ngfactory["b" /* View_CoreTabComponent_0 */], tab_ngfactory["a" /* RenderType_CoreTabComponent */])), core["_15" /* ɵdid */](56, 245760, null, 2, tab["a" /* CoreTabComponent */], [tabs["a" /* CoreTabsComponent */], core["p" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */]], { title: [0, "title"] }, { ionSelect: "ionSelect" }), core["_37" /* ɵqud */](603979776, 10, { template: 0 }), core["_37" /* ɵqud */](603979776, 11, { scroll: 0 }), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](0, [[10, 2]], null, 0, null, View_CoreCoursesMyOverviewPage_14)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 1, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 8, 0); var currVal_2 = _co.siteName; _ck(_v, 13, 0, currVal_2); var currVal_3 = (((_co.tabShown == "courses") && _co.courses[_co.courses.selected]) && (_co.courses[_co.courses.selected].length > 5)); _ck(_v, 20, 0, currVal_3); var currVal_4 = _co.searchEnabled; _ck(_v, 23, 0, currVal_4); var currVal_7 = _co.firstSelectedTab; var currVal_8 = _co.tabsReady; _ck(_v, 32, 0, currVal_7, currVal_8); var currVal_9 = core["_41" /* ɵunv */](_v, 36, 0, core["_29" /* ɵnov */](_v, 39).transform("core.sitehome.sitehome")); var currVal_10 = _co.siteHomeEnabled; _ck(_v, 36, 0, currVal_9, currVal_10); var currVal_11 = core["_41" /* ɵunv */](_v, 46, 0, core["_29" /* ɵnov */](_v, 49).transform("core.courses.courses")); _ck(_v, 46, 0, currVal_11); var currVal_12 = core["_41" /* ɵunv */](_v, 56, 0, core["_29" /* ɵnov */](_v, 59).transform("core.courses.timeline")); _ck(_v, 56, 0, currVal_12); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 7)._hidden; var currVal_1 = core["_29" /* ɵnov */](_v, 7)._sbPadding; _ck(_v, 6, 0, currVal_0, currVal_1); var currVal_5 = core["_29" /* ɵnov */](_v, 29).statusbarPadding; var currVal_6 = core["_29" /* ɵnov */](_v, 29)._hasRefresher; _ck(_v, 28, 0, currVal_5, currVal_6); });
}
function View_CoreCoursesMyOverviewPage_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "page-core-courses-my-overview", [], null, null, null, View_CoreCoursesMyOverviewPage_0, RenderType_CoreCoursesMyOverviewPage)), core["_15" /* ɵdid */](1, 180224, null, 0, my_overview_CoreCoursesMyOverviewPage, [nav_controller["a" /* NavController */], providers_courses["a" /* CoreCoursesProvider */], dom["a" /* CoreDomUtilsProvider */], my_overview["a" /* CoreCoursesMyOverviewProvider */], providers_helper["a" /* CoreCourseHelperProvider */], sites["a" /* CoreSitesProvider */], sitehome["a" /* CoreSiteHomeProvider */], options_delegate["a" /* CoreCourseOptionsDelegate */], events["a" /* CoreEventsProvider */], helper["a" /* CoreCoursesHelperProvider */], utils["a" /* CoreUtilsProvider */], coursecompletion["a" /* AddonCourseCompletionProvider */]], null, null)], null, null); }
var CoreCoursesMyOverviewPageNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("page-core-courses-my-overview", my_overview_CoreCoursesMyOverviewPage, View_CoreCoursesMyOverviewPage_Host_0, {}, {}, []);





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

// CONCATENATED MODULE: ./src/core/courses/pages/my-overview/my-overview.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesMyOverviewPageModuleNgFactory", function() { return CoreCoursesMyOverviewPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_my_overview.module,_.._.._.._.._node_modules_ionic_angular_components_action_sheet_action_sheet_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_alert_alert_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_app_app_root.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_loading_loading_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_modal_modal_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_picker_picker_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_popover_popover_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_select_select_popover_component.ngfactory,_.._.._.._.._node_modules_ionic_angular_components_toast_toast_component.ngfactory,_.._.._.._components_context_menu_context_menu_popover.ngfactory,_.._.._.._components_course_picker_menu_course_picker_menu_popover.ngfactory,_.._.._.._components_recaptcha_recaptchamodal.ngfactory,_.._.._course_components_unsupported_module_unsupported_module.ngfactory,_my_overview.ngfactory,_angular_common,_angular_forms,_ngx_translate_core_src_translate.loader,_ngx_translate_core_src_translate.compiler,_ngx_translate_core_src_translate.parser,_ngx_translate_core_src_missing_translation_handler,_ngx_translate_core_src_translate.service,_ngx_translate_core_src_translate.store,ionic_angular_module,_ngx_translate_core_index,_.._.._.._directives_directives.module,_.._.._.._pipes_pipes.module,_.._.._.._components_components.module,_.._components_components.module,_.._.._course_components_components.module,_.._.._sitehome_components_components.module,ionic_angular_util_module_loader,_my_overview PURE_IMPORTS_END */


































var CoreCoursesMyOverviewPageModuleNgFactory = /*@__PURE__*/ core["_13" /* ɵcmf */](CoreCoursesMyOverviewPageModule, [], function (_l) { return core["_25" /* ɵmod */]([core["_26" /* ɵmpd */](512, core["n" /* ComponentFactoryResolver */], core["_6" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], unsupported_module_ngfactory["a" /* CoreCourseUnsupportedModuleComponentNgFactory */], CoreCoursesMyOverviewPageNgFactory]], [3, core["n" /* ComponentFactoryResolver */]], core["B" /* NgModuleRef */]]), core["_26" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["x" /* LOCALE_ID */], [2, common["v" /* ɵa */]]]), core["_26" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_26" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_26" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_26" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_26" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_26" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_26" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_26" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_26" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_26" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_26" /* ɵmpd */](512, _ngx_translate_core["a" /* TranslateModule */], _ngx_translate_core["a" /* TranslateModule */], []), core["_26" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_26" /* ɵmpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_26" /* ɵmpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_26" /* ɵmpd */](512, components_components_module["a" /* CoreCoursesComponentsModule */], components_components_module["a" /* CoreCoursesComponentsModule */], []), core["_26" /* ɵmpd */](512, course_components_components_module["a" /* CoreCourseComponentsModule */], course_components_components_module["a" /* CoreCourseComponentsModule */], []), core["_26" /* ɵmpd */](512, sitehome_components_components_module["a" /* CoreSiteHomeComponentsModule */], sitehome_components_components_module["a" /* CoreSiteHomeComponentsModule */], []), core["_26" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_26" /* ɵmpd */](512, CoreCoursesMyOverviewPageModule, CoreCoursesMyOverviewPageModule, []), core["_26" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_26" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_26" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], my_overview_CoreCoursesMyOverviewPage, [])]); });






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






/***/ }),

/***/ 1914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_Searchbar; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_Searchbar_0;
/* unused harmony export View_Searchbar_Host_0 */
/* unused harmony export SearchbarNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = /*@__PURE__*/__webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_button_ngfactory__ = /*@__PURE__*/__webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_button__ = /*@__PURE__*/__webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icon_icon__ = /*@__PURE__*/__webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__searchbar__ = /*@__PURE__*/__webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__platform_platform__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = /*@__PURE__*/__webpack_require__(19);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_button_button.ngfactory,_button_button,_.._config_config,_icon_icon,_searchbar,_.._platform_platform,_angular_forms PURE_IMPORTS_END */








var styles_Searchbar = [];
var RenderType_Searchbar = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_Searchbar, data: {} });

function View_Searchbar_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ɵvid */](0, [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵqud */](402653184, 1, { _searchbarInput: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵqud */](402653184, 2, { _searchbarIcon: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵqud */](402653184, 3, { _cancelButton: 0 }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](3, 0, null, null, 8, "div", [["class", "searchbar-input-container"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](4, 0, null, null, 3, "button", [["class", "searchbar-md-cancel"], ["clear", ""], ["color", "dark"], ["ion-button", ""], ["mode", "md"], ["type", "button"]], null, [[null, "click"], [null, "mousedown"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.cancelSearchbar($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("mousedown" === en)) {
                var pd_1 = (_co.cancelSearchbar($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_1__button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_1__button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](5, 1097728, null, 0, __WEBPACK_IMPORTED_MODULE_2__button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Renderer */]], { color: [0, "color"], mode: [1, "mode"], clear: [2, "clear"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](6, 0, null, 0, 1, "ion-icon", [["name", "md-arrow-back"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](7, 147456, null, 0, __WEBPACK_IMPORTED_MODULE_4__icon_icon__["a" /* Icon */], [__WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](8, 0, [[2, 0], ["searchbarIcon", 1]], null, 0, "div", [["class", "searchbar-search-icon"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](9, 0, [[1, 0], ["searchbarInput", 1]], null, 0, "input", [["class", "searchbar-input"], ["dir", "auto"]], [[1, "placeholder", 0], [1, "type", 0], [1, "autocomplete", 0], [1, "autocorrect", 0], [1, "spellcheck", 0]], [[null, "input"], [null, "blur"], [null, "focus"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("input" === en)) {
                var pd_0 = (_co.inputChanged($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("blur" === en)) {
                var pd_1 = (_co.inputBlurred() !== false);
                ad = (pd_1 && ad);
            }
            if (("focus" === en)) {
                var pd_2 = (_co.inputFocused() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](10, 0, null, null, 1, "button", [["class", "searchbar-clear-icon"], ["clear", ""], ["ion-button", ""], ["type", "button"]], null, [[null, "click"], [null, "mousedown"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.clearInput($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("mousedown" === en)) {
                var pd_1 = (_co.clearInput($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_1__button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_1__button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](11, 1097728, null, 0, __WEBPACK_IMPORTED_MODULE_2__button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Renderer */]], { mode: [0, "mode"], clear: [1, "clear"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](12, 0, [[3, 0]], null, 2, "button", [["class", "searchbar-ios-cancel"], ["clear", ""], ["ion-button", ""], ["mode", "ios"], ["type", "button"]], [[8, "tabIndex", 0]], [[null, "click"], [null, "mousedown"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.cancelSearchbar($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("mousedown" === en)) {
                var pd_1 = (_co.cancelSearchbar($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_1__button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_1__button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](13, 1097728, [["cancelButton", 4]], 0, __WEBPACK_IMPORTED_MODULE_2__button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Renderer */]], { mode: [0, "mode"], clear: [1, "clear"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](14, 0, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "dark"; var currVal_1 = "md"; var currVal_2 = ""; _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = "md-arrow-back"; _ck(_v, 7, 0, currVal_4); var currVal_10 = _co._mode; var currVal_11 = ""; _ck(_v, 11, 0, currVal_10, currVal_11); var currVal_13 = "ios"; var currVal_14 = ""; _ck(_v, 13, 0, currVal_13, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 7)._hidden; _ck(_v, 6, 0, currVal_3); var currVal_5 = _co.placeholder; var currVal_6 = _co.type; var currVal_7 = _co._autocomplete; var currVal_8 = _co._autocorrect; var currVal_9 = _co._spellcheck; _ck(_v, 9, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_12 = (_co._isActive ? 1 : (0 - 1)); _ck(_v, 12, 0, currVal_12); var currVal_15 = _co.cancelButtonText; _ck(_v, 14, 0, currVal_15); });
}
function View_Searchbar_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](0, 0, null, null, 1, "ion-searchbar", [], [[2, "searchbar-animated", null], [2, "searchbar-has-value", null], [2, "searchbar-active", null], [2, "searchbar-show-cancel", null], [2, "searchbar-left-aligned", null], [2, "searchbar-has-focus", null]], null, null, View_Searchbar_0, RenderType_Searchbar)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](1, 1294336, null, 0, __WEBPACK_IMPORTED_MODULE_5__searchbar__["a" /* Searchbar */], [__WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_6__platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["m" /* NgControl */]]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 1)._animated; var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 1)._value; var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 1)._isActive; var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 1)._showCancelButton; var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 1)._shouldAlignLeft; var currVal_5 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 1)._isFocus; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
var SearchbarNgFactory = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ɵccf */]("ion-searchbar", __WEBPACK_IMPORTED_MODULE_5__searchbar__["a" /* Searchbar */], View_Searchbar_Host_0, { color: "color", mode: "mode", disabled: "disabled", cancelButtonText: "cancelButtonText", showCancelButton: "showCancelButton", debounce: "debounce", placeholder: "placeholder", autocomplete: "autocomplete", autocorrect: "autocorrect", spellcheck: "spellcheck", type: "type", animated: "animated" }, { ionFocus: "ionFocus", ionChange: "ionChange", ionBlur: "ionBlur", ionInput: "ionInput", ionCancel: "ionCancel", ionClear: "ionClear" }, []);






/***/ }),

/***/ 1915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_CoreCoursesCourseProgressComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_CoreCoursesCourseProgressComponent_0;
/* unused harmony export View_CoreCoursesCourseProgressComponent_Host_0 */
/* unused harmony export CoreCoursesCourseProgressComponentNgFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = /*@__PURE__*/__webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_external_content__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_logger__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_filepool__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_platform_platform__ = /*@__PURE__*/__webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sites__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_utils_url__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_app__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_utils_utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__node_modules_ionic_angular_components_button_button_ngfactory__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_button_button__ = /*@__PURE__*/__webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular_config_config__ = /*@__PURE__*/__webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core_src_translate_pipe__ = /*@__PURE__*/__webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core_src_translate_service__ = /*@__PURE__*/__webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_icon_icon_ngfactory__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_icon_icon__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__node_modules_ionic_angular_components_spinner_spinner_ngfactory__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic_angular_components_spinner_spinner__ = /*@__PURE__*/__webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common__ = /*@__PURE__*/__webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__node_modules_ionic_angular_components_item_item_ngfactory__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic_angular_components_item_item__ = /*@__PURE__*/__webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ionic_angular_util_form__ = /*@__PURE__*/__webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic_angular_components_item_item_reorder__ = /*@__PURE__*/__webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ionic_angular_components_item_item_content__ = /*@__PURE__*/__webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__directives_format_text__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_utils_text__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__contentlinks_providers_helper__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ionic_angular_navigation_nav_controller__ = /*@__PURE__*/__webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ionic_angular_components_content_content__ = /*@__PURE__*/__webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_split_view_split_view__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_utils_iframe__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_events__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_progress_bar_progress_bar_ngfactory__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_progress_bar_progress_bar__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_platform_browser__ = /*@__PURE__*/__webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ionic_angular_components_card_card__ = /*@__PURE__*/__webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__course_progress__ = /*@__PURE__*/__webpack_require__(1311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__course_providers_helper__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__course_providers_format_delegate__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__course_providers_course__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_courses__ = __webpack_require__(73);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._directives_external_content,_.._.._.._providers_logger,_.._.._.._providers_filepool,ionic_angular_platform_platform,_.._.._.._providers_sites,_.._.._.._providers_utils_dom,_.._.._.._providers_utils_url,_.._.._.._providers_app,_.._.._.._providers_utils_utils,_.._.._.._.._node_modules_ionic_angular_components_button_button.ngfactory,ionic_angular_components_button_button,ionic_angular_config_config,_ngx_translate_core_src_translate.pipe,_ngx_translate_core_src_translate.service,_.._.._.._components_icon_icon.ngfactory,_.._.._.._components_icon_icon,_.._.._.._.._node_modules_ionic_angular_components_spinner_spinner.ngfactory,ionic_angular_components_spinner_spinner,_angular_common,_.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,_.._.._.._directives_format_text,_.._.._.._providers_utils_text,_.._.._contentlinks_providers_helper,ionic_angular_navigation_nav_controller,ionic_angular_components_content_content,_.._.._.._components_split_view_split_view,_.._.._.._providers_utils_iframe,_.._.._.._providers_events,_.._.._.._components_progress_bar_progress_bar.ngfactory,_.._.._.._components_progress_bar_progress_bar,_angular_platform_browser,ionic_angular_components_card_card,_course_progress,_.._.._course_providers_helper,_.._.._course_providers_format_delegate,_.._.._course_providers_course,_.._providers_courses PURE_IMPORTS_END */










































var styles_CoreCoursesCourseProgressComponent = [];
var RenderType_CoreCoursesCourseProgressComponent = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreCoursesCourseProgressComponent, data: {} });

function View_CoreCoursesCourseProgressComponent_1(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](0, 0, null, null, 1, "img", [["alt", ""], ["core-external-content", ""]], [[8, "src", 4]], null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](1, 4210688, null, 0, __WEBPACK_IMPORTED_MODULE_1__directives_external_content__["a" /* CoreExternalContentDirective */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__providers_logger__["a" /* CoreLoggerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_filepool__["a" /* CoreFilepoolProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_utils_url__["a" /* CoreUrlUtilsProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_app__["a" /* CoreAppProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_utils_utils__["a" /* CoreUtilsProvider */]], null, null)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.course.imageThumb; _ck(_v, 0, 0, currVal_0); }); }
function View_CoreCoursesCourseProgressComponent_3(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](0, 0, null, null, 6, "button", [["clear", ""], ["color", "dark"], ["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.prefetchCourse($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_10__node_modules_ionic_angular_components_button_button_ngfactory__["b" /* View_Button_0 */], __WEBPACK_IMPORTED_MODULE_10__node_modules_ionic_angular_components_button_button_ngfactory__["a" /* RenderType_Button */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](1, 1097728, [[2, 4]], 0, __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_button_button__["a" /* Button */], [[8, ""], __WEBPACK_IMPORTED_MODULE_12_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Renderer */]], { color: [0, "color"], clear: [1, "clear"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵpid */](131072, __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core_src_translate_pipe__["a" /* TranslatePipe */], [__WEBPACK_IMPORTED_MODULE_14__ngx_translate_core_src_translate_service__["a" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectorRef */]]), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, 0, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](4, 0, null, 0, 1, "core-icon", [], null, null, null, __WEBPACK_IMPORTED_MODULE_15__components_icon_icon_ngfactory__["b" /* View_CoreIconComponent_0 */], __WEBPACK_IMPORTED_MODULE_15__components_icon_icon_ngfactory__["a" /* RenderType_CoreIconComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](5, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_16__components_icon_icon__["a" /* CoreIconComponent */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */]], { name: [0, "name"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, 0, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "dark"; var currVal_2 = ""; _ck(_v, 1, 0, currVal_1, currVal_2); var currVal_3 = _co.prefetchCourseData.prefetchCourseIcon; _ck(_v, 5, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_41" /* ɵunv */](_v, 0, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 2).transform(_co.prefetchCourseData.title)); _ck(_v, 0, 0, currVal_0); });
}
function View_CoreCoursesCourseProgressComponent_4(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](0, 0, null, null, 1, "ion-spinner", [], [[2, "spinner-paused", null]], null, null, __WEBPACK_IMPORTED_MODULE_17__node_modules_ionic_angular_components_spinner_spinner_ngfactory__["b" /* View_Spinner_0 */], __WEBPACK_IMPORTED_MODULE_17__node_modules_ionic_angular_components_spinner_spinner_ngfactory__["a" /* RenderType_Spinner */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_18_ionic_angular_components_spinner_spinner__["a" /* Spinner */], [__WEBPACK_IMPORTED_MODULE_12_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Renderer */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](_v, 1)._paused; _ck(_v, 0, 0, currVal_0); }); }
function View_CoreCoursesCourseProgressComponent_2(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](0, 0, null, null, 9, "div", [["class", "core-button-spinner"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesCourseProgressComponent_3)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](4, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_19__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesCourseProgressComponent_4)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](8, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_19__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.prefetchCourseData.prefetchCourseIcon != "spinner"); _ck(_v, 4, 0, currVal_0); var currVal_1 = (_co.prefetchCourseData.prefetchCourseIcon == "spinner"); _ck(_v, 8, 0, currVal_1); }, null); }
function View_CoreCoursesCourseProgressComponent_5(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](0, 0, null, null, 15, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, __WEBPACK_IMPORTED_MODULE_20__node_modules_ionic_angular_components_item_item_ngfactory__["b" /* View_Item_0 */], __WEBPACK_IMPORTED_MODULE_20__node_modules_ionic_angular_components_item_item_ngfactory__["a" /* RenderType_Item */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](1, 1097728, null, 3, __WEBPACK_IMPORTED_MODULE_21_ionic_angular_components_item_item__["a" /* Item */], [__WEBPACK_IMPORTED_MODULE_22_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_12_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_23_ionic_angular_components_item_item_reorder__["a" /* ItemReorder */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵqud */](335544320, 4, { contentLabel: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵqud */](603979776, 5, { _buttons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵqud */](603979776, 6, { _icons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_24_ionic_angular_components_item_item_content__["a" /* ItemContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, 2, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](7, 0, null, 2, 7, "p", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](9, 0, null, null, 4, "summary", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](11, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](12, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_25__directives_format_text__["a" /* CoreFormatTextDirective */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_5__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_26__providers_utils_text__["a" /* CoreTextUtilsProvider */], __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core_src_translate_service__["a" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_9__providers_utils_utils__["a" /* CoreUtilsProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_utils_url__["a" /* CoreUrlUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_logger__["a" /* CoreLoggerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_filepool__["a" /* CoreFilepoolProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_app__["a" /* CoreAppProvider */], __WEBPACK_IMPORTED_MODULE_27__contentlinks_providers_helper__["a" /* CoreContentLinksHelperProvider */], [2, __WEBPACK_IMPORTED_MODULE_28_ionic_angular_navigation_nav_controller__["a" /* NavController */]], [2, __WEBPACK_IMPORTED_MODULE_29_ionic_angular_components_content_content__["a" /* Content */]], [2, __WEBPACK_IMPORTED_MODULE_30__components_split_view_split_view__["a" /* CoreSplitViewComponent */]], __WEBPACK_IMPORTED_MODULE_31__providers_utils_iframe__["a" /* CoreIframeUtilsProvider */], __WEBPACK_IMPORTED_MODULE_32__providers_events__["a" /* CoreEventsProvider */]], { text: [0, "text"], clean: [1, "clean"], singleLine: [2, "singleLine"], fullOnClick: [3, "fullOnClick"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.course.summary; var currVal_1 = true; var currVal_2 = true; var currVal_3 = true; _ck(_v, 12, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_CoreCoursesCourseProgressComponent_6(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](0, 0, null, null, 9, "ion-item", [["class", "item item-block"]], null, null, null, __WEBPACK_IMPORTED_MODULE_20__node_modules_ionic_angular_components_item_item_ngfactory__["b" /* View_Item_0 */], __WEBPACK_IMPORTED_MODULE_20__node_modules_ionic_angular_components_item_item_ngfactory__["a" /* RenderType_Item */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](1, 1097728, null, 3, __WEBPACK_IMPORTED_MODULE_21_ionic_angular_components_item_item__["a" /* Item */], [__WEBPACK_IMPORTED_MODULE_22_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_12_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_23_ionic_angular_components_item_item_reorder__["a" /* ItemReorder */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵqud */](335544320, 7, { contentLabel: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵqud */](603979776, 8, { _buttons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵqud */](603979776, 9, { _icons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](5, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_24_ionic_angular_components_item_item_content__["a" /* ItemContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, 2, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](7, 0, null, 2, 1, "core-progress-bar", [], null, null, null, __WEBPACK_IMPORTED_MODULE_33__components_progress_bar_progress_bar_ngfactory__["b" /* View_CoreProgressBarComponent_0 */], __WEBPACK_IMPORTED_MODULE_33__components_progress_bar_progress_bar_ngfactory__["a" /* RenderType_CoreProgressBarComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](8, 573440, null, 0, __WEBPACK_IMPORTED_MODULE_34__components_progress_bar_progress_bar__["a" /* CoreProgressBarComponent */], [__WEBPACK_IMPORTED_MODULE_35__angular_platform_browser__["c" /* DomSanitizer */]], { progress: [0, "progress"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, 2, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.course.progress; _ck(_v, 8, 0, currVal_0); }, null); }
function View_CoreCoursesCourseProgressComponent_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](0, 0, null, null, 31, "ion-card", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](1, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_36_ionic_angular_components_card_card__["a" /* Card */], [__WEBPACK_IMPORTED_MODULE_12_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Renderer */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](3, 0, null, null, 4, "div", [], [[8, "className", 0], [2, "core-course-color-img", null]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.openCourse(_co.course) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesCourseProgressComponent_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_19__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](9, 0, null, null, 13, "ion-item", [["class", "core-course-link item item-block"], ["detail-none", ""], ["tappable", ""], ["text-wrap", ""]], [[8, "title", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.openCourse(_co.course) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_20__node_modules_ionic_angular_components_item_item_ngfactory__["b" /* View_Item_0 */], __WEBPACK_IMPORTED_MODULE_20__node_modules_ionic_angular_components_item_item_ngfactory__["a" /* RenderType_Item */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](10, 1097728, null, 3, __WEBPACK_IMPORTED_MODULE_21_ionic_angular_components_item_item__["a" /* Item */], [__WEBPACK_IMPORTED_MODULE_22_ionic_angular_util_form__["a" /* Form */], __WEBPACK_IMPORTED_MODULE_12_ionic_angular_config_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Renderer */], [2, __WEBPACK_IMPORTED_MODULE_23_ionic_angular_components_item_item_reorder__["a" /* ItemReorder */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵqud */](335544320, 1, { contentLabel: 0 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵqud */](603979776, 2, { _buttons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵqud */](603979776, 3, { _icons: 1 }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](14, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_24_ionic_angular_components_item_item_content__["a" /* ItemContent */], [], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, 2, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](16, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](17, 0, null, null, 1, "core-format-text", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](18, 540672, null, 0, __WEBPACK_IMPORTED_MODULE_25__directives_format_text__["a" /* CoreFormatTextDirective */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_5__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_26__providers_utils_text__["a" /* CoreTextUtilsProvider */], __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core_src_translate_service__["a" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_9__providers_utils_utils__["a" /* CoreUtilsProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_utils_url__["a" /* CoreUrlUtilsProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_logger__["a" /* CoreLoggerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_filepool__["a" /* CoreFilepoolProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_app__["a" /* CoreAppProvider */], __WEBPACK_IMPORTED_MODULE_27__contentlinks_providers_helper__["a" /* CoreContentLinksHelperProvider */], [2, __WEBPACK_IMPORTED_MODULE_28_ionic_angular_navigation_nav_controller__["a" /* NavController */]], [2, __WEBPACK_IMPORTED_MODULE_29_ionic_angular_components_content_content__["a" /* Content */]], [2, __WEBPACK_IMPORTED_MODULE_30__components_split_view_split_view__["a" /* CoreSplitViewComponent */]], __WEBPACK_IMPORTED_MODULE_31__providers_utils_iframe__["a" /* CoreIframeUtilsProvider */], __WEBPACK_IMPORTED_MODULE_32__providers_events__["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, 2, ["\n\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ɵand */](16777216, null, 2, 1, null, View_CoreCoursesCourseProgressComponent_2)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](21, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_19__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, 2, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesCourseProgressComponent_5)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](25, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_19__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreCoursesCourseProgressComponent_6)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](28, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_19__angular_common__["k" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n    "])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* ɵncd */](null, 0), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n"])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.course.imageThumb; _ck(_v, 6, 0, currVal_2); var currVal_4 = (_co.course.displayname || _co.course.fullname); _ck(_v, 18, 0, currVal_4); var currVal_5 = _co.downloadCourseEnabled; _ck(_v, 21, 0, currVal_5); var currVal_6 = (_co.course.summary && _co.course.summary.length); _ck(_v, 25, 0, currVal_6); var currVal_7 = ((_co.course.progress != null) && (_co.course.progress >= 0)); _ck(_v, 28, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵinlineInterpolate */](1, "core-course-thumb core-course-color-", (_co.course.id % 10), ""); var currVal_1 = _co.course.imageThumb; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = (_co.course.displayname || _co.course.fullname); _ck(_v, 9, 0, currVal_3); });
}
function View_CoreCoursesCourseProgressComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_42" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵeld */](0, 0, null, null, 1, "core-courses-course-progress", [], null, null, null, View_CoreCoursesCourseProgressComponent_0, RenderType_CoreCoursesCourseProgressComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ɵdid */](1, 245760, null, 0, __WEBPACK_IMPORTED_MODULE_37__course_progress__["a" /* CoreCoursesCourseProgressComponent */], [[2, __WEBPACK_IMPORTED_MODULE_28_ionic_angular_navigation_nav_controller__["a" /* NavController */]], __WEBPACK_IMPORTED_MODULE_38__course_providers_helper__["a" /* CoreCourseHelperProvider */], __WEBPACK_IMPORTED_MODULE_39__course_providers_format_delegate__["a" /* CoreCourseFormatDelegate */], __WEBPACK_IMPORTED_MODULE_6__providers_utils_dom__["a" /* CoreDomUtilsProvider */], __WEBPACK_IMPORTED_MODULE_40__course_providers_course__["a" /* CoreCourseProvider */], __WEBPACK_IMPORTED_MODULE_32__providers_events__["a" /* CoreEventsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_sites__["a" /* CoreSitesProvider */], __WEBPACK_IMPORTED_MODULE_41__providers_courses__["a" /* CoreCoursesProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CoreCoursesCourseProgressComponentNgFactory = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ɵccf */]("core-courses-course-progress", __WEBPACK_IMPORTED_MODULE_37__course_progress__["a" /* CoreCoursesCourseProgressComponent */], View_CoreCoursesCourseProgressComponent_Host_0, { course: "course" }, {}, ["*"]);






/***/ }),

/***/ 1916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(1);

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

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(40);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(2);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(18);

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

// EXTERNAL MODULE: ./src/core/course/components/module/module.ngfactory.js + 1 modules
var module_ngfactory = __webpack_require__(1902);

// EXTERNAL MODULE: ./src/core/course/components/module/module.ts
var module_module = __webpack_require__(1300);

// EXTERNAL MODULE: ./src/core/course/providers/module-prefetch-delegate.ts
var module_prefetch_delegate = __webpack_require__(52);

// EXTERNAL MODULE: ./src/core/course/providers/helper.ts
var providers_helper = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(163);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav-push.js
var nav_push = __webpack_require__(239);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/nav/nav-push-anchor.js
var nav_push_anchor = __webpack_require__(265);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(50);

// EXTERNAL MODULE: ./src/components/icon/icon.ngfactory.js
var icon_ngfactory = __webpack_require__(194);

// EXTERNAL MODULE: ./src/components/icon/icon.ts
var icon = __webpack_require__(165);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(30);

// EXTERNAL MODULE: ./src/core/sitehome/components/all-course-list/all-course-list.ts
var all_course_list = __webpack_require__(1313);

// EXTERNAL MODULE: ./src/core/courses/providers/courses.ts
var courses = __webpack_require__(73);

// CONCATENATED MODULE: ./src/core/sitehome/components/all-course-list/all-course-list.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_nav_nav_push,ionic_angular_navigation_nav_controller,ionic_angular_components_nav_nav_push_anchor,ionic_angular_navigation_deep_linker,_.._.._.._components_icon_icon.ngfactory,_.._.._.._components_icon_icon,_ngx_translate_core_src_translate.pipe,_ngx_translate_core_src_translate.service,_angular_common,_all_course_list,_.._.._courses_providers_courses PURE_IMPORTS_END */


















var styles_CoreSiteHomeAllCourseListComponent = [];
var RenderType_CoreSiteHomeAllCourseListComponent = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreSiteHomeAllCourseListComponent, data: {} });

function View_CoreSiteHomeAllCourseListComponent_1(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 15, "a", [["class", "item item-block"], ["ion-item", ""], ["text-wrap", ""]], [[1, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 6).onClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_15" /* ɵdid */](6, 16384, null, 0, nav_push["a" /* NavPush */], [[2, nav_controller["a" /* NavController */]]], { navPush: [0, "navPush"] }, null), core["_15" /* ɵdid */](7, 1064960, null, 0, nav_push_anchor["a" /* NavPushAnchor */], [nav_push["a" /* NavPush */], [2, deep_linker["a" /* DeepLinker */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_16" /* ɵeld */](9, 0, null, 0, 1, "core-icon", [["fixed-width", ""], ["item-start", ""], ["name", "fa-graduation-cap"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_15" /* ɵdid */](10, 114688, null, 0, icon["a" /* CoreIconComponent */], [core["p" /* ElementRef */]], { name: [0, "name"], fixedWidth: [1, "fixedWidth"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_16" /* ɵeld */](12, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](13, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n"]))], function (_ck, _v) { var currVal_1 = "CoreCoursesAvailableCoursesPage"; _ck(_v, 6, 0, currVal_1); var currVal_2 = "fa-graduation-cap"; var currVal_3 = ""; _ck(_v, 10, 0, currVal_2, currVal_3); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 7)._href; _ck(_v, 0, 0, currVal_0); var currVal_4 = core["_41" /* ɵunv */](_v, 13, 0, core["_29" /* ɵnov */](_v, 14).transform("core.courses.availablecourses")); _ck(_v, 13, 0, currVal_4); });
}
function View_CoreSiteHomeAllCourseListComponent_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeAllCourseListComponent_1)), core["_15" /* ɵdid */](1, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.show; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CoreSiteHomeAllCourseListComponent_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-sitehome-all-course-list", [], null, null, null, View_CoreSiteHomeAllCourseListComponent_0, RenderType_CoreSiteHomeAllCourseListComponent)), core["_15" /* ɵdid */](1, 49152, null, 0, all_course_list["a" /* CoreSiteHomeAllCourseListComponent */], [courses["a" /* CoreCoursesProvider */]], null, null)], null, null); }
var CoreSiteHomeAllCourseListComponentNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("core-sitehome-all-course-list", all_course_list["a" /* CoreSiteHomeAllCourseListComponent */], View_CoreSiteHomeAllCourseListComponent_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon_icon = __webpack_require__(42);

// EXTERNAL MODULE: ./src/core/sitehome/components/categories/categories.ts
var categories = __webpack_require__(1314);

// CONCATENATED MODULE: ./src/core/sitehome/components/categories/categories.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_nav_nav_push,ionic_angular_navigation_nav_controller,ionic_angular_components_nav_nav_push_anchor,ionic_angular_navigation_deep_linker,ionic_angular_components_icon_icon,_ngx_translate_core_src_translate.pipe,_ngx_translate_core_src_translate.service,_angular_common,_categories,_.._.._courses_providers_courses PURE_IMPORTS_END */

















var styles_CoreSiteHomeCategoriesComponent = [];
var RenderType_CoreSiteHomeCategoriesComponent = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreSiteHomeCategoriesComponent, data: {} });

function View_CoreSiteHomeCategoriesComponent_1(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 15, "a", [["class", "item item-block"], ["ion-item", ""], ["text-wrap", ""]], [[1, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 6).onClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_15" /* ɵdid */](6, 16384, null, 0, nav_push["a" /* NavPush */], [[2, nav_controller["a" /* NavController */]]], { navPush: [0, "navPush"] }, null), core["_15" /* ɵdid */](7, 1064960, null, 0, nav_push_anchor["a" /* NavPushAnchor */], [nav_push["a" /* NavPush */], [2, deep_linker["a" /* DeepLinker */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_16" /* ɵeld */](9, 0, null, 0, 1, "ion-icon", [["item-start", ""], ["name", "folder"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](10, 147456, [[3, 4]], 0, icon_icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_16" /* ɵeld */](12, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](13, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n"]))], function (_ck, _v) { var currVal_1 = "CoreCoursesCategoriesPage"; _ck(_v, 6, 0, currVal_1); var currVal_3 = "folder"; _ck(_v, 10, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 7)._href; _ck(_v, 0, 0, currVal_0); var currVal_2 = core["_29" /* ɵnov */](_v, 10)._hidden; _ck(_v, 9, 0, currVal_2); var currVal_4 = core["_41" /* ɵunv */](_v, 13, 0, core["_29" /* ɵnov */](_v, 14).transform("core.courses.categories")); _ck(_v, 13, 0, currVal_4); });
}
function View_CoreSiteHomeCategoriesComponent_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeCategoriesComponent_1)), core["_15" /* ɵdid */](1, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.show; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CoreSiteHomeCategoriesComponent_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-sitehome-categories", [], null, null, null, View_CoreSiteHomeCategoriesComponent_0, RenderType_CoreSiteHomeCategoriesComponent)), core["_15" /* ɵdid */](1, 49152, null, 0, categories["a" /* CoreSiteHomeCategoriesComponent */], [courses["a" /* CoreCoursesProvider */]], null, null)], null, null); }
var CoreSiteHomeCategoriesComponentNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("core-sitehome-categories", categories["a" /* CoreSiteHomeCategoriesComponent */], View_CoreSiteHomeCategoriesComponent_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./src/core/sitehome/components/course-search/course-search.ts
var course_search = __webpack_require__(1315);

// CONCATENATED MODULE: ./src/core/sitehome/components/course-search/course-search.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_nav_nav_push,ionic_angular_navigation_nav_controller,ionic_angular_components_nav_nav_push_anchor,ionic_angular_navigation_deep_linker,ionic_angular_components_icon_icon,_ngx_translate_core_src_translate.pipe,_ngx_translate_core_src_translate.service,_angular_common,_course_search,_.._.._courses_providers_courses PURE_IMPORTS_END */

















var styles_CoreSiteHomeCourseSearchComponent = [];
var RenderType_CoreSiteHomeCourseSearchComponent = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreSiteHomeCourseSearchComponent, data: {} });

function View_CoreSiteHomeCourseSearchComponent_1(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 15, "a", [["class", "item item-block"], ["ion-item", ""], ["text-wrap", ""]], [[1, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 6).onClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_15" /* ɵdid */](6, 16384, null, 0, nav_push["a" /* NavPush */], [[2, nav_controller["a" /* NavController */]]], { navPush: [0, "navPush"] }, null), core["_15" /* ɵdid */](7, 1064960, null, 0, nav_push_anchor["a" /* NavPushAnchor */], [nav_push["a" /* NavPush */], [2, deep_linker["a" /* DeepLinker */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_16" /* ɵeld */](9, 0, null, 0, 1, "ion-icon", [["item-start", ""], ["name", "search"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_15" /* ɵdid */](10, 147456, [[3, 4]], 0, icon_icon["a" /* Icon */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_16" /* ɵeld */](12, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](13, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n"]))], function (_ck, _v) { var currVal_1 = "CoreCoursesSearchPage"; _ck(_v, 6, 0, currVal_1); var currVal_3 = "search"; _ck(_v, 10, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 7)._href; _ck(_v, 0, 0, currVal_0); var currVal_2 = core["_29" /* ɵnov */](_v, 10)._hidden; _ck(_v, 9, 0, currVal_2); var currVal_4 = core["_41" /* ɵunv */](_v, 13, 0, core["_29" /* ɵnov */](_v, 14).transform("core.courses.searchcourses")); _ck(_v, 13, 0, currVal_4); });
}
function View_CoreSiteHomeCourseSearchComponent_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeCourseSearchComponent_1)), core["_15" /* ɵdid */](1, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.show; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CoreSiteHomeCourseSearchComponent_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-sitehome-course-search", [], null, null, null, View_CoreSiteHomeCourseSearchComponent_0, RenderType_CoreSiteHomeCourseSearchComponent)), core["_15" /* ɵdid */](1, 49152, null, 0, course_search["a" /* CoreSiteHomeCourseSearchComponent */], [courses["a" /* CoreCoursesProvider */]], null, null)], null, null); }
var CoreSiteHomeCourseSearchComponentNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("core-sitehome-course-search", course_search["a" /* CoreSiteHomeCourseSearchComponent */], View_CoreSiteHomeCourseSearchComponent_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./src/core/sitehome/components/enrolled-course-list/enrolled-course-list.ts
var enrolled_course_list = __webpack_require__(1316);

// CONCATENATED MODULE: ./src/core/sitehome/components/enrolled-course-list/enrolled-course-list.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,ionic_angular_components_nav_nav_push,ionic_angular_navigation_nav_controller,ionic_angular_components_nav_nav_push_anchor,ionic_angular_navigation_deep_linker,_.._.._.._components_icon_icon.ngfactory,_.._.._.._components_icon_icon,_ngx_translate_core_src_translate.pipe,_ngx_translate_core_src_translate.service,_angular_common,_enrolled_course_list,_.._.._courses_providers_courses PURE_IMPORTS_END */


















var styles_CoreSiteHomeEnrolledCourseListComponent = [];
var RenderType_CoreSiteHomeEnrolledCourseListComponent = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreSiteHomeEnrolledCourseListComponent, data: {} });

function View_CoreSiteHomeEnrolledCourseListComponent_1(_l) {
    return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 15, "a", [["class", "item item-block"], ["ion-item", ""], ["text-wrap", ""]], [[1, "href", 4]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            if (("click" === en)) {
                var pd_0 = (core["_29" /* ɵnov */](_v, 6).onClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_15" /* ɵdid */](6, 16384, null, 0, nav_push["a" /* NavPush */], [[2, nav_controller["a" /* NavController */]]], { navPush: [0, "navPush"] }, null), core["_15" /* ɵdid */](7, 1064960, null, 0, nav_push_anchor["a" /* NavPushAnchor */], [nav_push["a" /* NavPush */], [2, deep_linker["a" /* DeepLinker */]]], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_16" /* ɵeld */](9, 0, null, 0, 1, "core-icon", [["fixed-width", ""], ["item-start", ""], ["name", "fa-graduation-cap"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_15" /* ɵdid */](10, 114688, null, 0, icon["a" /* CoreIconComponent */], [core["p" /* ElementRef */]], { name: [0, "name"], fixedWidth: [1, "fixedWidth"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n    "])), (_l()(), core["_16" /* ɵeld */](12, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](13, null, ["", ""])), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]]), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n"]))], function (_ck, _v) { var currVal_1 = "CoreCoursesMyCoursesPage"; _ck(_v, 6, 0, currVal_1); var currVal_2 = "fa-graduation-cap"; var currVal_3 = ""; _ck(_v, 10, 0, currVal_2, currVal_3); }, function (_ck, _v) { var currVal_0 = core["_29" /* ɵnov */](_v, 7)._href; _ck(_v, 0, 0, currVal_0); var currVal_4 = core["_41" /* ɵunv */](_v, 13, 0, core["_29" /* ɵnov */](_v, 14).transform("core.courses.mycourses")); _ck(_v, 13, 0, currVal_4); });
}
function View_CoreSiteHomeEnrolledCourseListComponent_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeEnrolledCourseListComponent_1)), core["_15" /* ɵdid */](1, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.show; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CoreSiteHomeEnrolledCourseListComponent_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-sitehome-enrolled-course-list", [], null, null, null, View_CoreSiteHomeEnrolledCourseListComponent_0, RenderType_CoreSiteHomeEnrolledCourseListComponent)), core["_15" /* ɵdid */](1, 114688, null, 0, enrolled_course_list["a" /* CoreSiteHomeEnrolledCourseListComponent */], [courses["a" /* CoreCoursesProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CoreSiteHomeEnrolledCourseListComponentNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("core-sitehome-enrolled-course-list", enrolled_course_list["a" /* CoreSiteHomeEnrolledCourseListComponent */], View_CoreSiteHomeEnrolledCourseListComponent_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./src/core/sitehome/components/news/news.ts
var news = __webpack_require__(1317);

// EXTERNAL MODULE: ./src/core/course/providers/course.ts
var course = __webpack_require__(16);

// EXTERNAL MODULE: ./src/core/course/providers/module-delegate.ts
var module_delegate = __webpack_require__(54);

// EXTERNAL MODULE: ./src/core/sitehome/providers/sitehome.ts
var sitehome = __webpack_require__(217);

// CONCATENATED MODULE: ./src/core/sitehome/components/news/news.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._course_components_module_module.ngfactory,_.._.._course_components_module_module,ionic_angular_navigation_nav_controller,_.._.._course_providers_module_prefetch_delegate,_.._.._.._providers_utils_dom,_.._.._course_providers_helper,_.._.._.._providers_events,_.._.._.._providers_sites,_angular_common,_news,_.._.._course_providers_course,_.._.._course_providers_module_delegate,_.._providers_sitehome PURE_IMPORTS_END */














var styles_CoreSiteHomeNewsComponent = [];
var RenderType_CoreSiteHomeNewsComponent = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreSiteHomeNewsComponent, data: {} });

function View_CoreSiteHomeNewsComponent_1(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-course-module", [["class", "core-sitehome-news"]], null, null, null, module_ngfactory["b" /* View_CoreCourseModuleComponent_0 */], module_ngfactory["a" /* RenderType_CoreCourseModuleComponent */])), core["_15" /* ɵdid */](1, 245760, null, 0, module_module["a" /* CoreCourseModuleComponent */], [[2, nav_controller["a" /* NavController */]], module_prefetch_delegate["a" /* CoreCourseModulePrefetchDelegate */], dom["a" /* CoreDomUtilsProvider */], providers_helper["a" /* CoreCourseHelperProvider */], events["a" /* CoreEventsProvider */], sites["a" /* CoreSitesProvider */]], { module: [0, "module"], courseId: [1, "courseId"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.module; var currVal_1 = _co.siteHomeId; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CoreSiteHomeNewsComponent_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeNewsComponent_1)), core["_15" /* ɵdid */](1, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.show; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CoreSiteHomeNewsComponent_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-sitehome-news", [], null, null, null, View_CoreSiteHomeNewsComponent_0, RenderType_CoreSiteHomeNewsComponent)), core["_15" /* ɵdid */](1, 114688, null, 0, news["a" /* CoreSiteHomeNewsComponent */], [sites["a" /* CoreSitesProvider */], course["a" /* CoreCourseProvider */], module_delegate["a" /* CoreCourseModuleDelegate */], sitehome["a" /* CoreSiteHomeProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CoreSiteHomeNewsComponentNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("core-sitehome-news", news["a" /* CoreSiteHomeNewsComponent */], View_CoreSiteHomeNewsComponent_Host_0, {}, {}, []);





// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ngfactory.js
var empty_box_ngfactory = __webpack_require__(164);

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ts
var empty_box = __webpack_require__(134);

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(57);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(26);

// EXTERNAL MODULE: ./src/core/sitehome/components/index/index.ts
var index = __webpack_require__(1303);

// CONCATENATED MODULE: ./src/core/sitehome/components/index/index.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderType_CoreSiteHomeIndexComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = View_CoreSiteHomeIndexComponent_0;
/* unused harmony export View_CoreSiteHomeIndexComponent_Host_0 */
/* unused harmony export CoreSiteHomeIndexComponentNgFactory */
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._.._.._node_modules_ionic_angular_components_item_item.ngfactory,ionic_angular_components_item_item,ionic_angular_util_form,ionic_angular_config_config,ionic_angular_components_item_item_reorder,ionic_angular_components_item_item_content,_.._.._.._directives_format_text,_.._.._.._providers_sites,_.._.._.._providers_utils_dom,_.._.._.._providers_utils_text,_ngx_translate_core_src_translate.service,ionic_angular_platform_platform,_.._.._.._providers_utils_utils,_.._.._.._providers_utils_url,_.._.._.._providers_logger,_.._.._.._providers_filepool,_.._.._.._providers_app,_.._.._contentlinks_providers_helper,ionic_angular_navigation_nav_controller,ionic_angular_components_content_content,_.._.._.._components_split_view_split_view,_.._.._.._providers_utils_iframe,_.._.._.._providers_events,_.._.._course_components_module_module.ngfactory,_.._.._course_components_module_module,_.._.._course_providers_module_prefetch_delegate,_.._.._course_providers_helper,_angular_common,ionic_angular_components_item_item_divider,_all_course_list_all_course_list.ngfactory,_all_course_list_all_course_list,_.._.._courses_providers_courses,_categories_categories.ngfactory,_categories_categories,_course_search_course_search.ngfactory,_course_search_course_search,_enrolled_course_list_enrolled_course_list.ngfactory,_enrolled_course_list_enrolled_course_list,_news_news.ngfactory,_news_news,_.._.._course_providers_course,_.._.._course_providers_module_delegate,_.._providers_sitehome,_.._.._.._components_empty_box_empty_box.ngfactory,_.._.._.._components_empty_box_empty_box,_ngx_translate_core_src_translate.pipe,_.._.._.._components_loading_loading.ngfactory,_.._.._.._components_loading_loading,ionic_angular_components_list_list,ionic_angular_gestures_gesture_controller,ionic_angular_platform_dom_controller,_index PURE_IMPORTS_END */





















































var styles_CoreSiteHomeIndexComponent = [];
var RenderType_CoreSiteHomeIndexComponent = /*@__PURE__*/ core["_14" /* ɵcrt */]({ encapsulation: 2, styles: styles_CoreSiteHomeIndexComponent, data: {} });

function View_CoreSiteHomeIndexComponent_2(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 9, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 1, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 2, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 3, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 2, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](8, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.section.summary; _ck(_v, 8, 0, currVal_0); }, null); }
function View_CoreSiteHomeIndexComponent_3(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-course-module", [], null, null, null, module_ngfactory["b" /* View_CoreCourseModuleComponent_0 */], module_ngfactory["a" /* RenderType_CoreCourseModuleComponent */])), core["_15" /* ɵdid */](1, 245760, null, 0, module_module["a" /* CoreCourseModuleComponent */], [[2, nav_controller["a" /* NavController */]], module_prefetch_delegate["a" /* CoreCourseModulePrefetchDelegate */], dom["a" /* CoreDomUtilsProvider */], providers_helper["a" /* CoreCourseHelperProvider */], events["a" /* CoreEventsProvider */], sites["a" /* CoreSitesProvider */]], { module: [0, "module"], courseId: [1, "courseId"], enabled: [2, "enabled"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit; var currVal_1 = _co.siteHomeId; var currVal_2 = true; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_CoreSiteHomeIndexComponent_1(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_2)), core["_15" /* ɵdid */](3, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_3)), core["_15" /* ɵdid */](6, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.section.summary; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.section.modules; _ck(_v, 6, 0, currVal_1); }, null); }
function View_CoreSiteHomeIndexComponent_5(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, "ion-item-divider", [["class", "item item-divider"], ["color", "light"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 4, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 5, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 6, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null)], function (_ck, _v) { var currVal_0 = "light"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "light"; _ck(_v, 5, 0, currVal_1); }, null); }
function View_CoreSiteHomeIndexComponent_7(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-sitehome-all-course-list", [["class", "item"]], null, null, null, View_CoreSiteHomeAllCourseListComponent_0, RenderType_CoreSiteHomeAllCourseListComponent)), core["_15" /* ɵdid */](1, 49152, null, 0, all_course_list["a" /* CoreSiteHomeAllCourseListComponent */], [courses["a" /* CoreCoursesProvider */]], null, null)], null, null); }
function View_CoreSiteHomeIndexComponent_8(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-sitehome-categories", [], null, null, null, View_CoreSiteHomeCategoriesComponent_0, RenderType_CoreSiteHomeCategoriesComponent)), core["_15" /* ɵdid */](1, 49152, null, 0, categories["a" /* CoreSiteHomeCategoriesComponent */], [courses["a" /* CoreCoursesProvider */]], null, null)], null, null); }
function View_CoreSiteHomeIndexComponent_9(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-sitehome-course-search", [], null, null, null, View_CoreSiteHomeCourseSearchComponent_0, RenderType_CoreSiteHomeCourseSearchComponent)), core["_15" /* ɵdid */](1, 49152, null, 0, course_search["a" /* CoreSiteHomeCourseSearchComponent */], [courses["a" /* CoreCoursesProvider */]], null, null)], null, null); }
function View_CoreSiteHomeIndexComponent_10(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-sitehome-enrolled-course-list", [], null, null, null, View_CoreSiteHomeEnrolledCourseListComponent_0, RenderType_CoreSiteHomeEnrolledCourseListComponent)), core["_15" /* ɵdid */](1, 114688, null, 0, enrolled_course_list["a" /* CoreSiteHomeEnrolledCourseListComponent */], [courses["a" /* CoreCoursesProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_CoreSiteHomeIndexComponent_11(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-sitehome-news", [], null, null, null, View_CoreSiteHomeNewsComponent_0, RenderType_CoreSiteHomeNewsComponent)), core["_15" /* ɵdid */](1, 114688, null, 0, news["a" /* CoreSiteHomeNewsComponent */], [sites["a" /* CoreSitesProvider */], course["a" /* CoreCourseProvider */], module_delegate["a" /* CoreCourseModuleDelegate */], sitehome["a" /* CoreSiteHomeProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_CoreSiteHomeIndexComponent_6(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 16, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_7)), core["_15" /* ɵdid */](3, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_8)), core["_15" /* ɵdid */](6, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_9)), core["_15" /* ɵdid */](9, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_10)), core["_15" /* ɵdid */](12, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_11)), core["_15" /* ɵdid */](15, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "]))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit == "all-course-list"); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_v.context.$implicit == "categories"); _ck(_v, 6, 0, currVal_1); var currVal_2 = (_v.context.$implicit == "course-search"); _ck(_v, 9, 0, currVal_2); var currVal_3 = (_v.context.$implicit == "enrolled-course-list"); _ck(_v, 12, 0, currVal_3); var currVal_4 = (_v.context.$implicit == "news"); _ck(_v, 15, 0, currVal_4); }, null); }
function View_CoreSiteHomeIndexComponent_4(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_5)), core["_15" /* ɵdid */](3, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_6)), core["_15" /* ɵdid */](6, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.section && _co.section.hasContent); _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.items; _ck(_v, 6, 0, currVal_1); }, null); }
function View_CoreSiteHomeIndexComponent_13(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 5, "ion-item-divider", [["class", "item item-divider"], ["color", "light"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], { color: [0, "color"] }, null), core["_37" /* ɵqud */](335544320, 7, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 8, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 9, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */]], { color: [0, "color"] }, null)], function (_ck, _v) { var currVal_0 = "light"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "light"; _ck(_v, 5, 0, currVal_1); }, null); }
function View_CoreSiteHomeIndexComponent_14(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 9, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_15" /* ɵdid */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_37" /* ɵqud */](335544320, 10, { contentLabel: 0 }), core["_37" /* ɵqud */](603979776, 11, { _buttons: 1 }), core["_37" /* ɵqud */](603979776, 12, { _icons: 1 }), core["_15" /* ɵdid */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n                "])), (_l()(), core["_16" /* ɵeld */](7, 0, null, 2, 1, "core-format-text", [], null, null, null, null, null)), core["_15" /* ɵdid */](8, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["p" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */]], { text: [0, "text"] }, null), (_l()(), core["_40" /* ɵted */](-1, 2, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.block.summary; _ck(_v, 8, 0, currVal_0); }, null); }
function View_CoreSiteHomeIndexComponent_15(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-course-module", [], null, null, null, module_ngfactory["b" /* View_CoreCourseModuleComponent_0 */], module_ngfactory["a" /* RenderType_CoreCourseModuleComponent */])), core["_15" /* ɵdid */](1, 245760, null, 0, module_module["a" /* CoreCourseModuleComponent */], [[2, nav_controller["a" /* NavController */]], module_prefetch_delegate["a" /* CoreCourseModulePrefetchDelegate */], dom["a" /* CoreDomUtilsProvider */], providers_helper["a" /* CoreCourseHelperProvider */], events["a" /* CoreEventsProvider */], sites["a" /* CoreSitesProvider */]], { module: [0, "module"], courseId: [1, "courseId"], enabled: [2, "enabled"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit; var currVal_1 = _co.siteHomeId; var currVal_2 = true; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_CoreSiteHomeIndexComponent_12(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 10, null, null, null, null, null, null, null)), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_13)), core["_15" /* ɵdid */](3, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_14)), core["_15" /* ɵdid */](6, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n            "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_15)), core["_15" /* ɵdid */](9, 802816, null, 0, common["j" /* NgForOf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */], core["v" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.section && _co.section.hasContent) || (_co.items.length > 0)); _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.block.summary; _ck(_v, 6, 0, currVal_1); var currVal_2 = _co.block.modules; _ck(_v, 9, 0, currVal_2); }, null); }
function View_CoreSiteHomeIndexComponent_16(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 2, "core-empty-box", [["icon", "qr-scanner"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_15" /* ɵdid */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], icon: [1, "icon"] }, null), core["_32" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["i" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_41" /* ɵunv */](_v, 1, 0, core["_29" /* ɵnov */](_v, 2).transform("core.course.nocontentavailable")); var currVal_1 = "qr-scanner"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CoreSiteHomeIndexComponent_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 21, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_15" /* ɵdid */](1, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["p" /* ElementRef */], events["a" /* CoreEventsProvider */], utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n    "])), (_l()(), core["_16" /* ɵeld */](3, 0, null, 0, 14, "ion-list", [], null, null, null, null, null)), core["_15" /* ɵdid */](4, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["p" /* ElementRef */], core["K" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_1)), core["_15" /* ɵdid */](8, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_4)), core["_15" /* ɵdid */](12, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n\n        "])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_11" /* ɵand */](16777216, null, null, 1, null, View_CoreSiteHomeIndexComponent_12)), core["_15" /* ɵdid */](16, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n\n    "])), (_l()(), core["_11" /* ɵand */](16777216, null, 0, 1, null, View_CoreSiteHomeIndexComponent_16)), core["_15" /* ɵdid */](20, 16384, null, 0, common["k" /* NgIf */], [core["W" /* ViewContainerRef */], core["T" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_40" /* ɵted */](-1, 0, ["\n"])), (_l()(), core["_40" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.dataLoaded; _ck(_v, 1, 0, currVal_0); var currVal_1 = (_co.section && _co.section.hasContent); _ck(_v, 8, 0, currVal_1); var currVal_2 = (_co.items.length > 0); _ck(_v, 12, 0, currVal_2); var currVal_3 = (_co.block && _co.block.hasContent); _ck(_v, 16, 0, currVal_3); var currVal_4 = !_co.hasContent; _ck(_v, 20, 0, currVal_4); }, null); }
function View_CoreSiteHomeIndexComponent_Host_0(_l) { return core["_42" /* ɵvid */](0, [(_l()(), core["_16" /* ɵeld */](0, 0, null, null, 1, "core-sitehome-index", [], null, null, null, View_CoreSiteHomeIndexComponent_0, RenderType_CoreSiteHomeIndexComponent)), core["_15" /* ɵdid */](1, 114688, null, 0, index["a" /* CoreSiteHomeIndexComponent */], [dom["a" /* CoreDomUtilsProvider */], sites["a" /* CoreSitesProvider */], course["a" /* CoreCourseProvider */], providers_helper["a" /* CoreCourseHelperProvider */], module_prefetch_delegate["a" /* CoreCourseModulePrefetchDelegate */], sitehome["a" /* CoreSiteHomeProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CoreSiteHomeIndexComponentNgFactory = /*@__PURE__*/ core["_12" /* ɵccf */]("core-sitehome-index", index["a" /* CoreSiteHomeIndexComponent */], View_CoreSiteHomeIndexComponent_Host_0, {}, {}, []);






/***/ })

});
//# sourceMappingURL=6.js.map