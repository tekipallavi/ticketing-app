import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { TableFilterContainerComponent } from './components/table-filter-container/table-filter-container.component';
import { CheckInputDirective } from '../shared/directives/check-input.directive';
import {PaginatorModule} from 'primeng/paginator';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    TableComponent,
    TableFilterContainerComponent,
    CheckInputDirective,
    CreateTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PaginatorModule,
    DialogModule,
    BrowserAnimationsModule,
    FormsModule,    
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
