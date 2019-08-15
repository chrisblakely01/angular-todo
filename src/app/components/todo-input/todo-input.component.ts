import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
	@Output() addTodo: EventEmitter<any> = new EventEmitter();
	title:string;

  constructor() { }

  ngOnInit() {
	}
	
	onSubmit(){
		const todo = {
			title: this.title,
			completed: false
		}

		this.addTodo.emit(todo);
	}

}
