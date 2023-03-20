import { Component } from '@angular/core';
import { ProductHttpService } from '../product-http.service';

@Component({
  selector: 'app-bai16-product-http-error',
  templateUrl: './bai16-product-http-error.component.html',
  styleUrls: ['./bai16-product-http-error.component.css']
})
export class Bai16ProductHttpErrorComponent {
  products: any;
  errorMessage: string="";
  constructor(private _service: ProductHttpService) {
    this._service.getProductsHandleError().subscribe(
      {
        next: (data) => {this.products = data},
        error: (err) => {this.errorMessage = err}
      }
    );
   }
}
