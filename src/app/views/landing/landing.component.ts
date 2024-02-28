import { Component, OnInit } from '@angular/core';
import {IonText} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-landing',
  imports: [
    IonText,
    RouterLink
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  standalone: true
})
export class LandingComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
