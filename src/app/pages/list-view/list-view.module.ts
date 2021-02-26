import { TodoItemDetailComponent } from './../../shared/todo-item-detail/todo-item-detail.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListViewPageRoutingModule } from './list-view-routing.module';

import { ListViewPage } from './list-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListViewPageRoutingModule,
  ],
  declarations: [ListViewPage,TodoItemDetailComponent]
})
export class ListViewPageModule {}
