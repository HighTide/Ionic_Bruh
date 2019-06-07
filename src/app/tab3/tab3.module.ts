import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { ModalPageBedComponent } from '../modal/modal.bed';
import { ModalPageTvComponent } from '../modal/modal.tv';
import { ModalPageLampComponent } from '../modal/modal.lamp';
import { ModalPageFridgeComponent } from '../modal/modal.fridge';
import { ModalPageFanComponent } from '../modal/modal.fan';
import { ModalPageWindowComponent } from '../modal/modal.window';

import {SharedModalModule} from '../modal/modal.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    SharedModalModule
  ],
  declarations: [
      Tab3Page,
  ]
})
export class Tab3PageModule {}
