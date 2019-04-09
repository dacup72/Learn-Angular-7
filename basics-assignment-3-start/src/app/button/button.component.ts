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
    this.displayPassword = !this.displayPassword;
    this.clicks.push(new Date());
  }
}
