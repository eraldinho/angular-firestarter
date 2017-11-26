import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SharedModule } from '../../shared/shared.module';

import { ItemService } from './item.service';
import { ItemsListComponent } from '../items-list/items-list.component';
import { ItemFormComponent } from '../item-form/item-form.component';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { TaskListPipe } from '../../task-list.pipe';
import {ItemFilterComponent} from '../item-filter/item-filter.component';
import { ItemFilterPipePipe } from './item-filter-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule
  ],
  declarations: [
    ItemsListComponent,
    ItemFormComponent,
    ItemDetailComponent,
    ItemFilterComponent,
    TaskListPipe,
    ItemFilterPipePipe,
  ],
  providers: [
    ItemService
  ]
})
export class ItemModule { }
