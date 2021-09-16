import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AjaxService } from '../core/ajax.service';
import { ProductDto, ProductRequestDto } from './dtos';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private refreshProducts = new Subject<boolean>();
  refreshProducts$ = this.refreshProducts.asObservable();
  
  constructor(private ajaxService: AjaxService) { }

  getProductList(): Observable<ProductDto[]> {
    return this.ajaxService.doGet('products');
  }

  addProduct(product: ProductRequestDto): Observable<any> {
    return this.ajaxService.doPost('products', product);
  }

  deleteProduct(productId: string): Observable<any> {
    return this.ajaxService.doDelete(`products?productId=${productId}`);
  }

  emitRefreshProducts(): void {
    this.refreshProducts.next(true);
  }

}
