import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealsRoutingModule } from './deals-routing.module';
import { DealsListComponent } from './deals-list/deals-list.component';


@NgModule({
  declarations: [DealsListComponent],
  imports: [
    CommonModule,
    DealsRoutingModule
  ]
})
export class DealsModule { }
