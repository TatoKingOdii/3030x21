import { Component, OnInit } from '@angular/core';
import {IonText} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  imports: [
    IonText,
    RouterLink
  ],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  standalone: true
})
export class PageNotFoundComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
