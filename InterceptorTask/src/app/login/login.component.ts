import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public http : HttpClient , private formBuilder: FormBuilder) { }

  title = 'InterceptorTask';
  myid: any;
  myform!: FormGroup;
  submitted = false;

  ngOnInit() {
    this.myform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });

    this.getUserList();
  }

  display() {
    console.log(localStorage.getItem('mytoken'));
  }

  onSubmit() {
    let data = 	this.myform.value;
    this.http.post('https://reqres.in/api/login', data).subscribe( (response:any) => {
      console.log('res', response)
      if(response && response.token){
        localStorage.setItem('mytoken', response.token);
      }
    },
    error => {
      console.log('err',error)
    })

  }

  getUserList(){

    this.http.get('https://reqres.in/api/users?page=2').subscribe( (response:any) => {
      console.log('getUserListres', response)
      
    },
    error => {
      console.log('getUserLister',error)
    })

  }

  get f() { return this.myform.controls; }

  validate(){
    console.log(this.myform.value);

    this.submitted = true;

      // stops here if the form is invalid
      if (this.myform.invalid) {
          return;
      }
  }

}
