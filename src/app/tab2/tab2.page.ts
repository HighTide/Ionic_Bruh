import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import {ModalPageBedComponent} from '../modal/modal.bed';
import {ModalPageWindowComponent} from '../modal/modal.window';
import {ModalPageFanComponent} from '../modal/modal.fan';
import {ModalPageLampComponent} from '../modal/modal.lamp';
import {ModalPageFridgeComponent} from '../modal/modal.fridge';
import {ModalPageTvComponent} from '../modal/modal.tv';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public modalController: ModalController, public toastController: ToastController) { }

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

    if (cmp !== false) {
      const modal = await this.modalController.create({
        component: cmp,
        componentProps: { value: 125 }
      });
      return await modal.present();
    }

  }
}

