import { Component } from '@angular/core';
import { Course } from '../../models/courses/courses.model';
import { CoursesService } from '../../services/courses.service';
import { TechsService } from '../../services/techs.service';
import { Tech } from '../../models/techs/tech.model';
import { ScService } from '../../services/sc.service';
import { SC } from '../../models/skills&courses/sc.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {



  idView:number = -99;


  coursesQtd: number = 0;
  scs: SC[] = [];
  constructor( private scService: ScService ) {
    this.getSC();
  }

  viewAll() {
    this.idView = -99;
  }

  setView(id:number) {
    this.idView = id;
  }


  getSC() {
    this.scService.getSkillsAndCourses()
    .subscribe(scs => {
      this.scs = scs;
    })
    this.sumCourses();
  }

  sumCourses() {
    this.scs.forEach(sc => {
      this.coursesQtd += sc.courses.length;
    });
  }


  formatDate(dateBefore: string): string {
    const date = new Date(dateBefore);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear().toString();
    return `${month}/${year}`;
  }


  generateArray(length: number): number[] {
    return Array.from({ length }, (_, i) => i);
  }
}
