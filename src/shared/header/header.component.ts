import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/services/language.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  home:any
  home2:any
  home3 : any 
constructor(private translate : TranslateService , private languageservice : LanguageService , private locationStrategy:LocationStrategy) { }
async ngOnInit() {
  const path = this.locationStrategy.path();
  const pathSegments = path.split('/');
  
  this.home = pathSegments[1].replace(/([A-Z])/g, ' $1');
  this.home2 = pathSegments[2].replace(/([A-Z])/g, ' $1');
  this.home3 = pathSegments[3].replace(/([A-Z])/g, ' $1');
  const currentlanguage = this.languageservice.getlanguage()
  console.log('current language ' , currentlanguage);
  if (currentlanguage === 'fr') {
    this.translate.get(this.home).subscribe((translations) => {
      this.home = translations[this.home];
     
      console.log(this.home);
    });
  }
}
}
