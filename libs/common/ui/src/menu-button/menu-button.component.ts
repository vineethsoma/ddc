import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ddc-menu-button',
  template: `
    <button mat-raised-button >
      <i [class]=icon></i>
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {
  @Input() icon: string;

  constructor() {}

  ngOnInit() {}
}
