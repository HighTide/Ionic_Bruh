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
                <ion-title>Fan</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid>
                <ion-row>
                    <ion-col size="3">
                    </ion-col>
                    <ion-col>
                        <ion-button style="visibility: hidden;">
                        <ion-icon size="large" name="power"></ion-icon>
                    </ion-button>
                        <ion-button size="large">
                            <ion-icon size="large" name="power"></ion-icon>
                        </ion-button>
                        <ion-button size="large">
                            <ion-icon size="large" name="refresh-circle"></ion-icon>
                        </ion-button>
                    </ion-col>
                    <ion-col size="3">
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="3">
                    </ion-col>
                    <ion-col>
                        <ion-item>
                            <ion-range pin="true" min="1" max="3" snaps="true" color="secondary">
                                <ion-icon size="small" name="aperture" slot="start">min</ion-icon>
                                <ion-icon name="md-aperture" slot="end">max</ion-icon>
                            </ion-range>
                        </ion-item>
                    </ion-col>
                    <ion-col size="3">
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>`,

    selector: 'page-modal'
})

export class ModalPageFanComponent {

    constructor(private ctrl: ModalController) { }

    async close() {
        this.ctrl.dismiss();
    }

    // Something ToastController Here
}
