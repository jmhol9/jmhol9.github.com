webpackJsonp([1,4],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOGGLE_RSV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TOGGLE_PLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WPM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PHRASE_LENGTH; });
/* unused harmony export BOOK_POSITION */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ToggleRsvAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TogglePlayAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return WpmAction; });
/* unused harmony export PhraseLengthAction */
var TOGGLE_RSV = "[READER] Toggle RSV";
var TOGGLE_PLAY = "[READER] Play";
var WPM = "[READER] WPM";
var PHRASE_LENGTH = "[READER] Phrase Length";
var BOOK_POSITION = "[READER] Book Position";
var ToggleRsvAction = (function () {
    function ToggleRsvAction() {
        this.type = TOGGLE_RSV;
    }
    return ToggleRsvAction;
}());

var TogglePlayAction = (function () {
    function TogglePlayAction() {
        this.type = TOGGLE_PLAY;
    }
    return TogglePlayAction;
}());

var WpmAction = (function () {
    function WpmAction(payload) {
        this.payload = payload;
        this.type = WPM;
    }
    return WpmAction;
}());

var PhraseLengthAction = (function () {
    function PhraseLengthAction(payload) {
        this.payload = payload;
        this.type = PHRASE_LENGTH;
    }
    return PhraseLengthAction;
}());

//# sourceMappingURL=reader.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_detail_page_component__ = __webpack_require__(89);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__book_detail_page_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_list_page_component__ = __webpack_require__(90);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__book_list_page_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_detail_page__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_list_page__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__full_text_view__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_page__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_book_page__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rsv_view__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainersModule; });






var DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_0__book_detail_page__["a" /* BookDetailPageComponent */],
    __WEBPACK_IMPORTED_MODULE_1__book_list_page__["a" /* BookListPageComponent */],
    __WEBPACK_IMPORTED_MODULE_2__full_text_view__["a" /* FullTextViewComponent */],
    __WEBPACK_IMPORTED_MODULE_3__login_page__["a" /* LoginPageComponent */],
    __WEBPACK_IMPORTED_MODULE_4__new_book_page__["a" /* NewBookPageComponent */],
    __WEBPACK_IMPORTED_MODULE_5__rsv_view__["a" /* RsvViewComponent */]
];
var ContainersModule = (function () {
    function ContainersModule() {
    }
    return ContainersModule;
}());

//# sourceMappingURL=containers.module.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__full_text_view_component__ = __webpack_require__(91);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__full_text_view_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_page_component__ = __webpack_require__(92);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_page_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__new_book_page_component__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__new_book_page_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rsv_view_component__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__rsv_view_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngrx_store_freeze__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reader__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__book_position__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__books__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_details__ = __webpack_require__(249);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* unused harmony export getReaderState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getRsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getWpm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getPhraseLength; });
/* unused harmony export getBooksState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBook; });
/* unused harmony export getBookPositionState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getBookPosition; });
/* unused harmony export getUserState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getLoggedIn; });
/* unused harmony export getUserId */
/* unused harmony export getUserEmail */
/* unused harmony export getUserName */









var reducers = {
    reader: __WEBPACK_IMPORTED_MODULE_5__reader__["a" /* reducer */],
    books: __WEBPACK_IMPORTED_MODULE_7__books__["a" /* reducer */],
    bookPosition: __WEBPACK_IMPORTED_MODULE_6__book_position__["a" /* reducer */],
    userDetails: __WEBPACK_IMPORTED_MODULE_8__user_details__["a" /* reducer */]
};
var devReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose__["compose"])(__WEBPACK_IMPORTED_MODULE_4_ngrx_store_freeze__["storeFreeze"], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* combineReducers */])(reducers);
var prodReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* combineReducers */])(reducers);
function reducer(state, action) {
    if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
        return prodReducer(state, action);
    }
    else {
        return devReducer(state, action);
    }
}
// READER STATE REDUCERS
var getReaderState = function (state) { return state.reader; };
var getPlay = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getReaderState, __WEBPACK_IMPORTED_MODULE_5__reader__["b" /* getPlay */]);
var getRsv = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getReaderState, __WEBPACK_IMPORTED_MODULE_5__reader__["c" /* getRsv */]);
var getWpm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getReaderState, __WEBPACK_IMPORTED_MODULE_5__reader__["d" /* getWpm */]);
var getPhraseLength = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getReaderState, __WEBPACK_IMPORTED_MODULE_5__reader__["e" /* getPhraseLength */]);
// BOOK STATE REDUCERS
var getBooksState = function (state) { return state.books; };
var getBook = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getBooksState, __WEBPACK_IMPORTED_MODULE_7__books__["b" /* getBook */]);
// BOOK POSITION STATE REDUCERS
var getBookPositionState = function (state) { return state.bookPosition; };
var getBookPosition = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getBookPositionState, __WEBPACK_IMPORTED_MODULE_6__book_position__["b" /* getPosition */]);
// USER REDUCERS
var getUserState = function (state) { return state.userDetails; };
var getLoggedIn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getUserState, __WEBPACK_IMPORTED_MODULE_8__user_details__["b" /* getLoggedIn */]);
var getUserId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getUserState, __WEBPACK_IMPORTED_MODULE_8__user_details__["c" /* getUserId */]);
var getUserEmail = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getUserState, __WEBPACK_IMPORTED_MODULE_8__user_details__["d" /* getUserEmail */]);
var getUserName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getUserState, __WEBPACK_IMPORTED_MODULE_8__user_details__["e" /* getUserName */]);
//# sourceMappingURL=app.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiModule; });
var ApiModule = (function () {
    function ApiModule() {
    }
    return ApiModule;
}());

//# sourceMappingURL=api.module.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthApiModule; });
var AuthApiModule = (function () {
    function AuthApiModule() {
    }
    return AuthApiModule;
}());

//# sourceMappingURL=auth-api.module.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__browser_utils__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_rest_http_config__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthTokenApi; });




var AuthTokenApi = (function () {
    function AuthTokenApi(http, config, tokenService) {
        this.http = http;
        this.config = config;
        this.tokenService = tokenService;
        this.tokenRouteExtension = "/user_token";
        this.usersRouteExtension = "/users";
    }
    Object.defineProperty(AuthTokenApi.prototype, "tokenRoute", {
        get: function () {
            return this.config.baseUrl + this.tokenRouteExtension;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthTokenApi.prototype, "usersRoute", {
        get: function () {
            return this.config.baseUrl + this.usersRouteExtension;
        },
        enumerable: true,
        configurable: true
    });
    AuthTokenApi.prototype.verify = function () {
        return this.http
            .get(this.usersRoute, this.tokenService.getOptions())
            .map(function (res) { return res.json(); });
    };
    AuthTokenApi.prototype.get = function (email, password) {
        return this.http
            .post(this.tokenRoute, { auth: { email: email, password: password } })
            .map(function (res) {
            if (res == null || res.text() === "") {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(undefined);
            }
            return res.json();
        });
    };
    AuthTokenApi.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_http__["k" /* Http */] }, { type: __WEBPACK_IMPORTED_MODULE_3__base_rest_http_config__["a" /* RestHttpConfig */] }, { type: __WEBPACK_IMPORTED_MODULE_2__browser_utils__["a" /* AuthTokenService */] }]; };
    return AuthTokenApi;
}());

//# sourceMappingURL=auth-api.service.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__response_envelope__ = __webpack_require__(142);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadableApi; });

var ReadableApi = (function () {
    function ReadableApi(rest, authService, tokenService) {
        this.rest = rest;
        this.authService = authService;
        this.tokenService = tokenService;
    }
    Object.defineProperty(ReadableApi.prototype, "options", {
        get: function () {
            return this.tokenService.getOptions();
        },
        enumerable: true,
        configurable: true
    });
    ReadableApi.prototype.getById = function (id) {
        var _this = this;
        return this.rest
            .get([this.modelPath, id], undefined, this.options)
            .map(function (res) { return _this.unwrapSingle(res); });
    };
    ReadableApi.prototype.getByFilter = function (query) {
        return this.rest
            .get(this.modelPath, query, this.options)
            .map(function (res) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__response_envelope__["a" /* makeResponseEnvelope */])(res.data, res.totalRecords);
        });
    };
    ReadableApi.prototype.unwrapSingle = function (json) {
        if (json == null) {
            return;
        }
        if (Array.isArray(json.data)) {
            return json.data.length > 0 ? json.data[0] : undefined;
        }
        return json;
    };
    return ReadableApi;
}());

//# sourceMappingURL=readable-api.service.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = makeResponseEnvelope;
function makeResponseEnvelope(data, totalRecords) {
    if (totalRecords === void 0) { totalRecords = data.length; }
    return Object.assign(data, { totalRecords: totalRecords });
}
//# sourceMappingURL=response-envelope.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browser_utils__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_rest_http_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_writable_api_service__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarksApi; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var BookmarksApi = (function (_super) {
    __extends(BookmarksApi, _super);
    function BookmarksApi(rest, authService, tokenService) {
        var _this = _super.call(this, rest, authService, tokenService) || this;
        _this.modelPath = "bookmarks";
        return _this;
    }
    BookmarksApi.prototype.getById = function (bookId) {
        return _super.prototype.getById.call(this, bookId).map(function (res) {
            if (res == null) {
                return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].empty();
            }
            return new __WEBPACK_IMPORTED_MODULE_1__models__["Bookmark"](res.paragraphIdx, res.wordIdx, res.id);
        });
    };
    BookmarksApi.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_4__base_rest_http_service__["a" /* RestHttp */] }, { type: __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthService */] }, { type: __WEBPACK_IMPORTED_MODULE_3__browser_utils__["a" /* AuthTokenService */] }]; };
    return BookmarksApi;
}(__WEBPACK_IMPORTED_MODULE_5__base_writable_api_service__["a" /* WritableApi */]));

//# sourceMappingURL=bookmarks-api.service.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bookmarks_api_service__ = __webpack_require__(143);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__bookmarks_api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_api_service__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__books_api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__specialized_api_module__ = __webpack_require__(145);
/* unused harmony reexport SpecializedApiModule */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecializedApiModule; });
var SpecializedApiModule = (function () {
    function SpecializedApiModule() {
    }
    return SpecializedApiModule;
}());

//# sourceMappingURL=specialized-api.module.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });




var AuthGuard = (function () {
    function AuthGuard(authService, router, store) {
        this.authService = authService;
        this.router = router;
        this.store = store;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        var redirectToLogin = function (loggedIn) {
            if (!loggedIn) {
                _this.router.navigateByUrl("/login");
            }
        };
        if (!this.authService.initted) {
            return this.authService
                .verify()
                .take(1)
                .flatMap(function () { return _this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["g" /* getLoggedIn */]); })
                .do(redirectToLogin);
        }
        return this.store
            .select(__WEBPACK_IMPORTED_MODULE_2__reducers__["g" /* getLoggedIn */])
            .do(redirectToLogin);
    };
    AuthGuard.prototype.canActivateChild = function () {
        return this.canActivate();
    };
    AuthGuard.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_router__["g" /* Router */] }, { type: __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */] }]; };
    return AuthGuard;
}());

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_storage_service__ = __webpack_require__(98);
/* unused harmony export AUTH_TOKEN_STORAGE_KEY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthTokenService; });


var AUTH_TOKEN_STORAGE_KEY = "authToken";
var AuthTokenService = (function () {
    function AuthTokenService(localStorage) {
        this.localStorage = localStorage;
    }
    AuthTokenService.prototype.set = function (token) {
        this.localStorage.set(AUTH_TOKEN_STORAGE_KEY, token);
    };
    AuthTokenService.prototype.delete = function () {
        this.localStorage.remove(AUTH_TOKEN_STORAGE_KEY);
    };
    AuthTokenService.prototype.get = function () {
        return this.localStorage.get(AUTH_TOKEN_STORAGE_KEY);
    };
    AuthTokenService.prototype.getOptions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["l" /* Headers */]();
        headers.append("Authorization", this.getHeaderString());
        return { headers: headers };
    };
    AuthTokenService.prototype.getHeaderString = function () {
        return "Bearer " + this.get();
    };
    AuthTokenService.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_1__local_storage_service__["a" /* LocalStorageService */] }]; };
    return AuthTokenService;
}());

//# sourceMappingURL=auth-token.service.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserUtilsModule; });
var BrowserUtilsModule = (function () {
    function BrowserUtilsModule() {
    }
    return BrowserUtilsModule;
}());

//# sourceMappingURL=browser-utils.module.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
var ServicesModule = (function () {
    function ServicesModule() {
    }
    return ServicesModule;
}());

//# sourceMappingURL=services.module.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParagraphParserService; });

var ParagraphParserService = (function () {
    function ParagraphParserService() {
    }
    ParagraphParserService.prototype.parse = function (rawText) {
        var _this = this;
        var firstIndex = 0;
        return this.splitRawParagaphs(rawText)
            .map(function (paragraphText, idx) {
            var parsedParagraph = _this.parseSingleParagraph(paragraphText, firstIndex, idx);
            firstIndex = firstIndex + parsedParagraph.length;
            return parsedParagraph;
        });
    };
    ParagraphParserService.prototype.splitRawParagaphs = function (rawText) {
        return rawText
            .split(/\n{2,}|\r\n\r{1,}|\n\r\n{1,}/)
            .filter(function (str) { return str != null && str !== "" && str.length > 0 && !str.match(/^\s*$/); });
    };
    ParagraphParserService.prototype.parseSingleParagraph = function (paragraphText, firstIndex, idx) {
        return new __WEBPACK_IMPORTED_MODULE_0__models__["Paragraph"](paragraphText, firstIndex, idx);
    };
    return ParagraphParserService;
}());

//# sourceMappingURL=paragraph-parser.service.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsServicesModule; });
var UtilsServicesModule = (function () {
    function UtilsServicesModule() {
    }
    return UtilsServicesModule;
}());

//# sourceMappingURL=utils-services.module.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 207;


/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gendir_app_app_module_ngfactory__ = __webpack_require__(220);




if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* platformBrowser */])().bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_3__gendir_app_app_module_ngfactory__["a" /* AppModuleNgFactory */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(230);
/* unused harmony export RenderType_AppComponent */
/* unused harmony export View_AppComponent_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */



var styles_AppComponent = [];
var RenderType_AppComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* ɵcrt */]({
    encapsulation: 2,
    styles: styles_AppComponent,
    data: {}
});
function View_AppComponent_0(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](8388608, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](73728, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_router__["y" /* RouterOutlet */], [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["l" /* RouterOutletMap */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ComponentFactoryResolver */],
            [
                8,
                null
            ]
        ], null, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n']))
    ], null, null);
}
function View_AppComponent_Host_0(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 1, 'app-root', [], null, null, null, View_AppComponent_0, RenderType_AppComponent)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](24576, null, 0, __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* AppComponent */], [], null, null)
    ], null, null);
}
var AppComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* ɵccf */]('app-root', __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* AppComponent */], View_AppComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2pvcmRhbi9nRHJpdmUvSk1ILVByb2plY3RzL3Jzdi1yZWFkZXItZnJvbnRlbmQvc3JjL2FwcC9hcHAuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2pvcmRhbi9nRHJpdmUvSk1ILVByb2plY3RzL3Jzdi1yZWFkZXItZnJvbnRlbmQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwibmc6Ly8vVXNlcnMvam9yZGFuL2dEcml2ZS9KTUgtUHJvamVjdHMvcnN2LXJlYWRlci1mcm9udGVuZC9zcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2pvcmRhbi9nRHJpdmUvSk1ILVByb2plY3RzL3Jzdi1yZWFkZXItZnJvbnRlbmQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzLkFwcENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiIsIjxhcHAtcm9vdD48L2FwcC1yb290PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUE7Z0JBQUE7Ozs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQStCOzs7Ozs7SUNBL0I7Z0JBQUE7Ozs7In0=
//# sourceMappingURL=app.component.ngfactory.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_routing_module__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_components_components_module__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_containers_containers_module__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_services_browser_utils_browser_utils_module__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_services_api_auth_auth_api_module__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_services_auth_auth_module__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_services_api_specialized_specialized_api_module__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_services_api_api_module__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_services_utils_utils_services_module__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_services_services_module__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngrx_store_src_ng2__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ngrx_store_src_dispatcher__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngrx_effects_src_actions__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_services_utils_paragraph_parser_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_services_api_base_rest_http_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_services_browser_utils_local_storage_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_services_browser_utils_auth_token_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_services_api_auth_auth_api_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_services_auth_auth_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__app_services_api_specialized_books_api_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__app_effects_books__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__app_services_api_specialized_bookmarks_api_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__app_services_utils_book_position_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__app_effects_book_position__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__app_effects_user_effects__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ngrx_effects_src_effects_subscription__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ngrx_effects_src_effects_module__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__app_services_auth_auth_guard__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__app_services_utils_infinite_scroll_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__app_services_utils_interval_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__containers_new_book_page_new_book_page_component_ngfactory__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__containers_book_detail_page_book_detail_page_component_ngfactory__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__containers_book_list_page_book_list_page_component_ngfactory__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__containers_login_page_login_page_component_ngfactory__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__app_component_ngfactory__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ngrx_effects_src_bootstrap_listener__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__app_containers_new_book_page_new_book_page_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__app_containers_book_detail_page_book_detail_page_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__app_containers_book_list_page_book_list_page_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__app_containers_login_page_login_page_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__app_reducers_app__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ngrx_store_src_reducer__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ngrx_store_src_state__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ngrx_store_src_store__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__app_services_api_base_rest_http_config__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




















































var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        return _super.call(this, parent, [
            __WEBPACK_IMPORTED_MODULE_37__containers_new_book_page_new_book_page_component_ngfactory__["a" /* NewBookPageComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_38__containers_book_detail_page_book_detail_page_component_ngfactory__["a" /* BookDetailPageComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_39__containers_book_list_page_book_list_page_component_ngfactory__["a" /* BookListPageComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_40__containers_login_page_login_page_component_ngfactory__["a" /* LoginPageComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_41__app_component_ngfactory__["a" /* AppComponentNgFactory */]
        ], [__WEBPACK_IMPORTED_MODULE_41__app_component_ngfactory__["a" /* AppComponentNgFactory */]]) || this;
    }
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_67", {
        get: function () {
            if ((this.__ActivatedRoute_67 == null)) {
                (this.__ActivatedRoute_67 = __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ɵf */](this._Router_16));
            }
            return this.__ActivatedRoute_67;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NoPreloading_68", {
        get: function () {
            if ((this.__NoPreloading_68 == null)) {
                (this.__NoPreloading_68 = new __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NoPreloading */]());
            }
            return this.__NoPreloading_68;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadingStrategy_69", {
        get: function () {
            if ((this.__PreloadingStrategy_69 == null)) {
                (this.__PreloadingStrategy_69 = this._NoPreloading_68);
            }
            return this.__PreloadingStrategy_69;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterPreloader_70", {
        get: function () {
            if ((this.__RouterPreloader_70 == null)) {
                (this.__RouterPreloader_70 = new __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterPreloader */](this._Router_16, this._NgModuleFactoryLoader_14, this._Compiler_13, this, this._PreloadingStrategy_69));
            }
            return this.__RouterPreloader_70;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_71", {
        get: function () {
            if ((this.__PreloadAllModules_71 == null)) {
                (this.__PreloadAllModules_71 = new __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* PreloadAllModules */]());
            }
            return this.__PreloadAllModules_71;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_72", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_72 == null)) {
                (this.__ROUTER_INITIALIZER_72 = __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ɵi */](this._ɵg_2));
            }
            return this.__ROUTER_INITIALIZER_72;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_73", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_73 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_73 = [
                    this._ROUTER_INITIALIZER_72,
                    __WEBPACK_IMPORTED_MODULE_42__ngrx_effects_src_bootstrap_listener__["a" /* runAfterBootstrapEffects */](this, this._EffectsSubscription_64)
                ]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_73;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_74", {
        get: function () {
            if ((this.__LOCALE_ID_74 == null)) {
                (this.__LOCALE_ID_74 = 'en-US');
            }
            return this.__LOCALE_ID_74;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_75", {
        get: function () {
            if ((this.__NgLocalization_75 == null)) {
                (this.__NgLocalization_75 = new __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* NgLocaleLocalization */](this._LOCALE_ID_74));
            }
            return this.__NgLocalization_75;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_76", {
        get: function () {
            if ((this.__APP_ID_76 == null)) {
                (this.__APP_ID_76 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* ɵg */]());
            }
            return this.__APP_ID_76;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_77", {
        get: function () {
            if ((this.__IterableDiffers_77 == null)) {
                (this.__IterableDiffers_77 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ɵl */]());
            }
            return this.__IterableDiffers_77;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_78", {
        get: function () {
            if ((this.__KeyValueDiffers_78 == null)) {
                (this.__KeyValueDiffers_78 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵm */]());
            }
            return this.__KeyValueDiffers_78;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_79", {
        get: function () {
            if ((this.__DomSanitizer_79 == null)) {
                (this.__DomSanitizer_79 = new __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* ɵe */](this.parent.get(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DOCUMENT */])));
            }
            return this.__DomSanitizer_79;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_80", {
        get: function () {
            if ((this.__Sanitizer_80 == null)) {
                (this.__Sanitizer_80 = this._DomSanitizer_79);
            }
            return this.__Sanitizer_80;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_81", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_81 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_81 = new __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["d" /* HammerGestureConfig */]());
            }
            return this.__HAMMER_GESTURE_CONFIG_81;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_82", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_82 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_82 = [
                    new __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["e" /* ɵDomEventsPlugin */](this.parent.get(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DOCUMENT */])),
                    new __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["f" /* ɵKeyEventsPlugin */](this.parent.get(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DOCUMENT */])),
                    new __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["g" /* ɵHammerGesturesPlugin */](this.parent.get(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DOCUMENT */]), this._HAMMER_GESTURE_CONFIG_81)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_82;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_83", {
        get: function () {
            if ((this.__EventManager_83 == null)) {
                (this.__EventManager_83 = new __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["h" /* EventManager */](this._EVENT_MANAGER_PLUGINS_82, this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* NgZone */])));
            }
            return this.__EventManager_83;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275DomSharedStylesHost_84", {
        get: function () {
            if ((this.__ɵDomSharedStylesHost_84 == null)) {
                (this.__ɵDomSharedStylesHost_84 = new __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["i" /* ɵDomSharedStylesHost */](this.parent.get(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DOCUMENT */])));
            }
            return this.__ɵDomSharedStylesHost_84;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275DomRendererFactory2_85", {
        get: function () {
            if ((this.__ɵDomRendererFactory2_85 == null)) {
                (this.__ɵDomRendererFactory2_85 = new __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["j" /* ɵDomRendererFactory2 */](this._EventManager_83, this._ɵDomSharedStylesHost_84));
            }
            return this.__ɵDomRendererFactory2_85;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RendererFactory2_86", {
        get: function () {
            if ((this.__RendererFactory2_86 == null)) {
                (this.__RendererFactory2_86 = this._ɵDomRendererFactory2_85);
            }
            return this.__RendererFactory2_86;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275SharedStylesHost_87", {
        get: function () {
            if ((this.__ɵSharedStylesHost_87 == null)) {
                (this.__ɵSharedStylesHost_87 = this._ɵDomSharedStylesHost_84);
            }
            return this.__ɵSharedStylesHost_87;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Testability_88", {
        get: function () {
            if ((this.__Testability_88 == null)) {
                (this.__Testability_88 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Testability */](this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* NgZone */])));
            }
            return this.__Testability_88;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Meta_89", {
        get: function () {
            if ((this.__Meta_89 == null)) {
                (this.__Meta_89 = new __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["k" /* Meta */](this.parent.get(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DOCUMENT */])));
            }
            return this.__Meta_89;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_90", {
        get: function () {
            if ((this.__Title_90 == null)) {
                (this.__Title_90 = new __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["l" /* Title */](this.parent.get(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DOCUMENT */])));
            }
            return this.__Title_90;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275i_91", {
        get: function () {
            if ((this.__ɵi_91 == null)) {
                (this.__ɵi_91 = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ɵi */]());
            }
            return this.__ɵi_91;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AuthGuard_92", {
        get: function () {
            if ((this.__AuthGuard_92 == null)) {
                (this.__AuthGuard_92 = new __WEBPACK_IMPORTED_MODULE_34__app_services_auth_auth_guard__["a" /* AuthGuard */](this._AuthService_56, this._Router_16, this._Store_42));
            }
            return this.__AuthGuard_92;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_InfiniteScrollService_93", {
        get: function () {
            if ((this.__InfiniteScrollService_93 == null)) {
                (this.__InfiniteScrollService_93 = new __WEBPACK_IMPORTED_MODULE_35__app_services_utils_infinite_scroll_service__["a" /* InfiniteScrollService */]());
            }
            return this.__InfiniteScrollService_93;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IntervalService_94", {
        get: function () {
            if ((this.__IntervalService_94 == null)) {
                (this.__IntervalService_94 = new __WEBPACK_IMPORTED_MODULE_36__app_services_utils_interval_service__["a" /* IntervalService */]());
            }
            return this.__IntervalService_94;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._ɵa_0 = __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* ɵd */](this.parent.get(__WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* Router */], null));
        this._ErrorHandler_1 = __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["m" /* ɵa */]();
        this._ɵg_2 = new __WEBPACK_IMPORTED_MODULE_2__angular_router__["h" /* ɵg */](this);
        this._NgProbeToken_3 = [__WEBPACK_IMPORTED_MODULE_2__angular_router__["i" /* ɵb */]()];
        this._APP_INITIALIZER_4 = [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["j" /* ɵh */](this._ɵg_2),
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ɵo */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["n" /* ɵc */](this.parent.get(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["o" /* NgProbeToken */], null), this._NgProbeToken_3)
        ];
        this._ApplicationInitStatus_5 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ApplicationInitStatus */](this._APP_INITIALIZER_4);
        this._ɵf_6 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ɵf */](this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* NgZone */]), this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ɵConsole */]), this, this._ErrorHandler_1, this.componentFactoryResolver, this._ApplicationInitStatus_5);
        this._ApplicationRef_7 = this._ɵf_6;
        this._UrlSerializer_8 = new __WEBPACK_IMPORTED_MODULE_2__angular_router__["k" /* DefaultUrlSerializer */]();
        this._RouterOutletMap_9 = new __WEBPACK_IMPORTED_MODULE_2__angular_router__["l" /* RouterOutletMap */]();
        this._ROUTER_CONFIGURATION_10 = {
            useHash: true,
            enableTracing: false
        };
        this._LocationStrategy_11 = __WEBPACK_IMPORTED_MODULE_2__angular_router__["m" /* ɵc */](this.parent.get(__WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* PlatformLocation */]), this.parent.get(__WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* APP_BASE_HREF */], null), this._ROUTER_CONFIGURATION_10);
        this._Location_12 = new __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* Location */](this._LocationStrategy_11);
        this._Compiler_13 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Compiler */]();
        this._NgModuleFactoryLoader_14 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* SystemJsNgModuleLoader */](this._Compiler_13, this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* SystemJsNgModuleLoaderConfig */], null));
        this._ROUTES_15 = [[
                {
                    path: 'books',
                    children: [
                        {
                            path: 'new',
                            component: __WEBPACK_IMPORTED_MODULE_43__app_containers_new_book_page_new_book_page_component__["a" /* NewBookPageComponent */]
                        },
                        {
                            path: ':id',
                            component: __WEBPACK_IMPORTED_MODULE_44__app_containers_book_detail_page_book_detail_page_component__["a" /* BookDetailPageComponent */]
                        },
                        {
                            path: '',
                            pathMatch: 'full',
                            component: __WEBPACK_IMPORTED_MODULE_45__app_containers_book_list_page_book_list_page_component__["a" /* BookListPageComponent */]
                        }
                    ],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_34__app_services_auth_auth_guard__["a" /* AuthGuard */]],
                    canActivateChild: [__WEBPACK_IMPORTED_MODULE_34__app_services_auth_auth_guard__["a" /* AuthGuard */]]
                },
                {
                    path: 'login',
                    component: __WEBPACK_IMPORTED_MODULE_46__app_containers_login_page_login_page_component__["a" /* LoginPageComponent */]
                },
                {
                    path: '**',
                    redirectTo: '/books'
                }
            ]
        ];
        this._Router_16 = __WEBPACK_IMPORTED_MODULE_2__angular_router__["n" /* ɵe */](this._ApplicationRef_7, this._UrlSerializer_8, this._RouterOutletMap_9, this._Location_12, this, this._NgModuleFactoryLoader_14, this._Compiler_13, this._ROUTES_15, this._ROUTER_CONFIGURATION_10, this.parent.get(__WEBPACK_IMPORTED_MODULE_2__angular_router__["o" /* UrlHandlingStrategy */], null), this.parent.get(__WEBPACK_IMPORTED_MODULE_2__angular_router__["p" /* RouteReuseStrategy */], null));
        this._RouterModule_17 = new __WEBPACK_IMPORTED_MODULE_2__angular_router__["q" /* RouterModule */](this._ɵa_0, this._Router_16);
        this._AppRoutingModule_18 = new __WEBPACK_IMPORTED_MODULE_4__app_app_routing_module__["a" /* AppRoutingModule */]();
        this._CommonModule_19 = new __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* CommonModule */]();
        this._ApplicationModule_20 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ApplicationModule */](this._ApplicationRef_7);
        this._BrowserModule_21 = new __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["p" /* BrowserModule */](this.parent.get(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["p" /* BrowserModule */], null));
        this._ɵba_22 = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* ɵba */]();
        this._FormsModule_23 = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */]();
        this._HttpModule_24 = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */]();
        this._ComponentsModule_25 = new __WEBPACK_IMPORTED_MODULE_8__app_components_components_module__["a" /* ComponentsModule */]();
        this._ContainersModule_26 = new __WEBPACK_IMPORTED_MODULE_9__app_containers_containers_module__["a" /* ContainersModule */]();
        this._BrowserUtilsModule_27 = new __WEBPACK_IMPORTED_MODULE_10__app_services_browser_utils_browser_utils_module__["a" /* BrowserUtilsModule */]();
        this._AuthApiModule_28 = new __WEBPACK_IMPORTED_MODULE_11__app_services_api_auth_auth_api_module__["a" /* AuthApiModule */]();
        this._AuthModule_29 = new __WEBPACK_IMPORTED_MODULE_12__app_services_auth_auth_module__["a" /* AuthModule */]();
        this._SpecializedApiModule_30 = new __WEBPACK_IMPORTED_MODULE_13__app_services_api_specialized_specialized_api_module__["a" /* SpecializedApiModule */]();
        this._ApiModule_31 = new __WEBPACK_IMPORTED_MODULE_14__app_services_api_api_module__["a" /* ApiModule */]();
        this._UtilsServicesModule_32 = new __WEBPACK_IMPORTED_MODULE_15__app_services_utils_utils_services_module__["a" /* UtilsServicesModule */]();
        this._ServicesModule_33 = new __WEBPACK_IMPORTED_MODULE_16__app_services_services_module__["a" /* ServicesModule */]();
        this._StoreModule_34 = new __WEBPACK_IMPORTED_MODULE_17__ngrx_store_src_ng2__["a" /* StoreModule */]();
        this._Dispatcher_35 = new __WEBPACK_IMPORTED_MODULE_18__ngrx_store_src_dispatcher__["a" /* Dispatcher */]();
        this.__INITIAL_REDUCER_36 = __WEBPACK_IMPORTED_MODULE_47__app_reducers_app__["a" /* reducer */];
        this._INITIAL_REDUCER_37 = __WEBPACK_IMPORTED_MODULE_17__ngrx_store_src_ng2__["b" /* _initialReducerFactory */](this.__INITIAL_REDUCER_36);
        this._Reducer_38 = __WEBPACK_IMPORTED_MODULE_17__ngrx_store_src_ng2__["c" /* _reducerFactory */](this._Dispatcher_35, this._INITIAL_REDUCER_37);
        this.__INITIAL_STATE_39 = undefined;
        this._INITIAL_STATE_40 = __WEBPACK_IMPORTED_MODULE_17__ngrx_store_src_ng2__["d" /* _initialStateFactory */](this.__INITIAL_STATE_39, this._INITIAL_REDUCER_37);
        this._State_41 = __WEBPACK_IMPORTED_MODULE_17__ngrx_store_src_ng2__["e" /* _stateFactory */](this._INITIAL_STATE_40, this._Dispatcher_35, this._Reducer_38);
        this._Store_42 = __WEBPACK_IMPORTED_MODULE_17__ngrx_store_src_ng2__["f" /* _storeFactory */](this._Dispatcher_35, this._Reducer_38, this._State_41);
        this._Actions_43 = new __WEBPACK_IMPORTED_MODULE_19__ngrx_effects_src_actions__["a" /* Actions */](this._Dispatcher_35);
        this._ParagraphParserService_44 = new __WEBPACK_IMPORTED_MODULE_20__app_services_utils_paragraph_parser_service__["a" /* ParagraphParserService */]();
        this._RestHttpConfig_45 = { baseUrl: 'http://bounds-api.herokuapp.com' };
        this._BrowserXhr_46 = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* BrowserXhr */]();
        this._ResponseOptions_47 = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* BaseResponseOptions */]();
        this._XSRFStrategy_48 = __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* ɵb */]();
        this._XHRBackend_49 = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["e" /* XHRBackend */](this._BrowserXhr_46, this._ResponseOptions_47, this._XSRFStrategy_48);
        this._RequestOptions_50 = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["f" /* BaseRequestOptions */]();
        this._Http_51 = __WEBPACK_IMPORTED_MODULE_7__angular_http__["g" /* ɵc */](this._XHRBackend_49, this._RequestOptions_50);
        this._RestHttp_52 = new __WEBPACK_IMPORTED_MODULE_21__app_services_api_base_rest_http_service__["a" /* RestHttp */](this._RestHttpConfig_45, this._Http_51);
        this._LocalStorageService_53 = new __WEBPACK_IMPORTED_MODULE_22__app_services_browser_utils_local_storage_service__["a" /* LocalStorageService */](this.parent.get(__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DOCUMENT */]));
        this._AuthTokenService_54 = new __WEBPACK_IMPORTED_MODULE_23__app_services_browser_utils_auth_token_service__["a" /* AuthTokenService */](this._LocalStorageService_53);
        this._AuthTokenApi_55 = new __WEBPACK_IMPORTED_MODULE_24__app_services_api_auth_auth_api_service__["a" /* AuthTokenApi */](this._Http_51, this._RestHttpConfig_45, this._AuthTokenService_54);
        this._AuthService_56 = new __WEBPACK_IMPORTED_MODULE_25__app_services_auth_auth_service__["a" /* AuthService */](this._AuthTokenApi_55, this._AuthTokenService_54, this._Store_42);
        this._BooksApi_57 = new __WEBPACK_IMPORTED_MODULE_26__app_services_api_specialized_books_api_service__["a" /* BooksApi */](this._ParagraphParserService_44, this._RestHttp_52, this._AuthService_56, this._AuthTokenService_54);
        this._BookEffects_58 = new __WEBPACK_IMPORTED_MODULE_27__app_effects_books__["a" /* BookEffects */](this._Actions_43, this._BooksApi_57);
        this._BookmarksApi_59 = new __WEBPACK_IMPORTED_MODULE_28__app_services_api_specialized_bookmarks_api_service__["a" /* BookmarksApi */](this._RestHttp_52, this._AuthService_56, this._AuthTokenService_54);
        this._BookPositionService_60 = new __WEBPACK_IMPORTED_MODULE_29__app_services_utils_book_position_service__["a" /* BookPositionService */]();
        this._BookPositionEffects_61 = new __WEBPACK_IMPORTED_MODULE_30__app_effects_book_position__["a" /* BookPositionEffects */](this._Actions_43, this._BookmarksApi_59, this._BookPositionService_60, this._Store_42);
        this._UserEffects_62 = new __WEBPACK_IMPORTED_MODULE_31__app_effects_user_effects__["a" /* UserEffects */](this._Actions_43, this._AuthService_56, this._Router_16);
        this._effects_63 = [
            this._BookEffects_58,
            this._BookPositionEffects_61,
            this._UserEffects_62
        ];
        this._EffectsSubscription_64 = new __WEBPACK_IMPORTED_MODULE_32__ngrx_effects_src_effects_subscription__["a" /* EffectsSubscription */](this._Store_42, this.parent.get(__WEBPACK_IMPORTED_MODULE_32__ngrx_effects_src_effects_subscription__["a" /* EffectsSubscription */], null), this._effects_63);
        this._EffectsModule_65 = new __WEBPACK_IMPORTED_MODULE_33__ngrx_effects_src_effects_module__["a" /* EffectsModule */](this._EffectsSubscription_64);
        this._AppModule_66 = new __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]();
        return this._AppModule_66;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_router__["r" /* ɵa */])) {
            return this._ɵa_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ErrorHandler */])) {
            return this._ErrorHandler_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_router__["h" /* ɵg */])) {
            return this._ɵg_2;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* NgProbeToken */])) {
            return this._NgProbeToken_3;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* APP_INITIALIZER */])) {
            return this._APP_INITIALIZER_4;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ApplicationInitStatus */])) {
            return this._ApplicationInitStatus_5;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ɵf */])) {
            return this._ɵf_6;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ApplicationRef */])) {
            return this._ApplicationRef_7;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_router__["s" /* UrlSerializer */])) {
            return this._UrlSerializer_8;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_router__["l" /* RouterOutletMap */])) {
            return this._RouterOutletMap_9;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_router__["t" /* ROUTER_CONFIGURATION */])) {
            return this._ROUTER_CONFIGURATION_10;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* LocationStrategy */])) {
            return this._LocationStrategy_11;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* Location */])) {
            return this._Location_12;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Compiler */])) {
            return this._Compiler_13;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* NgModuleFactoryLoader */])) {
            return this._NgModuleFactoryLoader_14;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_router__["u" /* ROUTES */])) {
            return this._ROUTES_15;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* Router */])) {
            return this._Router_16;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_router__["q" /* RouterModule */])) {
            return this._RouterModule_17;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__app_app_routing_module__["a" /* AppRoutingModule */])) {
            return this._AppRoutingModule_18;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_common__["e" /* CommonModule */])) {
            return this._CommonModule_19;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ApplicationModule */])) {
            return this._ApplicationModule_20;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["p" /* BrowserModule */])) {
            return this._BrowserModule_21;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* ɵba */])) {
            return this._ɵba_22;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */])) {
            return this._FormsModule_23;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */])) {
            return this._HttpModule_24;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_8__app_components_components_module__["a" /* ComponentsModule */])) {
            return this._ComponentsModule_25;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_9__app_containers_containers_module__["a" /* ContainersModule */])) {
            return this._ContainersModule_26;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__app_services_browser_utils_browser_utils_module__["a" /* BrowserUtilsModule */])) {
            return this._BrowserUtilsModule_27;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_11__app_services_api_auth_auth_api_module__["a" /* AuthApiModule */])) {
            return this._AuthApiModule_28;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_12__app_services_auth_auth_module__["a" /* AuthModule */])) {
            return this._AuthModule_29;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_13__app_services_api_specialized_specialized_api_module__["a" /* SpecializedApiModule */])) {
            return this._SpecializedApiModule_30;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_14__app_services_api_api_module__["a" /* ApiModule */])) {
            return this._ApiModule_31;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_15__app_services_utils_utils_services_module__["a" /* UtilsServicesModule */])) {
            return this._UtilsServicesModule_32;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_16__app_services_services_module__["a" /* ServicesModule */])) {
            return this._ServicesModule_33;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_17__ngrx_store_src_ng2__["a" /* StoreModule */])) {
            return this._StoreModule_34;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_18__ngrx_store_src_dispatcher__["a" /* Dispatcher */])) {
            return this._Dispatcher_35;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_17__ngrx_store_src_ng2__["g" /* _INITIAL_REDUCER */])) {
            return this.__INITIAL_REDUCER_36;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_17__ngrx_store_src_ng2__["h" /* INITIAL_REDUCER */])) {
            return this._INITIAL_REDUCER_37;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_48__ngrx_store_src_reducer__["a" /* Reducer */])) {
            return this._Reducer_38;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_17__ngrx_store_src_ng2__["i" /* _INITIAL_STATE */])) {
            return this.__INITIAL_STATE_39;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_17__ngrx_store_src_ng2__["j" /* INITIAL_STATE */])) {
            return this._INITIAL_STATE_40;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_49__ngrx_store_src_state__["a" /* State */])) {
            return this._State_41;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_50__ngrx_store_src_store__["a" /* Store */])) {
            return this._Store_42;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_19__ngrx_effects_src_actions__["a" /* Actions */])) {
            return this._Actions_43;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_20__app_services_utils_paragraph_parser_service__["a" /* ParagraphParserService */])) {
            return this._ParagraphParserService_44;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_51__app_services_api_base_rest_http_config__["a" /* RestHttpConfig */])) {
            return this._RestHttpConfig_45;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* BrowserXhr */])) {
            return this._BrowserXhr_46;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_7__angular_http__["h" /* ResponseOptions */])) {
            return this._ResponseOptions_47;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_7__angular_http__["i" /* XSRFStrategy */])) {
            return this._XSRFStrategy_48;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_7__angular_http__["e" /* XHRBackend */])) {
            return this._XHRBackend_49;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_7__angular_http__["j" /* RequestOptions */])) {
            return this._RequestOptions_50;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_7__angular_http__["k" /* Http */])) {
            return this._Http_51;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_21__app_services_api_base_rest_http_service__["a" /* RestHttp */])) {
            return this._RestHttp_52;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_22__app_services_browser_utils_local_storage_service__["a" /* LocalStorageService */])) {
            return this._LocalStorageService_53;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_23__app_services_browser_utils_auth_token_service__["a" /* AuthTokenService */])) {
            return this._AuthTokenService_54;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_24__app_services_api_auth_auth_api_service__["a" /* AuthTokenApi */])) {
            return this._AuthTokenApi_55;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_25__app_services_auth_auth_service__["a" /* AuthService */])) {
            return this._AuthService_56;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_26__app_services_api_specialized_books_api_service__["a" /* BooksApi */])) {
            return this._BooksApi_57;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_27__app_effects_books__["a" /* BookEffects */])) {
            return this._BookEffects_58;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_28__app_services_api_specialized_bookmarks_api_service__["a" /* BookmarksApi */])) {
            return this._BookmarksApi_59;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_29__app_services_utils_book_position_service__["a" /* BookPositionService */])) {
            return this._BookPositionService_60;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_30__app_effects_book_position__["a" /* BookPositionEffects */])) {
            return this._BookPositionEffects_61;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_31__app_effects_user_effects__["a" /* UserEffects */])) {
            return this._UserEffects_62;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_32__ngrx_effects_src_effects_subscription__["b" /* effects */])) {
            return this._effects_63;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_32__ngrx_effects_src_effects_subscription__["a" /* EffectsSubscription */])) {
            return this._EffectsSubscription_64;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_33__ngrx_effects_src_effects_module__["a" /* EffectsModule */])) {
            return this._EffectsModule_65;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */])) {
            return this._AppModule_66;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_router__["v" /* ActivatedRoute */])) {
            return this._ActivatedRoute_67;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NoPreloading */])) {
            return this._NoPreloading_68;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_router__["w" /* PreloadingStrategy */])) {
            return this._PreloadingStrategy_69;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterPreloader */])) {
            return this._RouterPreloader_70;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* PreloadAllModules */])) {
            return this._PreloadAllModules_71;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_router__["x" /* ROUTER_INITIALIZER */])) {
            return this._ROUTER_INITIALIZER_72;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* APP_BOOTSTRAP_LISTENER */])) {
            return this._APP_BOOTSTRAP_LISTENER_73;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* LOCALE_ID */])) {
            return this._LOCALE_ID_74;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* NgLocalization */])) {
            return this._NgLocalization_75;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* APP_ID */])) {
            return this._APP_ID_76;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* IterableDiffers */])) {
            return this._IterableDiffers_77;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* KeyValueDiffers */])) {
            return this._KeyValueDiffers_78;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["q" /* DomSanitizer */])) {
            return this._DomSanitizer_79;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Sanitizer */])) {
            return this._Sanitizer_80;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["r" /* HAMMER_GESTURE_CONFIG */])) {
            return this._HAMMER_GESTURE_CONFIG_81;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["s" /* EVENT_MANAGER_PLUGINS */])) {
            return this._EVENT_MANAGER_PLUGINS_82;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["h" /* EventManager */])) {
            return this._EventManager_83;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["i" /* ɵDomSharedStylesHost */])) {
            return this._ɵDomSharedStylesHost_84;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["j" /* ɵDomRendererFactory2 */])) {
            return this._ɵDomRendererFactory2_85;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* RendererFactory2 */])) {
            return this._RendererFactory2_86;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["t" /* ɵSharedStylesHost */])) {
            return this._ɵSharedStylesHost_87;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Testability */])) {
            return this._Testability_88;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["k" /* Meta */])) {
            return this._Meta_89;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["l" /* Title */])) {
            return this._Title_90;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ɵi */])) {
            return this._ɵi_91;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_34__app_services_auth_auth_guard__["a" /* AuthGuard */])) {
            return this._AuthGuard_92;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_35__app_services_utils_infinite_scroll_service__["a" /* InfiniteScrollService */])) {
            return this._InfiniteScrollService_93;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_36__app_services_utils_interval_service__["a" /* IntervalService */])) {
            return this._IntervalService_94;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ɵf_6.ngOnDestroy();
        this._EffectsSubscription_64.ngOnDestroy();
        (this.__RouterPreloader_70 && this._RouterPreloader_70.ngOnDestroy());
        (this.__ɵDomSharedStylesHost_84 && this._ɵDomSharedStylesHost_84.ngOnDestroy());
    };
    return AppModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ɵNgModuleInjector */]));
var AppModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* NgModuleFactory */](AppModuleInjector, __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2pvcmRhbi9nRHJpdmUvSk1ILVByb2plY3RzL3Jzdi1yZWFkZXItZnJvbnRlbmQvc3JjL2FwcC9hcHAubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2pvcmRhbi9nRHJpdmUvSk1ILVByb2plY3RzL3Jzdi1yZWFkZXItZnJvbnRlbmQvc3JjL2FwcC9hcHAubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
//# sourceMappingURL=app.module.ngfactory.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_components_paragraph_paragraph_component__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RenderType_ParagraphComponent; });
/* harmony export (immutable) */ __webpack_exports__["a"] = View_ParagraphComponent_0;
/* unused harmony export ParagraphComponentNgFactory */
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */



var styles_ParagraphComponent = [];
var RenderType_ParagraphComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* ɵcrt */]({
    encapsulation: 2,
    styles: styles_ParagraphComponent,
    data: {}
});
function View_ParagraphComponent_1(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 1, 'p', [[
                'class',
                'full-text__paragraph__text'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, [
            '\n		',
            '\n	'
        ]))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.text;
        ck(v, 1, 0, currVal_0);
    });
}
function View_ParagraphComponent_3(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 3, 'span', [], null, null, null, null, null)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](139264, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_common__["o" /* NgClass */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* IterableDiffers */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* KeyValueDiffers */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer */]
        ], { ngClass: [
                0,
                'ngClass'
            ]
        }, null),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵpod */](['full-text__current-word']),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, [
            '\n			',
            '\n		'
        ]))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = ck(v, 2, 0, (v.context.index === co.bookPosition.wordIdx));
        ck(v, 1, 0, currVal_0);
    }, function (ck, v) {
        var currVal_1 = (v.context.$implicit + ' ');
        ck(v, 3, 0, currVal_1);
    });
}
function View_ParagraphComponent_2(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 4, 'p', [[
                'class',
                'full-text__paragraph__text'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n		'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵand */](8388608, null, null, 1, null, View_ParagraphComponent_3)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](401408, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_common__["l" /* NgForOf */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* TemplateRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* IterableDiffers */]
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.paragraph.text;
        ck(v, 4, 0, currVal_0);
    }, null);
}
function View_ParagraphComponent_0(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](2, [
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵpid */](0, __WEBPACK_IMPORTED_MODULE_1__angular_common__["p" /* DecimalPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* LOCALE_ID */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](201326592, 1, { innerElementRef: 0 }),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, [
            [
                1,
                0
            ],
            [
                'innerElementRef',
                1
            ]
        ], null, 10, 'div', [[
                'class',
                'full-text__paragraph lh-copy'
            ]
        ], null, null, null, null, null)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](139264, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_common__["o" /* NgClass */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* IterableDiffers */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* KeyValueDiffers */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer */]
        ], {
            klass: [
                0,
                'klass'
            ],
            ngClass: [
                1,
                'ngClass'
            ]
        }, null),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵpod */](['lh-copy']),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 2, 'span', [[
                'class',
                'full-text__paragraph__meta light-silver f7 code'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, [
            '\n		',
            ' / ',
            '\n	'
        ])),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵppd */](1),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵand */](8388608, null, null, 1, null, View_ParagraphComponent_1)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](8192, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_common__["m" /* NgIf */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* TemplateRef */]
        ], {
            ngIf: [
                0,
                'ngIf'
            ],
            ngIfElse: [
                1,
                'ngIfElse'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵand */](0, [[
                'elseBlock',
                2
            ]
        ], null, 0, null, View_ParagraphComponent_2)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = 'full-text__paragraph lh-copy';
        var currVal_1 = ck(v, 4, 0, true);
        ck(v, 3, 0, currVal_0, currVal_1);
        var currVal_4 = !co.focused;
        var currVal_5 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 14);
        ck(v, 11, 0, currVal_4, currVal_5);
    }, function (ck, v) {
        var co = v.component;
        var currVal_2 = co.paragraph.id;
        var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵunv */](v, 7, 1, ck(v, 8, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 0), (co.paragraph.firstIndex + 1)));
        ck(v, 7, 0, currVal_2, currVal_3);
    });
}
function View_ParagraphComponent_Host_0(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 1, 'app-paragraph', [], null, null, null, View_ParagraphComponent_0, RenderType_ParagraphComponent)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](24576, null, 0, __WEBPACK_IMPORTED_MODULE_2__app_components_paragraph_paragraph_component__["a" /* ParagraphComponent */], [], null, null)
    ], null, null);
}
var ParagraphComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* ɵccf */]('app-paragraph', __WEBPACK_IMPORTED_MODULE_2__app_components_paragraph_paragraph_component__["a" /* ParagraphComponent */], View_ParagraphComponent_Host_0, {
    paragraph: 'paragraph',
    bookPosition: 'bookPosition'
}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2pvcmRhbi9nRHJpdmUvSk1ILVByb2plY3RzL3Jzdi1yZWFkZXItZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL3BhcmFncmFwaC9wYXJhZ3JhcGguY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2pvcmRhbi9nRHJpdmUvSk1ILVByb2plY3RzL3Jzdi1yZWFkZXItZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL3BhcmFncmFwaC9wYXJhZ3JhcGguY29tcG9uZW50LnRzIiwibmc6Ly8vVXNlcnMvam9yZGFuL2dEcml2ZS9KTUgtUHJvamVjdHMvcnN2LXJlYWRlci1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvcGFyYWdyYXBoL3BhcmFncmFwaC50ZW1wbGF0ZS5odG1sIiwibmc6Ly8vVXNlcnMvam9yZGFuL2dEcml2ZS9KTUgtUHJvamVjdHMvcnN2LXJlYWRlci1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvcGFyYWdyYXBoL3BhcmFncmFwaC5jb21wb25lbnQudHMuUGFyYWdyYXBoQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cImZ1bGwtdGV4dF9fcGFyYWdyYXBoIGxoLWNvcHlcIiBbbmdDbGFzc109XCJ7J2xoLWNvcHknOiB0cnVlfVwiICNpbm5lckVsZW1lbnRSZWY+XG5cdDxzcGFuIGNsYXNzPVwiZnVsbC10ZXh0X19wYXJhZ3JhcGhfX21ldGEgbGlnaHQtc2lsdmVyIGY3IGNvZGVcIj5cblx0XHR7eyBwYXJhZ3JhcGguaWQgfX0gLyB7eyBwYXJhZ3JhcGguZmlyc3RJbmRleCArIDEgfCBudW1iZXIgfX1cblx0PC9zcGFuPlxuXHQ8cCAqbmdJZj1cIiFmb2N1c2VkOyBlbHNlIGVsc2VCbG9jaztcIiBjbGFzcz1cImZ1bGwtdGV4dF9fcGFyYWdyYXBoX190ZXh0XCI+XG5cdFx0e3sgdGV4dCB9fVxuXHQ8L3A+XG48L2Rpdj5cbjxuZy10ZW1wbGF0ZSAjZWxzZUJsb2NrPlxuXHQ8cCBjbGFzcz1cImZ1bGwtdGV4dF9fcGFyYWdyYXBoX190ZXh0XCI+XG5cdFx0PHNwYW5cblx0XHRcdCpuZ0Zvcj1cImxldCB3b3JkIG9mIHBhcmFncmFwaC50ZXh0OyBsZXQgaSA9IGluZGV4XCJcblx0XHRcdFtuZ0NsYXNzXT1cInsnZnVsbC10ZXh0X19jdXJyZW50LXdvcmQnOiBpID09PSBib29rUG9zaXRpb24ud29yZElkeH1cIj5cblx0XHRcdHt7IHdvcmQgKyBcIiBcIiB9fVxuXHRcdDwvc3Bhbj5cblx0PC9wPlxuPC9uZy10ZW1wbGF0ZT5cbiIsIjxhcHAtcGFyYWdyYXBoPjwvYXBwLXBhcmFncmFwaD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0lDO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBd0U7TUFBQTtNQUFBO0lBQUE7SUFBQTs7OztJQUFBO0lBQUE7Ozs7O0lBTXZFO2dCQUFBOzs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFFQztJQUFvRTtNQUFBO01BQUE7SUFBQTtJQUFBOzs7O0lBQXBFO0lBRkQsU0FFQyxTQUZEOztJQUVxRTtJQUFBOzs7OztJQUovQztNQUN2QjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXNDO0lBQ3JDO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBSU87SUFDSjs7OztJQUpGO0lBREQsU0FDQyxTQUREOzs7Ozs7O0lBVkY7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7Z0JBQTBDO0lBQStDO01BQ3hGO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBOEQ7TUFBQTtNQUFBO01BQUE7SUFBQTtJQUFBO2dCQUFBO0lBRXZEO0lBQ1A7Z0JBQUE7OztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBRUk7SUFDQztNQUNOO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFRYzs7OztJQWhCVDtJQUFxQztJQUExQyxTQUFLLFVBQXFDLFNBQTFDO0lBSUk7SUFBQTtJQUFILFVBQUcsbUJBQUg7OztJQUg4RDtJQUFBO0lBQUE7Ozs7O0lDRC9EO2dCQUFBOzs7Ozs7OzsifQ==
//# sourceMappingURL=paragraph.component.ngfactory.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_components_rsv_controls_rsv_controls_component__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RenderType_RsvControlsComponent; });
/* harmony export (immutable) */ __webpack_exports__["a"] = View_RsvControlsComponent_0;
/* unused harmony export RsvControlsComponentNgFactory */
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */



var styles_RsvControlsComponent = [];
var RenderType_RsvControlsComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* ɵcrt */]({
    encapsulation: 2,
    styles: styles_RsvControlsComponent,
    data: {}
});
function View_RsvControlsComponent_1(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 1, 'span', [[
                'class',
                'b-ns'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, [
            '\n			',
            '\n		'
        ]))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = ((co.book != null) ? co.book.title : 'no book');
        ck(v, 1, 0, currVal_0);
    });
}
function View_RsvControlsComponent_2(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [(l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 0, 'div', [[
                'class',
                'icon-button f4 f3-ns pl1 icon-cancel'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.toggleRsv.emit() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null))], null, null);
}
function View_RsvControlsComponent_3(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [(l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 0, 'div', [[
                'class',
                'icon-button f2 f1-ns pl1 icon-play-circled2'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.togglePlay.emit() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null))], null, null);
}
function View_RsvControlsComponent_4(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [(l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 0, 'div', [[
                'class',
                'icon-button f2 f1-ns pl1 icon-pause-circle-o'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.togglePlay.emit() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null))], null, null);
}
function View_RsvControlsComponent_0(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](201326592, 1, { wpmInput: 0 }),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 27, 'div', [[
                'class',
                'w-100 flex items-center justify-between'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 4, 'div', [[
                'class',
                'flex items-center'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n		'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵand */](8388608, null, null, 1, null, View_RsvControlsComponent_1)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](8192, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_common__["m" /* NgIf */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* TemplateRef */]
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 18, 'div', [[
                'class',
                'flex items-center'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n		'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n		'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵand */](8388608, null, null, 1, null, View_RsvControlsComponent_2)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](8192, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_common__["m" /* NgIf */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* TemplateRef */]
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n\n		'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n		'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 0, 'div', [[
                'class',
                'icon-button f4 f3-ns pl1 icon-fast-bw'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.forceStep.emit((0 - 20)) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n\n		'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n		'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵand */](8388608, null, null, 1, null, View_RsvControlsComponent_3)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](8192, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_common__["m" /* NgIf */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* TemplateRef */]
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n		'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵand */](8388608, null, null, 1, null, View_RsvControlsComponent_4)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](8192, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_common__["m" /* NgIf */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* TemplateRef */]
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n\n		'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n		'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 0, 'div', [[
                'class',
                'icon-button f4 f3-ns pl1 icon-fast-fw'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.forceStep.emit(20) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = (co.book != null);
        ck(v, 6, 0, currVal_0);
        var currVal_1 = co.rsvEnabled;
        ck(v, 13, 0, currVal_1);
        var currVal_2 = !co.play;
        ck(v, 20, 0, currVal_2);
        var currVal_3 = co.play;
        ck(v, 23, 0, currVal_3);
    }, null);
}
function View_RsvControlsComponent_Host_0(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 1, 'app-rsv-controls', [], null, null, null, View_RsvControlsComponent_0, RenderType_RsvControlsComponent)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](2121728, null, 0, __WEBPACK_IMPORTED_MODULE_2__app_components_rsv_controls_rsv_controls_component__["a" /* RsvControlsComponent */], [], null, null)
    ], null, null);
}
var RsvControlsComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* ɵccf */]('app-rsv-controls', __WEBPACK_IMPORTED_MODULE_2__app_components_rsv_controls_rsv_controls_component__["a" /* RsvControlsComponent */], View_RsvControlsComponent_Host_0, {
    book: 'book',
    play: 'play',
    rsvEnabled: 'rsvEnabled',
    wpm: 'wpm'
}, {
    toggleRsv: 'toggleRsv',
    togglePlay: 'togglePlay',
    forceStep: 'forceStep',
    wpmChange: 'wpmChange'
}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2pvcmRhbi9nRHJpdmUvSk1ILVByb2plY3RzL3Jzdi1yZWFkZXItZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL3Jzdi1jb250cm9scy9yc3YtY29udHJvbHMuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2pvcmRhbi9nRHJpdmUvSk1ILVByb2plY3RzL3Jzdi1yZWFkZXItZnJvbnRlbmQvc3JjL2FwcC9jb21wb25lbnRzL3Jzdi1jb250cm9scy9yc3YtY29udHJvbHMuY29tcG9uZW50LnRzIiwibmc6Ly8vVXNlcnMvam9yZGFuL2dEcml2ZS9KTUgtUHJvamVjdHMvcnN2LXJlYWRlci1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvcnN2LWNvbnRyb2xzL3Jzdi1jb250cm9scy50ZW1wbGF0ZS5odG1sIiwibmc6Ly8vVXNlcnMvam9yZGFuL2dEcml2ZS9KTUgtUHJvamVjdHMvcnN2LXJlYWRlci1mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvcnN2LWNvbnRyb2xzL3Jzdi1jb250cm9scy5jb21wb25lbnQudHMuUnN2Q29udHJvbHNDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGNsYXNzPVwidy0xMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG5cdDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuXHRcdDxzcGFuICpuZ0lmPVwiYm9vayAhPSBudWxsXCIgY2xhc3M9XCJiLW5zXCI+XG5cdFx0XHR7eyBib29rICE9IG51bGwgPyBib29rLnRpdGxlIDogXCJubyBib29rXCIgfX1cblx0XHQ8L3NwYW4+XG5cdDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cblx0XHQ8IS0tIHRvZ2dsZSByc3YgbW9kZSAtLT5cblx0XHQ8ZGl2ICpuZ0lmPVwicnN2RW5hYmxlZFwiIChjbGljayk9XCJ0b2dnbGVSc3YuZW1pdCgpXCIgY2xhc3M9XCJpY29uLWJ1dHRvbiBmNCBmMy1ucyBwbDEgaWNvbi1jYW5jZWxcIj48L2Rpdj5cblxuXHRcdDwhLS0ganVtcCBiYWNrIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJpY29uLWJ1dHRvbiBmNCBmMy1ucyBwbDEgaWNvbi1mYXN0LWJ3XCIgKGNsaWNrKT1cImZvcmNlU3RlcC5lbWl0KC0yMClcIj48L2Rpdj5cblxuXHRcdDwhLS0gcGxheSAvIHBhdXNlIC0tPlxuXHRcdDxkaXYgKm5nSWY9XCIhcGxheVwiIChjbGljayk9XCJ0b2dnbGVQbGF5LmVtaXQoKVwiIGNsYXNzPVwiaWNvbi1idXR0b24gZjIgZjEtbnMgcGwxIGljb24tcGxheS1jaXJjbGVkMlwiPjwvZGl2PlxuXHRcdDxkaXYgKm5nSWY9XCJwbGF5XCIgKGNsaWNrKT1cInRvZ2dsZVBsYXkuZW1pdCgpXCIgY2xhc3M9XCJpY29uLWJ1dHRvbiBmMiBmMS1ucyBwbDEgaWNvbi1wYXVzZS1jaXJjbGUtb1wiPjwvZGl2PlxuXG5cdFx0PCEtLSBqdW1wIGZvcndhcmQgLS0+XG5cdFx0PGRpdiBjbGFzcz1cImljb24tYnV0dG9uIGY0IGYzLW5zIHBsMSBpY29uLWZhc3QtZndcIiAoY2xpY2spPVwiZm9yY2VTdGVwLmVtaXQoMjApXCI+PC9kaXY+XG5cdDwvZGl2PlxuPC9kaXY+XG4iLCI8YXBwLXJzdi1jb250cm9scz48L2FwcC1yc3YtY29udHJvbHM+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNFRTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdDO01BQUE7TUFBQTtJQUFBO0lBQUE7Ozs7SUFBQTtJQUFBOzs7OzZCQU14QztRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQXdCO1FBQUE7UUFBQTtNQUFBO01BQXhCO0VBQUE7Ozs2QkFNQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQW1CO1FBQUE7UUFBQTtNQUFBO01BQW5CO0VBQUE7Ozs2QkFDQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQWtCO1FBQUE7UUFBQTtNQUFBO01BQWxCO0VBQUE7Ozs7O01BZkY7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFxRDtNQUNwRDtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQStCO0lBQzlCO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFFTztJQUNGO01BQ047UUFBQTtRQUFBO01BQUE7SUFBQTtJQUErQjtJQUNOO0lBQ3hCO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBc0c7SUFFcEY7TUFDbEI7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFtRDtRQUFBO1FBQUE7TUFBQTtNQUFuRDtJQUFBO0lBQXVGO0lBRWxFO0lBQ3JCO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBeUc7SUFDekc7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF5RztJQUVwRjtNQUNyQjtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQW1EO1FBQUE7UUFBQTtNQUFBO01BQW5EO0lBQUE7SUFBc0Y7SUFDakY7SUFDRDs7OztJQWxCRTtJQUFOLFNBQU0sU0FBTjtJQU1LO0lBQUwsVUFBSyxTQUFMO0lBTUs7SUFBTCxVQUFLLFNBQUw7SUFDSztJQUFMLFVBQUssU0FBTDs7Ozs7SUNmRjtnQkFBQTs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
//# sourceMappingURL=rsv-controls.component.ngfactory.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rsv_view_rsv_view_component_ngfactory__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_containers_rsv_view_rsv_view_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_utils_interval_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store_src_store__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_paragraph_paragraph_component_ngfactory__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_components_paragraph_paragraph_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__full_text_view_full_text_view_component_ngfactory__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_containers_full_text_view_full_text_view_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_services_utils_book_position_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_services_utils_infinite_scroll_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_containers_book_detail_page_book_detail_page_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_rsv_controls_rsv_controls_component_ngfactory__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_components_rsv_controls_rsv_controls_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_services_api_specialized_books_api_service__ = __webpack_require__(36);
/* unused harmony export RenderType_BookDetailPageComponent */
/* unused harmony export View_BookDetailPageComponent_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailPageComponentNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */


















var styles_BookDetailPageComponent = [];
var RenderType_BookDetailPageComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* ɵcrt */]({
    encapsulation: 2,
    styles: styles_BookDetailPageComponent,
    data: {}
});
function View_BookDetailPageComponent_1(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 2, 'app-rsv-view', [[
                'class',
                'rsv-view'
            ]
        ], null, null, null, __WEBPACK_IMPORTED_MODULE_1__rsv_view_rsv_view_component_ngfactory__["a" /* View_RsvViewComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__rsv_view_rsv_view_component_ngfactory__["b" /* RenderType_RsvViewComponent */])),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](122880, null, 0, __WEBPACK_IMPORTED_MODULE_2__app_containers_rsv_view_rsv_view_component__["a" /* RsvViewComponent */], [
            __WEBPACK_IMPORTED_MODULE_3__app_services_utils_interval_service__["a" /* IntervalService */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store_src_store__["a" /* Store */]
        ], {
            word: [
                0,
                'word'
            ],
            book: [
                1,
                'book'
            ]
        }, null),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵpid */](65536, __WEBPACK_IMPORTED_MODULE_5__angular_common__["n" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ChangeDetectorRef */]])
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.currentPhrase;
        var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵunv */](v, 1, 1, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 2).transform(co.book$));
        ck(v, 1, 0, currVal_0, currVal_1);
    }, null);
}
function View_BookDetailPageComponent_3(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 2, 'app-paragraph', [], null, null, null, __WEBPACK_IMPORTED_MODULE_6__components_paragraph_paragraph_component_ngfactory__["a" /* View_ParagraphComponent_0 */], __WEBPACK_IMPORTED_MODULE_6__components_paragraph_paragraph_component_ngfactory__["b" /* RenderType_ParagraphComponent */])),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](24576, [[
                1,
                4
            ]
        ], 0, __WEBPACK_IMPORTED_MODULE_7__app_components_paragraph_paragraph_component__["a" /* ParagraphComponent */], [], {
            paragraph: [
                0,
                'paragraph'
            ],
            bookPosition: [
                1,
                'bookPosition'
            ]
        }, null),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵpid */](65536, __WEBPACK_IMPORTED_MODULE_5__angular_common__["n" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ChangeDetectorRef */]])
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = v.context.$implicit;
        var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵunv */](v, 1, 1, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 2).transform(co.bookPosition$));
        ck(v, 1, 0, currVal_0, currVal_1);
    }, null);
}
function View_BookDetailPageComponent_2(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 9, 'app-full-text-view', [[
                'class',
                'full-text-wrapper relative flex flex-column items-center overflow-container momentum-scroll ph3 mt5 mb5-ns mt0-ns'
            ]
        ], null, [[
                null,
                'scroll'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('scroll' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 2).onScroll($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_8__full_text_view_full_text_view_component_ngfactory__["a" /* View_FullTextViewComponent_0 */], __WEBPACK_IMPORTED_MODULE_8__full_text_view_full_text_view_component_ngfactory__["b" /* RenderType_FullTextViewComponent */])),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](2121728, null, 1, __WEBPACK_IMPORTED_MODULE_9__app_containers_full_text_view_full_text_view_component__["a" /* FullTextViewComponent */], [
            __WEBPACK_IMPORTED_MODULE_10__app_services_utils_book_position_service__["a" /* BookPositionService */],
            __WEBPACK_IMPORTED_MODULE_11__app_services_utils_infinite_scroll_service__["a" /* InfiniteScrollService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["c" /* DOCUMENT */]
        ], {
            book: [
                0,
                'book'
            ],
            bookPosition: [
                1,
                'bookPosition'
            ]
        }, null),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](301989888, 1, { paragraphs: 1 }),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵpid */](65536, __WEBPACK_IMPORTED_MODULE_5__angular_common__["n" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ChangeDetectorRef */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵpid */](65536, __WEBPACK_IMPORTED_MODULE_5__angular_common__["n" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ChangeDetectorRef */]]),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n		'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵand */](8388608, null, null, 2, null, View_BookDetailPageComponent_3)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](401408, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["l" /* NgForOf */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* TemplateRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* IterableDiffers */]
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵpid */](65536, __WEBPACK_IMPORTED_MODULE_5__angular_common__["n" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ChangeDetectorRef */]]),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵunv */](v, 2, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 4).transform(co.book$));
        var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵunv */](v, 2, 1, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 5).transform(co.bookPosition$));
        ck(v, 2, 0, currVal_0, currVal_1);
        var tmp_2_0 = null;
        var currVal_2 = (((tmp_2_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵunv */](v, 8, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 9).transform(co.book$))) == null) ? null : tmp_2_0.content);
        ck(v, 8, 0, currVal_2);
    }, null);
}
function View_BookDetailPageComponent_0(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 14, 'div', [[
                'class',
                'flex flex-column flex-column-reverse-ns vh-100 overflow-hidden'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 5, 'app-rsv-controls', [[
                'class',
                'header h3 shadow-1 fixed left-0 right-0 bottom-0-ns'
            ]
        ], null, [
            [
                null,
                'forceStep'
            ],
            [
                null,
                'toggleRsv'
            ],
            [
                null,
                'togglePlay'
            ],
            [
                null,
                'wpmChange'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('forceStep' === en)) {
                var pd_0 = (co.forceStep($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('toggleRsv' === en)) {
                var pd_1 = (co.toggleRsv() !== false);
                ad = (pd_1 && ad);
            }
            if (('togglePlay' === en)) {
                var pd_2 = (co.togglePlay() !== false);
                ad = (pd_2 && ad);
            }
            if (('wpmChange' === en)) {
                var pd_3 = (co.setWpm($event) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_14__components_rsv_controls_rsv_controls_component_ngfactory__["a" /* View_RsvControlsComponent_0 */], __WEBPACK_IMPORTED_MODULE_14__components_rsv_controls_rsv_controls_component_ngfactory__["b" /* RenderType_RsvControlsComponent */])),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](2121728, null, 0, __WEBPACK_IMPORTED_MODULE_15__app_components_rsv_controls_rsv_controls_component__["a" /* RsvControlsComponent */], [], {
            book: [
                0,
                'book'
            ],
            play: [
                1,
                'play'
            ],
            rsvEnabled: [
                2,
                'rsvEnabled'
            ],
            wpm: [
                3,
                'wpm'
            ]
        }, {
            toggleRsv: 'toggleRsv',
            togglePlay: 'togglePlay',
            forceStep: 'forceStep',
            wpmChange: 'wpmChange'
        }),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵpid */](65536, __WEBPACK_IMPORTED_MODULE_5__angular_common__["n" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ChangeDetectorRef */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵpid */](65536, __WEBPACK_IMPORTED_MODULE_5__angular_common__["n" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ChangeDetectorRef */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵpid */](65536, __WEBPACK_IMPORTED_MODULE_5__angular_common__["n" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ChangeDetectorRef */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵpid */](65536, __WEBPACK_IMPORTED_MODULE_5__angular_common__["n" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ChangeDetectorRef */]]),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵand */](8388608, null, null, 2, null, View_BookDetailPageComponent_1)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](8192, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["m" /* NgIf */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* TemplateRef */]
        ], {
            ngIf: [
                0,
                'ngIf'
            ],
            ngIfElse: [
                1,
                'ngIfElse'
            ]
        }, null),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵpid */](65536, __WEBPACK_IMPORTED_MODULE_5__angular_common__["n" /* AsyncPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ChangeDetectorRef */]]),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵand */](0, [[
                'elseBlock',
                2
            ]
        ], null, 0, null, View_BookDetailPageComponent_2)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵunv */](v, 4, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 5).transform(co.book$));
        var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵunv */](v, 4, 1, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 6).transform(co.play$));
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵunv */](v, 4, 2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 7).transform(co.rsvEnabled$));
        var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵunv */](v, 4, 3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 8).transform(co.wpm$));
        ck(v, 4, 0, currVal_0, currVal_1, currVal_2, currVal_3);
        var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵunv */](v, 12, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 13).transform(co.rsvEnabled$));
        var currVal_5 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 17);
        ck(v, 12, 0, currVal_4, currVal_5);
    }, null);
}
function View_BookDetailPageComponent_Host_0(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 1, 'app-book-detail', [], null, null, null, View_BookDetailPageComponent_0, RenderType_BookDetailPageComponent)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](122880, null, 0, __WEBPACK_IMPORTED_MODULE_13__app_containers_book_detail_page_book_detail_page_component__["a" /* BookDetailPageComponent */], [
            __WEBPACK_IMPORTED_MODULE_16__angular_router__["v" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_17__app_services_api_specialized_books_api_service__["a" /* BooksApi */],
            __WEBPACK_IMPORTED_MODULE_10__app_services_utils_book_position_service__["a" /* BookPositionService */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store_src_store__["a" /* Store */]
        ], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
var BookDetailPageComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* ɵccf */]('app-book-detail', __WEBPACK_IMPORTED_MODULE_13__app_containers_book_detail_page_book_detail_page_component__["a" /* BookDetailPageComponent */], View_BookDetailPageComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2pvcmRhbi9nRHJpdmUvSk1ILVByb2plY3RzL3Jzdi1yZWFkZXItZnJvbnRlbmQvc3JjL2FwcC9jb250YWluZXJzL2Jvb2stZGV0YWlsLXBhZ2UvYm9vay1kZXRhaWwtcGFnZS5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvam9yZGFuL2dEcml2ZS9KTUgtUHJvamVjdHMvcnN2LXJlYWRlci1mcm9udGVuZC9zcmMvYXBwL2NvbnRhaW5lcnMvYm9vay1kZXRhaWwtcGFnZS9ib29rLWRldGFpbC1wYWdlLmNvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL2pvcmRhbi9nRHJpdmUvSk1ILVByb2plY3RzL3Jzdi1yZWFkZXItZnJvbnRlbmQvc3JjL2FwcC9jb250YWluZXJzL2Jvb2stZGV0YWlsLXBhZ2UvYm9vay1kZXRhaWwtcGFnZS50ZW1wbGF0ZS5odG1sIiwibmc6Ly8vVXNlcnMvam9yZGFuL2dEcml2ZS9KTUgtUHJvamVjdHMvcnN2LXJlYWRlci1mcm9udGVuZC9zcmMvYXBwL2NvbnRhaW5lcnMvYm9vay1kZXRhaWwtcGFnZS9ib29rLWRldGFpbC1wYWdlLmNvbXBvbmVudC50cy5Cb29rRGV0YWlsUGFnZUNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sdW1uIGZsZXgtY29sdW1uLXJldmVyc2UtbnMgdmgtMTAwIG92ZXJmbG93LWhpZGRlblwiPlxuXHQ8IS0tIGNvbnRyb2wgYmFyIC0tPlxuXHQ8YXBwLXJzdi1jb250cm9sc1xuXHRcdGNsYXNzPVwiaGVhZGVyIGgzIHNoYWRvdy0xIGZpeGVkIGxlZnQtMCByaWdodC0wIGJvdHRvbS0wLW5zXCJcblx0XHRbYm9va109XCIgYm9vayQgfCBhc3luYyBcIlxuXHRcdFtwbGF5XT1cIihwbGF5JCB8IGFzeW5jKVwiXG5cdFx0W3JzdkVuYWJsZWRdPVwiKHJzdkVuYWJsZWQkIHwgYXN5bmMpXCJcblx0XHRbd3BtXT1cIih3cG0kIHwgYXN5bmMpXCJcblx0XHQoZm9yY2VTdGVwKT1cImZvcmNlU3RlcCgkZXZlbnQpXCJcblx0XHQodG9nZ2xlUnN2KT1cInRvZ2dsZVJzdigpXCJcblx0XHQodG9nZ2xlUGxheSk9XCJ0b2dnbGVQbGF5KClcIlxuXHRcdCh3cG1DaGFuZ2UpPVwic2V0V3BtKCRldmVudClcIj48L2FwcC1yc3YtY29udHJvbHM+XG5cblx0PCEtLSByc3YgdmlldyBjb21wb25lbnQgT1IgZnVsbC10ZXh0IGNvbXBvbmVudCAtLT5cblx0PGFwcC1yc3Ytdmlld1xuXHRcdCpuZ0lmPVwiKHJzdkVuYWJsZWQkIHwgYXN5bmMpOyBlbHNlIGVsc2VCbG9ja1wiXG5cdFx0Y2xhc3M9XCJyc3Ytdmlld1wiXG5cdFx0W2Jvb2tdPVwiKGJvb2skIHwgYXN5bmMpXCJcblx0XHRbd29yZF09XCJjdXJyZW50UGhyYXNlXCI+PC9hcHAtcnN2LXZpZXc+XG48L2Rpdj5cblxuPCEtLSBmdWxsLXRleHQgY29tcG9uZW50IC0tPlxuPG5nLXRlbXBsYXRlICNlbHNlQmxvY2s+XG5cdDxhcHAtZnVsbC10ZXh0LXZpZXdcblx0XHRjbGFzcz1cImZ1bGwtdGV4dC13cmFwcGVyIHJlbGF0aXZlIGZsZXggZmxleC1jb2x1bW4gaXRlbXMtY2VudGVyIG92ZXJmbG93LWNvbnRhaW5lciBtb21lbnR1bS1zY3JvbGwgcGgzIG10NSBtYjUtbnMgbXQwLW5zXCJcblx0XHRbYm9va109XCIgYm9vayQgfCBhc3luYyBcIlxuXHRcdFtib29rUG9zaXRpb25dPVwiIGJvb2tQb3NpdGlvbiQgfCBhc3luYyBcIj5cblx0XHQ8YXBwLXBhcmFncmFwaFxuXHRcdFx0Km5nRm9yPVwibGV0IHBhcmFncmFwaCBvZiAoYm9vayQgfCBhc3luYyk/LmNvbnRlbnQ7IGxldCBpID0gaW5kZXg7XCJcblx0XHRcdFtwYXJhZ3JhcGhdPVwicGFyYWdyYXBoXCJcblx0XHRcdFtib29rUG9zaXRpb25dPVwiKGJvb2tQb3NpdGlvbiQgfCBhc3luYylcIj48L2FwcC1wYXJhZ3JhcGg+XG5cdDwvYXBwLWZ1bGwtdGV4dC12aWV3PlxuPC9uZy10ZW1wbGF0ZT5cbiIsIjxhcHAtYm9vay1kZXRhaWw+PC9hcHAtYm9vay1kZXRhaWw+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNjQztRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtnQkFHQzs7OztJQUNBO0lBREE7SUFIRCxTQUlDLFVBREEsU0FIRDs7Ozs7SUFhQztrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtnQkFHQzs7OztJQURBO0lBQ0E7SUFIRCxTQUVDLFVBQ0EsU0FIRDs7Ozs7SUFMc0I7TUFDdkI7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7OztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO2dCQUFBO2dCQUVDO2dCQUNBO0lBQXlDO0lBQ3pDO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUNDO0lBRXlEO0lBQ3RDOzs7O0lBTnBCO0lBQ0E7SUFIRCxTQUVDLFVBQ0EsU0FIRDtJQUtFO0lBQUE7SUFERCxTQUNDLFNBREQ7Ozs7O01BM0JGO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBNEU7SUFDdkQ7TUFDcEI7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtNQUFBO01BTUM7UUFBQTtRQUFBO01BQUE7TUFDQTtRQUFBO1FBQUE7TUFBQTtNQUNBO1FBQUE7UUFBQTtNQUFBO01BQ0E7UUFBQTtRQUFBO01BQUE7TUFURDtJQUFBO2dCQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7SUFBQTtnQkFFQztnQkFDQTtnQkFDQTtnQkFDQTtJQUlnRDtJQUVDO0lBQ2xEO2dCQUFBOzs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtnQkFDQztJQUdzQztJQUNsQztJQUVzQjtNQUM1QjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBVWM7Ozs7SUE1Qlo7SUFDQTtJQUNBO0lBQ0E7SUFMRCxTQUVDLFVBQ0EsVUFDQSxVQUNBLFNBTEQ7SUFhQztJQUFBO0lBREQsVUFDQyxtQkFERDs7Ozs7SUNkRDtnQkFBQTs7Ozs7SUFBQTtLQUFBOzs7SUFBQTs7OyJ9
//# sourceMappingURL=book-detail-page.component.ngfactory.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_containers_book_list_page_book_list_page_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_api_specialized_books_api_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store_src_store__ = __webpack_require__(31);
/* unused harmony export RenderType_BookListPageComponent */
/* unused harmony export View_BookListPageComponent_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListPageComponentNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */






var styles_BookListPageComponent = [];
var RenderType_BookListPageComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* ɵcrt */]({
    encapsulation: 2,
    styles: styles_BookListPageComponent,
    data: {}
});
function View_BookListPageComponent_1(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 1, 'div', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n		no books smh\n	']))
    ], null, null);
}
function View_BookListPageComponent_3(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 9, 'p', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n			'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 3, 'a', [[
                'class',
                'b'
            ]
        ], [
            [
                1,
                'target',
                0
            ],
            [
                8,
                'href',
                4
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](335872, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_router__["z" /* RouterLinkWithHref */], [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["v" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* LocationStrategy */]
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* ɵpad */](2),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, [
            '\n				',
            '\n			'
        ])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n			'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 1, 'span', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, [
            '\n				by ',
            '\n 			'
        ])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n		']))
    ], function (ck, v) {
        var currVal_2 = ck(v, 4, 0, '/books', v.context.$implicit.id);
        ck(v, 3, 0, currVal_2);
    }, function (ck, v) {
        var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 3).target;
        var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 3).href;
        ck(v, 2, 0, currVal_0, currVal_1);
        var currVal_3 = v.context.$implicit.title;
        ck(v, 5, 0, currVal_3);
        var currVal_4 = v.context.$implicit.author;
        ck(v, 8, 0, currVal_4);
    });
}
function View_BookListPageComponent_2(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 4, 'div', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n		'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵand */](8388608, null, null, 1, null, View_BookListPageComponent_3)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](401408, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["l" /* NgForOf */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* TemplateRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* IterableDiffers */]
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.books;
        ck(v, 3, 0, currVal_0);
    }, null);
}
function View_BookListPageComponent_0(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 17, 'div', [[
                'class',
                'fl w-100 pv2 ph4'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 1, 'div', [[
                'class',
                'f3 b'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n		Your Books\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵand */](8388608, null, null, 1, null, View_BookListPageComponent_1)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](8192, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["m" /* NgIf */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* TemplateRef */]
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵand */](8388608, null, null, 1, null, View_BookListPageComponent_2)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](8192, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["m" /* NgIf */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* TemplateRef */]
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 5, 'div', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n		'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 2, 'a', [[
                'routerLink',
                '/books/new'
            ]
        ], [
            [
                1,
                'target',
                0
            ],
            [
                8,
                'href',
                4
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 14).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](335872, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_router__["z" /* RouterLinkWithHref */], [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["v" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* LocationStrategy */]
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['Add a book.'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.noBooks;
        ck(v, 6, 0, currVal_0);
        var currVal_1 = !co.noBooks;
        ck(v, 9, 0, currVal_1);
        var currVal_4 = '/books/new';
        ck(v, 14, 0, currVal_4);
    }, function (ck, v) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 14).target;
        var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 14).href;
        ck(v, 13, 0, currVal_2, currVal_3);
    });
}
function View_BookListPageComponent_Host_0(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 1, 'app-book-list', [], null, null, null, View_BookListPageComponent_0, RenderType_BookListPageComponent)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](122880, null, 0, __WEBPACK_IMPORTED_MODULE_3__app_containers_book_list_page_book_list_page_component__["a" /* BookListPageComponent */], [
            __WEBPACK_IMPORTED_MODULE_4__app_services_api_specialized_books_api_service__["a" /* BooksApi */],
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store_src_store__["a" /* Store */]
        ], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
var BookListPageComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* ɵccf */]('app-book-list', __WEBPACK_IMPORTED_MODULE_3__app_containers_book_list_page_book_list_page_component__["a" /* BookListPageComponent */], View_BookListPageComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2pvcmRhbi9nRHJpdmUvSk1ILVByb2plY3RzL3Jzdi1yZWFkZXItZnJvbnRlbmQvc3JjL2FwcC9jb250YWluZXJzL2Jvb2stbGlzdC1wYWdlL2Jvb2stbGlzdC1wYWdlLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9qb3JkYW4vZ0RyaXZlL0pNSC1Qcm9qZWN0cy9yc3YtcmVhZGVyLWZyb250ZW5kL3NyYy9hcHAvY29udGFpbmVycy9ib29rLWxpc3QtcGFnZS9ib29rLWxpc3QtcGFnZS5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy9qb3JkYW4vZ0RyaXZlL0pNSC1Qcm9qZWN0cy9yc3YtcmVhZGVyLWZyb250ZW5kL3NyYy9hcHAvY29udGFpbmVycy9ib29rLWxpc3QtcGFnZS9ib29rLWxpc3QtcGFnZS50ZW1wbGF0ZS5odG1sIiwibmc6Ly8vVXNlcnMvam9yZGFuL2dEcml2ZS9KTUgtUHJvamVjdHMvcnN2LXJlYWRlci1mcm9udGVuZC9zcmMvYXBwL2NvbnRhaW5lcnMvYm9vay1saXN0LXBhZ2UvYm9vay1saXN0LXBhZ2UuY29tcG9uZW50LnRzLkJvb2tMaXN0UGFnZUNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJmbCB3LTEwMCBwdjIgcGg0XCI+XG5cdDxkaXYgY2xhc3M9XCJmMyBiXCI+XG5cdFx0WW91ciBCb29rc1xuXHQ8L2Rpdj5cblx0PGRpdiAqbmdJZj1cIm5vQm9va3NcIj5cblx0XHRubyBib29rcyBzbWhcblx0PC9kaXY+XG5cdDxkaXYgKm5nSWY9XCIhbm9Cb29rc1wiPlxuXHRcdDxwICpuZ0Zvcj1cImxldCBib29rIG9mIGJvb2tzXCI+XG5cdFx0XHQ8YSBbcm91dGVyTGlua109XCJbJy9ib29rcycsIGJvb2suaWRdXCIgY2xhc3M9XCJiXCI+XG5cdFx0XHRcdHt7IGJvb2sudGl0bGUgfX1cblx0XHRcdDwvYT5cblx0XHRcdDxzcGFuPlxuXHRcdFx0XHRieSB7eyBib29rLmF1dGhvciB9fVxuIFx0XHRcdDwvc3Bhbj5cblx0XHQ8L3A+XG5cdDwvZGl2PlxuXHQ8ZGl2PlxuXHRcdDxhIHJvdXRlckxpbms9XCIvYm9va3MvbmV3XCI+QWRkIGEgYm9vay48L2E+XG5cdDwvZGl2PlxuPC9kaXY+XG5cbiIsIjxhcHAtYm9vay1saXN0PjwvYXBwLWJvb2stbGlzdD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0lDO0lBQXFCOzs7Ozs7SUFJcEI7SUFBOEI7TUFDN0I7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBRztJQUE2QztNQUFBO01BQUE7SUFBQTtJQUFBO0lBRTVDO0lBQ0o7SUFBTTtNQUFBO01BQUE7SUFBQTtJQUFBO0lBRUU7OztJQUxMO0lBQUgsU0FBRyxTQUFIOztJQUFBO0lBQUE7SUFBQSxTQUFBLG1CQUFBO0lBQWdEO0lBQUE7SUFHMUM7SUFBQTs7Ozs7SUFMUjtJQUFzQjtJQUNyQjtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQU9JOzs7O0lBUEQ7SUFBSCxTQUFHLFNBQUg7Ozs7O01BUkY7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE4QjtNQUM3QjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWtCO0lBRVo7SUFDTjtnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBRU07SUFDTjtnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBU007SUFDTjtJQUFLO01BQ0o7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUEyQjtJQUFlO0lBQ3JDO0lBQ0Q7Ozs7SUFoQkE7SUFBTCxTQUFLLFNBQUw7SUFHSztJQUFMLFNBQUssU0FBTDtJQVdJO0lBQUgsVUFBRyxTQUFIOztJQUFBO0lBQUE7SUFBQSxVQUFBLG1CQUFBOzs7OztJQ2xCRjtnQkFBQTs7O0lBQUE7S0FBQTs7O0lBQUE7OzsifQ==
//# sourceMappingURL=book-list-page.component.ngfactory.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_containers_full_text_view_full_text_view_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_utils_book_position_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_utils_infinite_scroll_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RenderType_FullTextViewComponent; });
/* harmony export (immutable) */ __webpack_exports__["a"] = View_FullTextViewComponent_0;
/* unused harmony export FullTextViewComponentNgFactory */
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */





var styles_FullTextViewComponent = [];
var RenderType_FullTextViewComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* ɵcrt */]({
    encapsulation: 2,
    styles: styles_FullTextViewComponent,
    data: {}
});
function View_FullTextViewComponent_0(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](2, [
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](201326592, 1, { contentContainer: 0 }),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, [' '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, [
            [
                1,
                0
            ],
            [
                'container',
                1
            ]
        ], null, 0, 'div', [[
                'class',
                'full-text'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n']))
    ], null, null);
}
function View_FullTextViewComponent_Host_0(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 2, 'app-full-text-view', [], null, [[
                null,
                'scroll'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('scroll' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 1).onScroll($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_FullTextViewComponent_0, RenderType_FullTextViewComponent)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](2121728, null, 1, __WEBPACK_IMPORTED_MODULE_1__app_containers_full_text_view_full_text_view_component__["a" /* FullTextViewComponent */], [
            __WEBPACK_IMPORTED_MODULE_2__app_services_utils_book_position_service__["a" /* BookPositionService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_utils_infinite_scroll_service__["a" /* InfiniteScrollService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DOCUMENT */]
        ], null, null),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* ɵqud */](301989888, 1, { paragraphs: 1 })
    ], null, null);
}
var FullTextViewComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* ɵccf */]('app-full-text-view', __WEBPACK_IMPORTED_MODULE_1__app_containers_full_text_view_full_text_view_component__["a" /* FullTextViewComponent */], View_FullTextViewComponent_Host_0, {
    book: 'book',
    bookPosition: 'bookPosition'
}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2pvcmRhbi9nRHJpdmUvSk1ILVByb2plY3RzL3Jzdi1yZWFkZXItZnJvbnRlbmQvc3JjL2FwcC9jb250YWluZXJzL2Z1bGwtdGV4dC12aWV3L2Z1bGwtdGV4dC12aWV3LmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9qb3JkYW4vZ0RyaXZlL0pNSC1Qcm9qZWN0cy9yc3YtcmVhZGVyLWZyb250ZW5kL3NyYy9hcHAvY29udGFpbmVycy9mdWxsLXRleHQtdmlldy9mdWxsLXRleHQtdmlldy5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy9qb3JkYW4vZ0RyaXZlL0pNSC1Qcm9qZWN0cy9yc3YtcmVhZGVyLWZyb250ZW5kL3NyYy9hcHAvY29udGFpbmVycy9mdWxsLXRleHQtdmlldy9mdWxsLXRleHQtdmlldy50ZW1wbGF0ZS5odG1sIiwibmc6Ly8vVXNlcnMvam9yZGFuL2dEcml2ZS9KTUgtUHJvamVjdHMvcnN2LXJlYWRlci1mcm9udGVuZC9zcmMvYXBwL2NvbnRhaW5lcnMvZnVsbC10ZXh0LXZpZXcvZnVsbC10ZXh0LXZpZXcuY29tcG9uZW50LnRzLkZ1bGxUZXh0Vmlld0NvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIiA8ZGl2IGNsYXNzPVwiZnVsbC10ZXh0XCIgI2NvbnRhaW5lcj48L2Rpdj5cbiIsIjxhcHAtZnVsbC10ZXh0LXZpZXc+PC9hcHAtZnVsbC10ZXh0LXZpZXc+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQTtJQUFDO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXdDOzs7Ozs7TUNBekM7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2dCQUFBOzs7Ozs7SUFBQTtLQUFBO2dCQUFBOzs7Ozs7OzsifQ==
//# sourceMappingURL=full-text-view.component.ngfactory.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_containers_login_page_login_page_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_auth_auth_service__ = __webpack_require__(54);
/* unused harmony export RenderType_LoginPageComponent */
/* unused harmony export View_LoginPageComponent_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponentNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */




var styles_LoginPageComponent = [];
var RenderType_LoginPageComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* ɵcrt */]({
    encapsulation: 2,
    styles: styles_LoginPageComponent,
    data: {}
});
function View_LoginPageComponent_0(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 30, 'div', [[
                'class',
                'fl w-100 pv2 ph4'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 1, 'div', [[
                'class',
                'f3 b'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['LOGIN PAGE'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 8, 'div', [[
                'class',
                'pt2'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n		'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 5, 'input', [
            [
                'placeholder',
                'email'
            ],
            [
                'type',
                'text'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'ngModelChange'
            ],
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('input' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 8)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 8).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 8)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 8)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((co.email = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](8192, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* DefaultValueAccessor */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ElementRef */],
            [
                2,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* COMPOSITION_BUFFER_MODE */]
            ]
        ], null, null),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵprd */](512, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* NG_VALUE_ACCESSOR */], function (p0_0) {
            return [p0_0];
        }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* DefaultValueAccessor */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](335872, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* NgModel */], [
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* NG_VALUE_ACCESSOR */]
            ]
        ], { model: [
                0,
                'model'
            ]
        }, { update: 'ngModelChange' }),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* NgModel */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](8192, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NgControl */]], null, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 8, 'div', [[
                'class',
                'pt2'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n		'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 5, 'input', [
            [
                'placeholder',
                'password'
            ],
            [
                'type',
                'password'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'ngModelChange'
            ],
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('input' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 18)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 18).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 18)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 18)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((co.password = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](8192, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* DefaultValueAccessor */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ElementRef */],
            [
                2,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* COMPOSITION_BUFFER_MODE */]
            ]
        ], null, null),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵprd */](512, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* NG_VALUE_ACCESSOR */], function (p0_0) {
            return [p0_0];
        }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* DefaultValueAccessor */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](335872, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* NgModel */], [
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* NG_VALUE_ACCESSOR */]
            ]
        ], { model: [
                0,
                'model'
            ]
        }, { update: 'ngModelChange' }),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* NgModel */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](8192, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NgControl */]], null, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 4, 'div', [[
                'class',
                'pt2'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n		'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.submit() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['Log In!'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_7 = co.email;
        ck(v, 10, 0, currVal_7);
        var currVal_15 = co.password;
        ck(v, 20, 0, currVal_15);
    }, function (ck, v) {
        var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 12).ngClassUntouched;
        var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 12).ngClassTouched;
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 12).ngClassPristine;
        var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 12).ngClassDirty;
        var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 12).ngClassValid;
        var currVal_5 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 12).ngClassInvalid;
        var currVal_6 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 12).ngClassPending;
        ck(v, 7, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_8 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 22).ngClassUntouched;
        var currVal_9 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 22).ngClassTouched;
        var currVal_10 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 22).ngClassPristine;
        var currVal_11 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 22).ngClassDirty;
        var currVal_12 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 22).ngClassValid;
        var currVal_13 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 22).ngClassInvalid;
        var currVal_14 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 22).ngClassPending;
        ck(v, 17, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);
    });
}
function View_LoginPageComponent_Host_0(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 1, 'app-login-page', [], null, [[
                'document',
                'keydown'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('document:keydown' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 1).handleEnter($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_LoginPageComponent_0, RenderType_LoginPageComponent)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](24576, null, 0, __WEBPACK_IMPORTED_MODULE_1__app_containers_login_page_login_page_component__["a" /* LoginPageComponent */], [__WEBPACK_IMPORTED_MODULE_3__app_services_auth_auth_service__["a" /* AuthService */]], null, null)
    ], null, null);
}
var LoginPageComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* ɵccf */]('app-login-page', __WEBPACK_IMPORTED_MODULE_1__app_containers_login_page_login_page_component__["a" /* LoginPageComponent */], View_LoginPageComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2pvcmRhbi9nRHJpdmUvSk1ILVByb2plY3RzL3Jzdi1yZWFkZXItZnJvbnRlbmQvc3JjL2FwcC9jb250YWluZXJzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvam9yZGFuL2dEcml2ZS9KTUgtUHJvamVjdHMvcnN2LXJlYWRlci1mcm9udGVuZC9zcmMvYXBwL2NvbnRhaW5lcnMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL2pvcmRhbi9nRHJpdmUvSk1ILVByb2plY3RzL3Jzdi1yZWFkZXItZnJvbnRlbmQvc3JjL2FwcC9jb250YWluZXJzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS50ZW1wbGF0ZS5odG1sIiwibmc6Ly8vVXNlcnMvam9yZGFuL2dEcml2ZS9KTUgtUHJvamVjdHMvcnN2LXJlYWRlci1mcm9udGVuZC9zcmMvYXBwL2NvbnRhaW5lcnMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC50cy5Mb2dpblBhZ2VDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGNsYXNzPVwiZmwgdy0xMDAgcHYyIHBoNFwiPlxuXHQ8ZGl2IGNsYXNzPVwiZjMgYlwiPkxPR0lOIFBBR0U8L2Rpdj5cblx0PGRpdiBjbGFzcz1cInB0MlwiPlxuXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImVtYWlsXCI+XG5cdDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwicHQyXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIFsobmdNb2RlbCldPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCI+XG5cdDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwicHQyXCI+XG5cdFx0PGJ1dHRvbiAoY2xpY2spPVwic3VibWl0KClcIj5Mb2cgSW4hPC9idXR0b24+XG5cdDwvZGl2PlxuPC9kaXY+XG4iLCI8YXBwLWxvZ2luLXBhZ2U+PC9hcHAtbG9naW4tcGFnZT4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQThCO01BQzdCO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBa0I7SUFBZ0I7TUFDbEM7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFpQjtJQUNoQjtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQW1CO1FBQUE7UUFBQTtNQUFBO01BQW5CO0lBQUE7Z0JBQUE7OztNQUFBO1FBQUE7O01BQUE7O0lBQUE7S0FBQTtnQkFBQTtNQUFBO0lBQUE7Z0JBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBOztNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTtnQkFBQTtJQUEyRDtJQUN0RDtNQUNOO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBaUI7SUFDaEI7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUF1QjtRQUFBO1FBQUE7TUFBQTtNQUF2QjtJQUFBO2dCQUFBOzs7TUFBQTtRQUFBOztNQUFBOztJQUFBO0tBQUE7Z0JBQUE7TUFBQTtJQUFBO2dCQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7SUFBcUU7SUFDaEU7TUFDTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWlCO01BQ2hCO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQVE7UUFBQTtRQUFBO01BQUE7TUFBUjtJQUFBO0lBQTJCO0lBQWdCO0lBQ3RDO0lBQ0Q7Ozs7SUFSZTtJQUFuQixVQUFtQixTQUFuQjtJQUd1QjtJQUF2QixVQUF1QixVQUF2Qjs7SUFIQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFNBQUEscUVBQUE7SUFHQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFVBQUEsMEVBQUE7Ozs7O01DTkY7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2dCQUFBOzs7OyJ9
//# sourceMappingURL=login-page.component.ngfactory.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_containers_new_book_page_new_book_page_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_api_specialized_books_api_service__ = __webpack_require__(36);
/* unused harmony export RenderType_NewBookPageComponent */
/* unused harmony export View_NewBookPageComponent_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewBookPageComponentNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */




var styles_NewBookPageComponent = [];
var RenderType_NewBookPageComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* ɵcrt */]({
    encapsulation: 2,
    styles: styles_NewBookPageComponent,
    data: {}
});
function View_NewBookPageComponent_0(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 40, 'div', [[
                'class',
                'fl w-100 pv2 ph4'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 1, 'div', [[
                'class',
                'f3 b'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['New Book'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 8, 'div', [[
                'class',
                'pt2'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n		'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 5, 'input', [
            [
                'placeholder',
                'title'
            ],
            [
                'type',
                'text'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'ngModelChange'
            ],
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('input' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 8)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 8).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 8)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 8)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((co.book.title = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](8192, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* DefaultValueAccessor */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ElementRef */],
            [
                2,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* COMPOSITION_BUFFER_MODE */]
            ]
        ], null, null),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵprd */](512, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* NG_VALUE_ACCESSOR */], function (p0_0) {
            return [p0_0];
        }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* DefaultValueAccessor */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](335872, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* NgModel */], [
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* NG_VALUE_ACCESSOR */]
            ]
        ], { model: [
                0,
                'model'
            ]
        }, { update: 'ngModelChange' }),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* NgModel */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](8192, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NgControl */]], null, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 8, 'div', [[
                'class',
                'pt2'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n		'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 5, 'input', [
            [
                'placeholder',
                'author'
            ],
            [
                'type',
                'text'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'ngModelChange'
            ],
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('input' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 18)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 18).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 18)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 18)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((co.book.author = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](8192, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* DefaultValueAccessor */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ElementRef */],
            [
                2,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* COMPOSITION_BUFFER_MODE */]
            ]
        ], null, null),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵprd */](512, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* NG_VALUE_ACCESSOR */], function (p0_0) {
            return [p0_0];
        }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* DefaultValueAccessor */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](335872, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* NgModel */], [
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* NG_VALUE_ACCESSOR */]
            ]
        ], { model: [
                0,
                'model'
            ]
        }, { update: 'ngModelChange' }),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* NgModel */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](8192, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NgControl */]], null, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 8, 'div', [[
                'class',
                'pt2'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n		'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 5, 'textarea', [
            [
                'cols',
                '30'
            ],
            [
                'rows',
                '10'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'ngModelChange'
            ],
            [
                null,
                'input'
            ],
            [
                null,
                'blur'
            ],
            [
                null,
                'compositionstart'
            ],
            [
                null,
                'compositionend'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('input' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 28)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 28).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 28)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 28)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_4 = ((co.book.body = $event) !== false);
                ad = (pd_4 && ad);
            }
            return ad;
        }, null, null)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](8192, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* DefaultValueAccessor */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ElementRef */],
            [
                2,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* COMPOSITION_BUFFER_MODE */]
            ]
        ], null, null),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵprd */](512, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* NG_VALUE_ACCESSOR */], function (p0_0) {
            return [p0_0];
        }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* DefaultValueAccessor */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](335872, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* NgModel */], [
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ],
            [
                2,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* NG_VALUE_ACCESSOR */]
            ]
        ], { model: [
                0,
                'model'
            ]
        }, { update: 'ngModelChange' }),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* NgModel */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](8192, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* NgControl */]], null, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 4, 'div', [[
                'class',
                'pt2'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n		'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 1, 'button', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.submit() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['Create!'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_7 = co.book.title;
        ck(v, 10, 0, currVal_7);
        var currVal_15 = co.book.author;
        ck(v, 20, 0, currVal_15);
        var currVal_23 = co.book.body;
        ck(v, 30, 0, currVal_23);
    }, function (ck, v) {
        var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 12).ngClassUntouched;
        var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 12).ngClassTouched;
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 12).ngClassPristine;
        var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 12).ngClassDirty;
        var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 12).ngClassValid;
        var currVal_5 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 12).ngClassInvalid;
        var currVal_6 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 12).ngClassPending;
        ck(v, 7, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_8 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 22).ngClassUntouched;
        var currVal_9 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 22).ngClassTouched;
        var currVal_10 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 22).ngClassPristine;
        var currVal_11 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 22).ngClassDirty;
        var currVal_12 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 22).ngClassValid;
        var currVal_13 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 22).ngClassInvalid;
        var currVal_14 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 22).ngClassPending;
        ck(v, 17, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);
        var currVal_16 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 32).ngClassUntouched;
        var currVal_17 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 32).ngClassTouched;
        var currVal_18 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 32).ngClassPristine;
        var currVal_19 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 32).ngClassDirty;
        var currVal_20 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 32).ngClassValid;
        var currVal_21 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 32).ngClassInvalid;
        var currVal_22 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 32).ngClassPending;
        ck(v, 27, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22);
    });
}
function View_NewBookPageComponent_Host_0(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 1, 'ng-component', [], null, [[
                'document',
                'keydown'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('document:keydown' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v, 1).handleEnter($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, View_NewBookPageComponent_0, RenderType_NewBookPageComponent)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](24576, null, 0, __WEBPACK_IMPORTED_MODULE_1__app_containers_new_book_page_new_book_page_component__["a" /* NewBookPageComponent */], [__WEBPACK_IMPORTED_MODULE_3__app_services_api_specialized_books_api_service__["a" /* BooksApi */]], null, null)
    ], null, null);
}
var NewBookPageComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* ɵccf */]('ng-component', __WEBPACK_IMPORTED_MODULE_1__app_containers_new_book_page_new_book_page_component__["a" /* NewBookPageComponent */], View_NewBookPageComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2pvcmRhbi9nRHJpdmUvSk1ILVByb2plY3RzL3Jzdi1yZWFkZXItZnJvbnRlbmQvc3JjL2FwcC9jb250YWluZXJzL25ldy1ib29rLXBhZ2UvbmV3LWJvb2stcGFnZS5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvam9yZGFuL2dEcml2ZS9KTUgtUHJvamVjdHMvcnN2LXJlYWRlci1mcm9udGVuZC9zcmMvYXBwL2NvbnRhaW5lcnMvbmV3LWJvb2stcGFnZS9uZXctYm9vay1wYWdlLmNvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL2pvcmRhbi9nRHJpdmUvSk1ILVByb2plY3RzL3Jzdi1yZWFkZXItZnJvbnRlbmQvc3JjL2FwcC9jb250YWluZXJzL25ldy1ib29rLXBhZ2UvbmV3LWJvb2stcGFnZS50ZW1wbGF0ZS5odG1sIiwibmc6Ly8vVXNlcnMvam9yZGFuL2dEcml2ZS9KTUgtUHJvamVjdHMvcnN2LXJlYWRlci1mcm9udGVuZC9zcmMvYXBwL2NvbnRhaW5lcnMvbmV3LWJvb2stcGFnZS9uZXctYm9vay1wYWdlLmNvbXBvbmVudC50cy5OZXdCb29rUGFnZUNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJmbCB3LTEwMCBwdjIgcGg0XCI+XG5cdDxkaXYgY2xhc3M9XCJmMyBiXCI+TmV3IEJvb2s8L2Rpdj5cblx0PGRpdiBjbGFzcz1cInB0MlwiPlxuXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiYm9vay50aXRsZVwiIHBsYWNlaG9sZGVyPVwidGl0bGVcIj5cblx0PC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJwdDJcIj5cblx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImJvb2suYXV0aG9yXCIgcGxhY2Vob2xkZXI9XCJhdXRob3JcIj5cblx0PC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJwdDJcIj5cblx0XHQ8dGV4dGFyZWEgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgWyhuZ01vZGVsKV09XCJib29rLmJvZHlcIj48L3RleHRhcmVhPlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cInB0MlwiPlxuXHRcdDxidXR0b24gKGNsaWNrKT1cInN1Ym1pdCgpXCI+Q3JlYXRlITwvYnV0dG9uPlxuXHQ8L2Rpdj5cbjwvZGl2PlxuIiwiPG5nLWNvbXBvbmVudD48L25nLWNvbXBvbmVudD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQThCO01BQzdCO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBa0I7SUFBYztNQUNoQztRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWlCO0lBQ2hCO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBbUI7UUFBQTtRQUFBO01BQUE7TUFBbkI7SUFBQTtnQkFBQTs7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtLQUFBO2dCQUFBO01BQUE7SUFBQTtnQkFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7O01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBO2dCQUFBO0lBQWdFO0lBQzNEO01BQ047UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFpQjtJQUNoQjtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQW1CO1FBQUE7UUFBQTtNQUFBO01BQW5CO0lBQUE7Z0JBQUE7OztNQUFBO1FBQUE7O01BQUE7O0lBQUE7S0FBQTtnQkFBQTtNQUFBO0lBQUE7Z0JBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBOztNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTtnQkFBQTtJQUFrRTtJQUM3RDtNQUNOO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBaUI7SUFDaEI7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUE4QjtRQUFBO1FBQUE7TUFBQTtNQUE5QjtJQUFBO2dCQUFBOzs7TUFBQTtRQUFBOztNQUFBOztJQUFBO0tBQUE7Z0JBQUE7TUFBQTtJQUFBO2dCQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7SUFBaUU7SUFDNUQ7TUFDTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWlCO01BQ2hCO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQVE7UUFBQTtRQUFBO01BQUE7TUFBUjtJQUFBO0lBQTJCO0lBQWdCO0lBQ3RDO0lBQ0Q7Ozs7SUFYZTtJQUFuQixVQUFtQixTQUFuQjtJQUdtQjtJQUFuQixVQUFtQixVQUFuQjtJQUc4QjtJQUE5QixVQUE4QixVQUE5Qjs7SUFOQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFNBQUEscUVBQUE7SUFHQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFVBQUEsMEVBQUE7SUFHQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFVBQUEsNEVBQUE7Ozs7O01DVEY7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2dCQUFBOzs7OyJ9
//# sourceMappingURL=new-book-page.component.ngfactory.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_containers_rsv_view_rsv_view_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_utils_interval_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store_src_store__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RenderType_RsvViewComponent; });
/* harmony export (immutable) */ __webpack_exports__["a"] = View_RsvViewComponent_0;
/* unused harmony export RsvViewComponentNgFactory */
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */





var styles_RsvViewComponent = [];
var RenderType_RsvViewComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* ɵcrt */]({
    encapsulation: 2,
    styles: styles_RsvViewComponent,
    data: {}
});
function View_RsvViewComponent_1(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 3, 'span', [], null, null, null, null, null)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](139264, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_common__["o" /* NgClass */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* IterableDiffers */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* KeyValueDiffers */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer */]
        ], { ngClass: [
                0,
                'ngClass'
            ]
        }, null),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* ɵpod */](['pr1']),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, [
            '\n			',
            '\n		'
        ]))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = ck(v, 2, 0, (((v.context.index === 0) && (co.phrase.length > 1)) && false));
        ck(v, 1, 0, currVal_0);
    }, function (ck, v) {
        var currVal_1 = v.context.$implicit;
        ck(v, 3, 0, currVal_1);
    });
}
function View_RsvViewComponent_2(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 4, 'div', [[
                'class',
                'f7 tc code light-silver'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, [
            '\n		',
            'k / ',
            'k words (',
            '%)\n	'
        ])),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵppd */](2),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵppd */](2),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_37" /* ɵppd */](2)
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵunv */](v, 1, 0, ck(v, 2, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v.parent, 0), (co.currentWordIdx / 1000), '1.1-1'));
        var currVal_1 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵunv */](v, 1, 1, ck(v, 3, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v.parent, 0), (co.book.length / 1000), '1.1-1'));
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* ɵunv */](v, 1, 2, ck(v, 4, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* ɵnov */](v.parent, 0), ((co.currentWordIdx / co.book.length) * 100), '1.0-0'));
        ck(v, 1, 0, currVal_0, currVal_1, currVal_2);
    });
}
function View_RsvViewComponent_0(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* ɵpid */](0, __WEBPACK_IMPORTED_MODULE_1__angular_common__["p" /* DecimalPipe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* LOCALE_ID */]]),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 10, 'div', [[
                'class',
                'flex flex-column flex-column-reverse-ns justify-between items-center h4 pb4'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 4, 'div', [[
                'class',
                'f4 f3-ns fw6 tc'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n		'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵand */](8388608, null, null, 1, null, View_RsvViewComponent_1)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](401408, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_common__["l" /* NgForOf */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* TemplateRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* IterableDiffers */]
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n	'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* ɵand */](8388608, null, null, 1, null, View_RsvViewComponent_2)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](8192, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_common__["m" /* NgIf */], [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* TemplateRef */]
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* ɵted */](null, ['\n\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.phrase;
        ck(v, 6, 0, currVal_0);
        var currVal_1 = (co.book != null);
        ck(v, 10, 0, currVal_1);
    }, null);
}
function View_RsvViewComponent_Host_0(l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* ɵeld */](0, null, null, 1, 'app-rsv-view', [], null, null, null, View_RsvViewComponent_0, RenderType_RsvViewComponent)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* ɵdid */](122880, null, 0, __WEBPACK_IMPORTED_MODULE_2__app_containers_rsv_view_rsv_view_component__["a" /* RsvViewComponent */], [
            __WEBPACK_IMPORTED_MODULE_3__app_services_utils_interval_service__["a" /* IntervalService */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store_src_store__["a" /* Store */]
        ], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
var RsvViewComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* ɵccf */]('app-rsv-view', __WEBPACK_IMPORTED_MODULE_2__app_containers_rsv_view_rsv_view_component__["a" /* RsvViewComponent */], View_RsvViewComponent_Host_0, {
    word: 'word',
    book: 'book'
}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2pvcmRhbi9nRHJpdmUvSk1ILVByb2plY3RzL3Jzdi1yZWFkZXItZnJvbnRlbmQvc3JjL2FwcC9jb250YWluZXJzL3Jzdi12aWV3L3Jzdi12aWV3LmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9qb3JkYW4vZ0RyaXZlL0pNSC1Qcm9qZWN0cy9yc3YtcmVhZGVyLWZyb250ZW5kL3NyYy9hcHAvY29udGFpbmVycy9yc3Ytdmlldy9yc3Ytdmlldy5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy9qb3JkYW4vZ0RyaXZlL0pNSC1Qcm9qZWN0cy9yc3YtcmVhZGVyLWZyb250ZW5kL3NyYy9hcHAvY29udGFpbmVycy9yc3Ytdmlldy9yc3Ytdmlldy5jb21wb25lbnQudGVtcGxhdGUuaHRtbCIsIm5nOi8vL1VzZXJzL2pvcmRhbi9nRHJpdmUvSk1ILVByb2plY3RzL3Jzdi1yZWFkZXItZnJvbnRlbmQvc3JjL2FwcC9jb250YWluZXJzL3Jzdi12aWV3L3Jzdi12aWV3LmNvbXBvbmVudC50cy5Sc3ZWaWV3Q29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2x1bW4gZmxleC1jb2x1bW4tcmV2ZXJzZS1ucyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGg0IHBiNFwiPlxuXHQ8ZGl2IGNsYXNzPVwiZjQgZjMtbnMgZnc2IHRjXCI+XG5cdFx0PHNwYW5cblx0XHRcdCpuZ0Zvcj1cImxldCBvbmVXb3JkIG9mIHBocmFzZTsgbGV0IGkgPSBpbmRleFwiXG5cdFx0XHRbbmdDbGFzc109XCJ7J3ByMSc6IGkgPT09IDAgJiYgcGhyYXNlLmxlbmd0aCA+IDEgJiYgZmFsc2V9XCI+XG5cdFx0XHR7eyBvbmVXb3JkIH19XG5cdFx0PC9zcGFuPlxuXHQ8L2Rpdj5cblx0PGRpdiAqbmdJZj1cImJvb2sgIT0gbnVsbFwiIGNsYXNzPVwiZjcgdGMgY29kZSBsaWdodC1zaWx2ZXJcIj5cblx0XHR7eyBjdXJyZW50V29yZElkeCAvIDEwMDAgfCBudW1iZXI6XCIxLjEtMVwiIH19ayAvIHt7IGJvb2subGVuZ3RoIC8gMTAwMCB8IG51bWJlcjpcIjEuMS0xXCIgfX1rIHdvcmRzICh7eyBjdXJyZW50V29yZElkeCAvIGJvb2subGVuZ3RoICogMTAwIHwgbnVtYmVyOlwiMS4wLTBcIiB9fSUpXG5cdDwvZGl2PlxuPC9kaXY+XG5cbiIsIjxhcHAtcnN2LXZpZXc+PC9hcHAtcnN2LXZpZXc+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0VFO2dCQUFBOzs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFFQztJQUEyRDtNQUFBO01BQUE7SUFBQTtJQUFBOzs7O0lBQTNEO0lBRkQsU0FFQyxTQUZEOztJQUU0RDtJQUFBOzs7OztNQUk3RDtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQTBEO01BQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtJQUFBO2dCQUFBO2dCQUFBO2dCQUFBOzs7O0lBQUE7SUFBQTtJQUFBO0lBQUE7Ozs7OztNQVIzRDtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXlGO01BQ3hGO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBNkI7SUFDNUI7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFJTztJQUNGO0lBQ047Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUVNO0lBQ0Q7Ozs7SUFSSDtJQURELFNBQ0MsU0FERDtJQU1JO0lBQUwsVUFBSyxTQUFMOzs7OztJQ1JEO2dCQUFBOzs7SUFBQTtLQUFBOzs7SUFBQTs7Ozs7OzsifQ==
//# sourceMappingURL=rsv-view.component.ngfactory.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers__ = __webpack_require__(237);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });


var routes = [
    {
        path: "books",
        children: [{
                path: "new",
                component: __WEBPACK_IMPORTED_MODULE_1__containers__["a" /* NewBookPageComponent */],
            }, {
                path: ":id",
                component: __WEBPACK_IMPORTED_MODULE_1__containers__["b" /* BookDetailPageComponent */]
            }, {
                path: "",
                pathMatch: "full",
                component: __WEBPACK_IMPORTED_MODULE_1__containers__["c" /* BookListPageComponent */]
            }],
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth__["b" /* AuthGuard */]],
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_0__services_auth__["b" /* AuthGuard */]]
    },
    {
        path: "login",
        component: __WEBPACK_IMPORTED_MODULE_1__containers__["d" /* LoginPageComponent */]
    },
    {
        path: "**",
        redirectTo: "/books"
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__current_phrase__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paragraph__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rsv_controls__ = __webpack_require__(236);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });



var DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_0__current_phrase__["a" /* CurrentPhraseComponent */],
    __WEBPACK_IMPORTED_MODULE_1__paragraph__["a" /* ParagraphComponent */],
    __WEBPACK_IMPORTED_MODULE_2__rsv_controls__["a" /* RsvControlsComponent */]
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentPhraseComponent; });
var CurrentPhraseComponent = (function () {
    function CurrentPhraseComponent() {
    }
    CurrentPhraseComponent.ctorParameters = function () { return []; };
    return CurrentPhraseComponent;
}());

//# sourceMappingURL=current-phrase.component.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__current_phrase_component__ = __webpack_require__(233);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__current_phrase_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__paragraph_component__ = __webpack_require__(87);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__paragraph_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rsv_controls_component__ = __webpack_require__(88);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__rsv_controls_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containers_module__ = __webpack_require__(132);
/* unused harmony reexport ContainersModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_detail_page__ = __webpack_require__(130);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__book_detail_page__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_list_page__ = __webpack_require__(131);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__book_list_page__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__full_text_view__ = __webpack_require__(133);
/* unused harmony reexport FullTextViewComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_page__ = __webpack_require__(134);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__login_page__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_book_page__ = __webpack_require__(135);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__new_book_page__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rsv_view__ = __webpack_require__(136);
/* unused harmony reexport RsvViewComponent */







//# sourceMappingURL=index.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_utils__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_api__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_book_position__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPositionEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BookPositionEffects = (function () {
    function BookPositionEffects(actions$, bookmarksApi, bookPositionService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.bookmarksApi = bookmarksApi;
        this.bookPositionService = bookPositionService;
        this.store = store;
        this.loadSavedPosition = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions_book_position__["LOAD_SAVED"])
            .map(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["c" /* toPayload */])
            .switchMap(function (id) {
            if (id == null) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].empty();
            }
            var nextGetById$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_7__actions_book_position__["LOAD_SAVED"]).skip(1);
            return _this.bookmarksApi
                .getById(id)
                .takeUntil(nextGetById$)
                .map(function (bookmark) {
                return new __WEBPACK_IMPORTED_MODULE_7__actions_book_position__["SetAction"]({
                    paragraphIdx: bookmark.paragraphIdx,
                    wordIdx: bookmark.wordIdx
                });
            });
        });
        this.book$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* getBook */]);
        this.bookPosition$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["b" /* getBookPosition */]);
        this.step = this.getStepEffect();
        this.save = this.getSaveEffect();
    }
    BookPositionEffects.prototype.getSaveEffect = function () {
        var _this = this;
        return this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions_book_position__["SET"])
            .map(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["c" /* toPayload */])
            .distinct(function (bookPosition) { return bookPosition.paragraphIdx; })
            .withLatestFrom(this.book$)
            .flatMap(function (_a) {
            var bookPosition = _a[0], book = _a[1];
            if (book == null || bookPosition.paragraphIdx == null || bookPosition.wordIdx == null) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].empty();
            }
            return _this.bookmarksApi.create(new __WEBPACK_IMPORTED_MODULE_4__models__["Bookmark"](bookPosition.paragraphIdx, 0, book.id));
        });
    };
    BookPositionEffects.prototype.getStepEffect = function () {
        var _this = this;
        return this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions_book_position__["STEP"])
            .map(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["c" /* toPayload */])
            .withLatestFrom(this.book$, this.bookPosition$)
            .flatMap(function (_a) {
            var step = _a[0], book = _a[1], currentPosition = _a[2];
            if (step == null || currentPosition == null || book == null) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].empty();
            }
            var nextPosition = _this.bookPositionService.stepPosition(book, currentPosition, step);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_7__actions_book_position__["SetAction"](nextPosition));
        });
    };
    BookPositionEffects.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */] }, { type: __WEBPACK_IMPORTED_MODULE_6__services_api__["a" /* BookmarksApi */] }, { type: __WEBPACK_IMPORTED_MODULE_5__services_utils__["a" /* BookPositionService */] }, { type: __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */] }]; };
    return BookPositionEffects;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"]) === "function" && _a || Object)
], BookPositionEffects.prototype, "save", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"]) === "function" && _b || Object)
], BookPositionEffects.prototype, "step", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"]) === "function" && _c || Object)
], BookPositionEffects.prototype, "loadSavedPosition", void 0);
var _a, _b, _c;
//# sourceMappingURL=book-position.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_books__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookEffects = (function () {
    function BookEffects(actions$, booksApi) {
        var _this = this;
        this.actions$ = actions$;
        this.booksApi = booksApi;
        this.getById$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions_books__["c" /* GET_BY_ID */])
            .map(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["c" /* toPayload */])
            .switchMap(function (id) {
            if (id == null) {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].empty();
            }
            var nextGetById$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions_books__["c" /* GET_BY_ID */]).skip(1);
            return _this.booksApi
                .getById(id)
                .takeUntil(nextGetById$)
                .map(function (book) { return new __WEBPACK_IMPORTED_MODULE_3__actions_books__["d" /* LoadAction */](book); });
        });
        this.write$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions_books__["e" /* WRITE */])
            .map(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["c" /* toPayload */])
            .switchMap(function (jsonBook) {
            if (jsonBook == null) {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].empty();
            }
            var nextWrite$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions_books__["e" /* WRITE */]).skip(1);
            return _this.booksApi
                .createFromJsonBook(jsonBook)
                .takeUntil(nextWrite$)
                .map(function () { return new __WEBPACK_IMPORTED_MODULE_3__actions_books__["f" /* WriteFinishAction */](); });
        });
    }
    BookEffects.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["a" /* Actions */] }, { type: __WEBPACK_IMPORTED_MODULE_2__services__["a" /* BooksApi */] }]; };
    return BookEffects;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"]) === "function" && _a || Object)
], BookEffects.prototype, "getById$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"]) === "function" && _b || Object)
], BookEffects.prototype, "write$", void 0);
var _a, _b;
//# sourceMappingURL=books.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_user_details__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserEffects = (function () {
    function UserEffects(actions$, authService, router) {
        var _this = this;
        this.actions$ = actions$;
        this.authService = authService;
        this.router = router;
        this.login$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_user_details__["a" /* LOGIN */])
            .switchMap(function () {
            return _this.authService
                .verify()
                .do(function (details) {
                if (details.loggedIn) {
                    _this.router.navigateByUrl("books");
                }
            })
                .map(function (details) { return new __WEBPACK_IMPORTED_MODULE_4__actions_user_details__["b" /* SetAction */](details); });
        });
    }
    UserEffects.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */] }, { type: __WEBPACK_IMPORTED_MODULE_3__services_auth__["a" /* AuthService */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_router__["g" /* Router */] }]; };
    return UserEffects;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"]) === "function" && _a || Object)
], UserEffects.prototype, "login$", void 0);
var _a;
//# sourceMappingURL=user-effects.js.map

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

//# sourceMappingURL=book-position.js.map

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bookmark; });
var Bookmark = (function () {
    function Bookmark(paragraphIdx, wordIdx, bookId, id) {
        this.paragraphIdx = paragraphIdx;
        this.wordIdx = wordIdx;
        this.bookId = bookId;
        this.id = id;
    }
    return Bookmark;
}());

//# sourceMappingURL=bookmark.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Paragraph; });
var Paragraph = (function () {
    function Paragraph(text, firstIndex, id) {
        this.firstIndex = firstIndex;
        this.text = text
            .split(/\s{1,}/)
            .filter(function (str) { return str != null && str !== "" && str.length > 0 && !str.match(/^\s*$/); });
        this.lastIndex = this.firstIndex + this.text.length - 1;
        this.id = id != null ? id : undefined;
    }
    Object.defineProperty(Paragraph.prototype, "length", {
        get: function () {
            return this.text.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Paragraph.prototype, "textString", {
        get: function () {
            return this.text.join(" ");
        },
        enumerable: true,
        configurable: true
    });
    return Paragraph;
}());

//# sourceMappingURL=paragraph.js.map

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_book_position__ = __webpack_require__(50);
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPosition; });

var initialState = {
    position: { paragraphIdx: 0, wordIdx: 0 }
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_book_position__["SET"]:
            return Object.assign({}, state, { position: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_book_position__["UNLOAD"]:
            return Object.assign({}, state, { position: initialState });
        default:
            return state;
    }
}
var getPosition = function (state) { return state.position; };
//# sourceMappingURL=book-position.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_books__ = __webpack_require__(85);
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBook; });

var initialState = {};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_books__["a" /* LOAD */]:
            return Object.assign({}, state, { book: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_books__["b" /* UNLOAD */]:
            return Object.assign({}, state, { book: undefined });
        default:
            return state;
    }
}
var getBook = function (state) { return state.book; };
//# sourceMappingURL=books.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_reader__ = __webpack_require__(129);
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getRsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getWpm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getPhraseLength; });

var initialState = {
    rsv: false,
    phraseLength: 2,
    play: false,
    wpm: 350
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_reader__["a" /* TOGGLE_RSV */]:
            var newRsvState = !state.rsv;
            return Object.assign({}, state, {
                rsv: newRsvState,
                play: newRsvState ? state.play : false
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_reader__["b" /* TOGGLE_PLAY */]:
            var newPlayState = !state.play;
            return Object.assign({}, state, {
                play: newPlayState,
                rsv: newPlayState ? true : state.rsv
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_reader__["c" /* WPM */]:
            return Object.assign({}, state, { wpm: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_reader__["d" /* PHRASE_LENGTH */]:
            return Object.assign({}, state, { phraseLength: action.payload });
        default:
            return state;
    }
}
var getRsv = function (state) { return state.rsv; };
var getPlay = function (state) { return state.play; };
var getWpm = function (state) { return state.wpm; };
var getPhraseLength = function (state) { return state.phraseLength; };
//# sourceMappingURL=reader.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_user_details__ = __webpack_require__(86);
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getUserEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getUserName; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    loggedIn: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_details__["c" /* SET */]:
            return Object.assign({}, state, __assign({}, action.payload));
        default:
            return state;
    }
}
var getLoggedIn = function (state) { return state.loggedIn; };
var getUserId = function (state) { return state.id; };
var getUserEmail = function (state) { return state.email; };
var getUserName = function (state) { return state.name; };
//# sourceMappingURL=user-details.js.map

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

//# sourceMappingURL=auth-token.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_api_module__ = __webpack_require__(139);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_api_service__ = __webpack_require__(140);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "AuthTokenApi", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_token__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__auth_token__);
/* unused harmony namespace reexport */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__readable_api_service__ = __webpack_require__(141);
/* unused harmony reexport JsonResponse */
/* unused harmony reexport ReadableApi */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__response_envelope__ = __webpack_require__(142);
/* unused harmony reexport makeResponseEnvelope */
/* unused harmony reexport ResponseEnvelope */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_http_config__ = __webpack_require__(52);
/* unused harmony reexport provideRestHttpConfig */
/* unused harmony reexport RestHttpConfig */
/* unused harmony reexport RestHttpConfigArgs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_http_service__ = __webpack_require__(53);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__writable_api_service__ = __webpack_require__(96);
/* unused harmony reexport WritableApi */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browser_utils__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_writable_api_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_rest_http_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksApi; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var BooksApi = (function (_super) {
    __extends(BooksApi, _super);
    function BooksApi(paragraphParserService, rest, authService, tokenService) {
        var _this = _super.call(this, rest, authService, tokenService) || this;
        _this.paragraphParserService = paragraphParserService;
        _this.modelPath = "books";
        return _this;
    }
    BooksApi.prototype.getById = function (id) {
        var _this = this;
        return _super.prototype.getById.call(this, id)
            .map(function (res) {
            var content = _this.paragraphParserService.parse(res["body"]);
            var length = content.reduce(function (sum, paragraph) {
                sum += paragraph.length;
                return sum;
            }, 0);
            return {
                id: res.id,
                title: res.title,
                author: res.author,
                content: content,
                length: length
            };
        });
    };
    BooksApi.prototype.createFromJsonBook = function (json) {
        return this.rest
            .post(this.modelPath, json, undefined, this.options)
            .map(function (res) {
            return res;
        });
    };
    BooksApi.prototype.fromJson = function (res) {
        var content = this.paragraphParserService.parse(res["body"]);
        var length = content.reduce(function (sum, paragraph) {
            sum += paragraph.length;
            return sum;
        }, 0);
        return {
            id: res.id,
            title: res.title,
            author: res.author,
            content: content,
            length: length
        };
    };
    BooksApi.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_4__utils__["b" /* ParagraphParserService */] }, { type: __WEBPACK_IMPORTED_MODULE_3__base_rest_http_service__["a" /* RestHttp */] }, { type: __WEBPACK_IMPORTED_MODULE_0__auth__["a" /* AuthService */] }, { type: __WEBPACK_IMPORTED_MODULE_1__browser_utils__["a" /* AuthTokenService */] }]; };
    return BooksApi;
}(__WEBPACK_IMPORTED_MODULE_2__base_writable_api_service__["a" /* WritableApi */]));

//# sourceMappingURL=books-api.service.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__(146);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_module__ = __webpack_require__(147);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(54);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__auth_service__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SAVED", function() { return LOAD_SAVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET", function() { return SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PARTIAL_TEXT", function() { return SET_PARTIAL_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP", function() { return STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLOAD", function() { return UNLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSavedAction", function() { return LoadSavedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetAction", function() { return SetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPartialTextAction", function() { return SetPartialTextAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnloadAction", function() { return UnloadAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepAction", function() { return StepAction; });
var LOAD_SAVED = "[BOOK_POSITION] Load Saved";
var SET = "[BOOK_POSITION] Set";
var SET_PARTIAL_TEXT = "[BOOK_POSITION] Set Partial Text";
var STEP = "[BOOK_POSITION] Step";
var UNLOAD = "[BOOK_POSITION] Unload";
var LoadSavedAction = (function () {
    function LoadSavedAction(payload) {
        this.payload = payload;
        this.type = LOAD_SAVED;
    }
    return LoadSavedAction;
}());

var SetAction = (function () {
    function SetAction(payload) {
        this.payload = payload;
        this.type = SET;
    }
    return SetAction;
}());

var SetPartialTextAction = (function () {
    function SetPartialTextAction() {
        this.type = SET_PARTIAL_TEXT;
    }
    return SetPartialTextAction;
}());

var UnloadAction = (function () {
    function UnloadAction() {
        this.type = UNLOAD;
    }
    return UnloadAction;
}());

var StepAction = (function () {
    function StepAction(payload) {
        this.payload = payload;
        this.type = STEP;
    }
    return StepAction;
}());

//# sourceMappingURL=book-position.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(137);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["h"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestHttpConfig; });
/* unused harmony export provideRestHttpConfig */
var RestHttpConfig = (function () {
    function RestHttpConfig(config) {
        if (config == null) {
            throw new Error("rest-http.config is invalud");
        }
        this.baseUrl = config.baseUrl;
    }
    return RestHttpConfig;
}());

function provideRestHttpConfig(config) {
    return [{
            provide: RestHttpConfig,
            useValue: config
        }];
}
//# sourceMappingURL=rest-http.config.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_http_config__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestHttp; });
/* unused harmony export getPath */
/* unused harmony export addQueryToOptions */
/* unused harmony export queryToSearchParams */



var RestHttp = (function () {
    function RestHttp(config, http) {
        this.config = config;
        this.http = http;
    }
    Object.defineProperty(RestHttp.prototype, "baseUrl", {
        get: function () {
            return this.config.baseUrl;
        },
        enumerable: true,
        configurable: true
    });
    RestHttp.prototype.request = function (route, options) {
        return this.wrapResponse(this.http.request(this.getPath(route), options));
    };
    RestHttp.prototype.get = function (route, query, options) {
        return this.wrapResponse(this.http.get(this.getPath(route), addQueryToOptions(options, query)));
    };
    RestHttp.prototype.post = function (route, body, query, options) {
        return this.wrapResponse(this.http.post(this.getPath(route), body, addQueryToOptions(options, query)));
    };
    RestHttp.prototype.put = function (route, body, query, options) {
        return this.wrapResponse(this.http.put(this.getPath(route), body, addQueryToOptions(options, query)));
    };
    RestHttp.prototype.patch = function (route, body, query, options) {
        return this.wrapResponse(this.http.patch(this.getPath(route), body, addQueryToOptions(options, query)));
    };
    RestHttp.prototype.delete = function (route, query, options) {
        return this.wrapResponse(this.http.delete(this.getPath(route), addQueryToOptions(options, query)));
    };
    RestHttp.prototype.wrapResponse = function (obs) {
        return obs.map(function (res) {
            try {
                return res.json();
            }
            catch (e) {
                return res.text();
            }
        });
    };
    RestHttp.prototype.getPath = function (route) {
        return getPath(this.baseUrl, route);
    };
    RestHttp.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_2__rest_http_config__["a" /* RestHttpConfig */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_http__["k" /* Http */] }]; };
    return RestHttp;
}());

var ROUTE_TRIM_REGEXP = /^\/*(.*?)\/*$/;
function getPath(baseUrl, route) {
    if (Array.isArray(route)) {
        route = route.join("/");
    }
    else {
        route = String(route);
    }
    route = route.replace(ROUTE_TRIM_REGEXP, "$1");
    return baseUrl + "/" + route;
}
function addQueryToOptions(options, query) {
    if (query == null) {
        return options;
    }
    if (options == null) {
        options = {};
    }
    options.search = queryToSearchParams(query);
    return options;
}
function queryToSearchParams(query) {
    return Object.keys(query)
        .reduce(function (search, key) {
        var value = query[key];
        if (Array.isArray(value)) {
            value.forEach(function (val) { return search.append(key, String(val)); });
        }
        else if (value != null) {
            search.set(key, String(value));
        }
        return search;
    }, new __WEBPACK_IMPORTED_MODULE_0__angular_http__["m" /* URLSearchParams */]());
}
//# sourceMappingURL=rest-http.service.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_user_details__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_auth__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browser_utils__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });




var AuthService = (function () {
    function AuthService(api, tokenService, store) {
        this.api = api;
        this.tokenService = tokenService;
        this.store = store;
        this.initted = false;
    }
    AuthService.prototype.verify = function () {
        var _this = this;
        return this.api
            .verify()
            .do(function (details) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__actions_user_details__["b" /* SetAction */](details));
            _this.initted = true;
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.api
            .get(email, password)
            .map(function (token) {
            if (token == null || token.jwt == null) {
                _this.logout();
                return false;
            }
            _this.tokenService.set(token.jwt);
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__actions_user_details__["d" /* LoginAction */]());
            return true;
        });
    };
    AuthService.prototype.logout = function () {
        this.tokenService.delete();
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__actions_user_details__["e" /* LogoutAction */]());
    };
    AuthService.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_2__api_auth__["AuthTokenApi"] }, { type: __WEBPACK_IMPORTED_MODULE_3__browser_utils__["a" /* AuthTokenService */] }, { type: __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["a" /* Store */] }]; };
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browser_utils_module__ = __webpack_require__(149);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_storage_service__ = __webpack_require__(98);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_token_service__ = __webpack_require__(148);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__auth_token_service__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_module__ = __webpack_require__(150);
/* unused harmony reexport ServicesModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(97);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__api__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(99);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["d"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPositionService; });
var BookPositionService = (function () {
    function BookPositionService() {
    }
    BookPositionService.prototype.stepPosition = function (book, currentPosition, increment) {
        if (increment === void 0) { increment = 1; }
        var currentParagraph = book.content[currentPosition.paragraphIdx];
        var overallWordIdx = currentParagraph.firstIndex + currentPosition.wordIdx;
        var naiveIncrementIdx = overallWordIdx + increment;
        // error for bad increment
        if (!this.isValidIncrement(book, naiveIncrementIdx)) {
            throw new Error("Bad Increment: Outside book bounds!");
        }
        // if new position is still within currentParagraph
        if (this.idxWithinParagraph(currentParagraph, naiveIncrementIdx)) {
            return this.getPosition(currentPosition.paragraphIdx, currentPosition.wordIdx + increment);
        }
        var targetRange, paragraphIncrement, newParagraphIdx;
        if (naiveIncrementIdx > currentParagraph.lastIndex) {
            targetRange = book.content.slice(currentPosition.paragraphIdx + 1);
            paragraphIncrement = this.findParagraphIdxByInnerIdx(naiveIncrementIdx, targetRange);
            newParagraphIdx = currentPosition.paragraphIdx + paragraphIncrement + 1;
        }
        else {
            targetRange = book.content.slice(0, currentPosition.paragraphIdx);
            paragraphIncrement = targetRange.length - this.findParagraphIdxByInnerIdx(naiveIncrementIdx, targetRange) - 1;
            newParagraphIdx = currentPosition.paragraphIdx - paragraphIncrement - 1;
        }
        return this.getPosition(newParagraphIdx, naiveIncrementIdx - book.content[newParagraphIdx].firstIndex);
    };
    BookPositionService.prototype.getCurrentPhrase = function (book, bookPosition, targetLength) {
        if (targetLength === void 0) { targetLength = 1; }
        var currentParagraph = book.content[bookPosition.paragraphIdx];
        if (currentParagraph == null) {
            return book.content[0].text.slice(0, targetLength).join(" ");
        }
        var phrase = currentParagraph.text
            .slice(bookPosition.wordIdx, bookPosition.wordIdx + targetLength);
        if (phrase.length >= targetLength) {
            return phrase.join(" ");
        }
        // it may be necessary to add words from the next paragraph to reach the target phraseLength
        return phrase.concat(book.content[bookPosition.paragraphIdx + 1].text.slice(0, targetLength - phrase.length)).join(" ");
    };
    BookPositionService.prototype.getNewPosition = function () {
        return this.getPosition(0, 0);
    };
    BookPositionService.prototype.getPosition = function (paragraphIdx, wordIdx) {
        return { paragraphIdx: paragraphIdx, wordIdx: wordIdx };
    };
    BookPositionService.prototype.getPartialText = function (book, bookPosition) {
        if (book == null || bookPosition == null) {
            return [];
        }
        var firstParagraph = bookPosition.paragraphIdx - 10 >= 0 ? bookPosition.paragraphIdx - 10 : 0;
        return book.content.slice(firstParagraph, firstParagraph + 50);
    };
    BookPositionService.prototype.isValidIncrement = function (book, targetOverallIdx) {
        return targetOverallIdx >= 0 && targetOverallIdx <= book.content[book.content.length - 1].lastIndex;
    };
    BookPositionService.prototype.findParagraphIdxByInnerIdx = function (targetIdx, targetRange) {
        var _this = this;
        var idx = targetRange.findIndex(function (paragraph) { return _this.idxWithinParagraph(paragraph, targetIdx); });
        if (idx == null) {
            throw new Error("no paragraph contains that index");
        }
        return idx;
    };
    BookPositionService.prototype.binarySearchParagraph = function (targetIdx, paragraphs) {
        if (paragraphs == null || paragraphs.length === 0) {
            throw new Error("Bad Paragraph Search: bad paragraph range given");
        }
        var middleIdx = paragraphs.length / 2, middleParagraph = paragraphs[middleIdx], targetInMiddleParagraph = this.idxWithinParagraph(middleParagraph, targetIdx);
        if (!targetInMiddleParagraph && paragraphs.length === 1) {
            throw new Error("Bad Search: target not in range");
        }
        else if (targetInMiddleParagraph) {
            return middleParagraph;
        }
        else if (targetIdx > middleParagraph.lastIndex) {
            return this.binarySearchParagraph(targetIdx, paragraphs.slice(middleIdx + 1));
        }
        else if (targetIdx < middleParagraph.lastIndex) {
            return this.binarySearchParagraph(targetIdx, paragraphs.slice(0, middleIdx));
        }
    };
    BookPositionService.prototype.idxWithinParagraph = function (paragraph, idx) {
        return idx >= paragraph.firstIndex && idx <= paragraph.lastIndex;
    };
    return BookPositionService;
}());

//# sourceMappingURL=book-position.service.js.map

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(208);


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfiniteScrollService; });
var BUFFER_PADDING = 500, MIN_PADDING = 10, MAX_LOOPS = 5;
var withinLoopLimit = function (newIdx, oldIdx) { return Math.abs(newIdx - oldIdx) <= MAX_LOOPS; };
var InfiniteScrollService = (function () {
    function InfiniteScrollService() {
    }
    InfiniteScrollService.prototype.getChildPositionData = function (elements) {
        var holderEl = window.document.createElement("div");
        window.document.body.appendChild(holderEl);
        var positionDataArr = [];
        var previousSiblingsHeight = 0;
        elements
            .forEach(function (element) {
            holderEl.appendChild(element);
            var height = element.scrollHeight;
            positionDataArr.push({ element: element, height: height, previousSiblingsHeight: previousSiblingsHeight });
            previousSiblingsHeight += height;
        });
        holderEl.remove();
        return positionDataArr;
    };
    InfiniteScrollService.prototype.fillContainer = function (contentContainer, scrollContainer, childPositionData, focusIdx, focusPaddingTop) {
        if (focusIdx === void 0) { focusIdx = 0; }
        if (focusPaddingTop === void 0) { focusPaddingTop = 0; }
        // start with a clean slate
        this.emptyContainer(contentContainer);
        // put in the focused element first
        var focusChild = this.getChildByIdx(childPositionData, focusIdx);
        contentContainer.appendChild(focusChild);
        // add enough children before the focused element fill focusPaddingTop
        var firstChildIdx = focusIdx;
        while (firstChildIdx >= focusIdx - 10) {
            firstChildIdx--;
            contentContainer.insertBefore(this.getChildByIdx(childPositionData, firstChildIdx), this.getChildByIdx(childPositionData, firstChildIdx + 1));
        }
        // add enough children below fill container
        var lastChildIdx = focusIdx;
        while (lastChildIdx <= focusIdx + 10) {
            lastChildIdx++;
            contentContainer.appendChild(this.getChildByIdx(childPositionData, lastChildIdx));
        }
        var topPaddingDiv = window.document.createElement("div");
        topPaddingDiv.style.height = childPositionData[firstChildIdx].previousSiblingsHeight + "px";
        topPaddingDiv.id = "topPaddingDiv";
        contentContainer.insertBefore(topPaddingDiv, this.getChildByIdx(childPositionData, firstChildIdx));
        var bottomPaddingDiv = window.document.createElement("div");
        var bottomPadding = this.getPaddingAfterChild(childPositionData, lastChildIdx);
        bottomPaddingDiv.id = "bottomPaddingDiv";
        bottomPaddingDiv.style.height = bottomPadding + "px";
        contentContainer.appendChild(bottomPaddingDiv);
        // adjust container scroll to match focusPaddingTop
        scrollContainer.scrollTop = focusChild.offsetTop - focusPaddingTop;
        // return the bounds
        return { firstChildIdx: firstChildIdx, lastChildIdx: lastChildIdx };
    };
    InfiniteScrollService.prototype.updateContainerBuffers = function (contentContainer, scrollContainer, childPositionData, focusIdx, bounds) {
        if (focusIdx === void 0) { focusIdx = 0; }
        // // get scroll container top & bottom
        var scrollContainerRect = scrollContainer.getBoundingClientRect(), scrollContainerTop = scrollContainerRect.top, scrollContainerBottom = scrollContainerRect.bottom;
        var newBounds = this.updateBounds(bounds, 0, 0);
        // trim top while necessary
        while (withinLoopLimit(bounds.firstChildIdx, newBounds.firstChildIdx) &&
            this.getChildByIdx(childPositionData, newBounds.firstChildIdx).getBoundingClientRect().bottom < BUFFER_PADDING * -1) {
            console.log("trimming top", this.getChildByIdx(childPositionData, newBounds.firstChildIdx), this.getChildByIdx(childPositionData, newBounds.firstChildIdx).getBoundingClientRect());
            newBounds = this.removeFirstChild(childPositionData, newBounds);
            this.updatePaddingDivs(childPositionData, newBounds);
        }
        // trim bottom while necessary
        while (withinLoopLimit(bounds.lastChildIdx, newBounds.lastChildIdx) &&
            contentContainer.lastElementChild.getBoundingClientRect().top > scrollContainerBottom + BUFFER_PADDING) {
            console.log("trimming bottom");
            newBounds = this.removeLastChild(childPositionData, newBounds);
            this.updatePaddingDivs(childPositionData, newBounds);
        }
        // pad top while necessary
        while (withinLoopLimit(bounds.firstChildIdx, newBounds.firstChildIdx) &&
            newBounds.firstChildIdx > 0 &&
            this.getChildByIdx(childPositionData, newBounds.firstChildIdx).getBoundingClientRect().top > scrollContainerTop - BUFFER_PADDING) {
            console.log("padding top");
            contentContainer.insertBefore(this.getChildByIdx(childPositionData, newBounds.firstChildIdx - 1), this.getChildByIdx(childPositionData, newBounds.firstChildIdx));
            newBounds = this.updateBounds(newBounds, -1, 0);
            this.updatePaddingDivs(childPositionData, newBounds);
        }
        // // pad bottom while necessary
        while (withinLoopLimit(bounds.lastChildIdx, newBounds.lastChildIdx) &&
            newBounds.lastChildIdx < childPositionData.length - 1 &&
            this.getChildByIdx(childPositionData, newBounds.lastChildIdx).getBoundingClientRect().bottom < scrollContainerBottom + BUFFER_PADDING) {
            console.log("padding bottom");
            contentContainer.insertBefore(this.getChildByIdx(childPositionData, [newBounds.lastChildIdx + 1]), window.document.querySelector("#bottomPaddingDiv"));
            newBounds = this.updateBounds(newBounds, 0, 1);
            this.updatePaddingDivs(childPositionData, newBounds);
        }
        return newBounds;
    };
    InfiniteScrollService.prototype.emptyContainer = function (container) {
        while (!!container.children.length) {
            container.firstElementChild.remove();
        }
    };
    InfiniteScrollService.prototype.removeFirstChild = function (childPositionData, bounds) {
        this.getChildByIdx(childPositionData, bounds.firstChildIdx).remove();
        return this.updateBounds(bounds, 1, 0);
    };
    InfiniteScrollService.prototype.removeLastChild = function (childPositionData, bounds) {
        this.getChildByIdx(childPositionData, bounds.lastChildIdx).remove();
        return this.updateBounds(bounds, 0, -1);
    };
    InfiniteScrollService.prototype.updatePaddingDivs = function (childPositionData, bounds) {
        var topPaddingDiv = window.document.querySelector("#topPaddingDiv");
        var bottomPaddingDiv = window.document.querySelector("#bottomPaddingDiv");
        topPaddingDiv.style.height = childPositionData[bounds.firstChildIdx].previousSiblingsHeight + "px";
        bottomPaddingDiv.style.height = this.getPaddingAfterChild(childPositionData, bounds.lastChildIdx);
    };
    InfiniteScrollService.prototype.getPaddingAfterChild = function (children, idx) {
        var lastChild = children[children.length - 1], padding = (lastChild.height + lastChild.previousSiblingsHeight)
            - (children[idx].height + children[idx].previousSiblingsHeight);
        return padding + "px";
    };
    InfiniteScrollService.prototype.getChildByIdx = function (children, idx) {
        return children[idx].element;
    };
    InfiniteScrollService.prototype.updateBounds = function (current, incrementFirst, incrementLast) {
        return {
            firstChildIdx: current.firstChildIdx + incrementFirst,
            lastChildIdx: current.lastChildIdx + incrementLast
        };
    };
    return InfiniteScrollService;
}());

//# sourceMappingURL=infinite-scroll.service.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntervalService; });

var IntervalService = (function () {
    function IntervalService() {
    }
    IntervalService.prototype.getInterval = function (ms) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].interval(ms);
    };
    IntervalService.prototype.getIntervalFromWpm = function (wpm, wordsPerInterval) {
        if (wordsPerInterval === void 0) { wordsPerInterval = 1; }
        if (wpm === 0) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].never();
        }
        return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].interval(60e3 / wpm * wordsPerInterval);
    };
    return IntervalService;
}());

//# sourceMappingURL=interval.service.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GET_ALL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UNLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return WRITE; });
/* unused harmony export GetAllAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GetByIdAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LoadAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return UnloadAction; });
/* unused harmony export WriteAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return WriteFinishAction; });
var GET_ALL = "[BOOK] Get All";
var GET_BY_ID = "[BOOK] Get By Id";
var LOAD = "[BOOK] Load";
var UNLOAD = "[BOOK] Unload";
var WRITE = "[BOOK] Write";
var GetAllAction = (function () {
    function GetAllAction() {
        this.type = GET_ALL;
    }
    return GetAllAction;
}());

var GetByIdAction = (function () {
    function GetByIdAction(payload) {
        this.payload = payload;
        this.type = GET_BY_ID;
    }
    return GetByIdAction;
}());

var LoadAction = (function () {
    function LoadAction(payload) {
        this.payload = payload;
        this.type = LOAD;
    }
    return LoadAction;
}());

var UnloadAction = (function () {
    function UnloadAction() {
        this.type = UNLOAD;
    }
    return UnloadAction;
}());

var WriteAction = (function () {
    function WriteAction(payload) {
        this.payload = payload;
        this.type = WRITE;
    }
    return WriteAction;
}());

var WriteFinishAction = (function () {
    function WriteFinishAction() {
        this.type = WRITE;
    }
    return WriteFinishAction;
}());

//# sourceMappingURL=books.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN; });
/* unused harmony export LOGOUT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LoginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LogoutAction; });
var SET = "[USER] Set";
var LOGIN = "[USER] Login";
var LOGOUT = "[USER] Logout";
var SetAction = (function () {
    function SetAction(payload) {
        this.payload = payload;
        this.type = SET;
    }
    return SetAction;
}());

var LoginAction = (function () {
    function LoginAction() {
        this.type = LOGIN;
    }
    return LoginAction;
}());

var LogoutAction = (function () {
    function LogoutAction() {
        this.type = LOGOUT;
    }
    return LogoutAction;
}());

//# sourceMappingURL=user-details.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParagraphComponent; });
var ParagraphComponent = (function () {
    function ParagraphComponent() {
    }
    Object.defineProperty(ParagraphComponent.prototype, "focused", {
        get: function () {
            if (this.bookPosition == null || this.paragraph == null) {
                return false;
            }
            return this.id === this.bookPosition.paragraphIdx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParagraphComponent.prototype, "id", {
        get: function () {
            return this.paragraph.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParagraphComponent.prototype, "text", {
        get: function () {
            return this.paragraph.textString;
        },
        enumerable: true,
        configurable: true
    });
    return ParagraphComponent;
}());

//# sourceMappingURL=paragraph.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RsvControlsComponent; });


var RsvControlsComponent = (function () {
    function RsvControlsComponent() {
        this.toggleRsv = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* EventEmitter */]();
        this.togglePlay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* EventEmitter */]();
        this.forceStep = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* EventEmitter */]();
        this.wpmChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* EventEmitter */]();
    }
    RsvControlsComponent.prototype.ngAfterViewInit = function () {
        // const nativeInput: HTMLInputElement = this.wpmInput.nativeElement as HTMLInputElement;
        // Observable.fromEvent(nativeInput, "input")
        // 	.debounceTime(300)
        // 	.subscribe(() => {
        // 		this.wpmChange.emit(Number(nativeInput.value));
        // 	});
    };
    RsvControlsComponent.prototype.initWpmInputSubscription = function () {
        var _this = this;
        var nativeInput = this.wpmInput.nativeElement;
        __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].fromEvent(nativeInput, "input")
            .debounceTime(300)
            .subscribe(function () {
            _this.wpmChange.emit(Number(nativeInput.value));
        });
    };
    return RsvControlsComponent;
}());

//# sourceMappingURL=rsv-controls.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_reader__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_books__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_book_position__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailPageComponent; });







var BookDetailPageComponent = (function () {
    function BookDetailPageComponent(route, booksApi, bookPositionService, store) {
        this.route = route;
        this.booksApi = booksApi;
        this.bookPositionService = bookPositionService;
        this.store = store;
        this.rsvEnabled$ = this.store.select(__WEBPACK_IMPORTED_MODULE_1__reducers__["f" /* getRsv */]);
        this.phraseLength$ = this.store.select(__WEBPACK_IMPORTED_MODULE_1__reducers__["e" /* getPhraseLength */]);
        this.book$ = this.store.select(__WEBPACK_IMPORTED_MODULE_1__reducers__["a" /* getBook */]);
        this.bookPosition$ = this.store.select(__WEBPACK_IMPORTED_MODULE_1__reducers__["b" /* getBookPosition */]);
        this.play$ = this.store.select(__WEBPACK_IMPORTED_MODULE_1__reducers__["c" /* getPlay */]);
        this.wpm$ = this.store.select(__WEBPACK_IMPORTED_MODULE_1__reducers__["d" /* getWpm */]);
    }
    BookDetailPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.book$
            .filter(function (book) { return book != null; })
            .take(1)
            .subscribe(function (book) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_book_position__["LoadSavedAction"](book.id));
        });
        this.getBookById();
        this.initBookPositionSubscription();
    };
    BookDetailPageComponent.prototype.ngOnDestroy = function () {
        this.resetBookState();
    };
    BookDetailPageComponent.prototype.forceStep = function (increment) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_book_position__["StepAction"](increment));
    };
    BookDetailPageComponent.prototype.toggleRsv = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_reader__["e" /* ToggleRsvAction */]());
    };
    BookDetailPageComponent.prototype.togglePlay = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_reader__["f" /* TogglePlayAction */]());
    };
    BookDetailPageComponent.prototype.setWpm = function (wpm) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_reader__["g" /* WpmAction */](wpm));
    };
    BookDetailPageComponent.prototype.getBookById = function () {
        var bookId = this.route.snapshot.params.id;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_books__["g" /* GetByIdAction */](bookId));
    };
    BookDetailPageComponent.prototype.initBookPositionSubscription = function () {
        var _this = this;
        return this.bookPosition$
            .withLatestFrom(this.book$, this.phraseLength$)
            .subscribe(function (_a) {
            var bookPosition = _a[0], book = _a[1], phraseLength = _a[2];
            if (bookPosition == null || book == null) {
                return;
            }
            _this.currentPhrase = _this.bookPositionService.getCurrentPhrase(book, bookPosition, phraseLength);
        });
    };
    BookDetailPageComponent.prototype.resetBookState = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_books__["h" /* UnloadAction */]());
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_book_position__["UnloadAction"]());
    };
    BookDetailPageComponent.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_router__["v" /* ActivatedRoute */] }, { type: __WEBPACK_IMPORTED_MODULE_6__services__["a" /* BooksApi */] }, { type: __WEBPACK_IMPORTED_MODULE_6__services__["c" /* BookPositionService */] }, { type: __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */] }]; };
    return BookDetailPageComponent;
}());

//# sourceMappingURL=book-detail-page.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_specialized__ = __webpack_require__(144);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListPageComponent; });


var BookListPageComponent = (function () {
    function BookListPageComponent(booksApi, store) {
        this.booksApi = booksApi;
        this.store = store;
        this.books = [];
    }
    BookListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booksApiSubscription = this.booksApi
            .getByFilter()
            .subscribe(function (books) { return _this.books = books; });
    };
    BookListPageComponent.prototype.ngOnDestroy = function () {
        this.cancelBooksApiSubscription();
    };
    Object.defineProperty(BookListPageComponent.prototype, "noBooks", {
        get: function () {
            return this.books == null || this.books.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    BookListPageComponent.prototype.cancelBooksApiSubscription = function () {
        if (this.booksApiSubscription != null) {
            this.booksApiSubscription.unsubscribe();
            this.booksApiSubscription = null;
        }
    };
    BookListPageComponent.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_1__services_api_specialized__["b" /* BooksApi */] }, { type: __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["a" /* Store */] }]; };
    return BookListPageComponent;
}());

//# sourceMappingURL=book-list-page.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullTextViewComponent; });




var FullTextViewComponent = (function () {
    function FullTextViewComponent(bookPositionService, scrollService, ngZone, elementRef, document) {
        this.bookPositionService = bookPositionService;
        this.scrollService = scrollService;
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.paragraphElements = {};
        this.hasScrolled = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.inputsChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.document = document;
    }
    FullTextViewComponent.prototype.onScroll = function (e) {
        this.hasScrolled.next(e);
    };
    Object.defineProperty(FullTextViewComponent.prototype, "book", {
        get: function () {
            return this._book;
        },
        set: function (val) {
            if (val === this._book) {
                return;
            }
            this._book = val;
            this.inputsChange.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTextViewComponent.prototype, "bookPosition", {
        get: function () {
            return this._bookPosition;
        },
        set: function (val) {
            if (val === this._bookPosition) {
                return;
            }
            this._bookPosition = val;
            this.inputsChange.next();
        },
        enumerable: true,
        configurable: true
    });
    FullTextViewComponent.prototype.ngAfterViewInit = function () {
        this.initContainerContent();
        this.initScrollSubscription();
    };
    FullTextViewComponent.prototype.subscribeToInputs = function () {
        var _this = this;
        this.inputsChange.first().subscribe(function () { return _this.initContainerContent(); });
    };
    FullTextViewComponent.prototype.setParagraphElements = function () {
        if (this.paragraphs == null) {
            return;
        }
        this.paragraphElements = this.paragraphs
            .toArray()
            .reduce(function (obj, paragraph) {
            obj[String(paragraph.id)] = paragraph.innerElementRef.nativeElement;
            return obj;
        }, {});
    };
    FullTextViewComponent.prototype.initScrollSubscription = function () {
        var _this = this;
        this.hasScrolled
            .debounceTime(100)
            .subscribe(function () { return _this.updateContainerContent(); });
    };
    FullTextViewComponent.prototype.initContainerContent = function () {
        this.setParagraphElements();
        if (!Object.keys(this.paragraphElements).length || this.bookPosition == null) {
            this.subscribeToInputs();
            return;
        }
        this.childPositionData =
            this.scrollService.getChildPositionData(this.paragraphs.toArray().map(function (el) { return el.innerElementRef.nativeElement; }));
        this.contentBounds = this.scrollService.fillContainer(this.contentContainer.nativeElement, this.elementRef.nativeElement, this.childPositionData, this.bookPosition.paragraphIdx, 100);
    };
    FullTextViewComponent.prototype.updateContainerContent = function () {
        this.contentBounds = this.scrollService.updateContainerBuffers(this.contentContainer.nativeElement, this.elementRef.nativeElement, this.childPositionData, this.bookPosition.paragraphIdx, this.contentBounds);
    };
    FullTextViewComponent.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_3__services__["c" /* BookPositionService */] }, { type: __WEBPACK_IMPORTED_MODULE_3__services__["d" /* InfiniteScrollService */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* NgZone */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ElementRef */] }, { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DOCUMENT */]] }] }]; };
    return FullTextViewComponent;
}());

//# sourceMappingURL=full-text-view.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });

var LoginPageComponent = (function () {
    function LoginPageComponent(authService) {
        this.authService = authService;
        this.email = "";
        this.password = "";
    }
    LoginPageComponent.prototype.handleEnter = function (event) {
        if (event.key !== "Enter") {
            return;
        }
        event.preventDefault();
        this.submit();
    };
    LoginPageComponent.prototype.submit = function () {
        this.authService
            .login(this.email, this.password)
            .subscribe(function (success) {
            if (success) {
                return;
            }
            console.log("login failed");
        }, function () {
            console.log("login failed");
        });
    };
    LoginPageComponent.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0__services_auth__["a" /* AuthService */] }]; };
    return LoginPageComponent;
}());

//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_api__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewBookPageComponent; });

var NewBookPageComponent = (function () {
    function NewBookPageComponent(api) {
        this.api = api;
        this.book = {
            title: "",
            author: "",
            body: ""
        };
    }
    NewBookPageComponent.prototype.handleEnter = function (event) {
        if (event.key !== "Enter") {
            return;
        }
        event.preventDefault();
        this.submit();
    };
    NewBookPageComponent.prototype.submit = function () {
        this.api.createFromJsonBook(this.book)
            .subscribe(function (success) {
            if (success) {
                return;
            }
            console.log("login failed");
        }, function () {
            console.log("login failed");
        });
    };
    NewBookPageComponent.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0__services_api__["b" /* BooksApi */] }]; };
    return NewBookPageComponent;
}());

//# sourceMappingURL=new-book-page.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_book_position__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RsvViewComponent; });





var RsvViewComponent = (function () {
    function RsvViewComponent(intervalService, store) {
        this.intervalService = intervalService;
        this.store = store;
        this.currentWordIdx = 0;
        this.bookPosition$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["b" /* getBookPosition */]);
        this.play$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["c" /* getPlay */]);
        this.wpm$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["d" /* getWpm */]);
        this.phraseLength$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["e" /* getPhraseLength */]);
    }
    Object.defineProperty(RsvViewComponent.prototype, "phrase", {
        get: function () {
            if (this.word == null) {
                return [];
            }
            if (this.phraseRequiresSplit) {
                var phraseArr = this.word.split(" ");
                return phraseArr.slice(0, phraseArr.length - 1);
            }
            return this.word.split(" ");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RsvViewComponent.prototype, "phraseRequiresSplit", {
        get: function () {
            return this.word.length > 15 && this.word.split(" ").length > 1;
        },
        enumerable: true,
        configurable: true
    });
    RsvViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playSubscription =
            __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"]
                .combineLatest(this.play$, this.wpm$, this.phraseLength$)
                .debounceTime(100)
                .subscribe(function (_a) {
                var play = _a[0], wpm = _a[1], phraseLength = _a[2];
                _this.cancelSubscription(_this.intervalSubscription);
                if (play) {
                    _this.startRsvInterval(wpm, phraseLength);
                }
            });
        this.bookPositionSubscription =
            this.bookPosition$.subscribe(function (position) {
                if (__WEBPACK_IMPORTED_MODULE_3__actions_book_position__ == null || _this.book == null) {
                    return;
                }
                _this.currentWordIdx = _this.book.content[position.paragraphIdx].firstIndex + position.wordIdx;
            });
    };
    RsvViewComponent.prototype.ngOnDestroy = function () {
        this.cancelSubscription(this.intervalSubscription);
        this.cancelSubscription(this.playSubscription);
    };
    RsvViewComponent.prototype.startRsvInterval = function (wpm, phraseLength) {
        var _this = this;
        this.cancelSubscription(this.intervalSubscription);
        this.intervalSubscription =
            this.intervalService
                .getIntervalFromWpm(wpm, phraseLength)
                .subscribe(function () {
                // if the phrase was split, step one fewer words than usual
                _this.phraseRequiresSplit ?
                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_book_position__["StepAction"](phraseLength - 1)) :
                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_book_position__["StepAction"](phraseLength));
            });
    };
    RsvViewComponent.prototype.cancelSubscription = function (sub) {
        if (sub == null) {
            return;
        }
        sub.unsubscribe();
        sub = null;
    };
    RsvViewComponent.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_4__services__["b" /* IntervalService */] }, { type: __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["a" /* Store */] }]; };
    return RsvViewComponent;
}());

//# sourceMappingURL=rsv-view.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__book__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__book__, "Bookmark")) __webpack_require__.d(__webpack_exports__, "Bookmark", function() { return __WEBPACK_IMPORTED_MODULE_0__book__["Bookmark"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__book__, "Paragraph")) __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return __WEBPACK_IMPORTED_MODULE_0__book__["Paragraph"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bookmark__ = __webpack_require__(243);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Bookmark", function() { return __WEBPACK_IMPORTED_MODULE_1__bookmark__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_position__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_position___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__book_position__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__book_position__, "Paragraph")) __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return __WEBPACK_IMPORTED_MODULE_2__book_position__["Paragraph"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paragraph__ = __webpack_require__(244);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return __WEBPACK_IMPORTED_MODULE_3__paragraph__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__user__);
/* unused harmony namespace reexport */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__readable_api_service__ = __webpack_require__(141);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WritableApi; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var WritableApi = (function (_super) {
    __extends(WritableApi, _super);
    function WritableApi(rest, authService, tokenService) {
        var _this = _super.call(this, rest, authService, tokenService) || this;
        _this.rest = rest;
        return _this;
    }
    WritableApi.prototype.create = function (model) {
        return this.rest.post(this.modelPath, model, undefined, this.options).map(function (res) {
            return res;
        });
    };
    WritableApi.prototype.update = function (model) {
        if (model.id == null) {
            throw new Error("Missing id on model, cannot make an update request");
        }
        return this.rest.put([this.modelPath, model.id], model, undefined, this.options).map(function (res) {
            return res;
        });
    };
    return WritableApi;
}(__WEBPACK_IMPORTED_MODULE_0__readable_api_service__["a" /* ReadableApi */]));

//# sourceMappingURL=writable-api.service.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_module__ = __webpack_require__(138);
/* unused harmony reexport ApiModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(252);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__specialized__ = __webpack_require__(144);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__specialized__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__specialized__["b"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });


var LocalStorageService = (function () {
    function LocalStorageService(document) {
        this.localStorage = document.defaultView.localStorage;
    }
    LocalStorageService.prototype.get = function (key) {
        return this.localStorage.getItem(key);
    };
    LocalStorageService.prototype.set = function (key, data) {
        this.localStorage.setItem(key, data);
    };
    LocalStorageService.prototype.remove = function (key) {
        this.localStorage.removeItem(key);
    };
    LocalStorageService.prototype.clear = function () {
        this.localStorage.clear();
    };
    LocalStorageService.ctorParameters = function () { return [{ type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DOCUMENT */]] }] }]; };
    return LocalStorageService;
}());

//# sourceMappingURL=local-storage.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_position_service__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__book_position_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infinite_scroll_service__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__infinite_scroll_service__["a"]; });
/* unused harmony reexport ContentChildrenBounds */
/* unused harmony reexport PositionData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interval_service__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__interval_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paragraph_parser_service__ = __webpack_require__(151);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__paragraph_parser_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_services_module__ = __webpack_require__(152);
/* unused harmony reexport UtilsServicesModule */





//# sourceMappingURL=index.js.map

/***/ })

},[578]);
//# sourceMappingURL=main.bundle.js.map