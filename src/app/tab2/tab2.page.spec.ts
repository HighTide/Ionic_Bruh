import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2Page } from './tab2.page';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';

describe('Tab2Page', () => {
    let component: Tab2Page;
    let fixture: ComponentFixture<Tab2Page>;
    let cameraPreview: CameraPreview; 

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Tab2Page],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Tab2Page);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
