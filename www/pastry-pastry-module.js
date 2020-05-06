(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pastry-pastry-module"],{

/***/ "./src/app/pastry/pastry.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pastry/pastry.module.ts ***!
  \*****************************************/
/*! exports provided: PastryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastryPageModule", function() { return PastryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pastry_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pastry.page */ "./src/app/pastry/pastry.page.ts");
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
        component: _pastry_page__WEBPACK_IMPORTED_MODULE_5__["PastryPage"]
    }
];
var PastryPageModule = /** @class */ (function () {
    function PastryPageModule() {
    }
    PastryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_pastry_page__WEBPACK_IMPORTED_MODULE_5__["PastryPage"]]
        })
    ], PastryPageModule);
    return PastryPageModule;
}());



/***/ }),

/***/ "./src/app/pastry/pastry.page.html":
/*!*****************************************!*\
  !*** ./src/app/pastry/pastry.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <!-- <ion-buttons > -->\r\n    <div class=\"plusClass\" slot=\"end\">\r\n      <ion-icon name=\"add\" expand=\"icon-only\" color=\"success\"> </ion-icon>\r\n    </div>\r\n    <!-- </ion-buttons> -->\r\n    <ion-title color=\"light\">\r\n      Chat Pages\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-searchbar mode=\"md\" placeholder=\"Search your friend\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <ion-segment mode=\"md\" (ionChange)=\"segmentChanged($event)\" padding>\r\n    <ion-segment-button mode=\"md\" value=\"chat\" checked fixed>\r\n      <div class=\"contentCenter\">\r\n        <ion-icon name=\"chatboxes\" slot=\"start\" class=\"padding_right tab-icon\"></ion-icon>\r\n        <ion-text slot=end>chat</ion-text>\r\n      </div>\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button mode=\"md\" value=\"friends\">\r\n      <div class=\"contentCenter\">\r\n        <ion-icon name=\"person\" slot=\"start\" class=\"padding_right tab-icon\"></ion-icon>\r\n        <ion-text slot=end>Friends</ion-text>\r\n      </div>\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button mode=\"md\" value=\"group\">\r\n      <div class=\"contentCenter\">\r\n        <ion-icon name=\"contacts\" slot=\"start\" class=\"padding_right tab-icon\"></ion-icon>\r\n        <ion-text slot=end>Group</ion-text>\r\n      </div>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n  <!-- <content> -->\r\n  <ion-list *ngIf=\"segmentTab == 'chat' \" no-padding>\r\n    <ion-item *ngFor=\"let chat of chatData\" (click)=\"goforChat(chat)\">\r\n      <ion-avatar class=\"chatImage\" slot=\"start\">\r\n        <ion-img [src]=\"chat.image\"></ion-img>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <div class=\"withcount\">\r\n          <div class=\"nameAvatar\">\r\n            <h2 color=\"light\">{{chat.name}}\r\n            </h2>\r\n            <ion-avatar class=\"chatCount\" *ngIf=\"chat.count\">{{chat.count}}</ion-avatar>\r\n          </div>\r\n\r\n          <div class=\"timeEnd\">\r\n            <ion-text slot=\"end\" color=\"light\">{{chat.time}}</ion-text>\r\n          </div>\r\n        </div>\r\n        <p class=\"widthHalf\">{{chat.description}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n  <!-- </content> -->\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pastry/pastry.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pastry/pastry.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\r\n * Chatter - Chat themes Ionic 4 (https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n * \r\n */\n.plusClass {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 25px;\n  height: 25px;\n  background: white;\n  border-radius: 50%;\n  right: 15px;\n  position: relative;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n  box-shadow: 0 0.5px 0px 5px rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.14), 0 0px 0px 0 rgba(0, 0, 0, 0.12); }\nion-header:after {\n  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.5);\n  background-image: none;\n  left: 0;\n  bottom: -8px;\n  background-position: left 0 top 0;\n  position: absolute;\n  width: 100%;\n  height: 8px;\n  content: \"\"; }\nion-content {\n  --background: rgba(38, 194, 129, 1); }\nion-header,\nion-toolbar,\nion-item {\n  --background: rgba(38, 194, 129, 1); }\n.contentCenter {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\nion-segment-button {\n  color: white;\n  --color-checked: var(--ion-color-tertiary-contrast);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3); }\n.padding_right {\n  padding-right: 8px; }\n.tab-icon {\n  font-size: 20px; }\n.withcount {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center; }\n.chatCount {\n  background: white;\n  width: 17px !important;\n  height: 17px !important;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  font-size: 10px;\n  font-weight: bold;\n  color: var(--background);\n  margin-left: 8px; }\nh2 {\n  color: white; }\n.timeEnd {\n  display: flex;\n  justify-content: flex-end;\n  width: 50%; }\n.widthHalf {\n  width: 70%;\n  color: #ddd;\n  font-size: 12px; }\n.nameAvatar {\n  display: flex;\n  /* justify-content: center; */\n  align-items: center;\n  width: 50%; }\n.nameAvatar h2 {\n    font-size: 0.94em;\n    font-weight: bold; }\nion-text {\n  font-size: 10px; }\n.sc-ion-label-ios-h {\n  height: 44px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzdHJ5L3Bhc3RyeS5wYWdlLnNjc3MiLCIvdmFyL3d3dy9odG1sL1RpbHRvay90ZW1wYXRlL2ZyZWUtY2hhdC10aGVtZXMtaW9uaWM0LWNoYXR0ZXIvc3JjL2FwcC9wYXN0cnkvcGFzdHJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7Ozs7Ozs7O0VEUUU7QUNHRjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDBHQUEwRztFQUMxRyxnSEFBZ0gsRUFBQTtBQUtsSDtFQUVJLHlDQUF5QztFQUN6QyxzQkFBc0I7RUFDdEIsT0FBTztFQUNQLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FDRixFQUFBO0FBRUY7RUFDRSxtQ0FBYSxFQUFBO0FBRWY7OztFQUdFLG1DQUFhLEVBQUE7QUFFZjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7QUFFckI7RUFDRSxZQUFZO0VBQ1osbURBQWdCO0VBQ2hCLGlEQUFpRCxFQUFBO0FBRW5EO0VBQ0Usa0JBQWtCLEVBQUE7QUFFcEI7RUFDRSxlQUFlLEVBQUE7QUFFakI7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQixFQUFBO0FBRXJCO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsZ0JBQWdCLEVBQUE7QUFFbEI7RUFDRSxZQUFZLEVBQUE7QUFFZDtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsVUFBVSxFQUFBO0FBRVo7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWUsRUFBQTtBQUVqQjtFQUNFLGFBQWE7RUFDYiw2QkFBQTtFQUNBLG1CQUFtQjtFQUNuQixVQUFVLEVBQUE7QUFKWjtJQU1JLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTtBQUdyQjtFQUNFLGVBQWUsRUFBQTtBQUVqQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFzdHJ5L3Bhc3RyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcclxuICogQ2hhdHRlciAtIENoYXQgdGhlbWVzIElvbmljIDQgKGh0dHBzOi8vd3d3LmVuYXBwZC5jb20pXHJcbiAqXHJcbiAqIENvcHlyaWdodCDCqSAyMDE4LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXHJcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxyXG4gKiBcclxuICovXG4ucGx1c0NsYXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHJpZ2h0OiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhciwgY29sb3IgMTVtcyBsaW5lYXI7XG4gIGJveC1zaGFkb3c6IDAgMC41cHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMHB4IDBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMHB4IDBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuaW9uLWhlYWRlcjphZnRlciB7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBsZWZ0OiAwO1xuICBib3R0b206IC04cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgMCB0b3AgMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4cHg7XG4gIGNvbnRlbnQ6IFwiXCI7IH1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMzgsIDE5NCwgMTI5LCAxKTsgfVxuXG5pb24taGVhZGVyLFxuaW9uLXRvb2xiYXIsXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgzOCwgMTk0LCAxMjksIDEpOyB9XG5cbi5jb250ZW50Q2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7IH1cblxuLnBhZGRpbmdfcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7IH1cblxuLnRhYi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4OyB9XG5cbi53aXRoY291bnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmNoYXRDb3VudCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMTdweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE3cHggIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgbWFyZ2luLWxlZnQ6IDhweDsgfVxuXG5oMiB7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG4udGltZUVuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHdpZHRoOiA1MCU7IH1cblxuLndpZHRoSGFsZiB7XG4gIHdpZHRoOiA3MCU7XG4gIGNvbG9yOiAjZGRkO1xuICBmb250LXNpemU6IDEycHg7IH1cblxuLm5hbWVBdmF0YXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTsgfVxuICAubmFtZUF2YXRhciBoMiB7XG4gICAgZm9udC1zaXplOiAwLjk0ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuaW9uLXRleHQge1xuICBmb250LXNpemU6IDEwcHg7IH1cblxuLnNjLWlvbi1sYWJlbC1pb3MtaCB7XG4gIGhlaWdodDogNDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiIsIlxyXG4vKipcclxuICogQ2hhdHRlciAtIENoYXQgdGhlbWVzIElvbmljIDQgKGh0dHBzOi8vd3d3LmVuYXBwZC5jb20pXHJcbiAqXHJcbiAqIENvcHlyaWdodCDCqSAyMDE4LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXHJcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxyXG4gKiBcclxuICovXHJcblxyXG5cclxuLnBsdXNDbGFzcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhciwgY29sb3IgMTVtcyBsaW5lYXI7XHJcbiAgYm94LXNoYWRvdzogMCAwLjVweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAwcHggMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcbiAgLy8gdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKSxiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyLGNvbG9yIDE1bXMgbGluZWFyO1xyXG4gIC8vIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDRweCByZ2JhKDMwLCAzMiwgMzUsIDAuNDQpLCAwIDFweCAxMHB4IDAgcmdiYSgzMCwgMzIsIDM1LCAwLjY0KSwgMCAwcHggMHB4IDAgcmdiYSgzMCwgMzIsIDM1LCAwLjU1KTtcclxufVxyXG5pb24taGVhZGVyIHtcclxuICAmOmFmdGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC04cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAgdG9wIDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgY29udGVudDogXCJcIlxyXG4gIH1cclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDM4LCAxOTQsIDEyOSwgMSk7XHJcbn1cclxuaW9uLWhlYWRlcixcclxuaW9uLXRvb2xiYXIsXHJcbmlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMzgsIDE5NCwgMTI5LCAxKTtcclxufVxyXG4uY29udGVudENlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0KTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG59XHJcbi5wYWRkaW5nX3JpZ2h0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbn1cclxuLnRhYi1pY29uIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLndpdGhjb3VudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY2hhdENvdW50IHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB3aWR0aDogMTdweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTdweCAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuaDIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4udGltZUVuZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLndpZHRoSGFsZiB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBjb2xvcjogI2RkZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLm5hbWVBdmF0YXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNTAlO1xyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMC45NGVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcbmlvbi10ZXh0IHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLnNjLWlvbi1sYWJlbC1pb3MtaCB7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pastry/pastry.page.ts":
/*!***************************************!*\
  !*** ./src/app/pastry/pastry.page.ts ***!
  \***************************************/
/*! exports provided: PastryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastryPage", function() { return PastryPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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


var PastryPage = /** @class */ (function () {
    function PastryPage(route) {
        this.route = route;
        this.chatData = [{
                "name": 'Jovenica Alba',
                "image": '../../assets/chat/chat1.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "count": '2',
                "time": '12:17'
            }, {
                "name": 'Oliver',
                "image": ' ../../assets/chat/chat2.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "time": '12:17'
            }, {
                "name": 'George',
                "image": ' ../../assets/chat/chat3.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "count": '2',
                "time": 'Yesterday'
            }, {
                "name": 'Harry',
                "image": ' ../../assets/chat/chat4.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "time": 'Sunday'
            }, {
                "name": 'Jack',
                "image": ' ../../assets/chat/chat5.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "time": '11:15'
            }, {
                "name": 'Jacob',
                "image": ' ../../assets/chat/chat6.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "count": '1',
                "time": 'Yesterday'
            }, {
                "name": 'Noah',
                "image": ' ../../assets/chat/chat7.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "time": 'Monday'
            }, {
                "name": 'Charlie',
                "image": ' ../../assets/chat/chat8.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "count": '6',
                "time": '07:00'
            }, {
                "name": 'Logan',
                "image": ' ../../assets/chat/chat1.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "time": 'Yesterday'
            }, {
                "name": 'Harrison',
                "image": ' ../../assets/chat/chat2.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "time": 'Yesterday'
            }, {
                "name": 'Sebastian',
                "image": ' ../../assets/chat/chat3.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "time": 'Yesterday'
            }, {
                "name": 'Zachary',
                "image": ' ../../assets/chat/chat4.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "time": 'Today'
            }, {
                "name": 'Elijah',
                "image": ' ../../assets/chat/chat5.jpg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "time": '18:25'
            }
        ];
    }
    PastryPage.prototype.ngOnInit = function () {
    };
    PastryPage.prototype.segmentChanged = function (event) {
        this.segmentTab = event.detail.value;
        console.log(this.segmentTab);
    };
    PastryPage.prototype.goforChat = function (chat) {
        this.route.navigate(['bubble', chat]);
    };
    PastryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pastry',
            template: __webpack_require__(/*! ./pastry.page.html */ "./src/app/pastry/pastry.page.html"),
            styles: [__webpack_require__(/*! ./pastry.page.scss */ "./src/app/pastry/pastry.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PastryPage);
    return PastryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pastry-pastry-module.js.map