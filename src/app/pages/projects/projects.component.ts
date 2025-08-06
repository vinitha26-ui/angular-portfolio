import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProjects } from './store/projects.actions';
import { selectAllProjects, selectProjectsLoading } from './store/projects.selectors';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$ = this.store.select(selectAllProjects);
  loading$ = this.store.select(selectProjectsLoading);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadProjects());
  }
}
