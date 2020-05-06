(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bubble-bubble-module"],{

/***/ "./src/app/bubble/bubble.module.ts":
/*!*****************************************!*\
  !*** ./src/app/bubble/bubble.module.ts ***!
  \*****************************************/
/*! exports provided: BubblePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubblePageModule", function() { return BubblePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bubble_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bubble.page */ "./src/app/bubble/bubble.page.ts");
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
        component: _bubble_page__WEBPACK_IMPORTED_MODULE_5__["BubblePage"]
    }
];
var BubblePageModule = /** @class */ (function () {
    function BubblePageModule() {
    }
    BubblePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_bubble_page__WEBPACK_IMPORTED_MODULE_5__["BubblePage"]]
        })
    ], BubblePageModule);
    return BubblePageModule;
}());



/***/ }),

/***/ "./src/app/bubble/bubble.page.html":
/*!*****************************************!*\
  !*** ./src/app/bubble/bubble.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\" text-center>\r\n      Bubble\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content #IonContent fullscreen=\"true\">\r\n  <ion-list>\r\n    <div *ngFor=\"let chat of msgList; let i = index; \">\r\n      <ion-row *ngIf=\"chat.userId == User\">\r\n        <ion-col class=\"right\" no-padding [ngClass]=\"{'clubbed':((msgList[i+1] && msgList[i+1].userId != chat.userId)|| !msgList[i+1])}\">\r\n          <div class=\"imageAvatarRight\">\r\n            <div class=\"imageAvatarBottom\">\r\n              <ion-avatar class=\"avatar\" [ngClass]=\"(msgList[i+1] && msgList[i+1].userId == chat.userId)?'hidden':''\">\r\n                <div class=\"imageAvatarBottomIcon\">\r\n                  <ion-icon name=\"add\" expand=\"icon-only\" color=\"light\"> </ion-icon>\r\n                </div>\r\n                <ion-img [src]=\"chat.userAvatar\"></ion-img>\r\n              </ion-avatar>\r\n            </div>\r\n            <ion-label color=\"light\">\r\n              <div class=\"chatDiv\" [ngClass]=\"{'sharper':((msgList[i+1] && msgList[i+1].userId == chat.userId) && \r\n              (msgList[i-1] && msgList[i-1].userId == chat.userId)),\r\n              'sharper-top':(msgList[i-1] && msgList[i-1].userId == chat.userId),\r\n              'sharper-bottom':(msgList[i+1] && msgList[i+1].userId == chat.userId)}\">\r\n                <p text-wrap padding>{{chat.message}}\r\n                </p>\r\n                <div class=\"corner-parent-right\">\r\n                  <div class=\"corner-child-right\">\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"chat.userId == toUser\">\r\n        <ion-col class=\"left\" no-padding [ngClass]=\"{'clubbed':((msgList[i+1] && msgList[i+1].userId != chat.userId)|| !msgList[i+1])}\">\r\n          <div class=\"imageAvatarLeft\">\r\n            <ion-label color=\"light\">\r\n              <div class=\"chatDiv\" [ngClass]=\"{'sharper':((msgList[i+1] && msgList[i+1].userId == chat.userId) && \r\n              (msgList[i-1] && msgList[i-1].userId == chat.userId)),\r\n              'sharper-top':(msgList[i-1] && msgList[i-1].userId == chat.userId),\r\n              'sharper-bottom':(msgList[i+1] && msgList[i+1].userId == chat.userId)}\">\r\n                <p text-wrap padding>{{chat.message}}</p>\r\n                <div class=\"corner-parent-left\">\r\n                  <div class=\"corner-child-left\">\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ion-label>\r\n            <div class=\"imageAvatarBottom\">\r\n              <!-- <ion-icon class=\"imageAvatarBottomIcon\" name=\"add\" expand=\"icon-only\" color=\"success\"></ion-icon> -->\r\n              <ion-avatar class=\"avatar\" [ngClass]=\"(msgList[i+1] && msgList[i+1].userId == chat.userId)?'hidden':''\">\r\n                <div class=\"imageAvatarBottomIcon\">\r\n                  <ion-icon name=\"add\" expand=\"icon-only\" color=\"light\"> </ion-icon>\r\n                </div>\r\n                <ion-img [src]=\"chat.userAvatar\"></ion-img>\r\n              </ion-avatar>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"((msgList[i+1] && msgList[i+1].userId != chat.userId)|| !msgList[i+1])\">\r\n        <ion-col>\r\n          <ion-text>{{chat.time}}</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-list>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\" sendMsg()\">\r\n      <ion-icon name=\"send\" expand=\"icon-only\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-row *ngIf=\"loader\">\r\n    <ion-col no-padding class=\"loading-col\">\r\n      <div class=\"imageAvatarRight\">\r\n        <div class=\"imageAvatarBottomLoader\">\r\n          <ion-avatar class=\"avatar\">\r\n            <div class=\"imageAvatarBottomIcon\">\r\n              <ion-icon name=\"add\" expand=\"icon-only\" color=\"light\"> </ion-icon>\r\n            </div>\r\n            <ion-img src=\"../../assets/chat/chat5.jpg\"></ion-img>\r\n          </ion-avatar>\r\n        </div>\r\n        <ion-label>\r\n          <div class=\"chatDivLoader\">\r\n              <ion-spinner name=\"dots\" color=\"light\"></ion-spinner>\r\n            <!-- <ion-img src=\"../../assets/chat/loader.gif\"></ion-img> -->\r\n            <!-- <p text-wrap padding> {{paramData.name || 'Pam'}} is typing...</p> -->\r\n            <div class=\"corner-parent-right\">\r\n              <div class=\"corner-child-right\">\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-label>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n\r\n<ion-footer translucent>\r\n  <ion-item>\r\n    <ion-icon slot=\"start\" name=\"camera\" expand=\"icon-only\" class=\"footerIcon\"></ion-icon>\r\n    <ion-input class=\"input-box\" type=\"text\" placeholder=\"Write a message...\" [(ngModel)]=\"user_input\" (keypress)=\"userTyping($event)\"></ion-input>\r\n  </ion-item>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/bubble/bubble.page.scss":
/*!*****************************************!*\
  !*** ./src/app/bubble/bubble.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\r\n * Chatter - Chat themes Ionic 4 (https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n * \r\n */\nion-content {\n  --background: radial-gradient(at 0 50%,rgb(173, 42, 162),#5B2573); }\nion-header {\n  --background: #5B2573\r\n; }\nion-toolbar,\nion-item {\n  --background: transparent; }\nion-list {\n  background: transparent;\n  padding-top: 20px;\n  margin-bottom: 0; }\n.imageAvatarRight {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end; }\n.imageAvatarRight .imageAvatarBottom {\n    max-width: 214px;\n    align-items: flex-end;\n    display: flex;\n    border-radius: 50%;\n    position: relative;\n    top: 6px;\n    z-index: 11; }\n.imageAvatarRight .avatar {\n    width: 50px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n.imageAvatarRight .imageAvatarBottomIcon {\n    width: 12px;\n    height: 12px;\n    border-radius: 50px;\n    background: var(--ion-color-tertiary-tint);\n    position: absolute;\n    top: 17%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    right: 10.1%;\n    color: white; }\n.imageAvatarRight .chatDiv {\n    text-align: justify;\n    position: relative;\n    background: #9164ac7a;\n    border-radius: 6px;\n    border-bottom-left-radius: 0;\n    max-width: 72vw;\n    box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.2); }\n.imageAvatarRight ion-img {\n    width: 35px;\n    height: 35px; }\n.imageAvatarRight .sharper.chatDiv {\n    border-radius: 0; }\n.imageAvatarRight .sharper-bottom.chatDiv {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0; }\n.imageAvatarRight .sharper-top.chatDiv {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n.imageAvatarLeft {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end; }\n.imageAvatarLeft .imageAvatarBottom {\n    max-width: 214px;\n    align-items: flex-end;\n    display: flex;\n    border-radius: 50%;\n    position: relative;\n    top: 6px;\n    z-index: 11; }\n.imageAvatarLeft .avatar {\n    width: 50px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n.imageAvatarLeft .imageAvatarBottomIcon {\n    width: 12px;\n    height: 12px;\n    border-radius: 50px;\n    background: var(--ion-color-tertiary-tint);\n    position: absolute;\n    top: 17%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    right: 10.1%;\n    color: white; }\n.imageAvatarLeft .chatDiv {\n    text-align: left;\n    position: relative;\n    background: #20b1d4;\n    border-radius: 6px;\n    border-bottom-right-radius: 0;\n    max-width: 72vw;\n    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2); }\n.imageAvatarLeft ion-img {\n    width: 35px;\n    height: 35px; }\n.imageAvatarLeft .sharper.chatDiv {\n    border-radius: 0; }\n.imageAvatarLeft .sharper-bottom.chatDiv {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0; }\n.imageAvatarLeft .sharper-top.chatDiv {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\nion-fab-button {\n  width: 47px !important;\n  height: 47px !important; }\nion-fab {\n  bottom: -22px !important; }\n.footerIcon {\n  color: rgba(244, 245, 248, 0.7); }\nion-input {\n  --placeholder-color: rgba(244, 245, 248, 0.7); }\n.chatDivLoader {\n  position: relative;\n  background: #9164ac7a;\n  border-radius: 16px;\n  min-width: 80px;\n  max-width: 80px;\n  display: flex;\n  align-items: center;\n  color: white;\n  padding: 2px;\n  display: flex;\n  justify-content: center; }\n.chatDivLoader .corner-parent-right {\n    background: #9164ac7a;\n    height: 10px;\n    width: 10px;\n    position: absolute;\n    left: -4px;\n    bottom: -2px;\n    border-radius: 0;\n    border-radius: 5px; }\n.chatDivLoader .corner-parent-right .corner-child-right {\n      width: 6px;\n      height: 6px;\n      border-radius: 3px;\n      background: #9164ac7a;\n      position: absolute;\n      top: 7px;\n      left: -7px; }\nion-text {\n  font-size: 12px;\n  color: #d7d8dac7; }\nion-col {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n.imageAvatarBottomLoader {\n  max-width: 214px;\n  align-items: flex-end;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 8px;\n  z-index: 11; }\n.hidden {\n  visibility: hidden; }\n.loading-col {\n  justify-content: flex-start;\n  padding-left: 20px; }\n.right {\n  justify-content: flex-start;\n  padding-left: 20px; }\n.left {\n  justify-content: flex-end;\n  padding-right: 20px; }\n.clubbed .imageAvatarRight .chatDiv .corner-parent-right {\n  height: 30px;\n  width: 30px;\n  background: transparent;\n  position: absolute;\n  left: -30px;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 0; }\n.clubbed .imageAvatarRight .chatDiv .corner-parent-right .corner-child-right {\n    width: 30px;\n    height: 30px;\n    border-radius: 15px;\n    background: transparent;\n    box-shadow: 15px 12px 0 0px #9164ac7a; }\n.clubbed .imageAvatarLeft .chatDiv .corner-parent-left {\n  height: 30px;\n  width: 30px;\n  background: transparent;\n  position: absolute;\n  right: -30px;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 0; }\n.clubbed .imageAvatarLeft .chatDiv .corner-parent-left .corner-child-left {\n    width: 30px;\n    height: 30px;\n    border-radius: 15px;\n    background: transparent;\n    box-shadow: -15px 12px 0 0px #20b1d4; }\n.input-box {\n  color: white; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnViYmxlL2J1YmJsZS5wYWdlLnNjc3MiLCIvdmFyL3d3dy9odG1sL1RpbHRvay90ZW1wYXRlL2ZyZWUtY2hhdC10aGVtZXMtaW9uaWM0LWNoYXR0ZXIvc3JjL2FwcC9idWJibGUvYnViYmxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0VEU0U7QUNFRjtFQUNFLGlFQUFhLEVBQUE7QUFFZjtFQUNFO0FBQWEsRUFBQTtBQUVmOztFQUVFLHlCQUFhLEVBQUE7QUFFZjtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7QUFFbEI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQixFQUFBO0FBSHZCO0lBS0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isa0JBQWtCO0lBRWxCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVyxFQUFBO0FBWmY7SUFlSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CLEVBQUE7QUFuQnZCO0lBc0JJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZLEVBQUE7QUFoQ2hCO0lBbUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFHNUIsZUFBZTtJQUNmLDJDQUF3QyxFQUFBO0FBM0M1QztJQThDSSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0FBL0NoQjtJQW1ETSxnQkFBZ0IsRUFBQTtBQW5EdEI7SUF3RE0sNEJBQTRCO0lBQzVCLDZCQUE2QixFQUFBO0FBekRuQztJQThETSx5QkFBeUI7SUFDekIsMEJBQTBCLEVBQUE7QUFNaEM7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHFCQUFxQixFQUFBO0FBSHZCO0lBS0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isa0JBQWtCO0lBRWxCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVyxFQUFBO0FBWmY7SUFlSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CLEVBQUE7QUFuQnZCO0lBc0JJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZLEVBQUE7QUFoQ2hCO0lBbUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFHN0IsZUFBZTtJQUNmLDBDQUF1QyxFQUFBO0FBM0MzQztJQThDSSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0FBL0NoQjtJQW1ETSxnQkFBZ0IsRUFBQTtBQW5EdEI7SUF3RE0sNEJBQTRCO0lBQzVCLDZCQUE2QixFQUFBO0FBekRuQztJQThETSx5QkFBeUI7SUFDekIsMEJBQTBCLEVBQUE7QUFJaEM7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7QUFFekI7RUFDRSx3QkFBd0IsRUFBQTtBQUUxQjtFQUNFLCtCQUErQixFQUFBO0FBRWpDO0VBQ0UsNkNBQW9CLEVBQUE7QUFFdEI7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7QUFYekI7SUFhSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7QUFwQnRCO01Bc0JNLFVBQVU7TUFDVixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLHFCQUFxQjtNQUNyQixrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFVBQVUsRUFBQTtBQUloQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtBQUVsQjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7QUFFckI7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXLEVBQUE7QUFFYjtFQUNFLGtCQUFrQixFQUFBO0FBRXBCO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQixFQUFBO0FBRXBCO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBO0FBR3JCO0VBSVEsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBO0FBWHhCO0lBYVUsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHFDQUFxQyxFQUFBO0FBakIvQztFQXlCUSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7QUFoQ3hCO0lBa0NVLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixvQ0FBb0MsRUFBQTtBQU05QztFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2J1YmJsZS9idWJibGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXHJcbiAqIENoYXR0ZXIgLSBDaGF0IHRoZW1lcyBJb25pYyA0IChodHRwczovL3d3dy5lbmFwcGQuY29tKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgwqkgMjAxOC1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxyXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cclxuICogXHJcbiAqL1xuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChhdCAwIDUwJSxyZ2IoMTczLCA0MiwgMTYyKSwjNUIyNTczKTsgfVxuXG5pb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNUIyNTczXHJcbjsgfVxuXG5pb24tdG9vbGJhcixcbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG4uaW1hZ2VBdmF0YXJSaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7IH1cbiAgLmltYWdlQXZhdGFyUmlnaHQgLmltYWdlQXZhdGFyQm90dG9tIHtcbiAgICBtYXgtd2lkdGg6IDIxNHB4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA2cHg7XG4gICAgei1pbmRleDogMTE7IH1cbiAgLmltYWdlQXZhdGFyUmlnaHQgLmF2YXRhciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuaW1hZ2VBdmF0YXJSaWdodCAuaW1hZ2VBdmF0YXJCb3R0b21JY29uIHtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktdGludCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTclO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICByaWdodDogMTAuMSU7XG4gICAgY29sb3I6IHdoaXRlOyB9XG4gIC5pbWFnZUF2YXRhclJpZ2h0IC5jaGF0RGl2IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiAjOTE2NGFjN2E7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgbWF4LXdpZHRoOiA3MnZ3O1xuICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7IH1cbiAgLmltYWdlQXZhdGFyUmlnaHQgaW9uLWltZyB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4OyB9XG4gIC5pbWFnZUF2YXRhclJpZ2h0IC5zaGFycGVyLmNoYXREaXYge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cbiAgLmltYWdlQXZhdGFyUmlnaHQgLnNoYXJwZXItYm90dG9tLmNoYXREaXYge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7IH1cbiAgLmltYWdlQXZhdGFyUmlnaHQgLnNoYXJwZXItdG9wLmNoYXREaXYge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7IH1cblxuLmltYWdlQXZhdGFyTGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgfVxuICAuaW1hZ2VBdmF0YXJMZWZ0IC5pbWFnZUF2YXRhckJvdHRvbSB7XG4gICAgbWF4LXdpZHRoOiAyMTRweDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNnB4O1xuICAgIHotaW5kZXg6IDExOyB9XG4gIC5pbWFnZUF2YXRhckxlZnQgLmF2YXRhciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuaW1hZ2VBdmF0YXJMZWZ0IC5pbWFnZUF2YXRhckJvdHRvbUljb24ge1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNyU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHJpZ2h0OiAxMC4xJTtcbiAgICBjb2xvcjogd2hpdGU7IH1cbiAgLmltYWdlQXZhdGFyTGVmdCAuY2hhdERpdiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogIzIwYjFkNDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgbWF4LXdpZHRoOiA3MnZ3O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgfVxuICAuaW1hZ2VBdmF0YXJMZWZ0IGlvbi1pbWcge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDsgfVxuICAuaW1hZ2VBdmF0YXJMZWZ0IC5zaGFycGVyLmNoYXREaXYge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cbiAgLmltYWdlQXZhdGFyTGVmdCAuc2hhcnBlci1ib3R0b20uY2hhdERpdiB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDsgfVxuICAuaW1hZ2VBdmF0YXJMZWZ0IC5zaGFycGVyLXRvcC5jaGF0RGl2IHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwOyB9XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgd2lkdGg6IDQ3cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0N3B4ICFpbXBvcnRhbnQ7IH1cblxuaW9uLWZhYiB7XG4gIGJvdHRvbTogLTIycHggIWltcG9ydGFudDsgfVxuXG4uZm9vdGVySWNvbiB7XG4gIGNvbG9yOiByZ2JhKDI0NCwgMjQ1LCAyNDgsIDAuNyk7IH1cblxuaW9uLWlucHV0IHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgyNDQsIDI0NSwgMjQ4LCAwLjcpOyB9XG5cbi5jaGF0RGl2TG9hZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjOTE2NGFjN2E7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG1pbi13aWR0aDogODBweDtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgLmNoYXREaXZMb2FkZXIgLmNvcm5lci1wYXJlbnQtcmlnaHQge1xuICAgIGJhY2tncm91bmQ6ICM5MTY0YWM3YTtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC00cHg7XG4gICAgYm90dG9tOiAtMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XG4gICAgLmNoYXREaXZMb2FkZXIgLmNvcm5lci1wYXJlbnQtcmlnaHQgLmNvcm5lci1jaGlsZC1yaWdodCB7XG4gICAgICB3aWR0aDogNnB4O1xuICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjOTE2NGFjN2E7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDdweDtcbiAgICAgIGxlZnQ6IC03cHg7IH1cblxuaW9uLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZDdkOGRhYzc7IH1cblxuaW9uLWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi5pbWFnZUF2YXRhckJvdHRvbUxvYWRlciB7XG4gIG1heC13aWR0aDogMjE0cHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOHB4O1xuICB6LWluZGV4OiAxMTsgfVxuXG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG5cbi5sb2FkaW5nLWNvbCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4OyB9XG5cbi5yaWdodCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4OyB9XG5cbi5sZWZ0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy1yaWdodDogMjBweDsgfVxuXG4uY2x1YmJlZCAuaW1hZ2VBdmF0YXJSaWdodCAuY2hhdERpdiAuY29ybmVyLXBhcmVudC1yaWdodCB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0zMHB4O1xuICBib3R0b206IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cbiAgLmNsdWJiZWQgLmltYWdlQXZhdGFyUmlnaHQgLmNoYXREaXYgLmNvcm5lci1wYXJlbnQtcmlnaHQgLmNvcm5lci1jaGlsZC1yaWdodCB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzogMTVweCAxMnB4IDAgMHB4ICM5MTY0YWM3YTsgfVxuXG4uY2x1YmJlZCAuaW1hZ2VBdmF0YXJMZWZ0IC5jaGF0RGl2IC5jb3JuZXItcGFyZW50LWxlZnQge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTMwcHg7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxuICAuY2x1YmJlZCAuaW1hZ2VBdmF0YXJMZWZ0IC5jaGF0RGl2IC5jb3JuZXItcGFyZW50LWxlZnQgLmNvcm5lci1jaGlsZC1sZWZ0IHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiAtMTVweCAxMnB4IDAgMHB4ICMyMGIxZDQ7IH1cblxuLmlucHV0LWJveCB7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuIiwiLyoqXHJcbiAqIENoYXR0ZXIgLSBDaGF0IHRoZW1lcyBJb25pYyA0IChodHRwczovL3d3dy5lbmFwcGQuY29tKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgwqkgMjAxOC1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxyXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cclxuICogXHJcbiAqL1xyXG5cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChhdCAwIDUwJSxyZ2IoMTczLCA0MiwgMTYyKSwjNUIyNTczKTtcclxufVxyXG5pb24taGVhZGVye1xyXG4gIC0tYmFja2dyb3VuZDogIzVCMjU3M1xyXG59XHJcbmlvbi10b29sYmFyLFxyXG5pb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5pb24tbGlzdCB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uaW1hZ2VBdmF0YXJSaWdodCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgLmltYWdlQXZhdGFyQm90dG9tIHtcclxuICAgIG1heC13aWR0aDogMjE0cHg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLy8gYmFja2dyb3VuZDogIzVCMjU3MztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNnB4O1xyXG4gICAgei1pbmRleDogMTE7XHJcbiAgfVxyXG4gIC5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuaW1hZ2VBdmF0YXJCb3R0b21JY29uIHtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTclO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHJpZ2h0OiAxMC4xJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmNoYXREaXYge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICM5MTY0YWM3YTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICAgLy8gbWluLXdpZHRoOiA3MnZ3O1xyXG4gICAgbWF4LXdpZHRoOiA3MnZ3O1xyXG4gICAgYm94LXNoYWRvdzogLTFweCAxcHggNXB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB9XHJcbiAgaW9uLWltZyB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICB9XHJcbiAgLnNoYXJwZXIge1xyXG4gICAgJi5jaGF0RGl2IHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNoYXJwZXItYm90dG9tIHtcclxuICAgICYuY2hhdERpdiB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2hhcnBlci10b3Age1xyXG4gICAgJi5jaGF0RGl2IHtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmltYWdlQXZhdGFyTGVmdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAuaW1hZ2VBdmF0YXJCb3R0b20ge1xyXG4gICAgbWF4LXdpZHRoOiAyMTRweDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjNUIyNTczO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA2cHg7XHJcbiAgICB6LWluZGV4OiAxMTtcclxuICB9XHJcbiAgLmF2YXRhciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5pbWFnZUF2YXRhckJvdHRvbUljb24ge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNyU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcmlnaHQ6IDEwLjElO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuY2hhdERpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDMyLDE3NywyMTIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICAgLy8gbWluLXdpZHRoOiA3MnZ3O1xyXG4gICAgbWF4LXdpZHRoOiA3MnZ3O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIH1cclxuICBpb24taW1nIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gIH1cclxuICAuc2hhcnBlciB7XHJcbiAgICAmLmNoYXREaXYge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2hhcnBlci1ib3R0b20ge1xyXG4gICAgJi5jaGF0RGl2IHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zaGFycGVyLXRvcCB7XHJcbiAgICAmLmNoYXREaXYge1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLWZhYi1idXR0b24ge1xyXG4gIHdpZHRoOiA0N3B4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0N3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWZhYiB7XHJcbiAgYm90dG9tOiAtMjJweCAhaW1wb3J0YW50O1xyXG59XHJcbi5mb290ZXJJY29uIHtcclxuICBjb2xvcjogcmdiYSgyNDQsIDI0NSwgMjQ4LCAwLjcpO1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgyNDQsIDI0NSwgMjQ4LCAwLjcpO1xyXG59XHJcbi5jaGF0RGl2TG9hZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogIzkxNjRhYzdhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIG1heC13aWR0aDogODBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC5jb3JuZXItcGFyZW50LXJpZ2h0e1xyXG4gICAgYmFja2dyb3VuZDogIzkxNjRhYzdhO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtNHB4O1xyXG4gICAgYm90dG9tOiAtMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC5jb3JuZXItY2hpbGQtcmlnaHR7XHJcbiAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM5MTY0YWM3YTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDdweDtcclxuICAgICAgbGVmdDogLTdweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuaW9uLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogI2Q3ZDhkYWM3O1xyXG59XHJcbmlvbi1jb2wge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaW1hZ2VBdmF0YXJCb3R0b21Mb2FkZXIge1xyXG4gIG1heC13aWR0aDogMjE0cHg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDhweDtcclxuICB6LWluZGV4OiAxMTtcclxufVxyXG4uaGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmxvYWRpbmctY29se1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5yaWdodHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbi5sZWZ0e1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmNsdWJiZWQge1xyXG4gIC5pbWFnZUF2YXRhclJpZ2h0IHtcclxuICAgIC5jaGF0RGl2IHtcclxuICAgICAgLmNvcm5lci1wYXJlbnQtcmlnaHR7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtMzBweDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIC5jb3JuZXItY2hpbGQtcmlnaHR7XHJcbiAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDE1cHggMTJweCAwIDBweCAjOTE2NGFjN2E7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pbWFnZUF2YXRhckxlZnQge1xyXG4gICAgLmNoYXREaXYge1xyXG4gICAgICAuY29ybmVyLXBhcmVudC1sZWZ0e1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IC0zMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgLmNvcm5lci1jaGlsZC1sZWZ0e1xyXG4gICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAtMTVweCAxMnB4IDAgMHB4ICMyMGIxZDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5pbnB1dC1ib3h7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/bubble/bubble.page.ts":
/*!***************************************!*\
  !*** ./src/app/bubble/bubble.page.ts ***!
  \***************************************/
/*! exports provided: BubblePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubblePage", function() { return BubblePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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



var BubblePage = /** @class */ (function () {
    function BubblePage(activRoute) {
        var _this = this;
        this.activRoute = activRoute;
        this.user_input = "";
        this.User = "Me";
        this.toUser = "HealthBot";
        this.activRoute.params.subscribe(function (params) {
            console.log(params);
            _this.paramData = params;
            _this.userName = params.name;
        });
        this.msgList = [
            {
                userId: "HealthBot",
                userName: "HealthBot",
                userAvatar: "../../assets/chat/chat4.jpg",
                time: "12:00",
                message: "Hello, have you seen this great chat UI",
                id: 0
            },
            {
                userId: "Me",
                userName: "Me",
                userAvatar: this.paramData.image ? this.paramData.image : "../../assets/chat/chat5.jpg",
                time: "12:03",
                message: "Yeah, I see this. This looks great. ",
                id: 1,
            },
            {
                userId: "HealthBot",
                userName: "HealthBot",
                userAvatar: "../../assets/chat/chat4.jpg",
                time: "12:05",
                message: "... and this is absolutely free, anyone can use",
                id: 3
            },
            {
                userId: "Me",
                userName: "Me",
                userAvatar: "../../assets/chat/chat5.jpg",
                time: "12:06",
                message: "wow ! that's great. Love to see more of such chat themes",
                id: 4
            },
            {
                userId: "HealthBot",
                userName: "HealthBot",
                userAvatar: "../../assets/chat/chat4.jpg",
                time: "12:07",
                message: "Oh there are several other designs. Check all their designs on their website enappd.com",
                id: 5
            }
        ];
    }
    BubblePage.prototype.ngOnInit = function () {
    };
    BubblePage.prototype.sendMsg = function () {
        var _this = this;
        if (this.user_input !== '') {
            this.msgList.push({
                userId: this.toUser,
                userName: this.toUser,
                userAvatar: this.paramData.image ? this.paramData.image : "../../assets/chat/chat4.jpg",
                time: "12:01",
                message: this.user_input,
                id: this.msgList.length + 1
            });
            this.user_input = "";
            this.scrollDown();
            setTimeout(function () {
                _this.senderSends();
            }, 500);
        }
    };
    BubblePage.prototype.senderSends = function () {
        var _this = this;
        this.loader = true;
        setTimeout(function () {
            _this.msgList.push({
                userId: _this.User,
                userName: _this.User,
                userAvatar: "../../assets/chat/chat5.jpg",
                time: "12:01",
                message: "Sorry, didn't get what you said. Can you repeat that please"
            });
            _this.loader = false;
            _this.scrollDown();
        }, 2000);
        this.scrollDown();
    };
    BubblePage.prototype.scrollDown = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom(50);
        }, 50);
    };
    BubblePage.prototype.userTyping = function (event) {
        console.log(event);
        this.start_typing = event.target.value;
        this.scrollDown();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('IonContent'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], BubblePage.prototype, "content", void 0);
    BubblePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bubble',
            template: __webpack_require__(/*! ./bubble.page.html */ "./src/app/bubble/bubble.page.html"),
            styles: [__webpack_require__(/*! ./bubble.page.scss */ "./src/app/bubble/bubble.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BubblePage);
    return BubblePage;
}());



/***/ })

}]);
//# sourceMappingURL=bubble-bubble-module.js.map