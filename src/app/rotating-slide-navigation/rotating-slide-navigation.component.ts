import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotating-slide-navigation',
  templateUrl: './rotating-slide-navigation.component.html',
  styleUrls: ['./rotating-slide-navigation.component.css']
})
export class RotatingSlideNavigationComponent implements OnInit {
  slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'];
  rotation = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.rotation -= 90; 
      if (this.rotation <= -360) {
        this.rotation = 0; 
      }
    }, 3000);
  }

  getSlideStyle(index: number): object {
    const transform = `rotateY(${90 * index}deg) translateZ(200px)`;
    return { transform };
  }
}
