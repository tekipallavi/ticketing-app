import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Subject} from 'rxjs'

@Injectable({
    providedIn : 'root'
})

export class TicketService{
    loaderSubject = new Subject<boolean>();
    ticketDataSubject = new Subject<boolean>();
    ticketData:any = [];
    ticketUpdateFlag = false;
    ticketDetail ={};
    constructor(private http: HttpClient){

    }

    getLoaderSubject = () => {
        return this.loaderSubject;
    }


    getAllTickets = () => {
        return this.http.get('../../assets/jsons/ticket-data.json');
    }

    getTicketById = id => {
        return 'my ticket';
    }

    addNewTicket =  ticket => {
        this.ticketData.unshift(ticket);
        this.ticketUpdateFlag = true;
        this.ticketDataSubject.next(true);
    }

    getTicketUpdateStatus = ():boolean => this.ticketUpdateFlag;

    getTicketsDataUpdatedSubject  = () => this.ticketDataSubject;

    getTicketData = () =>{
        return this.ticketData;
    } 

    setTicketData = ticketData => this.ticketData = [...ticketData];

    storeTicketDetail = record => {
      this.ticketDetail = {...record};
    }

    getTicketDetail = ( ) => this.ticketDetail;

    updateTicket = (id, key, value) => {
        const idx = this.ticketData.findIndex(ticket => ticket.ticketId === id);
        this.ticketData[idx][key] = value;
        this.ticketUpdateFlag = true;
        this.ticketDataSubject.next(true);
    }
}