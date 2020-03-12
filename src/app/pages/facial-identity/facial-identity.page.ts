import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-facial-identity',
  templateUrl: './facial-identity.page.html',
  styleUrls: ['./facial-identity.page.scss'],
})
export class FacialIdentityPage implements OnInit {

  constructor(private camera: Camera) { }
  capturedSnapURL: string;

  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };
  ngOnInit() {
  }
  onScan() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
    // this.camera.DestinationType.FILE_URI gives file URI saved in local
    // this.camera.DestinationType.DATA_URL gives base64 URI
    const base64Image = 'data:image/jpeg;base64,' + imageData;
    this.capturedSnapURL = base64Image;
  }, (err) => {
    alert(err);
    // Handle error
  });
 }
}
