import { Component, DoCheck, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ToDoService } from './list-item/service/todoservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

 @ViewChild('todoInput')
 todoInput: ElementRef;

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

  toggleRemoveHandler(i: number, deleted: todos) {
    this.toDoService.toggleRemoveHandler(i, deleted);
  }

  toggleAddHandler() {
    this.toDoService.toggleAddHandler(this.todoInput.nativeElement.value);
    this.renderer.setProperty(this.todoInput.nativeElement, 'value', '');
  }

}
