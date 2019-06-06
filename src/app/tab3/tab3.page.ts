import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


// tslint:disable-next-line:max-line-length
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';

import { ModalPageBed } from './modal/tab3.modal.bed';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    constructor(public cameraPreview: CameraPreview, public modalController: ModalController, public toastController: ToastController) { }

    async presentModal() {

        let obj = "Bed";
        let cmp = null;

        // Selects the object's class 
        switch (obj) {
            case "Fan": {
                //cmp = ;
                break;
            }
            case "Window": {
                //cmp = ;
                break;
            }
            case "Bed": {
                cmp = ModalPageBed;
                break;
            }
            case "Lamp": {
                //cmp = ;
                break;
            }
            case "Fridge": {
                //cmp = ;
                break;
            }
            case "TV": {
                //cmp = ;
                break;
            }
            default: { }
        }

        const modal = await this.modalController.create({
            component: ModalPageBed,
            componentProps: { value: 123 }
        });
        return await modal.present();
    }

    async presentToast() {

        let obj = "Bed";
        let cmp = null;

        // Selects the object's class 
        switch (obj) {
            case "Fan": {
                //cmp = ;
                break;
            }
            case "Window": {
                //cmp = ;
                break;
            }
            case "Bed": {
                cmp = 'New sheets have been requested';
                break;
            }
            case "Lamp": {
                //cmp = ;
                break;
            }
            case "Fridge": {
                //cmp = ;
                break;
            }
            case "TV": {
                //cmp = ;
                break;
            }
            default: { }
        }

        const toast = await this.toastController.create({
            message: cmp,
            duration: 2000
        });
        toast.present();
    }

  static BoundingBoxCanvas = class {
     id: string;
     canvas: any;
     canvasTX: any;
     ionContent: any;


    constructor(canvas) {
      this.id = canvas;
    }

    update() {
      this.canvas = document.getElementById(this.id) as HTMLCanvasElement;
      this.canvasTX = this.canvas.getContext('2d');

      // Setting size of canvas based on size of ion-content.
      this.ionContent = document.getElementById('ionContent');
      this.canvas.width = this.ionContent.offsetWidth;
      this.canvas.height = this.ionContent.offsetHeight;
      this.focus();

    }

    focus() {
      // Draw Rectangle on canvas creation!
      this.canvasTX.beginPath();
      this.canvasTX.lineWidth = 5;
      this.canvasTX.strokeStyle = 'rgba(255,255,255,1)';
      this.canvasTX.rect((this.ionContent.offsetWidth / 2) - (150 / 2), (this.ionContent.offsetHeight / 2) - (150 / 2), 150, 150);
      this.canvasTX.stroke();
    }

    makeblob(dataURL) {
      const BASE64_MARKER = ';base64,';
      if (dataURL.indexOf(BASE64_MARKER) === -1) {
        const parts1 = dataURL.split(',');
        const contentType1 = parts1[0].split(':')[1];
        const raw1 = decodeURIComponent(parts1[1]);
        return new Blob([raw1], { type: contentType1 });
      }
      const parts = dataURL.split(BASE64_MARKER);
      const contentType = parts[0].split(':')[1];
      const raw = window.atob(parts[1]);
      const rawLength = raw.length;
      const uInt8Array = new Uint8Array(rawLength);
      for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
      }
      return new Blob([uInt8Array], { type: contentType });
    }

    UploadToCloud(img) {
      // tslint:disable-next-line:max-line-length
      const url = 'https://westeurope.api.cognitive.microsoft.com/customvision/v3.0/Prediction/369d841e-3d27-40a6-9a27-b544385cf46c/detect/iterations/Iteration2/image';
      const Req = new XMLHttpRequest();
      Req.open('POST', url, true);
      Req.setRequestHeader('Prediction-Key' , 'e55e4dd0723747109b8bfef99062b006');
      Req.setRequestHeader('Content-Type' , 'application/octet-stream');
      // Call Function on status change!
      const instance = this;
      Req.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          console.log(this.responseText);
          instance.ParseOutput(this.responseText);
        }
      };
      Req.send(this.makeblob(img));

    }

    DrawBox(left, top, width, height, color = 'rgba(255,0,0,0.5)') {
      // Define the colour of the square
      this.canvasTX.strokeStyle = color;
      this.canvasTX.fillStyle = color;
      this.canvasTX.lineWidth = 5;
      const Canwidth = this.canvas.width;
      const Canheight = this.canvas.height;

      // Top Left Coord
      const x0 = left * Canwidth;
      const y0 = top * Canheight;

      // Width and Hight of box
      const x1 = width * Canwidth;
      const y1 = height * Canheight;

      // Draw the outline of a square
      this.canvasTX.strokeRect(x0, y0, x1, y1);
      console.log('Drawing Box'); }

    ParseOutput(json) {
      json = JSON.parse(json);
      console.log(json);
      // document.querySelector("#output").innerHTML = JSON.stringify(json);
      json.predictions.forEach((pre) => {
        if (pre.probability >= 0.5) {
          this.DrawBox(pre.boundingBox.left, pre.boundingBox.top, pre.boundingBox.width, pre.boundingBox.height);
        } else {
          // this.DrawBox(pre.boundingBox.left, pre.boundingBox.top, pre.boundingBox.width, pre.boundingBox.height, "Green")
        }
      });
      this.focus();
    }
  };

  cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: 'rear',
    toBack: true,
    tapPhoto: false,
    previewDrag: false,
    disableExifHeaderStripping: false
  };

  BoundingBox = new Tab3Page.BoundingBoxCanvas('BoundingBoxCanvas');

  ionViewWillEnter() {
    console.log('Entering Tab3');

    // start camera
    this.cameraPreview.startCamera(this.cameraPreviewOpts).then(
        (res) => {
          console.log(res);
          this.BoundingBox.update();
          this.Detect();
        },
        (err) => {
          console.log(err);
        });

    this.cameraPreview.show().then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        });
  }

  ionViewWillLeave() {
    console.log('Leaving Tab3');
    this.cameraPreview.stopCamera().then(
        (res) => {
          // console.log(res);
          console.log('Camera stopped ' + res);
        },
        (err) => {
          console.log(err);
        });
  }

  Detect() {
    this.cameraPreview.takeSnapshot({quality: 75})
        .then(base64Picture => this.BoundingBox.UploadToCloud('data:image/jpeg;base64,' + base64Picture));
  }

}



