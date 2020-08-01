import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactform;
  constructor(private fb: FormBuilder, private contactservice: ContactService) { }

  ngOnInit(): void {

    this.initform();
  }

  initform(){
    this.contactform = this.fb.group({
      name : '',
      email : '',
      mobile : '',
      query: ''
    })
  }

  submitForm(formdata){
    console.log(formdata);

    this.contactservice.addContact(formdata).subscribe( (response) => {
      console.log(response);
    })
  }

}
