import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthenticatorService {

  constructor(public uuid = 'ggID', private router?: Router, private afAuth?: AngularFireAuth) { }

  userInfo: any;
  credential: any = null;

  // Sign in with Google
  async login() {
    const provider = new auth.GoogleAuthProvider();
    this.credential = this.afAuth.auth.signInWithPopup(provider);
    this.router.navigate(["profile"]);
  }

  // Sign out with Google
  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate["module-view"]
    });
  }

  // Auth logic to run auth providers
  // AuthLogin(provider) {
  //   return this.afAuth.auth.signInWithPopup(provider)
  //     .then((result) => {
  //       console.log('You have been successfully logged in!')
  //     }).catch((error) => {
  //       console.log(error)
  //     });
  // }

}