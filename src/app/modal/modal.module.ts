import { NgModule, Component } from '@angular/core';
import { CommonModule} from '@angular/common';

import { ModalPageBedComponent } from '../modal/modal.bed';
import { ModalPageTvComponent } from '../modal/modal.tv';
import { ModalPageLampComponent } from '../modal/modal.lamp';
import { ModalPageFridgeComponent } from '../modal/modal.fridge';
import { ModalPageFanComponent } from '../modal/modal.fan';
import { ModalPageWindowComponent } from '../modal/modal.window';

import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';


@NgModule({
    imports: [
        IonicModule.forRoot()
    ],
    declarations: [
        ModalPageBedComponent,
        ModalPageFanComponent,
        ModalPageFridgeComponent,
        ModalPageLampComponent,
        ModalPageTvComponent,
        ModalPageWindowComponent

    ],
    exports: [
        ModalPageBedComponent,
        ModalPageFanComponent,
        ModalPageFridgeComponent,
        ModalPageLampComponent,
        ModalPageTvComponent,
        ModalPageWindowComponent
    ],
    entryComponents: [
        ModalPageBedComponent,
        ModalPageFanComponent,
        ModalPageFridgeComponent,
        ModalPageLampComponent,
        ModalPageTvComponent,
        ModalPageWindowComponent
    ]
})

export class SharedModalModule {}
