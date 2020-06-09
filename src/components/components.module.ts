import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { ComNameComponent } from './com-name/com-name';
import {IonicModule} from "ionic-angular";
import {CommonModule} from "@angular/common";
@NgModule({
	declarations: [
	  ComNameComponent
  ],
	imports: [
    CommonModule,
    IonicModule,
  ],
	exports: [
	  ComNameComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
