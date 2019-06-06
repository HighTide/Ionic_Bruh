import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ModalPageBed } from './modal/tab3.modal.bed';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
      RouterModule.forChild([{ path: '', component: Tab3Page }]),
      RouterModule.forChild([{ path: '', component: ModalPageBed }])
  ],
  declarations: [Tab3Page, ModalPageBed]
})
export class Tab3PageModule {}
