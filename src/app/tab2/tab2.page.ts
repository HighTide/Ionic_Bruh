import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import {ModalPageBedComponent} from '../modal/modal.bed';
import {ModalPageWindowComponent} from '../modal/modal.window';
import {ModalPageFanComponent} from '../modal/modal.fan';
import {ModalPageLampComponent} from '../modal/modal.lamp';
import {ModalPageFridgeComponent} from '../modal/modal.fridge';
import {ModalPageTvComponent} from '../modal/modal.tv';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    act: boolean;

    constructor(public modalController: ModalController, public toastController: ToastController) {
        this.act = false;
    }

    async presentModal(obj) {

        // let obj = "Bed";
        let cmp = null;

        switch (obj) {
            case 'Fan'.toString(): {
                cmp = ModalPageFanComponent;
                break;
            }
            case 'Window'.toString(): {
                cmp = ModalPageWindowComponent;
                break;
            }
            case 'Bed'.toString(): {
                cmp = ModalPageBedComponent;
                break;
            }
            case 'Lamp'.toString(): {
                cmp = ModalPageLampComponent;
                break;
            }
            case 'Fridge'.toString(): {
                cmp = ModalPageFridgeComponent;
                break;
            }
            case 'TV'.toString(): {
                cmp = ModalPageTvComponent;
                break;
            }
            default: {
                cmp = false;
            }
        }

        

        if (cmp !== false && this.act == false) {
            const modal = await this.modalController.create({
                component: cmp,
                componentProps: { value: 125 }
            });

            modal.onDidDismiss().then((data) => {
                const isActive = data;
                if (isActive) {
                    this.act = false;
                }
            });

            this.act = true;
            return await modal.present();
        }

    }
}

//    static BoundingBoxCanvas = class {
//        id: string;
//        canvas: any;
//        canvasTX: any;
//        ionContent: any;
//        final: any;

//        constructor(canvas) {
//            this.id = canvas;
//        }

//        update() {
//            this.canvas = document.getElementById(this.id) as HTMLCanvasElement;
//            this.canvasTX = this.canvas.getContext('2d');

//            // Setting size of canvas based on size of ion-content.
//            this.ionContent = document.getElementById('ionContent');
//            this.canvas.width = this.ionContent.offsetWidth;
//            this.canvas.height = this.ionContent.offsetHeight;
//            this.final = null;
//            this.focus(10, 10, 50, 150);


//        }

//        focus(left, top, width, height): any {

//            this.canvasTX.beginPath();
//            this.canvasTX.lineWidth = 5;
//            this.canvasTX.strokeStyle = 'rgba(0,0,0,1)';
//            this.canvasTX.rect(left, top, width, height);
//            this.canvasTX.stroke();
//            this.canvasTX.fillRect(this.test2_x, this.test2_y, 1, 1);
//            this.findDistance((left + width / 2), (top + height / 2));
//        }

//        findDistance(x, y): any {

//            let a = Math.abs((this.canvas.width / 2) - x);
//            console.log("test afstand a: " + a.toString());
//            let b = Math.abs((this.canvas.height /2) - y);
//            console.log("test afstand b: " + b.toString());
//            let c = (Math.pow(a, 2) + Math.pow(b, 2));
//            c = Math.sqrt(c);
//            console.log("test schuine zijde: " + c.toString());

//            if (this.final == null || this.final > c) {
//                this.final = c;
//            }
//            console.log("test waarde final: " + this.final.toString());
            
//        }
//    };

//    BoundingBox = new Tab2Page.BoundingBoxCanvas('BoundingBoxCanvas');

//    ionViewWillEnter() {
//        console.log('Entering Tab2');
//        this.BoundingBox.update();
//    }
//}