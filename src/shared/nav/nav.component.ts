import { LanguageService } from './../../services/language.service';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isSubmenuVisible: boolean = false;
  currentLanguage: string = 'en';
  isFrench: boolean = false;
  
  constructor(private router:Router , private LanguageService : LanguageService,private translateService : TranslateService) {
    translateService.addLangs(['en', 'fr']);
    translateService.setDefaultLang('en');
    if ( this.currentLanguage === 'fr') {
      this.isFrench = true;
    }

   }
  @ViewChild('stickyNav') stickyNav!: ElementRef;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = this.stickyNav.nativeElement;
    if (window.pageYOffset > 300) {
      element.classList.add('shadow-sm');
      element.style.top = '0px';
    } else {
      element.classList.remove('shadow-sm');
      element.style.top = '-100px';
    }
  }
  toggleSubmenu() {
    this.isSubmenuVisible = !this.isSubmenuVisible;
  }
  
switchLanguage(event: any) {
  const language = event.target.value;
  if (language === 'French') {
    this.currentLanguage = 'fr';
  } else {
    this.currentLanguage = 'en';
  }
  this.LanguageService.setlanguage(this.currentLanguage)
  console.log(this.currentLanguage);
  this.translateService.use(this.currentLanguage);
}
  
}
