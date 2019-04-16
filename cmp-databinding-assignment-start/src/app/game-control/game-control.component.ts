import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  ticks = 1;
  ticker;
  tickerRunning = false;

  @Output() sendTicks = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onToggleTicker(action: boolean) {
    if(action && !this.tickerRunning) {
      this.tickerRunning = true;
      this.ticker = window.setInterval(() => {
        this.sendTicks.emit(this.ticks++);
      }, 1000);
    }
    else if(!action && this.tickerRunning) {
      window.clearInterval(this.ticker);
      this.tickerRunning = false;
    }
  }

}
