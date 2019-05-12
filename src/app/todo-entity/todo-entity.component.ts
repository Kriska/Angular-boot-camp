import { Component, OnInit, DoCheck, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ToDoService } from '../list-item/service/todoservice';

@Component({
  selector: 'app-todo-entity',
  templateUrl: './todo-entity.component.html',
  styleUrls: ['./todo-entity.component.css']
})
export class TodoEntityComponent implements OnInit, DoCheck {


  @ViewChild('todoInput')
  todoInput: ElementRef;

  constructor(public toDoService: ToDoService, private renderer: Renderer2) { }


  message = '';

  ngOnInit() {
  }


  ngDoCheck() {
    this.message = this.toDoService.message;
  }


  toggleAddHandler() {
    this.toDoService.toggleAddHandler(this.todoInput.nativeElement.value);
    this.renderer.setProperty(this.todoInput.nativeElement, 'value', '');
  }

}
