import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bai22-register-form',
  templateUrl: './bai22-register-form.component.html',
  styleUrls: ['./bai22-register-form.component.css']
})
export class Bai22RegisterFormComponent {
  constructor(private _formBuilder: FormBuilder){}
  public regForm = this._formBuilder.group(
    {
      name: ['Nam Anh', [Validators.required]],
      email: ['test@gmail.com', [Validators.required]],
      phone: ['0909090909', [Validators.required]],
      course: ['Ruby'],
      class: [],
      agree: true
    }
  )
}
