import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public http : HttpClient) { }

  title = 'InterceptorTask';
  myid: any;
  myform: any;

  ngOnInit() {
    this.myform = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });

    this.getUserList();
  }

  display() {
    console.log(localStorage.getItem('mytoken'));
  }

  onSubmit() {
    let data = 	{
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
  }
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
      console.log('getUserListerr',error)
    })

  }

}
