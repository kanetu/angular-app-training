import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked, AfterViewInit  } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, AfterViewInit {

  @Input() item: number;
  @Input() data: Product[];
  @Input() currentPage: number;

  @Output() public ItemsShow = new EventEmitter();

  // Count of page in pagination
  page: number;
  // Temp data void to change value of data, this variable will be return
  tempData: any;

  numbers: [] = [];


  constructor(private productService: ProductService) {
    this.currentPage = 0;
    this.tempData = this.data = [];

  }



  ngOnInit() {

    this.generatePagination();
  }

  ngAfterViewInit() {

  }

  generatePagination(): void {
    this.page = Math.round(this.data.length / this.item) - 1;
    this.tempData = this.data.slice(0, this.item);

    for ( let i = 0; i <= this.page; i++) {
      this.numbers.push(i);
    }

  }

  nextStep(currentStep: number): void {
    (this.currentPage >= this.page) ? this.currentPage : ++this.currentPage;
    this.tempData = this.data.slice(this.currentPage * this.item, this.item + this.currentPage * this.item);
  }

  prevStep(currentStep: number): void {
    (this.currentPage <= 0) ? this.currentPage : --this.currentPage;
    this.tempData = this.data.slice(this.currentPage * this.item, this.item + this.currentPage * this.item);
  }

}
