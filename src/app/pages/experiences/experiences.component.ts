import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  expStatus:number = 1;
  changeN(n:number) {
    this.expStatus = n
  }
}
