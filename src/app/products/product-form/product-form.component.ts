import { Component, OnInit } from '@angular/core';
import { ProductRequestDto } from '../dtos';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  newProductRequest = {} as ProductRequestDto;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
  }

  submitForm() {
    this.productService.addProduct(this.newProductRequest)
    .subscribe( d => {
      this.productService.emitRefreshProducts();
    })
  }

}
