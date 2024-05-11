import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SC } from '../models/skills&courses/sc.model';

@Injectable({
  providedIn: 'root'
})
export class ScService {

  private data = 'assets/db/skillsAndCourses.json';
  constructor(private http: HttpClient) { }

  getSkillsAndCourses(): Observable<SC[]> {
    return this.http.get<SC[]>(this.data);
  }
}
