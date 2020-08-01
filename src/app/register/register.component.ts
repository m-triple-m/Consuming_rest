import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupform;
  constructor(private fb : FormBuilder, private userservice: UserService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.signupform = this.fb.group({
      name : '',
      username : '',
      email : '',
      address : ''
    })
  }


  submitForm(formdata){
    console.log(formdata);

    this.userservice.addUser(formdata).subscribe( (response) => {
      console.log(response);

    })
  }

  fetchUsers(){
    
  }

}
