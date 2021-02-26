import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {


  sampleText:string =  " This is just a simple application to test ionic 5 features";

  constructor() { }

  ngOnInit() {
  }

}
