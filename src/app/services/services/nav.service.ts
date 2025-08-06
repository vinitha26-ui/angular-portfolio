import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NavLink {
  label: string;
  route: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private jsonUrl = 'assets/json/nav-links.json';

  constructor(private http: HttpClient) {}

  getNavLinks(): Observable<NavLink[]> {
    return this.http.get<NavLink[]>(this.jsonUrl);
  }
}
