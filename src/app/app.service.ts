import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  submitForm(Name:string,Email:string,Message:string){
   let  data =  {
      name:Name,
      email:Email,
      message:Message
    }
    console.log(data);
  }
  constructor() { }
}
