import { Component } from '@angular/core';

@Component({
  selector: 'app-loancal',
  templateUrl: './loancal.component.html',
  styleUrls: ['./loancal.component.css']
})
export class LoancalComponent {
  constructor() { }
  public p:number = 30000;
  public r:number = 10.25;
  public n:number = 12;
  public EMI:number = 0;

public totalinterest:number = 0;
public totalpayment:number = 0;
public interestPercentage: number = 0;


  public amoutchange(e:any){
    this.p = e.target.value;
  }
  public monthchange(e:any){
    this.n = e.target.value;
  }
  public ratechange(e:any){
    this.r = e.target.value;
  }
  public calculate(){

    const monthlyInterestRate = this.r / 1200;
    const numerator = this.p * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, this.n);
    const denominator = Math.pow(1 + monthlyInterestRate, this.n) - 1;
   
    this.EMI = numerator / denominator;
    this.totalinterest = (this.EMI * this.n) - this.p;
    this.totalpayment = this.EMI * this.n;
    this.interestPercentage = (this.totalinterest / this.p) * 100;
  }

  
tableObj:any= [];

tableData(){
 let m =0;
 var total = this.p;
 let endbelence = this.p;

  for(let i=0;i<this.n;i++){
  
     let arr;
     let int = this.r/1200;
     const emp =this.EMI;

     let interestrate = this.r/12;
     const interestEMI = Math.round(endbelence * int);
     const principle = this.EMI - interestEMI;
  
     endbelence = endbelence - principle;
     m++;
     arr = {index:m, bb: total , emi:emp ,pri: principle, interest:interestEMI, end:endbelence }
     this.tableObj.push(arr)
     total = endbelence;
  }
}
}



