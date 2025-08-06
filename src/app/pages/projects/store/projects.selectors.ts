import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectsState } from './projects.reducer';

export const selectProjectsFeature = createFeatureSelector<ProjectsState>('projects');

export const selectAllProjects = createSelector(
  selectProjectsFeature,
  (state) => state.projects
);

export const selectProjectsLoading = createSelector(
  selectProjectsFeature,
  (state) => state.loading
);
