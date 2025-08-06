import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('cardStagger', [
      transition(':enter', [
        query('.summary-card', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(150, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent {
  techStacks = [
    { title: 'Angular', value: 'angular' },
    { title: 'Typescript', value: 'typescript' },
    { title: 'HTML',value: 'html'},
    { title: 'CSS', value: 'css' },
    { title: 'RXJS', value: 'rxjs' },
    { title: 'VSCODE', value: 'vscode' },
    { title: 'NGRX', value: 'ngrx' },
  ];
  showCards = false;
  time = new Date();
  dynamicTitle = '';
  private titles = [
    'Senior Angular Developer',
    'UI Specialist',
    'Freelance Web Consultant',
    '5+ Years Experience'
  ];
  private index = 0;

  ngOnInit() {
    setTimeout(() => {
      this.showCards = true;
    });
    setInterval(() => this.time = new Date(), 1000);
    this.dynamicTitle = this.titles[this.index];

    setInterval(() => {
      this.index = (this.index + 1) % this.titles.length;
      this.dynamicTitle = this.titles[this.index];
    }, 2000); 
  }
}
