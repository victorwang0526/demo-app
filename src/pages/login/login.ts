import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {UserProvider} from "../../providers/user-provider";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: string = '';
  password: string = '';
  deviceId: string = '';

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public userService: UserProvider,
              public loadingController: LoadingController,
              private storage: Storage) {

  }

  async login() {
    if(!this.username || !this.password) {
      this.alertCtrl.create({title: '请输入用户名密码'}).present({});
      return;
    }
    const loading = await this.loadingController.create({});
    await loading.present();
    const res = await this.userService.login(this.username, this.password, this.deviceId);
    await loading.dismiss();
    if(res.code != 0) {
      this.alertCtrl.create({title: res.msg}).present({});
      return;
    }
    localStorage.setItem('token', res.data.token);
    this.getUserInfo();
  }

  async getUserInfo() {
    const u = await this.userService.getUserInfo();
    await this.storage.set('user', u);
    await this.navCtrl.setRoot(HomePage);
  }

}
