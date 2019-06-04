import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }

  fetchProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('/assets/data/data.json');

  }


}


