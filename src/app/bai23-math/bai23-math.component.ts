import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bai23-math',
  templateUrl: './bai23-math.component.html',
  styleUrls: ['./bai23-math.component.css']
})
export class Bai23MathComponent {
  constructor(private _formBuilder: FormBuilder) {}

  public mathForm = this._formBuilder.group(
    {
      a: 0,
      b: 0,
      c: 0,
      result: 0
    }
  )

  public max() {

  }


}
