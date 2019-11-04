import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealsRoutingModule } from './deals-routing.module';
import { DealsListComponent } from './deals-list/deals-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [DealsListComponent],
  imports: [
    CommonModule,
    DealsRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ]
})
export class DealsModule { }
