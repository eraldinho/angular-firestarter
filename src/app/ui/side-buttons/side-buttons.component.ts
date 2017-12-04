import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'side-buttons',
  templateUrl: './side-buttons.component.html',
  styleUrls: ['./side-buttons.component.scss']
})
export class SideButtonsComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  addTask() {
    document.getElementById('itemFormModal').classList.add('is-active');
  }

}
