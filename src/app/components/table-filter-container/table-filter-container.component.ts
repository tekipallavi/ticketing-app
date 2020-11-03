import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket-service.service';

@Component({
  selector: 'ticketing-app-table-filter-container',
  templateUrl: './table-filter-container.component.html',
  styleUrls: ['./table-filter-container.component.scss']
})
export class TableFilterContainerComponent implements OnInit {
  ticketData:any = []; 
  sortFilterCriteria = {};
  filteredTickets: any[] = [];
  constructor(private ticketService: TicketService){

  }

  ngOnInit(): void {   
    this.ticketService.getLoaderSubject().next(true); 
    this.ticketService.getAllTickets().subscribe(ticketData => {     
      this.ticketService.getLoaderSubject().next(false);
      this.ticketData = ticketData;
      this.filteredTickets = [...this.ticketData]; 
    });
  }

  onFilterChange = (filterText)=> {
    this.sortFilterCriteria['filterText']= filterText;
    this.onSortFilterChange(this.sortFilterCriteria);
 }

 onSortFilterChange = criteria => {
  this.filteredTickets = [...this.ticketData];
     
  if(criteria.filterText && criteria.filterText !==''){    
     this.filteredTickets = this.filteredTickets.filter(alarm => {
      return Object.values(alarm).some(alarmColumnData => alarmColumnData.toString().indexOf(criteria.filterText) != -1);        
     })       
  }

 }

}
