import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ticketing-app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() tableData = [];
  @Output() filterChangeEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  filterChangeHandler = event => {
     this.filterChangeEvent.emit(event.target.value);
  }

  debounce = ( callbackFunc, waitTime ) => {
    var timer ;
    return event => {
      if(!timer){
        timer = setTimeout (() => {
          callbackFunc(event);
          clearTimeout(timer);
          timer = undefined;
        }, waitTime);
      }
    }
  }

  debouncedFunc = this.debounce(this.filterChangeHandler, 1000);

}
