import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavBarComponent
  ],
  declarations: [NavBarComponent]
})
export class NavBarModule { }
