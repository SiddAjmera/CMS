import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppFirebaseModule } from './app-firebase/app-firebase.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgxEditorModule } from 'ngx-editor';

import { AppComponent } from './app.component';
import { SanitizeHtmlPipe } from './pipes/sanitize-html/sanitize-html.pipe';
import { LoginComponent } from './components/login/login.component';
import { IntroComponent } from './components/intro/intro.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogsComponent } from './components/blogs/blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    SanitizeHtmlPipe,
    LoginComponent,
    IntroComponent,
    MainComponent,
    HeaderComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxEditorModule,
    HttpClientModule,
    AppFirebaseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
