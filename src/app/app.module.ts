import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bai21FormComponent } from './bai21-form/bai21-form.component';
import { HomeComponent } from './home/home.component';
import { Bai15ProductHttpComponent } from './bai15-product-http/bai15-product-http.component';
import { Bai16ProductHttpErrorComponent } from './bai16-product-http-error/bai16-product-http-error.component';
import { Bai17CustomerComponent } from './bai17-customer/bai17-customer.component';
import { Bai18ListCustomerComponent } from './bai18-list-customer/bai18-list-customer.component';
import { Bai22RegisterFormComponent } from './bai22-register-form/bai22-register-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Bai23MathComponent } from './bai23-math/bai23-math.component';

@NgModule({
  declarations: [
    AppComponent,
    Bai21FormComponent,
    HomeComponent,
    Bai15ProductHttpComponent,
    Bai16ProductHttpErrorComponent,
    Bai17CustomerComponent,
    Bai18ListCustomerComponent,
    Bai22RegisterFormComponent,
    Bai23MathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
