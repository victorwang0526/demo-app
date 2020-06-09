import {Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * Generated class for the ComNameComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'com-name',
  templateUrl: 'com-name.html'
})
export class ComNameComponent {

  // 双向绑定1
  textValue: string;
  // 双向绑定2
  @Output() textChange: EventEmitter<any> = new EventEmitter<any>();
  // 双向绑定3
  @Input()
  get text() {
    return this.textValue;
  }
  // 双向绑定4
  set text(v) {
    this.textValue = v;
    this.textChange.emit(this.textValue);
  }

  // 双向绑定5
  inputChange(e) {
    this.text = e.value;
  }

  constructor() {
    console.log('Hello ComNameComponent Component');
  }

}
