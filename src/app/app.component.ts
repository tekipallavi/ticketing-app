import { Component, OnInit , ChangeDetectorRef, AfterViewChecked, ViewEncapsulation} from '@angular/core';
import { TicketService } from './services/ticket-service.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewChecked {  
 
  showCreateTicketPopup:boolean = false;
  loaderCount:number = 0;

  constructor(private ticketService: TicketService, private router:Router, private cd: ChangeDetectorRef){

  }

  ngOnInit(){
    this.ticketService.getAllTickets();
    this.ticketService.getLoaderSubject().subscribe(
      {next : value => {
        (value ? this.showLoader : this.hideLoader)();
      }
    })
  } 

  ngAfterViewChecked(){
    this.cd.detectChanges();
  }

  showCreateTicketPopupFunc = () => {
    alert('button clicked');
  }

  showLoader= () => {
    this.loaderCount++;
  }
 
  hideLoader= () => {
    if(this.loaderCount > 0) this.loaderCount--;
  }

  onTicketCreation = () => {
    this.showCreateTicketPopup=false;
  }

}
