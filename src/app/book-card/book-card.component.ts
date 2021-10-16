import { Component, Input, OnInit } from "@angular/core";
import { IBook } from "../interfaces";

@Component({
  selector: "app-book-card",
  templateUrl: "./book-card.component.html",
  styleUrls: ["./book-card.component.scss"]
})
export class BookCardComponent {
  @Input() book: IBook;

  constructor() {}

  authorsList(authors: string[]): string {
    return authors ? authors.join(", ") : "";
  }

  formatedTitle(title: string): string {
    return title.length <= 80 ? title : `${title.substring(0, 48)}...`;
  }
}
