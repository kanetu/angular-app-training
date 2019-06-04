import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Observable<Product[]>;
  drawProducts: Product[];
  constructor(private productService: ProductService) {

  }


  ngOnInit() {
   this.productService.fetchProduct().subscribe(data => {
     this.drawProducts = data;
   });
  }

  public showItemInPage(data: any) {
     this.products = data as Observable<Product[]>;
  }

}
