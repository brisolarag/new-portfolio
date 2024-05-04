import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsService } from './services/allProjects';
import { SkillsComponent } from './pages/skills/skills.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    AboutmeComponent,
    ExperiencesComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: 
  [
  './app.component.scss'
  ],
  providers: [ProjectsService]
})

export class AppComponent {
  title = 'porfolio';
  
  
}


