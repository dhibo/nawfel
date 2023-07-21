import { LanguageService } from 'src/services/language.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControlName ,Validators ,  FormGroup , FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactform!: FormGroup;
  submitted : any 
  constructor(private fb: FormBuilder, private http: HttpClient,private LanguageService : LanguageService) {}

  ngOnInit() {
    this.contactform = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
      subject: ['', Validators.required]
    });
  }

  submitForm() {
    const data = new FormData()
    
    data.append("name",this.contactform.get('name')!.value)
    data.append("email",this.contactform.get('email')!.value)
    data.append("message",this.contactform.get('message')!.value)
    data.append("subject",this.contactform.get('subject')!.value)
    
    console.log(data);
    this.LanguageService.form(data).subscribe(response => {
      console.log(response);
    
      if (response.success) {
        // Email sent successfully, redirect to home page
        window.location.href = '/home';
      } else {
        // Email sending failed, refresh the current page
        window.location.reload();
      }
    });
    
  }

}
