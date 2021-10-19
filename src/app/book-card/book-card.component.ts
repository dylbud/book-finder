import { Component, Input, OnInit } from "@angular/core";
import { delay } from "rxjs/operators";
import { IBook } from "../interfaces";
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: "app-book-card",
  templateUrl: "./book-card.component.html",
  styleUrls: ["./book-card.component.scss"],
  animations: [
    trigger("flippable", [
      state(
        "end",
        style({
          transform: "rotateY(150deg)"
        })
      ),
      state(
        "begin",
        style({
          transform: "rotateY(0deg)"
        })
      ),
      transition("begin => end", [animate("1s")])
    ])
  ]
})
export class BookCardComponent {
  @Input() book: IBook;

  authorsList(authors: string[]): string {
    const list = authors ? authors.join(", ") : "";
    return list.length <= 60 ? list : `${list.substring(0, 60)}...`;
  }

  formatedTitle(title: string): string {
    return title.length <= 48 ? title : `${title.substring(0, 48)}...`;
  }
}
