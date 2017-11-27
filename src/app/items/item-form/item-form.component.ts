import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../shared/item';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  item: Item = new Item();

  constructor(private itemSvc: ItemService) { }

  ngOnInit() {
  }

  onSave() {
    document.getElementById('itemFormModal').classList.remove('is-active');
  }

  onCancel() {
    document.getElementById('itemFormModal').classList.remove('is-active');
  }

  createItem() {
    this.item.timeStamp = new Date().getTime();
    this.itemSvc.createItem(this.item)
    this.item = new Item() // reset item
  }

}
