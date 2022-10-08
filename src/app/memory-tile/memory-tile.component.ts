import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { IMemoryTile } from "../interfaces";
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: "app-memory-tile",
  templateUrl: "./memory-tile.component.html",
  styleUrls: ["./memory-tile.component.scss"],
  animations: [
    trigger("cardFlip", [
      state(
        "default",
        style({
          transform: "none"
        })
      ),
      state(
        "flipped",
        style({
          transform: "rotateY(180deg)"
        })
      ),
      transition("default => flipped", [animate("400ms")]),
      transition("flipped => default", [animate("400ms")])
    ])
  ]
})
export class MemoryTileComponent implements OnInit {
  data: IMemoryTile;
  selected: boolean;
  numberOfTicks = 0;

  constructor(private ref: ChangeDetectorRef) {
    setInterval(() => {
      ref.markForCheck();
    }, 0);
  }
  ngOnInit(): void {
    this.selected = false;
    console.log("Initial Selected Value: ", this.selected);
    this.data = {
      imageUrl: "../../assets/lotr.jpeg",
      state: "default"
    };
  }

  cardClicked() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }
}
