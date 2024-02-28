import {Component, Input, OnInit} from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonFooter, IonInput, IonModal, IonToolbar, ModalController
} from "@ionic/angular/standalone";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {TypedForm} from "../../../types/typedform";
import {Loc} from "../../../types/loc";
import {LocationFacade} from "../../../state/location/location.facade";
import {v4} from "uuid";

@Component({
  selector: 'app-location-edit',
  imports: [
    IonButton,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonFooter,
    IonInput,
    IonModal,
    IonToolbar,
    ReactiveFormsModule
  ],
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.scss'],
  standalone: true
})
export class LocationEditComponent  implements OnInit {
  @Input() location!: Loc;
  locationForm!: TypedForm<Loc>;

  constructor(private modalCtrl: ModalController,
              private formBuilder: FormBuilder,
              protected locationFacade: LocationFacade) { }

  ngOnInit() {
    this.locationForm = this.buildForm(this.location);
  }

  buildForm(location: Loc) {
    return this.formBuilder.nonNullable.group({
      'id': [location.id],
      'name': [location.name, [Validators.required]],
      'climate': [location.climate, [Validators.required]],
      'cost': [location.cost, [Validators.required]],
      'attractions': [location.attractions, [Validators.required]]
    })
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  saveForm() {
    let formVal = this.locationForm.value;
    let id = formVal.id;

    // Break this to a helper? Better way to deal with the undefined form value properties
    if (id) {
      this.locationFacade.updateLocation({
        id: id,
        name: formVal.name!,
        climate: formVal.climate!,
        cost: formVal.cost!,
        attractions: formVal.attractions!
      })
    } else {
      this.locationFacade.createLocation({
        id: v4(), // Get new id here since it becomes read only once dispatch
        name: formVal.name!,
        climate: formVal.climate!,
        cost: formVal.cost!,
        attractions: formVal.attractions!
      })
    }
  }
}
