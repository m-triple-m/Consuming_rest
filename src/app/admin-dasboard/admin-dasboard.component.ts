import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-admin-dasboard',
  templateUrl: './admin-dasboard.component.html',
  styleUrls: ['./admin-dasboard.component.css']
})
export class AdminDasboardComponent implements OnInit {

  constructor(private contactservice: ContactService) { }

  ngOnInit(): void {
    this.contactservice.fetchQueries().subscribe((data) => {
      console.log(data);
    })
  }

}
