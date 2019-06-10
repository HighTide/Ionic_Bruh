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
                <ion-title>Window</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid>
                <ion-row>
                    <ion-col size="3">
                    </ion-col>
                    <ion-col>
                        <ion-range pin="true" min="1" max="10" snaps="true" color="secondary">
                            <ion-icon size="small" name="sunny" slot="start">min</ion-icon>
                            <ion-icon name="sunny" slot="end">max</ion-icon>
                        </ion-range>
                    </ion-col>
                    <ion-col size="3">
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>`,

    selector: 'page-modal'
})

export class ModalPageWindowComponent {

    constructor(private ctrl: ModalController) { }

    async close() {
        this.ctrl.dismiss();
    }

    // Something ToastController Here
}
