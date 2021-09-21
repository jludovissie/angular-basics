import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArrayComponent } from './array/array.component';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [
    ArrayComponent,
    ArticleComponent,
    AppComponent ,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
