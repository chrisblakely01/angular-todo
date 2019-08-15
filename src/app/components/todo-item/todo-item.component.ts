// Input allows us to pass props e.g [todo]
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
	@Input() todo: Todo;
	@Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

	constructor(private todoService:TodoService) { }

  ngOnInit() {
	}
	
	setClasses(){
		let classes = {
			todo: true,
			'is-complete': this.todo.completed
		}

		return classes;
	}

	onToggle(){
		//Set the UI
		this.todo.completed = !this.todo.completed;

		this.todoService.toggleCompleted(this.todo).subscribe(todo => console.log(todo));
	}

	onDelete(){
		this.deleteTodo.emit(this.todo);
	}
}
