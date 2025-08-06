import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-in', style({ opacity: 1 })),
      ]),
    ])
  ]
})
export class AboutComponent implements OnInit {
  titles = ['Angular Developer', 'UI Specialist', 'Freelancer'];
  dynamicTitle = '';
  index = 0;

  ngOnInit(): void {
    this.dynamicTitle = this.titles[0];
    setInterval(() => {
      this.index = (this.index + 1) % this.titles.length;
      this.dynamicTitle = this.titles[this.index];
    }, 2000);
  }
}
