import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  ngOnInit(): void {}

  @HostListener('mousewheel', ['$event'])
  scroll(event: MouseEvent) {
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
