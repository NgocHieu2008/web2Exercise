import { Component } from '@angular/core';
import { FakeProductService } from '../fake-product.service';

@Component({
  selector: 'app-bai30-product-api',
  templateUrl: './bai30-product-api.component.html',
  styleUrls: ['./bai30-product-api.component.css']
})
export class Bai30ProductAPIComponent {

  data:any
  errMessage:string=''
  constructor(_service:FakeProductService){
    _service.getFakeProductData().subscribe({
      next:(data)=>{this.data=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
