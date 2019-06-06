import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { ModalPageBedComponent } from '../modal/modal.bed';
import { ModalPageTvComponent } from '../modal/modal.tv';
import { ModalPageLampComponent } from '../modal/modal.lamp';
import { ModalPageFridgeComponent } from '../modal/modal.fridge';
import { ModalPageFanComponent } from '../modal/modal.fan';
import { ModalPageWindowComponent } from '../modal/modal.window';

@NgModule({
    imports: [
    ],
    declarations: [
    ],
    exports: [
        ModalPageBedComponent,
        ModalPageFanComponent,
        ModalPageFridgeComponent,
        ModalPageLampComponent,
        ModalPageTvComponent,
        ModalPageWindowComponent
    ]
})

export class SharedModalModule {}
