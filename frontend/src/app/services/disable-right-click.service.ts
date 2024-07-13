import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisableRightClickService {

  constructor() { }

  disableRightClick() {
    document.addEventListener('contextmenu', this.preventRightClick);
  }

  enableRightClick() {
    document.removeEventListener('contextmenu', this.preventRightClick);
  }

  private preventRightClick(event: MouseEvent) {
    event.preventDefault();
  }
}
