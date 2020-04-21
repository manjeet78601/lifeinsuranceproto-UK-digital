import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loaderToShow: any;

  constructor(public loadingController: LoadingController) { }

  showAutoHideLoader(message: string, duration: number = 3000) {
    this.loadingController.create({
      message,
      duration,
      spinner: 'bubbles'
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed! after 2 Seconds');
      });
    });
  }

  showLoader(message: string) {
    this.loaderToShow = this.loadingController.create({
      message,
      spinner: 'bubbles'
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });
    });
    // this.hideLoader();
  }

  hideLoader() {
      this.loadingController.dismiss();
  }
}
