import { Component } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { sendMessage } from './modal.functions';
import { getStates } from './modal.functions';

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
                  <ion-segment-button id="WindowOn" (click)=toast(true)>
                    <ion-label>Open</ion-label>
                  </ion-segment-button>
                  <ion-segment-button id="WindowOff" (click)=toast(false) checked>
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
    interval: any
    constructor(private modalCtrl: ModalController, private toastCtrl: ToastController) { this.interval = null; }
    ionViewWillEnter() {
        getStates('Window');
        this.interval = setInterval(function () { getStates('Window'); }, 3000);
    }
    async close() {
        clearInterval(this.interval);
        this.modalCtrl.dismiss();
    }

    async toast(value) {

        let _message = null;

        if (value) {
            _message = 'Your window has been opened';
            sendMessage('WindowOn');
        } else {
            _message = 'Your window has been closed';
            sendMessage('WindowOff');
        }

        const toast = await this.toastCtrl.create({
            message: _message,
            duration: 2000
        });

        toast.present();
    }
}
