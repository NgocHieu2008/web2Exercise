import { Component } from '@angular/core';

@Component({
  selector: 'app-bai17-customer',
  templateUrl: './bai17-customer.component.html',
  styleUrls: ['./bai17-customer.component.css']
})
export class Bai17CustomerComponent {
  customer = {
    "Id":"Cus123",
    "Name":"Obama",
    "Email":"obama@gmail.com",
    "Age":67,
    "Image":"assets/obama.png"
  }
}
