import { ResolveFn } from '@angular/router';
import {Store} from "@ngrx/store";
import {inject} from "@angular/core";
import {LocationActions} from "../../state/location/location.actions";

export const locationResolver: ResolveFn<boolean> = (route, state) => {
  return inject(LocationResolver).resolve();
};

export class LocationResolver {

  constructor(private locationStore: Store) {}

  resolve(): boolean {
    return true;
  }
}
