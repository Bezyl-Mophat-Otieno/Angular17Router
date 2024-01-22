import { Component, inject } from '@angular/core';
import { FormGroup , FormControl , ReactiveFormsModule } from '@angular/forms';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  service = inject(AppService);

  contactForm = new FormGroup({
    name: new FormControl('Enter your name'),
    email: new FormControl('Enter your email'),
    message: new FormControl('Enter your message')
  })

  
  submitForm(){
      this.service.submitForm(
      this.contactForm.value.name ??"",
      this.contactForm.value.email ??"",
      this.contactForm.value.message ??""
       )
       }

}
