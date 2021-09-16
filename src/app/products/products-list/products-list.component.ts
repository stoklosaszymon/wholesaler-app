import { Component, OnInit } from '@angular/core';
import { ProductDto } from '../dtos';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  productList: ProductDto[] = [];
  constructor(private producsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.listenOnRefreshDatabases();
  }

  getProducts(): void {
    this.producsService.getProductList()
    .subscribe(d =>
      this.productList = d
    );
  }

  deleteProduct(productId: string): void {
    this.producsService.deleteProduct(productId)
      .subscribe( d => {
        this.getProducts();
      });
  }

  private listenOnRefreshDatabases(): void {
    this.producsService.refreshProducts$
      .subscribe((isRefreshed: boolean) => {
        if (isRefreshed){
          this.getProducts();
        }
      });
  }

}
