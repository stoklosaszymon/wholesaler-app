import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjaxService } from './ajax.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    AjaxService
  ]
})
export class CoreModule { }
