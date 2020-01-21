import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
    './header-search.css'
  ]
})
export class HeaderComponent implements OnInit {

  private _isActive: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(){
    this._isActive = !this._isActive;
  }
}
