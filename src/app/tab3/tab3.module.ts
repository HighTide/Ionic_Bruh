import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { PopoverPageLamp } from './popover/tab3.popover.lamp';
import { PopoverPageWindow } from './popover/tab3.popover.window';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
      RouterModule.forChild([{ path: '', component: Tab3Page }]),
      RouterModule.forChild([{ path: '', component: PopoverPageLamp }]),
      RouterModule.forChild([{ path: '', component: PopoverPageWindow }])
    ],

    declarations: [Tab3Page, PopoverPageLamp, PopoverPageWindow]
})

export class Tab3PageModule { }
export class PopoverPageLampModule { }
export class PopoverPageWindowModule { }
