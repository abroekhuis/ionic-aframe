import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

declare var cordova;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    androidReady = false;
    iosReady = false;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private androidPermissions: AndroidPermissions) {
        this.platform.ready().then((readySource) => {
            console.log('Platform ready from', readySource);
            // Platform now ready, execute any required native code
            console.log('am i doing something?');

            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
                result => (this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)),
                err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
            );

            // var pc = new cordova.plugins.iosrtc.RTCPeerConnection({
            //     iceServers: []
            // });

            if (this.platform.is('ios')) {
                cordova.plugins.iosrtc.registerGlobals();
            }

            // navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            //     console.log(stream);
            //     this.video.nativeElement.src = window.URL.createObjectURL(stream);
            //     this.video.nativeElement.play();
            // });


            //
            // navigator.getUserMedia({audio: true, video: true}, function(stream) {
            //     console.log(stream);
            // }, function(error) {
            //     console.log(error);
            // });
            // .then(stream => {
            //     console.log(stream);
                //         this.video.nativeElement.src = window.URL.createObjectURL(stream);
                //         this.video.nativeElement.play();
            // });

            console.log('nav' + navigator.mediaDevices);
            this.splashScreen.hide();

            if (this.platform.is('ios')) {
                this.iosReady = true;
            } else {
                this.androidReady = true;
            }
        });
    }
}
