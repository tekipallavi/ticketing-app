import { Component, OnInit , ChangeDetectorRef, AfterViewChecked} from '@angular/core';
import { TicketService } from './services/ticket-service.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {  
 
  showCreateTicketPopup:boolean = false;
  loaderCount:number = 0;

  constructor(private ticketService: TicketService, private router:Router, private cd: ChangeDetectorRef){

  }

  ngOnInit(){
    this.ticketService.getLoaderSubject().subscribe(
      {next : value => {
        (value ? this.showLoader : this.hideLoader)();
      }
    })
  } 

  ngAfterViewChecked(){
    this.cd.detectChanges();
  }

  showLoader= () => {
    this.loaderCount++;
  }
 
  hideLoader= () => {
    if(this.loaderCount > 0) this.loaderCount--;
  }

}
