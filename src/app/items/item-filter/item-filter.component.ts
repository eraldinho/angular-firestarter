import { Component, OnInit, Input, Output } from '@angular/core';
import { Item } from '../shared/item';

@Component({
  selector: 'item-filter',
  templateUrl: './item-filter.component.html',
  styleUrls: ['./item-filter.component.scss']
})
export class ItemFilterComponent implements OnInit {
  @Input() items: [Item];
  filtre: string;
  tType: string;

  constructor() { }

  ngOnInit() {
  }

}
