import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgwWowService } from 'ngx-wow';
import { LanguageService } from 'src/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public currentLanguage: any 
  user : boolean = false;
 
  title = 'ingenious';
  constructor(private languageservice : LanguageService,public translateService : TranslateService ,private wowService: NgwWowService , private router : Router) {
    this.wowService.init();
    translateService.addLangs(['en', 'fr']);
    this.currentLanguage = this.languageservice.getlanguage()
    if (this.currentLanguage == null) {
      this.currentLanguage = 'en';
    }
    translateService.setDefaultLang('en');
    this.languageservice.setlanguage(this.currentLanguage);
  }
 
  
  ngOnInit() {
    if (this.router.url === '/admin') {
      this.user = true;
    }
  }

  switchLanguage(event: any) {
    const language = event.target.value;
    if (language === 'French') {
      this.currentLanguage = 'fr';
      this.languageservice.setlanguage(this.currentLanguage);

    } else {
      this.currentLanguage = 'en';
      this.languageservice.setlanguage(this.currentLanguage);

    }
    console.log(this.currentLanguage);
    this.translateService.use(this.currentLanguage);
  }

}


