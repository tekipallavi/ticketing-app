import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ticketing-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() createTicketEvent = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  createTicketBtnHandler = (event) => {
    this.createTicketEvent.emit();
  }

}
