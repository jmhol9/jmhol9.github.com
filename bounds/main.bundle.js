webpackJsonp([1,4],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(284);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var INTERVAL_MILLISECONDS = 160;
var ReaderComponent = (function () {
    function ReaderComponent(elementRef, renderer, http) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.http = http;
        this.showReader = false;
        this.showFullText = false;
        this.idx = 0;
        this.wpm = 350;
        this._play = false;
        this.initHostClass();
    }
    Object.defineProperty(ReaderComponent.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (value) {
            if (value === this.text) {
                return;
            }
            this._text = value;
            if (this.text == null) {
                this.splitText = [];
            }
            this.splitText = this.getSplitText(this.text);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReaderComponent.prototype, "play", {
        get: function () {
            return this._play;
        },
        set: function (value) {
            value = (value != null && value !== false);
            if (value === this.play) {
                return;
            }
            this._play = value;
            this.togglePlaying();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReaderComponent.prototype, "intervalMs", {
        get: function () {
            return Math.floor(60 * 1000 / this.wpm);
        },
        enumerable: true,
        configurable: true
    });
    ReaderComponent.prototype.onClick = function (event) {
        this.onInteraction(event);
    };
    ReaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("text.txt")
            .subscribe(function (res) { return _this.extractText(res); });
    };
    ReaderComponent.prototype.extractText = function (res) {
        this.text = res.text();
    };
    ReaderComponent.prototype.initHostClass = function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, "reader", true);
    };
    ReaderComponent.prototype.onInteraction = function (event) {
        event.preventDefault();
        if (this.text) {
            this.play = !this.play;
        }
    };
    ReaderComponent.prototype.resetReader = function () {
        this.idx = 0;
        this.play = false;
    };
    ReaderComponent.prototype.togglePlaying = function () {
        if (this.play) {
            this.startPlaying();
        }
        else {
            this.stopPlaying();
        }
    };
    ReaderComponent.prototype.setPlayTimeout = function () {
        var _this = this;
        this.playTimeout = setTimeout(function () {
            _this.idx = _this.idx + 1;
            _this.currentWord = _this.splitText[_this.idx];
            if (_this.currentWord == null) {
                _this.resetReader();
            }
            _this.setPlayTimeout();
        }, this.getIntervalFromWord(this.currentWord));
    };
    ReaderComponent.prototype.startPlaying = function () {
        var stepBackward = this.showFullText ? -10 : -1;
        this.incrementIdx(stepBackward);
        this.showFullText = false;
        this.currentWord = this.text[this.idx];
        this.setPlayTimeout();
    };
    ReaderComponent.prototype.stopPlaying = function () {
        if (this.playTimeout == null) {
            return;
        }
        clearTimeout(this.playTimeout);
    };
    ReaderComponent.prototype.incrementIdx = function (numWords) {
        this.idx = this.idx + numWords;
        if (this.idx < 0) {
            this.idx = 0;
        }
    };
    ReaderComponent.prototype.getSplitText = function (text) {
        return text.split(/[\s-—–]+/);
    };
    ReaderComponent.prototype.getIntervalFromWord = function (word) {
        var interval = this.intervalMs;
        if (!!~word.indexOf(".") || !!~word.indexOf("?") || !!~word.indexOf("!")) {
            return interval * 2;
        }
        if (!!~word.indexOf(";")) {
            return interval * 2;
        }
        if (!!~word.indexOf(",")) {
            return interval * 1.6;
        }
        if (word.length >= 8) {
            return interval * 1.5;
        }
        return interval;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* HostListener */])("keydown.space", ["$event"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ReaderComponent.prototype, "onClick", null);
    ReaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: "app-reader",
            template: "\n    <app-controls-modal *ngIf=\"!showReader && !showFullText\"></app-controls-modal>\n    <app-reader-display\n      *ngIf=\"showReader && text\"\n      [word]=\"currentWord\"\n      (mousedown)=\"play = !play\"\n      (touchstart)=\"play = !play\">\n    </app-reader-display>\n    <app-full-text *ngIf=\"showFullText && !showReader && !play\"></app-full-text>\n    <app-reader-controls *ngIf=\"showReader || showFullText\"></app-reader-controls>\n  ",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Renderer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Renderer */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _c) || Object])
    ], ReaderComponent);
    return ReaderComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/reader-app/src/reader.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 344;


/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(453);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/reader-app/src/main.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(613),
            styles: [__webpack_require__(612)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/reader-app/src/app.component.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reader_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__controls_modal_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__full_text_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reader_controls_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reader_display_component__ = __webpack_require__(457);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__controls_modal_component__["a" /* ControlsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_7__full_text_component__["a" /* FullTextComponent */],
                __WEBPACK_IMPORTED_MODULE_8__reader_controls_component__["a" /* ReaderControlsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__reader_component__["a" /* ReaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__reader_display_component__["a" /* ReaderDisplayComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/reader-app/src/app.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reader_component__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlsModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControlsModalComponent = (function () {
    function ControlsModalComponent(parent, elementRef, renderer) {
        this.parent = parent;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.initHostClass();
    }
    ControlsModalComponent.prototype.initHostClass = function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, "reader__controls-modal", true);
    };
    ControlsModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: "app-controls-modal",
            template: "\n    <input class=\"input text-center\" type=\"number\" [(ngModel)]=\"parent.idx\">\n    <input class=\"input text-center\" type=\"number\" [(ngModel)]=\"parent.wpm\">\n    <button class=\"button\" (click)=\"parent.showFullText = true\">Go Go Go</button>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__reader_component__["a" /* ReaderComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__reader_component__["a" /* ReaderComponent */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Renderer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Renderer */]) === 'function' && _c) || Object])
    ], ControlsModalComponent);
    return ControlsModalComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/reader-app/src/controls-modal.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reader_component__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullTextComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FullTextComponent = (function () {
    function FullTextComponent(elementRef, parent, renderer) {
        this.elementRef = elementRef;
        this.parent = parent;
        this.renderer = renderer;
        this.renderer.setElementClass(this.elementRef.nativeElement, "reader__full-text", true);
    }
    Object.defineProperty(FullTextComponent.prototype, "splitText", {
        get: function () {
            if (this.parent.text == null) {
                return;
            }
            if (this.prevSplitText != null && this.prevSplitIdx === this.parent.idx) {
                return this.prevSplitText;
            }
            this.updateSplitText();
            return this.prevSplitText;
        },
        enumerable: true,
        configurable: true
    });
    FullTextComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToFocusEl();
    };
    FullTextComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.scrollToFocusEl();
        });
    };
    FullTextComponent.prototype.updateSplitText = function () {
        var text = this.parent.getSplitText(this.parent.text);
        this.prevSplitIdx = this.parent.idx;
        if (this.parent.idx === 0) {
            this.prevSplitText = [
                "",
                text[this.parent.idx],
                text.slice(this.parent.idx + 1).join(" ")
            ];
            return;
        }
        this.prevSplitText = [
            text.slice(0, this.parent.idx).join(" "),
            text[this.parent.idx],
            text.slice(this.parent.idx + 1).join(" ")
        ];
    };
    FullTextComponent.prototype.scrollToFocusEl = function () {
        if (this.focusEl) {
            this.renderer.invokeElementMethod(this.focusEl.nativeElement, "scrollIntoView");
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ViewChild */])("focusEl"), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object)
    ], FullTextComponent.prototype, "focusEl", void 0);
    FullTextComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: "app-full-text",
            template: "\n    <div *ngIf=\"splitText\">\n      <span>{{ splitText[0] }}</span>\n      <span #focusEl class=\"reader__full-text__focus\">{{ splitText[1] }}</span>\n      <span>{{ splitText[2] }}</span>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__reader_component__["a" /* ReaderComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__reader_component__["a" /* ReaderComponent */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Renderer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Renderer */]) === 'function' && _d) || Object])
    ], FullTextComponent);
    return FullTextComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/reader-app/src/full-text.component.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reader_component__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReaderControlsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReaderControlsComponent = (function () {
    function ReaderControlsComponent(elementRef, renderer, parent) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.parent = parent;
        this.showInput = false;
        this.renderer.setElementClass(this.elementRef.nativeElement, "reader__reader-controls", true);
    }
    Object.defineProperty(ReaderControlsComponent.prototype, "percentComplete", {
        get: function () {
            return Math.floor(this.parent.idx / this.parent.splitText.length * 1000) / 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReaderControlsComponent.prototype, "textLength", {
        get: function () {
            if (this.parent.text == null) {
                return "0";
            }
            return this.parent.splitText.length.toLocaleString();
        },
        enumerable: true,
        configurable: true
    });
    ReaderControlsComponent.prototype.onMouseEnter = function () {
        this.showInput = true;
    };
    ReaderControlsComponent.prototype.onMouseLeave = function () {
        this.showInput = false;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* HostListener */])("mouseenter"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ReaderControlsComponent.prototype, "onMouseEnter", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* HostListener */])("mouseleave"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ReaderControlsComponent.prototype, "onMouseLeave", null);
    ReaderControlsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: "app-reader-controls",
            template: "\n    <span *ngIf=\"parent.text != null\" class=\"reader__reader-controls__stats\">\n      {{ percentComplete }}% /\n      {{ textLength }} words /\n      {{ parent.wpm }} wpm /\n      <span\n        (touchstart)=\"parent.play = false; parent.showFullText = false; parent.showReader = false;\"\n        (mousedown)=\"parent.play = false; parent.showFullText = false; parent.showReader = false;\">\n        show options\n      </span>\n    </span>\n    <span *ngIf=\"parent.text != null && showInput\">\n      <input type=\"number\" [(ngModel)]=\"parent.idx\">\n    </span>\n    <span *ngIf=\"parent.text != null\" class=\"reader__reader-controls__buttons\">\n      <svg\n        id=\"ff-button\"\n        class=\"reversed\"\n        (click)=\"parent.incrementIdx(-50)\"\n        xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\"><path d=\"M50,0C22.4,0,0,22.4,0,50c0,27.6,22.4,50,50,50s50-22.4,50-50C100,22.4,77.6,0,50,0z M78.5,54.1l-22,18.3  c-2.7,2.3-5,1.2-5-2.3V54.8L30.4,72.5c-2.7,2.3-5,1.2-5-2.3V29.9c0-3.5,2.2-4.6,5-2.3l21.2,17.7V29.9c0-3.5,2.2-4.6,5-2.3l22,18.3  C81.2,48.1,81.2,51.9,78.5,54.1z\"/></svg>\n      <svg\n        id=\"ff-button\"\n        (click)=\"parent.incrementIdx(50)\"\n        xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" enable-background=\"new 0 0 100 100\" xml:space=\"preserve\"><path d=\"M50,0C22.4,0,0,22.4,0,50c0,27.6,22.4,50,50,50s50-22.4,50-50C100,22.4,77.6,0,50,0z M78.5,54.1l-22,18.3  c-2.7,2.3-5,1.2-5-2.3V54.8L30.4,72.5c-2.7,2.3-5,1.2-5-2.3V29.9c0-3.5,2.2-4.6,5-2.3l21.2,17.7V29.9c0-3.5,2.2-4.6,5-2.3l22,18.3  C81.2,48.1,81.2,51.9,78.5,54.1z\"/></svg>\n      <svg\n        id=\"play-button\"\n        *ngIf=\"!parent.play\"\n        (click)=\"parent.play = true; parent.showReader = true; parent.showFullText = false;\"\n        xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 48 48\" style=\"enable-background:new 0 0 48 48;\" xml:space=\"preserve\"><g><path d=\"M24,2C11.8,2,2,11.8,2,24s9.8,22,22,22s22-9.8,22-22S36.2,2,24,2z M33.1,25.7l-12,8c-0.9,0.6-2.2,0.4-2.8-0.6   C18.1,32.8,18,32.4,18,32V16c0-1.1,0.9-2,2-2c0.4,0,0.8,0.1,1.1,0.3l12,8c0.9,0.6,1.2,1.9,0.5,2.8C33.5,25.3,33.3,25.5,33.1,25.7z\"/></g></svg>\n        <svg\n          id=\"pause-button\"\n          *ngIf=\"parent.play\"\n          (click)=\"parent.play = false; parent.showReader = false; parent.showFullText = true;\"\n          xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 48 48\" style=\"enable-background:new 0 0 48 48;\" xml:space=\"preserve\"><g><path d=\"M24,1C11.3,1,1,11.3,1,24s10.3,23,23,23s23-10.3,23-23S36.7,1,24,1z M22,30.5c0,1.1-0.9,2-2,2s-2-0.9-2-2v-13   c0-1.1,0.9-2,2-2s2,0.9,2,2V30.5z M30,30.5c0,1.1-0.9,2-2,2s-2-0.9-2-2v-13c0-1.1,0.9-2,2-2s2,0.9,2,2V30.5z\"/></g></svg>\n    </span>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Renderer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Renderer */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__reader_component__["a" /* ReaderComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__reader_component__["a" /* ReaderComponent */]) === 'function' && _c) || Object])
    ], ReaderControlsComponent);
    return ReaderControlsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/reader-app/src/reader-controls.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReaderDisplayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReaderDisplayComponent = (function () {
    function ReaderDisplayComponent(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    Object.defineProperty(ReaderDisplayComponent.prototype, "word", {
        get: function () {
            return this._word;
        },
        set: function (value) {
            this._word = value;
            this.showWord();
        },
        enumerable: true,
        configurable: true
    });
    ReaderDisplayComponent.prototype.ngAfterViewInit = function () {
        this.initHostClass();
    };
    ReaderDisplayComponent.prototype.initHostClass = function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, "reader__display", true);
    };
    ReaderDisplayComponent.prototype.showWord = function () {
        var splitWord = this.splitWord();
        this.renderer.setElementAttribute(this.focusEl.nativeElement, "data-chars-before-focus", splitWord[0]);
        this.renderer.setElementProperty(this.focusEl.nativeElement, "innerText", splitWord[1]);
        this.renderer.setElementAttribute(this.focusEl.nativeElement, "data-chars-after-focus", splitWord[2]);
    };
    ReaderDisplayComponent.prototype.splitWord = function () {
        if (this.word == null) {
            return [];
        }
        if (this.word.length === 1) {
            return ["", this.word, ""];
        }
        if (this.word.length === 2) {
            return ["", this.word[0], this.word[1]];
        }
        var focusIdx = Math.floor(this.word.length * 0.34);
        return [
            this.word.slice(0, focusIdx),
            this.word[focusIdx],
            this.word.slice(focusIdx + 1)
        ];
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ViewChild */])("focusEl"), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object)
    ], ReaderDisplayComponent.prototype, "focusEl", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], ReaderDisplayComponent.prototype, "word", null);
    ReaderDisplayComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: "app-reader-display",
            template: "\n    <span class=\"reader__display__word-focus\" #focusEl>\n    </span>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Renderer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Renderer */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _c) || Object])
    ], ReaderDisplayComponent);
    return ReaderDisplayComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/reader-app/src/reader-display.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/jordan/gDrive/JMH-Projects/reader-app/src/environment.js.map

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 613:
/***/ (function(module, exports) {

module.exports = "<app-reader></app-reader>\n"

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(345);


/***/ })

},[626]);
//# sourceMappingURL=main.bundle.map