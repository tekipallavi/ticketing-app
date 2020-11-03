import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Subject} from 'rxjs'

@Injectable({
    providedIn : 'root'
})

export class TicketService{
    loaderSubject = new Subject<boolean>()
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
}