import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList$: Observable<any>;
  constructor(private bookService: BookService) {
    this.bookList$ = this.bookService.getBooks("the left hand of darkness").pipe(tap(x => console.log(x)));
  }

  ngOnInit(): void {
    
  }

}
