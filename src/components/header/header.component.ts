import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,DatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [DatePipe],
})
export class HeaderComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {
    const options = {
      strings: ['Welcome :)','Having a good day I hope? :D',
        'Feel free to stay here as much as you want!',
        'PLEASE EMPLOY ME ahem.. I mean.. Take your time no pressure!!'],
      typeSpeed: 65,
      backSpeed: 50,
      shuffle: true,
      backDelay: 6000,
      loop: true,
    }
  
    const typed = new Typed('#typed-text',options);
  }

  getCurrentTime() {
    return new Date();
  }

  
}
