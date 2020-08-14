import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform;
  constructor(private fb: FormBuilder, private userservice: UserService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginform = this.fb.group({
      username : '',
      password : ''
    })
  }

  submitForm(formdata){
    console.log(formdata);

    this.userservice.getUserByUsername(formdata.username).subscribe(data => {
        console.log(data);

        if(data){
          if(data['password'] == formdata['password']){


            sessionStorage.setItem('user', JSON.stringify(data));

            console.log('login success');
            Swal.fire({
              icon : 'success',
              title : 'Login Success',
              text : 'Logged in Successfully'
            }).then( () => {
              this.router.navigate(['/admin']);
            } )
          }
          else{
            console.log('password incorrect');
            Swal.fire({
              icon : 'error',
              title : 'Error',
              text : 'Username or Password is Incorrect'
            })
          }
        }
        else{
          console.log('user not found');
          Swal.fire({
            icon : 'error',
            title : 'Error',
            text : 'Username or Password is Incorrect'
          })
        }
    })
  }

}
