﻿import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
    template:
        `<ion-header>
            <ion-toolbar>
                <ion-title>Fridge</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div style="margin: 30px 10px 0px 10px !important;">
                <ion-button expand="block" (click)="toast()">Request refill fridge</ion-button>
            </div>
            <div style="margin: 30px 10px 0px 10px !important;">
                <ion-button expand="block" color="dark" (click)="close()">Close options</ion-button>
            </div>
        </ion-content>`,

    selector: 'page-modal'
})

export class ModalPageFridgeComponent {

    constructor(private ctrl: ModalController, private toastCtrl: ToastController) { }

    close(): void {
        let isActive = false;
        this.ctrl.dismiss(isActive);
    }

    async toast() {

        const toast = await this.toastCtrl.create({
            message: 'Your request has been sent to the hotel',
            duration: 2000
        });

        toast.present();
    }
}
