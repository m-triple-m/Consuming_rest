import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-admin-dasboard',
  templateUrl: './admin-dasboard.component.html',
  styleUrls: ['./admin-dasboard.component.css']
})
export class AdminDasboardComponent implements OnInit {

  contact_data;
  currentUser;

  constructor(private contactservice: ContactService) { }

  ngOnInit(): void {

    this.currentUser = JSON.parse(sessionStorage.getItem('user'));

    this.contactservice.fetchQueries().subscribe((data) => {
      console.log(data);
      this.contact_data = data;
    })
  }

  

}
