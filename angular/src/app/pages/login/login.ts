import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})


export class Login {
   constructor(private router: Router) {};
   
  email:string='';
  password:string='';
  rememberme:boolean=false;
  
    

  loginuser(){
    console.log(this.email);
    console.log(this.password);
    console.log(this.rememberme);    
    
  { if(this.email==='' || this.password===''){
     alert("fills are required");
     }
     if(this.email==='suny@test.com'&& this.password ==='12345')  {  
      alert("login successful") 
    this.router.navigate(['/dashboard'])
}
  
    else{
        alert("invalid details")
      }  }
}
}