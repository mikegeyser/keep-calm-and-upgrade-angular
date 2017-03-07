import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule, Routes, UrlHandlingStrategy } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing.module';
import { EditComponent } from './components/edit/edit.component';
import { MemeComponent } from './directives/meme.directive';
import { MemeService } from './services/memes.service';



@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  declarations: [
    AppComponent,
    EditComponent,
    MemeComponent
  ],
  entryComponents: [MemeComponent],
  bootstrap: [AppComponent],
  providers: [
    MemeService,
  ]
})
export class AppModule {
  constructor(public upgrade: UpgradeModule) { }
}