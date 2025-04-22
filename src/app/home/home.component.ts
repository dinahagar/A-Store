import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public isOpen!:boolean;

  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.setSidebarState();
  }

  setSidebarState() {
    this.isOpen = window.innerWidth >= 768;
  }

  ngOnInit() {
    this.setSidebarState();
  }

  handleSidebarToggle(newState: boolean) {
    this.isOpen = newState;
  }
}
