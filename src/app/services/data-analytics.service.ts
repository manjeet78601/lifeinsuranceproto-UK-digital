import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
export enum CategoryName {
  HOME = 'Home',
  LOGIN = 'Login',
  PERSONLINFO = 'PersonalInfo',
}

export enum Action {
  CLICK = 'click',
  BLUR = 'blur',
  LOAD = 'load',
}

export enum PageLoadLabel {
  PAGE_LOAD = 'Page_Load',
  PAGE_UNLOAD = 'Page_Unload',
}
export enum PageName {
  LOGIN = 'Login',
  SIGNUP = 'SignUp',
  HOMEPAGE = 'Home',
  PERSONLINFO = 'PersonalInfo',
  HEALTHINFO = 'HealthInfo',
}
export enum PersonalDetailLabel {
  BACK = 'Back',
  NEXT = 'Next',
}
@Injectable({
  providedIn: 'root'
})
export class DataAnalyticsService {
  browserName: string = this.getBrowserName();
  analyticHeaders: HttpHeaders;
  url: string =  environment.analyticURL;
  constructor(private http: HttpClient) {
    this.analyticHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('referrer-policy', 'strict-origin-when-cross-origin')
      .set('Access-Control-Allow-Methods', 'POST')
      .set('Content-Type', 'application/json');
   }
  private getBrowserName(): string {
    if (navigator.userAgent.indexOf('Edge') > 0) {
      return 'Edge';
    }
    if ((navigator.userAgent.indexOf('Chrome') > 0) && (navigator.vendor.indexOf('Google') >= 0)) {
      return 'Chrome';
    }
    if (navigator.userAgent.indexOf('Safari') > 0) {
      return 'Safari';
    }
    if (navigator.userAgent.indexOf('Firefox') > 0) {
      return 'Firefox';
    }
    if (navigator.userAgent.indexOf('Opera') > 0) {
      return 'Opera';
    }
    if (navigator.userAgent.indexOf('Trident') > 0) {
      return 'IE';
    }
  }
  private emitEventToGoogleCloud(eventCategory: string,
                                 eventAction: string,
                                 eventLabel: string = '',
                                 eventValue: string = '1',
                                 isPageLoadUnLoad: boolean = false,
  ) {
    const data = {
      name: 'lifeplus-insurance',
      value: 1,
      tags: {
        action: eventAction,
        page: eventCategory,
        field: eventLabel,
        value: eventValue,
        user_agent: this.browserName,
      },
    };
    if (isPageLoadUnLoad) {
      delete data.tags.field;
      delete data.tags.value;
    }
    this.http.post(this.url, data, { headers: this.analyticHeaders }).subscribe();
  }
  public trackAnalyticData(categoryName: string, eventAction: string, eventLabel: string = '') {
    this.emitEventToGoogleCloud(categoryName, eventAction, eventLabel);
  }
}


