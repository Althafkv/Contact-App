import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ContactSchema } from 'src/models/contactSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = 'https://contact-app-plaw.onrender.com'
  constructor(private http:HttpClient) { }

  // handle errors
  // handleError(error:HttpErrorResponse){
  //   let errormsg:string = ''
  //   if(error.error){
  //     // client error
  //     errormsg = `Error: ${error.message}`
  //   }else{
  //     errormsg = `Status: ${error.status} \n  Error: ${error.message}`
  //   }
  //   return throwError(()=>errormsg)
  // }


  // get all contacts api
  getAllContacts(){
    // api call : url = http://localhost:3000/contacts req: get
    return this.http.get(`${this.BASE_URL}/contacts`)
  }

  // view a contact
  viewContact(id:any){
    // api call : url = http://localhost:3000/contacts/id req: get
    return this.http.get(`${this.BASE_URL}/contacts/${id}`)
  }

  // get a perticular group
  getGroup(id:any){
    // api call : url = http://localhost:3000/groups/id req: get
    return this.http.get(`${this.BASE_URL}/groups/${id}`)
  }

  // get all groups
  getGroups(){
    // api call - http://localhost:3000/groups
    return this.http.get(`${this.BASE_URL}/groups`)
  }

  // to add contact
  addContact(contact:ContactSchema){
    // api call
    return this.http.post(`${this.BASE_URL}/contacts`,contact)
  }

  // to delete contact
  deleteContact(id:any){
    // api call server
    return this.http.delete(`${this.BASE_URL}/contacts/${id}`)
  }

  // edit a contact
  editContact(id:any,contact:ContactSchema){
    // api call
    return this.http.put(`${this.BASE_URL}/contacts/${id}`,contact)
  }

  
}
