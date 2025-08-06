import { createReducer, on } from '@ngrx/store';
import * as ProjectsActions from './projects.actions';

export interface ProjectsState {
  projects: any[];
  loading: boolean;
  error: any;
}

export const initialState: ProjectsState = {
  projects: [],
  loading: false,
  error: null
};

export const projectsReducer = createReducer(
  initialState,
  on(ProjectsActions.loadProjects, (state) => ({ ...state, loading: true })),
  on(ProjectsActions.loadProjectsSuccess, (state, { projects }) => ({
    ...state,
    loading: false,
    projects
  })),
  on(ProjectsActions.loadProjectsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
