import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthActions} from "../auth/auth.actions";
import {LocationActions} from "../location/location.actions";
import {map, tap} from "rxjs";
import {ToastController} from "@ionic/angular/standalone";


@Injectable()
export class ErrorEffects {

  constructor(private actions$: Actions, private toastController: ToastController) {}

  errorEffect$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.loginFailure, AuthActions.logoutFailure, LocationActions.createLocationsFailure,
      LocationActions.deleteLocationsFailure, LocationActions.updateLocationsFailure, LocationActions.loadLocationsFailure),
    map(action => {
      // This don't work
      this.toastController.create({message: action.error, duration: 3000, position: 'top'});
    })
  ), {dispatch: false});
}
