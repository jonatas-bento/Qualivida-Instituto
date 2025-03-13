import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PROJECTS } from '../models/data';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

constructor() { }

getProjectById(id: string): Observable<Project | undefined> {
  const project = PROJECTS.find(p => p.id === id);
  return of(project);  // Simulate async operation with RxJS 'of'
}

}
