import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedOption = "recipies";

  onNavigate(option: string) {
    this.loadedOption = option;
  }
}
