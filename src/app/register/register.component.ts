import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupform;
  constructor(private fb : FormBuilder, private userservice: UserService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.signupform = this.fb.group({
      name : ['', Validators.required],
      username : ['', Validators.required],
      email : ['', Validators.required],
      address : ['', Validators.required],
      password : ['', Validators.required]
    })
  }


  submitForm(formdata){
    console.log(formdata);

    if(this.signupform.invalid){
      Swal.fire({
        icon : 'error',
        title : 'Invalid Form'
      })
      return;
    }

    this.userservice.addUser(formdata).subscribe( (data) => {
      console.log(data);
      Swal.fire({
        icon : 'success',
        title : 'Registered Successfully',
        text : 'now you can login to continue'
      }).then(() => {
        this.router.navigate(['/login']);
      })
    })
  }

  fetchUsers(){
    
  }

  getControl(name){
    return this.signupform.controls[name];
  }

}
