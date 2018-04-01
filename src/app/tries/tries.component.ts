import { Component, OnInit, Input, OnChanges } from "@angular/core"
import { Heart } from "../shared/heart.model"

@Component({
  selector: "app-tries",
  templateUrl: "./tries.component.html",
  styleUrls: ["./tries.component.css"]
})
export class TriesComponent implements OnInit, OnChanges {

  public hearts: Heart[] = [
    new Heart(true), new Heart(true), new Heart(true)
  ]
  @Input() public tries: number;

  constructor() {}

  ngOnChanges() {
    if(this.tries !== this.hearts.length) {
      let index = this.hearts.length - this.tries

      this.hearts[index - 1].full = false
    }
  }

  ngOnInit() {}
}
