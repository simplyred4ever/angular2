"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const platform_browser_1 = require('@angular/platform-browser');
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
let EzApp = class EzApp {
    constructor() {
        this.nColor = 0;
    }
    getColor() {
        this.nColor++;
        if (this.nColor % 2 == 1) {
            return 'green';
        }
        else {
            return 'black';
        }
    }
};
EzApp = __decorate([
    core_1.Component({
        selector: "ez-app",
        template: `
		<h1>
			<button (click)="v_who.style.color = getColor()">变色</button>
			I choose
			<b #v_who>WHO?</b>
		</h1>
		<button (click)="v_who.textContent = 'Jason'">Jason</button>
		<button (click)="v_who.textContent = 'Mary'">Mary</button>
		<button (click)="v_who.textContent = 'Linda'">Linda</button>
		<button (click)="v_who.textContent = 'Lincoln'">Lincoln</button>
		<button (click)="v_who.textContent = 'Jimmy'">Jimmy</button>
		<button (click)="v_who.textContent = 'Albert'">Albert</button>
	`
    }), 
    __metadata('design:paramtypes', [])
], EzApp);
let EzModule = class EzModule {
};
EzModule = __decorate([
    core_1.NgModule({
        declarations: [EzApp],
        imports: [
            platform_browser_1.BrowserModule,
        ],
        providers: [],
        bootstrap: [EzApp]
    }), 
    __metadata('design:paramtypes', [])
], EzModule);
core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(EzModule);
//# sourceMappingURL=s2.js.map