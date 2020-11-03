import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router'
import * as constants from '../../utils/constants';


@Component({
  selector: 'ticketing-app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() tableData:any[] = [];
  paginatedData:any[] = [];
  Object = Object;
  constants = constants;
  constructor(private router: Router) { }

  ngOnInit(): void {
    //this.pagination({page:0, rows:10});
  }

  ngOnChanges() {
    this.pagination({page:0, rows:10});
  }

  ticketIdClickHandler = (id: string) => {
    this.router.navigate(['ticketDetail',{id}]);
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
