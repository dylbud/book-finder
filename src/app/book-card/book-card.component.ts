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
    const list = authors ? authors.join(", ") : "";
    return list.length <= 60 ? list : `${list.substring(0, 60)}...`;
  }

  formatedTitle(title: string): string {
    return title.length <= 48 ? title : `${title.substring(0, 48)}...`;
  }
}
