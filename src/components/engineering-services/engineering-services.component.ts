import { Component } from '@angular/core';
import { LanguageService } from 'src/services/language.service';

@Component({
  selector: 'app-engineering-services',
  templateUrl: './engineering-services.component.html',
  styleUrls: ['./engineering-services.component.css']
})
export class EngineeringServicesComponent {
  currentlanguage : any ;
  constructor(private languageservice : LanguageService){}
  ngOnInit() {
    this.currentlanguage = this.languageservice.getlanguage();
  }
  getlanguage():any{
    const string =  this.languageservice.getlanguage();
    return string;
  }
}
