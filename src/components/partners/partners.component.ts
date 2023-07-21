import { Component,  } from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class PartnersComponent {
  carouselItems = [
    {
      imageSrc: 'assets/img/enaq.png',
      name: 'Energy Nuclear And Analysis of Quebec',
      role: 'E|N|A|Q',
      description:'partners.p1.description',
      
    },
    {
      imageSrc: 'assets/img/ieg.png',
      name: 'Ingenium Energy Group',
      role: 'IEG',
      description: 'partners.p2.description',
    },
    {
      imageSrc: 'assets/img/flow.jpeg',
      name: ' Technical Solutions for Energy and Fluids',
      role: 'TenerFlow',
      description: 'partners.p3.description',
      
    }
  ];
  


  currentSlide = 0;

  
onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.carouselItems.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.carouselItems.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }
}