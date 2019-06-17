import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { sendMessage } from './modal.functions';
import { getStates } from './modal.functions';

@Component({
    template:
        `<ion-header>
            <ion-toolbar>
                <ion-title>Lamp</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <div style="margin: 30px 10px 0px 10px !important;">
                <ion-segment (ionChange)="segmentChanged($event)">
                  <ion-segment-button id="LampOn" (click)=toast(true)>
                    <ion-label>On</ion-label>
                  </ion-segment-button>

                  <ion-segment-button id="LampOff" (click)=toast(false) checked>
                    <ion-label>Off</ion-label>
                  </ion-segment-button>
                </ion-segment>
            </div>

        <div style="margin: 30px 10px 0px 10px !important;">
            <ion-button expand="block" color="dark" (click)="close()">Close options</ion-button>
        </div>
        </ion-content>`,

    selector: 'page-modal'
})

export class ModalPageLampComponent {
    interval: any;
    constructor(private ctrl: ModalController, private toastCtrl: ToastController) { this.interval = null }
    ionViewWillEnter() {
        getStates('lamp');
        this.interval = setInterval(function () { getStates('lamp'); }, 3000);
    }
    async close() {
        clearInterval(this.interval);
        this.ctrl.dismiss();
    }

    async toast(value) {
        let _message = null;

        if (value) {
            _message = 'Your lamp has been turned on';
            sendMessage('LampOn');
        } else {
            _message = 'Your lamp has been turned off'
            sendMessage('LampOff');
        }
        const toast = await this.toastCtrl.create({
            message: _message,
            duration: 2000
        });

        toast.present();
    }
}
