import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { MemeDirective } from './directives/meme.directive';
import { MemeService } from './services/memes.service';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [
    AppComponent,
    MemeDirective
  ],
  bootstrap: [AppComponent],
  providers: [MemeService]
})
export class AppModule {
  constructor(public upgrade: UpgradeModule) { }
}
