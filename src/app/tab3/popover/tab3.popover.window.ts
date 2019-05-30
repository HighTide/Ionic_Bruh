import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
    selector: 'page-popover',
    template: `<ion-list>
                    <ion-list-header>Window</ion-list-header>

                    <ion-item>
                        <ion-label>Button</ion-label>
                        <ion-button>Button</ion-button>
                    </ion-item>

                    <ion-button (click)="close()">Close pop-up</ion-button>
                </ion-list>`
})

export class PopoverPageWindow {

    constructor(private ctrl: PopoverController) { }

    async close() {
        this.ctrl.dismiss();
    }
}