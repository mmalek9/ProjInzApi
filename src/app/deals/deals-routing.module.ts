import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealsListComponent } from '../deals/deals-list/deals-list.component';

const routes: Routes = [
  {
    path: '',
    component: DealsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealsRoutingModule { }
