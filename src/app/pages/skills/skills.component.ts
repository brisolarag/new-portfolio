import { Component } from '@angular/core';
import { Course } from '../../models/courses/courses.model';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  courses: Course[] = [];
  constructor( private courseService: CoursesService ) {
    this.getCourses();
  }


  getCourses() {
    this.courseService.getCourses()
      .subscribe(courses => {
        this.courses = courses.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB.getTime() - dateA.getTime();
        });
      });
  }

  formatDate(dateBefore: string): string {
    const date = new Date(dateBefore);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear().toString();
    return `${month}/${year}`;
  }
}
