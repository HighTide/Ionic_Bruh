import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { Camera } from '@ionic-native/camera/ngx';

describe('AppComponent', () => {

    let statusBarSpy, splashScreenSpy, platformReadySpy, platformSpy, fixture, app;

    beforeEach(async(() => {
        statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
        splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
        platformReadySpy = Promise.resolve();
        platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });

        TestBed.configureTestingModule({
            declarations: [AppComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: StatusBar, useValue: statusBarSpy },
                { provide: SplashScreen, useValue: splashScreenSpy },
                { provide: Platform, useValue: platformSpy },
                { provide: Camera },
                { provide: CameraPreview }
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(app).toBeTruthy();
    });

    it('should initialize the app', async () => {
        expect(platformSpy.ready).toHaveBeenCalled();
        await platformReadySpy;
        expect(statusBarSpy.styleDefault).toHaveBeenCalled();
        expect(splashScreenSpy.hide).toHaveBeenCalled();
    });

    //Testcase #1 "Check if the application is able to use the camera
    it('should be able to use the camera', () => {
        expect(Camera).toHaveBeenCalled();
    });

    //Testcase #2 "Check if the application retrieves a frame"

    //Testcase #3 "Check if one object is detected by the application within the specified frame"

    //Testcase #4 "Check if there is no object detected by the application within the specified frame"

    //Testcase #5 "Check if the image has been sent to the image processing software"

    //Testcase #6 "Check if the frame filters the tags, which contains the recognized objects of the uploaded frames"

    //Testcase #7 "Check if the application is able to detect a lamp that is on"

    //Testcase #8 "Check if the application is able to detect a lamp that is off"

    //Testcase #9 "Check if the application gives a pop-up for a lamp after the application detects the lamp"


    // TODO: add more tests!

});
