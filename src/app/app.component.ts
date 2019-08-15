import { Component } from '@angular/core';

// Decorator 
// - selector is the identifier or "tag"
// - templateUrl & styleUrl point to html and css
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title: string = 'angular-todo';

	constructor() { console.log('AppComponent initialised') }
}
