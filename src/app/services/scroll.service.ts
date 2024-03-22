import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor() { }

  addScrollListener(callback: () => void): void {
    if (typeof window !== 'undefined') { 
      window.addEventListener('scroll', callback);
    }
  }

  removeScrollListener(callback: () => void): void {
    if (typeof window !== 'undefined') { 
      window.removeEventListener('scroll', callback);
    }
  }
}
