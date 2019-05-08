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

            // var pc = new cordova.plugins.iosrtc.RTCPeerConnection({
            //     iceServers: []
            // });

            cordova.plugins.iosrtc.registerGlobals();

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
            // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            //     navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            //         console.log(stream);
            //         this.video.nativeElement.src = window.URL.createObjectURL(stream);
            //         this.video.nativeElement.play();
            //     });
            // }

            this.splashScreen.hide();
            this.ready = true;
        });
    }

    @ViewChild('video')
    public video: ElementRef;

    // public getMediaStream(): Promise<MediaStream> {
    //     if (!this.mediaStream) {
    //         return navigator.mediaDevices
    //             .getUserMedia({
    //                 audio: true,
    //                 video: true
    //             })
    //             .then((stream: MediaStream) => {
    //                 return Promise.resolve(stream);
    //             })
    //             .catch((err: MediaStreamError) => {
    //                 console.error('Error accessing the hardware:', err);
    //                 return Promise.reject(err);
    //             });
    //     } else {
    //         return Promise.resolve(this.mediaStream);
    //     }
    // }
    //
    // public getVideoStreamURL() {
    //   return this.getMediaStream();
    // }

    // public ngAfterViewInit() {
    //     console.log("am i doing something?");
    //     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    //         navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
    //             console.log(stream);
    //             this.video.nativeElement.src = window.URL.createObjectURL(stream);
    //             this.video.nativeElement.play();
    //         });
    //     }
    // }

}
