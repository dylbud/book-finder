import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, max, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { IBook } from "./interfaces";

@Injectable({
  providedIn: "root"
})
export class BookService {
  apiKey: string = environment.apiKey;
  booksApi: string = "https://www.googleapis.com/books/v1/volumes";
  constructor(private http: HttpClient) {}

  getBooks(queryString: string): Observable<IBook[]> {
    let data$ = new Observable<IBook[]>();
    const maxResults = 12;
    if (queryString.trim().length > 0) {
      const url: string = `${this.booksApi}?q=${queryString}&key=${this.apiKey}&maxResults=${maxResults}`;
      data$ = this.http.get<any>(url).pipe(
        map((data) => {
          if (data.items) {
            return data.items.map((b) => {
              const book: IBook = {
                authors: b.volumeInfo.authors,
                title: b.volumeInfo.title,
                publishedDate: b.volumeInfo.publishedDate,
                imageLinks: b.volumeInfo.imageLinks
              };
              return book;
            });
          }
        })
      );
    }
    return data$;
  }
}
