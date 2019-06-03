import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Observable<object>;

  constructor(private productService: ProductService) {
    this.products = this.productService.fetchProduct();
  }


  ngOnInit() {

  }

}
