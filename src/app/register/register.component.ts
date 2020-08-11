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

  avatarName;
  imgURL;

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

  uploadImage(event)
  {
    let files = event.target.files;
    if(files.length===0)
      return;

    var mimeType=files[0].type;
    if(mimeType.match(/image\/*/)==null)
    { 
      Swal.fire("Images Only");
      return;
    }
    this.preview(event.target.files)
    let formData=new FormData();
    let selectedFile=files[0];
    this.avatarName=selectedFile.name;
    console.log(this.avatarName);
    formData.append('image', selectedFile, selectedFile.name);
    this.userservice.uploadImage(formData).subscribe(response=>
      {
      console.log(response.message)
      })
  }

  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      Swal.fire({
        title : 'Only Images are supported!!'
      })
      return;
    }
 
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => { 
      this.imgURL = reader.result;
    }
  }

}
