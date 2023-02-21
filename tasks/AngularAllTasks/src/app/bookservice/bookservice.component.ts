import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import Book from './book';

@Component({
	selector: 'app-book',
	template: `<div *ngIf="bookListFromService">
		<table>
			<tr *ngFor="let book of bookListFromService">
			<th>{{book.id}}: </th>
			<td>{{book.name}}</td>
			</tr>
		</table>
	</div>`
})
export class BookComponent implements OnInit {

	bookListFromService: Book[] | undefined; // Will store the bookList to be displayed
	bookserviceService: BookserviceService | undefined; // A variable of BookService type, will be used to populate bookList

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	constructor() {}

	ngOnInit() {
		this.bookserviceService = new BookserviceService(); // Creation of BookService instance using new keyword
		this.bookListFromService = this.bookserviceService.getAllBooks(); // Invoking the getAllBooks() of bookService to get data
	}
}
