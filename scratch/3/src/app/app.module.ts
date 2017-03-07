import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { MemeService } from './services/memes.service';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [MemeService]
})
export class AppModule {
  constructor(public upgrade: UpgradeModule) { }
}
