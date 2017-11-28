import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerngx',
  templateUrl: './headerngx.component.html',
  styleUrls: ['./headerngx.component.css']
})
export class HeaderngxComponent implements OnInit {

  isCollapsed: boolean = true;

  constructor() { }

  collapsed(event: any): void {
    console.log(this.isCollapsed);
  }
 
  expanded(event: any): void {
    console.log(this.isCollapsed);
  }

  ngOnInit() {
  }

}
