import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ToDoService } from './list-item/service/todoservice';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEntityComponent } from './todo-entity/todo-entity.component';

import { AppRoutingModule } from './app_routing.modul';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    TodoListComponent,
    TodoEntityComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: ToDoService,
      useClass: ToDoService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
