import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from '../shared/item';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  item: Item = new Item();
  allItemForm: FormGroup;
  descriptionSelected = true;
  contactSelected = false;
  materielSelected = false;
  interventionSelected = false;
  commandesSelected = false;


  constructor(private itemSvc: ItemService) { }

  ngOnInit() {
    this.allItemForm = new FormGroup({
      'titre': new FormControl(),
      'echeance': new FormControl(),
      'document': new FormControl(),
      'sav': new FormGroup({
        'contact': new FormGroup({
          'nom': new FormControl(),
          'email': new FormControl(),
          'telephone': new FormControl()
        }),
        'materiel': new FormGroup({
          'type': new FormControl(),
          'panne': new FormControl(),
          'motdepasse': new FormControl(),
        }),
        'intervention': new FormGroup({
          'prestations': new FormArray([]),
        }),
      }),
    });
  }

  onSave() {
    document.getElementById('itemFormModal').classList.remove('is-active');
  }

  onCancel() {
    document.getElementById('itemFormModal').classList.remove('is-active');
  }

  onAddPrestation() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.allItemForm.get('sav.intervention.prestations')).push(control);
  }

  createItem() {
    this.item.timeStamp = new Date().getTime();
    this.itemSvc.createItem(this.item)
    this.item = new Item() // reset item
  }

}
