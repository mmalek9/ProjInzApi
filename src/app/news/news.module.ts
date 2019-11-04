import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [NewsListComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ]
})
export class NewsModule { }
