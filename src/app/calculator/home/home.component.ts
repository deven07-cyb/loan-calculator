import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FrontService } from 'src/app/services/front.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public signupForm !: FormGroup;
  submitted =false;
  constructor(private front:FrontService, private formBuider : FormBuilder, private http : HttpClient, private router:Router) { }
  ngOnInit(): void {
    this.signupForm = this.formBuider.group({

      name:['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
      description:['',[Validators.required,Validators.minLength(4),Validators.maxLength(100)]],   
    })
  }
  signUp(data:object){
        this.front.usersignup(data).subscribe(()=>{

        });
        this.submitted = true
        if(this.signupForm.invalid){
              return
        }
        
         this.http.post<any>("http://localhost:3000/userlogin",this.signupForm.value)
    .subscribe(res=>{
      alert("Signup Successfull");
       this.signupForm.reset();

},err=>{
  alert("Something went wrong")
})
}

}
