import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from "@angular/core";
import { delay } from "rxjs/operators";
import { IBook } from "../interfaces";
import { trigger, state, style, animate, transition } from "@angular/animations";
import { NONE_TYPE } from "@angular/compiler";

@Component({
  selector: "app-book-card",
  templateUrl: "./book-card.component.html",
  styleUrls: ["./book-card.component.scss"],
  animations: [
    trigger("pageIsLoaded", [
      state(
        "true",
        style({
          transform: "rotateY(0deg)",
          height: "*",
          opacity: 1
        })
      ),
      state(
        "false",
        style({
          transform: "rotateY(90deg)",
          height: "0px",
          opacity: 0
        })
      ),
      transition("false => true", [animate("500ms ease-in")])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCardComponent implements AfterViewInit {
  @Input() book: IBook;
  isLoaded = false;
  numberOfTicks = 0;

  constructor(private ref: ChangeDetectorRef) {
    setInterval(() => {
      ref.markForCheck();
    }, 0);
  }

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

  goToBookPreview(previewLink: string) {
    window.open(previewLink);
  }
}
