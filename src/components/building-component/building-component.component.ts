import { Component } from '@angular/core';

@Component({
  selector: 'app-building-component',
  templateUrl: './building-component.component.html',
  styleUrls: ['./building-component.component.css']
})
export class BuildingComponentComponent {
  carouselItems = [
    { imageSrc: './assets/img/cons4.jpg', name: 'Item 1', role: 'Role 1', description: 'Description 1' },
    { imageSrc: './assets/img/cons41.jpg', name: 'Item 2', role: 'Role 2', description: 'Description 2' },
    { imageSrc: './assets/img/cons42.jpg', name: 'Item 3', role: 'Role 3', description: 'Description 3' },
    // Add more items as needed
  ];

  currentSlide = 0;

  onPreviousClick() {
    this.currentSlide = (this.currentSlide - 1 + this.carouselItems.length) % this.carouselItems.length;
  }

  onNextClick() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselItems.length;
  }
}
