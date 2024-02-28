import { Component, OnInit } from '@angular/core';
import {IonContent, IonText, IonTitle} from "@ionic/angular/standalone"
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-unauthorized',
  imports: [
    IonContent,
    IonText,
    IonTitle,
    RouterLink
  ],
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss'],
  standalone: true
})
export class UnauthorizedComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
