import { Component, OnInit } from '@angular/core';
import * as constants from '../../utils/constants'
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ticket-app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {
  constants = constants;
  controlTypes:Object = {input:'input',dropdown:'dropdown',radio:'radio',checkbox:'checkbox',textarea:'textarea'}
  ticketForm:FormGroup;

  constructor(private fb: FormBuilder) { }

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
    console.log("my submitted data",this.ticketForm);
  }

  clearForm= () => {
    this.initializeForm();
  }

  clearField= field => {    
    this.ticketForm.controls[field.formControlName].setValue(field.value);
  }

}
