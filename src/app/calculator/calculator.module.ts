import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { HomeComponent } from './home/home.component';
import { LoancalComponent } from './loancal/loancal.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoancalComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    ReactiveFormsModule
  ]
})
export class CalculatorModule { }
