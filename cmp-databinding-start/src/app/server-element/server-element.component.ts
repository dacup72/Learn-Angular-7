import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges,
  ContentChild, 
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // This is the default for css
})
export class ServerElementComponent implements OnInit, OnChanges {
  @ContentChild('contentParagraph') paragraph: ElementRef;
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { 
    console.log('Constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');

  }
}
