import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SupplierDto } from '../dtos';
import { SuppliersService } from '../suppliers.service';

@Component({
  selector: 'app-suppliers-select',
  templateUrl: './suppliers-select.component.html',
  styleUrls: ['./suppliers-select.component.scss'],
})
export class SuppliersSelectComponent implements OnInit {

  supplierList: SupplierDto[] = [];

  @Input() selectedSupplier: string | undefined;
  @Output() selectedSupplierChange = new EventEmitter<string>();

  constructor(private supplierService: SuppliersService) { }

  ngOnInit(): void {
    this.getSuppliers();
  }

  getSuppliers(): void {
    this.supplierService.getSuppliers()
    .subscribe( s => {
      this.supplierList = s;
    });
  }

  onSupplierChange(): void {
    this.selectedSupplierChange.emit(this.selectedSupplier);
  }

}
