import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-drag-scroll-item',
  templateUrl: './drag-scroll-item.component.html',
  styleUrls: ['./drag-scroll-item.component.css']
})
export class DragScrollItemComponent implements OnInit {
  @Input() public item: any;
  @Input() public template: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

}
