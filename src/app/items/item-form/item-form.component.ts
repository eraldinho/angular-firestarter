import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from '../shared/item';
import { ItemService } from '../shared/item.service';
import { DatePicker} from 'bulma-calendar/datepicker'

@Component({
  selector: 'item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  item: Item = new Item();
  datePicker = new DatePicker( document.getElementById( 'datepicker' ), {} );
  allItemForm: FormGroup;

  constructor(private itemSvc: ItemService) { }

  ngOnInit() {
    this.allItemForm = new FormGroup({
      'echeance': new FormControl()
      /*'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])*/
    });
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
