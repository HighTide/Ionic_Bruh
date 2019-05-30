import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
    template:
        `<ion-list>
            <ion-list-header>Lamp</ion-list-header>
    
            <ion-item>
                <ion-label>On/Off</ion-label>
                <ion-toggle [(ngModel)]="On/Off"></ion-toggle>
            </ion-item>

            <ion-button (click)="close()">Close pop-up</ion-button>
        </ion-list>`,

    selector: 'page-popover'
})

export class PopoverPageLamp {

    constructor(private ctrl: PopoverController) { }

    async close() {
        this.ctrl.dismiss();
    }
}