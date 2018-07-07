import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgxEditorModule } from 'ngx-editor';

import { AppComponent } from './app.component';
import { SanitizeHtmlPipe } from './pipes/sanitize-html/sanitize-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
