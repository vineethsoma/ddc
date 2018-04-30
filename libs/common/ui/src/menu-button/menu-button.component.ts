import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ddc-menu-button',
  template: `
    <button mat-raised-button class="menu-button">
      <i [class]=icon></i>
      <div class="menu-content">
        <ng-content></ng-content>
      </div>
    </button>
  `,
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {
  @Input() icon: string;

  constructor() {}

  ngOnInit() {
    this.icon = `${this.icon} fa-3x`;
  }
}
