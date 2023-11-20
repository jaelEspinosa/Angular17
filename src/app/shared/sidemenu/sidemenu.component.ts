import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent implements OnInit{

  public menuItems = routes
        .map(route => route.children ?? [])
        .flat()
        .filter(route=> route && route.path)
        .filter(route => !route.path?.includes(':'))
  constructor() {

  }
  ngOnInit(){
    console.log(this.menuItems)
  }

}
