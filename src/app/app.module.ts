import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { TweetNgxkhComponent } from './tweet-ngxkh/tweet-ngxkh.component';

@NgModule({
  declarations: [
    TweetNgxkhComponent
  ],
  imports: [
    BrowserModule
  ],
  providers:[],
  entryComponents: [TweetNgxkhComponent]
})
export class AppModule {

    constructor(private injector: Injector){}

    ngDoBootstrap(){
      const customElement=createCustomElement(TweetNgxkhComponent, {injector:this.injector});
      customElements.define('app-tweet-ngxkh',customElement);
    }
 }
