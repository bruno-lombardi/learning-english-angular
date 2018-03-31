import { Component, OnInit } from '@angular/core';

import { Phrase } from '../shared/Phrase.model';
import { PHRASES } from './phrases-mock';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public phrases: Phrase[] = PHRASES;

  constructor() { }

  ngOnInit() {
    console.log(this.phrases);
  }

}
