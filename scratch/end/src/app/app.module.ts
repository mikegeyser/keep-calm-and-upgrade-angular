import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule, Routes, UrlHandlingStrategy } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing.module';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { MemeComponent } from './directives/meme.directive';
import { MemeService } from './services/memes.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  declarations: [
    AppComponent,
    EditComponent,
    HomeComponent,
    MemeComponent
  ],
  entryComponents: [MemeComponent],
  bootstrap: [AppComponent],
  providers: [
    MemeService,
  ]
})
export class AppModule {
  constructor() { }
}