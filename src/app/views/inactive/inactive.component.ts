import { Component, OnInit } from '@angular/core';
import {IonText} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-inactive',
  imports: [
    IonText,
    RouterLink
  ],
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.scss'],
  standalone: true
})
export class InactiveComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
