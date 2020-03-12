import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facial-identity',
  templateUrl: './facial-identity.page.html',
  styleUrls: ['./facial-identity.page.scss'],
})
export class FacialIdentityPage implements OnInit {

  constructor(
    private camera: Camera,
    private router: Router
    ) { }
  capturedSnapURL: string;

  cameraOptions = {
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
    this.router.navigate(['/personal-details']);
  }, (err) => {
    alert(err);
    // Handle error
    this.router.navigate(['/personal-details']);
  });
 }
 onSkip(): void {
  this.router.navigate(['/personal-details']);
 }
}
