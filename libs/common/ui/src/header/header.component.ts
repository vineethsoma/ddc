import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ddc-header',
  template: `
    <p>
      header works!
    </p>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
