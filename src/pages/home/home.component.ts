import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public slides = [
    { src: "https://image1.com" },
    { src: "https://image2.com" },
    { src: "https://image3.com" },
    { src: "https://image4.com" }
  ];
}
