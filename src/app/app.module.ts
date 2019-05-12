import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ToDoService } from './list-item/service/todoservice';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule
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
