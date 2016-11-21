import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EzApp } from './s1.component';

@NgModule({
  declarations: [EzApp],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [EzApp]
})
export class EzModule {
}
