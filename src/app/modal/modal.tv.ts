import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Console } from '@angular/core/src/console';
import { sendMessage } from './modal.functions';
import { getStates } from './modal.functions';

@Component({
    template:
        `<ion-header>
            <ion-toolbar>
                <ion-title>TV</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content fullscreen>
            <ion-grid>

            <div style="margin: 10px 10px 25px 10px !important;">
                <ion-segment (ionChange)="segmentChanged($event)">
                  <ion-segment-button id="TelevisionOn" (click)=activationTV()>
                    <ion-label>On</ion-label>
                  </ion-segment-button>

                  <ion-segment-button id="TelevisionOff" (click)=activationTV() checked>
                    <ion-label>Off</ion-label>
                  </ion-segment-button>
                </ion-segment>
            </div>
                <div style="margin: 10px 10px 25px 10px !important;">
                    <ion-segment (ionChange)="segmentChanged($event)">
                        <ion-segment-button disabled>
                            <ion-label id="Channel">Channel: </ion-label>
                        </ion-segment-button>

                        <ion-segment-button disabled="">
                            <ion-label id="Volume">Volume: </ion-label>
                        </ion-segment-button>
                    </ion-segment>
                </div>


                <ion-row>
                    <ion-col size="3">
                    </ion-col>
                    <ion-col class="center">
                        <ion-button class="center" (click)=channelNumInput(1)>1</ion-button>
                        <ion-button class="center" (click)=channelNumInput(2)>2</ion-button>
                        <ion-button class="center" (click)=channelNumInput(3)>3</ion-button>
                    </ion-col>
                    <ion-col size="3">
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="3">
                    </ion-col>
                    <ion-col class="center">
                        <ion-button class="center" (click)=channelNumInput(4)>4</ion-button>
                        <ion-button class="center" (click)=channelNumInput(5)>5</ion-button>
                        <ion-button class="center" (click)=channelNumInput(6)>6</ion-button>
                    </ion-col>
                    <ion-col size="3">
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="3">
                    </ion-col>
                    <ion-col class="center">
                        <ion-button class="center" (click)=channelNumInput(7)>7</ion-button>
                        <ion-button class="center" (click)=channelNumInput(8)>8</ion-button>
                        <ion-button class="center" (click)=channelNumInput(9)>9</ion-button>
                    </ion-col>
                    <ion-col size="3">
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="4.5">
                    </ion-col>
                    <ion-col size="3">
                        <ion-button class="center" (click)=channelNumInput(0)>0</ion-button>
                    </ion-col>
                    <ion-col size="3">
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        Volume
                        <ion-button class="center" (click)=volumeSwitch(1)>Volume +</ion-button>
                        <ion-button class="center" (click)=volumeSwitch(2)>Volume -</ion-button>
                    </ion-col>
                    <ion-col size="3">
                    </ion-col>
                    <ion-col>
                        Channel
                        <ion-button class="center" (click)=channelSwitch(1)>Next</ion-button>
                        <ion-button class="center" (click)=channelSwitch(2)>Prev</ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>

            <div style="margin: 30px 10px 0px 10px !important;">
                <ion-button expand="block" color="dark" (click)="close()">Close options</ion-button>
            </div>
        </ion-content>`,

    selector: 'page-modal'
})

    export class ModalPageTvComponent {
    Channel_global: number;
    Volume_global: number;
    Active: number;
    interval: any;
    constructor(private ctrl: ModalController, private ctrl_t: ToastController) {
        this.Channel_global = 0;
        this.Active = 1;
        this.Volume_global = 10;
        this.interval = null;
    }
    ionViewWillEnter() {
        getStates('Television');
        this.interval = setInterval(function () { getStates('Television'); }, 3000);
        // (document.querySelector('.show-modal') as  HTMLElement).style.marginTop = "20%"
    }
    async close() {
        clearInterval(this.interval);
        this.ctrl.dismiss();
    }

    // Tv activation
    // 0 means false
    // 1 means true
    async activationTV() {
        if (this.Active === 0) {
            this.Active = 1;
            sendMessage('TelevisionOn');
        } else {
            this.Active = 0;
            this.Channel_global = 0;
            this.Volume_global = 10;
            sendMessage('TelevisionVolume' + this.Volume_global.toString());
            sendMessage('TelevisionChannel' + this.Channel_global.toString());
            sendMessage('TelevisionOff');
        }

    }

    // Channel Switching with the Next and Prev buttons
    // channel == 1 -> Next channel
    // channel == 2 -> Previous channel
    async channelSwitch(channel: number) {
        if (this.Active === 1) {
            if (this.Channel_global === 9 && channel === 1) {
                this.Channel_global = 0;
            } else if (channel === 1) {
                this.Channel_global++;
            }
            if ((this.Channel_global === 0 || this.Channel_global == null) && channel == 2) {
                this.Channel_global = 9;
            } else if (channel === 2 && this.Channel_global >= 1) {
                this.Channel_global--;
            }
        }
        sendMessage('TelevisionChannel' + this.Channel_global.toString());
    }

    // Volume changing with the Volume + and Volume - buttons
    // volume == 1 -> Volume raise
    // volume == 2 -> Volume sink
    async volumeSwitch(volume: number) {
        if (this.Active === 1) {
            if (volume === 1 && this.Volume_global < 100) {
                this.Volume_global++;
            }
            if (volume === 2 && this.Volume_global > 0) {
                this.Volume_global--;
            }
        }
        sendMessage('TelevisionVolume' + this.Volume_global.toString());
    }

    async channelNumInput(channel: number) {
        if (this.Active === 1) {
            this.Channel_global = channel;
        }
        sendMessage('TelevisionChannel' + this.Channel_global.toString());
    }

}

