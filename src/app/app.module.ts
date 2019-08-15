import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';

// Entry point for the app
// All new components get added to declarations
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    TodoInputComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
