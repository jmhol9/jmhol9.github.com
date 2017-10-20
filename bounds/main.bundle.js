webpackJsonp([1,4],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOAD_SAVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET; });
/* unused harmony export SET_PARTIAL_TEXT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UNLOAD; });
/* unused harmony export LoadSavedAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SetAction; });
/* unused harmony export SetPartialTextAction */
/* unused harmony export UnloadAction */
/* unused harmony export StepAction */
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

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/book-position.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GET_ALL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return STORE_LOCALLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UNLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return WRITE; });
/* unused harmony export GetAllAction */
/* unused harmony export GetByIdAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LoadAction; });
/* unused harmony export StoreLocallyAction */
/* unused harmony export UnloadAction */
/* unused harmony export WriteAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return WriteFinishAction; });
var GET_ALL = "[BOOK] Get All";
var GET_BY_ID = "[BOOK] Get By Id";
var LOAD = "[BOOK] Load";
var STORE_LOCALLY = "[BOOK] Store Locally";
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

var StoreLocallyAction = (function () {
    function StoreLocallyAction(payload) {
        this.payload = payload;
        this.type = STORE_LOCALLY;
    }
    return StoreLocallyAction;
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

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/books.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_module__ = __webpack_require__(229);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_module__["a"]; });

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_list_page_component__ = __webpack_require__(236);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__book_list_page_component__["a"]; });

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_scanner_component__ = __webpack_require__(237);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__book_scanner_component__["a"]; });

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__homepage_component__ = __webpack_require__(239);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__homepage_component__["a"]; });

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containers_module__ = __webpack_require__(238);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__containers_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_list_page__ = __webpack_require__(127);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__book_list_page__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_scanner__ = __webpack_require__(128);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__book_scanner__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homepage__ = __webpack_require__(129);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__homepage__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_page__ = __webpack_require__(131);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__login_page__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_book_page__ = __webpack_require__(132);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__new_book_page__["a"]; });






//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_page_component__ = __webpack_require__(240);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_page_component__["a"]; });

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__new_book_page_component__ = __webpack_require__(241);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__new_book_page_component__["a"]; });

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interaction_directives_module__ = __webpack_require__(243);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__interaction_directives_module__["a"]; });

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browser_utils__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_rest_http_config__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthTokenApi; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(undefined);
            }
            return res.json();
        });
    };
    return AuthTokenApi;
}());
AuthTokenApi = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__base_rest_http_config__["a" /* RestHttpConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__base_rest_http_config__["a" /* RestHttpConfig */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__browser_utils__["a" /* AuthTokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__browser_utils__["a" /* AuthTokenService */]) === "function" && _c || Object])
], AuthTokenApi);

var _a, _b, _c;
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/auth-api.service.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_api_module__ = __webpack_require__(263);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "AuthApiModule", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_api_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_api_service__ = __webpack_require__(134);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "AuthTokenApi", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_token__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__auth_token__);
/* unused harmony namespace reexport */



//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__response_envelope__ = __webpack_require__(137);
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

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/readable-api.service.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = makeResponseEnvelope;
function makeResponseEnvelope(data, totalRecords) {
    if (totalRecords === void 0) { totalRecords = data.length; }
    return Object.assign(data, { totalRecords: totalRecords });
}
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/response-envelope.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browser_utils__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_rest_http_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_writable_api_service__ = __webpack_require__(87);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






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
                return new __WEBPACK_IMPORTED_MODULE_1__models__["Bookmark"](0, 0);
            }
            return new __WEBPACK_IMPORTED_MODULE_1__models__["Bookmark"](res.paragraphIdx, res.wordIdx, res.id);
        });
    };
    return BookmarksApi;
}(__WEBPACK_IMPORTED_MODULE_5__base_writable_api_service__["a" /* WritableApi */]));
BookmarksApi = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__base_rest_http_service__["a" /* RestHttp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__base_rest_http_service__["a" /* RestHttp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth__["b" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__browser_utils__["a" /* AuthTokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__browser_utils__["a" /* AuthTokenService */]) === "function" && _c || Object])
], BookmarksApi);

var _a, _b, _c;
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/bookmarks-api.service.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__browser_utils__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_writable_api_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_rest_http_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(14);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BooksApi = (function (_super) {
    __extends(BooksApi, _super);
    function BooksApi(paragraphParserService, store, rest, authService, tokenService) {
        var _this = _super.call(this, rest, authService, tokenService) || this;
        _this.paragraphParserService = paragraphParserService;
        _this.store = store;
        _this.modelPath = "books";
        return _this;
    }
    BooksApi.prototype.getById = function (id) {
        var _this = this;
        return _super.prototype.getById.call(this, id)
            .map(function (res) { return _this.fromJson(res, id); });
    };
    BooksApi.prototype.createFromJsonBook = function (json) {
        return this.rest
            .post(this.modelPath, json, undefined, this.options)
            .map(function (res) {
            return res;
        });
    };
    BooksApi.prototype.fromJson = function (res, id) {
        var content = this.paragraphParserService.parse(res["body"] ? res["body"] : res);
        var length = content.reduce(function (sum, paragraph) {
            sum += paragraph.length;
            return sum;
        }, 0);
        return {
            id: id,
            title: res.title,
            author: res.author,
            content: content,
            length: length
        };
    };
    return BooksApi;
}(__WEBPACK_IMPORTED_MODULE_3__base_writable_api_service__["a" /* WritableApi */]));
BooksApi = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__utils__["a" /* ParagraphParserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__utils__["a" /* ParagraphParserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__base_rest_http_service__["a" /* RestHttp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__base_rest_http_service__["a" /* RestHttp */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__auth__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth__["b" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__browser_utils__["a" /* AuthTokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__browser_utils__["a" /* AuthTokenService */]) === "function" && _e || Object])
], BooksApi);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/books-api.service.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_auth_guard__ = __webpack_require__(141);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizedGuard; });
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthorizedGuard = (function (_super) {
    __extends(AuthorizedGuard, _super);
    function AuthorizedGuard(authService, router, store) {
        return _super.call(this, authService, router, store) || this;
    }
    AuthorizedGuard.prototype.handleRedirect = function (loggedIn) {
        if (!loggedIn) {
            this.router.navigateByUrl("/login");
            return;
        }
    };
    AuthorizedGuard.prototype.activate = function (loggedIn) {
        return loggedIn;
    };
    return AuthorizedGuard;
}(__WEBPACK_IMPORTED_MODULE_4__base_auth_guard__["a" /* BaseAuthGuard */]));
AuthorizedGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], AuthorizedGuard);

var _a, _b, _c;
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/authorized.guard.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseAuthGuard; });

var BaseAuthGuard = (function () {
    function BaseAuthGuard(authService, router, store) {
        this.authService = authService;
        this.router = router;
        this.store = store;
    }
    BaseAuthGuard.prototype.canActivate = function () {
        var _this = this;
        if (!this.authService.initted) {
            return this.authService
                .verify()
                .take(1)
                .flatMap(function () { return _this.store.select(__WEBPACK_IMPORTED_MODULE_0__reducers__["b" /* getLoggedIn */]); })
                .do(function (loggedIn) { return _this.handleRedirect(loggedIn); })
                .map(function (loggedIn) { return _this.activate(loggedIn); });
        }
        return this.store
            .select(__WEBPACK_IMPORTED_MODULE_0__reducers__["b" /* getLoggedIn */])
            .do(function (loggedIn) { return _this.handleRedirect(loggedIn); })
            .map(function (loggedIn) { return _this.activate(loggedIn); });
    };
    BaseAuthGuard.prototype.canActivateChild = function () {
        return this.canActivate();
    };
    return BaseAuthGuard;
}());

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/base-auth-guard.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_auth_guard__ = __webpack_require__(141);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthorizedGuard; });
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotAuthorizedGuard = (function (_super) {
    __extends(NotAuthorizedGuard, _super);
    function NotAuthorizedGuard(authService, router, store) {
        return _super.call(this, authService, router, store) || this;
    }
    NotAuthorizedGuard.prototype.handleRedirect = function (loggedIn) {
        if (loggedIn) {
            this.router.navigateByUrl("/books");
        }
    };
    NotAuthorizedGuard.prototype.activate = function (loggedIn) {
        return !loggedIn;
    };
    return NotAuthorizedGuard;
}(__WEBPACK_IMPORTED_MODULE_4__base_auth_guard__["a" /* BaseAuthGuard */]));
NotAuthorizedGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], NotAuthorizedGuard);

var _a, _b, _c;
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/not-authorized.guard.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_storage_service__ = __webpack_require__(66);
/* unused harmony export AUTH_TOKEN_STORAGE_KEY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthTokenService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append("Authorization", this.getHeaderString());
        return { headers: headers };
    };
    AuthTokenService.prototype.getHeaderString = function () {
        return "Bearer " + this.get();
    };
    return AuthTokenService;
}());
AuthTokenService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__local_storage_service__["a" /* LocalStorageService */]) === "function" && _a || Object])
], AuthTokenService);

var _a;
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/auth-token.service.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_storage_service__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BOOK_KEY_PREFIX = "book-id-";
var BOOK_ID_LIST_KEY = "stored-book-ids";
var BookStorageService = (function () {
    function BookStorageService(localStorage) {
        this.localStorage = localStorage;
    }
    BookStorageService.prototype.getById = function (id) {
        var jsonString = this.localStorage.get("" + (BOOK_KEY_PREFIX + String(id)));
        if (jsonString == null) {
            return;
        }
        return JSON.parse(jsonString);
    };
    BookStorageService.prototype.isStored = function (id) {
        return this.getStoredIds().includes(Number(id));
    };
    BookStorageService.prototype.set = function (book) {
        if (this.getById(book.id) != null) {
            return;
        }
        this.localStorage.set("" + (BOOK_KEY_PREFIX + String(book.id)), JSON.stringify(book));
        this.addStoredId(book.id);
    };
    BookStorageService.prototype.clear = function () {
        this.localStorage.clear();
    };
    BookStorageService.prototype.getStoredIds = function () {
        var storedIds = this.localStorage.get(BOOK_ID_LIST_KEY);
        if (storedIds == null) {
            this.localStorage.set(BOOK_ID_LIST_KEY, JSON.stringify([]));
            return [];
        }
        return JSON.parse(storedIds).map(Number);
    };
    BookStorageService.prototype.addStoredId = function (id) {
        id = Number(id);
        var storedIds = this.getStoredIds();
        if (storedIds.includes(id)) {
            return;
        }
        storedIds.push(id);
        this.localStorage.set(BOOK_ID_LIST_KEY, JSON.stringify(storedIds));
    };
    return BookStorageService;
}());
BookStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__local_storage_service__["a" /* LocalStorageService */]) === "function" && _a || Object])
], BookStorageService);

var _a;
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/book-storage.service.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HeaderService = (function () {
    function HeaderService() {
        this.defaultLink = undefined;
        this.link = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](this.defaultLink);
    }
    HeaderService.prototype.setLink = function (link) {
        this.link.next(link);
    };
    return HeaderService;
}());
HeaderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], HeaderService);

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/header.service.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPositionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
BookPositionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], BookPositionService);

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/book-position.service.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfiniteScrollService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BUFFER_PADDING = 5000, MIN_PADDING = 10, MAX_LOOPS = 5;
var withinLoopLimit = function (newIdx, oldIdx) { return Math.abs(newIdx - oldIdx) <= MAX_LOOPS; };
var InfiniteScrollService = (function () {
    function InfiniteScrollService() {
    }
    InfiniteScrollService.prototype.getChildPositionData = function (paragraphMap) {
        var holderEl = window.document.createElement("div");
        window.document.body.appendChild(holderEl);
        var previousSiblingsHeight = 0;
        var positionDataMap = Object.keys(paragraphMap)
            .reduce(function (map, key) {
            // grab reference to next element
            var element = paragraphMap[key];
            // append to holder div so that height is calculable
            holderEl.appendChild(element);
            var height = element.scrollHeight;
            // increment previousSibling height
            previousSiblingsHeight += height;
            map[key] = { element: element, height: height, previousSiblingsHeight: previousSiblingsHeight };
            return map;
        }, {});
        // clean up temp
        holderEl.remove();
        return positionDataMap;
    };
    InfiniteScrollService.prototype.updatePreviouSiblingHeights = function (positionDataMap) {
        var previousSiblingsHeight = 0;
        return Object.keys(positionDataMap)
            .sort(function (a, b) { return Number(a) - Number(b); })
            .reduce(function (map, key) {
            // create new entry
            map[key] = Object.assign({}, positionDataMap[key], { previousSiblingsHeight: previousSiblingsHeight });
            // increment previousSiblingHeight
            previousSiblingsHeight += positionDataMap[key].height;
            return map;
        }, {});
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
        while (childPositionData[firstChildIdx - 1] != null && firstChildIdx >= focusIdx - 10) {
            firstChildIdx--;
            contentContainer.insertBefore(this.getChildByIdx(childPositionData, firstChildIdx), this.getChildByIdx(childPositionData, firstChildIdx + 1));
        }
        // add enough children below fill container
        var lastChildIdx = focusIdx;
        while (childPositionData[lastChildIdx + 1] != null && lastChildIdx <= focusIdx + 10) {
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
        // get scroll container top & bottom
        var scrollContainerRect = scrollContainer.getBoundingClientRect(), scrollContainerTop = scrollContainerRect.top, scrollContainerBottom = scrollContainerRect.bottom;
        var newBounds = this.updateBounds(bounds, 0, 0);
        // trim top while necessary
        while (withinLoopLimit(bounds.firstChildIdx, newBounds.firstChildIdx) &&
            this.getChildByIdx(childPositionData, newBounds.firstChildIdx).getBoundingClientRect().bottom < BUFFER_PADDING * -1) {
            console.log("trimming top");
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
        while (childPositionData[newBounds.firstChildIdx - 1] != null &&
            newBounds.firstChildIdx > 0 &&
            this.getChildByIdx(childPositionData, newBounds.firstChildIdx).getBoundingClientRect().top > scrollContainerTop - BUFFER_PADDING) {
            console.log("padding top");
            contentContainer.insertBefore(this.getChildByIdx(childPositionData, newBounds.firstChildIdx - 1), this.getChildByIdx(childPositionData, newBounds.firstChildIdx));
            newBounds = this.updateBounds(newBounds, -1, 0);
            this.updatePaddingDivs(childPositionData, newBounds);
        }
        // pad bottom while necessary
        while (childPositionData[newBounds.lastChildIdx + 1] != null &&
            newBounds.lastChildIdx < Object.keys(childPositionData).length - 1 &&
            this.getChildByIdx(childPositionData, newBounds.lastChildIdx).getBoundingClientRect().bottom < scrollContainerBottom + BUFFER_PADDING) {
            console.log("padding bottom");
            contentContainer.insertBefore(this.getChildByIdx(childPositionData, [newBounds.lastChildIdx + 1]), window.document.querySelector("#bottomPaddingDiv"));
            newBounds = this.updateBounds(newBounds, 0, 1);
            this.updatePaddingDivs(childPositionData, newBounds);
        }
        return newBounds;
    };
    InfiniteScrollService.prototype.updatePaddingDivs = function (childPositionData, bounds) {
        var topPaddingDiv = window.document.querySelector("#topPaddingDiv");
        var bottomPaddingDiv = window.document.querySelector("#bottomPaddingDiv");
        topPaddingDiv.style.height = childPositionData[bounds.firstChildIdx].previousSiblingsHeight + "px";
        bottomPaddingDiv.style.height = this.getPaddingAfterChild(childPositionData, bounds.lastChildIdx);
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
    InfiniteScrollService.prototype.getPaddingAfterChild = function (children, targetIdx) {
        var targetChild = children[targetIdx], lastChild = this.getLastChild(children), padding = this.getTotalChildrenHeight(children) - this.getBottomHeight(targetChild);
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
    InfiniteScrollService.prototype.getTotalChildrenHeight = function (children) {
        var lastChild = this.getLastChild(children);
        return lastChild.height + lastChild.previousSiblingsHeight;
    };
    InfiniteScrollService.prototype.getLastChild = function (children) {
        var lastIdx = Math.max.apply(Math, Object.keys(children).map(Number));
        return children[lastIdx];
    };
    InfiniteScrollService.prototype.getBottomHeight = function (child) {
        return child.height + child.previousSiblingsHeight;
    };
    return InfiniteScrollService;
}());
InfiniteScrollService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], InfiniteScrollService);

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/infinite-scroll.service.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntervalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var IntervalService = (function () {
    function IntervalService() {
    }
    IntervalService.prototype.getInterval = function (ms) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].interval(ms);
    };
    IntervalService.prototype.getIntervalFromWpm = function (wpm, wordsPerInterval) {
        if (wordsPerInterval === void 0) { wordsPerInterval = 1; }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].interval(60e3 / wpm * wordsPerInterval);
    };
    return IntervalService;
}());
IntervalService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], IntervalService);

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/interval.service.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParagraphParserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


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
        return new __WEBPACK_IMPORTED_MODULE_1__models__["Paragraph"](paragraphText, firstIndex, idx);
    };
    return ParagraphParserService;
}());
ParagraphParserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], ParagraphParserService);

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/paragraph-parser.service.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/environment.js.map

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 210;


/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(228);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UNSET; });
/* unused harmony export SetAction */
/* unused harmony export UnsetAction */
var SET = "[POSITION_DATA] Set";
var UNSET = "[POSITION_DATA] Unset";
var SetAction = (function () {
    function SetAction(payload) {
        this.payload = payload;
        this.type = SET;
    }
    return SetAction;
}());

var UnsetAction = (function () {
    function UnsetAction() {
        this.type = UNSET;
    }
    return UnsetAction;
}());

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/position-data.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resolvers__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: "books",
        children: [{
                path: "new",
                component: __WEBPACK_IMPORTED_MODULE_4__containers__["b" /* NewBookPageComponent */],
            }, {
                path: ":id",
                component: __WEBPACK_IMPORTED_MODULE_4__containers__["c" /* BookScannerComponent */],
                resolve: {
                    book: __WEBPACK_IMPORTED_MODULE_3__resolvers__["a" /* BookResolver */],
                    bookPosition: __WEBPACK_IMPORTED_MODULE_3__resolvers__["b" /* BookPositionResolver */]
                }
            }, {
                path: "",
                pathMatch: "full",
                component: __WEBPACK_IMPORTED_MODULE_4__containers__["d" /* BookListPageComponent */]
            }],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth__["c" /* AuthorizedGuard */]],
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_2__services_auth__["c" /* AuthorizedGuard */]]
    },
    {
        path: "login",
        component: __WEBPACK_IMPORTED_MODULE_4__containers__["e" /* LoginPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth__["d" /* NotAuthorizedGuard */]]
    },
    {
        path: "",
        pathMatch: "full",
        component: __WEBPACK_IMPORTED_MODULE_4__containers__["f" /* HomepageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth__["d" /* NotAuthorizedGuard */]]
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
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, {
                useHash: true,
                enableTracing: false
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__resolvers__["b" /* BookPositionResolver */],
            __WEBPACK_IMPORTED_MODULE_3__resolvers__["a" /* BookResolver */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/app-routing.module.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: "app-root",
        template: __webpack_require__(340),
    })
], AppComponent);

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/app.component.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducers__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__effects__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__containers__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_api__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_11__containers__["a" /* ContainersModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12__services__["a" /* ServicesModule */],
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["a" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_6__reducers__["a" /* reducer */]),
            __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_7__effects__["a" /* BookEffects */]),
            __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_7__effects__["b" /* BookPositionEffects */]),
            __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_7__effects__["c" /* UserEffects */])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
        ],
        providers: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__services_api__["a" /* provideRestHttpConfig */])({
                baseUrl: "http://bounds-api.herokuapp.com"
            }),
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* LOCALE_ID */], useValue: "en-US" }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/app.module.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_interactions__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scanner_paragraph__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scanner_word__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_ui__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_4__header__["a" /* HeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_5__scanner_paragraph__["a" /* ScannerParagraphComponent */],
    __WEBPACK_IMPORTED_MODULE_6__scanner_word__["a" /* ScannerWordComponent */]
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__directives_interactions__["a" /* InteractionDirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__services_ui__["a" /* UiServicesModule */]
        ],
        declarations: DIRECTIVES,
        exports: DIRECTIVES
    })
], ComponentsModule);

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/components.module.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ui__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(headerService) {
        this.headerService = headerService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headerService.link.subscribe(function (link) { return _this.link = link; });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: __webpack_require__(341),
        selector: "app-header"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_ui__["b" /* HeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_ui__["b" /* HeaderService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/header.component.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__(230);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__header_component__["a"]; });

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scanner_paragraph_component__ = __webpack_require__(233);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__scanner_paragraph_component__["a"]; });

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_reader__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerParagraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScannerParagraphComponent = (function () {
    function ScannerParagraphComponent(elementRef, store) {
        var _this = this;
        this.elementRef = elementRef;
        this.store = store;
        this.hostClass = true;
        this.documentElement = document.documentElement;
        this.documentBody = document.body;
        this.hasScrolled = false;
        this.store.select(__WEBPACK_IMPORTED_MODULE_1__reducers__["e" /* getPlay */]).subscribe(function (val) { return _this.playing = val; });
    }
    Object.defineProperty(ScannerParagraphComponent.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (val) {
            if (val === this._selected) {
                return;
            }
            if (val) {
                this.hasScrolled = false;
                this.scrollIntoView();
            }
            this._selected = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Only runs when selected is INITIALLY set to true
     * Sets scroll depth so that selected paragraph is in view
     *
     * @private
     * @memberof ScannerParagraphComponent
     */
    ScannerParagraphComponent.prototype.scrollIntoView = function () {
        var htmlElement = this.elementRef.nativeElement;
        var overflowBottom = (htmlElement.offsetTop + htmlElement.getBoundingClientRect().height) - (window.scrollY + window.innerHeight);
        var overflowTop = window.scrollY - htmlElement.offsetTop;
        var restartAfterScroll = this.playing;
        if (overflowBottom > 0 || overflowTop > 0) {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_reader__["i" /* StopPlayAction */]());
            this.smoothScroll(overflowTop, restartAfterScroll);
            return;
        }
    };
    ScannerParagraphComponent.prototype.smoothScroll = function (pixels, restartAfterScroll) {
        var _this = this;
        if (this.hasScrolled) {
            return;
        }
        this.documentElement.scrollTop -= pixels * 0.1;
        this.documentBody.scrollTop -= pixels * 0.1;
        if (Math.abs(pixels) < 5) {
            this.hasScrolled = true;
            return restartAfterScroll ? this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_reader__["j" /* StartPlayAction */]()) : undefined;
        }
        requestAnimationFrame(function () { return _this.smoothScroll(pixels * 0.9, restartAfterScroll); });
    };
    return ScannerParagraphComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__models__["Paragraph"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__models__["Paragraph"]) === "function" && _a || Object)
], ScannerParagraphComponent.prototype, "paragraph", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__models__["BookPosition"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__models__["BookPosition"]) === "function" && _b || Object)
], ScannerParagraphComponent.prototype, "currentPosition", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], ScannerParagraphComponent.prototype, "id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], ScannerParagraphComponent.prototype, "percent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostBinding */])("class.paragraph"),
    __metadata("design:type", Boolean)
], ScannerParagraphComponent.prototype, "hostClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ScannerParagraphComponent.prototype, "selected", null);
ScannerParagraphComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: "app-scanner-paragraph",
        template: __webpack_require__(342)
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _d || Object])
], ScannerParagraphComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/scanner-paragraph.component.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scanner_word_component__ = __webpack_require__(235);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__scanner_word_component__["a"]; });

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerWordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScannerWordComponent = (function () {
    function ScannerWordComponent() {
        this.hostClass = true;
        this.selected = false;
    }
    return ScannerWordComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ScannerWordComponent.prototype, "word", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostBinding */])("class.word"),
    __metadata("design:type", Boolean)
], ScannerWordComponent.prototype, "hostClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostBinding */])("class.word--selected"),
    __metadata("design:type", Boolean)
], ScannerWordComponent.prototype, "selected", void 0);
ScannerWordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ChangeDetectionStrategy */].OnPush,
        selector: "app-scanner-word",
        template: "<span>{{ word + \" \" }}</span>"
    })
], ScannerWordComponent);

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/scanner-word.component.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_reader__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_specialized__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ui__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookListPageComponent = (function () {
    function BookListPageComponent(booksApi, store, headerService) {
        this.booksApi = booksApi;
        this.store = store;
        this.headerService = headerService;
        this.books = [];
        this.wpm$ = this.store.select(__WEBPACK_IMPORTED_MODULE_1__reducers__["f" /* getWpm */]);
    }
    BookListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booksApiSubscription = this.booksApi
            .getByFilter()
            .subscribe(function (books) { return _this.books = books; });
        this.setHeaderLink();
    };
    BookListPageComponent.prototype.ngOnDestroy = function () {
        this.cancelBooksApiSubscription();
    };
    BookListPageComponent.prototype.setWpm = function (wpm) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_reader__["h" /* WpmAction */](wpm));
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
    BookListPageComponent.prototype.setHeaderLink = function () {
        this.headerService.link.next({ url: "/books/new", text: "Add Book" });
    };
    return BookListPageComponent;
}());
BookListPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: "app-book-list",
        template: __webpack_require__(343)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_api_specialized__["c" /* BooksApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_api_specialized__["c" /* BooksApi */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_ui__["b" /* HeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_ui__["b" /* HeaderService */]) === "function" && _c || Object])
], BookListPageComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/book-list-page.component.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_reader__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookScannerComponent; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookScannerComponent = (function () {
    function BookScannerComponent(route, bookmarksApi, bookPositionService, intervalService, store) {
        var _this = this;
        this.route = route;
        this.bookmarksApi = bookmarksApi;
        this.bookPositionService = bookPositionService;
        this.intervalService = intervalService;
        this.store = store;
        this.play$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["e" /* getPlay */]);
        this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["f" /* getWpm */])
            .subscribe(function (val) { return _this.wpm = val; });
    }
    BookScannerComponent.prototype.onClick = function () {
        this.togglePlay();
    };
    BookScannerComponent.prototype.ngOnInit = function () {
        this.getBookById();
        this.initKeyBindings();
        this.initPlaySubscription();
    };
    BookScannerComponent.prototype.ngOnDestroy = function () {
        this.cancelIntervalSubscription();
        this.cancelPlaySubscription();
    };
    BookScannerComponent.prototype.togglePlay = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_reader__["g" /* TogglePlayAction */]());
    };
    BookScannerComponent.prototype.stepBookPosition = function (words) {
        if (words === void 0) { words = 1; }
        this.bookPosition = this.bookPositionService.stepPosition(this.book, this.bookPosition, words);
        this.saveBookmark();
        this.setContent();
    };
    BookScannerComponent.prototype.saveBookmark = function () {
        if (this.bookPosition.wordIdx === 0) {
            this.bookmarksApi
                .create(__assign({}, this.bookPosition, { bookId: this.book.id }))
                .subscribe(function (res) { return undefined; });
        }
    };
    BookScannerComponent.prototype.getBookById = function () {
        var _this = this;
        this.route.data.subscribe(function (_a) {
            var book = _a.book, bookPosition = _a.bookPosition;
            _this.book = book;
            _this.bookPosition = bookPosition;
            _this.setContent();
        });
    };
    BookScannerComponent.prototype.setContent = function () {
        if (this.content == null) {
            this.initContent();
            return;
        }
        this.appendContent();
    };
    BookScannerComponent.prototype.initContent = function () {
        var contentRangeStart = this.bookPosition.paragraphIdx - 10 > 0 ? this.bookPosition.paragraphIdx - 10 : 0;
        this.content = this.book.content.slice(contentRangeStart, this.bookPosition.paragraphIdx + 100);
    };
    BookScannerComponent.prototype.appendContent = function () {
        var lastParagraphId = this.content[this.content.length - 1].id;
        if (this.bookPosition.paragraphIdx + 20 > this.content[this.content.length - 1].id) {
            var additionalContent = this.book.content.slice(lastParagraphId + 1, lastParagraphId + 101);
            this.content = this.content.concat(additionalContent);
        }
    };
    BookScannerComponent.prototype.initKeyBindings = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].fromEvent(window.document, "keypress")
            .subscribe(function (e) {
            if (e.code !== "Space") {
                return;
            }
            e.preventDefault();
            _this.togglePlay();
        });
        __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].fromEvent(window.document, "keydown")
            .subscribe(function (e) {
            if (e.code === "ArrowLeft") {
                _this.stepBookPosition(-20);
            }
        });
        __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].fromEvent(window.document, "keydown")
            .subscribe(function (e) {
            if (e.code === "ArrowRight") {
                _this.stepBookPosition(20);
            }
        });
    };
    BookScannerComponent.prototype.initPlaySubscription = function () {
        var _this = this;
        this.cancelPlaySubscription();
        this.playSubscription = this.play$
            .subscribe(function (playing) {
            if (playing) {
                _this.startRsvInterval();
                return;
            }
            _this.cancelIntervalSubscription();
        });
    };
    BookScannerComponent.prototype.cancelPlaySubscription = function () {
        if (this.playSubscription != null) {
            this.playSubscription.unsubscribe();
            this.playSubscription = undefined;
        }
    };
    BookScannerComponent.prototype.startRsvInterval = function () {
        var _this = this;
        this.cancelIntervalSubscription();
        this.intervalSubscription = this.intervalService.getIntervalFromWpm(this.wpm)
            .subscribe(function () { return _this.stepBookPosition(); });
    };
    BookScannerComponent.prototype.cancelIntervalSubscription = function () {
        if (this.intervalSubscription != null) {
            this.intervalSubscription.unsubscribe();
            this.intervalSubscription = undefined;
        }
    };
    return BookScannerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostListener */])("click"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookScannerComponent.prototype, "onClick", null);
BookScannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: __webpack_require__(344),
        selector: "app-book-scanner"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services__["e" /* BookmarksApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services__["e" /* BookmarksApi */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services__["f" /* BookPositionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services__["f" /* BookPositionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services__["g" /* IntervalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services__["g" /* IntervalService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _e || Object])
], BookScannerComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/book-scanner.component.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_interactions__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_ui__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_scanner__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__book_list_page__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__homepage__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_page__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__new_book_page__ = __webpack_require__(132);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_8__book_list_page__["a" /* BookListPageComponent */],
    __WEBPACK_IMPORTED_MODULE_7__book_scanner__["a" /* BookScannerComponent */],
    __WEBPACK_IMPORTED_MODULE_9__homepage__["a" /* HomepageComponent */],
    __WEBPACK_IMPORTED_MODULE_10__login_page__["a" /* LoginPageComponent */],
    __WEBPACK_IMPORTED_MODULE_11__new_book_page__["a" /* NewBookPageComponent */]
];
var ContainersModule = (function () {
    function ContainersModule() {
    }
    return ContainersModule;
}());
ContainersModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__directives_interactions__["a" /* InteractionDirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__services_ui__["a" /* UiServicesModule */]
        ],
        declarations: DIRECTIVES,
        exports: DIRECTIVES
    })
], ContainersModule);

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/containers.module.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ui__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomepageComponent = (function () {
    function HomepageComponent(headerService) {
        this.headerService = headerService;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.headerService.setLink({ url: "/login", text: "Sign In" });
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: __webpack_require__(345),
        selector: "app-homepage"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_ui__["b" /* HeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_ui__["b" /* HeaderService */]) === "function" && _a || Object])
], HomepageComponent);

var _a;
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/homepage.component.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ui__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPageComponent = (function () {
    function LoginPageComponent(authService, headerService) {
        this.authService = authService;
        this.headerService = headerService;
        this.email = "";
        this.password = "";
        this.loginError = false;
    }
    LoginPageComponent.prototype.handleEnter = function (event) {
        if (event.key !== "Enter") {
            return;
        }
        event.preventDefault();
        this.submit();
    };
    LoginPageComponent.prototype.ngOnInit = function () {
        this.headerService.setLink({ url: "/", text: "Home" });
    };
    LoginPageComponent.prototype.submit = function () {
        var _this = this;
        this.authService
            .login(this.email, this.password)
            .subscribe(function (success) {
            if (success) {
                return;
            }
            _this.loginError = false;
        }, function () {
            _this.loginError = true;
            setTimeout(function () { return _this.loginError = false; }, 1000);
        });
    };
    return LoginPageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostListener */])("document:keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LoginPageComponent.prototype, "handleEnter", null);
LoginPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: "app-login-page",
        template: __webpack_require__(346)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth__["b" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_ui__["b" /* HeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_ui__["b" /* HeaderService */]) === "function" && _b || Object])
], LoginPageComponent);

var _a, _b;
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/login-page.component.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ui__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewBookPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewBookPageComponent = (function () {
    function NewBookPageComponent(api, headerService) {
        this.api = api;
        this.headerService = headerService;
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
    NewBookPageComponent.prototype.ngOnInit = function () {
        this.setHeaderLink();
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
    NewBookPageComponent.prototype.setHeaderLink = function () {
        this.headerService.link.next({ url: "/books", text: "All Books" });
    };
    return NewBookPageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostListener */])("document:keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NewBookPageComponent.prototype, "handleEnter", null);
NewBookPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        template: __webpack_require__(347)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api__["c" /* BooksApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api__["c" /* BooksApi */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_ui__["b" /* HeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_ui__["b" /* HeaderService */]) === "function" && _b || Object])
], NewBookPageComponent);

var _a, _b;
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/new-book-page.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractedClassDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DEFAULT_CLASS_TIMEOUT = 150;
var InteractedClassDirective = (function () {
    function InteractedClassDirective(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.classTimeout = DEFAULT_CLASS_TIMEOUT;
    }
    InteractedClassDirective.prototype.onInteract = function () {
        this.setInteractedClass();
    };
    InteractedClassDirective.prototype.setInteractedClass = function () {
        var _this = this;
        if (this.appInteractedClass == null) {
            return;
        }
        this.renderer.addClass(this.elementRef.nativeElement, this.appInteractedClass);
        setTimeout(function () { return _this.removeInteractedClass(); }, this.classTimeout);
    };
    InteractedClassDirective.prototype.removeInteractedClass = function () {
        this.renderer.removeClass(this.elementRef.nativeElement, this.appInteractedClass);
    };
    return InteractedClassDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], InteractedClassDirective.prototype, "appInteractedClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], InteractedClassDirective.prototype, "classTimeout", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostListener */])("mousedown"),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostListener */])("touchstart"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InteractedClassDirective.prototype, "onInteract", null);
InteractedClassDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: "[appInteractedClass]"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer2 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object])
], InteractedClassDirective);

var _a, _b;
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/interacted-class.directive.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interacted_class_directive__ = __webpack_require__(242);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionDirectivesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var InteractionDirectivesModule = (function () {
    function InteractionDirectivesModule() {
    }
    return InteractionDirectivesModule;
}());
InteractionDirectivesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__interacted_class_directive__["a" /* InteractedClassDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__interacted_class_directive__["a" /* InteractedClassDirective */]]
    })
], InteractionDirectivesModule);

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/interaction-directives.module.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_utils__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_api__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_book_position__ = __webpack_require__(124);
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
            .ofType(__WEBPACK_IMPORTED_MODULE_8__actions_book_position__["c" /* LOAD_SAVED */])
            .map(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (id) {
            if (id == null) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].empty();
            }
            var nextGetById$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_8__actions_book_position__["c" /* LOAD_SAVED */]).skip(1);
            return _this.bookmarksApi
                .getById(id)
                .takeUntil(nextGetById$)
                .map(function (bookmark) {
                return new __WEBPACK_IMPORTED_MODULE_8__actions_book_position__["d" /* SetAction */]({
                    paragraphIdx: bookmark.paragraphIdx,
                    wordIdx: bookmark.wordIdx
                });
            });
        });
        this.book$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["c" /* getBook */]);
        this.bookPosition$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers__["d" /* getBookPosition */]);
        this.step = this.getStepEffect();
        this.save = this.getSaveEffect();
    }
    BookPositionEffects.prototype.getSaveEffect = function () {
        var _this = this;
        return this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_8__actions_book_position__["a" /* SET */])
            .map(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* toPayload */])
            .distinct(function (bookPosition) { return bookPosition.paragraphIdx; })
            .withLatestFrom(this.book$)
            .flatMap(function (_a) {
            var bookPosition = _a[0], book = _a[1];
            if (book == null || bookPosition.paragraphIdx == null || bookPosition.wordIdx == null) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].empty();
            }
            return _this.bookmarksApi.create(new __WEBPACK_IMPORTED_MODULE_5__models__["Bookmark"](bookPosition.paragraphIdx, 0, book.id));
        });
    };
    BookPositionEffects.prototype.getStepEffect = function () {
        var _this = this;
        return this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_8__actions_book_position__["e" /* STEP */])
            .map(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* toPayload */])
            .withLatestFrom(this.book$, this.bookPosition$)
            .flatMap(function (_a) {
            var step = _a[0], book = _a[1], currentPosition = _a[2];
            if (step == null || currentPosition == null || book == null) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].empty();
            }
            var nextPosition = _this.bookPositionService.stepPosition(book, currentPosition, step);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_8__actions_book_position__["d" /* SetAction */](nextPosition));
        });
    };
    return BookPositionEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"]) === "function" && _a || Object)
], BookPositionEffects.prototype, "save", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"]) === "function" && _b || Object)
], BookPositionEffects.prototype, "step", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"]) === "function" && _c || Object)
], BookPositionEffects.prototype, "loadSavedPosition", void 0);
BookPositionEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_api__["b" /* BookmarksApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_api__["b" /* BookmarksApi */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_utils__["b" /* BookPositionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_utils__["b" /* BookPositionService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _g || Object])
], BookPositionEffects);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/book-position.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_books__ = __webpack_require__(125);
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
    function BookEffects(actions$, booksApi, bookStorage, paragraphParserService) {
        var _this = this;
        this.actions$ = actions$;
        this.booksApi = booksApi;
        this.bookStorage = bookStorage;
        this.paragraphParserService = paragraphParserService;
        this.getById$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_4__actions_books__["c" /* GET_BY_ID */])
            .map(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (id) {
            if (id == null) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].empty();
            }
            if (_this.bookStorage.isStored(id)) {
                var jsonBook = _this.bookStorage.getById(id);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_4__actions_books__["d" /* LoadAction */](_this.fromJson(jsonBook)));
            }
            var nextGetById$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_4__actions_books__["c" /* GET_BY_ID */]).skip(1);
            return _this.booksApi
                .getById(id)
                .takeUntil(nextGetById$)
                .map(function (book) { return new __WEBPACK_IMPORTED_MODULE_4__actions_books__["d" /* LoadAction */](book); });
        });
        this.write$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_4__actions_books__["e" /* WRITE */])
            .map(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (jsonBook) {
            if (jsonBook == null) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].empty();
            }
            var nextWrite$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_4__actions_books__["e" /* WRITE */]).skip(1);
            return _this.booksApi
                .createFromJsonBook(jsonBook)
                .takeUntil(nextWrite$)
                .map(function () { return new __WEBPACK_IMPORTED_MODULE_4__actions_books__["f" /* WriteFinishAction */](); });
        });
        this.storeLocally$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_4__actions_books__["g" /* STORE_LOCALLY */])
            .map(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* toPayload */])
            .do(function (payload) {
            _this.bookStorage.set(payload.json);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].empty();
        });
    }
    BookEffects.prototype.fromJson = function (json) {
        var content = this.paragraphParserService.parse(json.body);
        var length = content.reduce(function (sum, paragraph) {
            sum += paragraph.length;
            return sum;
        }, 0);
        return {
            id: json.id,
            title: json.title,
            author: json.author,
            content: content,
            length: length
        };
    };
    return BookEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"]) === "function" && _a || Object)
], BookEffects.prototype, "getById$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"]) === "function" && _b || Object)
], BookEffects.prototype, "write$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"]) === "function" && _c || Object)
], BookEffects.prototype, "storeLocally$", void 0);
BookEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services__["b" /* BooksApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["b" /* BooksApi */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services__["c" /* BookStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["c" /* BookStorageService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services__["d" /* ParagraphParserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["d" /* ParagraphParserService */]) === "function" && _g || Object])
], BookEffects);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/books.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__books__ = __webpack_require__(245);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__books__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_position__ = __webpack_require__(244);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__book_position__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_effects__ = __webpack_require__(247);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__user_effects__["a"]; });



//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_user_details__ = __webpack_require__(85);
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
            .ofType(__WEBPACK_IMPORTED_MODULE_5__actions_user_details__["e" /* LOGIN */])
            .switchMap(function () {
            return _this.authService
                .verify()
                .do(function (details) {
                if (details.loggedIn) {
                    _this.router.navigateByUrl("books");
                }
            })
                .map(function (details) { return new __WEBPACK_IMPORTED_MODULE_5__actions_user_details__["a" /* SetAction */](details); });
        });
    }
    return UserEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"]) === "function" && _a || Object)
], UserEffects.prototype, "login$", void 0);
UserEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth__["b" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], UserEffects);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/user-effects.js.map

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/book-position.js.map

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/book.js.map

/***/ }),

/***/ 250:
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

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/bookmark.js.map

/***/ }),

/***/ 251:
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

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/paragraph.js.map

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/user.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngrx_store_freeze__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_position__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__books__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__position_data__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reader__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_details__ = __webpack_require__(258);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* unused harmony export getReaderState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getPlay; });
/* unused harmony export getRsv */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getWpm; });
/* unused harmony export getPhraseLength */
/* unused harmony export getBooksState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getBook; });
/* unused harmony export getBookPositionState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getBookPosition; });
/* unused harmony export getParagraphMapState */
/* unused harmony export getParagraphMap */
/* unused harmony export getUserState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoggedIn; });
/* unused harmony export getUserId */
/* unused harmony export getUserEmail */
/* unused harmony export getUserName */










var reducers = {
    reader: __WEBPACK_IMPORTED_MODULE_8__reader__["a" /* reducer */],
    books: __WEBPACK_IMPORTED_MODULE_6__books__["a" /* reducer */],
    bookPosition: __WEBPACK_IMPORTED_MODULE_5__book_position__["a" /* reducer */],
    paragraphMap: __WEBPACK_IMPORTED_MODULE_7__position_data__["a" /* reducer */],
    userDetails: __WEBPACK_IMPORTED_MODULE_9__user_details__["a" /* reducer */]
};
var devReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose__["compose"])(__WEBPACK_IMPORTED_MODULE_4_ngrx_store_freeze__["storeFreeze"], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* combineReducers */])(reducers);
var prodReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* combineReducers */])(reducers);
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
var getPlay = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getReaderState, __WEBPACK_IMPORTED_MODULE_8__reader__["b" /* getPlay */]);
var getRsv = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getReaderState, __WEBPACK_IMPORTED_MODULE_8__reader__["c" /* getRsv */]);
var getWpm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getReaderState, __WEBPACK_IMPORTED_MODULE_8__reader__["d" /* getWpm */]);
var getPhraseLength = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getReaderState, __WEBPACK_IMPORTED_MODULE_8__reader__["e" /* getPhraseLength */]);
// BOOK STATE REDUCERS
var getBooksState = function (state) { return state.books; };
var getBook = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getBooksState, __WEBPACK_IMPORTED_MODULE_6__books__["b" /* getBook */]);
// BOOK POSITION STATE REDUCERS
var getBookPositionState = function (state) { return state.bookPosition; };
var getBookPosition = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getBookPositionState, __WEBPACK_IMPORTED_MODULE_5__book_position__["b" /* getPosition */]);
// PARAGRAPH MAP REDUCERS
var getParagraphMapState = function (state) { return state.paragraphMap; };
var getParagraphMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getParagraphMapState, __WEBPACK_IMPORTED_MODULE_7__position_data__["b" /* getPositionData */]);
// USER REDUCERS
var getUserState = function (state) { return state.userDetails; };
var getLoggedIn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getUserState, __WEBPACK_IMPORTED_MODULE_9__user_details__["b" /* getLoggedIn */]);
var getUserId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getUserState, __WEBPACK_IMPORTED_MODULE_9__user_details__["c" /* getUserId */]);
var getUserEmail = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getUserState, __WEBPACK_IMPORTED_MODULE_9__user_details__["d" /* getUserEmail */]);
var getUserName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getUserState, __WEBPACK_IMPORTED_MODULE_9__user_details__["e" /* getUserName */]);
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/app.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_book_position__ = __webpack_require__(124);
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPosition; });

var initialState = {};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_book_position__["a" /* SET */]:
            return Object.assign({}, state, { position: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_book_position__["b" /* UNLOAD */]:
            return Object.assign({}, state, { position: initialState });
        default:
            return state;
    }
}
var getPosition = function (state) { return state.position; };
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/book-position.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_books__ = __webpack_require__(125);
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
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/books.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_position_data__ = __webpack_require__(225);
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPositionData; });

var initialState = {};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_position_data__["a" /* SET */]:
            return Object.assign({}, state, { positionData: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_position_data__["b" /* UNSET */]:
            return Object.assign({}, state, { positionData: undefined });
        default:
            return state;
    }
}
var getPositionData = function (state) { return state.positionData; };
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/position-data.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_reader__ = __webpack_require__(62);
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
    wpm: 310
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
        case __WEBPACK_IMPORTED_MODULE_0__actions_reader__["b" /* START_PLAY */]:
            return Object.assign({}, state, {
                play: true
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_reader__["c" /* STOP_PLAY */]:
            return Object.assign({}, state, {
                play: false
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_reader__["d" /* TOGGLE_PLAY */]:
            var newPlayState = !state.play;
            return Object.assign({}, state, {
                play: newPlayState
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_reader__["e" /* WPM */]:
            return Object.assign({}, state, { wpm: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_reader__["f" /* PHRASE_LENGTH */]:
            return Object.assign({}, state, { phraseLength: action.payload });
        default:
            return state;
    }
}
var getRsv = function (state) { return state.rsv; };
var getPlay = function (state) { return state.play; };
var getWpm = function (state) { return state.wpm; };
var getPhraseLength = function (state) { return state.phraseLength; };
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/reader.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_user_details__ = __webpack_require__(85);
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
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_details__["d" /* SET */]:
            return Object.assign({}, state, __assign({}, action.payload));
        default:
            return state;
    }
}
var getLoggedIn = function (state) { return state.loggedIn; };
var getUserId = function (state) { return state.id; };
var getUserEmail = function (state) { return state.email; };
var getUserName = function (state) { return state.name; };
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/user-details.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPositionResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookPositionResolver = (function () {
    function BookPositionResolver(bookmarksApi) {
        this.bookmarksApi = bookmarksApi;
    }
    BookPositionResolver.prototype.resolve = function (route, state) {
        var id = route.params.id;
        if (id === "new") {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of();
        }
        else if (id != null && isNaN(id)) {
            // TODO: write a better error message
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(new Error("Invalid dataflow id"));
        }
        return this.bookmarksApi.getById(Number(id));
    };
    return BookPositionResolver;
}());
BookPositionResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api__["b" /* BookmarksApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api__["b" /* BookmarksApi */]) === "function" && _a || Object])
], BookPositionResolver);

var _a;
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/book-position.resolver.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookResolver = (function () {
    function BookResolver(booksApi) {
        this.booksApi = booksApi;
    }
    BookResolver.prototype.resolve = function (route, state) {
        var id = route.params.id;
        if (id === "new") {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of();
        }
        else if (id != null && isNaN(id)) {
            // TODO: write a better error message
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(new Error("Invalid dataflow id"));
        }
        return this.booksApi.getById(Number(id));
    };
    return BookResolver;
}());
BookResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api__["c" /* BooksApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api__["c" /* BooksApi */]) === "function" && _a || Object])
], BookResolver);

var _a;
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/book.resolver.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_resolver__ = __webpack_require__(260);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__book_resolver__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_position_resolver__ = __webpack_require__(259);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__book_position_resolver__["a"]; });


//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_rest_http_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__specialized__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ApiModule = (function () {
    function ApiModule() {
    }
    return ApiModule;
}());
ApiModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        providers: [__WEBPACK_IMPORTED_MODULE_2__base_rest_http_service__["a" /* RestHttp */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__auth__["AuthApiModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__specialized__["a" /* SpecializedApiModule */]
        ]
    })
], ApiModule);

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/api.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browser_utils__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_api_service__ = __webpack_require__(134);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthApiModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AuthApiModule = (function () {
    function AuthApiModule() {
    }
    return AuthApiModule;
}());
AuthApiModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__browser_utils__["b" /* BrowserUtilsModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_2__auth_api_service__["a" /* AuthTokenApi */]]
    })
], AuthApiModule);

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/auth-api.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/auth-token.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__readable_api_service__ = __webpack_require__(136);
/* unused harmony reexport JsonResponse */
/* unused harmony reexport ReadableApi */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__response_envelope__ = __webpack_require__(137);
/* unused harmony reexport makeResponseEnvelope */
/* unused harmony reexport ResponseEnvelope */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_http_config__ = __webpack_require__(86);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__rest_http_config__["b"]; });
/* unused harmony reexport RestHttpConfig */
/* unused harmony reexport RestHttpConfigArgs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_http_service__ = __webpack_require__(64);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__writable_api_service__ = __webpack_require__(87);
/* unused harmony reexport WritableApi */





//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_api_service__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bookmarks_api_service__ = __webpack_require__(138);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecializedApiModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SpecializedApiModule = (function () {
    function SpecializedApiModule() {
    }
    return SpecializedApiModule;
}());
SpecializedApiModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__auth__["a" /* AuthModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__bookmarks_api_service__["a" /* BookmarksApi */],
            __WEBPACK_IMPORTED_MODULE_2__books_api_service__["a" /* BooksApi */]
        ]
    })
], SpecializedApiModule);

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/specialized-api.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browser_utils__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authorized_guard__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_authorized_guard__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__browser_utils__["b" /* BrowserUtilsModule */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__authorized_guard__["a" /* AuthorizedGuard */],
            __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__not_authorized_guard__["a" /* NotAuthorizedGuard */]
        ]
    })
], AuthModule);

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/auth.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_token_service__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_storage_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__local_storage_service__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserUtilsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BrowserUtilsModule = (function () {
    function BrowserUtilsModule() {
    }
    return BrowserUtilsModule;
}());
BrowserUtilsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__auth_token_service__["a" /* AuthTokenService */],
            __WEBPACK_IMPORTED_MODULE_2__book_storage_service__["a" /* BookStorageService */],
            __WEBPACK_IMPORTED_MODULE_3__local_storage_service__["a" /* LocalStorageService */]
        ]
    })
], BrowserUtilsModule);

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/browser-utils.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ServicesModule = (function () {
    function ServicesModule() {
    }
    return ServicesModule;
}());
ServicesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__api__["d" /* ApiModule */],
            __WEBPACK_IMPORTED_MODULE_3__ui__["a" /* UiServicesModule */],
            __WEBPACK_IMPORTED_MODULE_2__utils__["c" /* UtilsServicesModule */]
        ]
    })
], ServicesModule);

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/services.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_service__ = __webpack_require__(145);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiServicesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UiServicesModule = (function () {
    function UiServicesModule() {
    }
    return UiServicesModule;
}());
UiServicesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__header_service__["a" /* HeaderService */]]
    })
], UiServicesModule);

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/ui-services.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_position_service__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infinite_scroll_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interval_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paragraph_parser_service__ = __webpack_require__(149);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsServicesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UtilsServicesModule = (function () {
    function UtilsServicesModule() {
    }
    return UtilsServicesModule;
}());
UtilsServicesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__book_position_service__["a" /* BookPositionService */],
            __WEBPACK_IMPORTED_MODULE_2__infinite_scroll_service__["a" /* InfiniteScrollService */],
            __WEBPACK_IMPORTED_MODULE_3__interval_service__["a" /* IntervalService */],
            __WEBPACK_IMPORTED_MODULE_4__paragraph_parser_service__["a" /* ParagraphParserService */]
        ]
    })
], UtilsServicesModule);

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/utils-services.module.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_service__ = __webpack_require__(145);
/* unused harmony reexport HeaderLink */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__header_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_services_module__ = __webpack_require__(270);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__ui_services_module__["a"]; });


//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_module__ = __webpack_require__(262);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__api_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(265);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__base__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__specialized__ = __webpack_require__(88);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__specialized__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__specialized__["c"]; });



//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 mw6\">\n\t<app-header></app-header>\n\t<router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = "<div class=\"flex flex-column items-center\">\n\t\t<div class=\"header w-100 mw6 pt4 pb4 mb3 flex justify-between\">\n\t\t\t<div>\n\t\t\t\t<div>\n\t\t\t\t\tBounds 📚\n\t\t\t\t</div>\n\t\t\t\t<div class=\"light\">\n\t\t\t\t\ta speed reader\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"flex items-center\">\n\t\t\t\t<a *ngIf=\"link != null\" [routerLink]=\"link.url\" class=\"link heading caps small\">{{ link.text }}</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n"

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"paragraph != null\" class=\"paragraph\">\n\t<div *ngIf=\"id % 5 !== 0; else percentBlock\" class=\"paragraph--wordIdx code f7 gray\">\n\t\t{{ paragraph.firstIndex | number:\"1.0-0\" }}\n\t</div>\n\t<ng-template #percentBlock>\n\t\t<div class=\"paragraph--wordIdx code f7 gray\">\n\t\t\t{{ percent | percent:\"1.0-1\" }}\n\t\t</div>\n\t</ng-template>\n\t<div *ngIf=\"selected; else elseBlock\" class=\"pt2 pb2\">\n\t\t<app-scanner-word\n\t\t\t*ngFor=\"let word of paragraph.text; let i = index\"\n\t\t\t[selected]=\"currentPosition.wordIdx === i\"\n\t\t\t[word]=\"word\">\n\t\t</app-scanner-word>\n\t</div>\n\t<ng-template #elseBlock>\n\t\t<div class=\"pt2 pb2\">\n\t\t\t{{ paragraph.textString }}\n\t\t</div>\n\t</ng-template>\n</div>\n"

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"noBooks\">\n\tno books smh\n</div>\n<div *ngIf=\"!noBooks\">\n\t<p *ngFor=\"let book of books\">\n\t\t<a [routerLink]=\"['/books', book.id]\" class=\"bold caps\">\n\t\t\t{{ book.title }}\n\t\t</a>\n\t\t<span> {{ book.author }}</span>\n\t</p>\n</div>\n<div class=\"flex pt1 pb1\">\n\t<div\n\t\t(click)=\"setWpm(250)\"\n\t\t[ngClass]=\"{ 'red': (this.wpm$  | async) === 250 }\"\n\t\tclass=\"pt2 pb2 bt br bl bb\">\n\t\t250 wpm</div>\n\t<div\n\t\t(click)=\"setWpm(270)\"\n\t\t[ngClass]=\"{ 'red': (this.wpm$  | async) === 270 }\"\n\t\tclass=\"pt2 pb2 bt br bb\">\n\t\t270 wpm</div>\n\t<div\n\t\t(click)=\"setWpm(290)\"\n\t\t[ngClass]=\"{ 'red': (this.wpm$  | async) === 290 }\"\n\t\tclass=\"pt2 pb2 bt br bb\">\n\t\t290 wpm</div>\n\t<div\n\t\t(click)=\"setWpm(310)\"\n\t\t[ngClass]=\"{ 'red': (this.wpm$  | async) === 310 }\"\n\t\tclass=\"pt2 pb2 bt br bb\">\n\t\t310 wpm</div>\n\t<div\n\t\t(click)=\"setWpm(330)\"\n\t\t[ngClass]=\"{ 'red': (this.wpm$  | async) === 330 }\"\n\t\tclass=\"pt2 pb2 bt br bb\">\n\t\t330 wpm</div>\n\t<div\n\t\t(click)=\"setWpm(350)\"\n\t\t[ngClass]=\"{ 'red': (this.wpm$  | async) === 350 }\"\n\t\tclass=\"pt2 pb2 bt br bb\">\n\t\t350 wpm</div>\n\t<div\n\t\t(click)=\"setWpm(370)\"\n\t\t[ngClass]=\"{ 'red': (this.wpm$  | async) === 370 }\"\n\t\tclass=\"pt2 pb2 bt br bb\">\n\t\t370 wpm</div>\n</div>\n\n"

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = "<div class=\"flex flex-column items-center\">\n\t<div class=\"mw6\">\n\t\t<app-scanner-paragraph\n\t\t\t*ngFor=\"let paragraph of content; let i = index\"\n\t\t\t[id]=\"i\"\n\t\t\t[currentPosition]=\"bookPosition\"\n\t\t\t[selected]=\"bookPosition.paragraphIdx === paragraph.id \"\n\t\t\t[paragraph]=\"paragraph\"\n\t\t\t[percent]=\"paragraph.firstIndex / book.length\">\n\t\t</app-scanner-paragraph>\n\t</div>\n</div>\n"

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = "<div class=\"paragraph\">\n\tProper explanation here. Make it speed-readable.\n</div>\n"

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = "<div class=\"pt2\">\n\t<input class=\"input-reset w-100\" type=\"text\" [(ngModel)]=\"email\" placeholder=\"email\">\n</div>\n<div class=\"pt2\">\n\t<input class=\"input-reset w-100\" type=\"password\" [(ngModel)]=\"password\" placeholder=\"password\">\n</div>\n<div class=\"pt2\">\n\t<button class=\"button-reset w-100\" (click)=\"submit()\">Log In!</button>\n</div>\n<div *ngIf=\"loginError\" class=\"bg-red white\">\n\tLogin failed!\n</div>\n"

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

module.exports = "<div class=\"f3 b\">New Book</div>\n<div class=\"pt2\">\n\t<input type=\"text\" [(ngModel)]=\"book.title\" placeholder=\"title\">\n</div>\n<div class=\"pt2\">\n\t<input type=\"text\" [(ngModel)]=\"book.author\" placeholder=\"author\">\n</div>\n<div class=\"pt2\">\n\t<textarea cols=\"30\" rows=\"10\" [(ngModel)]=\"book.body\"></textarea>\n</div>\n<div class=\"pt2\">\n\t<button (click)=\"submit()\">Create!</button>\n</div>\n"

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browser_utils_module__ = __webpack_require__(268);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__browser_utils_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_storage_service__ = __webpack_require__(66);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_token_service__ = __webpack_require__(143);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__auth_token_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_storage_service__ = __webpack_require__(144);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__book_storage_service__["a"]; });




//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(253);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["f"]; });

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authorized_guard__ = __webpack_require__(140);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__authorized_guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__not_authorized_guard__ = __webpack_require__(142);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__not_authorized_guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_module__ = __webpack_require__(267);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__auth_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(65);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__auth_service__["a"]; });




//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(211);


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOGGLE_RSV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TOGGLE_PLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return START_PLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return STOP_PLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return WPM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PHRASE_LENGTH; });
/* unused harmony export BOOK_POSITION */
/* unused harmony export ToggleRsvAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TogglePlayAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return StartPlayAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return StopPlayAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return WpmAction; });
/* unused harmony export PhraseLengthAction */
var TOGGLE_RSV = "[READER] Toggle RSV";
var TOGGLE_PLAY = "[READER] Toggle Play";
var START_PLAY = "[READER] Start Play";
var STOP_PLAY = "[READER] Stop Play";
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

var StartPlayAction = (function () {
    function StartPlayAction() {
        this.type = START_PLAY;
    }
    return StartPlayAction;
}());

var StopPlayAction = (function () {
    function StopPlayAction() {
        this.type = STOP_PLAY;
    }
    return StopPlayAction;
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

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/reader.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__book__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__book__, "Paragraph")) __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return __WEBPACK_IMPORTED_MODULE_0__book__["Paragraph"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__book__, "Bookmark")) __webpack_require__.d(__webpack_exports__, "Bookmark", function() { return __WEBPACK_IMPORTED_MODULE_0__book__["Bookmark"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__book__, "BookPosition")) __webpack_require__.d(__webpack_exports__, "BookPosition", function() { return __WEBPACK_IMPORTED_MODULE_0__book__["BookPosition"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bookmark__ = __webpack_require__(250);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Bookmark", function() { return __WEBPACK_IMPORTED_MODULE_1__bookmark__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_position__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_position___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__book_position__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__book_position__, "Paragraph")) __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return __WEBPACK_IMPORTED_MODULE_2__book_position__["Paragraph"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__book_position__, "BookPosition")) __webpack_require__.d(__webpack_exports__, "BookPosition", function() { return __WEBPACK_IMPORTED_MODULE_2__book_position__["BookPosition"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paragraph__ = __webpack_require__(251);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return __WEBPACK_IMPORTED_MODULE_3__paragraph__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__user__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__user__, "BookPosition")) __webpack_require__.d(__webpack_exports__, "BookPosition", function() { return __WEBPACK_IMPORTED_MODULE_4__user__["BookPosition"]; });





//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_http_config__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestHttp; });
/* unused harmony export getPath */
/* unused harmony export addQueryToOptions */
/* unused harmony export queryToSearchParams */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
    return RestHttp;
}());
RestHttp = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__rest_http_config__["a" /* RestHttpConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__rest_http_config__["a" /* RestHttpConfig */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _b || Object])
], RestHttp);

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
    }, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]());
}
var _a, _b;
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/rest-http.service.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_user_details__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_auth__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__browser_utils__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_user_details__["a" /* SetAction */](details));
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
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_user_details__["b" /* LoginAction */]());
            return true;
        });
    };
    AuthService.prototype.logout = function () {
        this.tokenService.delete();
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_user_details__["c" /* LogoutAction */]());
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__api_auth__["AuthTokenApi"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_auth__["AuthTokenApi"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__browser_utils__["a" /* AuthTokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__browser_utils__["a" /* AuthTokenService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/auth.service.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


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
    return LocalStorageService;
}());
LocalStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [Object])
], LocalStorageService);

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/local-storage.service.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_position_service__ = __webpack_require__(146);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__book_position_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infinite_scroll_service__ = __webpack_require__(147);
/* unused harmony reexport InfiniteScrollService */
/* unused harmony reexport ContentChildrenBounds */
/* unused harmony reexport ParagraphMap */
/* unused harmony reexport PositionData */
/* unused harmony reexport PositionDataMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interval_service__ = __webpack_require__(148);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__interval_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paragraph_parser_service__ = __webpack_require__(149);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__paragraph_parser_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_services_module__ = __webpack_require__(271);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__utils_services_module__["a"]; });





//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOGIN; });
/* unused harmony export LOGOUT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LogoutAction; });
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

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/user-details.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestHttpConfig; });
/* harmony export (immutable) */ __webpack_exports__["b"] = provideRestHttpConfig;
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
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/rest-http.config.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__readable_api_service__ = __webpack_require__(136);
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

//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/writable-api.service.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bookmarks_api_service__ = __webpack_require__(138);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__bookmarks_api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_api_service__ = __webpack_require__(139);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__books_api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__specialized_api_module__ = __webpack_require__(266);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__specialized_api_module__["a"]; });



//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_module__ = __webpack_require__(269);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__services_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(34);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__api__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__api__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(67);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browser_utils__ = __webpack_require__(35);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__browser_utils__["c"]; });




//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/rsv-reader-frontend/src/index.js.map

/***/ })

},[617]);
//# sourceMappingURL=main.bundle.map