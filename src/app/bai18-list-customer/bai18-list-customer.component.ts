import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-bai18-list-customer',
  templateUrl: './bai18-list-customer.component.html',
  styleUrls: ['./bai18-list-customer.component.css']
})
export class Bai18ListCustomerComponent {

  customers: any

  constructor(_service: CustomerService){
    _service.getCustomers().subscribe(
      (data) => {this.customers = data}
    )
  }
}
