import { Component } from '@angular/core';
import { DownloadCVService } from '../../services/download-cv.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor( private downloadCV: DownloadCVService) {}
  filename:string = 'gabrielbrisolara_cv.pdf';

  download() {
    this.downloadCV.downloadFile(this.filename);
  }
}
