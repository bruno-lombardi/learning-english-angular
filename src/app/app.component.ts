import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public gameInProgress: boolean = true
  public endedGameType: string

  public endGame(type: string): void {
    this.endedGameType = type
    this.gameInProgress = false
  }

  public restartGame(): void {
    this.gameInProgress = true
    this.endedGameType = undefined
  }
}
