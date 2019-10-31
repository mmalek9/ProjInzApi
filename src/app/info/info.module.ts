import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoTextComponent } from './info-text/info-text.component';


@NgModule({
  declarations: [InfoTextComponent],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
