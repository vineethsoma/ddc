import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ddc-footer',
  template: `
    <p>
      footer works!
    </p>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
