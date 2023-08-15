import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [
    BookComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MeetingModule { }
