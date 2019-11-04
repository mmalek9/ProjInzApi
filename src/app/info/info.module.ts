import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoTextComponent } from './info-text/info-text.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [InfoTextComponent],
  imports: [
    CommonModule,
    InfoRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ]
})
export class InfoModule { }
