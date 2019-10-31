import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'news',
    loadChildren: './news/news.module#NewsModule'
  },
  {
    path: 'info',
    loadChildren: './info/info.module#InfoModule'
  },
  {
    path: 'deals',
    loadChildren: './deals/deals.module#DealsModule'
  },
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
