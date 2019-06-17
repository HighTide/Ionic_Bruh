import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3Page } from './tab3.page';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { ModalController, AngularDelegate } from '@ionic/angular';

describe('Tab3Page', () => {
    let component: Tab3Page;
    let fixture: ComponentFixture<Tab3Page>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Tab3Page],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                CameraPreview,
                ModalController,
                AngularDelegate
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Tab3Page);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
