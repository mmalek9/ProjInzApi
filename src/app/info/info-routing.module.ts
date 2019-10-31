import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoTextComponent } from '../info/info-text/info-text.component';

const routes: Routes = [
  {
    path: '',
    component: InfoTextComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
