import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../shared/material.module";
import { SuppliersModule } from '../suppliers/suppliers.module';
import { ProductFormComponent } from "./product-form/product-form.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductsService } from "./products.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        SuppliersModule
    ],
    declarations: [
       ProductsListComponent,
       ProductFormComponent
    ],
    exports: [
       ProductsListComponent,
       ProductFormComponent
    ],
    providers: [
       ProductsService
    ]
})
export class ProductsModule {}