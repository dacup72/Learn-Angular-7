import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNums: number[] = [];
  oddNums: number[] = [];

  displayTicks(tick: number ) {
    tick % 2 === 0
      ? this.evenNums.push(tick)
      : this.oddNums.push(tick);
  }
}
