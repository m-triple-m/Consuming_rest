import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder } from '@angular/forms';
import { faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  allUsers;
  editform;
  showform = false;
  delete_icon = faTrashAlt;
  update_icon = faPen;

  constructor(private fb: FormBuilder, private userservice: UserService) { }

  ngOnInit(): void {
    this.refreshUsers();
  }

  initform(formdata){
    this.editform = this.fb.group(formdata);
  }

  refreshUsers(){
    this.userservice.getAllUser().subscribe( data => {
      console.log(data);
      this.allUsers = data;
    })
  }   

  deleteUser(userid){
    console.log(userid);
    this.userservice.deleteUser(userid).subscribe(data => {
      console.log(data);
      this.refreshUsers();
    })
  }


  updateForm(formdata){
    this.userservice.updateUser(formdata._id, formdata).subscribe(data => {
      console.log(data);
    })
  }

  toggleForm(user){
    this.initform(user);
    this.showform = true;
  }

}
