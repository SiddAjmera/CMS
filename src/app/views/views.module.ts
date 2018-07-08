import { NgModule } from '@angular/core';

import { NgxEditorModule } from 'ngx-editor';

import { ViewsRoutingModule } from './views-routing.module';

import { BlogsComponent } from './components/blogs/blogs.component';
import { HomeComponent } from './components/home/home.component';
import { IntroComponent } from './components/intro/intro.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    ViewsRoutingModule,
    NgxEditorModule
  ],
  declarations: [
    LoginComponent,
    IntroComponent,
    BlogsComponent,
    HomeComponent
  ]
})
export class ViewsModule { }
