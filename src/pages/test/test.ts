import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  params: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params = navParams.get('params');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
