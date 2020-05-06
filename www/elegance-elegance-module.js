(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["elegance-elegance-module"],{

/***/ "./src/app/elegance/elegance.module.ts":
/*!*********************************************!*\
  !*** ./src/app/elegance/elegance.module.ts ***!
  \*********************************************/
/*! exports provided: ElegancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElegancePageModule", function() { return ElegancePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _elegance_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elegance.page */ "./src/app/elegance/elegance.page.ts");
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
        component: _elegance_page__WEBPACK_IMPORTED_MODULE_5__["ElegancePage"]
    }
];
var ElegancePageModule = /** @class */ (function () {
    function ElegancePageModule() {
    }
    ElegancePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_elegance_page__WEBPACK_IMPORTED_MODULE_5__["ElegancePage"]]
        })
    ], ElegancePageModule);
    return ElegancePageModule;
}());



/***/ }),

/***/ "./src/app/elegance/elegance.page.html":
/*!*********************************************!*\
  !*** ./src/app/elegance/elegance.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-menu-button color=\"dark\"></ion-menu-button>\r\n        </ion-buttons>\r\n    <ion-title>Elegance</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-icon name=\"more\" class=\"fontSize\"></ion-icon>\r\n      </ion-buttons>\r\n    <ion-buttons slot=\"end\" padding-start>\r\n        <ion-icon name=\"add\"  class=\"fontSize\"></ion-icon>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list no-padding >\r\n    <ion-item *ngFor=\"let chat of chatData\"  lines=\"none\">\r\n      <div class=\"borderBottomLine\"></div>\r\n      <div class=\"listSection\">\r\n        <div class=\"UserimgSection\">\r\n          <ion-avatar class=\"chatImage\" slot=\"start\">\r\n            <ion-img [src]=\"chat.image\"></ion-img>\r\n            <span class=\"onlineOffline_icon\" [ngStyle]=\"{'background-color':(chat.status === 'online'? '#4cd137' : '#c23616')}\"></span>\r\n          </ion-avatar>\r\n        </div>\r\n        <div class=\"usernameSection\" padding-start padding>\r\n          <h5>\r\n            <ion-icon *ngIf=\"chat.group\" name=\"people\" color=\"medium\"></ion-icon>\r\n            <ion-icon name=\"microphone\" *ngIf=\"chat.broadcast\" color=\"medium\"></ion-icon>\r\n             {{chat.name}}\r\n            </h5>\r\n          <p class=\"descText\" no-margin no-padding>{{chat.description}}</p>\r\n        </div>\r\n      </div>\r\n      <div slot=\"end\" class=\"lastSection\">\r\n        <ion-note *ngIf=\"chat.badge || !chat.time\" class=\"sendTime\">{{chat.sendTime}}</ion-note>\r\n          <ion-badge slot=\"end\" class=\"userBadge\" *ngIf=\"chat.badge\">{{chat.badge}}</ion-badge>\r\n          <ion-note slot=\"end\" *ngIf=\"chat.time\">{{chat.time}}</ion-note>\r\n      </div>\r\n      \r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/elegance/elegance.page.scss":
/*!*********************************************!*\
  !*** ./src/app/elegance/elegance.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\r\n * Chatter - Chat themes Ionic 4 (https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n * \r\n */\n.contentBg {\n  --background: #2f517c;\n  /* fallback for old browsers */\n  --background: -webkit-linear-gradient(to bottom, #2f517c, #56b4d3);\n  /* Chrome 10-25, Safari 5.1-6 */\n  --background: linear-gradient(to bottom, #2f517c, #56b4d3);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  padding-bottom: 0 !important;\n  --padding-bootm:0 !important; }\n.onlineOffline_icon {\n  position: absolute;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  bottom: 0.2em;\n  right: 0;\n  border: 1.5px solid white; }\n.UserimgSection {\n  position: relative; }\n.userBadge {\n  border-radius: 90px;\n  width: 24px;\n  height: 24px;\n  background: #E0E9F9;\n  color: #789FE6;\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: center;\n  position: absolute;\n  top: 31px; }\n.usernameSection {\n  overflow: hidden;\n  padding-top: 0;\n  padding-bottom: 15px; }\n.descText {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  color: #BFC3C6;\n  font-size: 16px; }\nion-img {\n  width: 90%;\n  height: 90%; }\n.listSection {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 97%; }\n.borderBottomLine {\n  display: block;\n  width: 100%;\n  position: absolute;\n  border-bottom: 1px solid #cfcfd1;\n  height: 100%;\n  left: 21%; }\n.lastSection {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n  height: 73%;\n  padding-top: 2px; }\n.fontSize {\n  font-size: 30px; }\nh5 {\n  margin-bottom: 5px;\n  margin-top: 12px;\n  font-size: 16px; }\nion-note {\n  font-size: 14px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlZ2FuY2UvZWxlZ2FuY2UucGFnZS5zY3NzIiwiL3Zhci93d3cvaHRtbC9UaWx0b2svdGVtcGF0ZS9mcmVlLWNoYXQtdGhlbWVzLWlvbmljNC1jaGF0dGVyL3NyYy9hcHAvZWxlZ2FuY2UvZWxlZ2FuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7RURTRTtBQ0lGO0VBQ0kscUJBQWE7RUFBVSw4QkFBQTtFQUN2QixrRUFBYTtFQUF1RCwrQkFBQTtFQUNwRSwwREFBYTtFQUErQyxxRUFBQTtFQUM1RCw0QkFBNEI7RUFDNUIsNEJBQWdCLEVBQUE7QUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFFWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFFBQVE7RUFDUix5QkFBeUIsRUFBQTtBQUU3QjtFQUNJLGtCQUFrQixFQUFBO0FBR3RCO0VBQ0ksbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQTtBQUdiO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxvQkFBb0IsRUFBQTtBQUV4QjtFQUNJLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVU7RUFDVixjQUFhO0VBQ2IsZUFBZSxFQUFBO0FBRW5CO0VBQ0ksVUFBVTtFQUNWLFdBQVcsRUFBQTtBQUVmO0VBQ0ksYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVSxFQUFBO0FBR2Q7RUFDSSxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLFNBQVMsRUFBQTtBQUViO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZSxFQUFBO0FBRW5CO0VBQ0ksZUFBZSxFQUFBO0FBRW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFFbkI7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lbGVnYW5jZS9lbGVnYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcclxuICogQ2hhdHRlciAtIENoYXQgdGhlbWVzIElvbmljIDQgKGh0dHBzOi8vd3d3LmVuYXBwZC5jb20pXHJcbiAqXHJcbiAqIENvcHlyaWdodCDCqSAyMDE4LXByZXNlbnQgRW5hcHBkLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGUgdGVybXMgZm91bmQgaW4gdGhlXHJcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgLlxyXG4gKiBcclxuICovXG4uY29udGVudEJnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMmY1MTdjO1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmY1MTdjLCAjNTZiNGQzKTtcbiAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmY1MTdjLCAjNTZiNGQzKTtcbiAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctYm9vdG06MCAhaW1wb3J0YW50OyB9XG5cbi5vbmxpbmVPZmZsaW5lX2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm90dG9tOiAwLjJlbTtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlcjogMS41cHggc29saWQgd2hpdGU7IH1cblxuLlVzZXJpbWdTZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi51c2VyQmFkZ2Uge1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjRTBFOUY5O1xuICBjb2xvcjogIzc4OUZFNjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMxcHg7IH1cblxuLnVzZXJuYW1lU2VjdGlvbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDsgfVxuXG4uZGVzY1RleHQge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjQkZDM0M2O1xuICBmb250LXNpemU6IDE2cHg7IH1cblxuaW9uLWltZyB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlOyB9XG5cbi5saXN0U2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogOTclOyB9XG5cbi5ib3JkZXJCb3R0b21MaW5lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2ZjZmQxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDIxJTsgfVxuXG4ubGFzdFNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgaGVpZ2h0OiA3MyU7XG4gIHBhZGRpbmctdG9wOiAycHg7IH1cblxuLmZvbnRTaXplIHtcbiAgZm9udC1zaXplOiAzMHB4OyB9XG5cbmg1IHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBmb250LXNpemU6IDE2cHg7IH1cblxuaW9uLW5vdGUge1xuICBmb250LXNpemU6IDE0cHg7IH1cbiIsIi8qKlxyXG4gKiBDaGF0dGVyIC0gQ2hhdCB0aGVtZXMgSW9uaWMgNCAoaHR0cHM6Ly93d3cuZW5hcHBkLmNvbSlcclxuICpcclxuICogQ29weXJpZ2h0IMKpIDIwMTgtcHJlc2VudCBFbmFwcGQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZSB0ZXJtcyBmb3VuZCBpbiB0aGVcclxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSAuXHJcbiAqIFxyXG4gKi9cclxuXHJcblxyXG5cclxuXHJcbi5jb250ZW50Qmd7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyZjUxN2M7IC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAgIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmY1MTdjLCAjNTZiNGQzKTsgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJmNTE3YywgIzU2YjRkMyk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctYm9vdG06MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbi5vbmxpbmVPZmZsaW5lX2ljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3R0b206IDAuMmVtO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi5Vc2VyaW1nU2VjdGlvbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnVzZXJCYWRnZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGJhY2tncm91bmQ6ICNFMEU5Rjk7XHJcbiAgICBjb2xvcjogIzc4OUZFNjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMxcHg7XHJcbn1cclxuXHJcbi51c2VybmFtZVNlY3Rpb257XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG4uZGVzY1RleHR7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGNvbG9yOiNCRkMzQzY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuaW9uLWltZ3tcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG4ubGlzdFNlY3Rpb257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDk3JTtcclxufVxyXG5cclxuLmJvcmRlckJvdHRvbUxpbmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2ZjZmQxO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMjElO1xyXG59XHJcbi5sYXN0U2VjdGlvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgaGVpZ2h0OiA3MyU7XHJcbiAgICBwYWRkaW5nLXRvcDoycHg7XHJcbn1cclxuLmZvbnRTaXple1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmg1e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5pb24tbm90ZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/elegance/elegance.page.ts":
/*!*******************************************!*\
  !*** ./src/app/elegance/elegance.page.ts ***!
  \*******************************************/
/*! exports provided: ElegancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElegancePage", function() { return ElegancePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var ElegancePage = /** @class */ (function () {
    function ElegancePage() {
    }
    ElegancePage.prototype.ngOnInit = function () {
        this.chatData = [{
                "name": 'Jovenica',
                "image": '../../assets/chat/user.jpeg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "status": 'online',
                "count": '2',
                "time": '2 min ago'
            }, {
                "name": 'Oliver',
                "image": ' ../../assets/chat/user3.jpeg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "status": 'offline',
                "badge": '4',
                "sendTime": '18:34',
                "group": true
            }, {
                "name": 'George',
                "image": ' ../../assets/chat/user4.jpeg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "status": 'offline',
                "count": '2',
                "sendTime": '18:30',
                "broadcast": true
            }, {
                "name": 'Harry',
                "image": ' ../../assets/chat/user1.jpeg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "status": 'online',
                "badge": '6',
                "sendTime": '17:55'
            }, {
                "name": 'Jack',
                "image": ' ../../assets/chat/user.jpeg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "status": 'offline',
                "sendTime": '17:55'
            }, {
                "name": 'Jacob',
                "image": ' ../../assets/chat/user3.jpeg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "status": 'offline',
                "count": '1',
                "sendTime": '17:50'
            }, {
                "name": 'Noah',
                "image": ' ../../assets/chat/user2.jpeg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "status": 'offline',
                "sendTime": '17:40'
            }, {
                "name": 'Charlie',
                "image": ' ../../assets/chat/user4.jpeg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "status": 'online',
                "count": '6',
                "badge": '8',
                "sendTime": '17:40'
            }, {
                "name": 'Logan',
                "image": ' ../../assets/chat/user.jpeg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "status": 'offline',
                "badge": '8',
                "sendTime": '17:40'
            }, {
                "name": 'Harrison',
                "image": ' ../../assets/chat/user2.jpeg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "status": 'offline',
                "sendTime": '17:40'
            }, {
                "name": 'Sebastian',
                "image": ' ../../assets/chat/user1.jpeg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "status": 'online',
                "sendTime": '17:40'
            }, {
                "name": 'Zachary',
                "image": ' ../../assets/chat/user4.jpeg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "status": 'offline',
                "sendTime": '17:40'
            }, {
                "name": 'Elijah',
                "image": ' ../../assets/chat/user3.jpeg',
                "description": ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
                "status": 'offline',
                "badge": '8',
                "sendTime": '17:40'
            }
        ];
    };
    ElegancePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-elegance',
            template: __webpack_require__(/*! ./elegance.page.html */ "./src/app/elegance/elegance.page.html"),
            styles: [__webpack_require__(/*! ./elegance.page.scss */ "./src/app/elegance/elegance.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ElegancePage);
    return ElegancePage;
}());



/***/ })

}]);
//# sourceMappingURL=elegance-elegance-module.js.map