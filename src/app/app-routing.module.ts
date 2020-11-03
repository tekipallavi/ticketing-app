import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableFilterContainerComponent } from './components/table-filter-container/table-filter-container.component'

const routes: Routes = [
  {path : 'allTickets', component : TableFilterContainerComponent},
  {path : 'ticketDetail', loadChildren : () => import('./modules/details/details.module').then( mod => mod.DetailsModule )},
  {path : '' , redirectTo : 'allTickets', pathMatch : 'full'},
  {path : '**', redirectTo: 'allTickets'}
];
//const routes: Routes = [];
@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
