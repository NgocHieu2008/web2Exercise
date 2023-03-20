import { Component } from '@angular/core';
import { ProductHttpService } from '../product-http.service';

@Component({
  selector: 'app-bai15-product-http',
  templateUrl: './bai15-product-http.component.html',
  styleUrls: ['./bai15-product-http.component.css']
})
export class Bai15ProductHttpComponent {
  products: any;
  constructor(private _service: ProductHttpService) {
    this._service.getProducts().subscribe(data => this.products = data);
   }
}
