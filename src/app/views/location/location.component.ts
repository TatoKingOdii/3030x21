import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonRow
} from "@ionic/angular/standalone";
import {LocationListComponent} from "./location-list/location-list.component";
import {LocationEditComponent} from "./location-edit/location-edit.component";
import {LocationFacade} from "../../state/location/location.facade";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-location',
  imports: [
    IonList,
    IonGrid,
    IonRow,
    IonItem,
    IonLabel,
    IonCol,
    IonContent,
    IonCard,
    IonButton,
    LocationListComponent,
    LocationEditComponent,
    AsyncPipe
  ],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  standalone: true
})
export class LocationComponent implements OnInit {

  constructor(protected locationFacade: LocationFacade) { }

  ngOnInit() {
    this.locationFacade.loadLocations();
  }
}
