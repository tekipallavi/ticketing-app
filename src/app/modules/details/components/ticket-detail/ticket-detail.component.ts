import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../../services/ticket-service.service'
import * as constants from '../../../../utils/constants'

@Component({
  selector: 'ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {
  
  ticketDetail:any = {};
  constants = constants;
  opComments: string = '';
  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.ticketDetail = this.ticketService.getTicketDetail();
    this.opComments = this.ticketDetail.opertorComments;
  }

  updateOperatorComments = event => {
    this.ticketService.updateTicket(this.ticketDetail.ticketId,'opertorComments',this.opComments);
  }

  changeTicketStatus = status => {
    this.ticketDetail.status = status;
    this.ticketService.updateTicket(this.ticketDetail.ticketId,'status', status)
  }

}
