import { environment } from './../../environments/environment.prod';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';


@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuth
  ],
  exports: [
    AngularFireModule,
    AngularFireAuth
  ]
})
export class AppFirebaseModule { }
