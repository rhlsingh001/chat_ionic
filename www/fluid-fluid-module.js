(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fluid-fluid-module"],{

/***/ "./src/app/fluid/fluid.module.ts":
/*!***************************************!*\
  !*** ./src/app/fluid/fluid.module.ts ***!
  \***************************************/
/*! exports provided: FluidPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FluidPageModule", function() { return FluidPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fluid_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fluid.page */ "./src/app/fluid/fluid.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Chatter - Chat themes Ionic 4 (https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */






var routes = [
    {
        path: '',
        component: _fluid_page__WEBPACK_IMPORTED_MODULE_5__["FluidPage"]
    }
];
var FluidPageModule = /** @class */ (function () {
    function FluidPageModule() {
    }
    FluidPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_fluid_page__WEBPACK_IMPORTED_MODULE_5__["FluidPage"]]
        })
    ], FluidPageModule);
    return FluidPageModule;
}());



/***/ }),

/***/ "./src/app/fluid/fluid.page.html":
/*!***************************************!*\
  !*** ./src/app/fluid/fluid.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /**\r\n * Chatter - Chat themes Ionic 4 (https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n */ -->\r\n\r\n<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"title-block\">\r\n        <ion-icon name=\"chatboxes\" color=\"d3blue\" class=\"title-icon\"></ion-icon>\r\n        <ion-text color=\"d3blue\" class=\"title-text\">Fluid</ion-text>\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content padding-vertical fullscreen>\r\n  <div id=\"chat-parent\" class=\"bg-image\" [ngClass]=\"{ 'bg-image-X': phone_model=='iPhone X'}\">\r\n    <div id=\"chat-container\">\r\n      <ion-row *ngFor=\"let conv of conversation; let i = index;\" class=\"full no-padding\">\r\n        <ion-col class=\"no-padding chat-row\" [ngClass]=\"{ 'reverse': conv.sender}\">\r\n          <div [ngClass]=\"{ 'name-row-parent-right': conv.sender,'name-row-parent-left': !conv.sender}\">\r\n              \r\n              <div >\r\n                <div ></div>\r\n              </div>\r\n            \r\n            <div class=\"no-padding\" [ngClass]=\"{ 'message-row-right': conv.sender,'message-row-left': !conv.sender}\">\r\n              <ion-text no-margin class=\"text\">{{conv.text}}</ion-text>\r\n            </div>\r\n          </div>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer translucent [ngClass]=\"{ 'custom-footer': phone_model=='iPhone X'}\">\r\n  <ion-row class=\"input-position\" [ngClass]=\"{ 'custom-footer-row': phone_model=='iPhone X'}\">\r\n    <ion-col size=\"9\">\r\n      <ion-input class=\"input restrict\" type=\"text\" placeholder=\"Type a message\" [(ngModel)]=\"input\" padding-start></ion-input>\r\n    </ion-col>\r\n    <ion-col size=\"3\">\r\n      <ion-button shape=\"round\" class=\"send-button\" color=\"d3blue\" (click)=\"send()\">\r\n        <ion-text color=\"light\">SEND</ion-text>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/fluid/fluid.page.scss":
/*!***************************************!*\
  !*** ./src/app/fluid/fluid.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\r\n * Chatter - Chat themes Ionic 4 (https://www.enappd.com)\r\n *\r\n * Copyright © 2018-present Enappd. All rights reserved.\r\n *\r\n * This source code is licensed as per the terms found in the\r\n * LICENSE.md file in the root directory of this source .\r\n * \r\n */\n.menu {\n  color: white !important; }\n.white {\n  color: white !important; }\n.full {\n  display: block;\n  width: 100%;\n  margin-top: 25px; }\n.left {\n  float: left; }\n.avatar {\n  width: calc(16vw - 4px);\n  height: calc(16vw - 4px);\n  border-radius: calc(8vw - 2px);\n  z-index: 2; }\n.restrict {\n  --height: 33px; }\n.input {\n  background-color: white;\n  border-radius: 20px;\n  font-size: .9em !important;\n  box-shadow: 0 0 10px #444; }\n.animate {\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  transition: .1s; }\n.right {\n  float: right; }\n.text {\n  font-size: 16px; }\n.card {\n  margin-bottom: 9px;\n  max-width: 80%;\n  padding: 12px;\n  border-radius: 6px;\n  border: 0.5px solid #d2d2d2;\n  background-color: white; }\n.item-inner {\n  height: 33px; }\n@-webkit-keyframes fadeIn {\n  0% {\n    transform: translateY(15px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0px);\n    opacity: 1; } }\n@keyframes fadeIn {\n  0% {\n    transform: translateY(15px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0px);\n    opacity: 1; } }\n.input-position {\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8)); }\n.custom-footer-row {\n  height: 65px; }\n.send-button {\n  height: 36px;\n  width: 90%;\n  box-shadow: 0 0 10px #444;\n  border-radius: 50%; }\n.bg-image {\n  height: 100%;\n  width: 100%;\n  background-image: url('skyline.jpg');\n  background-size: cover;\n  background-position: center;\n  padding: 60px 15px 55px 15px;\n  overflow: scroll; }\n.bg-image-X {\n  padding: 80px 15px 75px 15px; }\n.chat-item {\n  --background: transparent; }\nion-content {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  padding-top: 0;\n  padding-bottom: 0; }\n.no-padding {\n  --padding: 0;\n  padding: 0; }\n.chat-row {\n  display: flex;\n  flex-direction: row; }\n.reverse {\n  flex-direction: row-reverse; }\n.name-row-left {\n  background: white;\n  padding: 5px 10px 5px 9vw;\n  margin-left: -8vw;\n  z-index: 1;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-top-right-radius: 16px;\n  font-size: 12px;\n  position: relative;\n  height: 6vw; }\n.name-row-right {\n  background: white;\n  padding: 5px 9vw 5px 10px;\n  margin-right: -8vw;\n  z-index: 1;\n  text-align: right;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-top-left-radius: 16px;\n  font-size: 12px;\n  position: relative;\n  height: 6vw; }\n.name-row-parent-left {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start; }\n.name-row-parent-right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end; }\n.message-row-left {\n  background: #0c96df;\n  padding: 7px 15px 8px 11vw;\n  margin-left: -8vw;\n  min-height: 10vw;\n  display: flex;\n  align-items: center;\n  border-top-right-radius: 5vw;\n  border-bottom-right-radius: 5vw;\n  color: white;\n  position: relative; }\n.message-row-right {\n  background: #00C06D;\n  padding: 7px 15vw 8px 11px;\n  margin-right: -8vw;\n  min-height: 10vw;\n  display: flex;\n  align-items: center;\n  border-top-left-radius: 5vw;\n  border-bottom-left-radius: 5vw;\n  color: white;\n  position: relative; }\n.avatar-parent {\n  z-index: 2;\n  border-radius: 8vw;\n  min-width: 16vw;\n  height: 16vw;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n.avatar-border {\n  position: absolute;\n  width: 16vw;\n  height: 16vw;\n  top: 0;\n  left: 0;\n  border: 1vw solid white;\n  border-radius: 50%;\n  box-shadow: none;\n  outline: none; }\n.reverse-arc-left {\n  width: 6vw;\n  height: 4vw;\n  position: absolute;\n  background: white;\n  left: 5.8vw;\n  bottom: -4vw;\n  display: flex;\n  justify-content: flex-end;\n  border-bottom-right-radius: 4vw; }\n.reverse-arc-color-left {\n  width: 4vw;\n  height: 4vw;\n  background: #0c96df;\n  border-top-left-radius: 4vw;\n  border-bottom-right-radius: 2vw; }\n.reverse-arc-right {\n  width: 6vw;\n  height: 4vw;\n  position: absolute;\n  background: white;\n  right: 5.8vw;\n  bottom: -4vw;\n  display: flex;\n  justify-content: flex-start;\n  border-bottom-left-radius: 4vw; }\n#chat-parent {\n  scroll-behavior: smooth; }\n.reverse-arc-color-right {\n  width: 4vw;\n  height: 4vw;\n  background: #00C06D;\n  border-top-right-radius: 4vw;\n  border-bottom-left-radius: 3vw; }\n.timer-left {\n  position: absolute;\n  right: -75px;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 12px;\n  top: 4px; }\n.timer-right {\n  position: absolute;\n  left: -75px;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 12px;\n  top: 4px; }\n.title-block {\n  display: flex;\n  justify-content: center;\n  align-content: center; }\n.title-icon {\n  font-size: 32px; }\n.title-text {\n  padding-left: 5px;\n  align-self: center; }\n.first-tick {\n  font-size: 25px;\n  position: absolute;\n  left: -24px;\n  top: -4px; }\n.second-tick {\n  font-size: 25px;\n  position: absolute;\n  left: -28px;\n  top: -4px; }\n.custom-footer {\n  height: 65px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmx1aWQvZmx1aWQucGFnZS5zY3NzIiwiL3Zhci93d3cvaHRtbC9UaWx0b2svdGVtcGF0ZS9mcmVlLWNoYXQtdGhlbWVzLWlvbmljNC1jaGF0dGVyL3NyYy9hcHAvZmx1aWQvZmx1aWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7RURTRTtBQ0dGO0VBQ0ksdUJBQXVCLEVBQUE7QUFFM0I7RUFDSSx1QkFBdUIsRUFBQTtBQUUzQjtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7QUFFcEI7RUFDSSxXQUFXLEVBQUE7QUFFZjtFQUNJLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLFVBQVUsRUFBQTtBQUVkO0VBQ0ksY0FBUyxFQUFBO0FBRWI7RUFDSSx1QkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQix5QkFBeUIsRUFBQTtBQUU3QjtFQUNJLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixlQUFlLEVBQUE7QUFFbkI7RUFDSSxZQUFZLEVBQUE7QUFFaEI7RUFDSSxlQUFlLEVBQUE7QUFFbkI7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMkJBQXFDO0VBQ3JDLHVCQUF1QixFQUFBO0FBRTNCO0VBQ0ksWUFBWSxFQUFBO0FBR2hCO0VBQ0k7SUFDSSwyQkFBMkI7SUFDM0IsVUFBVSxFQUFBO0VBRWQ7SUFDSSwwQkFBMEI7SUFDMUIsVUFBVSxFQUFBLEVBQUE7QUFQbEI7RUFDSTtJQUNJLDJCQUEyQjtJQUMzQixVQUFVLEVBQUE7RUFFZDtJQUNJLDBCQUEwQjtJQUMxQixVQUFVLEVBQUEsRUFBQTtBQUdsQjtFQUNJLDREQUF5RCxFQUFBO0FBRTdEO0VBQ0ksWUFBWSxFQUFBO0FBRWhCO0VBQ0ksWUFBWTtFQUNaLFVBQVU7RUFDVix5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QUE7QUFFdEI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTLEVBQUE7QUFFYjtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVMsRUFBQTtBQUViO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmx1aWQvZmx1aWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXHJcbiAqIENoYXR0ZXIgLSBDaGF0IHRoZW1lcyBJb25pYyA0IChodHRwczovL3d3dy5lbmFwcGQuY29tKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgwqkgMjAxOC1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxyXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cclxuICogXHJcbiAqL1xuLm1lbnUge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsgfVxuXG4ud2hpdGUge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsgfVxuXG4uZnVsbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjVweDsgfVxuXG4ubGVmdCB7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbi5hdmF0YXIge1xuICB3aWR0aDogY2FsYygxNnZ3IC0gNHB4KTtcbiAgaGVpZ2h0OiBjYWxjKDE2dncgLSA0cHgpO1xuICBib3JkZXItcmFkaXVzOiBjYWxjKDh2dyAtIDJweCk7XG4gIHotaW5kZXg6IDI7IH1cblxuLnJlc3RyaWN0IHtcbiAgLS1oZWlnaHQ6IDMzcHg7IH1cblxuLmlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogLjllbSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjNDQ0OyB9XG5cbi5hbmltYXRlIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgdHJhbnNpdGlvbjogLjFzOyB9XG5cbi5yaWdodCB7XG4gIGZsb2F0OiByaWdodDsgfVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDsgfVxuXG4uY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDlweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZDJkMmQyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuXG4uaXRlbS1pbm5lciB7XG4gIGhlaWdodDogMzNweDsgfVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XG4gICAgb3BhY2l0eTogMDsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuLmlucHV0LXBvc2l0aW9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuOCkpOyB9XG5cbi5jdXN0b20tZm9vdGVyLXJvdyB7XG4gIGhlaWdodDogNjVweDsgfVxuXG4uc2VuZC1idXR0b24ge1xuICBoZWlnaHQ6IDM2cHg7XG4gIHdpZHRoOiA5MCU7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM0NDQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxuXG4uYmctaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3NreWxpbmUuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDYwcHggMTVweCA1NXB4IDE1cHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7IH1cblxuLmJnLWltYWdlLVgge1xuICBwYWRkaW5nOiA4MHB4IDE1cHggNzVweCAxNXB4OyB9XG5cbi5jaGF0LWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwOyB9XG5cbi5uby1wYWRkaW5nIHtcbiAgLS1wYWRkaW5nOiAwO1xuICBwYWRkaW5nOiAwOyB9XG5cbi5jaGF0LXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cblxuLnJldmVyc2Uge1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7IH1cblxuLm5hbWUtcm93LWxlZnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDl2dztcbiAgbWFyZ2luLWxlZnQ6IC04dnc7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDZ2dzsgfVxuXG4ubmFtZS1yb3ctcmlnaHQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDl2dyA1cHggMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtOHZ3O1xuICB6LWluZGV4OiAxO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA2dnc7IH1cblxuLm5hbWUtcm93LXBhcmVudC1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cblxuLm5hbWUtcm93LXBhcmVudC1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgfVxuXG4ubWVzc2FnZS1yb3ctbGVmdCB7XG4gIGJhY2tncm91bmQ6ICMwYzk2ZGY7XG4gIHBhZGRpbmc6IDdweCAxNXB4IDhweCAxMXZ3O1xuICBtYXJnaW4tbGVmdDogLTh2dztcbiAgbWluLWhlaWdodDogMTB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDV2dztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDV2dztcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLm1lc3NhZ2Utcm93LXJpZ2h0IHtcbiAgYmFja2dyb3VuZDogIzAwQzA2RDtcbiAgcGFkZGluZzogN3B4IDE1dncgOHB4IDExcHg7XG4gIG1hcmdpbi1yaWdodDogLTh2dztcbiAgbWluLWhlaWdodDogMTB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXZ3O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1dnc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5hdmF0YXItcGFyZW50IHtcbiAgei1pbmRleDogMjtcbiAgYm9yZGVyLXJhZGl1czogOHZ3O1xuICBtaW4td2lkdGg6IDE2dnc7XG4gIGhlaWdodDogMTZ2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uYXZhdGFyLWJvcmRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE2dnc7XG4gIGhlaWdodDogMTZ2dztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3JkZXI6IDF2dyBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lOyB9XG5cbi5yZXZlcnNlLWFyYy1sZWZ0IHtcbiAgd2lkdGg6IDZ2dztcbiAgaGVpZ2h0OiA0dnc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGxlZnQ6IDUuOHZ3O1xuICBib3R0b206IC00dnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0dnc7IH1cblxuLnJldmVyc2UtYXJjLWNvbG9yLWxlZnQge1xuICB3aWR0aDogNHZ3O1xuICBoZWlnaHQ6IDR2dztcbiAgYmFja2dyb3VuZDogIzBjOTZkZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHZ3O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnZ3OyB9XG5cbi5yZXZlcnNlLWFyYy1yaWdodCB7XG4gIHdpZHRoOiA2dnc7XG4gIGhlaWdodDogNHZ3O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICByaWdodDogNS44dnc7XG4gIGJvdHRvbTogLTR2dztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0dnc7IH1cblxuI2NoYXQtcGFyZW50IHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7IH1cblxuLnJldmVyc2UtYXJjLWNvbG9yLXJpZ2h0IHtcbiAgd2lkdGg6IDR2dztcbiAgaGVpZ2h0OiA0dnc7XG4gIGJhY2tncm91bmQ6ICMwMEMwNkQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0dnc7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDN2dzsgfVxuXG4udGltZXItbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC03NXB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRvcDogNHB4OyB9XG5cbi50aW1lci1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTc1cHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdG9wOiA0cHg7IH1cblxuLnRpdGxlLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG4udGl0bGUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDsgfVxuXG4udGl0bGUtdGV4dCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7IH1cblxuLmZpcnN0LXRpY2sge1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTI0cHg7XG4gIHRvcDogLTRweDsgfVxuXG4uc2Vjb25kLXRpY2sge1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTI4cHg7XG4gIHRvcDogLTRweDsgfVxuXG4uY3VzdG9tLWZvb3RlciB7XG4gIGhlaWdodDogNjVweDsgfVxuIiwiLyoqXHJcbiAqIENoYXR0ZXIgLSBDaGF0IHRoZW1lcyBJb25pYyA0IChodHRwczovL3d3dy5lbmFwcGQuY29tKVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgwqkgMjAxOC1wcmVzZW50IEVuYXBwZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlIHRlcm1zIGZvdW5kIGluIHRoZVxyXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIC5cclxuICogXHJcbiAqL1xyXG5cclxuXHJcblxyXG4ubWVudSB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4ud2hpdGUge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZ1bGwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuLmxlZnR7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uYXZhdGFyIHtcclxuICAgIHdpZHRoOiBjYWxjKDE2dncgLSA0cHgpO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDE2dncgLSA0cHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyg4dncgLSAycHgpO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG4ucmVzdHJpY3Qge1xyXG4gICAgLS1oZWlnaHQ6IDMzcHg7XHJcbn1cclxuLmlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjNDQ0O1xyXG59XHJcbi5hbmltYXRlIHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgdHJhbnNpdGlvbjogLjFzO1xyXG59XHJcbi5yaWdodHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4udGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiAuNXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5pdGVtLWlubmVyIHtcclxuICAgIGhlaWdodDogMzNweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuLmlucHV0LXBvc2l0aW9ue1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsMCwwLDAuOCkpO1xyXG59XHJcbi5jdXN0b20tZm9vdGVyLXJvd3tcclxuICAgIGhlaWdodDogNjVweDtcclxufVxyXG4uc2VuZC1idXR0b257XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggIzQ0NDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uYmctaW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9za3lsaW5lLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDYwcHggMTVweCA1NXB4IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcbi5iZy1pbWFnZS1Ye1xyXG4gICAgcGFkZGluZzogODBweCAxNXB4IDc1cHggMTVweDtcclxufVxyXG4uY2hhdC1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4ubm8tcGFkZGluZ3tcclxuICAgIC0tcGFkZGluZzogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmNoYXQtcm93e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLnJldmVyc2V7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuLm5hbWUtcm93LWxlZnR7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCA5dnc7XHJcbiAgICBtYXJnaW4tbGVmdDogLTh2dztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNnZ3O1xyXG59XHJcbi5uYW1lLXJvdy1yaWdodHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNXB4IDl2dyA1cHggMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTh2dztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDZ2dztcclxufVxyXG4ubmFtZS1yb3ctcGFyZW50LWxlZnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcbi5uYW1lLXJvdy1wYXJlbnQtcmlnaHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG4ubWVzc2FnZS1yb3ctbGVmdHtcclxuICAgIGJhY2tncm91bmQ6ICMwYzk2ZGY7XHJcbiAgICBwYWRkaW5nOiA3cHggMTVweCA4cHggMTF2dztcclxuICAgIG1hcmdpbi1sZWZ0OiAtOHZ3O1xyXG4gICAgbWluLWhlaWdodDogMTB2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDV2dztcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1dnc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm1lc3NhZ2Utcm93LXJpZ2h0e1xyXG4gICAgYmFja2dyb3VuZDogIzAwQzA2RDtcclxuICAgIHBhZGRpbmc6IDdweCAxNXZ3IDhweCAxMXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtOHZ3O1xyXG4gICAgbWluLWhlaWdodDogMTB2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXZ3O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXZ3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5hdmF0YXItcGFyZW50e1xyXG4gICAgLy8gYm9yZGVyOiAxdncgc29saWQgd2hpdGU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHZ3O1xyXG4gICAgbWluLXdpZHRoOiAxNnZ3O1xyXG4gICAgaGVpZ2h0OiAxNnZ3O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYXZhdGFyLWJvcmRlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNnZ3O1xyXG4gICAgaGVpZ2h0OiAxNnZ3O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvcmRlcjogMXZ3IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnJldmVyc2UtYXJjLWxlZnR7XHJcbiAgICB3aWR0aDogNnZ3O1xyXG4gICAgaGVpZ2h0OiA0dnc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGxlZnQ6IDUuOHZ3O1xyXG4gICAgYm90dG9tOiAtNHZ3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHZ3O1xyXG59XHJcbi5yZXZlcnNlLWFyYy1jb2xvci1sZWZ0e1xyXG4gICAgd2lkdGg6IDR2dztcclxuICAgIGhlaWdodDogNHZ3O1xyXG4gICAgYmFja2dyb3VuZDogIzBjOTZkZjtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDR2dztcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAydnc7XHJcbn1cclxuLnJldmVyc2UtYXJjLXJpZ2h0e1xyXG4gICAgd2lkdGg6IDZ2dztcclxuICAgIGhlaWdodDogNHZ3O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICByaWdodDogNS44dnc7XHJcbiAgICBib3R0b206IC00dnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHZ3O1xyXG59XHJcbiNjaGF0LXBhcmVudHtcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcbi5yZXZlcnNlLWFyYy1jb2xvci1yaWdodHtcclxuICAgIHdpZHRoOiA0dnc7XHJcbiAgICBoZWlnaHQ6IDR2dztcclxuICAgIGJhY2tncm91bmQ6ICMwMEMwNkQ7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHZ3O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3Z3O1xyXG59XHJcbi50aW1lci1sZWZ0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC03NXB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43KTs7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0b3A6IDRweDtcclxufVxyXG4udGltZXItcmlnaHR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtNzVweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNyk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0b3A6IDRweDtcclxufVxyXG4udGl0bGUtYmxvY2t7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnRpdGxlLWljb257XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuLnRpdGxlLXRleHR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4uZmlyc3QtdGlja3tcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC0yNHB4O1xyXG4gICAgdG9wOiAtNHB4O1xyXG59XHJcbi5zZWNvbmQtdGlja3tcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC0yOHB4O1xyXG4gICAgdG9wOiAtNHB4O1xyXG59XHJcbi5jdXN0b20tZm9vdGVye1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG59XHJcbi8vIC5yZXZlcnNlLW1zZy1hcmMtbGVmdHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIGxlZnQ6IC0xOXB4O1xyXG4vLyAgICAgYm90dG9tOiAtM3B4O1xyXG4vLyAgICAgd2lkdGg6IDIwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDIwcHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgICBib3gtc2hhZG93OiAxMHB4IDBweCAwIDAgIzBjOTZkZjtcclxuLy8gICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNGRlZyk7XHJcbi8vIH1cclxuLy8gLnJldmVyc2UtbXNnLWFyYy1yaWdodHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHJpZ2h0OiAtMTlweDtcclxuLy8gICAgIGJvdHRvbTogLTNweDtcclxuLy8gICAgIHdpZHRoOiAyMHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAyMHB4O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMTBweCAwcHggMCAwICMwMEMwNkQ7XHJcbi8vICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzRkZWcpO1xyXG4vLyB9Il19 */"

/***/ }),

/***/ "./src/app/fluid/fluid.page.ts":
/*!*************************************!*\
  !*** ./src/app/fluid/fluid.page.ts ***!
  \*************************************/
/*! exports provided: FluidPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FluidPage", function() { return FluidPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Chatter - Chat themes Ionic 4 (https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 *
 */




var FluidPage = /** @class */ (function () {
    function FluidPage(platform, alertController, device, menuCtrl) {
        this.platform = platform;
        this.alertController = alertController;
        this.device = device;
        this.menuCtrl = menuCtrl;
        this.conversation = [
            { text: 'Hey, that\'s an awesome chat UI', sender: 0, image: 'assets/images/sg2.jpg' },
            { text: 'Right, it totally blew my mind', sender: 1, image: 'assets/images/sg1.jpg', read: true, delivered: true, sent: true },
            { text: 'And it is free ?', sender: 0, image: 'assets/images/sg2.jpg' },
            { text: 'Yes, totally free', sender: 1, image: 'assets/images/sg1.jpg', read: true, delivered: true, sent: true },
            { text: 'Wow, that\'s so cool', sender: 0, image: 'assets/images/sg2.jpg' },
            { text: 'Hats off to the developers', sender: 1, image: 'assets/images/sg1.jpg', read: false, delivered: true, sent: true },
            { text: 'Oh yes, this is gooood stuff', sender: 0, image: 'assets/images/sg2.jpg' },
            { text: 'Check out their other designs ', sender: 1, image: 'assets/images/sg1.jpg', read: false, delivered: false, sent: true }
        ];
        this.phone_model = 'iPhone';
        this.input = '';
    }
    FluidPage.prototype.ngOnInit = function () {
    };
    FluidPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.menuCtrl.enable(false, 'end');
        this.menuCtrl.enable(true, 'start');
        setTimeout(function () {
            _this.scrollToBottom();
        }, 10);
        setTimeout(function () {
            _this.presentAlert();
        }, 100);
    };
    FluidPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.device.platform = 'iOS')) return [3 /*break*/, 3];
                        switch (this.platform.height()) {
                            case 812:
                                this.phone_model = 'iPhone X';
                                break;
                            case 736:
                                this.phone_model = 'iPhone 6/7/8 Plus';
                                break;
                            case 667:
                                this.phone_model = 'iPhone 6/7/8';
                                break;
                        }
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Hey there',
                                subHeader: 'Information',
                                message: 'We have adjusted the layout as per the phone model - ' + this.phone_model,
                                buttons: ['OK']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FluidPage.prototype.send = function () {
        var _this = this;
        if (this.input != '') {
            this.conversation.push({ text: this.input, sender: 1, image: 'assets/images/sg1.jpg' });
            this.input = '';
            setTimeout(function () {
                _this.scrollToBottom();
            }, 10);
        }
    };
    FluidPage.prototype.scrollToBottom = function () {
        var content = document.getElementById("chat-container");
        var parent = document.getElementById("chat-parent");
        var scrollOptions = {
            left: 0,
            top: content.offsetHeight
        };
        parent.scrollTo(scrollOptions);
    };
    FluidPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fluid',
            template: __webpack_require__(/*! ./fluid.page.html */ "./src/app/fluid/fluid.page.html"),
            styles: [__webpack_require__(/*! ./fluid.page.scss */ "./src/app/fluid/fluid.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_2__["Device"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]])
    ], FluidPage);
    return FluidPage;
}());



/***/ })

}]);
//# sourceMappingURL=fluid-fluid-module.js.map