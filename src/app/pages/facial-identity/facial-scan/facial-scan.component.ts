import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { FacialIdentityConstant, } from '../../../properties/facial-identity.constant';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-facial-scan',
  templateUrl: './facial-scan.component.html',
  styleUrls: ['./facial-scan.component.scss'],
})
export class FacialScanComponent implements OnInit {
  DOM_CONSTANTS = FacialIdentityConstant.FACIAL_SCAN;
  imageData:string;
  constructor(
    private camera: Camera,
    private router: Router,
    private loader: LoaderService,
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
      imageData="txt"
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      this.capturedSnapURL = base64Image;
      this.router.navigate(['/personal-details/1']);
    }, (err) => {
      alert(err);
      // Handle error
      this.router.navigate(['/personal-details/1']);
    });
  }
  onSkip(): void {
    this.router.navigate(['/personal-details/0']);
  }

  onSubmit()
  {
    this.loader.showAutoHideLoader('Submitting Details...', 1000);
    setTimeout(() => {
      this.router.navigate(['/facial-identity/compliance']);
    }, 1000);
  }
}
