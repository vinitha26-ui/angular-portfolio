import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  trigger, transition, style, animate, query, stagger
} from '@angular/animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: [
    trigger('staggerFadeIn', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('100ms', animate('400ms ease-out', style({ opacity: 1, transform: 'none' })))
        ], { optional: true })
      ])
    ])
  ]
})
export class ExperienceComponent implements OnInit {
  experienceList: any[] = [];
  filteredList: any[] = [];
  companies: string[] = [];
  selectedCompany: string = 'All';
  searchTerm: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/json/experience.json').subscribe(data => {
      this.experienceList = data;
      this.filteredList = data;
      this.companies = ['All', ...new Set(data.map(item => item.company))];
    });
  }

  filterExperiences(): void {
    const search = this.searchTerm.toLowerCase();
    this.filteredList = this.experienceList.filter(exp => {
      const matchesCompany = this.selectedCompany === 'All' || exp.company === this.selectedCompany;
      const matchesSearch =
        exp.role.toLowerCase().includes(search) ||
        exp.company.toLowerCase().includes(search) ||
        exp.responsibilities.some((r: string) => r.toLowerCase().includes(search));
      return matchesCompany && matchesSearch;
    });
  }
}
