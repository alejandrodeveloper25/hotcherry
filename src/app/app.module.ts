import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpectationComponent } from './components/expectation/expectation.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpectationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParallaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
