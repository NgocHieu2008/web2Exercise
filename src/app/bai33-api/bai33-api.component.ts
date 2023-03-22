import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bai33-api',
  templateUrl: './bai33-api.component.html',
  styleUrls: ['./bai33-api.component.css']
})
export class Bai33ApiComponent {
  data:any
  errMessage:string=''
  constructor(_service:ApiService){
    _service.getApiData().subscribe({
      next:(data)=>{this.data=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
