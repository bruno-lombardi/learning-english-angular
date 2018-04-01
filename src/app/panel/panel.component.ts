import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core"

import { Phrase } from "../shared/Phrase.model"
import { PHRASES } from "./phrases-mock"

@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.css"]
})
export class PanelComponent implements OnInit, OnDestroy {
  public phrases: Phrase[] = PHRASES
  public answer: string = ""
  public round: number = 0
  public roundPhrase: Phrase
  public progress: number = 0
  public tries: number = 3

  @Output() public endGame: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.updateRound()
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
  }

  updateAnswer(event: Event): void {
    this.answer = (<HTMLInputElement>event.target).value
  }

  verifyAnswer(): void {
    if (this.answer.toLowerCase() === this.roundPhrase.langPtBr.toLowerCase()) {
      this.round++

      if (this.round === 4) {
        this.endGame.emit("win")
      }

      this.updateRound()

      this.progress += 100 / this.phrases.length
      this.answer = ""
    } else {
      this.tries--
      if (this.tries < 0) {
        this.endGame.emit("lose")
      }
    }
  }

  updateRound(): void {
    this.roundPhrase = this.phrases[this.round]
  }
}
