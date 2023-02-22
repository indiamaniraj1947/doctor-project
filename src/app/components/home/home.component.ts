import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}

  @HostListener('mousewheel', ['$event'])
  scroll(event: MouseEvent) {
    console.log('Entered mouse wheel');
    // let wheelDelta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    // if(wheelDelta > 0) {
    //   factor = 0.5;
    // }else {
    //  factor = 2.0;
    // }

    // window.addEventListener("scroll", function () {
    //   var header = document.querySelector("header");
    //   header.classList.toggle("sticky", window.scrollY > 0);
    // });
  }
}
