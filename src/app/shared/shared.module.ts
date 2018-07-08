import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
  exports: [
    CommonModule,
    AppFirebaseModule,
    HttpClientModule
  ]
})
export class SharedModule {}