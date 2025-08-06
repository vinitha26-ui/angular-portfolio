import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as ProjectsActions from './projects.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ProjectsEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectsActions.loadProjects),
      mergeMap(() =>
        this.http.get<any[]>('assets/json/projects.json').pipe(
          map((projects) => ProjectsActions.loadProjectsSuccess({ projects })),
          catchError((error) => of(ProjectsActions.loadProjectsFailure({ error })))
        )
      )
    )
  );
}
