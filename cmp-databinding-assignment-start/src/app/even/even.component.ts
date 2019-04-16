import { Component, OnInit, ContentChild, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() tickNum: number;

  constructor() { }

  ngOnInit() {
  }

}
