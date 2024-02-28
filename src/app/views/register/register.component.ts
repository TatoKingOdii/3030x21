import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonInput} from "@ionic/angular/standalone";

@Component({
  selector: 'app-register',
  imports: [
    RouterLink,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonInput,
    IonButton
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true
})
export class RegisterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
