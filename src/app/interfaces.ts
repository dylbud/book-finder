import { MatchMedia } from "@angular/flex-layout/core/typings/match-media";
import { BehaviorSubject, Observable } from "rxjs";

export interface IBook {
  authors: string[];
  title: string;
  publishedDate: Date;
  imageLinks: IImageLinks;
  previewLink: string;
}

export interface IImageLinks {
  smallThumbnail: string;
}

export interface IMemoryTile {
  imageUrl: string;
  state: "default" | "flipped" | "matched";
  // selected: boolean;
  // rowNumber: number;
  // columnNumber: number;
  // matchingTile: IMemoryTile;
}

export abstract class Facade<TState> {
  protected state: TState;
  protected readonly initialState: TState;
  protected store: BehaviorSubject<TState>;
  protected state$: Observable<TState>;

  constructor(initialState: TState) {
    this.initialState = initialState;
    this.state = initialState;
    this.store = new BehaviorSubject<TState>(this.state);
    this.state$ = this.store.asObservable();
  }

  public reset() {
    this.updateState(this.initialState);
  }

  /** Update internal state cache and emit from store... */
  protected updateState(updatedState: TState) {
    this.store.next((this.state = updatedState));
  }
}
