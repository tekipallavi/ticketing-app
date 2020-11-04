import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as constants from '../../utils/constants'
import { FormGroup, FormBuilder } from '@angular/forms';
import {v4 as uuidv4} from 'uuid';
import { TicketService } from '../../services/ticket-service.service';
import {CheckInputDirective} from '../../../shared/directives/check-input.directive';

@Component({
  selector: 'ticket-app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {
  constants = constants;
  controlTypes:Object = {input:'input',dropdown:'dropdown',radio:'radio',checkbox:'checkbox',textarea:'textarea'}
  ticketForm:FormGroup;
  @Output() ticketSubmissionEvent = new EventEmitter();

  constructor(private fb: FormBuilder, private ticketService:TicketService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm = () => {
    let formBuilderObject = {};  
    constants.createTicketFormFields.map(field => {
        formBuilderObject[field.formControlName]= [field.value]
    })
    this.ticketForm = this.fb.group(formBuilderObject);  
  }

  dropDownChangeHandler = () => {

  }

  onFormSubmit= () => {   
    const newTicket = {};
    constants.createTicketFormFields.map(field => {
      newTicket[field.formControlName]= this.ticketForm.controls[field.formControlName].value;
    }) 
    newTicket['ticketId'] = uuidv4();
    newTicket['status'] = "Open";
    console.log('onFormSubmit', newTicket);
    this.ticketService.addNewTicket(newTicket);
    this.ticketSubmissionEvent.emit();
  }

  clearForm= () => {
    this.initializeForm();
  }

  clearField= field => {    
    this.ticketForm.controls[field.formControlName].setValue(field.value);
  }

}
