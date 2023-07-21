import { Component } from '@angular/core';

@Component({
  selector: 'app-consulting-components',
  templateUrl: './consulting-components.component.html',
  styleUrls: ['./consulting-components.component.css']
})
export class ConsultingComponentsComponent {

  carouselItems4 = [
    { imageSrc: './assets/img/cons51.jpg' },
    { imageSrc: './assets/img/cons52.jpg' },
    { imageSrc: './assets/img/cons53.jpg' },
    { imageSrc: './assets/img/somocer.jpg' }
  ];

  currentSlide4 = 0;

  onPreviousClick4() {
    this.currentSlide4 = (this.currentSlide4 === 0) ? this.carouselItems4.length - 1 : this.currentSlide4 - 1;
  }

  onNextClick4() {
    this.currentSlide4 = (this.currentSlide4 === this.carouselItems4.length - 1) ? 0 : this.currentSlide4 + 1;
  }

  carouselItems3 = [
    { imageSrc: './assets/img/cons31.jpg' },
    { imageSrc: './assets/img/cons32.jpg' },
    { imageSrc: './assets/img/cons33.jpg' },
    { imageSrc: './assets/img/cons34.jpg' },
    { imageSrc: './assets/img/cons35.jpg' },
    { imageSrc: './assets/img/cons36.jpg' },
    { imageSrc: './assets/img/cons37.jpg' },
    { imageSrc: './assets/img/cons3.jpg' }
  ];

  currentSlide3 = 0;

  onPreviousClick3() {
    this.currentSlide3 = (this.currentSlide3 === 0) ? this.carouselItems3.length - 1 : this.currentSlide3 - 1;
  }

  onNextClick3() {
    this.currentSlide3 = (this.currentSlide3 === this.carouselItems3.length - 1) ? 0 : this.currentSlide3 + 1;
  }
  carouselItems2 = [
    { imageSrc: './assets/img/cons21.jpg' },
    { imageSrc: './assets/img/cons22.jpg' },
    { imageSrc: './assets/img/cons23.jpg' },
    { imageSrc: './assets/img/cons24.jpg' },
    { imageSrc: './assets/img/cons2.jpg' }
  ];

  currentSlide2 = 0;

  onPreviousClick2() {
    this.currentSlide2 = (this.currentSlide2 === 0) ? this.carouselItems2.length - 1 : this.currentSlide2 - 1;
  }

  onNextClick2() {
    this.currentSlide2 = (this.currentSlide2 === this.carouselItems2.length - 1) ? 0 : this.currentSlide2 + 1;
  }
  carouselItems = [
    { imageSrc: './assets/img/cons11.jpg' },
    { imageSrc: './assets/img/cons12.jpg' },
    { imageSrc: './assets/img/cons13.jpg' },
    { imageSrc: './assets/img/cons14.jpg' },
    { imageSrc: './assets/img/cons1.jpg' }
  ];

  currentSlide = 0;

  onPreviousClick() {
    this.currentSlide = (this.currentSlide === 0) ? this.carouselItems.length - 1 : this.currentSlide - 1;
  }

  onNextClick() {
    this.currentSlide = (this.currentSlide === this.carouselItems.length - 1) ? 0 : this.currentSlide + 1;
  }
}

