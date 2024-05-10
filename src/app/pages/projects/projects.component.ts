import { Component } from '@angular/core';
import { ProjectsService } from '../../services/allProjects';
import { Project } from '../../models/projects/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [];
  constructor( private projectService: ProjectsService ) {
    this.getProjects();
  }


  

  getProjects() {
    this.projectService.getProjects()
      .subscribe(projects => {
        this.projects = projects.sort((a, b) => {
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


  toggleStatus(itemId: number): void {
    this.projects = this.projects.map(project => {
      if (project.id === itemId) {
        return { ...project, status: project.status === 0 ? 1 : 0 };
      }
      return project;
    });
  }
}
  

