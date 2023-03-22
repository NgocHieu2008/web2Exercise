import { Component } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';

@Component({
  selector: 'app-bai32-bitcoin',
  templateUrl: './bai32-bitcoin.component.html',
  styleUrls: ['./bai32-bitcoin.component.css']
})
export class Bai32BitcoinComponent {
  data:any
  errMessage:string=''
  constructor(_service:BitcoinService){
    _service.getBitcoinData().subscribe({
      next:(data)=>{this.data=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
