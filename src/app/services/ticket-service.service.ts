import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Subject} from 'rxjs'

@Injectable({
    providedIn : 'root'
})

export class TicketService{
    loaderSubject = new Subject<boolean>();
    ticketData:any = [];
    ticketUpdateFlag = false;
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
    }

    getTicketUpdateStatus = ():boolean => this.ticketUpdateFlag;

    getTicketData = () => this.ticketData;

    setTicketData = ticketData => this.ticketData = [...ticketData];
}