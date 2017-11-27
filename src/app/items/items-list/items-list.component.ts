import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item';
import { Observable } from 'rxjs/Observable';
import { ItemFilterComponent } from '../item-filter/item-filter.component'


@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  items: any // Observable<Item[]>;
  showSpinner = true;
  @ViewChild(ItemFilterComponent) itemFilter;



  constructor(private itemService: ItemService) {
    this.items = this.itemService.getItemsList()
  }

  ngOnInit() {
    this.items.subscribe(x => {
      this.showSpinner = false
    })

  }

  deleteItems() {
    this.itemService.deleteAll()
  }



}
