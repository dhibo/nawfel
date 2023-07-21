import { Component } from '@angular/core';

@Component({
  selector: 'app-heat-component',
  templateUrl: './heat-component.component.html',
  styleUrls: ['./heat-component.component.css']
})
export class HeatComponentComponent {


  carouselItems = [
    { name: 'Item 1', imageSrc: './assets/img/p11.jpg', role: 'Role 1', description: 'Description 1' },
    { name: 'Item 2', imageSrc: './assets/img/p12.jpg', role: 'Role 2', description: 'Description 2' },
    { name: 'Item 3', imageSrc: './assets/img/p13.jpg', role: 'Role 3', description: 'Description 3' },
    { name: 'Item 4', imageSrc: './assets/img/p14.jpg', role: 'Role 4', description: 'Description 4' }
  ];

  currentSlide = 0;

  onPreviousClick() {
    this.currentSlide = (this.currentSlide === 0) ? this.carouselItems.length - 1 : this.currentSlide - 1;
  }

  onNextClick() {
    this.currentSlide = (this.currentSlide === this.carouselItems.length - 1) ? 0 : this.currentSlide + 1;
  }
  carouselItems2 = [
    {
      imageSrc: './assets/img/p21.jpg',
      alt: 'Image 1'
    },
    {
      imageSrc: './assets/img/p22.jpg',
      alt: 'Image 2'
    },
    {
      imageSrc: './assets/img/p23.jpg',
      alt: 'Image 3'
    },
    {
      imageSrc: './assets/img/p24.jpg',
      alt: 'Image 4'
    }
  ];

  currentSlide2 = 0;

  onPreviousClick2() {
    this.currentSlide2 = (this.currentSlide2 === 0) ? this.carouselItems2.length - 1 : this.currentSlide2 - 1;
  }

  onNextClick2() {
    this.currentSlide2 = (this.currentSlide2 === this.carouselItems2.length - 1) ? 0 : this.currentSlide2 + 1;
  }
  carouselItems3 = [
    { imageSrc: './assets/img/p31.jpg' },
    { imageSrc: './assets/img/p32.jpg' },
    { imageSrc: './assets/img/p33.jpg' },
    { imageSrc: './assets/img/p34.jpg' },
    { imageSrc: './assets/img/p35.jpg' },
    { imageSrc: './assets/img/p36.jpg' },
    { imageSrc: './assets/img/p37.jpg' },
    { imageSrc: './assets/img/p38.jpg' }
  ];

  currentSlide3 = 0;

  onPreviousClick3() {
    this.currentSlide3 = (this.currentSlide3 === 0) ? this.carouselItems3.length - 1 : this.currentSlide - 1;
  }

  onNextClick3() {
    this.currentSlide3 = (this.currentSlide3 === this.carouselItems3.length - 1) ? 0 : this.currentSlide + 1;
  }
  carouselItems4=[
    { imageSrc: './assets/img/p41.jpg' },
    { imageSrc: './assets/img/p42.jpg' },
    { imageSrc: './assets/img/p43.jpg' }
  ];

  currentSlide4 = 0;

  onPreviousClick4() {
    this.currentSlide4 = (this.currentSlide4 === 0) ? this.carouselItems4.length - 1 : this.currentSlide4 - 1;
  }

  onNextClick4() {
    this.currentSlide4 = (this.currentSlide4 === this.carouselItems4.length - 1) ? 0 : this.currentSlide4 + 1;
  }
  carouselItems5 = [
    { imageSrc: './assets/img/p51.jpg' },
    { imageSrc: './assets/img/p52.jpg' },
    { imageSrc: './assets/img/p53.jpg' },
    { imageSrc: './assets/img/p54.jpg' },
    { imageSrc: './assets/img/p55.jpg' }
  ];

  currentSlide5 = 0;

  onPreviousClick5() {
    this.currentSlide5 = (this.currentSlide5 === 0) ? this.carouselItems5.length - 1 : this.currentSlide5 - 1;
  }

  onNextClick5() {
    this.currentSlide5 = (this.currentSlide5 === this.carouselItems5.length - 1) ? 0 : this.currentSlide5 + 1;
  }
  carouselItems6 = [
    { imageSrc: './assets/img/p61.jpg' },
    { imageSrc: './assets/img/p62.jpg' },
    { imageSrc: './assets/img/p63.jpg' },
    { imageSrc: './assets/img/p64.jpg' },
    { imageSrc: './assets/img/p65.jpg' }
  ];
  
  currentSlide6 = 0;
  
  onPreviousClick6() {
    this.currentSlide6 = (this.currentSlide6 === 0) ? this.carouselItems6.length - 1 : this.currentSlide6 - 1;
  }
  
  onNextClick6() {
    this.currentSlide6 = (this.currentSlide6 === this.carouselItems6.length - 1) ? 0 : this.currentSlide6 + 1;
  }
}
