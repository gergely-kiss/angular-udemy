import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-assigment3',
  templateUrl: './assigment3.component.html',
  styleUrls: ['./assigment3.component.css']
})
export class Assigment3Component implements OnInit {

  enable = false;
  clicked = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  doTheTaskOnTheButton() {
    this.enable ? this.enable = false : this.enable = true;
    this.clicked.push((this.clicked.length) + ' th click @ ' + new Date());
  }
}
