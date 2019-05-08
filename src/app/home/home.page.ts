import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

declare var cordova;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    ready = false;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen) {
        this.platform.ready().then((readySource) => {
            console.log('Platform ready from', readySource);
            // Platform now ready, execute any required native code
            console.log('am i doing something?');
            cordova.plugins.iosrtc.registerGlobals();
            console.log('nav' + navigator.mediaDevices);
            this.splashScreen.hide();
            this.ready = true;
        });
    }
}
