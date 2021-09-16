import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersService } from './suppliers.service';
import { SuppliersSelectComponent } from './suppliers-select/suppliers-select.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    SuppliersSelectComponent
  ],
  providers: [
    SuppliersService
  ],
  declarations: [SuppliersSelectComponent]
})
export class SuppliersModule { }
