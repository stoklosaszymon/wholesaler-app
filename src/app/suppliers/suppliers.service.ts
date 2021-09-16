import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AjaxService } from '../core/ajax.service';
import { SupplierDto } from './dtos';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(private ajaxService: AjaxService) { }

  getSuppliers(): Observable<SupplierDto[]> {
    return this.ajaxService.doGet('suppliers');
  }

}
