import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
    template:
        `<ion-header>
            <ion-toolbar>
            <ion-button color="light" (click)="close()">
                <ion-icon name="close"></ion-icon>
            </ion-button>
                <ion-title>Bed</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid>
                <ion-row>
                    <ion-col size="3">
                    </ion-col>
                    <ion-col>
                      <ion-button class="center" (click)="presentToast()">Request new sheets</ion-button>
                    </ion-col>
                    <ion-col size="3">
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>`,

    selector: 'page-modal'
})

export class ModalPageBed {

    constructor(private ctrl: ModalController) { }

    async close() {
        this.ctrl.dismiss();
    }
} 

export class ToastPageBed {

    constructor(private ctrl: ToastController) { }

    async presentToast() {
        const toast = await this.ctrl.create({
            message: 'New sheets have been requested',
            duration: 2000
        });
        toast.present();
    }
}