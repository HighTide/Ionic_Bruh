import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
    template:
        `<ion-header>
            <ion-toolbar>
                <ion-title>Window</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div style="margin: 30px 10px 0px 10px !important;">
                <ion-segment (ionChange)="segmentChanged($event)">
                  <ion-segment-button (click)=toast(true)>
                    <ion-label>Open</ion-label>
                  </ion-segment-button>
                  <ion-segment-button (click)=toast(false) checked>
                    <ion-label>Close</ion-label>
                  </ion-segment-button>
                </ion-segment>
            </div>
            <div style="margin: 30px 10px 0px 10px !important;">
                <ion-button expand="block" color="dark" (click)="close()">Close options</ion-button>
            </div>           
        </ion-content>`,

    selector: 'page-modal'
})

export class ModalPageWindowComponent {

    constructor(private modalCtrl: ModalController, private toastCtrl: ToastController) { }

    close(): void {
        let isActive = false;
        this.ctrl.dismiss(isActive);
    }

    async toast(value) {

        let _message = null;

        if (value) {
            _message = 'Your window has been opened'
        }
        else {
            _message = 'Your window has been closed'
        }

        const toast = await this.toastCtrl.create({
            message: _message,
            duration: 2000
        });

        toast.present();
    }
}
