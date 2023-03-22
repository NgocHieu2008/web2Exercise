import { Component } from '@angular/core';
import { DongABankService } from '../dong-abank.service';

@Component({
  selector: 'app-bai29-dong-abank',
  templateUrl: './bai29-dong-abank.component.html',
  styleUrls: ['./bai29-dong-abank.component.css']
})
export class Bai29DongABankComponent {
  data: any
  errMessage: string=''
  constructor(_service:DongABankService){
    _service.getDongABankData().subscribe({
      next:(data)=>{
        this.data=data
      },
      error:(err)=>{
        this.errMessage=err
      }
    })
  }
}
