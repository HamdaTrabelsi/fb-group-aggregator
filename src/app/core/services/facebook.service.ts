// facebook.service.ts
import { Injectable } from '@angular/core';

declare const FB: any;

@Injectable({
  providedIn: 'root'
})
export class FacebookService {
  constructor() {
    this.initializeFacebookSDK();
  }

  initializeFacebookSDK(): void {
    (window as any).fbAsyncInit = () => {
      FB.init({
        appId: '2200889906913754',
        cookie: true,
        xfbml: true,
        version: 'v10.0'
      });
      FB.AppEvents.logPageView();
    };
  }

  login(): Promise<any> {
    return new Promise((resolve, reject) => {
      FB.login((response: any) => {
        if (response.authResponse) {
          resolve(response);
        } else {
          reject('User cancelled login or did not fully authorize.');
        }
      }, { scope: 'user_managed_groups' });
    });
  }

  getUserGroups(): Promise<any> {
    return new Promise((resolve, reject) => {
      FB.api('/me/groups', 'GET', {}, (response: any) => {
        if (response && !response.error) {
          resolve(response);
        } else {
          reject(response.error);
        }
      });
    });
  }
}
