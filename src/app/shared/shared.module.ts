import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFirebaseModule } from '../app-firebase/app-firebase.module';
import { HttpClientModule } from '@angular/common/http';
import { SanitizeHtmlPipe } from 'src/app/shared/pipes/sanitize-html/sanitize-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    AppFirebaseModule,
    HttpClientModule
  ],
  declarations: [SanitizeHtmlPipe],
  exports: [AppFirebaseModule, HttpClientModule]
})
export class SharedModule { }
