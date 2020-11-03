import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { TicketService } from '../../services/ticket-service.service'

@Component({
  selector: 'details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit{
   constructor(private route : ActivatedRoute, private ticketService: TicketService){
      
   }

   ngOnInit(){
    this.route.paramMap.subscribe(paramMapData => {
      console.log("params", paramMapData['params'].id);
     /* this.ticketService.getTicketById(paramMapData['params'].id).subscribe(ticketDetail => {
         console.log("ticketDetail", ticketDetail);
      })*/
    })
   }
}
