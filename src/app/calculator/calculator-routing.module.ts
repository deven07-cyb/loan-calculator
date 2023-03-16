import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoancalComponent } from './loancal/loancal.component';
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"loan-calculator",component:LoancalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
