import {Component, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {UserVo} from "../../models/user-vo";
import {Storage} from "@ionic/storage";
import {LoginPage} from "../login/login";
import {TestPage} from "../test/test";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  bc: string = '';
  @ViewChild('inputToFocus') inputToFocus;

  user: UserVo = null;

  text: string = '';

  constructor(public navCtrl: NavController,
              private barcodeScanner: BarcodeScanner,
              private storage: Storage) {

  }
  ionViewDidEnter() {
    this.storage.get('user').then(u => {
      this.user = u;
    });

    setTimeout(() => {
      this.inputToFocus.setFocus();
    },1000)
  }

  openScan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.bc = JSON.stringify(barcodeData);
    }).catch(err => {
      console.log('Error', err);
    });
  }

  logout() {
    this.storage.clear().then(() => {
      this.navCtrl.setRoot(LoginPage, {});
    })
  }

  openTestPage() {
    this.navCtrl.push(TestPage, {
      params: {
        a: 1,
        b: 2
      }
    })
  }
}
