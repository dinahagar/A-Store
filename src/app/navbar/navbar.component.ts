import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  isLang:boolean = false;
  @Input() public isOpen!: boolean;

  @Output() isOpenChange = new EventEmitter<boolean>();

  username: string = localStorage.getItem('username') || '';

  constructor() {}

  ngOnInit(): void {

  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }
}
