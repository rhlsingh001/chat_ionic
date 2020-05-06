(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["business-business-module"],{

/***/ "./src/app/business/business.module.ts":
/*!*********************************************!*\
  !*** ./src/app/business/business.module.ts ***!
  \*********************************************/
/*! exports provided: BusinessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessPageModule", function() { return BusinessPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _business_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./business.page */ "./src/app/business/business.page.ts");
/**
 * Chatter - Chat themes Ionic 4 (https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _business_page__WEBPACK_IMPORTED_MODULE_5__["BusinessPage"]
    }
];
var BusinessPageModule = /** @class */ (function () {
    function BusinessPageModule() {
    }
    BusinessPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_business_page__WEBPACK_IMPORTED_MODULE_5__["BusinessPage"]]
        })
    ], BusinessPageModule);
    return BusinessPageModule;
}());



/***/ }),

/***/ "./src/app/business/business.page.html":
/*!*********************************************!*\
  !*** ./src/app/business/business.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"header\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">Business</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon name=\"contact\" slot=\"icon-only\" color=\"light\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"contentBg\" #content id=\"chat-parent\" overflow-scroll=\"true\" (ionScrollStart)=\"logScrollStart()\"\r\n  (ionScroll)=\"logScrolling($event)\">\r\n  <div>\r\n    <div id=\"chat-container\">\r\n      <span class=\"line-style\"></span>\r\n      <hr>\r\n      <div class=\"message-wrap\">\r\n        <div *ngFor=\"let msg of msgList;let i = index; let first = first; let last = last\" class=\"message\">\r\n\r\n          <div class=\"message-left\" *ngIf=\"msg.userId == toUser\">\r\n            <img class=\"user-img\" [src]=\"msg.userAvatar\">\r\n            <div class=\"msg-detail\">\r\n              <div class=\"msg-content\">\r\n                <p class=\"line-breaker \">{{msg.message}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"message-right\" *ngIf=\"msg.userId == User\">\r\n            <ion-spinner name=\"dots\" *ngIf=\"msg.status === 'pending'\"></ion-spinner>\r\n            <div class=\"msg-detail\">\r\n              <div class=\"msg-info\">\r\n              </div>\r\n              <div class=\"msg-content\">\r\n                <p class=\"line-breaker  \">{{msg.message}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer\">\r\n  <ion-toolbar class=\"footerSections\">\r\n    <div class=\"containerFooter\">\r\n      <div class=\"inputConatiner\">\r\n        <ion-input class=\"placeholdertext inputMessage inputBg\" type=\"text\" placeholder=\"Type a message\" [(ngModel)]=\"inp_text\"\r\n          autofocus=\"true\" padding-start></ion-input>\r\n      </div>\r\n      <div class=\"send-button-parent\">\r\n        <ion-button (click)=\"sendMsg()\" class=\"sendBtn\" color=\"primary\">\r\n          <ion-icon class=\"sendBtn-icon\" name=\"send\" color=\"light\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/business/business.page.scss":
/*!*********************************************!*\
  !*** ./src/app/business/business.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\r\n * Chatter - Chat themes Ionic 4 (https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n * \r\n */\n#chat-parent {\n  scroll-behavior: smooth; }\n.header {\n  --background:#224068; }\n.headerColor {\n  --color:#fff;\n  color: #fff; }\n.line-breaker {\n  white-space: pre-line; }\n.input-wrap {\n  display: flex; }\n.input-wrap input {\n    flex: 1;\n    border: 0;\n    border-style: solid;\n    padding: 10px; }\n.contentBg {\n  --background: #2f517c;\n  --background: -webkit-linear-gradient(to bottom, #2f517c, #56b4d3);\n  /* Chrome 10-25, Safari 5.1-6 */\n  --background: linear-gradient(to bottom, #2f517c, #56b4d3);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  padding-bottom: 0 !important;\n  --padding-bootm:0 !important;\n  scroll-behavior: smooth; }\n.message-wrap .message {\n  position: relative;\n  padding: 7px 0; }\n.message-wrap .message .user-img {\n    position: absolute;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 45px;\n    width: 35px;\n    height: 35px;\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.36); }\n.message-wrap .message .msg-detail {\n    width: 100%;\n    display: inline-block;\n    position: relative; }\n.message-wrap .message .msg-detail p {\n      margin: 0;\n      font-size: 14px; }\n.message-wrap .message .msg-detail .msg-info p {\n      font-size: .8em;\n      color: #888; }\n.message-wrap .message .msg-detail .msg-content {\n      position: relative;\n      border-radius: 5px;\n      padding: 8px;\n      width: auto;\n      max-width: 80%; }\n.message-wrap .message .msg-detail .msg-content .line-breaker {\n        white-space: pre-line;\n        padding-left: 7px; }\n.message-wrap .message-left .msg-content {\n  float: left;\n  position: relative;\n  background: rgba(37, 61, 99, 0.8);\n  color: #fff; }\n.message-wrap .message-left .msg-content :before {\n    content: \"\";\n    position: absolute;\n    background: transparent;\n    width: 10px;\n    height: 8px;\n    left: -10px;\n    top: 9px;\n    box-sizing: border-box;\n    border-right: 10px solid rgba(37, 61, 99, 0.8);\n    border-top: 8px solid transparent;\n    border-bottom: 8px solid transparent; }\n.message-wrap .message-left .msg-detail {\n  padding-left: 52px; }\n.message-wrap .message-left .user-img {\n  left: 0;\n  z-index: 9999; }\n.message-wrap .message-right .msg-detail .msg-info {\n  text-align: right; }\n.message-wrap .message-right .user-img {\n  right: 0; }\n.message-wrap .message-right .msg-content {\n  float: right;\n  color: #2a2828;\n  background: rgba(240, 240, 240, 0.8); }\n.avatarImg {\n  border-radius: 50%;\n  width: 34px;\n  border: 1px solid black;\n  height: 34px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n.userProdDetail {\n  border: 5px solid gray !important;\n  padding: 0px; }\n.rate {\n  font-size: 18px;\n  font-weight: bold;\n  margin-top: 0px; }\n.proImg {\n  height: 65px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 70px;\n  border-radius: 5%; }\n.detail {\n  font-size: 16px;\n  color: #3b5998 !important;\n  font-weight: bold; }\n.msgSpace {\n  margin-right: 8px !important; }\n.iconMsg {\n  background-color: transparent !important;\n  margin-right: -12px !important; }\n.containerFooter {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n.sendBtn-icon {\n  font-size: 30px; }\n.send-button-parent {\n  padding: 0 6px 0 8px; }\n.backbtn {\n  margin-right: 10px !important;\n  font-size: 3.4rem !important;\n  color: black !important; }\n.sendBtn {\n  opacity: 1 !important;\n  height: 40px; }\n.inputConatiner {\n  width: 80%; }\n.inputMessage {\n  border: 1px solid #d8d8e0;\n  border-radius: 10px; }\n.footer {\n  display: flex;\n  align-items: center; }\n.arrow-left {\n  position: absolute;\n  left: -11px;\n  width: 0 !important;\n  height: 0 !important;\n  border-top: 10px solid transparent !important;\n  border-bottom: 10px solid transparent !important;\n  border-right: 10px solid #253D63 !important; }\nspan.line-style {\n  position: absolute;\n  border-left: 3px solid #fff;\n  margin-left: 16px;\n  height: 100%;\n  max-height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0; }\nspan.triangle {\n  border-radius: 2px;\n  height: 14px;\n  width: 14px;\n  top: 14px;\n  display: block;\n  border-style: solid;\n  border-color: rgba(37, 61, 99, 0.83);\n  border-width: 1px;\n  transform: rotate(45deg);\n  position: absolute;\n  background: rgba(37, 61, 99, 0.83);\n  left: 53px; }\n.footerSections {\n  --background:#bdccd3;\n  background: #bdccd3; }\n.inputBg {\n  background: #fff; }\n@-webkit-keyframes dash {\n  from {\n    stroke-dashoffset: 1000; }\n  to {\n    stroke-dashoffset: 0; } }\n@keyframes dash {\n  from {\n    stroke-dashoffset: 1000; }\n  to {\n    stroke-dashoffset: 0; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzaW5lc3MvYnVzaW5lc3MucGFnZS5zY3NzIiwiL3Zhci93d3cvaHRtbC9UaWx0b2svdGVtcGF0ZS9mcmVlLWNoYXQtdGhlbWVzLWlvbmljNC1jaGF0dGVyL3NyYy9hcHAvYnVzaW5lc3MvYnVzaW5lc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjs7Ozs7Ozs7RURRRTtBQ0lGO0VBQ0UsdUJBQXVCLEVBQUE7QUFFekI7RUFDRSxvQkFBYSxFQUFBO0FBRWY7RUFDRSxZQUFRO0VBQ1AsV0FBVSxFQUFBO0FBRVo7RUFDQyxxQkFBcUIsRUFBQTtBQUV2QjtFQUNFLGFBQWEsRUFBQTtBQURmO0lBR0ksT0FBTztJQUNQLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsYUFBYSxFQUFBO0FBR2pCO0VBQ0UscUJBQWE7RUFDYixrRUFBYTtFQUF1RCwrQkFBQTtFQUNwRSwwREFBYTtFQUErQyxxRUFBQTtFQUM1RCw0QkFBNEI7RUFDNUIsNEJBQWdCO0VBQ2hCLHVCQUF1QixFQUFBO0FBRXpCO0VBS0ksa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTtBQU5sQjtJQVFNLGtCQUFrQjtJQUNsQixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVDQUF1QyxFQUFBO0FBYjdDO0lBZ0JNLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUE7QUFsQnhCO01Bb0JRLFNBQVM7TUFDVCxlQUFlLEVBQUE7QUFyQnZCO01BeUJVLGVBQWU7TUFDZixXQUFXLEVBQUE7QUExQnJCO01BOEJRLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFdBQVc7TUFDWCxjQUFjLEVBQUE7QUFsQ3RCO1FBcUNZLHFCQUFxQjtRQUNyQixpQkFBaUIsRUFBQTtBQXRDN0I7RUE2Q00sV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsV0FBVyxFQUFBO0FBaERqQjtJQWtEUSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLDhDQUE4QztJQUM5QyxpQ0FBaUM7SUFDakMsb0NBQW9DLEVBQUE7QUE1RDVDO0VBZ0VNLGtCQUFrQixFQUFBO0FBaEV4QjtFQW1FTSxPQUFPO0VBQ1AsYUFBYSxFQUFBO0FBcEVuQjtFQTJFUSxpQkFBaUIsRUFBQTtBQTNFekI7RUFnRk0sUUFBUSxFQUFBO0FBaEZkO0VBbUZNLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0NBQW9DLEVBQUE7QUFNMUM7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVTtFQUNWLHVCQUF1QjtFQUN2QixZQUFXO0VBQ1gsb0JBQ0Y7S0FERSxpQkFDRixFQUFBO0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsWUFBWSxFQUFBO0FBR2Q7RUFDRSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGVBQ0YsRUFBQTtBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsZUFBYztFQUNkLHlCQUErQjtFQUMvQixpQkFBaUIsRUFBQTtBQWlCbkI7RUFDRSw0QkFBNEIsRUFBQTtBQUc5QjtFQUNFLHdDQUF3QztFQUN4Qyw4QkFBNkIsRUFBQTtBQUcvQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7QUFHckI7RUFFRSxlQUFlLEVBQUE7QUFFakI7RUFDRSxvQkFBb0IsRUFBQTtBQUl0QjtFQUNFLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsdUJBQXVCLEVBQUE7QUFFekI7RUFDRSxxQkFBcUI7RUFDckIsWUFBWSxFQUFBO0FBRWQ7RUFDRSxVQUFTLEVBQUE7QUFHWDtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTtBQUdyQjtFQUVFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQiw2Q0FBNkM7RUFDN0MsZ0RBQWdEO0VBQ2hELDJDQUEwQyxFQUFBO0FBZTVDO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixpQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtFQUNmLE1BQUssRUFBQTtBQUlQO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLGlCQUFpQjtFQUVqQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxVQUFVLEVBQUE7QUFHWjtFQUNFLG9CQUFhO0VBQ2IsbUJBQW1CLEVBQUE7QUFFckI7RUFDRSxnQkFBZSxFQUFBO0FBSWpCO0VBQ0U7SUFDRSx1QkFBdUIsRUFBQTtFQUV6QjtJQUNFLG9CQUFvQixFQUFBLEVBQUE7QUFMeEI7RUFDRTtJQUNFLHVCQUF1QixFQUFBO0VBRXpCO0lBQ0Usb0JBQW9CLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzL2J1c2luZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxyXG4gKiBDaGF0dGVyIC0gQ2hhdCB0aGVtZXMgSW9uaWMgNCAoaHR0cHM6Ly93d3cuZW5hcHBkLmNvbSlcclxuICpcclxuICogQ29weXJpZ2h0IMKpIDIwMTgtcHJlc2VudCBFbmFwcGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcclxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSAuXHJcbiAqIFxyXG4gKi9cbiNjaGF0LXBhcmVudCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoOyB9XG5cbi5oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IzIyNDA2ODsgfVxuXG4uaGVhZGVyQ29sb3Ige1xuICAtLWNvbG9yOiNmZmY7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5saW5lLWJyZWFrZXIge1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7IH1cblxuLmlucHV0LXdyYXAge1xuICBkaXNwbGF5OiBmbGV4OyB9XG4gIC5pbnB1dC13cmFwIGlucHV0IHtcbiAgICBmbGV4OiAxO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIHBhZGRpbmc6IDEwcHg7IH1cblxuLmNvbnRlbnRCZyB7XG4gIC0tYmFja2dyb3VuZDogIzJmNTE3YztcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZjUxN2MsICM1NmI0ZDMpO1xuICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZjUxN2MsICM1NmI0ZDMpO1xuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1ib290bTowICFpbXBvcnRhbnQ7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoOyB9XG5cbi5tZXNzYWdlLXdyYXAgLm1lc3NhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDdweCAwOyB9XG4gIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLnVzZXItaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMzYpOyB9XG4gIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4OyB9XG4gICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAubXNnLWRldGFpbCAubXNnLWluZm8gcCB7XG4gICAgICBmb250LXNpemU6IC44ZW07XG4gICAgICBjb2xvcjogIzg4ODsgfVxuICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgbWF4LXdpZHRoOiA4MCU7IH1cbiAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IC5saW5lLWJyZWFrZXIge1xuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogN3B4OyB9XG5cbi5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UtbGVmdCAubXNnLWNvbnRlbnQge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDM3LCA2MSwgOTksIDAuOCk7XG4gIGNvbG9yOiAjZmZmOyB9XG4gIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UtbGVmdCAubXNnLWNvbnRlbnQgOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgbGVmdDogLTEwcHg7XG4gICAgdG9wOiA5cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgcmdiYSgzNywgNjEsIDk5LCAwLjgpO1xuICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7IH1cblxuLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS1sZWZ0IC5tc2ctZGV0YWlsIHtcbiAgcGFkZGluZy1sZWZ0OiA1MnB4OyB9XG5cbi5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UtbGVmdCAudXNlci1pbWcge1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTk5OyB9XG5cbi5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UtcmlnaHQgLm1zZy1kZXRhaWwgLm1zZy1pbmZvIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cblxuLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS1yaWdodCAudXNlci1pbWcge1xuICByaWdodDogMDsgfVxuXG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlLXJpZ2h0IC5tc2ctY29udGVudCB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICMyYTI4Mjg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC44KTsgfVxuXG4uYXZhdGFySW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMzRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogMzRweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7IH1cblxuLnVzZXJQcm9kRGV0YWlsIHtcbiAgYm9yZGVyOiA1cHggc29saWQgZ3JheSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHg7IH1cblxuLnJhdGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAwcHg7IH1cblxuLnByb0ltZyB7XG4gIGhlaWdodDogNjVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiA1JTsgfVxuXG4uZGV0YWlsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzNiNTk5OCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4ubXNnU3BhY2Uge1xuICBtYXJnaW4tcmlnaHQ6IDhweCAhaW1wb3J0YW50OyB9XG5cbi5pY29uTXNnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTJweCAhaW1wb3J0YW50OyB9XG5cbi5jb250YWluZXJGb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi5zZW5kQnRuLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7IH1cblxuLnNlbmQtYnV0dG9uLXBhcmVudCB7XG4gIHBhZGRpbmc6IDAgNnB4IDAgOHB4OyB9XG5cbi5iYWNrYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMy40cmVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50OyB9XG5cbi5zZW5kQnRuIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHg7IH1cblxuLmlucHV0Q29uYXRpbmVyIHtcbiAgd2lkdGg6IDgwJTsgfVxuXG4uaW5wdXRNZXNzYWdlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDhlMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgfVxuXG4uZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uYXJyb3ctbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTExcHg7XG4gIHdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICMyNTNENjMgIWltcG9ydGFudDsgfVxuXG5zcGFuLmxpbmUtc3R5bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwOyB9XG5cbnNwYW4udHJpYW5nbGUge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGhlaWdodDogMTRweDtcbiAgd2lkdGg6IDE0cHg7XG4gIHRvcDogMTRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgzNywgNjEsIDk5LCAwLjgzKTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgzNywgNjEsIDk5LCAwLjgzKTtcbiAgbGVmdDogNTNweDsgfVxuXG4uZm9vdGVyU2VjdGlvbnMge1xuICAtLWJhY2tncm91bmQ6I2JkY2NkMztcbiAgYmFja2dyb3VuZDogI2JkY2NkMzsgfVxuXG4uaW5wdXRCZyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cblxuQGtleWZyYW1lcyBkYXNoIHtcbiAgZnJvbSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7IH1cbiAgdG8ge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwOyB9IH1cbiIsIlxyXG4vKipcclxuICogQ2hhdHRlciAtIENoYXQgdGhlbWVzIElvbmljIDQgKGh0dHBzOi8vd3d3LmVuYXBwZC5jb20pXHJcbiAqXHJcbiAqIENvcHlyaWdodCDCqSAyMDE4LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXHJcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxyXG4gKiBcclxuICovXHJcblxyXG5cclxuXHJcbiNjaGF0LXBhcmVudHtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG4uaGVhZGVye1xyXG4gIC0tYmFja2dyb3VuZDojMjI0MDY4O1xyXG59XHJcbi5oZWFkZXJDb2xvcntcclxuICAtLWNvbG9yOiNmZmY7XHJcbiAgIGNvbG9yOiNmZmY7XHJcbn1cclxuIC5saW5lLWJyZWFrZXIge1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufVxyXG4uaW5wdXQtd3JhcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBpbnB1dCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG59XHJcbi5jb250ZW50Qmd7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMmY1MTdjO1xyXG4gIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmY1MTdjLCAjNTZiNGQzKTsgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZjUxN2MsICM1NmI0ZDMpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAtLXBhZGRpbmctYm9vdG06MCAhaW1wb3J0YW50O1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcbi5tZXNzYWdlLXdyYXAge1xyXG4gIC8vIHBhZGRpbmc6IDAgMTBweDtcclxuICBcclxuICBcclxuICAubWVzc2FnZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA3cHggMDtcclxuICAgIC51c2VyLWltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcbiAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjM2KTtcclxuICAgIH1cclxuICAgIC5tc2ctZGV0YWlsIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5tc2ctaW5mbyB7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICAgICAgICBjb2xvcjogIzg4ODtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLm1zZy1jb250ZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgICAgICBcclxuICAgICAgICAubGluZS1icmVha2VyIHtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tZXNzYWdlLWxlZnQge1xyXG4gICAgLm1zZy1jb250ZW50IHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgzNywgNjEsIDk5LCAwLjgpO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgOmJlZm9yZXtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICBsZWZ0OiAtMTBweDtcclxuICAgICAgICB0b3A6IDlweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCByZ2JhKDM3LCA2MSwgOTksIDAuOCk7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1zZy1kZXRhaWwge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDUycHg7XHJcbiAgICB9XHJcbiAgICAudXNlci1pbWcge1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgfVxyXG4gIH1cclxuICAubWVzc2FnZS1yaWdodCB7XHJcbiAgICAubXNnLWRldGFpbCB7XHJcbiAgICAgIC8vIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcbiAgICAgIC5tc2ctaW5mbyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC51c2VyLWltZyB7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLm1zZy1jb250ZW50IHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBjb2xvcjogIzJhMjgyODtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxufVxyXG5cclxuLmF2YXRhckltZ3tcclxuICBib3JkZXItcmFkaXVzOiA1MCU7IFxyXG4gIHdpZHRoOjM0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgaGVpZ2h0OjM0cHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXJcclxufVxyXG5cclxuLnVzZXJQcm9kRGV0YWlse1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDsgXHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4ucmF0ZXtcclxuICBmb250LXNpemU6MThweDtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIG1hcmdpbi10b3A6IDBweFxyXG59XHJcblxyXG4ucHJvSW1ne1xyXG4gIGhlaWdodDogNjVweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB3aWR0aDogNzBweDtcclxuICBib3JkZXItcmFkaXVzOiA1JTtcclxufVxyXG5cclxuLmRldGFpbHtcclxuICBmb250LXNpemU6MTZweDtcclxuICBjb2xvcjpyZ2IoNTksODksMTUyKSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vLyAubXNnU2Nyb2xse1xyXG4vLyAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuLy8gICBoZWlnaHQ6NTBweCAhaW1wb3J0YW50O1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuLy8gICAvLyBtYXJnaW4tYm90dG9tOjZweCAhaW1wb3J0YW50OyBcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXHJcbi8vICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5yb3dTY3JvbGx7XHJcbi8vICAgbWFyZ2luLXRvcDogN3B4ICFpbXBvcnRhbnQ7XHJcbi8vICAgcGFkZGluZy1sZWZ0OiA0cHhcclxuLy8gfVxyXG5cclxuLm1zZ1NwYWNle1xyXG4gIG1hcmdpbi1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY29uTXNne1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0Oi0xMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXJGb290ZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZW5kQnRuLWljb257XHJcbiAgLy8gbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5zZW5kLWJ1dHRvbi1wYXJlbnR7XHJcbiAgcGFkZGluZzogMCA2cHggMCA4cHg7XHJcbn1cclxuXHJcblxyXG4uYmFja2J0bntcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDMuNHJlbSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcbi5zZW5kQnRue1xyXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmlucHV0Q29uYXRpbmVye1xyXG4gIHdpZHRoOjgwJTtcclxufVxyXG5cclxuLmlucHV0TWVzc2FnZXtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGUwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgLy8gbWluLWhlaWdodDogNzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hcnJvdy1sZWZ0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTExcHg7XHJcbiAgd2lkdGg6IDAgIWltcG9ydGFudDsgXHJcbiAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7IFxyXG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IFxyXG4gIGJvcmRlci1yaWdodDoxMHB4IHNvbGlkICMyNTNENjMgIWltcG9ydGFudDsgIFxyXG59XHJcblxyXG4vLyBzcGFuLmxpbmUtc3R5bGUge1xyXG4vLyAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4vLyAgIGhlaWdodDogMTAwdmg7XHJcbi8vICAgbWF4LWhlaWdodDogMTAwdmg7XHJcbi8vICAgd2lkdGg6IDNweDtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgYmFja2dyb3VuZDogI2ZmZjtcclxuLy8gICBsZWZ0OiAxNnB4O1xyXG4vLyAgIHRvcDogLTc0cHg7XHJcblxyXG4vLyB9XHJcblxyXG5zcGFuLmxpbmUtc3R5bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNmZmY7XHJcbiAgbWFyZ2luLWxlZnQ6MTZweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOjA7XHJcbiAgXHJcbn1cclxuXHJcbnNwYW4udHJpYW5nbGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBoZWlnaHQ6IDE0cHg7XHJcbiAgd2lkdGg6IDE0cHg7XHJcbiAgdG9wOiAxNHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDM3LCA2MSwgOTksIDAuODMpO1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgzNywgNjEsIDk5LCAwLjgzKTtcclxuICBsZWZ0OiA1M3B4O1xyXG59XHJcblxyXG4uZm9vdGVyU2VjdGlvbnN7XHJcbiAgLS1iYWNrZ3JvdW5kOiNiZGNjZDM7XHJcbiAgYmFja2dyb3VuZDogI2JkY2NkMztcclxufVxyXG4uaW5wdXRCZ3tcclxuICBiYWNrZ3JvdW5kOiNmZmY7XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGRhc2gge1xyXG4gIGZyb20ge1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/business/business.page.ts":
/*!*******************************************!*\
  !*** ./src/app/business/business.page.ts ***!
  \*******************************************/
/*! exports provided: BusinessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessPage", function() { return BusinessPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/**
 * Chatter - Chat themes Ionic 4 (https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BusinessPage = /** @class */ (function () {
    function BusinessPage(events) {
        this.events = events;
        this.User = "Me";
        this.toUser = "driver";
        this.editorMsg = '';
        this.showEmojiPicker = false;
        this.count = 0;
        this.arr = [
            {
                "messageId": "1",
                "userId": "140000198202211138",
                "userName": "Luff",
                "userImgUrl": "./assets/user.jpg",
                "toUserId": "210000198410281948",
                "toUserName": "Hancock",
                "userAvatar": "./assets/to-user.jpg",
                "time": 1488349800000,
                "message": "Hey, that\'s an awesome chat UI",
                "status": "success"
            },
            {
                "messageId": "2",
                "userId": "210000198410281948",
                "userName": "Hancock",
                "userImgUrl": "./assets/to-user.jpg",
                "toUserId": "140000198202211138",
                "toUserName": "Luff",
                "userAvatar": "./assets/user.jpg",
                "time": 1491034800000,
                "message": "Right, it totally blew my mind. They have other great apps and designs too !",
                "status": "success"
            },
            {
                "messageId": "3",
                "userId": "140000198202211138",
                "userName": "Luff",
                "userImgUrl": "./assets/user.jpg",
                "toUserId": "210000198410281948",
                "toUserName": "Hancock",
                "userAvatar": "./assets/to-user.jpg",
                "time": 1491034920000,
                "message": "And it is free ?",
                "status": "success"
            },
            {
                "messageId": "4",
                "userId": "210000198410281948",
                "userName": "Hancock",
                "userImgUrl": "./assets/to-user.jpg",
                "toUserId": "140000198202211138",
                "toUserName": "Luff",
                "userAvatar": "./assets/user.jpg",
                "time": 1491036720000,
                "message": "Yes, totally free. Beat that ! ",
                "status": "success"
            },
            {
                "messageId": "5",
                "userId": "210000198410281948",
                "userName": "Hancock",
                "userImgUrl": "./assets/to-user.jpg",
                "toUserId": "140000198202211138",
                "toUserName": "Luff",
                "userAvatar": "./assets/user.jpg",
                "time": 1491108720000,
                "message": "Wow, that\'s so cool. Hats off to the developers. This is gooood stuff",
                "status": "success"
            },
            {
                "messageId": "6",
                "userId": "140000198202211138",
                "userName": "Luff",
                "userImgUrl": "./assets/user.jpg",
                "toUserId": "210000198410281948",
                "toUserName": "Hancock",
                "userAvatar": "./assets/to-user.jpg",
                "time": 1491231120000,
                "message": "Check out their other designs.",
                "status": "success"
            }
        ];
        this.msgList = [
            {
                userId: this.User,
                userName: this.User,
                userAvatar: "assets/driver.jpeg",
                time: "12:01 pm",
                message: 'Hey, that\'s an awesome chat UI',
                upertext: 'Hello'
            },
            {
                userId: this.toUser,
                userName: this.toUser,
                userAvatar: "assets/user.jpeg",
                time: "12:01 pm",
                message: "Right, it totally blew my mind. They have other great apps and designs too!",
                upertext: "Hii"
            },
            {
                userId: this.User,
                userName: this.User,
                userAvatar: "assets/driver.jpeg",
                time: "12:01 pm",
                message: 'And it is free ?',
                upertext: 'How r u '
            },
            {
                userId: this.toUser,
                userName: this.toUser,
                userAvatar: "assets/user.jpeg",
                time: "12:01 pm",
                message: 'Yes, totally free. Beat that !',
                upertext: 'good'
            },
            {
                userId: this.User,
                userName: this.User,
                userAvatar: "assets/driver.jpeg",
                time: "12:01 pm",
                message: 'Wow, that\'s so cool. Hats off to the developers. This is gooood stuff',
                upertext: 'How r u '
            },
            {
                userId: this.toUser,
                userName: this.toUser,
                userAvatar: "assets/user.jpeg",
                time: "12:01 pm",
                message: 'Check out their other designs.',
                upertext: 'good'
            },
            {
                userId: this.User,
                userName: this.User,
                userAvatar: "assets/driver.jpeg",
                time: "12:01 pm",
                message: 'Have you seen their other apps ? They have a collection of ready-made apps for developers. This makes my life so easy. I love it! ',
                upertext: 'How r u '
            },
            {
                userId: this.toUser,
                userName: this.toUser,
                userAvatar: "assets/user.jpeg",
                time: "12:01 pm",
                message: 'Well, good things come in small package after all',
                upertext: 'good'
            },
        ];
    }
    BusinessPage.prototype.ngOnInit = function () {
    };
    BusinessPage.prototype.scrollToBottom = function () {
        this.content.scrollToBottom(100);
    };
    BusinessPage.prototype.ionViewWillLeave = function () {
        this.events.unsubscribe('chat:received');
    };
    BusinessPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('scrollBottom');
        setTimeout(function () {
            _this.scrollToBottom();
        }, 500);
        console.log('scrollBottom2');
    };
    BusinessPage.prototype.logScrollStart = function () {
        console.log('logScrollStart');
        document.getElementById('chat-parent');
    };
    BusinessPage.prototype.logScrolling = function (event) {
        console.log('event', event);
    };
    BusinessPage.prototype.sendMsg = function () {
        var _this = this;
        var otherUser;
        if (this.count === 0) {
            otherUser = this.arr[0].message;
            this.count++;
        }
        else if (this.count == this.arr.length) {
            this.count = 0;
            otherUser = this.arr[this.count].message;
        }
        else {
            otherUser = this.arr[this.count].message;
            this.count++;
        }
        this.msgList.push({
            userId: this.User,
            userName: this.User,
            userAvatar: "assets/user.jpeg",
            time: "12:01 pm",
            message: this.inp_text,
            upertext: this.inp_text
        });
        this.msgList.push({
            userId: this.toUser,
            userName: this.toUser,
            userAvatar: "assets/user.jpeg",
            time: "12:01 pm",
            message: otherUser,
            upertext: otherUser
        });
        this.inp_text = "";
        console.log('scrollBottom');
        setTimeout(function () {
            _this.scrollToBottom();
        }, 10);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"])
    ], BusinessPage.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chat_input'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BusinessPage.prototype, "messageInput", void 0);
    BusinessPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-business',
            template: __webpack_require__(/*! ./business.page.html */ "./src/app/business/business.page.html"),
            styles: [__webpack_require__(/*! ./business.page.scss */ "./src/app/business/business.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"]])
    ], BusinessPage);
    return BusinessPage;
}());



/***/ })

}]);
//# sourceMappingURL=business-business-module.js.map