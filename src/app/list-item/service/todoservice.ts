import {Injectable} from '@angular/core';


@Injectable()
export class ToDoService {

    todos = [
        {
        title: 'test',
        complete: false
        },
        {
        title: 'test2',
        complete: true
        }
    ];

    message = '';

    constructor() {}

   toggleCompletedHandler(index: number) {
    this.todos[index].complete= !this.todos[index].complete;
  }

  toggleRemoveHandler(i: number, deleted: todos) {
    //this.todos = this.todos.filter((el, index) => index != i);
    this.todos.splice(i, 1);
    this.message = deleted.title.concat('was deleted');
  }

  toggleAddHandler(todoInput: string) {
    if(!todoInput || 0 === todoInput.length) {
        this.message = 'To-do title is empty';
        return;
    }

    if (!this.todos.some(todo => todo.title ===  todoInput)) {
        this.todos.push({ title: todoInput, complete: false });
        this.message = 'Item added';
    } else {
        this.message = todoInput.concat(' exists');
    }
  }
}
