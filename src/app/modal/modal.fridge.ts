import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { sendMessage } from './modal.functions';
import { getStates } from './modal.functions';

@Component({
    template:
        `<ion-header>
            <ion-toolbar>
                <ion-title>Fridge</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div style="margin: 30px 10px 0px 10px !important;">
                <ion-button id="Fridge" expand="block" (click)="toast()">Request refill fridge</ion-button>
            </div>
            <div style="margin: 30px 10px 0px 10px !important;">
                <ion-button expand="block" color="dark" (click)="close()">Close options</ion-button>
            </div>
        </ion-content>`,

    selector: 'page-modal'
})

export class ModalPageFridgeComponent {

    constructor(private ctrl: ModalController, private toastCtrl: ToastController) { }
    ionViewWillEnter() {
        getStates("Fridge");
        setInterval(function () { getStates("Fridge"); }, 3000);
    }
    async close() {
        this.ctrl.dismiss();
    }

    async toast() {
        sendMessage('Fridge');
        const toast = await this.toastCtrl.create({
            message: 'Your request has been sent to the hotel',
            duration: 2000
        });

        toast.present();
    }
}
