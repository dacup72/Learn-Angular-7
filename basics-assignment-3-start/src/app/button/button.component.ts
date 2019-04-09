import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  displayPassword = false;
  clicks = [];

  constructor() { }

  ngOnInit() {
  }

  togglePassword() {
    var len = this.clicks.length;
    this.displayPassword = !this.displayPassword;
    this.clicks.push(len ? this.clicks[len - 1] + 1 : 1);
  }

  getColor(click) {
    return click > 4 ? 'blue' : 'white';
  }

}
