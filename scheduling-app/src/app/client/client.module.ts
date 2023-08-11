import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
