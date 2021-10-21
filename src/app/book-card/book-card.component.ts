import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { delay } from "rxjs/operators";
import { IBook } from "../interfaces";
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: "app-book-card",
  templateUrl: "./book-card.component.html",
  styleUrls: ["./book-card.component.scss"],
  animations: [
    trigger("pageIsLoaded", [
      state(
        "end",
        style({
          transform: "rotateY(0deg)",
          height: "*",
          opacity: 1
        })
      ),
      state(
        "begin",
        style({
          transform: "rotateY(90deg)",
          height: "0px",
          opacity: 0
        })
      ),
      transition("begin => end", [animate("1000ms ease-in")])
    ])
  ]
})
export class BookCardComponent implements AfterViewInit {
  @Input() book: IBook;
  isLoaded = false;

  ngAfterViewInit() {
    this.isLoaded = true;
  }

  authorsList(authors: string[]): string {
    const list = authors ? authors.join(", ") : "";
    return list.length <= 60 ? list : `${list.substring(0, 60)}...`;
  }

  formatedTitle(title: string): string {
    return title.length <= 48 ? title : `${title.substring(0, 48)}...`;
  }
}
