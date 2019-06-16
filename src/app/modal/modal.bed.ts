import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { sendMessage } from './modal.functions';
import { getStates } from './modal.functions';

@Component({
    template:
        `<ion-header>
            <ion-toolbar>
                <ion-title>Bed</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div style="margin: 30px 10px 0px 10px !important;">
                <ion-button id="Bed" expand="block" (click)="toast()">Request new sheets</ion-button>
            </div>
            <div style="margin: 30px 10px 0px 10px !important;">
                <ion-button expand="block" color="dark" (click)="close()">Close options</ion-button>
            </div>
        </ion-content>`,

    selector: 'page-modal'
})

export class ModalPageBedComponent {
    interval: any;
    constructor(private ctrl: ModalController, private toastCtrl: ToastController) {
        this.interval = null;
    }
    ionViewWillEnter() {
        getStates('Bed');
        this.interval = setInterval(function () { getStates('Bed'); }, 3000);
    }
    async close() {
        clearInterval(this.interval);
        this.ctrl.dismiss();
    }

    async toast() {
        sendMessage('Bed');
        const toast = await this.toastCtrl.create({
            message: 'Your request has been sent to the hotel',
            duration: 2000
        });

        toast.present();
    }
}
