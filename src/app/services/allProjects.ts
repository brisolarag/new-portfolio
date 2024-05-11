import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Project } from '../models/projects/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private data = 'assets/db/data.json';
  constructor(private httpClient: HttpClient) {  }

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.data);
  }
}

