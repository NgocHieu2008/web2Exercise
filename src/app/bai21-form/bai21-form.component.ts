import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Teacher } from './teacher';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-bai21-form',
  templateUrl: './bai21-form.component.html',
  styleUrls: ['./bai21-form.component.css']
})
export class Bai21FormComponent {
  teacherModel = new Teacher('','');

  constructor(private localStorage: LocalService) { }

  onSubmit() {
    this.localStorage.saveData('teacher', JSON.stringify(this.teacherModel));
  }
}
