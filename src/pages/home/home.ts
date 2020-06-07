import {Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {Keyboard} from "@ionic-native/keyboard";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  bc: string = '';
  @ViewChild('inputToFocus') inputToFocus;

  constructor(public navCtrl: NavController,
              private barcodeScanner: BarcodeScanner,
              private keyboard: Keyboard) {
    console.log('1');

  }
  ionViewDidEnter()
  {
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
}
