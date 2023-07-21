import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  carouselItems = [
    {
      imageSrc: 'assets/img/enaq.png',
      name: 'Energy Nuclear And Analysis of Quebec',
      role: 'E|N|A|Q',
      description: 'partners.p1.description',
    },
    {
      imageSrc: 'assets/img/ieg.png',
      name: 'Ingenium Energy Group',
      role: 'IEG',
      description: 'partners.p2.description',
    },
    {
      imageSrc: 'assets/img/flow.jpeg',
      name: 'Technical Solutions for Energy and Fluids',
      role: 'TenerFlow',
      description: 'partners.p3.description',
    }
  ];

  currentSlide = 0;

  isItemVisible(index: number): boolean {
    const lastIndex = this.currentSlide + 2;
    return index >= this.currentSlide && index <= lastIndex % this.carouselItems.length;
  }

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

