webpackJsonp([1,4],{

/***/ 116:
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

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_detail_page_component__ = __webpack_require__(214);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__book_detail_page_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_list_page_component__ = __webpack_require__(215);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__book_list_page_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__full_text_view_component__ = __webpack_require__(217);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__full_text_view_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containers_module__ = __webpack_require__(216);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__containers_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_detail_page__ = __webpack_require__(117);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__book_detail_page__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_list_page__ = __webpack_require__(118);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__book_list_page__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__full_text_view__ = __webpack_require__(119);
/* unused harmony reexport FullTextViewComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_page__ = __webpack_require__(121);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__login_page__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_book_page__ = __webpack_require__(122);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__new_book_page__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rsv_view__ = __webpack_require__(123);
/* unused harmony reexport RsvViewComponent */







//# sourceMappingURL=index.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_page_component__ = __webpack_require__(218);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_page_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__new_book_page_component__ = __webpack_require__(219);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__new_book_page_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rsv_view_component__ = __webpack_require__(220);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__rsv_view_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browser_utils__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_rest_http_config__ = __webpack_require__(76);
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
//# sourceMappingURL=auth-api.service.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_api_module__ = __webpack_require__(236);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "AuthApiModule", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_api_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_api_service__ = __webpack_require__(124);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "AuthTokenApi", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_token__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_token___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__auth_token__);
/* unused harmony namespace reexport */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__response_envelope__ = __webpack_require__(127);
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

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = makeResponseEnvelope;
function makeResponseEnvelope(data, totalRecords) {
    if (totalRecords === void 0) { totalRecords = data.length; }
    return Object.assign(data, { totalRecords: totalRecords });
}
//# sourceMappingURL=response-envelope.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__browser_utils__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_rest_http_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_writable_api_service__ = __webpack_require__(77);
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
                return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].empty();
            }
            return new __WEBPACK_IMPORTED_MODULE_2__models__["Bookmark"](res.paragraphIdx, res.wordIdx, res.id);
        });
    };
    return BookmarksApi;
}(__WEBPACK_IMPORTED_MODULE_6__base_writable_api_service__["a" /* WritableApi */]));
BookmarksApi = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__base_rest_http_service__["a" /* RestHttp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__base_rest_http_service__["a" /* RestHttp */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth__["b" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__browser_utils__["a" /* AuthTokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__browser_utils__["a" /* AuthTokenService */]) === "function" && _c || Object])
], BookmarksApi);

var _a, _b, _c;
//# sourceMappingURL=bookmarks-api.service.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__browser_utils__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_writable_api_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_rest_http_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(55);
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
    return BooksApi;
}(__WEBPACK_IMPORTED_MODULE_3__base_writable_api_service__["a" /* WritableApi */]));
BooksApi = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__utils__["a" /* ParagraphParserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__utils__["a" /* ParagraphParserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__base_rest_http_service__["a" /* RestHttp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__base_rest_http_service__["a" /* RestHttp */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__auth__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth__["b" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__browser_utils__["a" /* AuthTokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__browser_utils__["a" /* AuthTokenService */]) === "function" && _d || Object])
], BooksApi);

var _a, _b, _c, _d;
//# sourceMappingURL=books-api.service.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
                .flatMap(function () { return _this.store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["b" /* getLoggedIn */]); })
                .do(redirectToLogin);
        }
        return this.store
            .select(__WEBPACK_IMPORTED_MODULE_3__reducers__["b" /* getLoggedIn */])
            .do(redirectToLogin);
    };
    AuthGuard.prototype.canActivateChild = function () {
        return this.canActivate();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_storage_service__ = __webpack_require__(80);
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
//# sourceMappingURL=auth-token.service.js.map

/***/ }),

/***/ 132:
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
            paragraphIncrement = this.findParagraphIdxByInnerIdx(naiveIncrementIdx, targetRange);
            newParagraphIdx = currentPosition.paragraphIdx - paragraphIncrement - 1;
        }
        return this.getPosition(newParagraphIdx, naiveIncrementIdx - book.content[newParagraphIdx].firstIndex);
    };
    BookPositionService.prototype.getCurrentPhrase = function (book, bookPosition, length) {
        if (length === void 0) { length = 1; }
        var currentParagraph = book.content[bookPosition.paragraphIdx];
        if (currentParagraph == null) {
            return book.content[0].text.slice(0, length).join(" ");
        }
        return currentParagraph.text
            .slice(bookPosition.wordIdx, bookPosition.wordIdx + length)
            .join(" ");
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

//# sourceMappingURL=book-position.service.js.map

/***/ }),

/***/ 133:
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
        if (wpm === 0) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].never();
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].interval(60e3 / wpm * wordsPerInterval);
    };
    return IntervalService;
}());
IntervalService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], IntervalService);

//# sourceMappingURL=interval.service.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(53);
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

//# sourceMappingURL=paragraph-parser.service.js.map

/***/ }),

/***/ 135:
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

/***/ 189:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 189;


/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(135);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers__ = __webpack_require__(120);
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
                component: __WEBPACK_IMPORTED_MODULE_3__containers__["b" /* NewBookPageComponent */],
            }, {
                path: ":id",
                component: __WEBPACK_IMPORTED_MODULE_3__containers__["c" /* BookDetailPageComponent */]
            }, {
                path: "",
                pathMatch: "full",
                component: __WEBPACK_IMPORTED_MODULE_3__containers__["d" /* BookListPageComponent */]
            }],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth__["c" /* AuthGuard */]],
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_2__services_auth__["c" /* AuthGuard */]]
    },
    {
        path: "login",
        component: __WEBPACK_IMPORTED_MODULE_3__containers__["e" /* LoginPageComponent */]
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
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 206:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: "app-root",
        template: __webpack_require__(302),
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducers__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__effects__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_api__ = __webpack_require__(38);
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
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__containers__["a" /* ContainersModule */],
            __WEBPACK_IMPORTED_MODULE_11__services__["a" /* ServicesModule */],
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["a" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_6__reducers__["a" /* reducer */]),
            __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_7__effects__["a" /* BookEffects */]),
            __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_7__effects__["b" /* BookPositionEffects */]),
            __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_7__effects__["c" /* UserEffects */])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
        ],
        providers: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__services_api__["a" /* provideRestHttpConfig */])({
                baseUrl: "http://bounds-api.herokuapp.com"
            }),
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* LOCALE_ID */], useValue: "en-US" }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__current_phrase__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rsv_controls__ = __webpack_require__(212);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_3__current_phrase__["a" /* CurrentPhraseComponent */],
    __WEBPACK_IMPORTED_MODULE_4__rsv_controls__["a" /* RsvControlsComponent */]
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
        ],
        declarations: DIRECTIVES,
        exports: DIRECTIVES
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentPhraseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrentPhraseComponent = (function () {
    function CurrentPhraseComponent() {
    }
    return CurrentPhraseComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], CurrentPhraseComponent.prototype, "phrase", void 0);
CurrentPhraseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: "app-current-phrase",
        template: __webpack_require__(303),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [])
], CurrentPhraseComponent);

//# sourceMappingURL=current-phrase.component.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__current_phrase_component__ = __webpack_require__(209);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__current_phrase_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_module__ = __webpack_require__(208);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rsv_controls_component__ = __webpack_require__(213);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__rsv_controls_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RsvControlsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RsvControlsComponent = (function () {
    function RsvControlsComponent() {
        this.toggleRsv = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.togglePlay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.wpmChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
    }
    RsvControlsComponent.prototype.ngAfterViewInit = function () {
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
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("wpmInput"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object)
], RsvControlsComponent.prototype, "wpmInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Boolean)
], RsvControlsComponent.prototype, "play", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Number)
], RsvControlsComponent.prototype, "wpm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]) === "function" && _b || Object)
], RsvControlsComponent.prototype, "toggleRsv", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]) === "function" && _c || Object)
], RsvControlsComponent.prototype, "togglePlay", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]) === "function" && _d || Object)
], RsvControlsComponent.prototype, "wpmChange", void 0);
RsvControlsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: "app-rsv-controls",
        template: __webpack_require__(304)
    })
], RsvControlsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=rsv-controls.component.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_reader__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_books__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_book_position__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BookDetailPageComponent = (function () {
    function BookDetailPageComponent(route, booksApi, bookPositionService, store) {
        this.route = route;
        this.booksApi = booksApi;
        this.bookPositionService = bookPositionService;
        this.store = store;
        this.rsvEnabled$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["h" /* getRsv */]);
        this.phraseLength$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["g" /* getPhraseLength */]);
        this.book$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["c" /* getBook */]);
        this.bookPosition$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["d" /* getBookPosition */]);
        this.play$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["e" /* getPlay */]);
        this.wpm$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["f" /* getWpm */]);
    }
    BookDetailPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.book$
            .filter(function (book) { return book != null; })
            .take(1)
            .subscribe(function (book) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__actions_book_position__["f" /* LoadSavedAction */](book.id));
        });
        this.getBookById();
        this.initBookPositionSubscription();
    };
    BookDetailPageComponent.prototype.ngOnDestroy = function () { };
    BookDetailPageComponent.prototype.toggleRsv = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_reader__["e" /* ToggleRsvAction */]());
    };
    BookDetailPageComponent.prototype.togglePlay = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_reader__["f" /* TogglePlayAction */]());
    };
    BookDetailPageComponent.prototype.setWpm = function (wpm) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_reader__["g" /* WpmAction */](wpm));
    };
    BookDetailPageComponent.prototype.getBookById = function () {
        var bookId = this.route.snapshot.params.id;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__actions_books__["f" /* GetByIdAction */](bookId));
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
    return BookDetailPageComponent;
}());
BookDetailPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: "app-book-detail",
        template: __webpack_require__(305)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__services__["b" /* BooksApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services__["b" /* BooksApi */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__services__["d" /* BookPositionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services__["d" /* BookPositionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _d || Object])
], BookDetailPageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=book-detail-page.component.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_specialized__ = __webpack_require__(78);
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
    function BookListPageComponent(booksApi) {
        this.booksApi = booksApi;
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
    return BookListPageComponent;
}());
BookListPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: "app-book-list",
        template: __webpack_require__(306)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_specialized__["c" /* BooksApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_specialized__["c" /* BooksApi */]) === "function" && _a || Object])
], BookListPageComponent);

var _a;
//# sourceMappingURL=book-list-page.component.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_detail_page__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__book_list_page__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__full_text_view__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_page__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_book_page__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rsv_view__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_5__book_detail_page__["a" /* BookDetailPageComponent */],
    __WEBPACK_IMPORTED_MODULE_6__book_list_page__["a" /* BookListPageComponent */],
    __WEBPACK_IMPORTED_MODULE_7__full_text_view__["a" /* FullTextViewComponent */],
    __WEBPACK_IMPORTED_MODULE_8__login_page__["a" /* LoginPageComponent */],
    __WEBPACK_IMPORTED_MODULE_9__new_book_page__["a" /* NewBookPageComponent */],
    __WEBPACK_IMPORTED_MODULE_10__rsv_view__["a" /* RsvViewComponent */]
];
var ContainersModule = (function () {
    function ContainersModule() {
    }
    return ContainersModule;
}());
ContainersModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */]
        ],
        declarations: DIRECTIVES,
        exports: DIRECTIVES
    })
], ContainersModule);

//# sourceMappingURL=containers.module.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullTextViewComponent; });
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




var FullTextViewComponent = (function () {
    function FullTextViewComponent(bookPositionService, ngZone, document) {
        this.bookPositionService = bookPositionService;
        this.ngZone = ngZone;
        this.inputsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.document = document;
        this.initInputsSubscription();
    }
    Object.defineProperty(FullTextViewComponent.prototype, "book", {
        get: function () {
            return this._book;
        },
        set: function (val) {
            if (val === this._book) {
                return;
            }
            this._book = val;
            this.inputsChange.emit();
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
            this.inputsChange.emit();
        },
        enumerable: true,
        configurable: true
    });
    FullTextViewComponent.prototype.initInputsSubscription = function () {
        var _this = this;
        this.inputsChange.subscribe(function () {
            if (_this.book == null || _this.bookPosition == null) {
                return;
            }
            _this.paragraphs = _this.bookPositionService.getPartialText(_this.book, _this.bookPosition);
            _this.ngZone.runOutsideAngular(function () { return setTimeout(function () { return _this.scrollToBookPosition(); }); });
            ;
        });
    };
    FullTextViewComponent.prototype.scrollToBookPosition = function () {
        var targetEl = this.document.getElementById("paragraph--" + this.bookPosition.paragraphIdx);
        if (targetEl == null) {
            return;
        }
        var offset = targetEl.offsetTop;
        this.document.body.scrollTop = offset - this.document.defaultView.innerHeight / 5; // don't want it all the way scrolled up
    };
    return FullTextViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models__["Book"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models__["Book"]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models__["Book"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models__["Book"]) === "function" && _b || Object])
], FullTextViewComponent.prototype, "book", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__models__["BookPosition"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models__["BookPosition"]) === "function" && _c || Object),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__models__["BookPosition"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models__["BookPosition"]) === "function" && _d || Object])
], FullTextViewComponent.prototype, "bookPosition", null);
FullTextViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: "app-full-text-view",
        template: __webpack_require__(307),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ChangeDetectionStrategy */].OnPush
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services__["d" /* BookPositionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["d" /* BookPositionService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */]) === "function" && _f || Object, Object])
], FullTextViewComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=full-text-view.component.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth__ = __webpack_require__(30);
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
    return LoginPageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostListener */])("document:keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LoginPageComponent.prototype, "handleEnter", null);
LoginPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: "app-login-page",
        template: __webpack_require__(308)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth__["b" /* AuthService */]) === "function" && _a || Object])
], LoginPageComponent);

var _a;
//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api__ = __webpack_require__(38);
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
    return NewBookPageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* HostListener */])("document:keydown", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NewBookPageComponent.prototype, "handleEnter", null);
NewBookPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        template: __webpack_require__(309)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api__["c" /* BooksApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api__["c" /* BooksApi */]) === "function" && _a || Object])
], NewBookPageComponent);

var _a;
//# sourceMappingURL=new-book-page.component.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_book_position__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RsvViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RsvViewComponent = (function () {
    function RsvViewComponent(intervalService, store) {
        this.intervalService = intervalService;
        this.store = store;
        this.play$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["e" /* getPlay */]);
        this.wpm$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["f" /* getWpm */]);
        this.phraseLength$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["g" /* getPhraseLength */]);
    }
    Object.defineProperty(RsvViewComponent.prototype, "phrase", {
        get: function () {
            if (this.word == null) {
                return [];
            }
            return this.word.split(" ");
        },
        enumerable: true,
        configurable: true
    });
    RsvViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playSubscription =
            __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"]
                .combineLatest(this.play$, this.wpm$, this.phraseLength$)
                .debounceTime(100)
                .subscribe(function (_a) {
                var play = _a[0], wpm = _a[1], phraseLength = _a[2];
                _this.cancelSubscription(_this.intervalSubscription);
                if (play) {
                    _this.startRsvInterval(wpm, phraseLength);
                }
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
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_book_position__["e" /* StepAction */](phraseLength));
            });
    };
    RsvViewComponent.prototype.cancelSubscription = function (sub) {
        if (sub == null) {
            return;
        }
        sub.unsubscribe();
        sub = null;
    };
    return RsvViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], RsvViewComponent.prototype, "word", void 0);
RsvViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: "app-rsv-view",
        template: __webpack_require__(310)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services__["c" /* IntervalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services__["c" /* IntervalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _b || Object])
], RsvViewComponent);

var _a, _b;
//# sourceMappingURL=rsv-view.component.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_utils__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_api__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_book_position__ = __webpack_require__(52);
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
            .ofType(__WEBPACK_IMPORTED_MODULE_8__actions_book_position__["b" /* LOAD_SAVED */])
            .map(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (id) {
            if (id == null) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].empty();
            }
            var nextGetById$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_8__actions_book_position__["b" /* LOAD_SAVED */]).skip(1);
            return _this.bookmarksApi
                .getById(id)
                .takeUntil(nextGetById$)
                .map(function (bookmark) {
                return new __WEBPACK_IMPORTED_MODULE_8__actions_book_position__["c" /* SetAction */]({
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
            .ofType(__WEBPACK_IMPORTED_MODULE_8__actions_book_position__["d" /* STEP */])
            .map(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* toPayload */])
            .withLatestFrom(this.book$, this.bookPosition$)
            .flatMap(function (_a) {
            var step = _a[0], book = _a[1], currentPosition = _a[2];
            if (step == null || currentPosition == null || book == null) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].empty();
            }
            var nextPosition = _this.bookPositionService.stepPosition(book, currentPosition, step);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_8__actions_book_position__["c" /* SetAction */](nextPosition));
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
//# sourceMappingURL=book-position.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_books__ = __webpack_require__(74);
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
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_books__["b" /* GET_BY_ID */])
            .map(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (id) {
            if (id == null) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].empty();
            }
            var nextGetById$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_4__actions_books__["b" /* GET_BY_ID */]).skip(1);
            return _this.booksApi
                .getById(id)
                .takeUntil(nextGetById$)
                .map(function (book) { return new __WEBPACK_IMPORTED_MODULE_4__actions_books__["c" /* LoadAction */](book); });
        });
        this.write$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_books__["d" /* WRITE */])
            .map(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (jsonBook) {
            if (jsonBook == null) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].empty();
            }
            var nextWrite$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_4__actions_books__["d" /* WRITE */]).skip(1);
            return _this.booksApi
                .createFromJsonBook(jsonBook)
                .takeUntil(nextWrite$)
                .map(function () { return new __WEBPACK_IMPORTED_MODULE_4__actions_books__["e" /* WriteFinishAction */](); });
        });
    }
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
BookEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services__["b" /* BooksApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["b" /* BooksApi */]) === "function" && _d || Object])
], BookEffects);

var _a, _b, _c, _d;
//# sourceMappingURL=books.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__books__ = __webpack_require__(222);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__books__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_position__ = __webpack_require__(221);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__book_position__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_effects__ = __webpack_require__(224);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__user_effects__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_user_details__ = __webpack_require__(75);
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
//# sourceMappingURL=user-effects.js.map

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

//# sourceMappingURL=book-position.js.map

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 227:
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

/***/ 228:
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

/***/ 229:
/***/ (function(module, exports) {

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngrx_store_freeze__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reader__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__book_position__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__books__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_details__ = __webpack_require__(234);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* unused harmony export getReaderState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getRsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getWpm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getPhraseLength; });
/* unused harmony export getBooksState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getBook; });
/* unused harmony export getBookPositionState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getBookPosition; });
/* unused harmony export getUserState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoggedIn; });
/* unused harmony export getUserId */
/* unused harmony export getUserEmail */
/* unused harmony export getUserName */









var reducers = {
    reader: __WEBPACK_IMPORTED_MODULE_5__reader__["a" /* reducer */],
    books: __WEBPACK_IMPORTED_MODULE_7__books__["a" /* reducer */],
    bookPosition: __WEBPACK_IMPORTED_MODULE_6__book_position__["a" /* reducer */],
    userDetails: __WEBPACK_IMPORTED_MODULE_8__user_details__["a" /* reducer */]
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

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_book_position__ = __webpack_require__(52);
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPosition; });

var initialState = {
    position: { paragraphIdx: 0, wordIdx: 0 }
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_book_position__["a" /* SET */]:
            return Object.assign({}, state, { position: action.payload });
        default:
            return state;
    }
}
var getPosition = function (state) { return state.position; };
//# sourceMappingURL=book-position.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_books__ = __webpack_require__(74);
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBook; });

var initialState = {};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_books__["a" /* LOAD */]:
            return Object.assign({}, state, { book: action.payload });
        default:
            return state;
    }
}
var getBook = function (state) { return state.book; };
//# sourceMappingURL=books.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_reader__ = __webpack_require__(116);
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

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_user_details__ = __webpack_require__(75);
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
//# sourceMappingURL=user-details.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_rest_http_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__specialized__ = __webpack_require__(78);
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

//# sourceMappingURL=api.module.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browser_utils__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_api_service__ = __webpack_require__(124);
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

//# sourceMappingURL=auth-api.module.js.map

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

//# sourceMappingURL=auth-token.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__readable_api_service__ = __webpack_require__(126);
/* unused harmony reexport JsonResponse */
/* unused harmony reexport ReadableApi */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__response_envelope__ = __webpack_require__(127);
/* unused harmony reexport makeResponseEnvelope */
/* unused harmony reexport ResponseEnvelope */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_http_config__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__rest_http_config__["b"]; });
/* unused harmony reexport RestHttpConfig */
/* unused harmony reexport RestHttpConfigArgs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_http_service__ = __webpack_require__(54);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__writable_api_service__ = __webpack_require__(77);
/* unused harmony reexport WritableApi */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_api_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bookmarks_api_service__ = __webpack_require__(128);
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

//# sourceMappingURL=specialized-api.module.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browser_utils__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(79);
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
            __WEBPACK_IMPORTED_MODULE_2__auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]
        ]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_token_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_storage_service__ = __webpack_require__(80);
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
            __WEBPACK_IMPORTED_MODULE_2__local_storage_service__["a" /* LocalStorageService */]
        ]
    })
], BrowserUtilsModule);

//# sourceMappingURL=browser-utils.module.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(55);
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
            __WEBPACK_IMPORTED_MODULE_2__utils__["c" /* UtilsServicesModule */]
        ]
    })
], ServicesModule);

//# sourceMappingURL=services.module.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_position_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interval_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paragraph_parser_service__ = __webpack_require__(134);
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
            __WEBPACK_IMPORTED_MODULE_2__interval_service__["a" /* IntervalService */],
            __WEBPACK_IMPORTED_MODULE_3__paragraph_parser_service__["a" /* ParagraphParserService */]
        ]
    })
], UtilsServicesModule);

//# sourceMappingURL=utils-services.module.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__(130);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_module__ = __webpack_require__(240);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(79);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__auth_service__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 302:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 303:
/***/ (function(module, exports) {

module.exports = "<div class=\"pt4 f4\">\n  {{ phrase }}\n</div>\n"

/***/ }),

/***/ 304:
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 flex items-center justify-between\">\n\t<div class=\"flex items-center\">\n\t\t<div (click)=\"toggleRsv.emit()\" class=\"f3 icon-cancel\"></div>\n\t\t<input type=\"number\" [(value)]=\"wpm\" #wpmInput>\n\t</div>\n\t<div class=\"flex items-center\">\n\t\t<!-- jump back -->\n\t\t<div class=\"f3 icon-fast-backward\"></div>\n\n\t\t<!-- play / pause -->\n\t\t<div *ngIf=\"!play\" (click)=\"togglePlay.emit()\" class=\"f2 icon-play\"></div>\n\t\t<div *ngIf=\"play\" (click)=\"togglePlay.emit()\" class=\"f2 icon-pause\"></div>\n\n\t\t<!-- jump forward -->\n\t\t<div class=\"f3 icon-fast-forward\"></div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 305:
/***/ (function(module, exports) {

module.exports = "<div class=\"flex flex-column vh-100 overflow-hidden\">\n\t<app-rsv-controls\n\t\tclass=\"header shadow-1\"\n\t\t[play]=\"(play$ | async)\"\n\t\t[wpm]=\"(wpm$ | async)\"\n\t\t(toggleRsv)=\"toggleRsv()\"\n\t\t(togglePlay)=\"togglePlay()\"\n\t\t(wpmChange)=\"setWpm($event)\"></app-rsv-controls>\n\t<app-rsv-view *ngIf=\"(rsvEnabled$ | async); else elseBlock\" [word]=\"currentPhrase\"></app-rsv-view>\n</div>\n\n<!-- full-text component -->\n<ng-template #elseBlock>\n\t<app-full-text-view\n\t\tclass=\"overflow-container\"\n\t\t[book]=\" book$ | async \"\n\t\t[bookPosition]=\" bookPosition$ | async \"></app-full-text-view>\n</ng-template>\n"

/***/ }),

/***/ 306:
/***/ (function(module, exports) {

module.exports = "<div class=\"fl w-100 pv2 ph4\">\n\t<div class=\"f3 b\">\n\t\tYour Books\n\t</div>\n\t<div *ngIf=\"noBooks\">\n\t\tno books smh\n\t</div>\n\t<div *ngIf=\"!noBooks\">\n\t\t<p *ngFor=\"let book of books\">\n\t\t\t<a [routerLink]=\"['/books', book.id]\" class=\"b\">\n\t\t\t\t{{ book.title }}\n\t\t\t</a>\n\t\t\t<span>\n\t\t\t\tby {{ book.author }}\n\t\t\t</span>\n\t\t</p>\n\t</div>\n\t<div>\n\t\t<a routerLink=\"/books/new\">Add a book.</a>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ 307:
/***/ (function(module, exports) {

module.exports = "<p *ngFor=\"let paragraph of paragraphs\" id=\"paragraph--{{ paragraph.id }}\">\n\t<ng-template [ngIf]=\"paragraph.id === bookPosition.paragraphIdx\" [ngIfElse]=\"elseBlock\">\n\t\t<span><strong>({{ paragraph.id }}, {{ paragraph.firstIndex + 1 }})</strong></span>\n\t\t<span\n\t\t\t*ngFor=\"let word of paragraph.text; let idx = index\"\n\t\t\t[class.full-text__current-word]=\"idx === bookPosition.wordIdx\">\n\t\t\t{{ word }}<span>{{ \" \" }}</span>\n\t\t</span>\n\t</ng-template>\n\t<ng-template #elseBlock>\n\t\t<span><strong>({{ paragraph.id }}, {{ paragraph.firstIndex + 1 }})</strong></span>\n\t\t<span>{{ paragraph.textString }}</span>\n\t</ng-template>\n</p>\n"

/***/ }),

/***/ 308:
/***/ (function(module, exports) {

module.exports = "<div class=\"fl w-100 pv2 ph4\">\n\t<div class=\"f3 b\">LOGIN PAGE</div>\n\t<div class=\"pt2\">\n\t\t<input type=\"text\" [(ngModel)]=\"email\" placeholder=\"email\">\n\t</div>\n\t<div class=\"pt2\">\n\t\t<input type=\"password\" [(ngModel)]=\"password\" placeholder=\"password\">\n\t</div>\n\t<div class=\"pt2\">\n\t\t<button (click)=\"submit()\">Log In!</button>\n\t</div>\n</div>\n"

/***/ }),

/***/ 309:
/***/ (function(module, exports) {

module.exports = "<div class=\"fl w-100 pv2 ph4\">\n\t<div class=\"f3 b\">New Book</div>\n\t<div class=\"pt2\">\n\t\t<input type=\"text\" [(ngModel)]=\"book.title\" placeholder=\"title\">\n\t</div>\n\t<div class=\"pt2\">\n\t\t<input type=\"text\" [(ngModel)]=\"book.author\" placeholder=\"author\">\n\t</div>\n\t<div class=\"pt2\">\n\t\t<textarea cols=\"30\" rows=\"10\" [(ngModel)]=\"book.body\"></textarea>\n\t</div>\n\t<div class=\"pt2\">\n\t\t<button (click)=\"submit()\">Create!</button>\n\t</div>\n</div>\n"

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browser_utils_module__ = __webpack_require__(241);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__browser_utils_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_storage_service__ = __webpack_require__(80);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_token_service__ = __webpack_require__(131);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__auth_token_service__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 310:
/***/ (function(module, exports) {

module.exports = "<div class=\"pt6 f4 fw6 tc\">\n\t<span\n\t\t*ngFor=\"let oneWord of phrase; let i = index\"\n\t\t[ngClass]=\"{'pr1': i === 0 && phrase.length > 1 && false}\">\n\t\t{{ oneWord }}\n\t</span>\n</div>\n"

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(230);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["h"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_module__ = __webpack_require__(235);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__api_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(238);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__base__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__specialized__ = __webpack_require__(78);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__specialized__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__specialized__["c"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_module__ = __webpack_require__(242);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__services_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(38);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__api__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(55);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["b"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOAD_SAVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET; });
/* unused harmony export SET_PARTIAL_TEXT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LoadSavedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SetAction; });
/* unused harmony export SetPartialTextAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return StepAction; });
var LOAD_SAVED = "[BOOK_POSITION] Load Saved";
var SET = "[BOOK_POSITION] Set";
var SET_PARTIAL_TEXT = "[BOOK_POSITION] Set Partial Text";
var STEP = "[BOOK_POSITION] Step";
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

var StepAction = (function () {
    function StepAction(payload) {
        this.payload = payload;
        this.type = STEP;
    }
    return StepAction;
}());

//# sourceMappingURL=book-position.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__book__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__book__, "Paragraph")) __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return __WEBPACK_IMPORTED_MODULE_0__book__["Paragraph"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__book__, "Bookmark")) __webpack_require__.d(__webpack_exports__, "Bookmark", function() { return __WEBPACK_IMPORTED_MODULE_0__book__["Bookmark"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__book__, "Book")) __webpack_require__.d(__webpack_exports__, "Book", function() { return __WEBPACK_IMPORTED_MODULE_0__book__["Book"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__book__, "BookPosition")) __webpack_require__.d(__webpack_exports__, "BookPosition", function() { return __WEBPACK_IMPORTED_MODULE_0__book__["BookPosition"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bookmark__ = __webpack_require__(227);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Bookmark", function() { return __WEBPACK_IMPORTED_MODULE_1__bookmark__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_position__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_position___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__book_position__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__book_position__, "Paragraph")) __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return __WEBPACK_IMPORTED_MODULE_2__book_position__["Paragraph"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__book_position__, "Book")) __webpack_require__.d(__webpack_exports__, "Book", function() { return __WEBPACK_IMPORTED_MODULE_2__book_position__["Book"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__book_position__, "BookPosition")) __webpack_require__.d(__webpack_exports__, "BookPosition", function() { return __WEBPACK_IMPORTED_MODULE_2__book_position__["BookPosition"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paragraph__ = __webpack_require__(228);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return __WEBPACK_IMPORTED_MODULE_3__paragraph__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__user__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__user__, "Book")) __webpack_require__.d(__webpack_exports__, "Book", function() { return __WEBPACK_IMPORTED_MODULE_4__user__["Book"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__user__, "BookPosition")) __webpack_require__.d(__webpack_exports__, "BookPosition", function() { return __WEBPACK_IMPORTED_MODULE_4__user__["BookPosition"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_http_config__ = __webpack_require__(76);
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
//# sourceMappingURL=rest-http.service.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_position_service__ = __webpack_require__(132);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__book_position_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interval_service__ = __webpack_require__(133);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__interval_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paragraph_parser_service__ = __webpack_require__(134);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__paragraph_parser_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_services_module__ = __webpack_require__(243);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__utils_services_module__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(190);


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GET_ALL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return WRITE; });
/* unused harmony export GetAllAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GetByIdAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoadAction; });
/* unused harmony export WriteAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return WriteFinishAction; });
var GET_ALL = "[BOOK] Get All";
var GET_BY_ID = "[BOOK] Get By Id";
var LOAD = "[BOOK] Load";
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

/***/ 75:
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

//# sourceMappingURL=user-details.js.map

/***/ }),

/***/ 76:
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
//# sourceMappingURL=rest-http.config.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__readable_api_service__ = __webpack_require__(126);
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

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bookmarks_api_service__ = __webpack_require__(128);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__bookmarks_api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__books_api_service__ = __webpack_require__(129);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__books_api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__specialized_api_module__ = __webpack_require__(239);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__specialized_api_module__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_user_details__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_auth__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__browser_utils__ = __webpack_require__(31);
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
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
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

//# sourceMappingURL=local-storage.service.js.map

/***/ })

},[574]);
//# sourceMappingURL=main.bundle.js.map