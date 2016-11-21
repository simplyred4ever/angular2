import {Component, NgModule, enableProdMode} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
	selector:"ez-app",
	template:`
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
})
class EzApp{
	private nColor : number = 0;
	getColor() {
		this.nColor++;
		if (this.nColor % 2 == 1) {
			return 'green';
		} else {
			return 'black';
		}
	}
}

@NgModule({
  declarations: [EzApp],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [EzApp]
})
class EzModule {
}

enableProdMode();

platformBrowserDynamic().bootstrapModule(EzModule);
