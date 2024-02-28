import { Component, OnInit } from '@angular/core';
import {RouterLink} from "@angular/router";
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonInput} from "@ionic/angular/standalone";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {TypedForm} from "../../types/typedform";
import {User} from "../../types/user";
import {AuthFacade} from "../../state/auth/auth.facade";

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonInput,
    IonButton,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true
})
export class LoginComponent  implements OnInit {

  loginForm!: TypedForm<User>;

  constructor(private authFacade: AuthFacade, private formBuilder: FormBuilder) {
    this.loginForm = this.createForm();
  }

  private createForm(): TypedForm<User> {
    return this.formBuilder.nonNullable.group({
      'user': ['', Validators.required],
      'pass': ['', Validators.required]
    });
  }

  ngOnInit() {}

  login() {
    // Not the biggest fan of this
    let formVal = this.loginForm.value;
    let user = formVal.user ? formVal.user : '';
    let pass = formVal.pass ? formVal.pass : '';

    console.log('Login With: ' + user + ' ' + pass);
    this.authFacade.login({user:  user, pass: pass});
  }
}
