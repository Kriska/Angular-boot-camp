import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()
  todo: {
    title: string,
    complete: boolean
  };

  @Output()
  toggle: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  toggleCompletedHandler() {
    this.toggle.emit();
  }

  toggleRemoveHandler() {
    this.remove.emit(this.todo);
  }
}
