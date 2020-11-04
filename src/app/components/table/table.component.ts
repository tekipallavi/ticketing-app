import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import * as constants from '../../utils/constants';
import { Paginator } from 'primeng/paginator';
import { TicketService } from 'src/app/services/ticket-service.service';


@Component({
  selector: 'ticketing-app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @ViewChild(Paginator) paginator: Paginator
  @Input() tableData:any[] = [];
  paginatedData:any[] = [];
  Object = Object;
  constants = constants;
  constructor(private router: Router, private ticketService: TicketService) { }

  ngOnInit(): void {
    //this.pagination({page:0, rows:10});
  }

  ngOnChanges(changes) {
    if(changes.tableData && this.paginator) {
      this.paginator.changePage(0);
    }
    this.pagination({page:0, rows:10});
  }

  ticketIdClickHandler = (event, ticket) => {
    event.preventDefault();
    this.ticketService.storeTicketDetail(ticket);
    this.router.navigate(['ticketDetail']);
  }

  pageChangeHandler = (event): void => {
    console.log('event****', event);
    this.pagination(event);
  }

  pagination = ({page, rows}) => {
    const startIndex = page*rows;
    const endIndex = startIndex + rows -1;
    this.paginatedData = this.tableData.slice(startIndex, endIndex);
  }

  //<p-paginator [rows]="constants.rows" [totalRecords]="tableData.length" [pageLinkSize]="constants.pageLinkSize"></p-paginator>

}
