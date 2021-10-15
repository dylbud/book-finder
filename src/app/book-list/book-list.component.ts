import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { concat, Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, map, filter, switchMap, tap } from "rxjs/operators";
import { BookService } from "../book.service";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"]
})
export class BookListComponent {
  searchTerm: FormControl;
  bookList$: Observable<any>;
  constructor(private bookService: BookService) {
    this.searchTerm = new FormControl();

    this.searchTerm.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe((term) => {
      this.bookList$ = this.bookService.getBooks(term).pipe(tap((x) => console.log(x)));
    });
  }
}
