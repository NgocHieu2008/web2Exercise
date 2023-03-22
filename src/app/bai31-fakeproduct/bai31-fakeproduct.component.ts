import { Component } from '@angular/core';
import { FakeProductService } from '../fake-product.service';

@Component({
  selector: 'app-bai31-fakeproduct',
  templateUrl: './bai31-fakeproduct.component.html',
  styleUrls: ['./bai31-fakeproduct.component.css']
})
export class Bai31FakeproductComponent {
  data:any
  errMessage:string=''
  constructor(_service: FakeProductService){
    _service.getFakeProductData().subscribe({
      next:(data)=>{this.data=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
