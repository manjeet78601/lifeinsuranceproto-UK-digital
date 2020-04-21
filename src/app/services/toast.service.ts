import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }

  async presentToast(msg: string, time: number = 4000) {
    const toast = await this.toastController.create({
      message: msg,
      duration: time,
      position: 'top',
      cssClass: 'custom-toast'
    });
    toast.present();
  }
}
