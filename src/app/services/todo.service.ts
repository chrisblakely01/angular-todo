import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type' : 'application/json'
	})
}
@Injectable({
	providedIn: 'root'
})
export class TodoService {
	todosUrl:string = 'http://localhost:3000/todos';

	constructor(private http:HttpClient) { }

	getTodos():Observable<Todo[]> {
		return this.http.get<Todo[]>(this.todosUrl);
	}

	createTodo(todo:Todo):Observable<Todo> {
		return this.http.post<Todo>(this.todosUrl, todo, httpOptions)
	}

	deleteTodo(todo:Todo):Observable<Todo> {
		const url = `${this.todosUrl}/${todo.id}`;
		return this.http.delete<Todo>(url, httpOptions)
	}

	toggleCompleted(todo: Todo):Observable<any>{
		const url = `${this.todosUrl}/${todo.id}`;
		return this.http.put(url, todo, httpOptions);
	}
}
