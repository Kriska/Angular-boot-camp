import { Component, OnInit, ViewChild, ElementRef, Renderer2, DoCheck} from '@angular/core';
import { ToDoService } from '../list-item/service/todoservice';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements DoCheck {

 title = 'Krisi To-Do List';

  todos : any[];

  message = '';

  constructor(public toDoService: ToDoService, private renderer: Renderer2) {
    this.toDoService = toDoService;
    this.todos = toDoService.todos;
    this.message = toDoService.message;
  }

  ngDoCheck() {
    this.message = this.toDoService.message;
  }

  changeTitleHandler(titleInput: HTMLInputElement) {
    this.title = titleInput.value;
    titleInput.value = '';
  }

  toggleCompletedHandler(index: number) {
    this.toDoService.toggleCompletedHandler(index);
  }

  toggleRemoveHandler(i: number, deleted: any) {
    this.toDoService.toggleRemoveHandler(i, deleted);
  }
}
