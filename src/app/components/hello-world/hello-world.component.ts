import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent implements OnInit {
  //1. Add Property Name
  name!: string;

  constructor() {
    this.name = 'Angular';
  }

  ngOnInit(): void {}
}
