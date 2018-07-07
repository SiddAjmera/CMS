import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';

import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [HeaderComponent],
  providers: [AuthService],
  exports: [HeaderComponent]
})
export class CoreModule { }
