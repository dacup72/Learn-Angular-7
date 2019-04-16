import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  ticking = false;

  constructor() { }

  ngOnInit() {
  }

  toggleTicker(action) {
    this.ticking = action;
  }

  gameTicker() {
    if(this.ticking) {
      setInterval(function() {
        console.log(true);
      }, 1000);
    }
  }

}
