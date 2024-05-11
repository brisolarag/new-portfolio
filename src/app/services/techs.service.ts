import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tech } from '../models/techs/tech.model';

@Injectable({
  providedIn: 'root'
})
export class TechsService {

  private data = 'assets/db/technologies.json';
  constructor(private httpClient: HttpClient) { }

  getSkills(): Observable<Tech[]> {
    return this.httpClient.get<Tech[]>(this.data);
  }
}
