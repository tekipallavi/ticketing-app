import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket-service.service';
//import {Paginator} fro

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
    if(!this.ticketService.getTicketUpdateStatus()) {
      this.ticketService.getLoaderSubject().next(true); 
      this.ticketService.getAllTickets().subscribe((ticketData:[]) => { 
        this.filteredTickets = [...ticketData]; 
        this.ticketService.setTicketData([...ticketData]);    
        this.ticketService.getLoaderSubject().next(false);        
        
      });  
   } else {
    this.updateTicketData();
   } 

   this.ticketService.getTicketsDataUpdatedSubject().subscribe((updateStatus: boolean) => {
    if(updateStatus) this.updateTicketData();
   });
  }

  updateTicketData = () =>  this.filteredTickets = [...this.ticketService.getTicketData()];

  onFilterChange = (filterText)=> {
    this.sortFilterCriteria['filterText']= filterText;
    this.onSortFilterChange(this.sortFilterCriteria);
 }

 onSortFilterChange = criteria => {
  const allTickets = [...this.ticketService.getTicketData()];
  if(criteria.filterText){    
     this.filteredTickets = allTickets.filter(ticket => {
      return Object.values(ticket).some(ticketColumnData => ticketColumnData.toString().toUpperCase().indexOf(criteria.filterText.toUpperCase()) != -1);        
     })       
  } else if(criteria.filterText ===''){
    this.filteredTickets = allTickets;
  }
 }

}
