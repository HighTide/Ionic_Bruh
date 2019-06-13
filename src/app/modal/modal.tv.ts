import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Console } from '@angular/core/src/console';



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
    activationg: boolean;
    volumeg: number;
    channelg: number;

    constructor(private ctrl: ModalController, private ctrl_t: ToastController) {
        this.channelg = 0;
        this.volumeg = 10;
    }

    async close() {
        this.ctrl.dismiss();
    }

    //Tv activation
    async activationTV() {
        if (this.activationg == null || this.activationg == false) {
            const toast = await this.ctrl_t.create({
                message: 'Tv turned on.',
                duration: 2000
            });
            this.activationg = true;
            toast.present();
        }
        else {
            const toast = await this.ctrl_t.create({
                message: 'Tv turned off.',
                duration: 2000
            });
            this.activationg = false;
            toast.present();
        }
    }

    //Channel Switching with the Next and Prev buttons
    async channelSwitch(channel: number) {
        if (this.activationg == null || this.activationg == false) {
            const toast = await this.ctrl_t.create({
                message: 'The tv is off, turn it on',
                duration: 2000,
            });
            toast.present();
        }
        else {
            if (this.channelg == 100 && channel == 1) {
                this.channelg = 0;
                const toast = await this.ctrl_t.create({
                    message: 'Channel set to ' + this.channelg.toString(),
                    duration: 2000
                });
                toast.present();
            }
            else if (channel == 1) {
                this.channelg++;
                const toast = await this.ctrl_t.create({
                    message: 'Channel set to ' + this.channelg.toString(),
                    duration: 2000
                });
                toast.present();
            }
            if ((this.channelg == 0 || this.channelg == null) && channel == 2) {
                this.channelg = 9;
                const toast = await this.ctrl_t.create({
                    message: 'Channel set to ' + this.channelg.toString(),
                    duration: 2000
                });
                toast.present();
            }
            else if (channel == 2 && this.channelg >= 1) {
                this.channelg--;
                const toast = await this.ctrl_t.create({
                    message: 'Channel set to ' + this.channelg.toString(),
                    duration: 2000
                });
                toast.present();
            }
        }  
    }

    //Volume changing with the Volume + and Volume - buttons
    async volumeSwitch(volume: number) {
        if (this.activationg == null || this.activationg == false) {
            const toast = await this.ctrl_t.create({
                message: 'The tv is off, turn it on',
                duration: 2000,
            });
            toast.present();
        }
        else {
            if (this.volumeg == 100 && volume == 1) {
                const toast = await this.ctrl_t.create({
                    message: 'Maximum volume reached',
                    duration: 2000
                });
                toast.present();
            }
            else if (volume == 1) {
                this.volumeg++;
                const toast = await this.ctrl_t.create({
                    message: 'Volume set to ' + this.volumeg.toString(),
                    duration: 2000
                });
                toast.present();
            }
            if ((this.volumeg == 0 || this.volumeg == null) && volume == 2) {
                const toast = await this.ctrl_t.create({
                    message: 'Minimum volume reached',
                    duration: 2000
                });
                toast.present();
            }
            else if (volume == 2 && this.volumeg >= 1) {
                this.volumeg--;
                const toast = await this.ctrl_t.create({
                    message: 'Volume set to ' + this.volumeg.toString(),
                    duration: 2000
                });
                toast.present();
            }
        }
    }

    async channelNumInput(channel:number) {

        if (this.activationg == null || this.activationg == false) {
            const toast = await this.ctrl_t.create({
                message: 'The tv is off, turn it on',
                duration: 2000,
            });
            toast.present();
        }
        else {
            this.channelg = channel;
            const toast = await this.ctrl_t.create({
                message: 'Channel set to ' + this.channelg.toString(),
                duration: 2000
            });
            toast.present();
        }

    }
    
}
