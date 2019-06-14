import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Console } from '@angular/core/src/console';

let Active: number = 0;
let Channel_global: number = 0;
let Volume_global: number = 10;


@Component({
    template:
        `<ion-header>
            <ion-toolbar>
            <ion-button color="light" (click)="close()">
                <ion-icon name="close"></ion-icon>
            </ion-button>
                <ion-title>TV</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content fullscreen>
            <ion-grid>
                <ion-row>
                    <ion-col align="left">
                        <ion-button class="center" shape="round" (click)=activationTV()><ion-icon name="power"></ion-icon></ion-button>
                    </ion-col>
                </ion-row>
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
                <ion-row>
                    <ion-col size="3.5">
                    </ion-col>
                    <ion-col>
                    BruH TV Remote
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="3">
                    </ion-col>
                    <ion-col size="3">
                    Made by Rick
                    </ion-col>
                    <ion-col size="3">
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>`,

    selector: 'page-modal'
})


export class ModalPageTvComponent {
    constructor(private ctrl: ModalController, private ctrl_t: ToastController) {
    }

    async close() {
        this.ctrl.dismiss();
    }

    //Tv activation
    // 0 means false
    // 1 means true
    async activationTV() {
        if (Active == 0) {
            Active = 1;
        }
        else {
            Active = 0;
        }
    }

    //Channel Switching with the Next and Prev buttons
    //channel == 1 -> Next channel
    //channel == 2 -> Previous channel
    async channelSwitch(channel: number) {
        if(Active == 1) {
            if (Channel_global == 9 && channel == 1) {
                Channel_global = 0;
            }
            else if (channel == 1) {
                Channel_global++;
            }
            if ((Channel_global == 0 || Channel_global == null) && channel == 2) {
                Channel_global = 9;
            }
            else if (channel == 2 && Channel_global >= 1) {
                Channel_global--;
            }
        }  
    }

    //Volume changing with the Volume + and Volume - buttons
    //volume == 1 -> Volume raise
    //volume == 2 -> Volume sink
    async volumeSwitch(volume: number) {
        if (Active == 1) {
            if (volume == 1 && Volume_global < 100) {
                Volume_global++;
            }
            if (volume == 2 && Volume_global > 0) {
                Volume_global--;
            }
        }
    }

    async channelNumInput(channel:number) {
        if (Active == 1) {
            Channel_global = channel;
        }
    }   
}
