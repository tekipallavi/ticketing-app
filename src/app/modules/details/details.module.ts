import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import {RouterModule, Routes} from '@angular/router';
import { DetailsComponent } from './details.component';

const routes:Routes = [
  {
    path : '',
    component:TicketDetailComponent
  }
]

@NgModule({
  declarations: [TicketDetailComponent],
  imports: [
    CommonModule,    
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule],
  bootstrap: [DetailsComponent]
})
export class DetailsModule { }
