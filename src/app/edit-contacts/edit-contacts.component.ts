import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ContactSchema } from 'src/models/contactSchema';

@Component({
  selector: 'app-edit-contacts',
  templateUrl: './edit-contacts.component.html',
  styleUrls: ['./edit-contacts.component.css']
})
export class EditContactsComponent implements OnInit {

  contact:ContactSchema={}
  groups:any = []

  constructor(private editActivatedRoute:ActivatedRoute,private api:ApiService,private editRouter:Router){

  }
  ngOnInit(): void {
    this.editActivatedRoute.params.subscribe({
      next:(pathParameter:any)=>{
        const {id} = pathParameter
        console.log(id);
        // call view contact api
        this.api.viewContact(id).subscribe({
          next:(response:any)=>{
            console.log(response);
            this.contact = response
          }
        })
      }
    })
    
    // get groups
    this.api.getGroups().subscribe({
      next:(allGroups:any)=>{
        console.log(allGroups);
        this.groups = allGroups
      }
    })
  }

  // edit contact
  editContact(id:any){
    // api call to edit contact
    this.api.editContact(id,this.contact).subscribe({
      next:(response:any)=>{
        // navigate to all contacts
        this.editRouter.navigateByUrl("")

      }
    })
  }

}
