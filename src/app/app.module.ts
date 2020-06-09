import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {Keyboard} from "@ionic-native/keyboard";
import {HideKeyboardModule} from "hide-keyboard";
import {LoginPage} from "../pages/login/login";
import {InterceptorModule} from "../providers/interceptor.module";
import {PipesModule} from "../pipes/pipes.module";
import {HttpClientModule} from "@angular/common/http";
import {UserProvider} from "../providers/user-provider";
import {IonicStorageModule} from "@ionic/storage";
import {ComponentsModule} from "../components/components.module";
import {TestPage} from "../pages/test/test";

const pages = [

  HomePage,

  LoginPage,
  TestPage,
];

@NgModule({
  declarations: [
    MyApp,
    [...pages]
  ],
  imports: [
    HttpClientModule,
    InterceptorModule,
    BrowserModule,
    ComponentsModule,
    PipesModule,
    HideKeyboardModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      iconMode: 'ios',
      mode: 'ios',
      pageTransition: 'ios-transition'
    }),
    IonicStorageModule.forRoot(),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    [...pages]
  ],
  providers: [
    StatusBar,
    BarcodeScanner,
    Keyboard,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    UserProvider
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
