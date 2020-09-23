import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFailure: boolean = false;
  loginForm: FormGroup;
   constructor(private formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router) {    
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({       
        userName: ['', [Validators.required]],
        password: ['', [Validators.required]]
    });
  }
  onSubmit() {
    if(this.loginForm.invalid){
      return;
    }
    this.loginFailure = false;
    let values = this.loginForm.value;
    if(values['userName'] && values['userName'].toLowerCase()=="admin" && values['password'] && values['password'].toLowerCase()=="admin"){
      this.router.navigate(['/enrollees']); //, { id: heroId }
    }else{
      this.loginFailure = true;
    }
  }

}
