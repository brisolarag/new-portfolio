import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadCVService {

  constructor() { }

  downloadFile(filename: string) {
    const url = `/assets/cv/${filename}`;
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const a = document.createElement('a');
        const objectUrl = window.URL.createObjectURL(blob);
        a.href = objectUrl;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(objectUrl);
      });
  }
}